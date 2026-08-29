/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { CityRecipe } from 'calculator-core';
import { CalculatorFormComponent } from './calculator-form.component';
import { CityRecipeDialogComponent } from '../city-recipe-dialog/city-recipe-dialog.component';

describe('CalculatorFormComponent 基础计算表单组件测试', () => {
  const mockDialog = {
    open: vi.fn(),
  };

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

  async function setup() {
    mockDialog.open.mockClear();
    const calculateSpy = vi.fn();
    const clearResultSpy = vi.fn();

    const result = await render(CalculatorFormComponent, {
      providers: [provideAnimationsAsync()],
      componentProviders: [{ provide: MatDialog, useValue: mockDialog }],
      componentInputs: {
        usePredefinedInsurancePercents: true,
        cityRecipe: mockRecipe,
        recipeIndex$: of([
          { id: 1, label: '测试城市', city: '测试城市', file: 'test.json' },
        ]),
      },
      componentOutputs: {
        calculate: { emit: calculateSpy } as any,
        clearResult: { emit: clearResultSpy } as any,
      },
    });

    return { ...result, calculateSpy, clearResultSpy };
  }

  it('正确渲染表单字段与计算按钮', async () => {
    // Arrange
    await setup();

    // Act & Assert
    expect(screen.getByText('基础信息')).toBeDefined();
    expect(screen.getByText('计算')).toBeDefined();
    expect(screen.getByText('重置')).toBeDefined();
    expect(screen.getByText('清空结果')).toBeDefined();
  });

  it('用户输入月薪并点击计算按钮时，应触发 calculate 事件输出计算参数', async () => {
    // Arrange
    const user = userEvent.setup();
    const { calculateSpy } = await setup();
    const calculateButton = screen.getByText('计算');

    // Act
    await user.click(calculateButton);

    // Assert
    expect(calculateSpy).toHaveBeenCalledTimes(1);
    const params = calculateSpy.mock.calls[0][0];
    expect(params.monthSalary).toBe(10000);
  });

  it('用户点击“重置”按钮时应重置表单为默认值', async () => {
    // Arrange
    const user = userEvent.setup();
    await setup();
    const resetButton = screen.getByText('重置');

    // Act
    await user.click(resetButton);

    // Assert
    expect(screen.getByText('基础信息')).toBeDefined();
  });

  it('用户点击“政策参数”按钮时应通过 MatDialog 打开 CityRecipeDialogComponent', async () => {
    // Arrange
    const user = userEvent.setup();
    await setup();
    const policyParamsBtn = screen.getByTestId('btn-view-policy-params');

    // Act
    await user.click(policyParamsBtn);

    // Assert
    expect(mockDialog.open).toHaveBeenCalledTimes(1);
    expect(mockDialog.open).toHaveBeenCalledWith(
      CityRecipeDialogComponent,
      expect.objectContaining({
        data: expect.objectContaining({
          currentRecipeId: 1,
        }),
      }),
    );
  });
});
