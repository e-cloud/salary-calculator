/**
 * E2E 测试基准数据与测试场景配置
 */
export const TEST_DATA = {
  // 基础常规测算场景（深圳默认）
  basicSalaryCase: {
    monthSalary: 15000,
    annualBonus: 0,
  },

  // 包含年终奖的综合测算场景
  bonusSalaryCase: {
    monthSalary: 20000,
    annualBonus: 60000,
  },

  // 政策分段测算场景（上上年与上年月平均工资）
  segmentedPolicyCase: {
    monthSalary: 20000,
    yearBeforeLastAvgSalary: 12000,
    lastYearAvgSalary: 18000,
  },

  // 专项附加扣除组合场景
  specialDeductionCase: {
    monthSalary: 25000,
    childEducation: 2000,
    continuingEducation: 400,
    seriousMedicalExpense: 0,
    housingLoanInterest: 1000,
    elderlyCare: 3000,
    privatePension: 1000,
  },

  // 城市配方名称与预估基数信息
  cities: {
    shenzhen1: {
      label: '深圳: 深圳一档(2025)',
      city: '深圳',
    },
    shenzhen2: {
      label: '深圳: 深圳二档(2025)',
      city: '深圳',
    },
    beijing: {
      label: '北京: 北京(2025)',
      city: '北京',
    },
    shanghai: {
      label: '上海: 上海(2025)',
      city: '上海',
    },
    guangzhou: {
      label: '广州: 广州(2025)',
      city: '广州',
    },
  },
};
