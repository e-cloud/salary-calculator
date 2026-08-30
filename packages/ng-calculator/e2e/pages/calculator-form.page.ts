import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';

/**
 * 基础计算表单页面对象 (纯 data-testid 驱动)
 */
export class CalculatorFormPage extends BasePage {
  // 表单输入项
  readonly monthSalaryInput: Locator;
  readonly annualBonusInput: Locator;
  readonly yearBeforeLastAvgSalaryInput: Locator;
  readonly lastYearAvgSalaryInput: Locator;

  // 开关
  readonly predefinedInsuranceToggle: Locator;
  readonly uniformPolicyToggle: Locator;

  // 城市与年份
  readonly cityRecipeButton: Locator;
  readonly yearSelect: Locator;

  // 专项附加扣除
  readonly infantCareInput: Locator;
  readonly childEducationInput: Locator;
  readonly continuingEducationInput: Locator;
  readonly seriousMedicalExpenseInput: Locator;
  readonly housingLoanInterestInput: Locator;
  readonly rentingInput: Locator;
  readonly elderlyCareInput: Locator;
  readonly enterprisePensionEmployeeInput: Locator;
  readonly enterprisePensionEmployerInput: Locator;
  readonly privatePensionInput: Locator;
  readonly otherDeductionInput: Locator;

  // 自定义费率
  readonly endowmentRateInput: Locator;
  readonly healthRateInput: Locator;
  // 公积金与补充公积金
  readonly housingFundBaseInput: Locator;
  readonly housingFundRateInput: Locator;
  readonly supplementaryHousingFundRateInput: Locator;
  readonly supplementaryHousingFundEmployerRateInput: Locator;

  // 操作按钮
  readonly calculateButton: Locator;
  readonly resetButton: Locator;
  readonly clearResultButton: Locator;
  readonly policyParamsButton: Locator;

  // 政策提示
  readonly policyHintText: Locator;

  constructor(page: Page) {
    super(page);

    this.monthSalaryInput = page.getByTestId('input-month-salary');
    this.annualBonusInput = page.getByTestId('input-annual-bonus');
    this.yearBeforeLastAvgSalaryInput = page.getByTestId(
      'input-year-before-last-avg-salary',
    );
    this.lastYearAvgSalaryInput = page.getByTestId(
      'input-last-year-avg-salary',
    );

    this.predefinedInsuranceToggle = page.getByTestId(
      'toggle-predefined-insurance',
    );
    this.uniformPolicyToggle = page.getByTestId('toggle-uniform-policy');

    this.cityRecipeButton = page.getByTestId('btn-select-city-recipe');
    this.yearSelect = page.getByTestId('select-calculation-year');

    // 专项附加扣除
    this.infantCareInput = page.getByTestId('input-infant-care');
    this.childEducationInput = page.getByTestId('input-child-education');
    this.continuingEducationInput = page.getByTestId(
      'input-continuing-education',
    );
    this.seriousMedicalExpenseInput = page.getByTestId(
      'input-serious-medical-expense',
    );
    this.housingLoanInterestInput = page.getByTestId(
      'input-housing-loan-interest',
    );
    this.rentingInput = page.getByTestId('input-renting');
    this.elderlyCareInput = page.getByTestId('input-elderly-care');
    this.enterprisePensionEmployeeInput = page.getByTestId(
      'input-enterprise-pension-employee',
    );
    this.enterprisePensionEmployerInput = page.getByTestId(
      'input-enterprise-pension-employer',
    );
    this.privatePensionInput = page.getByTestId('input-private-pension');
    this.otherDeductionInput = page.getByTestId('input-other-deduction');

    // 自定义费率
    this.endowmentRateInput = page.getByTestId('input-endowment-rate');
    this.healthRateInput = page.getByTestId('input-health-rate');
    this.unemploymentRateInput = page.getByTestId('input-unemployment-rate');

    // 公积金与补充公积金
    this.housingFundBaseInput = page.getByTestId('input-housing-fund-base');
    this.housingFundRateInput = page.getByTestId('input-housing-fund-rate');
    this.supplementaryHousingFundRateInput = page.getByTestId(
      'input-supplementary-housing-fund-rate',
    );
    this.supplementaryHousingFundEmployerRateInput = page.getByTestId(
      'input-supplementary-housing-fund-employer-rate',
    );

    // 操作按钮
    this.calculateButton = page.getByTestId('btn-calculate');
    this.resetButton = page.getByTestId('btn-reset');
    this.clearResultButton = page.getByTestId('btn-clear-result');
    this.policyParamsButton = page.getByTestId('btn-view-policy-params');

    this.policyHintText = page.getByTestId('policy-hint-text');
  }

  /**
   * 点击查看政策参数按钮打开弹窗
   */
  async openPolicyParamsDialog(): Promise<void> {
    await this.policyParamsButton.click();
    await this.page.waitForSelector('mat-dialog-container', {
      state: 'visible',
    });
  }

  /**
   * 填写基本薪资与年终奖
   */
  async fillSalary(monthSalary: number, annualBonus = 0): Promise<void> {
    await this.monthSalaryInput.fill(String(monthSalary));
    if (annualBonus > 0) {
      await this.annualBonusInput.fill(String(annualBonus));
    }
  }

  /**
   * 填写补充公积金个人与企业比例
   */
  async fillSupplementaryHousingFund(
    employeeRate: number,
    employerRate: number,
  ): Promise<void> {
    await this.supplementaryHousingFundRateInput.fill(String(employeeRate));
    await this.supplementaryHousingFundEmployerRateInput.fill(
      String(employerRate),
    );
  }

  /**
   * 填写历史平均月薪（分段计算）
   */
  async fillHistoricalAvgSalaries(
    yearBeforeLast: number,
    lastYear: number,
  ): Promise<void> {
    await this.yearBeforeLastAvgSalaryInput.fill(String(yearBeforeLast));
    await this.lastYearAvgSalaryInput.fill(String(lastYear));
  }

  /**
   * 切换城市配方 (支持 key 如 'beijing', 'shanghai', 'guangzhou', 'shenzhen-1', 'shenzhen-2')
   */
  async selectCityRecipe(recipeKey: string): Promise<void> {
    await this.cityRecipeButton.click();
    const menuItem = this.page.getByTestId(`recipe-item-${recipeKey}`);
    await menuItem.waitFor({ state: 'visible' });
    await menuItem.click();
    await this.page.waitForTimeout(300);
  }

  /**
   * 切换计算年份
   */
  async selectYear(year: string | number): Promise<void> {
    await this.yearSelect.click();
    const option = this.page.getByTestId(`option-year-${String(year).trim()}`);
    await option.waitFor({ state: 'visible' });
    await option.click();
    await this.page.waitForTimeout(300);
  }

  /**
   * 设置“预定义社保缴纳参数”开关状态
   */
  async setPredefinedInsurance(enable: boolean): Promise<void> {
    const isChecked = await this.predefinedInsuranceToggle.evaluate(
      (el: HTMLElement) =>
        el.classList.contains('mat-mdc-slide-toggle-checked') ||
        el.querySelector('button')?.getAttribute('aria-checked') === 'true',
    );
    if (isChecked !== enable) {
      await this.predefinedInsuranceToggle.click();
      await this.page.waitForTimeout(200);
    }
  }

  /**
   * 设置“全年使用统一基数标准”开关状态
   */
  async setUniformPolicy(enable: boolean): Promise<void> {
    const isChecked = await this.uniformPolicyToggle.evaluate(
      (el: HTMLElement) =>
        el.classList.contains('mat-mdc-slide-toggle-checked') ||
        el.querySelector('button')?.getAttribute('aria-checked') === 'true',
    );
    if (isChecked !== enable) {
      await this.uniformPolicyToggle.click();
      await this.page.waitForTimeout(200);
    }
  }

  /**
   * 点击计算按钮
   */
  async calculate(): Promise<void> {
    await this.calculateButton.click();
  }

  /**
   * 点击重置按钮
   */
  async reset(): Promise<void> {
    await this.resetButton.click();
  }

  /**
   * 点击清空结果按钮
   */
  async clearResult(): Promise<void> {
    await this.clearResultButton.click();
  }
}
