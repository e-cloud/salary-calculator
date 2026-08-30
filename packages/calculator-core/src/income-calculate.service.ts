/* eslint-disable @typescript-eslint/no-non-null-assertion */

import {
  cloneDeep,
  last,
  mapValues,
  omit,
  sum,
  sumBy,
  values,
} from 'lodash-es';
import {
  BonusTaxTrapRanges,
  TaxRateModel,
  TaxRateTable,
  TaxRateTableForBonus,
} from './consts';
import {
  AnnualTaxSettlement,
  BonusOptimizationResult,
  BonusTaxTrapResult,
  CityRecipe,
  FullYearIncomeInfo,
  MonthlyIncomeInfo,
  MonthlyIncomeMeta,
  MonthlyTaxBracketAnalysis,
  Policy,
  RawMeta,
  TaxBracketTimelineResult,
} from './model';

export function calculateFullYearIncome(
  list: MonthlyIncomeInfo[],
  annualBonus: number,
): FullYearIncomeInfo {
  // 初始化全年收入信息对象
  const full = {
    /** 全年账面工资 */
    bookSalary: sumBy(list, 'salary'),
    /** 全年已预缴税额 */
    prepaidTax: sumBy(list, 'tax'),
    /** 年终奖 */
    bonus: annualBonus,
    employee: {
      endowmentInsurance: 0,
      healthInsurance: 0,
      housingFund: 0,
      supplementaryHousingFund: 0,
      enterprisePension: 0,
      enterprisePensionFull: 0,
      privatePension: 0,
    },
    employerCosts: {
      full: 0,
      insurance: {
        endowment: 0,
        health: 0,
        unemployment: 0,
        birth: 0,
        occupationalInjury: 0,
      },
      housingFund: 0,
      supplementaryHousingFund: 0,
      enterprisePension: 0,
    },
  } as FullYearIncomeInfo;

  /** 全年总收入（含年终奖） */
  full.bookIncome = full.bookSalary + full.bonus;

  /** 全年总扣除（免税额+专项附加扣除+社保+公积金法定税前扣除额） */
  const totalDeduction =
    5000 * 12 +
    sumBy(
      list,
      x =>
        x.fullExtraDeduction +
        x.insuranceFullCost +
        (x.housingFund + (x.supplementaryHousingFund || 0)),
    );

  /**
   * 税法强制规定（税总公告2018年第61号）：
   * 当全年工资扣除不足时，年终奖先冲抵综合所得扣除差额后再单独计税
   */
  const unusedDeduction = Math.max(0, totalDeduction - full.bookSalary);
  full.bonusTax = calculateBonusTax(annualBonus, unusedDeduction);
  full.postTaxBonus = full.bonus - full.bonusTax;

  /** 理论应纳税总额（合并计税） */
  full.theoreticalTax = calculateTax(
    Math.max(full.bookIncome - totalDeduction, 0),
  );
  /** 分开计税应纳税总额 */
  full.totalSeparatedTax =
    calculateTax(Math.max(full.bookSalary - totalDeduction, 0)) + full.bonusTax;


  /** 全年税后工资 */
  full.postTaxSalary = sumBy(list, 'cashIncome');
  /** 全年税后总收入（合并计税） */
  full.taxedIncome = full.bookIncome - full.theoreticalTax;
  /** 全年税后总收入（分开计税） */
  full.taxedIncomeDeprecated = full.bookIncome - full.totalSeparatedTax;

  /** 全年个人公积金（基本） */
  full.employee.housingFund = sumBy(list, 'housingFund');
  /** 全年个人补充公积金 */
  full.employee.supplementaryHousingFund = sumBy(
    list,
    'supplementaryHousingFund',
  );
  /** 全年企业公积金（基本） */
  full.employerCosts.housingFund = sumBy(list, 'employerCosts.housingFund');
  /** 全年企业补充公积金 */
  full.employerCosts.supplementaryHousingFund = sumBy(
    list,
    'employerCosts.supplementaryHousingFund',
  );

  /** 全年公积金总额（个人基本 + 个人补充 + 企业基本 + 企业补充） */
  full.fullHousingFund =
    full.employee.housingFund +
    full.employee.supplementaryHousingFund +
    full.employerCosts.housingFund +
    full.employerCosts.supplementaryHousingFund;

  /** 全年到手现金收入（合并计税） */
  full.cashIncome =
    full.taxedIncome -
    sumBy(list, 'insuranceFullCost') -
    sumBy(list, 'housingFund') -
    sumBy(list, 'supplementaryHousingFund') -
    sumBy(list, 'extraDeduction.enterprisePensionFromEmployee') -
    sumBy(list, 'extraDeduction.privatePension');
  /** 全年到手现金收入（分开计税） */
  const referenceCashIncome = sumBy(list, 'cashIncome') + full.postTaxBonus;
  full.cashIncomeDeprecated =
    full.taxedIncomeDeprecated -
    sumBy(list, 'insuranceFullCost') -
    sumBy(list, 'housingFund') -
    sumBy(list, 'supplementaryHousingFund') -
    sumBy(list, 'extraDeduction.enterprisePensionFromEmployee') -
    sumBy(list, 'extraDeduction.privatePension');

  /** 全年个人社保总额 */
  full.fullInsurance = sumBy(list, 'insuranceFullCost');

  /** 全年个人养老保险 */
  full.employee.endowmentInsurance = sumBy(list, 'insuranceCosts.endowment');
  /** 全年个人医疗保险 */
  full.employee.healthInsurance = sumBy(list, 'insuranceCosts.health');
  /** 全年个人企业年金 */
  full.employee.enterprisePension = sumBy(
    list,
    'extraDeduction.enterprisePensionFromEmployee',
  );
  /** 全年个人养老金 */
  full.employee.privatePension = sumBy(list, 'extraDeduction.privatePension');

  /** 全年企业年金总额（个人+公司） */
  full.employee.enterprisePensionFull =
    sumBy(list, 'extraDeduction.enterprisePensionFromEmployee') +
    sumBy(list, 'extraDeduction.enterprisePensionFromEmployer');

  /** 全年个人总收入（现金收入 + 公积金 + 企业年金 + 个人养老金） */
  full.totalIncome =
    full.cashIncome +
    full.fullHousingFund +
    full.employee.enterprisePensionFull +
    full.employee.privatePension;
  /** 全年个人总收入（分开计税） */
  full.totalIncomeDeprecated =
    full.cashIncomeDeprecated +
    full.fullHousingFund +
    full.employee.enterprisePensionFull +
    full.employee.privatePension;

  /** 全年雇主总成本 */
  full.employerCosts.full = sumBy(list, 'employerCosts.full') + full.bonus;
  /** 全年雇主企业年金成本 */
  full.employerCosts.enterprisePension = sumBy(
    list,
    'employerCosts.enterprisePension',
  );
  /** 全年雇主社保成本 */
  full.employerCosts.insurance = {
    endowment: sumBy(list, 'employerCosts.insurance.endowment'),
    health: sumBy(list, 'employerCosts.insurance.health'),
    unemployment: sumBy(list, 'employerCosts.insurance.unemployment'),
    birth: sumBy(list, 'employerCosts.insurance.birth'),
    occupationalInjury: sumBy(
      list,
      'employerCosts.insurance.occupationalInjury',
    ),
  };

  /** 1. 年终奖盲区检测 */
  full.bonusTaxTrap = checkBonusTaxTrap(annualBonus);

  /** 2. 年终奖与月薪最优分配筹划 */
  const avgMonthlySalary = list.length > 0 ? full.bookSalary / list.length : 0;
  const avgMonthlyDeduction =
    list.length > 0
      ? sumBy(
          list,
          x => x.fullExtraDeduction + x.insuranceFullCost + x.housingFund,
        ) / list.length
      : 0;
  full.bonusOptimization = optimizeAnnualBonusAllocation(
    avgMonthlySalary,
    annualBonus,
    avgMonthlyDeduction,
  );

  /** 3. 年度汇算清缴测算 (税总规范) */
  const hasJobChange = list.slice(1).some(m => m.newPayCycle);
  const canRefundIfCombined = full.theoreticalTax < full.totalSeparatedTax;
  const refundAmountByCombining = canRefundIfCombined
    ? Number((full.totalSeparatedTax - full.theoreticalTax).toFixed(2))
    : 0;


  let settlementType: 'refund' | 'supplement' | 'none' = 'none';
  let settlementHint = '';
  let taxDiff = 0;

  if (hasJobChange) {
    // 换工作导致预扣预缴税款由于分段起征点重置，少预缴了税款，需在汇算时补税
    const prepaidSalaryTax = full.prepaidTax;
    const totalDeductions =
      sumBy(
        list,
        x => x.fullExtraDeduction + x.insuranceFullCost + x.housingFund,
      ) +
      list.length * 5000;
    const theoreticalSalaryTax = calculateTax(
      Math.max(full.bookSalary - totalDeductions, 0),
    );
    taxDiff = Number((prepaidSalaryTax - theoreticalSalaryTax).toFixed(2));

    if (taxDiff < -0.01) {
      settlementType = 'supplement';
      settlementHint = `预计次年 3-6 月综合所得汇算清缴需补税 ¥${Math.abs(taxDiff).toFixed(2)} 元（多由年中换工作多段累计计税导致）。`;
    } else if (taxDiff > 0.01) {
      settlementType = 'refund';
      settlementHint = `预计次年 3-6 月综合所得汇算清缴可申请退税 ¥${taxDiff.toFixed(2)} 元。`;
    }
  } else if (canRefundIfCombined && refundAmountByCombining >= 1) {
    settlementType = 'refund';
    taxDiff = refundAmountByCombining;
    settlementHint = `次年汇算建议：若选择将全年一次性奖金并入综合所得申报，预计可申请退税 ¥${refundAmountByCombining.toFixed(2)} 元。`;
  }

  full.annualTaxSettlement = {
    prepaidTax: full.prepaidTax + full.bonusTax,
    theoreticalTax: full.theoreticalTax,
    taxDiff,
    settlementType,
    amount: Math.abs(taxDiff),
    hint: settlementHint,
  };


  /** 4. 副业所得（劳务报酬与稿酬）综合清缴 */
  const firstMonthMeta = list[0] as unknown as { sideIncome?: MonthlyIncomeMeta['sideIncome'] };
  if (firstMonthMeta?.sideIncome) {
    const labor = (firstMonthMeta.sideIncome.laborIncome || 0) * list.length;
    const manuscript = (firstMonthMeta.sideIncome.manuscriptIncome || 0) * list.length;
    const laborTaxable = labor * 0.8;
    const manuscriptTaxable = manuscript * 0.8 * 0.7;
    const totalSideTaxable = laborTaxable + manuscriptTaxable;
    const sideTax = calculateTax(totalSideTaxable);
    full.sideIncomeTax = {
      laborTax: calculateTax(laborTaxable),
      manuscriptTax: calculateTax(manuscriptTaxable),
      totalSideTax: sideTax,
    };
  } else {
    full.sideIncomeTax = {
      laborTax: 0,
      manuscriptTax: 0,
      totalSideTax: 0,
    };
  }

  return full;
}


export function calculateMonthIncome(
  current: MonthlyIncomeMeta,
  lastMonth: MonthlyIncomeInfo | undefined,
): MonthlyIncomeInfo {
  const newMonthInfo: MonthlyIncomeInfo = {
    salary: current.salary,
    housingFund: 0,
    supplementaryHousingFund: 0,
    tax: 0,
    taxedIncome: 0,
    cashIncome: 0,
    accumulatedSalary: 0,
    accumulatedTax: 0,
    accumulatedTaxQuota: 0,
    accumulatedDeduction: 0,
    accumulatedSpecialDeduction: 0,
    accumulatedExtraDeduction: 0,
    insuranceCosts: {
      endowment: 0,
      health: 0,
      unemployment: 0,
    },
    insuranceFullCost: 0,
    extraDeduction: current.extraDeduction,
    fullExtraDeduction: 0,
    newPayCycle: current.newPayCycle,
    month: 0,

    actualMonth: 0,
    sideIncome: current.sideIncome,
    employerCosts: {
      full: 0,
      insuranceFull: 0,
      insurance: {
        endowment: 0,
        health: 0,
        unemployment: 0,
        birth: 0,
        occupationalInjury: 0,
      },
      housingFund: 0,
      supplementaryHousingFund: 0,
      enterprisePension: 0,
    },
    id: current.id !== undefined ? String(current.id) : '1',
  };


  if (current.newPayCycle || !lastMonth) {
    newMonthInfo.month = 1;
  } else {
    newMonthInfo.month = lastMonth.month + 1;
  }
  newMonthInfo.actualMonth = lastMonth ? lastMonth.actualMonth + 1 : 1;
  newMonthInfo.id =
    current.id !== undefined
      ? String(current.id)
      : String(newMonthInfo.actualMonth);

  const newPayCycle = current.newPayCycle;

  // 个人缴纳公积金金额（基本与补充）
  const validHousingFundBase = getValidBase(
    current.housingFundBase,
    current.housingFundBaseRange,
  );
  const personalHousingFund =
    validHousingFundBase * current.housingFundRate;
  const suppRate = current.supplementaryHousingFundRate || 0;
  const personalSupplementaryHousingFund =
    validHousingFundBase * suppRate;
  const totalPersonalHousingFund =
    personalHousingFund + personalSupplementaryHousingFund;

  // 公积金税前扣除限额（国家税法规定：单位和个人分别在不超12%限额内免税）
  const housingFundRateLimit = current.housingFundRateLimit ?? 0.12;
  const deductibleHousingFundRate = Math.min(
    current.housingFundRate + suppRate,
    housingFundRateLimit,
  );
  const deductibleHousingFund = validHousingFundBase * deductibleHousingFundRate;

  // 社保缴纳明细
  const insuranceDeducted = insuranceCostsForEmployee(
    newPayCycle || !current.insuranceBaseOnLastMonth || !lastMonth
      ? current.insuranceBase
      : lastMonth.salary,
    current.insuranceBaseRange,
    current.insuranceRate,
    current.salary,
  );
  // 社保缴纳额
  const insuranceFullCost = sum(values(insuranceDeducted));

  const enterprisePension =
    current.extraDeduction.enterprisePensionFromEmployee || 0;
  const privatePension = current.extraDeduction.privatePension || 0;

  // 1. 个人企业年金税前扣除限额：动态从 meta 读取扣除比例上限，默认 0.04 (4%)
  const rateLimit = current.enterprisePensionEmployeeRateLimit ?? 0.04;
  const endowmentTop = Array.isArray(current.insuranceBaseRange)
    ? current.insuranceBaseRange[1]
    : current.insuranceBaseRange.endowment[1];
  const validPensionBase = Math.min(
    current.salary,
    endowmentTop || current.salary,
  );
  const maxDeductibleEnterprisePension = validPensionBase * rateLimit;
  const deductibleEnterprisePension = Math.min(
    enterprisePension,
    maxDeductibleEnterprisePension,
  );

  // 2. 个人养老金税前扣除限额：动态从 meta 读取月度扣除额上限，默认 1,000 元/月 (年 12,000 元)
  const monthlyQuota = current.privatePensionMonthlyQuota ?? 1000;
  const deductiblePrivatePension = Math.min(privatePension, monthlyQuota);

  // 专项附加扣除与法定其他扣除额
  const extraDeducted =
    sumExtraDeduction(current.extraDeduction) +
    deductibleEnterprisePension +
    deductiblePrivatePension;

  // 应届生/当年首次入职特殊政策（税总公告2020年第13号）
  let accumulatedDeduction = newMonthInfo.month * current.freeTaxQuota;
  if (current.firstJobThisYear) {
    const startMonth = current.firstJobStartMonth || newMonthInfo.actualMonth || 1;
    accumulatedDeduction = (startMonth + newMonthInfo.month - 1) * current.freeTaxQuota;
  }
  const specialDeduction = insuranceFullCost + deductibleHousingFund;
  const accumulatedSpecialDeduction =
    (newPayCycle || !lastMonth ? 0 : lastMonth.accumulatedSpecialDeduction) +
    specialDeduction;
  const accumulatedExtraDeduction =
    (newPayCycle || !lastMonth ? 0 : lastMonth.accumulatedExtraDeduction) +
    extraDeducted;
  const accumulatedSalary =
    (newPayCycle || !lastMonth ? 0 : lastMonth.accumulatedSalary) +
    current.salary;

  // 预扣预缴应纳税所得额
  const accumulatedTaxQuota = Math.max(
    accumulatedSalary -
      (accumulatedDeduction +
        accumulatedSpecialDeduction +
        accumulatedExtraDeduction),
    0,
  );

  // 当月缴税额
  const tax =
    calculateTax(accumulatedTaxQuota) -
    (newPayCycle || !lastMonth ? 0 : lastMonth.accumulatedTax);

  newMonthInfo.fullExtraDeduction = extraDeducted;
  newMonthInfo.insuranceCosts = insuranceDeducted;
  newMonthInfo.insuranceFullCost = insuranceFullCost;
  newMonthInfo.housingFund = personalHousingFund;
  newMonthInfo.supplementaryHousingFund = personalSupplementaryHousingFund;
  newMonthInfo.tax = tax;
  newMonthInfo.taxedIncome = newMonthInfo.salary - tax;
  newMonthInfo.cashIncome =
    newMonthInfo.salary -
    insuranceFullCost -
    totalPersonalHousingFund -
    tax -
    enterprisePension -
    privatePension;
  newMonthInfo.accumulatedSalary = accumulatedSalary;
  newMonthInfo.accumulatedTaxQuota = accumulatedTaxQuota;
  newMonthInfo.accumulatedDeduction = accumulatedDeduction;
  newMonthInfo.accumulatedSpecialDeduction = accumulatedSpecialDeduction;
  newMonthInfo.accumulatedExtraDeduction = accumulatedExtraDeduction;
  newMonthInfo.accumulatedTax =
    tax + (newPayCycle || !lastMonth ? 0 : lastMonth.accumulatedTax);

  // 雇主公积金成本（基本与补充）
  const employerSuppRate =
    current.supplementaryHousingFundEmployerRate || 0;
  const employerHousingFund =
    validHousingFundBase * current.housingFundRate;
  const employerSupplementaryHousingFund =
    validHousingFundBase * employerSuppRate;

  // 雇主成本
  newMonthInfo.employerCosts.housingFund = employerHousingFund;
  newMonthInfo.employerCosts.supplementaryHousingFund =
    employerSupplementaryHousingFund;
  newMonthInfo.employerCosts.enterprisePension =
    current.extraDeduction.enterprisePensionFromEmployer;
  newMonthInfo.employerCosts.insurance = insuranceCostsForEmployer(
    newPayCycle || !current.insuranceBaseOnLastMonth || !lastMonth
      ? current.insuranceBase
      : lastMonth.salary,
    current.insuranceBaseRange,
    current.employer.insuranceRate,
  );
  newMonthInfo.employerCosts.insuranceFull = sum(
    Object.values(newMonthInfo.employerCosts.insurance),
  );
  newMonthInfo.employerCosts.full =
    newMonthInfo.salary +
    employerHousingFund +
    employerSupplementaryHousingFund +
    newMonthInfo.employerCosts.insuranceFull +
    newMonthInfo.employerCosts.enterprisePension;

  return newMonthInfo;
}

export function calculateMonthlyIncomes(metaList: MonthlyIncomeMeta[]) {
  return metaList.reduce((incomeList, meta) => {
    const current = calculateMonthIncome(meta, last(incomeList));

    incomeList.push(current);

    return incomeList;
  }, [] as MonthlyIncomeInfo[]);
}

export function buildEmptyMetaList(
  meta: MonthlyIncomeMeta,
): MonthlyIncomeMeta[] {
  return new Array(12).fill(0).map(() => cloneDeep(meta));
}

function calculateTax(num: number): number {
  const taxRate = findTaxRate(num);

  return num * taxRate.rate - taxRate.minus;
}

export function calculateBonusTax(
  num: number,
  unusedDeduction: number = 0,
): number {
  if (num <= 0) return 0;
  const taxableBonus = Math.max(0, num - Math.max(0, unusedDeduction));
  if (taxableBonus === 0) return 0;
  const taxRate = findTaxRate(taxableBonus / 12, TaxRateTableForBonus);

  return taxableBonus * taxRate.rate - taxRate.minus;
}

/**
 * 检测年终奖是否落在 6 大税收盲区之内
 * @param bonus 年终奖金额
 */
export function checkBonusTaxTrap(bonus: number): BonusTaxTrapResult {
  if (bonus <= 0) {
    return {
      isTrap: false,
      currentBonus: 0,
      lowerThreshold: 0,
      upperThreshold: 0,
      lostAmount: 0,
      warningMessage: '',
    };
  }

  for (const trap of BonusTaxTrapRanges) {
    if (bonus > trap.start && bonus <= trap.end) {
      const lowerTax = calculateBonusTax(trap.lowerThreshold);
      const currentTax = calculateBonusTax(bonus);
      const lowerNet = trap.lowerThreshold - lowerTax;
      const currentNet = bonus - currentTax;
      const lostAmount = Math.max(0, lowerNet - currentNet);

      return {
        isTrap: true,
        currentBonus: bonus,
        lowerThreshold: trap.lowerThreshold,
        upperThreshold: trap.end,
        lostAmount,
        warningMessage: `⚠️ 年终奖 ¥${bonus.toLocaleString()} 落在税收无效盲区 [${(trap.start + 1).toLocaleString()} ~ ${trap.end.toLocaleString()}] 元。税后到手较发放 ¥${trap.lowerThreshold.toLocaleString()} 元反减少 ¥${lostAmount.toFixed(2)} 元。`,
      };
    }
  }

  return {
    isTrap: false,
    currentBonus: bonus,
    lowerThreshold: 0,
    upperThreshold: 0,
    lostAmount: 0,
    warningMessage: '',
  };
}

/**
 * 求解年薪总包在月薪与年终奖之间的全局最优分配
 * @param monthlySalary 当前月薪
 * @param annualBonus 当前年终奖
 * @param monthlyDeductions 月度扣除项（社保+公积金+专项附加扣除）
 */
export function optimizeAnnualBonusAllocation(
  monthlySalary: number,
  annualBonus: number,
  monthlyDeductions: number = 0,
): BonusOptimizationResult {
  const totalAnnualGross = monthlySalary * 12 + annualBonus;
  const totalAnnualDeductions = 5000 * 12 + monthlyDeductions * 12;

  // 1. 当前方案税额
  const currentTaxableSalary = Math.max(
    0,
    monthlySalary * 12 - totalAnnualDeductions,
  );
  const currentSalaryTax = calculateTax(currentTaxableSalary);
  const currentUnusedDeduction = Math.max(
    0,
    totalAnnualDeductions - monthlySalary * 12,
  );
  const currentBonusTax = calculateBonusTax(annualBonus, currentUnusedDeduction);
  const currentTotalTax = currentSalaryTax + currentBonusTax;
  const currentCashIncome =
    totalAnnualGross - currentTotalTax - monthlyDeductions * 12;

  // 2. 遍历搜索最优分配 (加入关键临界点候选值)
  let bestBonus = annualBonus;
  let minTax = currentTotalTax;

  const candidateBonuses = new Set<number>([
    0,
    36000,
    144000,
    300000,
    420000,
    660000,
    960000,
    annualBonus,
  ]);
  const step = Math.max(1000, Math.floor(totalAnnualGross / 200));
  for (let b = 0; b <= totalAnnualGross; b += step) {
    candidateBonuses.add(b);
  }

  for (const b of candidateBonuses) {
    if (b > totalAnnualGross) continue;
    // 避开盲区
    const trapCheck = checkBonusTaxTrap(b);
    if (trapCheck.isTrap) continue;

    const salaryPart = totalAnnualGross - b;
    const taxableSalary = Math.max(0, salaryPart - totalAnnualDeductions);
    const sTax = calculateTax(taxableSalary);
    const unusedDed = Math.max(0, totalAnnualDeductions - salaryPart);
    const bTax = calculateBonusTax(b, unusedDed);
    const totalT = sTax + bTax;

    if (totalT < minTax) {
      minTax = totalT;
      bestBonus = b;
    }
  }

  const optimalMonthlySalary = Math.round((totalAnnualGross - bestBonus) / 12);
  const taxSaved = Math.max(0, currentTotalTax - minTax);
  const optimalCashIncome =
    totalAnnualGross - minTax - monthlyDeductions * 12;
  const isAlreadyOptimal = taxSaved < 1;

  let recommendationSummary = '';
  if (isAlreadyOptimal) {
    recommendationSummary = '当前年终奖与月薪分配方案已是税负最优组合。';
  } else {
    recommendationSummary = `建议将年终奖规划为 ¥${bestBonus.toLocaleString()} 元，月薪规划为 ¥${optimalMonthlySalary.toLocaleString()} 元，全年可节税 ¥${taxSaved.toFixed(2)} 元。`;
  }

  return {
    currentTotalTax,
    currentCashIncome,
    optimalBonus: bestBonus,
    optimalMonthlySalary,
    optimalTotalTax: minTax,
    optimalCashIncome,
    taxSaved,
    isAlreadyOptimal,
    recommendationSummary,
  };
}


function insuranceCostsForEmployee(
  base: number,
  baseRange: MonthlyIncomeMeta['insuranceBaseRange'],
  meta: MonthlyIncomeMeta['insuranceRate'],
  _currentSalary?: number,
): MonthlyIncomeInfo['insuranceCosts'] {
  return {
    endowment: getValidBase(base, baseRange.endowment) * meta.endowment,
    health: getValidBase(base, baseRange.health) * meta.health,
    unemployment:
      getValidBase(base, baseRange.unemployment) * meta.unemployment,
  };
}

function insuranceCostsForEmployer(
  base: number,
  baseRange: MonthlyIncomeMeta['insuranceBaseRange'],
  meta: {
    endowment: number;
    health: number;
    unemployment: number;
    birth: number;
    occupationalInjury: number;
  },
) {
  return {
    endowment: getValidBase(base, baseRange.endowment) * meta.endowment,
    health: getValidBase(base, baseRange.health) * meta.health,
    unemployment:
      getValidBase(base, baseRange.unemployment) * meta.unemployment,
    birth: getValidBase(base, baseRange.birth) * meta.birth,
    occupationalInjury:
      getValidBase(base, baseRange.occupationalInjury) *
      meta.occupationalInjury,
  };
}

function getValidBase(base: number, range: [number, number]) {
  return Math.min(Math.max(base, range[0]), range[1]);
}

function sumExtraDeduction(meta: MonthlyIncomeMeta['extraDeduction']): number {
  return sum(
    values(
      omit(meta, [
        'enterprisePensionFromEmployee',
        'enterprisePensionFromEmployer',
        'privatePension',
      ]),
    ),
  );
}

function findTaxRate(
  income: number,
  taxRateTable = TaxRateTable,
): TaxRateModel {
  const table = taxRateTable.slice().reverse();
  for (const meta of table) {
    if (income > meta.start) {
      return meta;
    }
  }

  return taxRateTable[0];
}

/**
 * 根据给定的年份和月份，从城市配方中查找有效的政策。
 * @param recipe 包含政策列表的城市配方
 * @param year 计算年份, e.g., 2025
 * @param month 计算月份 (1-12)
 * @returns 该时间点有效的政策对象 (Policy)
 */
export function findPolicyForMonth(
  recipe: CityRecipe,
  year: number,
  month: number,
): Policy {
  const targetDateStr = `${year}-${month.toString().padStart(2, '0')}`;

  // 由于 CityRecipe.policies 已按日期降序排列，
  // 找到的第一个生效日期小于或等于目标日期的策略，就是当前有效的策略。
  const effectivePolicy = recipe.policies.find(
    p => p.effectiveDate <= targetDateStr,
  );

  if (!effectivePolicy) {
    // 降级处理：如果找不到策略（例如查询一个非常早的年份），
    // 使用列表中最后一个（即最早的）策略。
    const fallbackPolicy = recipe.policies[recipe.policies.length - 1];
    if (!fallbackPolicy) {
      throw new Error(`在 ${recipe.city} 未找到任何有效政策。`);
    }
    return fallbackPolicy;
  }

  return effectivePolicy;
}

/**
 * 查找指定年份的最新政策
 * @param recipe 城市配方
 * @param year 年份
 * @returns 该年份的最新政策
 */
export function findLatestPolicyForYear(
  recipe: CityRecipe,
  year: number,
): Policy {
  const yearStr = year.toString();

  // 找到该年份内的所有政策
  const policiesInYear = recipe.policies.filter(p =>
    p.effectiveDate.startsWith(yearStr),
  );

  if (policiesInYear.length > 0) {
    // 返回该年份内最新的政策（由于已按降序排列，第一个就是最新的）
    return policiesInYear[0];
  }

  // 如果该年份没有政策，返回最接近的历史政策
  return findPolicyForMonth(recipe, year, 1);
}

/**
 * 使用Policy构建MonthlyIncomeMeta
 * @param data 用户输入数据
 * @param recipe 城市配方
 * @param policy 政策对象
 * @returns 月度收入元数据
 */
export function buildMetaFromPolicy(
  data: RawMeta,
  policy: Policy,
): MonthlyIncomeMeta {
  return {
    salary: data.monthSalary,
    insuranceBase: data.insuranceBase,
    housingFundBase: data.housingFundBase,
    housingFundRate: data.housingFundRate / 100,
    supplementaryHousingFundRate:
      data.supplementaryHousingFundRate !== undefined
        ? data.supplementaryHousingFundRate / 100
        : 0,
    supplementaryHousingFundEmployerRate:
      data.supplementaryHousingFundEmployerRate !== undefined
        ? data.supplementaryHousingFundEmployerRate / 100
        : 0,
    housingFundRateLimit: data.housingFundRateLimit ?? 0.12,
    insuranceRate: policy.employee.insuranceRate,
    freeTaxQuota: 5000,
    extraDeduction: data.extraDeduction,
    annualBonus: data.annualBonus,
    insuranceBaseRange: normalizePolicyInsuranceBaseRange(policy),
    housingFundBaseRange: policy.housingFundBaseRange,
    enterprisePensionEmployeeRateLimit:
      data.enterprisePensionEmployeeRateLimit ??
      policy.enterprisePensionEmployeeRateLimit ??
      0.04,
    privatePensionMonthlyQuota:
      data.privatePensionMonthlyQuota ??
      policy.privatePensionMonthlyQuota ??
      1000,
    insuranceBaseOnLastMonth: data.insuranceBaseOnLastMonth,
    firstJobThisYear: data.firstJobThisYear,
    firstJobStartMonth: data.firstJobStartMonth,
    sideIncome: data.sideIncome,
    newPayCycle: false,
    employer: {
      insuranceRate: policy.employer.insuranceRate,
    },
  };
}


/**
 * 标准化Policy中的社保基数范围
 * @param policy 政策对象
 * @returns 标准化的社保基数范围
 */
export function normalizePolicyInsuranceBaseRange(policy: Policy) {
  let { insuranceBaseRange } = policy;
  if (Array.isArray(insuranceBaseRange)) {
    // eslint-disable-next-line no-param-reassign
    insuranceBaseRange = {
      endowment: insuranceBaseRange,
      health: insuranceBaseRange,
      unemployment: insuranceBaseRange,
      birth: insuranceBaseRange,
      occupationalInjury: insuranceBaseRange,
    };
  }

  return insuranceBaseRange;
}

/**
 * 构建月度元数据列表（支持新的Policy模型）
 * @param recipe 城市配方
 * @param year 计算年份
 * @param userInput 用户输入
 * @param useUniformPolicy 是否全年使用统一政策
 * @returns 月度元数据列表
 */
export function buildMonthlyMetas(
  recipe: CityRecipe,
  year: number,
  userInput: RawMeta,
  useUniformPolicy: boolean = false,
): MonthlyIncomeMeta[] {
  let uniformPolicy: Policy | undefined;
  if (useUniformPolicy) {
    // 若开启统一模式，则为全年查找唯一的最新策略
    uniformPolicy = findLatestPolicyForYear(recipe, year);
  }

  const metaList: MonthlyIncomeMeta[] = [];
  for (let month = 1; month <= 12; month++) {
    let policyForThisMonth: Policy;

    if (useUniformPolicy && uniformPolicy) {
      // 统一模式：所有月份都使用同一个策略
      policyForThisMonth = uniformPolicy;
    } else {
      // 默认分段模式：为每个月动态查找其对应的有效策略
      policyForThisMonth = findPolicyForMonth(recipe, year, month);
    }

    // 使用找到的策略来填充当月的计算元数据
    const meta = buildMetaFromPolicy(userInput, policyForThisMonth);

    // 根据月份和用户输入调整缴费基数
    if (month >= 1 && month <= 6) {
      // 1-6月使用上上年度月平均工资作为缴费基数（如果用户提供了大于0的值）
      if (
        userInput.yearBeforeLastAvgSalary &&
        userInput.yearBeforeLastAvgSalary > 0
      ) {
        meta.yearBeforeLastAvgSalary = userInput.yearBeforeLastAvgSalary;
        meta.insuranceBase = userInput.yearBeforeLastAvgSalary;
        meta.housingFundBase = userInput.yearBeforeLastAvgSalary;
      }
    } else if (month >= 7 && month <= 12) {
      // 7-12月使用上年度月平均工资作为缴费基数（如果用户提供了大于0的值）
      if (userInput.lastYearAvgSalary && userInput.lastYearAvgSalary > 0) {
        meta.lastYearAvgSalary = userInput.lastYearAvgSalary;
        meta.insuranceBase = userInput.lastYearAvgSalary;
        meta.housingFundBase = userInput.lastYearAvgSalary;
      }
    }

    metaList.push(meta);
  }
  return metaList;
}

/**
 * 阶梯税率时序变化与跳档分析算法
 * 精准分析 1~12 月各月月初与月底税率阶梯、跳档跃迁点、环比税费增幅与到手现金冲击
 * @param monthlyIncomes 1~12 月月度明细列表
 */
export function analyzeTaxBracketTimeline(
  monthlyIncomes: MonthlyIncomeInfo[],
): TaxBracketTimelineResult {
  if (!monthlyIncomes || monthlyIncomes.length === 0) {
    return {
      monthlyAnalyses: [],
      transitionCount: 0,
      transitionMonths: [],
      highestBracketRate: 0,
      maxTaxJumpMonth: 0,
      maxTaxJumpAmount: 0,
    };
  }

  const monthlyAnalyses: MonthlyTaxBracketAnalysis[] = [];
  let maxTaxJumpMonth = 0;
  let maxTaxJumpAmount = 0;

  for (let i = 0; i < monthlyIncomes.length; i++) {
    const current = monthlyIncomes[i];
    const prev = i > 0 ? monthlyIncomes[i - 1] : undefined;

    // 获取月初与月底累计应纳税所得额
    const isNewCycle = current.newPayCycle || current.month === 1;
    const previousAccumulatedQuota =
      i === 0 || isNewCycle ? 0 : Math.max(0, prev!.accumulatedTaxQuota);
    const accumulatedTaxQuota = Math.max(0, current.accumulatedTaxQuota);

    // 月初与月底适用边际税率
    const startRateModel = findTaxRate(previousAccumulatedQuota, TaxRateTable);
    const endRateModel = findTaxRate(accumulatedTaxQuota, TaxRateTable);

    const startRate = startRateModel.rate;
    const endRate = endRateModel.rate;

    // 是否当月发生税率跳档跃迁
    const isTransition = endRate > startRate;
    const thresholdCrossed = isTransition ? endRateModel.start : undefined;

    // 计算阶梯档位信息
    const bracketIndex = TaxRateTable.findIndex(t => t.rate === endRateModel.rate);
    const bracketLevel = bracketIndex >= 0 ? bracketIndex + 1 : 1;
    const lowerThreshold = endRateModel.start;
    const upperThreshold = endRateModel.end;

    // 距离下一个跳档门槛的剩余额度与当前档位消耗百分比
    const distanceToNextThreshold = Number.isFinite(upperThreshold)
      ? Math.max(0, upperThreshold - accumulatedTaxQuota)
      : 0;

    let rangeProgressPercent = 0;
    if (Number.isFinite(upperThreshold) && upperThreshold > lowerThreshold) {
      rangeProgressPercent = Math.min(
        100,
        Math.max(
          0,
          ((accumulatedTaxQuota - lowerThreshold) /
            (upperThreshold - lowerThreshold)) *
            100,
        ),
      );
    } else if (!Number.isFinite(upperThreshold)) {
      rangeProgressPercent = 100;
    }

    // 计算环比个税变动与到手现金变动
    let taxDelta = 0;
    let taxDeltaPercent = 0;
    let cashDelta = 0;

    if (prev) {
      taxDelta = current.tax - prev.tax;
      taxDeltaPercent = prev.tax > 0 ? taxDelta / prev.tax : 0;
      cashDelta = current.cashIncome - prev.cashIncome;

      if (taxDelta > maxTaxJumpAmount) {
        maxTaxJumpAmount = taxDelta;
        maxTaxJumpMonth = current.actualMonth;
      }
    }

    const effectiveTaxRate =
      current.salary > 0 ? current.tax / current.salary : 0;

    monthlyAnalyses.push({
      month: current.month,
      actualMonth: current.actualMonth,
      accumulatedTaxQuota,
      previousAccumulatedQuota,
      startRate,
      endRate,
      isTransition,
      bracketLevel,
      thresholdCrossed,
      tax: current.tax,
      taxDelta,
      taxDeltaPercent,
      cashIncome: current.cashIncome,
      cashDelta,
      effectiveTaxRate,
      distanceToNextThreshold,
      rangeProgressPercent,
      lowerThreshold,
      upperThreshold,
    });
  }

  const transitionMonths = monthlyAnalyses
    .filter(m => m.isTransition)
    .map(m => m.actualMonth);
  const transitionCount = transitionMonths.length;
  const highestBracketRate = Math.max(
    ...monthlyAnalyses.map(m => m.endRate),
    0,
  );

  return {
    monthlyAnalyses,
    transitionCount,
    transitionMonths,
    highestBracketRate,
    maxTaxJumpMonth,
    maxTaxJumpAmount,
  };
}
