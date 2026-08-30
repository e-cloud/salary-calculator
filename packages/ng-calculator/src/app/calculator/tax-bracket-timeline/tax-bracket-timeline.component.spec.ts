/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import { calculateMonthlyIncomes, MonthlyIncomeMeta } from 'calculator-core';
import { TaxBracketTimelineComponent } from './tax-bracket-timeline.component';
import { NGX_ECHARTS_CONFIG } from 'ngx-echarts';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

describe('TaxBracketTimelineComponent 阶梯税率时序分析卡片测试', () => {
  const baseMeta: MonthlyIncomeMeta = {
    salary: 25000,
    freeTaxQuota: 5000,
    insuranceBase: 25000,
    housingFundBase: 25000,
    housingFundRate: 0.05,
    insuranceRate: {
      endowment: 0.08,
      health: 0.02,
      unemployment: 0.005,
    },
    annualBonus: 0,
    insuranceBaseRange: {
      endowment: [2000, 35000],
      health: [2000, 35000],
      unemployment: [2000, 35000],
      birth: [2000, 35000],
      occupationalInjury: [2000, 35000],
    },
    housingFundBaseRange: [2000, 35000],
    newPayCycle: false,
    employer: {
      insuranceRate: {
        endowment: 0.16,
        health: 0.08,
        unemployment: 0.005,
        birth: 0.01,
        occupationalInjury: 0.005,
      },
      housingFundRate: 0.05,
    },
    insuranceBaseOnLastMonth: false,
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
  };

  const sampleMonthlyIncomes = calculateMonthlyIncomes(
    Array(12)
      .fill(0)
      .map(() => ({ ...baseMeta })),
  );

  async function setup(
    monthlyIncomes = sampleMonthlyIncomes,
    clear = false,
    selectedMonth = 1,
  ) {
    const changeSelectedMonthSpy = vi.fn();

    const result = await render(TaxBracketTimelineComponent, {
      providers: [
        provideAnimationsAsync(),
        {
          provide: NGX_ECHARTS_CONFIG,
          useValue: { echarts: () => import('echarts') },
        },
      ],
      componentInputs: {
        monthlyIncomes,
        clear,
        selectedMonth,
      },
      componentOutputs: {
        changeSelectedMonth: { emit: changeSelectedMonthSpy } as any,
      },
    });

    return { ...result, changeSelectedMonthSpy };
  }

  it('当 clear 为 true 时不渲染任何卡片内容', async () => {
    // Arrange
    const { container } = await setup(sampleMonthlyIncomes, true);

    // Assert
    expect(
      container.querySelector('[data-testid="tax-bracket-timeline-card"]'),
    ).toBeNull();
  });

  it('正确渲染卡片标题、双 Tab（时间轴分析与趋势图分析）及 12 个时间轴节点', async () => {
    // Arrange & Act
    await setup();

    // Assert
    expect(screen.getByText(/阶梯税率时序分析/i)).toBeDefined();
    expect(screen.getByText('时间轴分析')).toBeDefined();
    expect(screen.getByText('趋势图分析')).toBeDefined();

    // 验证 1~12 月节点全部渲染
    for (let m = 1; m <= 12; m++) {
      expect(screen.getByTestId(`timeline-node-${m}`)).toBeDefined();
    }
  });

  it('对于月薪 25000 元，正确标记跳档月份并展示冲击洞察卡片', async () => {
    // Arrange & Act
    await setup();

    // Assert: 月薪 25000 发生跳档，验证跳档徽章与冲击卡片
    const transitionNodes = document.querySelectorAll('.transition-node');
    expect(transitionNodes.length).toBeGreaterThanOrEqual(1);

    const insightCards = document.querySelectorAll('.insight-card');
    expect(insightCards.length).toBeGreaterThanOrEqual(1);
  });

  it('用户点击某月份节点时，触发 changeSelectedMonth 事件并联动更新详情', async () => {
    // Arrange
    const user = userEvent.setup();
    const { changeSelectedMonthSpy } = await setup();
    const month5Node = screen.getByTestId('timeline-node-5');

    // Act
    await user.click(month5Node);

    // Assert
    expect(changeSelectedMonthSpy).toHaveBeenCalledWith(5);
    expect(screen.getByText(/5月份.*阶梯所得与门槛安全余量/i)).toBeDefined();
  });

  it('切换至“趋势图分析”Tab 时渲染 ECharts 图表容器', async () => {
    // Arrange
    const user = userEvent.setup();
    await setup();
    const trendTab = screen.getByText('趋势图分析');

    // Act
    await user.click(trendTab);

    // Assert: 使用 findByTestId 等待 Tab 切换动画完成
    const chartContainer = await screen.findByTestId('trend-chart-container');
    expect(chartContainer).toBeDefined();
  });
});
