import { test, expect } from '@playwright/test';
import { CalculatorFormPage } from '../pages/calculator-form.page';
import { MonthlyResultsPage } from '../pages/monthly-results.page';
import { SummaryChartsPage } from '../pages/summary-charts.page';

test.describe('Suite 3: 专项附加扣除与互斥冲突逻辑 (Special Deductions & Conflicts)', () => {
  let formPage: CalculatorFormPage;
  let resultsPage: MonthlyResultsPage;
  let summaryPage: SummaryChartsPage;

  test.beforeEach(async ({ page }) => {
    formPage = new CalculatorFormPage(page);
    resultsPage = new MonthlyResultsPage(page);
    summaryPage = new SummaryChartsPage(page);
    await formPage.goto();
  });

  test('TC-301: 组合专项附加扣除录入后，个税依法减免，年度实收增加', async ({
    page,
  }) => {
    // Arrange: 首先测算无专项扣除时的月薪 25,000 的税额
    await formPage.fillSalary(25000);
    await formPage.calculate();
    const taxWithoutDeductionText = await summaryPage.getSummaryValue(
      'summary-prepaid-tax',
    );
    const taxWithoutDeduction = summaryPage.parseAmount(
      taxWithoutDeductionText,
    );

    // Act: 录入多项专项附加扣除（子女教育 2000、继续教育 400、赡养老人 3000、个人养老金 1000）
    await formPage.childEducationInput.fill('2000');
    await formPage.continuingEducationInput.fill('400');
    await formPage.elderlyCareInput.fill('3000');
    await formPage.privatePensionInput.fill('1000');
    await formPage.calculate();
    await page.waitForTimeout(600);

    // Assert: 有专项扣除后的个税应明显减少
    const taxWithDeductionText = await summaryPage.getSummaryValue(
      'summary-prepaid-tax',
    );
    const taxWithDeduction = summaryPage.parseAmount(taxWithDeductionText);

    expect(taxWithDeduction).toBeLessThan(taxWithoutDeduction);

    // 验证个人养老金汇总项有正确记录
    const privatePensionText = await summaryPage.getSummaryValue(
      'summary-employee-private-pension',
    );
    expect(summaryPage.parseAmount(privatePensionText)).toBe(12000); // 1000 * 12
  });

  test('TC-302: 住房贷款利息与住房租金互斥冲突联动正常', async () => {
    // Act 1: 输入住房贷款利息 1000
    await formPage.housingLoanInterestInput.fill('1000');
    await expect(formPage.housingLoanInterestInput).toHaveValue('1000');

    // Act 2: 输入住房租金 1500
    await formPage.rentingInput.fill('1500');
    // 触发 input/change 事件，验证住房贷款利息被重置为 0
    await expect(formPage.housingLoanInterestInput).toHaveValue('0');
    await expect(formPage.rentingInput).toHaveValue('1500');

    // Act 3: 重新输入住房贷款利息 1000
    await formPage.housingLoanInterestInput.fill('1000');
    // 验证住房租金被重置为 0
    await expect(formPage.rentingInput).toHaveValue('0');
    await expect(formPage.housingLoanInterestInput).toHaveValue('1000');
  });

  test('TC-303: Material Autocomplete 预设选项点击交互正常填入', async ({
    page,
  }) => {
    // Act: 点击 3 岁以下婴幼儿照护输入框
    await formPage.infantCareInput.click();

    // 等待 autocomplete panel 弹出并通过 testid 点击选项 (索引 1 为 1000 元)
    const option = page.getByTestId('option-infant-care-1');
    await option.waitFor({ state: 'visible' });
    await option.click();

    // Assert: 验证输入框被填入 1000
    await expect(formPage.infantCareInput).toHaveValue('1000');
  });
});
