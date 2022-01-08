/* tslint:disable:no-non-null-assertion */

import {Injectable} from '@angular/core';
import {cloneDeep, sum, sumBy, values} from 'lodash-es';
import {CityRecipe, FullYearIncomeInfo, MonthlyIncomeInfo, MonthlyIncomeMeta} from './model';
import {TaxRateModel, TaxRateTable, TaxRateTableForBonus} from './consts';

@Injectable({
  providedIn: 'root'
})
export class IncomeCalculateService {
  calculateFullYearIncome(list: MonthlyIncomeInfo[], annualBonus: number): FullYearIncomeInfo {
    const full = {
      bookSalary: sumBy(list, 'salary'),
      prepaidTax: sumBy(list, 'tax'),
      bonus: annualBonus,
      bonusTax: calculateBonusTax(annualBonus),
    } as FullYearIncomeInfo;

    full.bookIncome = full.bookSalary + full.bonus;
    full.jointTax = calculateTax(
      full.bookSalary + full.bonus - 5000 * 12 - sumBy(list, x => x.fullExtraDeduction + x.insuranceFullCost + x.housingFund));
    full.theoreticalTax = calculateTax(
      full.bookSalary - 5000 * 12 - sumBy(list, x => x.fullExtraDeduction + x.insuranceFullCost + x.housingFund));
    full.actualIncome = full.bookIncome - full.jointTax;
    full.fullHousingFund = sumBy(list, 'housingFund') * 2;
    full.actualIncomeDeprecated = full.bookIncome - full.theoreticalTax - full.bonusTax;

    return full;
  }

  calculateMonthIncome(current: MonthlyIncomeMeta, lastMonth: MonthlyIncomeInfo | undefined): MonthlyIncomeInfo {
    const newMonthInfo: MonthlyIncomeInfo = {
      salary: current.salary,
      housingFund: 0,
      tax: 0,
      actualIncome: 0,
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
    const personalHousingFund = getValidBase(current.housingFundBase, current.housingFundBaseRange) * current.housingFundRate;

    // 社保缴纳明细
    const insuranceDeducted = insuranceCostsForEmployee(newPayCycle || !current.insuranceBaseOnLastMonth ? current.insuranceBase : lastMonth!.salary, current.insuranceBaseRange, current.insuranceRate);
    // 社保缴纳额
    const insuranceFullCost = sum(values(insuranceDeducted));

    // 专项扣除额
    const extraDeducted = extraDeduction(current.extraDeduction);

    const accumulatedDeduction = newMonthInfo.actualMonth * current.freeTaxQuota;
    const specialDeduction = insuranceFullCost + personalHousingFund;
    const accumulatedSpecialDeduction = (newPayCycle ? 0 : lastMonth!.accumulatedSpecialDeduction) + specialDeduction;
    const accumulatedExtraDeduction = (newPayCycle ? 0 : lastMonth!.accumulatedExtraDeduction) + extraDeducted;
    const accumulatedSalary = (newPayCycle ? 0 : lastMonth!.accumulatedSalary) + current.salary;
    // 预扣预缴应纳税所得额
    const accumulatedTaxQuota = Math.max(accumulatedSalary - (accumulatedDeduction + accumulatedSpecialDeduction + accumulatedExtraDeduction), 0);

    // 当月缴税额
    const tax = calculateTax(accumulatedTaxQuota) - ((newPayCycle ? 0 : lastMonth!.accumulatedTax));

    newMonthInfo.fullExtraDeduction = extraDeducted;
    newMonthInfo.insuranceCosts = insuranceDeducted;
    newMonthInfo.insuranceFullCost = insuranceFullCost;
    newMonthInfo.housingFund = personalHousingFund;
    newMonthInfo.tax = tax;
    newMonthInfo.actualIncome = newMonthInfo.salary - insuranceFullCost - personalHousingFund - tax;
    newMonthInfo.accumulatedSalary = accumulatedSalary;
    newMonthInfo.accumulatedTaxQuota = accumulatedTaxQuota;
    newMonthInfo.accumulatedDeduction = accumulatedDeduction;
    newMonthInfo.accumulatedSpecialDeduction = accumulatedSpecialDeduction;
    newMonthInfo.accumulatedExtraDeduction = accumulatedExtraDeduction;
    newMonthInfo.accumulatedTax = tax + ((newPayCycle ? 0 : lastMonth!.accumulatedTax));

    return newMonthInfo;
  }

  buildEmptyMetaList(meta: MonthlyIncomeMeta): MonthlyIncomeMeta[] {
    return new Array(12).fill(0).map(() => cloneDeep(meta));
  }
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
  meta: MonthlyIncomeMeta['insuranceRate']
): MonthlyIncomeInfo['insuranceCosts'] {
  return {
    endowment: getValidBase(base, baseRange.endowment) * meta.endowment,
    health: getValidBase(base, baseRange.health) * meta.health,
    unemployment: getValidBase(base, baseRange.unemployment) * meta.unemployment,
  };
}

function insuranceCostsForEmployer(
  base: number,
  baseRange: Record<string, [number, number]>,
  meta: CityRecipe['employer']['insuranceRate']
) {
  return {
    endowment: getValidBase(base, baseRange.endowment) * meta.endowment,
    health: getValidBase(base, baseRange.health) * meta.health,
    unemployment: getValidBase(base, baseRange.unemployment) * meta.unemployment,
    birth: getValidBase(base, baseRange.birth) * meta.birth,
    occupationalInjury: getValidBase(base, baseRange.occupationalInjury) * meta.occupationalInjury,
  };
}

function getValidBase(base: number, range: [number, number]) {
  return Math.min(Math.max(base, range[0]), range[1]);
}

function extraDeduction(meta: MonthlyIncomeMeta['extraDeduction']): number {
  return sum(values(meta));
}

function findTaxRate(income: number, taxRateTable = TaxRateTable): TaxRateModel {
  const table = taxRateTable.slice().reverse();
  for (const meta of table) {
    if (income > meta.start) {
      return meta;
    }
  }

  return taxRateTable[0];
}
