import { test, expect } from '@playwright/test';
import { CalculatorFormPage } from '../pages/calculator-form.page';
import { MonthlyResultsPage } from '../pages/monthly-results.page';
import { SummaryChartsPage } from '../pages/summary-charts.page';
import { TEST_DATA } from '../fixtures/test-data';

test.describe('Suite 1: 基础流程与常规计算 (Basic Calculation & Smoke)', () => {
  let formPage: CalculatorFormPage;
  let resultsPage: MonthlyResultsPage;
  let summaryPage: SummaryChartsPage;

  test.beforeEach(async ({ page }) => {
    formPage = new CalculatorFormPage(page);
    resultsPage = new MonthlyResultsPage(page);
    summaryPage = new SummaryChartsPage(page);
    await formPage.goto();
  });

  test('TC-101: 默认深圳配方常规月薪测算，正确输出 12 个月明细与年度汇总', async () => {
    // Arrange: 输入常规月薪 15,000 元
    await formPage.fillSalary(TEST_DATA.basicSalaryCase.monthSalary);

    // Act: 点击计算
    await formPage.calculate();

    // Assert: 验证渲染出 12 个月的折叠面板
    await expect(resultsPage.panels).toHaveCount(12);

    // 验证第 1 月面板摘要可见
    const month1Summary = await resultsPage.getMonthHeaderSummary(1);
    expect(month1Summary.length).toBeGreaterThan(0);

    // 验证年度汇总卡片展示
    const isSummaryVisible = await summaryPage.isSummaryVisible();
    expect(isSummaryVisible).toBe(true);

    const bookSalaryText = await summaryPage.getSummaryValue(
      'summary-book-salary',
    );
    expect(summaryPage.parseAmount(bookSalaryText)).toBe(180000); // 15000 * 12
  });

  test('TC-102: 包含年终奖的综合测算，正确核算年终奖与单独计税', async () => {
    // Arrange: 输入月薪 20,000 元 + 年终奖 60,000 元
    await formPage.fillSalary(
      TEST_DATA.bonusSalaryCase.monthSalary,
      TEST_DATA.bonusSalaryCase.annualBonus,
    );

    // Act: 点击计算
    await formPage.calculate();

    // Assert: 验证年度汇总卡片包含年终奖收入条目
    const bonusText = await summaryPage.getSummaryValue('summary-bonus');
    expect(summaryPage.parseAmount(bonusText)).toBe(60000);

    // 验证全年账面薪资收入为 240,000 (20000 * 12)
    const bookSalaryText = await summaryPage.getSummaryValue(
      'summary-book-salary',
    );
    expect(summaryPage.parseAmount(bookSalaryText)).toBe(240000);
  });

  test('TC-103: 清空结果与重置表单功能正常工作', async () => {
    // Arrange: 输入月薪 15,000 并计算
    await formPage.fillSalary(15000);
    await formPage.calculate();
    await expect(resultsPage.panels).toHaveCount(12);

    // Act: 点击“清空结果”
    await formPage.clearResult();

    // Assert: 结果折叠面板与汇总卡片隐藏
    await expect(resultsPage.panels).toHaveCount(0);
    expect(await summaryPage.isSummaryVisible()).toBe(false);

    // Act: 点击“重置”按钮
    await formPage.reset();

    // Assert: 表单月薪恢复默认 10000
    await expect(formPage.monthSalaryInput).toHaveValue('10000');
  });

  test('TC-104: 表单输入非法值时，计算按钮被禁用', async () => {
    // Arrange: 清空月薪输入框使其为空（不合法）
    await formPage.monthSalaryInput.fill('');

    // Assert: 计算按钮处于 disabled 状态
    await expect(formPage.calculateButton).toBeDisabled();

    // Act: 输入有效月薪
    await formPage.monthSalaryInput.fill('12000');

    // Assert: 计算按钮恢复启用
    await expect(formPage.calculateButton).toBeEnabled();
  });
});
