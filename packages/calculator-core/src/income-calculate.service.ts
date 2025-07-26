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
import { TaxRateModel, TaxRateTable, TaxRateTableForBonus } from './consts';
import {
  CityRecipe,
  FullYearIncomeInfo,
  MonthlyIncomeInfo,
  MonthlyIncomeMeta,
  RawMeta,
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
    /** 年终奖应纳税额 */
    bonusTax: calculateBonusTax(annualBonus),
    employee: {
      endowmentInsurance: 0,
      healthInsurance: 0,
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
      enterprisePension: 0,
    },
  } as FullYearIncomeInfo;

  /** 全年总收入（含年终奖） */
  full.bookIncome = full.bookSalary + full.bonus;
  /** 税后年终奖 */
  full.postTaxBonus = full.bonus - full.bonusTax;

  /** 全年总扣除（免税额+专项附加扣除+社保+公积金） */
  const totalDeduction =
    5000 * 12 +
    sumBy(
      list,
      x => x.fullExtraDeduction + x.insuranceFullCost + x.housingFund,
    );

  /** 理论应纳税总额（合并计税） */
  full.theoreticalTax = calculateTax(full.bookIncome - totalDeduction);
  /** 分开计税应纳税总额 */
  full.totalSeparatedTax =
    calculateTax(full.bookSalary - totalDeduction) + full.bonusTax;

  /** 全年税后工资 */
  full.postTaxSalary = sumBy(list, 'cashIncome');
  /** 全年税后总收入（合并计税） */
  full.taxedIncome = full.bookIncome - full.theoreticalTax;
  /** 全年税后总收入（分开计税） */
  full.taxedIncomeDeprecated = full.bookIncome - full.totalSeparatedTax;
  /** 全年公积金总额（个人+公司） */
  full.fullHousingFund = sumBy(list, 'housingFund') * 2;

  /** 全年到手现金收入（合并计税） */
  full.cashIncome =
    full.taxedIncome -
    sumBy(list, 'insuranceFullCost') -
    sumBy(list, 'housingFund') -
    sumBy(list, 'extraDeduction.enterprisePensionFromEmployee');
  /** 全年到手现金收入（分开计税） */
  const referenceCashIncome = sumBy(list, 'cashIncome') + full.postTaxBonus
  full.cashIncomeDeprecated =
    full.taxedIncomeDeprecated -
    sumBy(list, 'insuranceFullCost') -
    sumBy(list, 'housingFund') -
    sumBy(list, 'extraDeduction.enterprisePensionFromEmployee');

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
  /** 全年个人公积金 */
  full.employee.housingFund = sumBy(list, 'housingFund');

  /** 全年企业年金总额（个人+公司） */
  full.employee.enterprisePensionFull =
    sumBy(list, 'extraDeduction.enterprisePensionFromEmployee') +
    sumBy(list, 'extraDeduction.enterprisePensionFromEmployer');


  /** 全年个人总收入 */
  full.totalIncome = full.cashIncome + full.fullHousingFund + full.employee.enterprisePensionFull;
  /** 全年个人总收入（分开计税） */
  full.totalIncomeDeprecated =
    full.cashIncomeDeprecated + full.fullHousingFund + full.employee.enterprisePensionFull;


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
    occupationalInjury: sumBy(list, 'employerCosts.insurance.occupationalInjury'),
  };

  return full;
}

export function calculateMonthIncome(
  current: MonthlyIncomeMeta,
  lastMonth: MonthlyIncomeInfo | undefined,
): MonthlyIncomeInfo {
  const newMonthInfo: MonthlyIncomeInfo = {
    salary: current.salary,
    housingFund: 0,
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
    month: 0,
    actualMonth: 0,
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
      enterprisePension: 0,
    },
    id: Math.random().toString(),
  };

  if (current.newPayCycle || !lastMonth) {
    newMonthInfo.month = 1;
  } else {
    newMonthInfo.month = lastMonth.month + 1;
  }
  newMonthInfo.actualMonth = lastMonth ? lastMonth.actualMonth + 1 : 1;

  const newPayCycle = current.newPayCycle;

  // 个人缴纳公积金金额
  const personalHousingFund =
    getValidBase(current.housingFundBase, current.housingFundBaseRange) *
    current.housingFundRate;

  // 社保缴纳明细
  const insuranceDeducted = insuranceCostsForEmployee(
    newPayCycle || !current.insuranceBaseOnLastMonth
      ? current.insuranceBase
      : lastMonth!.salary,
    current.insuranceBaseRange,
    current.insuranceRate,
  );
  // 社保缴纳额
  const insuranceFullCost = sum(values(insuranceDeducted));

  const enterprisePension =
    current.extraDeduction.enterprisePensionFromEmployee;

  // 专项扣除额
  const extraDeducted =
    sumExtraDeduction(current.extraDeduction) + enterprisePension;

  const accumulatedDeduction = newMonthInfo.actualMonth * current.freeTaxQuota;
  const specialDeduction = insuranceFullCost + personalHousingFund;
  const accumulatedSpecialDeduction =
    (newPayCycle ? 0 : lastMonth!.accumulatedSpecialDeduction) +
    specialDeduction;
  const accumulatedExtraDeduction =
    (newPayCycle ? 0 : lastMonth!.accumulatedExtraDeduction) + extraDeducted;
  const accumulatedSalary =
    (newPayCycle ? 0 : lastMonth!.accumulatedSalary) + current.salary;
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
    (newPayCycle ? 0 : lastMonth!.accumulatedTax);

  newMonthInfo.fullExtraDeduction = extraDeducted;
  newMonthInfo.insuranceCosts = insuranceDeducted;
  newMonthInfo.insuranceFullCost = insuranceFullCost;
  newMonthInfo.housingFund = personalHousingFund;
  newMonthInfo.tax = tax;
  newMonthInfo.taxedIncome = newMonthInfo.salary - tax;
  newMonthInfo.cashIncome =
    newMonthInfo.salary -
    insuranceFullCost -
    personalHousingFund -
    tax -
    enterprisePension;
  newMonthInfo.accumulatedSalary = accumulatedSalary;
  newMonthInfo.accumulatedTaxQuota = accumulatedTaxQuota;
  newMonthInfo.accumulatedDeduction = accumulatedDeduction;
  newMonthInfo.accumulatedSpecialDeduction = accumulatedSpecialDeduction;
  newMonthInfo.accumulatedExtraDeduction = accumulatedExtraDeduction;
  newMonthInfo.accumulatedTax =
    tax + (newPayCycle ? 0 : lastMonth!.accumulatedTax);

  // 雇主成本
  newMonthInfo.employerCosts.enterprisePension =
    current.extraDeduction.enterprisePensionFromEmployer;
  newMonthInfo.employerCosts.insurance = insuranceCostsForEmployer(
    newPayCycle || !current.insuranceBaseOnLastMonth
      ? current.insuranceBase
      : lastMonth!.salary,
    current.insuranceBaseRange,
    current.employer.insuranceRate,
  );
  newMonthInfo.employerCosts.insuranceFull = sum(
    Object.values(newMonthInfo.employerCosts.insurance),
  );
  newMonthInfo.employerCosts.full =
    newMonthInfo.salary +
    personalHousingFund +
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

export function buildBaseMeta(
  data: RawMeta,
  recipe: CityRecipe,
): MonthlyIncomeMeta {
  return {
    salary: data.monthSalary,
    insuranceBase: data.insuranceBase,
    housingFundBase: data.housingFundBase,
    housingFundRate: data.housingFundRate / 100,
    insuranceRate: mapValues<MonthlyIncomeMeta['insuranceRate'], number>(
      data.insuranceRate,
      v => v / 100,
    ),
    freeTaxQuota: 5000,
    extraDeduction: data.extraDeduction,
    annualBonus: data.annualBonus,
    insuranceBaseRange: normalizeInsuranceBaseRange(recipe),
    housingFundBaseRange: recipe.housingFundBaseRange,
    insuranceBaseOnLastMonth: data.insuranceBaseOnLastMonth,
    newPayCycle: false,
    employer: recipe.employer,
  };
}

export function normalizeInsuranceBaseRange(meta: CityRecipe) {
  let { insuranceBaseRange } = meta;
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

function calculateTax(num: number): number {
  const taxRate = findTaxRate(num);

  return num * taxRate.rate - taxRate.minus;
}

function calculateBonusTax(num: number): number {
  const taxRate = findTaxRate(num / 12, TaxRateTableForBonus);

  return num * taxRate.rate - taxRate.minus;
}

function insuranceCostsForEmployee(
  base: number,
  baseRange: Record<string, [number, number]>,
  meta: MonthlyIncomeMeta['insuranceRate'],
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
  baseRange: Record<string, [number, number]>,
  meta: CityRecipe['employer']['insuranceRate'],
) {
  return {
    endowment: getValidBase(base, baseRange.endowment) * meta.endowment,
    health: getValidBase(base, baseRange.health) * meta.health,
    unemployment:
      getValidBase(base, baseRange.unemployment) * meta.unemployment,
    birth: getValidBase(base, baseRange.birth) * meta.birth,
    occupationalInjury: base * meta.occupationalInjury,
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
