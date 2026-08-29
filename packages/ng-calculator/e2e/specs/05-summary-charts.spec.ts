import { test, expect } from '@playwright/test';
import { CalculatorFormPage } from '../pages/calculator-form.page';
import { MonthlyResultsPage } from '../pages/monthly-results.page';
import { SummaryChartsPage } from '../pages/summary-charts.page';

test.describe('Suite 5: 统计图表展示与月份联动 (Summary Charts & Interactions)', () => {
  let formPage: CalculatorFormPage;
  let resultsPage: MonthlyResultsPage;
  let summaryPage: SummaryChartsPage;

  test.beforeEach(async ({ page }) => {
    formPage = new CalculatorFormPage(page);
    resultsPage = new MonthlyResultsPage(page);
    summaryPage = new SummaryChartsPage(page);
    await formPage.goto();
  });

  test('TC-501: 计算后 3 个图表 Tab 切换平滑且 ECharts 容器正常渲染', async ({
    page,
  }) => {
    // Arrange: 输入月薪 18,000 进行基础测算
    await formPage.fillSalary(18000);
    await formPage.calculate();
    await page.waitForTimeout(500);

    // Assert 1: 默认在“月薪扣除项分析”Tab，ECharts 容器可见
    await expect(summaryPage.echartsMonthly).toBeVisible();

    // Act & Assert 2: 切换至“年度扣除项分析”
    await summaryPage.selectAnnualDeductionTab();
    await expect(summaryPage.echartsAnnualDeduction).toBeVisible();
    await expect(
      page.getByTestId('text-annual-deduction-formula'),
    ).toBeVisible();

    // Act & Assert 3: 切换至“年度收入分析”
    await summaryPage.selectAnnualIncomeTab();
    await expect(summaryPage.echartsAnnualIncome).toBeVisible();
    await expect(page.getByTestId('text-annual-income-formula')).toBeVisible();
  });

  test('TC-502: 点击展开不同月份折叠面板，图表区域月份选择与明细联动更新', async ({
    page,
  }) => {
    // Arrange: 输入月薪 15,000 并计算
    await formPage.fillSalary(15000);
    await formPage.calculate();
    await expect(resultsPage.panels).toHaveCount(12);
    await page.waitForTimeout(500);

    // Act: 展开第 5 月面板
    await resultsPage.expandMonth(5);
    await page.waitForTimeout(300);

    // Assert: 图表区域的月份选择框显示 5
    const selectedMonth = await summaryPage.getChartSelectedMonth();
    expect(selectedMonth.trim()).toBe('5');
  });
});
