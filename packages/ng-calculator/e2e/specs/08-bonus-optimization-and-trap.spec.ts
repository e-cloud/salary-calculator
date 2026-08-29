import { test, expect } from '@playwright/test';
import { CalculatorFormPage } from '../pages/calculator-form.page';
import { MonthlyResultsPage } from '../pages/monthly-results.page';
import { SummaryChartsPage } from '../pages/summary-charts.page';

test.describe('Suite 8: 年终奖盲区客观预警与 Offer 总包快速拆分 (Bonus Trap & Offer Split)', () => {
  let formPage: CalculatorFormPage;
  let resultsPage: MonthlyResultsPage;
  let summaryPage: SummaryChartsPage;

  test.beforeEach(async ({ page }) => {
    formPage = new CalculatorFormPage(page);
    resultsPage = new MonthlyResultsPage(page);
    summaryPage = new SummaryChartsPage(page);
    await formPage.goto();
  });

  test('TC-801: 输入处于盲区的年终奖（36,500元），表单即时渲染客观盲区预警提示', async ({
    page,
  }) => {
    // Arrange & Act: 输入年终奖 36,500 元
    const bonusInput = page.getByTestId('input-annual-bonus');
    await bonusInput.fill('36500');

    // Assert: 验证盲区预警条出现并客观显示多纳税额
    const alert = page.getByTestId('bonus-tax-trap-alert');
    await expect(alert).toBeVisible();
    await expect(alert).toContainText('税收盲区预警');
    await expect(alert).toContainText('36,000');
  });

  test('TC-802: 使用 Offer 总包拆分弹窗，自动计算并将月薪与年终奖回填主表单', async ({
    page,
  }) => {
    // Act: 点击“Offer 总包拆分”按钮
    const openBtn = page.getByTestId('btn-open-offer-split');
    await openBtn.click();

    // 验证弹窗 Header 与输入框渲染
    const dialogTitle = page.getByTestId('offer-dialog-title');
    await expect(dialogTitle).toBeVisible();

    const totalPkgInput = page.getByTestId('offer-total-package-input');
    await expect(totalPkgInput).toBeVisible();

    // 输入 480,000 元，选择 16 薪 (即月薪 30,000，年终奖 120,000)
    await totalPkgInput.fill('480000');
    const monthsSelect = page.getByTestId('offer-months-select');
    await monthsSelect.click();
    await page.getByRole('option', { name: '16 薪' }).click();

    // 验证预览
    await expect(page.getByTestId('offer-calc-salary')).toContainText('30,000');
    await expect(page.getByTestId('offer-calc-bonus')).toContainText('120,000');

    // 点击应用
    await page.getByTestId('offer-apply-btn').click();

    // Assert: 表单月薪与年终奖已被自动填入
    await expect(formPage.monthSalaryInput).toHaveValue('30000');
    await expect(page.getByTestId('input-annual-bonus')).toHaveValue('120000');
  });

  test('TC-803: 计算后年终奖临界点与税收盲区分析卡片正确展示诊断与 6 大盲区图谱', async ({
    page,
  }) => {
    // Arrange: 输入月薪 15,000 + 年终奖 36,500（处于盲区）
    await formPage.fillSalary(15000, 36500);

    // Act: 计算并等待月度与年度结果渲染完成
    await formPage.calculate();
    await expect(resultsPage.panels).toHaveCount(12);

    // Assert: 验证渲染出临界点与税收盲区分析卡片
    const optCard = page.getByTestId('bonus-optimization-card');
    await expect(optCard).toBeVisible();
    await expect(optCard).toContainText('年终奖临界点与税收盲区分析');
    await expect(optCard).toContainText('命中盲区');
    await expect(optCard).toContainText('全国个税 6 大无效盲区速查图谱');
  });
});
