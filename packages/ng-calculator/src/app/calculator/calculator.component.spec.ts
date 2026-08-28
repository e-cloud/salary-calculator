import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/angular';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClient } from '@angular/common/http';
import { of, asyncScheduler } from 'rxjs';
import { NGX_ECHARTS_CONFIG } from 'ngx-echarts';
import { CalculatorComponent } from './calculator.component';
import { SalaryCalculatorStore } from './salary-calculator.store';
import { CityRecipe, CityRecipeIndexItem } from 'calculator-core';

describe('CalculatorComponent 容器组件测试', () => {
  const mockRecipeIndex: CityRecipeIndexItem[] = [
    { id: 1, label: '上海市', city: '上海', file: 'shanghai.json' },
  ];

  const mockRecipe: CityRecipe = {
    id: 1,
    label: '上海市',
    city: '上海',
    policies: [
      {
        effectiveDate: '2024-07',
        minimumWage: 2690,
        avgWage: 12183,
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
            health: 0.085,
            unemployment: 0.005,
            birth: 0.01,
            occupationalInjury: 0.0026,
          },
        },
        insuranceBaseRange: {
          endowment: [7384, 36921],
          health: [7384, 36921],
          unemployment: [7384, 36921],
          birth: [7384, 36921],
          occupationalInjury: [7384, 36921],
        },
        housingFundBaseRange: [2690, 36921],
      },
    ],
    insuranceBaseOnLastMonth: true,
  };

  const mockHttp = {
    get: vi.fn((url: string) => {
      if (url.includes('index.json')) {
        return of(mockRecipeIndex, asyncScheduler);
      }
      return of(mockRecipe, asyncScheduler);
    }),
  };

  it('初始渲染包含计算表单与初始状态', async () => {
    // Arrange & Act
    await render(CalculatorComponent, {
      providers: [
        provideAnimationsAsync(),
        SalaryCalculatorStore,
        { provide: HttpClient, useValue: mockHttp },
        {
          provide: NGX_ECHARTS_CONFIG,
          useValue: { echarts: () => import('echarts') },
        },
      ],
    });

    // Assert
    expect(screen.getByText('基础信息')).toBeDefined();
    expect(screen.getByText('计算')).toBeDefined();
  });

  it('当 store 状态完成计算后，应触发数据状态更新', async () => {
    // Arrange
    const { fixture } = await render(CalculatorComponent, {
      providers: [
        provideAnimationsAsync(),
        SalaryCalculatorStore,
        { provide: HttpClient, useValue: mockHttp },
        {
          provide: NGX_ECHARTS_CONFIG,
          useValue: { echarts: () => import('echarts') },
        },
      ],
    });
    const store = fixture.debugElement.injector.get(SalaryCalculatorStore);
    store.setRecipe(mockRecipe);
    store.calculate({
      monthSalary: 10000,
      monthlyBonus: 0,
      annualBonus: 0,
      yearBeforeLastAvgSalary: 0,
      lastYearAvgSalary: 0,
      insuranceBase: 10000,
      housingFundBase: 10000,
      housingFundRate: 7,
      insuranceRate: { endowment: 8, health: 2, unemployment: 0.5 },
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
      year: 2024,
      useUniformPolicy: false,
    });
    await fixture.whenStable();
    fixture.detectChanges();

    // Assert
    expect(store.monthlyIncomes().length).toBe(12);
    expect(store.summary()?.bookSalary).toBe(120000);
  });
});
