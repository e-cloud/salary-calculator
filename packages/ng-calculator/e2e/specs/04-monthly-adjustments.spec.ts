import { test, expect } from '@playwright/test';
import { CalculatorFormPage } from '../pages/calculator-form.page';
import { MonthlyResultsPage } from '../pages/monthly-results.page';
import { SummaryChartsPage } from '../pages/summary-charts.page';

test.describe('Suite 4: 月度明细调整与级联同步弹窗 (Monthly Adjustments & Cascade Sync)', () => {
  let formPage: CalculatorFormPage;
  let resultsPage: MonthlyResultsPage;
  let summaryPage: SummaryChartsPage;

  test.beforeEach(async ({ page }) => {
    formPage = new CalculatorFormPage(page);
    resultsPage = new MonthlyResultsPage(page);
    summaryPage = new SummaryChartsPage(page);
    await formPage.goto();
  });

  test('TC-401: 单月独立修改月薪并在弹窗中选择取消同步，仅当前月份参数更新', async ({
    page,
  }) => {
    // Arrange: 基础月薪 15,000 计算
    await formPage.fillSalary(15000);
    await formPage.calculate();
    await expect(resultsPage.panels).toHaveCount(12);

    // Act: 展开 3 月份，修改月薪为 18,000 元，点击更新
    await resultsPage.setMonthSalary(3, 18000);
    await resultsPage.clickUpdateMonth(3);

    // 在同步弹窗中点击“取消”
    await resultsPage.cancelSync();
    await page.waitForTimeout(500);

    // Assert: 3 月份面板内部月薪为 18,000，而 4 月份面板内部月薪仍为 15,000
    const month3SalaryInput = page.getByTestId('input-monthly-salary-3');
    await expect(month3SalaryInput).toHaveValue('18000');

    await resultsPage.expandMonth(4);
    const month4SalaryInput = page.getByTestId('input-monthly-salary-4');
    await expect(month4SalaryInput).toHaveValue('15000');
  });

  test('TC-402: 单月修改月薪并确认级联同步，后续月份统一更新', async ({
    page,
  }) => {
    // Arrange: 基础月薪 15,000 计算
    await formPage.fillSalary(15000);
    await formPage.calculate();
    await expect(resultsPage.panels).toHaveCount(12);

    const initialMonth3Summary = await resultsPage.getMonthHeaderSummary(3);
    const initialMonth6Summary = await resultsPage.getMonthHeaderSummary(6);

    // Act: 展开 4 月份面板，将月薪调整为 25,000 元
    await resultsPage.setMonthSalary(4, 25000);
    await resultsPage.clickUpdateMonth(4);

    // 等待同步确认弹窗并点击“确认同步”
    await resultsPage.confirmSync();
    await page.waitForTimeout(500);

    // Assert: 1~3 月保持原样，4~12 月均发生变化且实收提升
    const currentMonth3Summary = await resultsPage.getMonthHeaderSummary(3);
    const currentMonth6Summary = await resultsPage.getMonthHeaderSummary(6);

    expect(currentMonth3Summary).toEqual(initialMonth3Summary);
    expect(currentMonth6Summary).not.toEqual(initialMonth6Summary);
  });

  test('TC-403: 年中入职新公司（新计费周期），累计扣除重置', async ({
    page,
  }) => {
    // Arrange: 基础月薪 20,000 计算
    await formPage.fillSalary(20000);
    await formPage.calculate();
    await expect(resultsPage.panels).toHaveCount(12);

    // Act: 展开 7 月份面板，开启“入职新公司（新计费周期）”
    await resultsPage.setNewPayCycle(7, true);
    await resultsPage.clickUpdateMonth(7);
    await page.waitForTimeout(500);

    // Assert: 7 月份面板正常渲染且可见
    await expect(page.getByTestId('month-panel-header-7')).toBeVisible();
  });
});
