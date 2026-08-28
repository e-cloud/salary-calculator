/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { of, BehaviorSubject } from 'rxjs';
import {
  CityRecipe,
  MonthlyIncomeInfo,
  MonthlyIncomeMeta,
} from 'calculator-core';
import { MonthlyResultsComponent } from './monthly-results.component';
import { MatDialog } from '@angular/material/dialog';

describe('MonthlyResultsComponent 月度计算结果明细组件测试', () => {
  const mockRecipe: CityRecipe = {
    id: 1,
    label: '测试城市',
    city: '测试城市',
    policies: [
      {
        effectiveDate: '2024-07',
        minimumWage: 2000,
        avgWage: 10000,
        employee: {
          insuranceRate: {
            endowment: 0.08,
            health: 0.02,
            unemployment: 0.005,
          },
        },
        employer: {
          insuranceRate: {
            endowment: 0.16,
            health: 0.08,
            unemployment: 0.005,
            birth: 0.01,
            occupationalInjury: 0.005,
          },
        },
        insuranceBaseRange: {
          endowment: [2000, 30000],
          health: [2000, 30000],
          unemployment: [2000, 30000],
          birth: [2000, 30000],
          occupationalInjury: [2000, 30000],
        },
        housingFundBaseRange: [2000, 30000],
      },
    ],
    insuranceBaseOnLastMonth: true,
  };

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

  const mockMonthlyMetas: MonthlyIncomeMeta[] = Array.from(
    { length: 12 },
    (_, i) => ({
      id: i + 1,
      actualMonth: i + 1,
      monthSalary: 10000,
      monthlyBonus: 0,
      annualBonus: 0,
      yearBeforeLastAvgSalary: 0,
      lastYearAvgSalary: 0,
      insuranceBase: 10000,
      housingFundBase: 10000,
      housingFundRate: 7,
      insuranceRate: {
        endowment: 8,
        health: 2,
        unemployment: 0.5,
      },
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
    }),
  );

  const mockDialog = {
    open: vi.fn(),
  };

  async function setup(clear = false) {
    const updateMetaSpy = vi.fn();
    const changeChartMonthSpy = vi.fn();
    const scroll$ = new BehaviorSubject<void>(undefined);

    const result = await render(MonthlyResultsComponent, {
      providers: [
        provideAnimationsAsync(),
        { provide: MatDialog, useValue: mockDialog },
      ],
      componentInputs: {
        clear,
        monthlyIncomes$: of(mockMonthlyIncomes),
        monthlyMetas$: of(mockMonthlyMetas),
        cityRecipe: mockRecipe,
        calculationYear: 2024,
        scroll$,
      },
      componentOutputs: {
        updateMeta: { emit: updateMetaSpy } as any,
        changeChartMonth: { emit: changeChartMonthSpy } as any,
      },
    });

    return { ...result, updateMetaSpy, changeChartMonthSpy };
  }

  it('正确渲染 12 个月份的折叠面板概览', async () => {
    // Arrange
    await setup();

    // Act & Assert
    const panels = screen.getAllByText(/实收：/i);
    expect(panels.length).toBe(12);
  });

  it('当 clear 为 true 时不渲染月份列表', async () => {
    // Arrange
    const { container } = await setup(true);

    // Act & Assert
    expect(container.querySelector('mat-accordion')).toBeNull();
  });

  it('用户点击面板标题时应触发 changeChartMonth 事件', async () => {
    // Arrange
    const user = userEvent.setup();
    const { changeChartMonthSpy } = await setup();
    const firstHeader = screen.getAllByText(/实收：/i)[0];

    // Act
    await user.click(firstHeader);

    // Assert
    expect(changeChartMonthSpy).toHaveBeenCalledWith(1);
  });
});
