import { TestBed } from '@angular/core/testing';
import { ExportDataService } from './export-data.service';
import { FullYearIncomeInfo, MonthlyIncomeInfo } from 'calculator-core';
import { describe, it, expect, beforeEach, vi } from 'vitest';

describe('ExportDataService', () => {
  let service: ExportDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExportDataService);
  });

  it('正确生成包含 UTF-8 BOM 和正确列头的 CSV 字符串', () => {
    const mockMonthly: MonthlyIncomeInfo[] = [
      {
        month: 1,
        actualMonth: 1,
        salary: 10000,
        insuranceCosts: { endowment: 800, health: 200, unemployment: 50 },
        insuranceFullCost: 1050,
        housingFund: 500,
        supplementaryHousingFund: 300,
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
        fullExtraDeduction: 1000,
        accumulatedSalary: 10000,
        accumulatedDeduction: 5000,
        accumulatedSpecialDeduction: 1550,
        accumulatedExtraDeduction: 1000,
        accumulatedTaxQuota: 2450,
        accumulatedTax: 73.5,
        tax: 73.5,
        taxedIncome: 9926.5,
        cashIncome: 8376.5,
        employerCosts: {
          full: 13000,
          insuranceFull: 2500,
          insurance: {
            endowment: 1600,
            health: 600,
            unemployment: 100,
            birth: 100,
            occupationalInjury: 100,
          },
          housingFund: 500,
          supplementaryHousingFund: 300,
          enterprisePension: 0,
        },
      },
    ];

    const mockSummary: FullYearIncomeInfo = {
      bookSalary: 120000,
      bookIncome: 150000,
      bonus: 30000,
      bonusTax: 900,
      postTaxBonus: 29100,
      prepaidTax: 882,
      theoreticalTax: 1782,
      totalSeparatedTax: 1782,
      postTaxSalary: 100000,
      postTaxIncome: 129100,
      cashIncomeDeprecated: 129100,
      totalIncomeDeprecated: 140000,
      employee: {
        endowmentInsurance: 9600,
        healthInsurance: 2400,
        housingFund: 6000,
        supplementaryHousingFund: 3600,
        enterprisePension: 0,
        enterprisePensionFull: 0,
        privatePension: 0,
      },
      employerCosts: {
        full: 160000,
        insurance: {
          endowment: 19200,
          health: 7200,
          unemployment: 1200,
          birth: 1200,
          occupationalInjury: 1200,
        },
        housingFund: 6000,
        supplementaryHousingFund: 3600,
        enterprisePension: 0,
      },
      annualTaxSettlement: {
        prepaidTax: 1782,
        theoreticalTax: 1782,
        taxDiff: 0,
        settlementType: 'none',
        amount: 0,
        hint: '无需退补税',
      },
    };

    const csv = service.generateCsvContent(
      mockMonthly,
      mockSummary,
      '北京市',
      2025,
    );

    // 验证 UTF-8 BOM
    expect(csv.charCodeAt(0)).toBe(0xfeff);
    // 验证标题与列头
    expect(csv).toContain('2025年薪税明细测算表 - 北京市');
    expect(csv).toContain('税前账面工资(元)');
    expect(csv).toContain('个人补充公积金(元)');
    expect(csv).toContain('企业补充公积金(元)');
    expect(csv).toContain('税后到手现金(元)');
    expect(csv).toContain('10000.00');
    expect(csv).toContain('8376.50');
    expect(csv).toContain('全年一次性奖金');
  });

  it('downloadCsv 方法能够正常组装文件名并执行下载', () => {
    const mockClick = vi.fn();
    const mockAnchor = {
      setAttribute: vi.fn(),
      click: mockClick,
      style: {},
    } as unknown as HTMLAnchorElement;

    const createElementSpy = vi
      .spyOn(document, 'createElement')
      .mockReturnValue(mockAnchor);
    const appendChildSpy = vi
      .spyOn(document.body, 'appendChild')
      .mockImplementation(() => mockAnchor);
    const removeChildSpy = vi
      .spyOn(document.body, 'removeChild')
      .mockImplementation(() => mockAnchor);
    global.URL.createObjectURL = vi.fn().mockReturnValue('blob:test');
    global.URL.revokeObjectURL = vi.fn();

    const completeMockSummary: FullYearIncomeInfo = {
      bookSalary: 120000,
      bookIncome: 150000,
      bonus: 30000,
      bonusTax: 900,
      postTaxBonus: 29100,
      prepaidTax: 882,
      theoreticalTax: 1782,
      totalSeparatedTax: 1782,
      postTaxSalary: 100000,
      postTaxIncome: 129100,
      cashIncomeDeprecated: 129100,
      totalIncomeDeprecated: 140000,
      employee: {
        endowmentInsurance: 9600,
        healthInsurance: 2400,
        housingFund: 6000,
        supplementaryHousingFund: 3600,
        enterprisePension: 0,
        enterprisePensionFull: 0,
        privatePension: 0,
      },
      employerCosts: {
        full: 160000,
        insurance: {
          endowment: 19200,
          health: 7200,
          unemployment: 1200,
          birth: 1200,
          occupationalInjury: 1200,
        },
        housingFund: 6000,
        supplementaryHousingFund: 3600,
        enterprisePension: 0,
      },
      annualTaxSettlement: {
        prepaidTax: 1782,
        theoreticalTax: 1782,
        taxDiff: 0,
        settlementType: 'none',
        amount: 0,
        hint: '无需退补税',
      },
    };

    service.downloadCsv([], completeMockSummary, '深圳市', 2026);

    expect(createElementSpy).toHaveBeenCalledWith('a');
    expect(mockClick).toHaveBeenCalled();

    createElementSpy.mockRestore();
    appendChildSpy.mockRestore();
    removeChildSpy.mockRestore();
  });
});
