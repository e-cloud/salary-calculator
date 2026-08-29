import { test, expect } from '@playwright/test';
import { CalculatorFormPage } from '../pages/calculator-form.page';
import { MonthlyResultsPage } from '../pages/monthly-results.page';
import { SummaryChartsPage } from '../pages/summary-charts.page';

test.describe('Suite 10: 特殊政策（应届生与副业）与使用指南说明 (Special Policies & Notes)', () => {
  let formPage: CalculatorFormPage;
  let resultsPage: MonthlyResultsPage;
  let summaryPage: SummaryChartsPage;

  test.beforeEach(async ({ page }) => {
    formPage = new CalculatorFormPage(page);
    resultsPage = new MonthlyResultsPage(page);
    summaryPage = new SummaryChartsPage(page);
    await formPage.goto();
  });

  test('TC-1001: 开启当年首次参加工作/应届生，表单与测算正常响应', async ({
    page,
  }) => {
    // 展开特殊身份折叠面板
    const panelHeader = page.getByText(
      '应届毕业生 / 首次入职 & 副业所得申报 (可选)',
    );
    await panelHeader.click();

    // 开启应届生开关
    const toggleFirstJob = page.getByTestId('toggle-first-job');
    await toggleFirstJob.click();

    // 选择 7 月入职
    const monthSelect = page.getByTestId('select-first-job-month');
    await expect(monthSelect).toBeVisible();

    // 填写月薪 15,000 并计算
    await formPage.fillSalary(15000);
    await formPage.calculate();

    // 验证渲染出月度结果
    await expect(resultsPage.panels).toHaveCount(12);
  });

  test('TC-1002: 查看使用指南，包含计算边界与特殊政策说明', async ({
    page,
  }) => {
    // Act: 点击顶部帮助按钮
    const helpBtn = page.getByTestId('navbar-help-btn');
    await helpBtn.click();

    // Assert: 验证使用指南弹窗包含政策边界说明
    const dialogTitle = page.getByTestId('help-dialog-title');
    await expect(dialogTitle).toBeVisible();

    const dialogContent = page.getByTestId('help-dialog-content');
    await expect(dialogContent).toContainText('计算边界与特殊政策说明');
    await expect(dialogContent).toContainText('全年一次性奖金');
    await expect(dialogContent).toContainText('长期护理保险');

    // 关闭弹窗
    await page.getByTestId('help-dialog-close-btn').click();
  });
});
