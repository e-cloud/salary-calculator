import { describe, it, expect, vi } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { SalaryCalculatorStore } from './salary-calculator.store';
import { CityRecipe } from 'calculator-core';

describe('SalaryCalculatorStore 集中状态管理测试', () => {
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

  const mockHttp = {
    get: vi.fn(),
  };

  function setup() {
    vi.clearAllMocks();
    TestBed.configureTestingModule({
      providers: [
        SalaryCalculatorStore,
        { provide: HttpClient, useValue: mockHttp },
      ],
    });
    return TestBed.inject(SalaryCalculatorStore);
  }

  it('初始状态应符合默认定义', () => {
    // Arrange & Act
    const store = setup();

    // Assert
    expect(store.recipeIndex()).toEqual([]);
    expect(store.cityRecipe()).toBeNull();
    expect(store.clear()).toBe(false);
    expect(store.selectedMonth()).toBe(1);
    expect(store.usePredefinedInsurancePercents()).toBe(true);
    expect(store.monthlyMetas()).toEqual([]);
    expect(store.monthlyIncomes()).toEqual([]);
    expect(store.summary()).toBeNull();
  });

  it('设置配方与月份时应正确更新状态', () => {
    // Arrange
    const store = setup();

    // Act
    store.setRecipe(mockRecipe);
    store.setSelectedMonth(5);
    store.setPredefinedInsurancePercents(false);
    store.setSelectedYear(2025);

    // Assert
    expect(store.cityRecipe()).toEqual(mockRecipe);
    expect(store.selectedMonth()).toBe(5);
    expect(store.usePredefinedInsurancePercents()).toBe(false);
    expect(store.selectedYear()).toBe(2025);
  });

  it('调用 calculate 时应自动触发 computed 计算出 monthlyIncomes 与 summary', () => {
    // Arrange
    const store = setup();
    store.setRecipe(mockRecipe);

    // Act
    store.calculate({
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
      year: 2024,
      useUniformPolicy: false,
    });

    // Assert
    const incomes = store.monthlyIncomes();
    const summary = store.summary();

    expect(incomes.length).toBe(12);
    expect(summary).not.toBeNull();
    expect(summary?.bookSalary).toBe(120000);
    expect(summary?.postTaxSalary).toBeGreaterThan(0);
  });

  it('调用 updateMeta 时应更新对应月份的元数据并重新计算', () => {
    // Arrange
    const store = setup();
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

    // Act
    store.updateMeta(
      {
        monthSalary: 15000,
        monthlyBonus: 0,
        insuranceBase: 12000,
        housingFundBase: 12000,
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
      },
      0,
    );

    // Assert
    const metas = store.monthlyMetas();
    expect(metas[0].salary).toBe(15000);
    expect(metas[0].insuranceBase).toBe(12000);
  });

  it('调用 loadRecipeIndex 应通过 HTTP 获取配方索引与首个配方数据', () => {
    // Arrange
    const store = setup();
    mockHttp.get.mockReturnValue(of([mockRecipe]));

    // Act
    store.loadRecipeIndex();

    // Assert
    expect(mockHttp.get).toHaveBeenCalled();
  });

  it('调用 clearResults 时应将 clear 置为 true', () => {
    // Arrange
    const store = setup();
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

    // Act
    store.clearResults();

    // Assert
    expect(store.clear()).toBe(true);
  });
});
