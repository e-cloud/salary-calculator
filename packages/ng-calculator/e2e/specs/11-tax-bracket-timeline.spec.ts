import { test, expect } from '@playwright/test';
import { CalculatorFormPage } from '../pages/calculator-form.page';
import { MonthlyResultsPage } from '../pages/monthly-results.page';

test.describe('Suite 11: 阶梯税率时序分析与跳档冲击洞察 (Tax Bracket Timeline)', () => {
  let formPage: CalculatorFormPage;
  let resultsPage: MonthlyResultsPage;

  test.beforeEach(async ({ page }) => {
    formPage = new CalculatorFormPage(page);
    resultsPage = new MonthlyResultsPage(page);
    await formPage.goto();
  });

  test('TC-1101: 计算月薪 25000 元后，独立卡片呈现阶梯税率时序分析并识别跳档月份与冲击洞察', async ({
    page,
  }) => {
    // Arrange: 输入月薪 25,000 并计算
    await formPage.fillSalary(25000);
    await formPage.calculate();
    await page.waitForTimeout(600);

    // Assert 1: 阶梯税率时序分析卡片可见
    const timelineCard = page.getByTestId('tax-bracket-timeline-card');
    await expect(timelineCard).toBeVisible();

    // Assert 2: 12 个时间轴节点全部渲染
    for (let m = 1; m <= 12; m++) {
      await expect(page.getByTestId(`timeline-node-${m}`)).toBeVisible();
    }

    // Assert 3: 出现跳档冲击卡片与跳档跃迁标识
    const transitionBadges = page.locator('.transition-badge');
    await expect(transitionBadges.first()).toBeVisible();

    const insightCards = page.locator('.insight-card');
    await expect(insightCards.first()).toBeVisible();
  });

  test('TC-1102: 用户点击时间轴节点时，联动更新门槛安全余量详情与进度条', async ({
    page,
  }) => {
    // Arrange: 输入月薪 25,000 并计算
    await formPage.fillSalary(25000);
    await formPage.calculate();
    await page.waitForTimeout(600);

    // Act: 点击 6 月节点
    const month6Node = page.getByTestId('timeline-node-6');
    await month6Node.click();
    await page.waitForTimeout(300);

    // Assert: 详情面板切换为 6 月份
    const detailPanel = page.getByTestId('selected-month-detail');
    await expect(detailPanel).toContainText(/6月份.*阶梯所得与门槛安全余量/);
  });

  test('TC-1103: 用户切换至“趋势图分析”Tab，双 Y 轴趋势图表容器正常渲染', async ({
    page,
  }) => {
    // Arrange: 输入月薪 25,000 并计算
    await formPage.fillSalary(25000);
    await formPage.calculate();
    await page.waitForTimeout(600);

    // Act: 切换至“趋势图分析”Tab
    const trendTab = page.getByRole('tab', { name: '趋势图分析' });
    await trendTab.click();
    await page.waitForTimeout(300);

    // Assert: ECharts 容器可见
    const chartContainer = page.getByTestId('trend-chart-container');
    await expect(chartContainer).toBeVisible();
  });
});
