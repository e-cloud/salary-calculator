/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/angular';
import { of, BehaviorSubject } from 'rxjs';
import { FullYearIncomeInfo, MonthlyIncomeInfo } from 'calculator-core';
import { SummaryChartsComponent } from './summary-charts.component';
import { NGX_ECHARTS_CONFIG } from 'ngx-echarts';

describe('SummaryChartsComponent 图表分析组件测试', () => {
  const mockMonthlyIncomes: MonthlyIncomeInfo[] = Array.from(
    { length: 12 },
    (_, i) => ({
      id: i + 1,
      actualMonth: i + 1,
      salary: 10000,
      cashIncome: 8000,
      tax: 500,
      insuranceFullCost: 1000,
      housingFund: 500,
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
      insuranceCosts: {
        endowment: 800,
        health: 200,
        unemployment: 0,
      },
      employerCosts: {
        insuranceFull: 3000,
        insurance: {
          endowment: 1500,
          health: 1000,
          unemployment: 100,
          occupationalInjury: 200,
          birth: 200,
        },
        housingFund: 500,
        enterprisePension: 0,
        full: 13500,
      },
      accumulatedSalary: 10000 * (i + 1),
      accumulatedDeduction: 5000 * (i + 1),
      accumulatedSpecialDeduction: 0,
      accumulatedExtraDeduction: 0,
    }),
  );

  const mockSummary: FullYearIncomeInfo = {
    bookSalary: 120000,
    cashIncomeDeprecated: 96000,
    bonus: 0,
    totalSeparatedTax: 6000,
    totalMergedTax: 6000,
    fullInsurance: 12000,
    fullHousingFund: 12000,
    totalIncomeDeprecated: 108000,
    actualSalaryCount: 12,
    taxSavedByBonusOptimization: 0,
    isBonusMergedIntoSalaryTaxCalculation: false,
    postTaxBonus: 0,
    postTaxSalary: 96000,
    employee: {
      insurance: { endowment: 9600, health: 2400, unemployment: 0 },
      housingFund: 6000,
      enterprisePension: 0,
      enterprisePensionFull: 0,
      tax: 6000,
    },
    employerCosts: {
      insuranceFull: 36000,
      insurance: {
        endowment: 18000,
        health: 12000,
        unemployment: 1200,
        occupationalInjury: 2400,
        birth: 2400,
      },
      housingFund: 6000,
      enterprisePension: 0,
      full: 162000,
    },
  };

  async function setup(clear = false) {
    const selectedMonth$ = new BehaviorSubject<number>(1);
    const scroll$ = new BehaviorSubject<void>(undefined);
    const changeChartMonthSpy = vi.fn();

    const result = await render(SummaryChartsComponent, {
      providers: [
        {
          provide: NGX_ECHARTS_CONFIG,
          useValue: { echarts: () => import('echarts') },
        },
      ],
      componentInputs: {
        clear,
        monthlyIncomes$: of(mockMonthlyIncomes),
        summary$: of(mockSummary),
        selectedMonth$,
        scroll$,
      },
      componentOutputs: {
        changeChartMonth: { emit: changeChartMonthSpy } as unknown as any,
      },
    });

    return { ...result, selectedMonth$, scroll$, changeChartMonthSpy };
  }

  it('正确渲染 3 个 Tab 标签页', async () => {
    // Arrange
    await setup();

    // Act & Assert
    expect(screen.getByText('月薪扣除项分析')).toBeDefined();
    expect(screen.getByText('年度扣除项分析')).toBeDefined();
    expect(screen.getByText('年度收入分析')).toBeDefined();
  });

  it('当 clear 为 true 时不渲染图表卡片', async () => {
    // Arrange
    const { container } = await setup(true);

    // Act & Assert
    expect(container.querySelector('.calc-result')).toBeNull();
  });
});
