import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';

/**
 * 顶部导航与使用指南弹窗页面对象
 */
export class NavbarHelpPage extends BasePage {
  readonly navbar: Locator;
  readonly brandTitle: Locator;
  readonly helpButton: Locator;

  // 帮助弹窗
  readonly dialogContainer: Locator;
  readonly dialogTitle: Locator;
  readonly dialogContent: Locator;
  readonly dialogCloseButton: Locator;
  readonly supportedCitiesContainer: Locator;
  readonly supportedCityChips: Locator;

  constructor(page: Page) {
    super(page);
    this.navbar = page.locator('app-navbar');
    this.brandTitle = page.getByTestId('navbar-brand');
    this.helpButton = page.getByTestId('navbar-help-btn');

    this.dialogContainer = page.locator('mat-dialog-container');
    this.dialogTitle = page.getByTestId('help-dialog-title');
    this.dialogContent = page.getByTestId('help-dialog-content');
    this.dialogCloseButton = page.getByTestId('help-dialog-close-btn');
    this.supportedCitiesContainer = page.getByTestId(
      'supported-cities-container',
    );
    this.supportedCityChips = page.getByTestId('supported-city-chip');
  }

  /**
   * 点击打开帮助指南弹窗
   */
  async openHelpDialog(): Promise<void> {
    await this.helpButton.click();
    await this.dialogContainer.waitFor({ state: 'visible' });
  }

  /**
   * 点击关闭帮助弹窗
   */
  async closeHelpDialog(): Promise<void> {
    await this.dialogCloseButton.click();
    await this.dialogContainer.waitFor({ state: 'hidden' });
  }

  /**
   * 获取帮助弹窗内容文本
   */
  async getHelpContentText(): Promise<string> {
    return (await this.dialogContent.textContent()) || '';
  }
}
