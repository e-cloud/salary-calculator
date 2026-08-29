import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';

/**
 * 城市计算参数与政策依据双 Tab 弹窗页面对象 (纯 data-testid 驱动)
 */
export class CityRecipeDialogPage extends BasePage {
  readonly dialogContainer: Locator;
  readonly dialogTitle: Locator;
  readonly closeButton: Locator;
  readonly citySidebar: Locator;
  readonly minWageValue: Locator;
  readonly avgWageValue: Locator;
  readonly localAvgWageValue: Locator;
  readonly totalEmployeeRateValue: Locator;
  readonly totalEmployerRateValue: Locator;
  readonly referenceLinks: Locator;

  constructor(page: Page) {
    super(page);

    this.dialogContainer = page.locator('mat-dialog-container');
    this.dialogTitle = page.getByTestId('recipe-dialog-title');
    this.closeButton = page.getByTestId('btn-close-dialog');
    this.citySidebar = page.getByTestId('city-sidebar');
    this.minWageValue = page.getByTestId('val-min-wage');
    this.avgWageValue = page.getByTestId('val-avg-wage');
    this.localAvgWageValue = page.getByTestId('val-local-avg-wage');
    this.totalEmployeeRateValue = page.getByTestId('total-employee-rate');
    this.totalEmployerRateValue = page.getByTestId('total-employer-rate');
    this.referenceLinks = page.locator('.reference-link-item');
  }

  /**
   * 点击左侧竖向城市 Tab 项
   * @param cityKey 城市唯一标识，例如 'beijing', 'shanghai', 'guangzhou', 'shenzhen-1', 'shenzhen-2'
   */
  async selectCity(cityKey: string): Promise<void> {
    const tab = this.page.getByTestId(`city-tab-${cityKey}`);
    await tab.waitFor({ state: 'visible' });
    await tab.click();
    await this.page.waitForTimeout(300);
  }

  /**
   * 点击右侧横向年份 Tab
   * @param year 年份，如 2026, 2025, 2024
   */
  async selectYear(year: number | string): Promise<void> {
    const tab = this.page.getByTestId(`year-tab-${year}`);
    await tab.waitFor({ state: 'visible' });
    await tab.click();
    await this.page.waitForTimeout(300);
  }

  /**
   * 获取最低工资显示文本
   */
  async getMinWageText(): Promise<string> {
    await this.minWageValue.waitFor({ state: 'visible' });
    return (await this.minWageValue.textContent()) || '';
  }

  /**
   * 获取本地在岗职工月均工资显示文本（若存在）
   */
  async getLocalAvgWageText(): Promise<string> {
    await this.localAvgWageValue.waitFor({ state: 'visible' });
    return (await this.localAvgWageValue.textContent()) || '';
  }

  /**
   * 获取个人五险合计费率文本
   */
  async getTotalEmployeeRateText(): Promise<string> {
    await this.totalEmployeeRateValue.waitFor({ state: 'visible' });
    return (await this.totalEmployeeRateValue.textContent()) || '';
  }

  /**
   * 获取企业五险合计费率文本
   */
  async getTotalEmployerRateText(): Promise<string> {
    await this.totalEmployerRateValue.waitFor({ state: 'visible' });
    return (await this.totalEmployerRateValue.textContent()) || '';
  }

  /**
   * 获取社平工资显示文本
   */
  async getAvgWageText(): Promise<string> {
    await this.avgWageValue.waitFor({ state: 'visible' });
    return (await this.avgWageValue.textContent()) || '';
  }

  /**
   * 获取参考政策链接数量
   */
  async getReferenceLinksCount(): Promise<number> {
    return await this.referenceLinks.count();
  }

  /**
   * 获取指定索引的政策外链 href 属性与 target 属性
   */
  async getReferenceLinkInfo(
    index: number,
  ): Promise<{ href: string | null; target: string | null; text: string }> {
    const link = this.referenceLinks.nth(index);
    return {
      href: await link.getAttribute('href'),
      target: await link.getAttribute('target'),
      text: ((await link.textContent()) || '').trim(),
    };
  }

  /**
   * 点击右上角关闭按钮
   */
  async close(): Promise<void> {
    await this.closeButton.click();
    await this.dialogContainer.waitFor({ state: 'hidden' });
  }
}
