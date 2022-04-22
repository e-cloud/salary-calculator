import { yupResolver } from '@hookform/resolvers/yup';
import { Autocomplete, Box, Button } from '@mui/material';
import {
  buildBaseMeta,
  childEducationDeductionOptions,
  CityRecipe,
  continuousEducationDeductionOptions, elderlyCareDeductionOptions,
  housingLoanInterestDeductionOptions, rentingDeductionOptions
} from 'calculator-core';
import { merge } from 'lodash-es';
import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  AutocompleteElement,
  FormContainer,
  SwitchElement,
  TextFieldElement,
} from '@/modules/react-hook-form-mui';
import * as yup from 'yup';

import {
  numberRule,
  percentageSuffix,
  yuanSuffix,
} from '@/components/calculator/form-utils';
import { useStore } from '@/store';
import useFormPersist from '@/utils/persist';
import {SimpleYuanAutoComplete} from '@/components/simpleYuanAutoComplete.tsx';

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

function insuranceTop(cityRecipe: CityRecipe) {
  return Array.isArray(cityRecipe.insuranceBaseRange)
    ? cityRecipe.insuranceBaseRange[1]
    : cityRecipe.insuranceBaseRange.endowment[1];
}

function housingFundTop(cityRecipe: CityRecipe) {
  return cityRecipe.housingFundBaseRange[1];
}

function makeInsuranceOptions(salary: number, recipe: CityRecipe) {
  return [
    {
      label: `全额缴纳：${salary}元(不超上限${insuranceTop(recipe)}元)`,
      value: salary,
    },
    {
      label: `最低工资标准：${recipe.minimumWage}元`,
      value: recipe.minimumWage,
    },
    { label: '不缴纳：0元', value: 0 },
  ];
}

function makeHousingFundOptions(salary: number, recipe: CityRecipe) {
  return [
    {
      label: `全额缴纳：${salary}元(不超上限${housingFundTop(recipe)}元)`,
      value: salary,
    },
    {
      label: `最低工资标准：${recipe.minimumWage}元`,
      value: recipe.minimumWage,
    },
    { label: '不缴纳：0元', value: 0 },
  ];
}

export function CalculatorForm({ usePredefinedInsurancePercents }: FormProps) {
  const recipe = useStore(x => x.recipe);
  const updateBaseMeta = useStore(x => x.updateBaseMeta);
  const monthlyMetasChanged = useStore(x => x.monthlyMetasChanged);
  const storeReset = useStore(x => x.reset);
  const [formData, setFormData] = useState<FormModel>({} as FormModel);
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

  const handleSuccess = (data: FormModel) => {
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

  const currentMonthlySalary = formContext.watch('monthSalary');

  const insuranceOptions = useMemo(() => {
    return makeInsuranceOptions(currentMonthlySalary, recipe);
  }, [currentMonthlySalary, recipe]);

  const housingFundOptions = useMemo(() => {
    return makeHousingFundOptions(currentMonthlySalary, recipe);
  }, [currentMonthlySalary, recipe]);

  return (
    <FormContainer formContext={formContext} onSuccess={handleSuccess}>
      <div className="grid gap-8 md:grid-cols-4 mb-4">
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
          '& .MuiAutocomplete-root': { m: 1 },
        }}
      >

        <SimpleYuanAutoComplete
          name="insuranceBase"
          label="社保缴纳基数"
          options={insuranceOptions}
        />

        <Box>
          <SimpleYuanAutoComplete
            name="housingFundBase"
            label="公积金缴纳基数"
            options={housingFundOptions}
          />

          <TextFieldElement
            sx={{
              m: 1,
            }}
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

        <SimpleYuanAutoComplete
          name="extraDeduction.childEducation"
          label="子女教育(当月)"
          options={childEducationDeductionOptions}
          width={150}
        />

        <SimpleYuanAutoComplete
          name="extraDeduction.continuingEducation"
          label="继续教育(当月)"
          options={continuousEducationDeductionOptions}
          width={150}
        />

        <TextFieldElement
          name="extraDeduction.seriousMedicalExpense"
          label="大病医疗(当月)"
          variant="standard"
          type="number"
          required
          InputProps={{ ...yuanSuffix }}
          sx={{ width: 150 }}
        />

        <SimpleYuanAutoComplete
          name="extraDeduction.housingLoanInterest"
          label="住房贷款利息(当月)"
          options={housingLoanInterestDeductionOptions}
          width={180}
        />

        <SimpleYuanAutoComplete
          name="extraDeduction.renting"
          label="住房租金(当月)"
          options={rentingDeductionOptions}
          width={150}
        />

        <SimpleYuanAutoComplete
          name="extraDeduction.elderlyCare"
          label="赡养老人(当月)"
          options={elderlyCareDeductionOptions}
          width={150}
        />

        <TextFieldElement
          name="extraDeduction.enterprisePension"
          label="企业年金个人缴纳金额"
          variant="standard"
          type="number"
          required
          InputProps={{ ...yuanSuffix }}
          sx={{ width: 200 }}
        />

        <TextFieldElement
          name="extraDeduction.enterprisePensionTwo"
          label="企业年金公司缴纳金额"
          variant="standard"
          type="number"
          required
          InputProps={{ ...yuanSuffix }}
          sx={{ width: 200 }}
        />

        <TextFieldElement
          name="extraDeduction.other"
          label="其他扣除项"
          variant="standard"
          type="number"
          required
          InputProps={{ ...yuanSuffix }}
          sx={{ width: 150 }}
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
          className="!ml-3"
          variant="outlined"
          size="large"
          onClick={handleReset}
        >
          重置
        </Button>

        <Button
          className="!ml-3"
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
