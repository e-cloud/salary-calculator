import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';

/**
 * 图表与年度汇总页面对象 (纯 data-testid 驱动)
 */
export class SummaryChartsPage extends BasePage {
  readonly tabGroup: Locator;
  readonly tabMonthlyDeduction: Locator;
  readonly tabAnnualDeduction: Locator;
  readonly tabAnnualIncome: Locator;
  readonly echartsMonthly: Locator;
  readonly echartsAnnualDeduction: Locator;
  readonly echartsAnnualIncome: Locator;
  readonly summaryCard: Locator;

  constructor(page: Page) {
    super(page);
    this.tabGroup = page.getByTestId('charts-tab-group');
    this.tabMonthlyDeduction = page.getByTestId('tab-monthly-deduction');
    this.tabAnnualDeduction = page.getByTestId('tab-annual-deduction');
    this.tabAnnualIncome = page.getByTestId('tab-annual-income');
    this.echartsMonthly = page.getByTestId('echarts-monthly-deduction');
    this.echartsAnnualDeduction = page.getByTestId('echarts-annual-deduction');
    this.echartsAnnualIncome = page.getByTestId('echarts-annual-income');
    this.summaryCard = page.getByTestId('summary-details-card');
  }

  /**
   * 切换至“月薪扣除项分析” Tab
   */
  async selectMonthlyDeductionTab(): Promise<void> {
    await this.tabMonthlyDeduction.click();
    await this.page.waitForTimeout(200);
  }

  /**
   * 切换至“年度扣除项分析” Tab
   */
  async selectAnnualDeductionTab(): Promise<void> {
    await this.tabAnnualDeduction.click();
    await this.page.waitForTimeout(200);
  }

  /**
   * 切换至“年度收入分析” Tab
   */
  async selectAnnualIncomeTab(): Promise<void> {
    await this.tabAnnualIncome.click();
    await this.page.waitForTimeout(200);
  }

  /**
   * 获取月薪扣除项分析下的月份选择器当前值
   */
  async getChartSelectedMonth(): Promise<string> {
    const monthSelect = this.page.getByTestId('select-chart-month');
    return (await monthSelect.textContent()) || '';
  }

  /**
   * 通过 testid 获取年度汇总卡片中指定条目的金额文本
   */
  async getSummaryValue(testId: string): Promise<string> {
    const figure = this.page.getByTestId(testId);
    return (await figure.textContent()) || '';
  }

  /**
   * 判断汇总卡片是否可见
   */
  async isSummaryVisible(): Promise<boolean> {
    return await this.summaryCard.isVisible();
  }
}
