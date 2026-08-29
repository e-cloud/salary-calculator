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
});
