export interface MonthlyIncomeInfo {
  id: string;
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
  taxedIncome: number;
  /**
   * 现金收入
   */
  cashIncome: number;
  /**
   * 累计税前收入
   */
  accumulatedSalary: number;
  /**
   * 累计已缴纳税额
   */
  accumulatedTax: number;
  /**
   * 预扣预缴应纳税所得额
   */
  accumulatedTaxQuota: number;
  /**
   * 累计扣除（指每月的免税额度 5000）
   */
  accumulatedDeduction: number;
  /**
   * 累计专项扣除（五险一金扣除）
   */
  accumulatedSpecialDeduction: number;
  /**
   * 累计专项附加扣除
   */
  accumulatedExtraDeduction: number;
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
    enterprisePensionFromEmployee: number;
    enterprisePensionFromEmployer: number;
    other: number;
  };
  fullExtraDeduction: number;
  /**
   * 计税月份 1 - 12，换工作会重置为 1
   */
  month: number;
  /**
   * 实际月份
   */
  actualMonth: number;

  /**
   * 雇主成本
   */
  employerCosts: {
    full: number;
    insuranceFull: number;
    insurance: {
      endowment: number;
      health: number;
      unemployment: number;
      birth: number;
      occupationalInjury: number;
    };
    enterprisePension: number;
  };
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
   * 缴纳基数是否基于上月，深圳是，其他城市存在基于当月，满一年基于去年月平均
   */
  insuranceBaseOnLastMonth: boolean;
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
   * 上年度月平均工资（7-12月使用）
   */
  lastYearAvgSalary?: number;
  /**
   * 上上年度月平均工资（1-6月使用）
   */
  yearBeforeLastAvgSalary?: number;
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
    // 企业年金（个人）
    enterprisePensionFromEmployee: number;
    // 企业年金（企业）
    enterprisePensionFromEmployer: number;
    // 其他扣除
    other: number;
  };
  /**
   * 全年一次性奖金
   */
  annualBonus: number;

  /**
   * 社保缴纳基数上下限
   */
  insuranceBaseRange: {
    endowment: [number, number];
    health: [number, number];
    unemployment: [number, number];
    birth: [number, number];
    occupationalInjury: [number, number];
  };

  /**
   * 公积金缴纳基数上下限
   */
  housingFundBaseRange: [number, number];
  /**
   * 是否属于新的计薪周期，每年1月都为 true
   * 一般跳槽后第一月也是，因为新公司算税是从零开始的
   */
  newPayCycle: boolean;

  employer: {
    insuranceRate: {
      endowment: number;
      health: number;
      unemployment: number;
      birth: number;
      occupationalInjury: number;
    };
  };
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
   * 全年薪资收入理论税款
   */
  theoreticalTax: number;
  /**
   * 全年公积金缴纳金额
   */
  fullHousingFund: number;
  /**
   * 全年账面综合所得
   */
  bookIncome: number;
  /**
   * 全年税后收入
   */
  taxedIncome: number;
  /**
   * 全年税后实际收入(奖金单独计税版，2024.1.1废止)
   */
  taxedIncomeDeprecated: number;
  /**
   * 全年到手（现金）
   */
  cashIncome: number;
  /**
   * 全年到手（现金）(旧算法)
   */
  cashIncomeDeprecated: number;
  /**
   * 全年广义收入（现金收入 + 公积金 + 企业年金）
   */
  totalIncome: number;
  /**
   * 全年广义收入（现金收入 + 公积金 + 企业年金）(旧算法)
   */
  totalIncomeDeprecated: number;
  /**
   * 全年社保总额
   */
  fullInsurance: number;
  /**
   * 全年一次性奖金收入
   */
  bonus: number;
  /**
   * 全年一次性奖金税
   */
  bonusTax: number;
  /**
   * 全年一次性奖金税后收入
   */
  postTaxBonus: number;
  /**
   * 全年薪酬所得税+一次性奖金所得税
   */
  totalSeparatedTax: number;

  employee: {
    endowmentInsurance: number;
    healthInsurance: number;
    housingFund: number;
    enterprisePension: number;
    enterprisePensionFull: number;
  };

  /**
   * 雇主成本
   */
  employerCosts: {
    full: number;
    insurance: {
      endowment: number;
      health: number;
      unemployment: number;
      birth: number;
      occupationalInjury: number;
    };
    enterprisePension: number;
  };
}

/**
 * [新增] Policy 接口
 * 用于封装在特定时间点生效的一整套缴费规则。
 */
export interface Policy {
  /**
   * 政策生效的起始年月, 格式 "YYYY-MM"
   */
  effectiveDate: string;

  // 所有可能随时间变化的参数
  minimumWage: number;
  avgWage: number;
  employee: {
    insuranceRate: {
      endowment: number;
      health: number;
      unemployment: number;
    };
  };
  employer: {
    insuranceRate: {
      endowment: number;
      health: number;
      unemployment: number;
      birth: number;
      occupationalInjury: number;
    };
  };
  insuranceBaseRange:
    | {
        endowment: [number, number];
        health: [number, number];
        unemployment: [number, number];
        birth: [number, number];
        occupationalInjury: [number, number];
      }
    | [number, number];
  housingFundBaseRange: [number, number];
  references?: string[];
}

/**
 * 城市工薪缴纳参数
 * 城市的主体定义，包含一个政策历史列表。
 */
export interface CityRecipe {
  id: number;
  label: string;
  city: string;
  policies: Policy[];
  insuranceBaseOnLastMonth: boolean;
}

export interface RawMeta {
  monthSalary: number;
  annualBonus: number;
  insuranceBase: number;
  housingFundBase: number;
  housingFundRate: number;
  // 上年度月平均工资（用于7-12月缴费基数）
  lastYearAvgSalary?: number;
  // 上上年度月平均工资（用于1-6月缴费基数）
  yearBeforeLastAvgSalary?: number;
  extraDeduction: {
    childEducation: number;
    continuingEducation: number;
    seriousMedicalExpense: number;
    housingLoanInterest: number;
    renting: number;
    elderlyCare: number;
    enterprisePensionFromEmployee: number;
    enterprisePensionFromEmployer: number;
    other: number;
  };
  insuranceRate: {
    endowment: number;
    health: number;
    unemployment: number;
  };
  insuranceBaseOnLastMonth: boolean;
}
