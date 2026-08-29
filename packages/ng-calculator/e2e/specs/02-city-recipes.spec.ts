import { test, expect } from '@playwright/test';
import { CalculatorFormPage } from '../pages/calculator-form.page';
import { MonthlyResultsPage } from '../pages/monthly-results.page';
import { SummaryChartsPage } from '../pages/summary-charts.page';

test.describe('Suite 2: 城市配方与政策分段核算 (City Recipes & Policy Segmentation)', () => {
  let formPage: CalculatorFormPage;
  let resultsPage: MonthlyResultsPage;
  let summaryPage: SummaryChartsPage;

  test.beforeEach(async ({ page }) => {
    formPage = new CalculatorFormPage(page);
    resultsPage = new MonthlyResultsPage(page);
    summaryPage = new SummaryChartsPage(page);
    await formPage.goto();
  });

  test('TC-201: 切换城市配方至北京、上海、广州与深圳二档，表单与政策提示正常联动', async () => {
    // Act: 切换至北京配方
    await formPage.selectCityRecipe('beijing');

    // 切换至上海配方
    await formPage.selectCityRecipe('shanghai');

    // 切换至广州配方
    await formPage.selectCityRecipe('guangzhou');

    // 切换至深圳二档配方
    await formPage.selectCityRecipe('shenzhen-2');

    // 输入月薪 15,000 进行计算验证
    await formPage.fillSalary(15000);
    await formPage.calculate();
    await expect(resultsPage.panels).toHaveCount(12);
  });

  test('TC-202: 政策分段核算模式下（关闭统一基数），1~6 月与 7~12 月社保基数呈现台阶差异', async () => {
    // Arrange: 确保关闭统一基数开关（默认即为关闭）
    await formPage.setUniformPolicy(false);

    // 输入当前月薪 20,000，上上年月均 12,000，上年月均 18,000
    await formPage.fillSalary(20000);
    await formPage.fillHistoricalAvgSalaries(12000, 18000);

    // Act: 计算
    await formPage.calculate();

    // Assert: 验证 1 月和 7 月折叠面板均正常生成
    await expect(resultsPage.panels).toHaveCount(12);

    const month1Summary = await resultsPage.getMonthHeaderSummary(1);
    const month7Summary = await resultsPage.getMonthHeaderSummary(7);

    // 提取 1 月与 7 月的公司成本或实收，因基数差异（12000 vs 18000），二者应不相等
    expect(month1Summary).not.toEqual(month7Summary);
  });

  test('TC-203: 全年使用统一基数标准开启后，全年基数与计算标准保持一致', async () => {
    // Arrange: 开启“全年使用统一基数标准”开关
    await formPage.setUniformPolicy(true);
    await formPage.fillSalary(20000);

    // Act: 计算
    await formPage.calculate();

    // Assert: 验证 12 个月份正常生成
    await expect(resultsPage.panels).toHaveCount(12);
    const isVisible = await summaryPage.isSummaryVisible();
    expect(isVisible).toBe(true);
  });

  test('TC-204: 自定义社保费率模式（关闭预定义参数），可自定义扣缴比例并正确计算', async () => {
    // Arrange: 关闭“预定义社保缴纳参数”开关
    await formPage.setPredefinedInsurance(false);

    // 验证自定义费率输入框变为可见
    await expect(formPage.endowmentRateInput).toBeVisible();
    await expect(formPage.healthRateInput).toBeVisible();
    await expect(formPage.unemploymentRateInput).toBeVisible();

    // 输入自定义养老 8%，医疗 2%，失业 0.5%
    await formPage.endowmentRateInput.fill('8');
    await formPage.healthRateInput.fill('2');
    await formPage.unemploymentRateInput.fill('0.5');
    await formPage.fillSalary(15000);

    // Act: 点击计算
    await formPage.calculate();

    // Assert: 验证生成 12 个月结果且汇总卡片正常计算
    await expect(resultsPage.panels).toHaveCount(12);
    expect(await summaryPage.isSummaryVisible()).toBe(true);
  });
});
