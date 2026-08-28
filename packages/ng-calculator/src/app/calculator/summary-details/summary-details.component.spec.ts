import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/angular';
import { of } from 'rxjs';
import { FullYearIncomeInfo } from 'calculator-core';
import { SummaryDetailsComponent } from './summary-details.component';

describe('SummaryDetailsComponent 全年汇总详情卡片测试', () => {
  const mockSummary: FullYearIncomeInfo = {
    bookSalary: 120000,
    cashIncomeDeprecated: 96000,
    bonus: 20000,
    totalSeparatedTax: 4000,
    totalMergedTax: 4500,
    fullInsurance: 12000,
    fullHousingFund: 14400,
    totalIncomeDeprecated: 110400,
    actualSalaryCount: 12,
    taxSavedByBonusOptimization: 500,
    isBonusMergedIntoSalaryTaxCalculation: false,
    postTaxBonus: 18000,
    postTaxSalary: 96000,
    employee: {
      insurance: {
        endowment: 9600,
        health: 2400,
        unemployment: 0,
      },
      housingFund: 7200,
      enterprisePension: 0,
      enterprisePensionFull: 0,
      tax: 4000,
    },
    employerCosts: {
      insuranceFull: 30000,
      insurance: {
        endowment: 18000,
        health: 9000,
        unemployment: 1000,
        occupationalInjury: 1000,
        birth: 1000,
      },
      housingFund: 7200,
      enterprisePension: 0,
      full: 157200,
    },
  };

  it('传入合法的汇总数据时，应正确渲染各项收入与支出指标', async () => {
    // Arrange
    await render(SummaryDetailsComponent, {
      componentInputs: {
        clear: false,
        summary$: of(mockSummary),
      },
    });

    // Act & Assert
    expect(screen.getByText('全年账面薪资收入')).toBeDefined();
    expect(screen.getByText('全年一次性奖金收入(单独计税)')).toBeDefined();
    expect(screen.getByText('全年公积金缴纳金额')).toBeDefined();
    expect(screen.getByText('公司成本')).toBeDefined();
  });

  it('当 clear 为 true 时，不应渲染汇总结果卡片', async () => {
    // Arrange
    const { container } = await render(SummaryDetailsComponent, {
      componentInputs: {
        clear: true,
        summary$: of(mockSummary),
      },
    });

    // Act & Assert
    expect(container.querySelector('.calc-result')).toBeNull();
  });
});
