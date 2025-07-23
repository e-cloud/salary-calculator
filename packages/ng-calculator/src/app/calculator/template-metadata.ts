export interface AutocompleteOption {
  value: number;
  label: string;
}

export interface AutocompleteTemplate {
  id: string;
  label: string;
  placeholder: string;
  options: AutocompleteOption[];
  width?: string;
  conflictWith?: string;
}

// 从calculator-core导入的选项数据
const childEducationDeductionOptions = [
  { value: 0, label: '不符合：0元' },
  { value: 500, label: '一个孩子，夫妻双方各自扣除：500元' },
  { value: 1000, label: '一个孩子，仅有一方扣除：1000元' },
  { value: 1000, label: '两个个孩子，夫妻双方各自扣除：1000元' },
  { value: 2000, label: '两个孩子，仅有一方扣除：2000元' },
];

const continuousEducationDeductionOptions = [
  { value: 0, label: '不符合：0元' },
  { value: 400, label: '接受学历教育中，扣除：400元' },
];

const housingLoanInterestDeductionOptions = [
  { value: 0, label: '不符合：0元' },
  { value: 500, label: '夫妻双方各自扣除：500元' },
  { value: 1000, label: '仅有一方扣除：1000元' },
];

const rentingDeductionOptions = [
  { value: 0, label: '不符合：0元' },
  { value: 800, label: '人口少于100万城市，扣除：800元' },
  { value: 1100, label: '人口大于100万城市，扣除：1100元' },
  { value: 1500, label: '省会，直辖市等，扣除：1500元' },
];

const elderlyCareDeductionOptions = [
  { value: 0, label: '不符合：0元' },
  { value: 2000, label: '独生子女，扣除：2000元' },
  { value: 1000, label: '两个子女，均摊扣除：1000元' },
  { value: 666.7, label: '三个子女，均摊扣除：666.7元' },
  { value: 500, label: '四个子女，均摊扣除：500元' },
  { value: 400, label: '五个子女，均摊扣除：400元' },
];

/**
 * 自动完成模板集合接口
 */
export interface AutocompleteTemplates {
  childEducation: AutocompleteTemplate;
  continuingEducation: AutocompleteTemplate;
  housingLoanInterest: AutocompleteTemplate;
  renting: AutocompleteTemplate;
  elderlyCare: AutocompleteTemplate;
  insuranceBase: AutocompleteTemplate;
  housingFundBase: AutocompleteTemplate;
}

export const autocompleteTemplates: AutocompleteTemplates = {
  childEducation: {
    id: 'childEducation',
    label: '子女教育',
    placeholder: '0',
    options: childEducationDeductionOptions,
    width: '120px',
  },
  continuingEducation: {
    id: 'continuingEducation',
    label: '继续教育',
    placeholder: '0',
    options: continuousEducationDeductionOptions,
    width: '120px',
  },
  housingLoanInterest: {
    id: 'housingLoanInterest',
    label: '住房贷款利息',
    placeholder: '0',
    options: housingLoanInterestDeductionOptions,
    width: '120px',
    conflictWith: 'extraDeduction.renting',
  },
  renting: {
    id: 'renting',
    label: '住房租金',
    placeholder: '0',
    options: rentingDeductionOptions,
    width: '120px',
    conflictWith: 'extraDeduction.housingLoanInterest',
  },
  elderlyCare: {
    id: 'elderlyCare',
    label: '赡养老人',
    placeholder: '0',
    options: elderlyCareDeductionOptions,
    width: '120px',
  },
  insuranceBase: {
    id: 'insuranceBase',
    label: '社保缴纳基数',
    placeholder: '10000',
    options: [], // 这个会在组件中动态生成
    width: undefined,
  },
  housingFundBase: {
    id: 'housingFundBase',
    label: '公积金缴纳基数',
    placeholder: '10000',
    options: [], // 这个会在组件中动态生成
    width: undefined,
  },
};

// 月度结果组件中使用的模板标签后缀
export const monthlyResultsLabelSuffix = '(当月)';
