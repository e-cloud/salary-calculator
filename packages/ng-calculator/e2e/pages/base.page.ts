import { Page, Locator } from '@playwright/test';

/**
 * 页面对象基类
 */
export class BasePage {
  constructor(protected readonly page: Page) {}

  /**
   * 导航至计算器首页
   * @param preventAutoGuide 是否预设已读状态以防止首次自动弹出遮挡（默认为 true，保证常规测试稳定）
   */
  async goto(preventAutoGuide = true): Promise<void> {
    if (preventAutoGuide) {
      await this.page.addInitScript(() => {
        localStorage.setItem('salary_calculator_guide_shown', 'true');
      });
    }
    await this.page.goto('/', { waitUntil: 'commit' });
    await this.page.waitForSelector('app-calculator-form', {
      state: 'visible',
      timeout: 20000,
    });
  }

  /**
   * 等待指定元素可见
   */
  async waitForVisible(locator: Locator): Promise<void> {
    await locator.waitFor({ state: 'visible' });
  }

  /**
   * 等待指定元素隐藏
   */
  async waitForHidden(locator: Locator): Promise<void> {
    await locator.waitFor({ state: 'hidden' });
  }

  /**
   * 从带有货币符号的字符串中提取数值
   * 例如 "¥1,2488.40" -> 12488.4, "¥6,0000.00 (¥5790.00)" -> 60000
   */
  parseAmount(text: string): number {
    const match = text.match(/¥?\s*([\d,]+(\.\d+)?)/);
    if (!match) {
      return 0;
    }
    const cleanStr = match[1].replace(/,/g, '');
    return parseFloat(cleanStr) || 0;
  }
}
