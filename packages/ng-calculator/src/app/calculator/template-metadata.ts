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

import {
  childEducationDeductionOptions,
  continuousEducationDeductionOptions,
  elderlyCareDeductionOptions,
  housingLoanInterestDeductionOptions,
  infantCareDeductionOptions,
  rentingDeductionOptions,
} from 'calculator-core';

/**
 * 自动完成模板集合接口
 */
export interface AutocompleteTemplates {
  infantCare: AutocompleteTemplate;
  childEducation: AutocompleteTemplate;
  continuingEducation: AutocompleteTemplate;
  housingLoanInterest: AutocompleteTemplate;
  renting: AutocompleteTemplate;
  elderlyCare: AutocompleteTemplate;
  privatePension: AutocompleteTemplate;
  insuranceBase: AutocompleteTemplate;
  housingFundBase: AutocompleteTemplate;
}

export const autocompleteTemplates: AutocompleteTemplates = {
  privatePension: {
    id: 'privatePension',
    label: '个人养老金',
    placeholder: '0',
    options: [
      { value: 0, label: '不缴纳：0元' },
      { value: 500, label: '每月缴纳：500元 (年6000元)' },
      { value: 1000, label: '顶格缴纳：1000元 (年12000元)' },
    ],
    width: '120px',
  },
  infantCare: {
    id: 'infantCare',
    label: '3岁以下婴幼儿照护',
    placeholder: '0',
    options: infantCareDeductionOptions,
    width: '120px',
  },
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
