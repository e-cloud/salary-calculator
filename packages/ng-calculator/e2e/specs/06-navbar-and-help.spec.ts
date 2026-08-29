import { test, expect } from '@playwright/test';
import { NavbarHelpPage } from '../pages/navbar-help.page';
import { CalculatorFormPage } from '../pages/calculator-form.page';
import { MonthlyResultsPage } from '../pages/monthly-results.page';

test.describe('Suite 6: 顶部导航、帮助指南弹窗与响应式适配 (Navbar, Help & Responsive)', () => {
  let navbarPage: NavbarHelpPage;
  let formPage: CalculatorFormPage;
  let resultsPage: MonthlyResultsPage;

  test.beforeEach(async ({ page }) => {
    navbarPage = new NavbarHelpPage(page);
    formPage = new CalculatorFormPage(page);
    resultsPage = new MonthlyResultsPage(page);
    await navbarPage.goto();
  });

  test('TC-601: 点击顶部帮助按钮，正常弹出使用指南并在点击关闭后销毁', async () => {
    // Act: 点击顶部帮助按钮
    await navbarPage.openHelpDialog();

    // Assert: 验证弹窗容器与标题均可见
    await expect(navbarPage.dialogContainer).toBeVisible();
    await expect(navbarPage.dialogTitle).toBeVisible();
    await expect(navbarPage.dialogContent).toBeVisible();

    // Act: 点击关闭按钮
    await navbarPage.closeHelpDialog();

    // Assert: 弹窗已销毁
    await expect(navbarPage.dialogContainer).toBeHidden();
  });

  test('TC-602: 移动端视口 (375x667) 下布局自适应且表单可完整操作', async ({
    page,
  }) => {
    // Arrange: 设置移动端视口
    await page.setViewportSize({ width: 375, height: 667 });

    // Assert: 顶部导航栏与基础表单均正常可见
    await expect(navbarPage.navbar).toBeVisible();
    await expect(formPage.monthSalaryInput).toBeVisible();

    // Act: 输入月薪并点击计算
    await formPage.fillSalary(12000);
    await formPage.calculate();

    // Assert: 12 个月折叠卡片正常渲染
    await expect(resultsPage.panels).toHaveCount(12);
  });

  test('TC-603: 首次访问应用（localStorage 无标记）时，系统默认自动弹出使用指南并在关闭后写入标记', async ({
    browser,
  }) => {
    // Arrange: 创建全新独立的 BrowserContext，无任何预设 storage 与 initScript
    const freshContext = await browser.newContext();
    const freshPage = await freshContext.newPage();
    const freshNavbarPage = new NavbarHelpPage(freshPage);

    // Act: 打开首页
    await freshPage.goto('/');
    await freshPage.waitForLoadState('networkidle');

    // Assert: 验证使用指南弹窗自动弹出
    await expect(freshNavbarPage.dialogContainer).toBeVisible();
    await expect(freshNavbarPage.dialogTitle).toHaveText(/使用指南/);

    // Act: 点击关闭按钮
    await freshNavbarPage.closeHelpDialog();
    await expect(freshNavbarPage.dialogContainer).toBeHidden();

    // Assert: 验证 localStorage 已记录已读标记
    const isShown = await freshPage.evaluate(() =>
      localStorage.getItem('salary_calculator_guide_shown'),
    );
    expect(isShown).toBe('true');

    await freshContext.close();
  });

  test('TC-604: 使用指南弹窗中消费 Store 动态展示支持城市列表（深圳、北京、上海、广州）', async () => {
    // Act: 手动打开使用指南
    await navbarPage.openHelpDialog();

    // Assert: 验证支持城市容器可见，且包含主要城市徽章
    await expect(navbarPage.supportedCitiesContainer).toBeVisible();
    const chipsText = await navbarPage.supportedCitiesContainer.innerText();
    expect(chipsText).toContain('深圳');
    expect(chipsText).toContain('北京');
    expect(chipsText).toContain('上海');
    expect(chipsText).toContain('广州');

    // 关闭弹窗
    await navbarPage.closeHelpDialog();
  });

  test('TC-605: 当 salary_calculator_guide_shown 为 false 时，系统依然自动弹出使用指南并在关闭后更新为 true', async ({
    browser,
  }) => {
    // Arrange: 创建新 context 并预设 storage 值为 'false'
    const freshContext = await browser.newContext();
    const freshPage = await freshContext.newPage();
    const freshNavbarPage = new NavbarHelpPage(freshPage);

    await freshPage.addInitScript(() => {
      localStorage.setItem('salary_calculator_guide_shown', 'false');
    });

    // Act: 访问首页
    await freshPage.goto('/');
    await freshPage.waitForLoadState('networkidle');

    // Assert: 验证弹窗成功弹出
    await expect(freshNavbarPage.dialogContainer).toBeVisible();
    await expect(freshNavbarPage.dialogTitle).toHaveText(/使用指南/);

    // Act: 关闭弹窗
    await freshNavbarPage.closeHelpDialog();
    await expect(freshNavbarPage.dialogContainer).toBeHidden();

    // Assert: 验证 storage 成功翻转为 'true'
    const isShown = await freshPage.evaluate(() =>
      localStorage.getItem('salary_calculator_guide_shown'),
    );
    expect(isShown).toBe('true');

    await freshContext.close();
  });
});
