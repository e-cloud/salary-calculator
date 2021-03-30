import {Injectable} from '@angular/core';
import {cloneDeep, sum, sumBy, values} from 'lodash-es';
import {FullYearIncomeInfo, MonthlyIncomeInfo, MonthlyIncomeMeta} from './model';
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
    full.actualIncome = full.bookIncome - full.jointTax;
    full.fullHousingFund = sumBy(list, 'housingFund') * 2;
    full.actualIncomeDeprecated = full.bookIncome - full.prepaidTax - full.bonusTax;

    return full;
  }

  calculateMonthIncome(current: MonthlyIncomeMeta, lastMonth: MonthlyIncomeInfo | undefined, newPayCycle = false): MonthlyIncomeInfo {
    const newMonthInfo: MonthlyIncomeInfo = {
      salary: current.salary,
      housingFund: 0,
      tax: 0,
      actualIncome: 0,
      accumulatedTax: 0,
      accumulatedTaxQuota: 0,
      insuranceCosts: {
        endowment: 0,
        health: 0,
        unemployment: 0,
      },
      insuranceFullCost: 0,
      extraDeduction: current.extraDeduction,
      fullExtraDeduction: 0,
      month: 0,
      newPayCycle,
    };

    if (!lastMonth) {
      newMonthInfo.newPayCycle = true;
      newMonthInfo.month = 1;
    } else {
      newMonthInfo.month = lastMonth.month + 1;
    }

    // 个人缴纳公积金金额
    const personalHousingFund = current.housingFundBase * current.housingFundRate;

    // 社保缴纳明细
    const insuranceDeducted = insuranceDeduction(current.insuranceBase, current.insuranceRate);
    // 社保缴纳额
    const insuranceFullCost = sum(values(insuranceDeducted));

    // 专项扣除额
    const extraDeducted = extraDeduction(current.extraDeduction);

    // 预扣预缴应纳税所得额
    const accumulatedTaxQuota = (lastMonth?.accumulatedTaxQuota || 0) + current.salary
      - current.freeTaxQuota - insuranceFullCost - personalHousingFund - extraDeducted;

    // 当月缴税额
    const tax = calculateTax(accumulatedTaxQuota) - (lastMonth?.accumulatedTax || 0);

    newMonthInfo.fullExtraDeduction = extraDeducted;
    newMonthInfo.insuranceCosts = insuranceDeducted;
    newMonthInfo.insuranceFullCost = insuranceFullCost;
    newMonthInfo.housingFund = personalHousingFund;
    newMonthInfo.tax = tax;
    newMonthInfo.actualIncome = newMonthInfo.salary - insuranceFullCost - personalHousingFund - tax;
    newMonthInfo.accumulatedTaxQuota = accumulatedTaxQuota;
    newMonthInfo.accumulatedTax = tax + (lastMonth?.accumulatedTax || 0);

    return newMonthInfo;
  }

  buildEmptyIncomeList(meta: MonthlyIncomeMeta): MonthlyIncomeMeta[] {
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

function insuranceDeduction(base: number, meta: MonthlyIncomeMeta['insuranceRate']): MonthlyIncomeInfo['insuranceCosts'] {
  return {
    endowment: base * meta.endowment,
    health: base * meta.health,
    unemployment: base * meta.unemployment,
  };
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
