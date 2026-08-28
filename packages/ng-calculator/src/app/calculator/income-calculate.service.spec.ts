import {
  calculateMonthIncome,
  calculateMonthlyIncomes,
  calculateFullYearIncome,
  MonthlyIncomeMeta,
} from 'calculator-core';

describe('income-calculate.service 核心计算规则测试', () => {
  const baseMeta: MonthlyIncomeMeta = {
    salary: 10000,
    freeTaxQuota: 5000,
    insuranceBase: 10000,
    insuranceBaseOnLastMonth: false,
    insuranceRate: {
      endowment: 0.08,
      health: 0.02,
      unemployment: 0.005,
    },
    housingFundBase: 10000,
    housingFundRate: 0.05,
    extraDeduction: {
      infantCare: 0,
      childEducation: 0,
      continuingEducation: 0,
      seriousMedicalExpense: 0,
      housingLoanInterest: 0,
      renting: 0,
      elderlyCare: 0,
      enterprisePensionFromEmployee: 0,
      enterprisePensionFromEmployer: 0,
      privatePension: 0,
      other: 0,
    },
    annualBonus: 0,
    insuranceBaseRange: {
      endowment: [3000, 30000],
      health: [3000, 30000],
      unemployment: [2000, 30000],
      birth: [3000, 30000],
      occupationalInjury: [2000, 30000],
    },
    housingFundBaseRange: [2000, 30000],
    newPayCycle: false,
    employer: {
      insuranceRate: {
        endowment: 0.15,
        health: 0.05,
        unemployment: 0.005,
        birth: 0.005,
        occupationalInjury: 0.005,
      },
    },
  };

  describe('1. 基础薪资与累计预扣计算', () => {
    it('月薪 10,000 元（社保五险一金扣除 1550 元），应税所得额为 3450 元，税率为 3%', () => {
      const month1 = calculateMonthIncome(baseMeta, undefined);
      // 个人社保: 10000 * (0.08 + 0.02 + 0.005) = 1050
      // 个人公积金: 10000 * 0.05 = 500
      // 专项扣除合计: 1550
      // 免税额: 5000
      // 预扣预缴应税所得额: 10000 - 5000 - 1550 = 3450
      // 个税: 3450 * 0.03 = 103.5
      expect(month1.insuranceFullCost).toBe(1050);
      expect(month1.housingFund).toBe(500);
      expect(month1.accumulatedTaxQuota).toBe(3450);
      expect(month1.tax).toBeCloseTo(103.5, 2);
      expect(month1.cashIncome).toBeCloseTo(10000 - 1550 - 103.5, 2);
    });

    it('连续 12 个月月薪 30,000 元，验证累计预扣税率跨越阶梯（3% -> 10% -> 20%）', () => {
      const highSalaryMeta = {
        ...baseMeta,
        salary: 30000,
        insuranceBase: 30000,
        housingFundBase: 30000,
      };
      const metas = Array(12)
        .fill(0)
        .map(() => ({ ...highSalaryMeta }));
      const months = calculateMonthlyIncomes(metas);

      // 每月五险一金扣除: 30000 * (0.105 + 0.05) = 4650
      // 每月净应税所得额 = 30000 - 5000 - 4650 = 20350
      // 第1个月累计所得 20350 (< 36000)，税率 3%，税额 = 20350 * 0.03 = 610.5
      expect(months[0].tax).toBeCloseTo(610.5, 2);

      // 第2个月累计所得 40700 (> 36000)，进入 10% 阶梯
      // 累计税额 = 40700 * 0.10 - 2520 = 1550
      // 当月税额 = 1550 - 610.5 = 939.5
      expect(months[1].tax).toBeCloseTo(939.5, 2);

      // 第8个月累计所得 20350 * 8 = 162800 (> 144000)，进入 20% 阶梯
      // 累计税额 = 162800 * 0.20 - 16920 = 15640
      const prevAccumulatedTax = months[6].accumulatedTax;
      expect(months[7].accumulatedTax).toBeCloseTo(15640, 2);
      expect(months[7].tax).toBeCloseTo(15640 - prevAccumulatedTax, 2);
    });
  });

  describe('2. 国发〔2023〕14号专项附加扣除叠加测试', () => {
    it('叠加 3岁以下婴幼儿照护(2000) + 子女教育(2000) + 赡养老人(3000)，共扣除 7000 元', () => {
      const deductionMeta: MonthlyIncomeMeta = {
        ...baseMeta,
        salary: 15000,
        insuranceBase: 15000,
        housingFundBase: 15000,
        extraDeduction: {
          ...baseMeta.extraDeduction,
          infantCare: 2000,
          childEducation: 2000,
          elderlyCare: 3000,
        },
      };

      const month1 = calculateMonthIncome(deductionMeta, undefined);
      // 个人社保: 15000 * 0.105 = 1575
      // 个人公积金: 15000 * 0.05 = 750
      // 专项扣除合计: 2325
      // 专项附加扣除合计: 7000
      // 免税额: 5000
      // 总扣除额: 5000 + 2325 + 7000 = 14325
      // 应税所得额: 15000 - 14325 = 675
      // 个税: 675 * 0.03 = 20.25
      expect(month1.fullExtraDeduction).toBe(7000);
      expect(month1.accumulatedTaxQuota).toBe(675);
      expect(month1.tax).toBeCloseTo(20.25, 2);
    });
  });

  describe('3. 中途跳槽计税周期重置（newPayCycle）独立计算测试', () => {
    it('第 7 个月换工作开启 newPayCycle，累计减除费用和累计收入应从第 1 个月重新累计', () => {
      const metas: MonthlyIncomeMeta[] = [];
      for (let i = 1; i <= 12; i++) {
        metas.push({
          ...baseMeta,
          salary: 10000,
          newPayCycle: i === 7, // 第 7 个月换工作
        });
      }

      const months = calculateMonthlyIncomes(metas);

      // 第 6 个月（前雇主最后一个月）：actualMonth = 6, month = 6
      expect(months[5].actualMonth).toBe(6);
      expect(months[5].month).toBe(6);
      expect(months[5].accumulatedDeduction).toBe(30000);

      // 第 7 个月（新雇主首月）：actualMonth = 7, month = 1
      expect(months[6].actualMonth).toBe(7);
      expect(months[6].month).toBe(1);
      // 关键断言：新公司累计减除费用必须是 5,000 元（而不是 35,000 元！）
      expect(months[6].accumulatedDeduction).toBe(5000);
      expect(months[6].accumulatedSalary).toBe(10000);
      // 新公司首月应税所得额 = 10000 - 5000 - 1550 = 3450
      expect(months[6].accumulatedTaxQuota).toBe(3450);
      expect(months[6].tax).toBeCloseTo(103.5, 2);
    });
  });

  describe('4. 零税边界与负税额防护测试', () => {
    it('当月收入小于扣除额时，当月税额为 0，累计应税所得额为 0', () => {
      const lowSalaryMeta: MonthlyIncomeMeta = {
        ...baseMeta,
        salary: 4000,
        insuranceBase: 4000,
        housingFundBase: 4000,
      };

      const month1 = calculateMonthIncome(lowSalaryMeta, undefined);
      expect(month1.accumulatedTaxQuota).toBe(0);
      expect(month1.tax).toBe(0);
    });

    it('全年总收入小于总扣除时，理论综合所得税款严格为 0，不出现负数', () => {
      const lowSalaryMeta: MonthlyIncomeMeta = {
        ...baseMeta,
        salary: 4000,
        insuranceBase: 4000,
        housingFundBase: 4000,
      };
      const metas = Array(12)
        .fill(0)
        .map(() => ({ ...lowSalaryMeta }));
      const months = calculateMonthlyIncomes(metas);
      const fullYear = calculateFullYearIncome(months, 0);

      expect(fullYear.theoreticalTax).toBe(0);
      expect(fullYear.totalSeparatedTax).toBe(0);
    });
  });

  describe('5. 社保基数与失业/工伤保险上下限测试', () => {
    it('失业保险应使用核定基数并在上下限内截取，不受月度奖金波动影响', () => {
      const metaWithBonus: MonthlyIncomeMeta = {
        ...baseMeta,
        salary: 20000, // 当月发奖金导致工资 20000
        insuranceBase: 10000, // 但核定的社保基数为 10000
        insuranceRate: {
          endowment: 0.08,
          health: 0.02,
          unemployment: 0.005,
        },
      };

      const month1 = calculateMonthIncome(metaWithBonus, undefined);
      // 失业保险应按核定基数 10000 * 0.005 = 50 扣缴，而不是按 20000 * 0.005 = 100
      expect(month1.insuranceCosts.unemployment).toBe(50);
    });

    it('雇主工伤保险基数应受上下限约束', () => {
      const highBaseMeta: MonthlyIncomeMeta = {
        ...baseMeta,
        salary: 50000,
        insuranceBase: 50000,
        insuranceBaseRange: {
          ...baseMeta.insuranceBaseRange,
          occupationalInjury: [2000, 30000],
        },
      };

      const month1 = calculateMonthIncome(highBaseMeta, undefined);
      // 雇主工伤保险基数应被截取为 30000: 30000 * 0.005 = 150
      expect(month1.employerCosts.insurance.occupationalInjury).toBe(150);
    });
  });

  describe('6. 年终奖单独计税与合并计税对比测试', () => {
    it('年终奖 36,000 元（月均 3000 元），单独计税按 3% 纳税 1080 元', () => {
      const metas = Array(12)
        .fill(0)
        .map(() => ({ ...baseMeta }));
      const months = calculateMonthlyIncomes(metas);
      const fullYear = calculateFullYearIncome(months, 36000);

      expect(fullYear.bonus).toBe(36000);
      expect(fullYear.bonusTax).toBe(36000 * 0.03); // 1080
      expect(fullYear.postTaxBonus).toBe(36000 - 1080); // 34920
    });
  });

  describe('7. 企业年金与个人养老金法定扣除上限测试', () => {
    it('企业年金个人缴费超过月薪 4% 时，仅扣除 4% 限额，超额部分并入计税', () => {
      const metaWithHighPension: MonthlyIncomeMeta = {
        ...baseMeta,
        salary: 10000,
        extraDeduction: {
          ...baseMeta.extraDeduction,
          enterprisePensionFromEmployee: 800, // 个人缴纳 800 元，超过 4% (400元)
        },
      };

      const month1 = calculateMonthIncome(metaWithHighPension, undefined);
      // 允许税前扣除限额 = 10000 * 0.04 = 400
      // 实际扣除 = 400
      // 应纳税所得额 = 10000 - 5000 (免税额) - 1550 (五险一金) - 400 (年金限额) = 3050 元
      // 税款 = 3050 * 0.03 = 91.5 元
      // 到手现金 = 10000 - 1550 (五险一金) - 91.5 (税) - 800 (年金实际扣减) = 7558.5 元
      expect(month1.accumulatedTaxQuota).toBe(3050);
      expect(month1.tax).toBeCloseTo(91.5, 2);
      expect(month1.cashIncome).toBeCloseTo(7558.5, 2);
    });

    it('个人养老金每月税前扣除限额为 1000 元（每年 12000 元），超额不予抵扣', () => {
      const metaWithPrivatePension: MonthlyIncomeMeta = {
        ...baseMeta,
        salary: 10000,
        extraDeduction: {
          ...baseMeta.extraDeduction,
          privatePension: 1500, // 缴纳 1500 元，超出月度法定限额 1000 元
        },
      };

      const month1 = calculateMonthIncome(metaWithPrivatePension, undefined);
      // 允许税前扣除限额 = 1000 元
      // 应纳税所得额 = 10000 - 5000 - 1550 - 1000 = 2450 元
      // 税款 = 2450 * 0.03 = 73.5 元
      // 到手现金 = 10000 - 1550 (五险一金) - 73.5 (税) - 1500 (个人养老金实际扣款) = 6876.5 元
      expect(month1.accumulatedTaxQuota).toBe(2450);
      expect(month1.tax).toBeCloseTo(73.5, 2);
      expect(month1.cashIncome).toBeCloseTo(6876.5, 2);
    });

    it('当 meta 中自定义企业年金比例上限和个人养老金月度限额时，应动态按 meta 配置计算', () => {
      const metaWithCustomLimits: MonthlyIncomeMeta = {
        ...baseMeta,
        salary: 10000,
        enterprisePensionEmployeeRateLimit: 0.06, // 自定义 6% 上限 (600元)
        privatePensionMonthlyQuota: 2000, // 自定义 2000 元月度限额
        extraDeduction: {
          ...baseMeta.extraDeduction,
          enterprisePensionFromEmployee: 800, // 缴纳 800，允许扣除 600
          privatePension: 1500, // 缴纳 1500，由于上限2000，允许全额扣除 1500
        },
      };

      const month1 = calculateMonthIncome(metaWithCustomLimits, undefined);
      // 扣除额 = 600 (年金) + 1500 (个人养老金) = 2100 元
      // 应税所得额 = 10000 - 5000 (免税额) - 1550 (五险一金) - 2100 (年金+养老金) = 1350 元
      // 税款 = 1350 * 0.03 = 40.5 元
      // 到手现金 = 10000 - 1550 - 40.5 - 800 - 1500 = 6109.5 元
      expect(month1.accumulatedTaxQuota).toBe(1350);
      expect(month1.tax).toBeCloseTo(40.5, 2);
      expect(month1.cashIncome).toBeCloseTo(6109.5, 2);
    });
  });
});
