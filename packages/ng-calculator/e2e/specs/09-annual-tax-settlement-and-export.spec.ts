import { test, expect } from '@playwright/test';
import { CalculatorFormPage } from '../pages/calculator-form.page';
import { MonthlyResultsPage } from '../pages/monthly-results.page';
import { SummaryChartsPage } from '../pages/summary-charts.page';

test.describe('Suite 9: 汇算清缴退补税精准预测与 CSV 报表导出 (Tax Settlement & Export)', () => {
  let formPage: CalculatorFormPage;
  let resultsPage: MonthlyResultsPage;
  let summaryPage: SummaryChartsPage;

  test.beforeEach(async ({ page }) => {
    formPage = new CalculatorFormPage(page);
    resultsPage = new MonthlyResultsPage(page);
    summaryPage = new SummaryChartsPage(page);
    await formPage.goto();
  });

  test('TC-901: 年中第 7 个月换工作开启新周期，年度汇总卡片展示补税预警', async ({
    page,
  }) => {
    // Arrange: 输入月薪 20,000 并计算
    await formPage.fillSalary(20000);
    await formPage.calculate();
    await expect(resultsPage.panels).toHaveCount(12);

    // 在第 7 个月开启换工作并点击更新
    await resultsPage.setNewPayCycle(7, true);
    await resultsPage.clickUpdateMonth(7);

    // Assert: 汇总卡片中展示汇算清缴补税卡片
    const settlementCard = page.getByTestId('annual-tax-settlement-card');
    await expect(settlementCard).toBeVisible();
    await expect(settlementCard).toContainText('年度汇算预计需补税');
  });

  test('TC-902: 正常单单位常规测算（未跳槽），年度汇总区无需显示退补税警示卡片', async ({
    page,
  }) => {
    // Arrange: 输入月薪 25,000 + 年终奖 13,173 并计算
    await formPage.fillSalary(25000, 13173);
    await formPage.calculate();
    await expect(resultsPage.panels).toHaveCount(12);

    // Assert: 汇算清缴退补税卡片不存在（不产生假误报）
    const settlementCard = page.getByTestId('annual-tax-settlement-card');
    await expect(settlementCard).toHaveCount(0);
  });

  test('TC-903: 点击“导出 12 个月明细报表 (CSV)”能够成功触发下载并生成有效内容', async ({
    page,
  }) => {
    // Arrange: 输入常规月薪并计算
    await formPage.fillSalary(15000, 30000);
    await formPage.calculate();
    await expect(resultsPage.panels).toHaveCount(12);

    // Act: 确认导出按钮可见后点击并捕获下载事件
    const exportBtn = page.getByTestId('btn-export-csv');
    await expect(exportBtn).toBeVisible();

    const downloadPromise = page.waitForEvent('download');
    await exportBtn.click();
    const download = await downloadPromise;

    // Assert: 验证下载文件名
    expect(download.suggestedFilename()).toContain('.csv');
    expect(download.suggestedFilename()).toContain('薪税明细表');
  });
});
