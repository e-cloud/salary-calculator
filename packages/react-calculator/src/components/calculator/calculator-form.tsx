import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button } from '@mui/material';
import { buildBaseMeta, CityRecipe } from 'calculator-core';
import { merge } from 'lodash-es';
import { FormContainer, SwitchElement, TextFieldElement } from 'mui-hook-form';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import {
  numberRule,
  percentageSuffix,
  yuanSuffix,
} from '@/components/calculator/form-utils';
import { useStore } from '@/store';
import useFormPersist from '@/utils/persist';

const schema = yup.object().shape({
  monthSalary: numberRule,
  annualBonus: numberRule,
  insuranceBase: numberRule,
  housingFundBase: numberRule,
  housingFundRate: numberRule,
  extraDeduction: yup.object().shape({
    childEducation: numberRule,
    continuingEducation: numberRule,
    seriousMedicalExpense: numberRule,
    housingLoanInterest: numberRule,
    renting: numberRule,
    elderlyCare: numberRule,
    enterprisePension: numberRule,
    enterprisePensionTwo: numberRule,
    other: numberRule,
  }),
  insuranceRate: yup.object().shape({
    endowment: numberRule,
    health: numberRule,
    unemployment: numberRule,
  }),
  insuranceBaseOnLastMonth: yup.boolean(),
});

interface FormModel {
  monthSalary: number;
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
    enterprisePension: number;
    enterprisePensionTwo: number;
    other: number;
  };
  insuranceRate: {
    endowment: number;
    health: number;
    unemployment: number;
  };
  insuranceBaseOnLastMonth: boolean;
}

function makeDefaultFormData(recipe: CityRecipe): FormModel {
  return {
    monthSalary: 10000,
    annualBonus: 0,
    insuranceBase: 10000,
    housingFundBase: 10000,
    housingFundRate: 5,
    extraDeduction: {
      childEducation: 0,
      continuingEducation: 0,
      seriousMedicalExpense: 0,
      housingLoanInterest: 0,
      renting: 0,
      elderlyCare: 0,
      enterprisePension: 0,
      enterprisePensionTwo: 0,
      other: 0,
    },
    insuranceRate: {
      endowment: recipe.employee.insuranceRate.endowment * 100,
      health: recipe.employee.insuranceRate.health * 100,
      unemployment: recipe.employee.insuranceRate.unemployment * 100,
    },
    insuranceBaseOnLastMonth: recipe.insuranceBaseOnLastMonth,
  };
}

export interface FormProps {
  usePredefinedInsurancePercents: boolean;
}

export function CalculatorForm({ usePredefinedInsurancePercents }: FormProps) {
  const recipe = useStore(x => x.recipe);
  const updateBaseMeta = useStore(x => x.updateBaseMeta);
  const monthlyMetasChanged = useStore(x => x.monthlyMetasChanged);
  const storeReset = useStore(x => x.reset);
  const [formData, setFormData] = useState({});
  const formContext = useForm<FormModel>({
    defaultValues: merge({}, makeDefaultFormData(recipe), formData),
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });

  useFormPersist(
    'react_cal_form',
    {
      watch: formContext.watch,
      setValue: formContext.setValue,
    },
    {
      onDataRestored(data) {
        setFormData(data);
      },
    },
  );

  const handleSuccess = (data: any) => {
    setFormData(data);
    updateBaseMeta(buildBaseMeta(data, recipe));
  };

  const handleReset = () => {
    const newFormData = merge({}, formContext.getValues(), {
      monthSalary: 10000,
      annualBonus: 0,
      insuranceBase: 10000,
      housingFundBase: 10000,
      housingFundRate: 5,
      extraDeduction: {
        childEducation: 0,
        continuingEducation: 0,
        seriousMedicalExpense: 0,
        housingLoanInterest: 0,
        renting: 0,
        elderlyCare: 0,
        enterprisePension: 0,
        enterprisePensionTwo: 0,
        other: 0,
      },
    });
    setFormData(newFormData);
    formContext.reset(newFormData);
  };

  const handleClear = () => {
    storeReset();
  };

  return (
    <FormContainer formContext={formContext} onSuccess={handleSuccess}>
      <div className="grid gap-8 md:grid-cols-4">
        <div className="w-full">
          <TextFieldElement
            className="w-full"
            name="monthSalary"
            label="月薪"
            variant="outlined"
            type="number"
            required
            InputProps={{ ...yuanSuffix }}
          />
        </div>

        <div className="w-full">
          <TextFieldElement
            className="w-full"
            name="annualBonus"
            label="年终奖"
            variant="outlined"
            type="number"
            required
            InputProps={{ ...yuanSuffix }}
          />
        </div>
      </div>

      <Box
        className="flex flex-row flex-wrap"
        sx={{
          '& .MuiTextField-root': { m: 1 },
        }}
      >
        <TextFieldElement
          name="insuranceBase"
          label="社保缴纳基数"
          variant="standard"
          type="number"
          required
          InputProps={{ ...yuanSuffix }}
        />

        <Box>
          <TextFieldElement
            name="housingFundBase"
            label="公积金缴纳基数"
            variant="standard"
            type="number"
            required
            InputProps={{ ...yuanSuffix }}
          />

          <TextFieldElement
            name="housingFundRate"
            label="公积金个人缴纳比例"
            variant="standard"
            type="number"
            required
            InputProps={{
              ...percentageSuffix,
            }}
          />
        </Box>
      </Box>

      <Box
        className="flex flex-row flex-wrap"
        sx={{
          '& .MuiTextField-root': { m: 1 },
        }}
      >
        <TextFieldElement
          name="extraDeduction.childEducation"
          label="子女教育(当月)"
          variant="standard"
          type="number"
          required
          InputProps={{ ...yuanSuffix }}
          sx={{ width: 120 }}
        />

        <TextFieldElement
          name="extraDeduction.continuingEducation"
          label="继续教育(当月)"
          variant="standard"
          type="number"
          required
          InputProps={{ ...yuanSuffix }}
          sx={{ width: 120 }}
        />

        <TextFieldElement
          name="extraDeduction.seriousMedicalExpense"
          label="大病医疗(当月)"
          variant="standard"
          type="number"
          required
          InputProps={{ ...yuanSuffix }}
          sx={{ width: 120 }}
        />

        <TextFieldElement
          name="extraDeduction.housingLoanInterest"
          label="住房贷款利息(当月)"
          variant="standard"
          type="number"
          required
          InputProps={{ ...yuanSuffix }}
          sx={{ width: 120 }}
        />

        <TextFieldElement
          name="extraDeduction.renting"
          label="住房租金(当月)"
          variant="standard"
          type="number"
          required
          InputProps={{ ...yuanSuffix }}
          sx={{ width: 120 }}
        />

        <TextFieldElement
          name="extraDeduction.elderlyCare"
          label="赡养老人(当月)"
          variant="standard"
          type="number"
          required
          InputProps={{ ...yuanSuffix }}
          sx={{ width: 120 }}
        />

        <TextFieldElement
          name="extraDeduction.enterprisePension"
          label="企业年金个人缴纳金额"
          variant="standard"
          type="number"
          required
          InputProps={{ ...yuanSuffix }}
          sx={{ width: 120 }}
        />

        <TextFieldElement
          name="extraDeduction.enterprisePensionTwo"
          label="企业年金公司缴纳金额"
          variant="standard"
          type="number"
          required
          InputProps={{ ...yuanSuffix }}
          sx={{ width: 120 }}
        />

        <TextFieldElement
          name="extraDeduction.other"
          label="其他扣除项"
          variant="standard"
          type="number"
          required
          InputProps={{ ...yuanSuffix }}
          sx={{ width: 120 }}
        />
      </Box>

      {!usePredefinedInsurancePercents && (
        <Box
          className="flex flex-row flex-wrap"
          sx={{
            '& .MuiTextField-root': { m: 1 },
          }}
        >
          <TextFieldElement
            name="insuranceRate.endowment"
            label="养老保险个人缴纳比例"
            variant="standard"
            type="number"
            required
            InputProps={{
              ...percentageSuffix,
            }}
          />

          <TextFieldElement
            name="insuranceRate.health"
            label="医疗保险个人缴纳比例"
            variant="standard"
            type="number"
            required
            InputProps={{
              ...percentageSuffix,
            }}
          />

          <TextFieldElement
            name="insuranceRate.unemployment"
            label="失业保险个人缴纳比例"
            variant="standard"
            type="number"
            required
            InputProps={{
              ...percentageSuffix,
            }}
          />

          <SwitchElement
            label="按上月收入缴纳社保"
            name="insuranceBaseOnLastMonth"
          />
        </Box>
      )}

      <Box className="mt-3 flex flex-row">
        <Button
          disabled={!formContext.formState.isValid || monthlyMetasChanged}
          variant="contained"
          size="large"
          type="submit"
        >
          计算
        </Button>

        <Button
          disabled={monthlyMetasChanged}
          className="ml-3"
          variant="outlined"
          size="large"
          onClick={handleReset}
        >
          重置
        </Button>

        <Button
          className="ml-3"
          variant="outlined"
          size="large"
          onClick={handleClear}
        >
          清空结果
        </Button>
      </Box>
    </FormContainer>
  );
}
