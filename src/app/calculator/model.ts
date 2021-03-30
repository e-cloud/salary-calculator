export interface MonthlyIncomeInfo {
  /**
   * 税前收入/账面月薪
   */
  salary: number;
  /**
   * 公积金
   */
  housingFund: number;
  /**
   * 个人所得税金额
   */
  tax: number;
  /**
   * 税后收入
   */
  actualIncome: number;
  /**
   * 累计已缴纳税额
   */
  accumulatedTax: number;
  /**
   * 预扣预缴应纳税所得额
   */
  accumulatedTaxQuota: number;
  /**
   * 五险扣费
   */
  insuranceCosts: {
    endowment: number;
    health: number;
    unemployment: number;
  };
  insuranceFullCost: number;
  /**
   * 专项附加扣除
   */
  extraDeduction: {
    childEducation: number;
    continuingEducation: number;
    seriousMedicalExpense: number;
    housingLoanInterest: number;
    renting: number;
    elderlyCare: number;
  };
  fullExtraDeduction: number;
  /**
   * 1 - 12
   */
  month: number;
  /**
   * 是否属于新的计薪周期，每年1月都为 true
   * 一般跳槽后第一月也是，因为新公司算税是从零开始的
   */
  newPayCycle: boolean;
}

export interface MonthlyIncomeMeta {
  /**
   * 月薪
   */
  salary: number;
  /**
   * 免征额度
   */
  freeTaxQuota: number;
  /**
   * 社保缴纳基数
   */
  insuranceBase: number;
  /**
   * 社保缴纳比例参数
   */
  insuranceRate: {
    // 养老保险
    endowment: number;
    // 医疗保险
    health: number;
    // 失业保险
    unemployment: number;
  };
  /**
   * 住房公积金缴纳基数
   */
  housingFundBase: number;
  /**
   * 住房公积金缴纳比例
   */
  housingFundRate: number;
  /**
   * 专项附加扣除
   */
  extraDeduction: {
    // 子女教育
    childEducation: number;
    // 继续教育
    continuingEducation: number;
    // 大病医疗
    seriousMedicalExpense: number;
    // 住房贷款利息
    housingLoanInterest: number;
    // 住房租金
    renting: number;
    // 赡养老人
    elderlyCare: number;
  };
  /**
   * 全年一次性奖金
   */
  annualBonus: number;
}

export interface FullYearIncomeInfo {
  /**
   * 全年账面薪资收入
   */
  bookSalary: number;
  /**
   * 全年税后薪资收入
   */
  postTaxSalary: number;
  /**
   * 全年预缴税款
   */
  prepaidTax: number;
  /**
   * 全年公积金缴纳金额
   */
  fullHousingFund: number;
  /**
   * 全年账面综合所得
   */
  bookIncome: number;
  /**
   * 全年综合实际收入
   */
  actualIncome: number;
  /**
   * 全年综合实际收入(奖金单独计税版，2022.1.1废止)
   */
  actualIncomeDeprecated: number;
  /**
   * 全年一次性奖金收入
   */
  bonus: number;
  /**
   * 奖金单独计税
   */
  bonusTax: number;
  /**
   * 全年综合所得合并计税
   */
  jointTax: number;
}

/**
 * 城市工薪缴纳参数
 */
export interface CityRecipe {
  id: number;
  label: string;
  city: string;
  // 最低工资
  minimumWage: number;
  // 雇员参数
  employee: {
    insuranceRate: {
      // 养老保险
      endowment: number;
      // 医疗保险
      health: number;
      // 失业保险
      unemployment: number;
    };
  };
  // 雇主参数
  employer: {
    insuranceRate: {
      // 养老保险
      endowment: number;
      // 医疗保险
      health: number;
      // 失业保险
      unemployment: number;
      // 生育保险（企业承担）
      birth: number;
      // 工伤保险（企业承担）
      occupationalInjury: number;
    };
  };
}
