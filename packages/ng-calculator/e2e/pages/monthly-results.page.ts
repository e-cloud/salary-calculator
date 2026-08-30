import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';

/**
 * 月度计算结果明细页面对象 (纯 data-testid 驱动)
 */
export class MonthlyResultsPage extends BasePage {
  readonly accordion: Locator;
  readonly panels: Locator;
  readonly syncDialogTitle: Locator;
  readonly syncConfirmButton: Locator;
  readonly syncCancelButton: Locator;

  constructor(page: Page) {
    super(page);
    this.accordion = page.getByTestId('monthly-results-accordion');
    this.panels = page.locator('app-monthly-results mat-expansion-panel');
    this.syncDialogTitle = page.getByTestId('sync-dialog-title');
    this.syncConfirmButton = page.getByTestId('btn-sync-confirm');
    this.syncCancelButton = page.getByTestId('btn-sync-cancel');
  }

  /**
   * 获取月份面板总数量（应为 12）
   */
  async getMonthPanelCount(): Promise<number> {
    return await this.panels.count();
  }

  /**
   * 获取指定月份（1-12）的折叠面板
   */
  getMonthPanel(month: number): Locator {
    return this.page.getByTestId(`month-panel-${month}`);
  }

  /**
   * 获取指定月份面板头部的摘要文本（实收、公积金、个税、公司成本等）
   */
  async getMonthHeaderSummary(month: number): Promise<string> {
    const panelHeader = this.page.getByTestId(`month-panel-header-${month}`);
    return (await panelHeader.textContent()) || '';
  }

  /**
   * 展开指定月份面板
   */
  async expandMonth(month: number): Promise<void> {
    const panelHeader = this.page.getByTestId(`month-panel-header-${month}`);
    const isExpanded =
      (await panelHeader.getAttribute('aria-expanded')) === 'true';
    if (!isExpanded) {
      await panelHeader.click();
    }
  }

  /**
   * 修改指定月份的月薪
   */
  async setMonthSalary(month: number, salary: number): Promise<void> {
    await this.expandMonth(month);
    const salaryInput = this.page.getByTestId(`input-monthly-salary-${month}`);
    await salaryInput.fill(String(salary));
  }

  /**
   * 修改指定月份的月度奖金
   */
  async setMonthlyBonus(month: number, bonus: number): Promise<void> {
    await this.expandMonth(month);
    const bonusInput = this.page.getByTestId(`input-monthly-bonus-${month}`);
    await bonusInput.fill(String(bonus));
  }

  /**
   * 修改指定月份的个人与企业补充公积金比例
   */
  async setSupplementaryHousingFund(
    month: number,
    employeeRate: number,
    employerRate: number,
  ): Promise<void> {
    await this.expandMonth(month);
    const empInput = this.page.getByTestId(
      `input-supplementary-housing-fund-rate-${month}`,
    );
    const employerInput = this.page.getByTestId(
      `input-supplementary-housing-fund-employer-rate-${month}`,
    );
    await empInput.fill(String(employeeRate));
    await employerInput.fill(String(employerRate));
  }

  /**
   * 设置“入职新公司（新计费周期）”开关
   */
  async setNewPayCycle(month: number, enable: boolean): Promise<void> {
    await this.expandMonth(month);
    const toggle = this.page.getByTestId(`toggle-new-pay-cycle-${month}`);
    const isChecked = await toggle.evaluate(
      (el: HTMLElement) =>
        el.classList.contains('mat-mdc-slide-toggle-checked') ||
        el.querySelector('button')?.getAttribute('aria-checked') === 'true',
    );
    if (isChecked !== enable) {
      await toggle.click();
    }
  }

  /**
   * 点击单月面板内的“更新”按钮
   */
  async clickUpdateMonth(month: number): Promise<void> {
    const updateBtn = this.page.getByTestId(`btn-update-month-${month}`);
    await updateBtn.click();
  }

  /**
   * 处理同步确认弹窗：确认同步
   */
  async confirmSync(): Promise<void> {
    await this.syncConfirmButton.waitFor({ state: 'visible' });
    await this.syncConfirmButton.click();
    await this.syncDialogTitle.waitFor({ state: 'hidden' });
  }

  /**
   * 处理同步确认弹窗：取消同步
   */
  async cancelSync(): Promise<void> {
    await this.syncCancelButton.waitFor({ state: 'visible' });
    await this.syncCancelButton.click();
    await this.syncDialogTitle.waitFor({ state: 'hidden' });
  }
}
