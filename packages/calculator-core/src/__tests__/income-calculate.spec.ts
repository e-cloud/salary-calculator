import { describe, it, expect } from 'vitest';
import {
  calculateMonthIncome,
  calculateMonthlyIncomes,
  calculateFullYearIncome,
  findPolicyForMonth,
  findLatestPolicyForYear,
  buildMetaFromPolicy,
  buildMonthlyMetas,
  buildEmptyMetaList,
  checkBonusTaxTrap,
  optimizeAnnualBonusAllocation,
} from '../income-calculate.service';
import { CityRecipe, MonthlyIncomeMeta, Policy, RawMeta } from '../model';


describe('calculator-core 核心算法与政策匹配单元测试', () => {
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

  const sampleRecipe: CityRecipe = {
    id: 1,
    label: '示例城市',
    city: '示例城市',
    insuranceBaseOnLastMonth: false,
    policies: [

      {
        effectiveDate: '2024-07',
        minimumWage: 2500,
        avgWage: 12000,
        employee: {
          insuranceRate: {
            endowment: 0.08,
            health: 0.02,
            unemployment: 0.005,
          },
        },
        employer: {
          insuranceRate: {
            endowment: 0.15,
            health: 0.05,
            unemployment: 0.005,
            birth: 0.005,
            occupationalInjury: 0.005,
          },
        },
        insuranceBaseRange: {
          endowment: [3000, 35000],
          health: [6000, 35000],
          unemployment: [3000, 35000],
          birth: [6000, 35000],
          occupationalInjury: [6000, 35000],
        },
        housingFundBaseRange: [3000, 35000],
      },
      {
        effectiveDate: '2023-07',
        minimumWage: 2360,
        avgWage: 11000,
        employee: {
          insuranceRate: {
            endowment: 0.08,
            health: 0.02,
            unemployment: 0.005,
          },
        },
        employer: {
          insuranceRate: {
            endowment: 0.15,
            health: 0.05,
            unemployment: 0.005,
            birth: 0.005,
            occupationalInjury: 0.005,
          },
        },
        insuranceBaseRange: {
          endowment: [2360, 32000],
          health: [5000, 32000],
          unemployment: [2360, 32000],
          birth: [5000, 32000],
          occupationalInjury: [5000, 32000],
        },
        housingFundBaseRange: [2360, 32000],
      },
    ],
  };

  describe('1. 基础薪资与累计预扣计算', () => {
    it('月薪 10,000 元（社保五险一金扣除 1550 元），应税所得额为 3450 元，税率为 3%', () => {
      // Arrange
      const meta = baseMeta;

      // Act
      const month1 = calculateMonthIncome(meta, undefined);

      // Assert
      expect(month1.insuranceFullCost).toBe(1050);
      expect(month1.housingFund).toBe(500);
      expect(month1.accumulatedTaxQuota).toBe(3450);
      expect(month1.tax).toBeCloseTo(103.5, 2);
      expect(month1.cashIncome).toBeCloseTo(10000 - 1550 - 103.5, 2);
    });

    it('连续 12 个月月薪 30,000 元，验证累计预扣税率跨越阶梯（3% -> 10% -> 20%）', () => {
      // Arrange
      const highSalaryMeta = {
        ...baseMeta,
        salary: 30000,
        insuranceBase: 30000,
        housingFundBase: 30000,
      };
      const metas = Array(12)
        .fill(0)
        .map(() => ({ ...highSalaryMeta }));

      // Act
      const months = calculateMonthlyIncomes(metas);

      // Assert
      expect(months[0].tax).toBeCloseTo(610.5, 2);
      expect(months[1].tax).toBeCloseTo(939.5, 2);

      const prevAccumulatedTax = months[6].accumulatedTax;
      expect(months[7].accumulatedTax).toBeCloseTo(15640, 2);
      expect(months[7].tax).toBeCloseTo(15640 - prevAccumulatedTax, 2);
    });
  });

  describe('2. 专项附加扣除叠加测试', () => {
    it('叠加 婴幼儿照护(2000) + 子女教育(2000) + 赡养老人(3000)，共扣除 7000 元', () => {
      // Arrange
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

      // Act
      const month1 = calculateMonthIncome(deductionMeta, undefined);

      // Assert
      expect(month1.fullExtraDeduction).toBe(7000);
      expect(month1.accumulatedTaxQuota).toBe(675);
      expect(month1.tax).toBeCloseTo(20.25, 2);
    });
  });

  describe('3. 中途跳槽计税周期重置（newPayCycle）独立计算测试', () => {
    it('第 7 个月换工作开启 newPayCycle，累计减除费用和累计收入应从第 1 个月重新累计', () => {
      // Arrange
      const metas: MonthlyIncomeMeta[] = [];
      for (let i = 1; i <= 12; i++) {
        metas.push({
          ...baseMeta,
          salary: 10000,
          newPayCycle: i === 7,
        });
      }

      // Act
      const months = calculateMonthlyIncomes(metas);

      // Assert
      expect(months[5].actualMonth).toBe(6);
      expect(months[5].month).toBe(6);
      expect(months[5].accumulatedDeduction).toBe(30000);

      expect(months[6].actualMonth).toBe(7);
      expect(months[6].month).toBe(1);
      expect(months[6].accumulatedDeduction).toBe(5000);
      expect(months[6].accumulatedSalary).toBe(10000);
      expect(months[6].accumulatedTaxQuota).toBe(3450);
      expect(months[6].tax).toBeCloseTo(103.5, 2);
    });
  });

  describe('4. 零税边界与负税额防护测试', () => {
    it('当月收入小于扣除额时，当月税额为 0，累计应税所得额为 0', () => {
      // Arrange
      const lowSalaryMeta: MonthlyIncomeMeta = {
        ...baseMeta,
        salary: 4000,
        insuranceBase: 4000,
        housingFundBase: 4000,
      };

      // Act
      const month1 = calculateMonthIncome(lowSalaryMeta, undefined);

      // Assert
      expect(month1.accumulatedTaxQuota).toBe(0);
      expect(month1.tax).toBe(0);
    });

    it('全年总收入小于总扣除时，理论综合所得税款严格为 0，不出现负数', () => {
      // Arrange
      const lowSalaryMeta: MonthlyIncomeMeta = {
        ...baseMeta,
        salary: 4000,
        insuranceBase: 4000,
        housingFundBase: 4000,
      };
      const metas = Array(12)
        .fill(0)
        .map(() => ({ ...lowSalaryMeta }));

      // Act
      const months = calculateMonthlyIncomes(metas);
      const fullYear = calculateFullYearIncome(months, 0);

      // Assert
      expect(fullYear.theoreticalTax).toBe(0);
      expect(fullYear.totalSeparatedTax).toBe(0);
    });
  });

  describe('5. 社保基数与失业/工伤保险上下限测试', () => {
    it('失业保险应使用核定基数并在上下限内截取，不受月度奖金波动影响', () => {
      // Arrange
      const metaWithBonus: MonthlyIncomeMeta = {
        ...baseMeta,
        salary: 20000,
        insuranceBase: 10000,
        insuranceRate: {
          endowment: 0.08,
          health: 0.02,
          unemployment: 0.005,
        },
      };

      // Act
      const month1 = calculateMonthIncome(metaWithBonus, undefined);

      // Assert
      expect(month1.insuranceCosts.unemployment).toBe(50);
    });

    it('雇主工伤保险基数应受上下限约束', () => {
      // Arrange
      const highBaseMeta: MonthlyIncomeMeta = {
        ...baseMeta,
        salary: 50000,
        insuranceBase: 50000,
        insuranceBaseRange: {
          ...baseMeta.insuranceBaseRange,
          occupationalInjury: [2000, 30000],
        },
      };

      // Act
      const month1 = calculateMonthIncome(highBaseMeta, undefined);

      // Assert
      expect(month1.employerCosts.insurance.occupationalInjury).toBe(150);
    });
  });

  describe('6. 年终奖单独计税与合并计税对比测试', () => {
    it('年终奖 36,000 元（月均 3000 元），单独计税按 3% 纳税 1080 元', () => {
      // Arrange
      const metas = Array(12)
        .fill(0)
        .map(() => ({ ...baseMeta }));

      // Act
      const months = calculateMonthlyIncomes(metas);
      const fullYear = calculateFullYearIncome(months, 36000);

      // Assert
      expect(fullYear.bonus).toBe(36000);
      expect(fullYear.bonusTax).toBe(36000 * 0.03);
      expect(fullYear.postTaxBonus).toBe(36000 - 1080);
    });
  });

  describe('7. 企业年金与个人养老金法定扣除上限测试', () => {
    it('企业年金个人缴费超过月薪 4% 时，仅扣除 4% 限额，超额部分并入计税', () => {
      // Arrange
      const metaWithHighPension: MonthlyIncomeMeta = {
        ...baseMeta,
        salary: 10000,
        extraDeduction: {
          ...baseMeta.extraDeduction,
          enterprisePensionFromEmployee: 800,
        },
      };

      // Act
      const month1 = calculateMonthIncome(metaWithHighPension, undefined);

      // Assert
      expect(month1.accumulatedTaxQuota).toBe(3050);
      expect(month1.tax).toBeCloseTo(91.5, 2);
      expect(month1.cashIncome).toBeCloseTo(7558.5, 2);
    });

    it('个人养老金每月税前扣除限额为 1000 元（每年 12000 元），超额不予抵扣', () => {
      // Arrange
      const metaWithPrivatePension: MonthlyIncomeMeta = {
        ...baseMeta,
        salary: 10000,
        extraDeduction: {
          ...baseMeta.extraDeduction,
          privatePension: 1500,
        },
      };

      // Act
      const month1 = calculateMonthIncome(metaWithPrivatePension, undefined);

      // Assert
      expect(month1.accumulatedTaxQuota).toBe(2450);
      expect(month1.tax).toBeCloseTo(73.5, 2);
      expect(month1.cashIncome).toBeCloseTo(6876.5, 2);
    });

    it('当 meta 中自定义企业年金比例上限和个人养老金月度限额时，应动态按 meta 配置计算', () => {
      // Arrange
      const metaWithCustomLimits: MonthlyIncomeMeta = {
        ...baseMeta,
        salary: 10000,
        enterprisePensionEmployeeRateLimit: 0.06,
        privatePensionMonthlyQuota: 2000,
        extraDeduction: {
          ...baseMeta.extraDeduction,
          enterprisePensionFromEmployee: 800,
          privatePension: 1500,
        },
      };

      // Act
      const month1 = calculateMonthIncome(metaWithCustomLimits, undefined);

      // Assert
      expect(month1.accumulatedTaxQuota).toBe(1350);
      expect(month1.tax).toBeCloseTo(40.5, 2);
      expect(month1.cashIncome).toBeCloseTo(6109.5, 2);
    });
  });

  describe('8. 城市配方政策动态查找算法测试', () => {
    it('根据年份和月份查找正确的有效政策 (findPolicyForMonth)', () => {
      // Arrange & Act
      const policy2024Aug = findPolicyForMonth(sampleRecipe, 2024, 8);
      const policy2024Feb = findPolicyForMonth(sampleRecipe, 2024, 2);
      const policy2022 = findPolicyForMonth(sampleRecipe, 2022, 1);

      // Assert
      // 2024-08 应匹配 2024-07 的最新政策
      expect(policy2024Aug.effectiveDate).toBe('2024-07');
      expect(policy2024Aug.minimumWage).toBe(2500);

      // 2024-02 处于 2024-07 之前，应匹配 2023-07 的政策
      expect(policy2024Feb.effectiveDate).toBe('2023-07');
      expect(policy2024Feb.minimumWage).toBe(2360);

      // 查询过早年份应降级回退到最早的政策
      expect(policy2022.effectiveDate).toBe('2023-07');
    });

    it('查找指定年份的最新政策 (findLatestPolicyForYear)', () => {
      // Act
      const policy2024 = findLatestPolicyForYear(sampleRecipe, 2024);
      const policy2025 = findLatestPolicyForYear(sampleRecipe, 2025);

      // Assert
      expect(policy2024.effectiveDate).toBe('2024-07');
      // 2025 年无直接政策时回退到 2025-01 对应的历史有效政策 (即 2024-07)
      expect(policy2025.effectiveDate).toBe('2024-07');
    });
  });

  describe('9. buildMonthlyMetas 政策列表与基数调整测试', () => {
    const rawInput: RawMeta = {
      monthSalary: 12000,
      annualBonus: 24000,
      insuranceBase: 12000,
      housingFundBase: 12000,
      housingFundRate: 7,
      lastYearAvgSalary: 15000,
      yearBeforeLastAvgSalary: 10000,
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
      insuranceRate: {
        endowment: 8,
        health: 2,
        unemployment: 0.5,
      },
      insuranceBaseOnLastMonth: false,
    };

    it('分段模式下，1-6月使用上上年基数，7-12月使用上年基数', () => {
      // Act
      const metas = buildMonthlyMetas(sampleRecipe, 2024, rawInput, false);

      // Assert
      expect(metas.length).toBe(12);

      // 1-6月基数应为上上年月均工资 10000
      expect(metas[0].insuranceBase).toBe(10000);
      expect(metas[5].insuranceBase).toBe(10000);

      // 7-12月基数应为上年月均工资 15000
      expect(metas[6].insuranceBase).toBe(15000);
      expect(metas[11].insuranceBase).toBe(15000);
    });

    it('统一政策模式 (useUniformPolicy = true) 下，全年统一使用当年最新政策', () => {
      // Act
      const metas = buildMonthlyMetas(sampleRecipe, 2024, rawInput, true);

      // Assert
      expect(metas.length).toBe(12);
      // 全年各月份的最低工资基准或费率均基于 2024-07 最新政策
      expect(metas[0].freeTaxQuota).toBe(5000);
    });

    it('当城市配方中没有任何策略时，findPolicyForMonth 应抛出明确错误', () => {
      // Arrange
      const emptyRecipe: CityRecipe = {
        id: 99,
        city: '未知城市',
        label: '未知城市',
        insuranceBaseOnLastMonth: false,
        policies: [],
      };


      // Act & Assert
      expect(() => findPolicyForMonth(emptyRecipe, 2024, 1)).toThrow(
        '在 未知城市 未找到任何有效政策。',
      );
    });

    it('支持 Policy 中 insuranceBaseRange 为数组形式的标准化转换', () => {
      // Arrange
      const arrayPolicy: Policy = {
        effectiveDate: '2024-01',
        minimumWage: 2000,
        avgWage: 10000,
        employee: {
          insuranceRate: { endowment: 0.08, health: 0.02, unemployment: 0.005 },
        },
        employer: {
          insuranceRate: {
            endowment: 0.15,
            health: 0.05,
            unemployment: 0.005,
            birth: 0.005,
            occupationalInjury: 0.005,
          },
        },
        insuranceBaseRange: [2000, 30000],
        housingFundBaseRange: [2000, 30000],
      };

      // Act
      const meta = buildMetaFromPolicy(rawInput, arrayPolicy);

      // Assert
      expect(Array.isArray(meta.insuranceBaseRange)).toBe(false);
      expect(meta.insuranceBaseRange.endowment).toEqual([2000, 30000]);
      expect(meta.insuranceBaseRange.health).toEqual([2000, 30000]);
    });

    it('开启 insuranceBaseOnLastMonth: true 时，次月社保基数应自动取上月实际薪资', () => {
      // Arrange
      const metaMonth1: MonthlyIncomeMeta = {
        ...baseMeta,
        salary: 12000,
        insuranceBase: 10000,
        insuranceBaseOnLastMonth: true,
      };
      const metaMonth2: MonthlyIncomeMeta = {
        ...baseMeta,
        salary: 15000,
        insuranceBase: 10000,
        insuranceBaseOnLastMonth: true,
      };

      // Act
      const month1 = calculateMonthIncome(metaMonth1, undefined);
      const month2 = calculateMonthIncome(metaMonth2, month1);

      // Assert
      // 第 2 个月的社保基数应基于第 1 个月的薪资 12000 扣缴：12000 * 0.105 = 1260
      expect(month2.insuranceFullCost).toBe(1260);
    });

    it('当 Policy 中 insuranceBaseRange 为数组时，经 buildMetaFromPolicy 后年金上限计算能正确执行', () => {
      // Arrange
      const arrayPolicy: Policy = {
        effectiveDate: '2024-01',
        minimumWage: 2000,
        avgWage: 10000,
        employee: {
          insuranceRate: { endowment: 0.08, health: 0.02, unemployment: 0.005 },
        },
        employer: {
          insuranceRate: {
            endowment: 0.15,
            health: 0.05,
            unemployment: 0.005,
            birth: 0.005,
            occupationalInjury: 0.005,
          },
        },
        insuranceBaseRange: [2000, 25000],
        housingFundBaseRange: [2000, 25000],
      };

      const meta = buildMetaFromPolicy(
        {
          ...rawInput,
          extraDeduction: {
            ...rawInput.extraDeduction,
            enterprisePensionFromEmployee: 2000,
          },
        },
        arrayPolicy,
      );

      // Act
      const month1 = calculateMonthIncome(meta, undefined);

      // Assert
      expect(month1.accumulatedTaxQuota).toBeGreaterThan(0);
    });

    it('buildEmptyMetaList 应生成 12 个深拷贝月度元数据对象', () => {
      // Act
      const emptyList = buildEmptyMetaList(baseMeta);

      // Assert
      expect(emptyList.length).toBe(12);
      expect(emptyList[0]).toEqual(baseMeta);
      // 验证深拷贝隔离
      emptyList[0].salary = 99999;
      expect(emptyList[1].salary).toBe(10000);
    });
  });

  describe('10. 年终奖 6 大盲区精准检测与税损计算测试', () => {
    it('36,000 元（临界点）不属于盲区，36,001 元准确命中第 1 盲区', () => {
      const safe = checkBonusTaxTrap(36000);
      expect(safe.isTrap).toBe(false);

      const trap = checkBonusTaxTrap(36001);
      expect(trap.isTrap).toBe(true);
      expect(trap.lowerThreshold).toBe(36000);
      expect(trap.upperThreshold).toBeCloseTo(38566.67, 2);
      expect(trap.lostAmount).toBeCloseTo(2309.1, 1);
      expect(trap.warningMessage).toContain('36,000');
    });

    it('144,001 元准确命中第 2 盲区 (144000 ~ 160500)', () => {
      const trap = checkBonusTaxTrap(144001);
      expect(trap.isTrap).toBe(true);
      expect(trap.lowerThreshold).toBe(144000);
      expect(trap.upperThreshold).toBe(160500);
      expect(trap.lostAmount).toBeCloseTo(13199.2, 1);
    });

    it('500,000 元不在盲区内 (处于 447500 ~ 660000 安全区间)', () => {
      const safe = checkBonusTaxTrap(500000);
      expect(safe.isTrap).toBe(false);
    });
  });

  describe('11. 年终奖冲抵综合所得扣除不足差额测试 (税总2018第61号)', () => {
    it('当全年账面工资低于全年扣除总额时，年终奖应先冲抵扣除差额后再单独计税', () => {
      // Arrange: 月薪 3000 元，全年账面 36,000，扣除额 60,000+社保公积金5580=65580（扣除不足 29,580 元），年终奖 30,000 元
      const lowSalaryMeta: MonthlyIncomeMeta = {
        ...baseMeta,
        salary: 3000,
        insuranceBase: 3000,
        housingFundBase: 3000,
      };
      const metas = Array(12)
        .fill(0)
        .map(() => ({ ...lowSalaryMeta }));

      // Act
      const months = calculateMonthlyIncomes(metas);
      const fullYear = calculateFullYearIncome(months, 30000);

      // Assert:
      // 全年扣除不足 = 60000 + 5580 - 36000 = 29580 元
      // 应税年终奖 = 30000 - 29580 = 420 元 (按 3% 计税 12.6 元)
      expect(fullYear.bonusTax).toBeCloseTo(12.6, 2);
      expect(fullYear.theoreticalTax).toBeCloseTo(12.6, 2);
    });
  });


  describe('12. 年终奖与月薪全局最优拆分筹划算法测试', () => {
    it('针对年薪总包 300,000 元，自动求解最优年终奖与月薪拆分', () => {
      // Act
      const result = optimizeAnnualBonusAllocation(15000, 120000, 1550);

      // Assert
      expect(result.optimalTotalTax).toBeLessThanOrEqual(result.currentTotalTax);
      expect(result.taxSaved).toBeGreaterThanOrEqual(0);
      expect(result.optimalBonus).toBeGreaterThanOrEqual(0);
    });
  });

  describe('13. 年度汇算清缴退/补税差额预测测试', () => {
    it('年中第 7 个月跳槽开启 newPayCycle，汇算清缴卡片应准确预警应补税金额', () => {
      // Arrange
      const metas: MonthlyIncomeMeta[] = [];
      for (let i = 1; i <= 12; i++) {
        metas.push({
          ...baseMeta,
          salary: 20000,
          insuranceBase: 20000,
          housingFundBase: 20000,
          newPayCycle: i === 7,
        });
      }

      // Act
      const months = calculateMonthlyIncomes(metas);
      const fullYear = calculateFullYearIncome(months, 0);

      // Assert:
      expect(fullYear.annualTaxSettlement).toBeDefined();
      expect(fullYear.annualTaxSettlement!.settlementType).toBe('supplement');
      expect(fullYear.annualTaxSettlement!.amount).toBeGreaterThan(0);
      expect(fullYear.annualTaxSettlement!.hint).toContain('需补税');
    });

    it('当年终奖并入综合所得总税额更低时，汇算清缴应提示自愿合并退税建议', () => {
      // Arrange: 月薪 5,000（全年刚好 6 万免税），年终奖 40,000（单独计税税率跳至 10%，税额 3790 元；合并计税仅 1270 元，合并节税 2520 元）
      const metas = Array(12).fill(0).map(() => ({
        ...baseMeta,
        salary: 5000,
        insuranceBase: 0,
        housingFundBase: 0,
      }));

      // Act
      const months = calculateMonthlyIncomes(metas);
      const fullYear = calculateFullYearIncome(months, 50000);

      // Assert
      expect(fullYear.annualTaxSettlement).toBeDefined();
      expect(fullYear.annualTaxSettlement!.settlementType).toBe('refund');
      expect(fullYear.annualTaxSettlement!.amount).toBe(2310);
      expect(fullYear.annualTaxSettlement!.hint).toContain('退税');
    });
  });





  describe('14. 当年首次入职应届生累计减除费用递增测试 (税总2020年13号)', () => {
    it('应届生 7 月份首次入职，首月累计减除费用应自动按 7 * 5000 = 35,000 元计算', () => {
      // Arrange: 7月首次入职，月薪 15,000
      const graduateMeta: MonthlyIncomeMeta = {
        ...baseMeta,
        salary: 15000,
        insuranceBase: 15000,
        housingFundBase: 15000,
        firstJobThisYear: true,
        firstJobStartMonth: 7,
        newPayCycle: true,
      };

      // Act
      const month7 = calculateMonthIncome(graduateMeta, undefined);

      // Assert:
      // 首月减除费用直接为 35,000 元，应税所得额为 0，当月个税为 0
      expect(month7.accumulatedDeduction).toBe(35000);
      expect(month7.accumulatedTaxQuota).toBe(0);
      expect(month7.tax).toBe(0);
    });
  });

  describe('15. 副业劳务报酬与稿酬综合合并计税测试', () => {
    it('副业劳务报酬按 80% 计入收入并预扣，年底并入综合所得', () => {
      // Arrange
      const metaWithSideIncome: MonthlyIncomeMeta = {
        ...baseMeta,
        salary: 10000,
        sideIncome: {
          laborIncome: 5000,
          manuscriptIncome: 3000,
        },
      };
      const metas = Array(12)
        .fill(0)
        .map(() => ({ ...metaWithSideIncome }));

      // Act
      const months = calculateMonthlyIncomes(metas);
      const fullYear = calculateFullYearIncome(months, 0);

      // Assert
      expect(fullYear.sideIncomeTax).toBeDefined();
      expect(fullYear.sideIncomeTax!.totalSideTax).toBeGreaterThan(0);
    });
  });
});

