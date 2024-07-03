export interface TaxRateModel {
  /**
   * 当前阶梯税率起征点
   */
  start: number;
  /**
   * 当前阶梯税率上限
   */
  end: number;
  /**
   * 当前阶梯税率
   */
  rate: number;
  /**
   * 速算扣除数
   */
  minus: number;
}

export const TaxRateTable: TaxRateModel[] = [
  { start: 0, end: 36000, rate: 0.03, minus: 0 },
  { start: 36000, end: 144000, rate: 0.1, minus: 2520 },
  { start: 144000, end: 300000, rate: 0.2, minus: 16920 },
  { start: 300000, end: 420000, rate: 0.25, minus: 31920 },
  { start: 420000, end: 660000, rate: 0.3, minus: 52920 },
  { start: 660000, end: 960000, rate: 0.35, minus: 85920 },
  { start: 960000, end: Infinity, rate: 0.45, minus: 181920 },
];

export const TaxRateTableForBonus: TaxRateModel[] = [
  { start: 0, end: 3000, rate: 0.03, minus: 0 },
  { start: 3000, end: 12000, rate: 0.1, minus: 210 },
  { start: 12000, end: 25000, rate: 0.2, minus: 1410 },
  { start: 25000, end: 35000, rate: 0.25, minus: 2660 },
  { start: 35000, end: 55000, rate: 0.3, minus: 4410 },
  { start: 55000, end: 80000, rate: 0.35, minus: 7160 },
  { start: 80000, end: Infinity, rate: 0.45, minus: 15160 },
];

export const childEducationDeductionOptions = [
  { value: 0, label: '不符合：0元' },
  { value: 500, label: '一个孩子，夫妻双方各自扣除：500元' },
  { value: 1000, label: '一个孩子，仅有一方扣除：1000元' },
  { value: 1000, label: '两个个孩子，夫妻双方各自扣除：1000元' },
  { value: 2000, label: '两个孩子，仅有一方扣除：2000元' },
];

export const continuousEducationDeductionOptions = [
  { value: 0, label: '不符合：0元' },
  { value: 400, label: '接受学历教育中，扣除：400元' },
];

export const housingLoanInterestDeductionOptions = [
  { value: 0, label: '不符合：0元' },
  { value: 500, label: '夫妻双方各自扣除：500元' },
  { value: 1000, label: '仅有一方扣除：1000元' },
];

export const rentingDeductionOptions = [
  { value: 0, label: '不符合：0元' },
  { value: 800, label: '人口少于100万城市，扣除：800元' },
  { value: 1100, label: '人口大于100万城市，扣除：1100元' },
  { value: 1500, label: '省会，直辖市等，扣除：1500元' },
];

export const elderlyCareDeductionOptions = [
  { value: 0, label: '不符合：0元' },
  { value: 2000, label: '独生子女，扣除：2000元' },
  { value: 1000, label: '两个子女，均摊扣除：1000元' },
  { value: 666.7, label: '三个子女，均摊扣除：666.7元' },
  { value: 500, label: '四个子女，均摊扣除：500元' },
  { value: 400, label: '五个子女，均摊扣除：400元' },
];

export const nonMergeTaxCalculationEndDate = '2027.12.31';
