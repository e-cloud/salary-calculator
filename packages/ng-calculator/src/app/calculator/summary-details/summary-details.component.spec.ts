import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/angular';
import { of } from 'rxjs';
import { FullYearIncomeInfo } from 'calculator-core';
import { SummaryDetailsComponent } from './summary-details.component';

describe('SummaryDetailsComponent 全年汇总详情卡片测试', () => {
  const mockSummary: FullYearIncomeInfo = {
    bookSalary: 120000,
    bookIncome: 140000,
    bonus: 20000,
    bonusTax: 2000,
    postTaxBonus: 18000,
    prepaidTax: 2000,
    theoreticalTax: 4000,
    totalSeparatedTax: 4000,
    postTaxSalary: 96000,
    postTaxIncome: 114000,
    cashIncomeDeprecated: 96000,
    totalIncomeDeprecated: 110400,
    fullInsurance: 12000,
    fullHousingFund: 14400,
    actualSalaryCount: 12,
    employee: {
      endowmentInsurance: 9600,
      healthInsurance: 2400,
      housingFund: 7200,
      enterprisePension: 0,
      enterprisePensionFull: 0,
      privatePension: 0,
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

  it('当存在汇算清缴补税预测时，正确渲染汇算清缴卡片和导出按钮', async () => {
    // Arrange
    const summaryWithSettlement: FullYearIncomeInfo = {
      ...mockSummary,
      annualTaxSettlement: {
        prepaidTax: 4000,
        theoreticalTax: 5000,
        taxDiff: -1000,
        settlementType: 'supplement',
        amount: 1000,
        hint: '需补税 ¥1,000.00 元',
      },
    };

    await render(SummaryDetailsComponent, {
      componentInputs: {
        clear: false,
        summary$: of(summaryWithSettlement),
      },
    });

    // Act & Assert
    expect(screen.getByTestId('annual-tax-settlement-card')).toBeDefined();
    expect(screen.getByText(/年度汇算预计需补税/)).toBeDefined();
    const exportBtn = screen.getByTestId('btn-export-csv') as HTMLElement;
    expect(exportBtn).toBeDefined();

    // Mock URL 对象方法
    global.URL.createObjectURL = vi.fn().mockReturnValue('blob:test');
    global.URL.revokeObjectURL = vi.fn();

    // 点击导出
    exportBtn.click();
  });
});
