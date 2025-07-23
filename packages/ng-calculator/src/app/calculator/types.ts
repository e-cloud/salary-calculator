/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormArray, FormControl, FormGroup } from '@angular/forms';

/**
 * 用于创建强类型的表单控件
 */
export type TypedFormControls<T extends Record<any, any>> = {
  [K in keyof T]-?: T[K] extends Array<infer R>
    ? FormArray<
        R extends Record<any, any>
          ? FormGroup<TypedFormControls<R>>
          : FormControl<R>
      >
    : T[K] extends Record<any, any>
    ? FormGroup<TypedFormControls<T[K]>>
    : FormControl<T[K]>;
};

/**
 * 基础输入模型
 */
export interface InputModel {
  monthSalary: number;
  monthlyBonus?: number;
  annualBonus: number;
  insuranceBase: number;
  housingFundBase: number;
  housingFundRate: number;
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

/**
 * 月度输入模型，扩展自基础输入模型
 */
export interface MonthlyInputModel extends InputModel {
  newPayCycle: boolean;
}

/**
 * 基础输入表单类型
 */
export type InputForm = TypedFormControls<InputModel>;

/**
 * 月度输入表单类型
 */
export type MonthlyInputForm = TypedFormControls<MonthlyInputModel>;
