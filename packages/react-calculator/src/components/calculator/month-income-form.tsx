import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Typography } from '@mui/material';
import {
  childEducationDeductionOptions,
  continuousEducationDeductionOptions, elderlyCareDeductionOptions,
  housingLoanInterestDeductionOptions,
  MonthlyIncomeInfo,
  MonthlyIncomeMeta, rentingDeductionOptions
} from 'calculator-core';
import { mapValues } from 'lodash-es';
import { FormContainer, SwitchElement, TextFieldElement } from '@/modules/react-hook-form-mui';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import {
  numberRule,
  percentageSuffix,
  yuanSuffix,
} from '@/components/calculator/form-utils';
import { useStore } from '@/store';
import { numberFormat } from '@/utils/pipes';
import {SimpleYuanAutoComplete} from '@/components/simpleYuanAutoComplete.tsx';

export interface DetailFormModel {
  monthSalary: number;
  newPayCycle: boolean;
  monthlyBonus: number;
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

export interface MonthIncomeFormProps {
  index: number;
  model: DetailFormModel;
  income: MonthlyIncomeInfo;
}

const schema = yup.object().shape({
  monthSalary: numberRule,
  annualBonus: numberRule,
  monthlyBonus: numberRule,
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
  newPayCycle: yup.boolean(),
});

const threeDigitFormat = (x: number) => numberFormat(x, '0.0-3');

export function MonthIncomeForm(props: MonthIncomeFormProps) {
  const { income, model, index } = props;
  const updateMeta = useStore(x => x.updateMeta);
  const formContext = useForm<DetailFormModel>({
    defaultValues: model,
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });

  const handleSuccess = (data: DetailFormModel) => {
    updateMeta(
      {
        salary: data.monthSalary + data.monthlyBonus,
        insuranceBase: data.insuranceBase,
        housingFundBase: data.housingFundBase,
        housingFundRate: data.housingFundRate / 100,
        insuranceRate: mapValues<MonthlyIncomeMeta['insuranceRate'], number>(
          data.insuranceRate,
          v => v / 100,
        ),
        extraDeduction: data.extraDeduction,
        newPayCycle: data.newPayCycle,
        insuranceBaseOnLastMonth: data.insuranceBaseOnLastMonth,
      },
      index,
    );
  };

  return (
    <FormContainer formContext={formContext} onSuccess={handleSuccess}>
      <Box
        className="flex flex-row flex-wrap"
        sx={{
          '& .MuiTextField-root': { m: 1 },
        }}
      >
        <TextFieldElement
          name="monthSalary"
          label="月薪"
          variant="standard"
          type="number"
          required
          InputProps={{ ...yuanSuffix }}
        />

        <TextFieldElement
          className="ml-6"
          name="annualBonus"
          label="年终奖"
          variant="standard"
          type="number"
          required
          InputProps={{ ...yuanSuffix }}
        />

        <SwitchElement label="入职新公司（新计费周期）？" name="newPayCycle" />
      </Box>

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
            name="housingFundRate"
            label="养老保险个人缴纳比例"
            variant="standard"
            type="number"
            required
            InputProps={{
              ...percentageSuffix,
            }}
            sx={{ width: 120 }}
          />

          <TextFieldElement
            name="housingFundRate"
            label="医疗保险个人缴纳比例"
            variant="standard"
            type="number"
            required
            InputProps={{
              ...percentageSuffix,
            }}
            sx={{ width: 120 }}
          />

          <TextFieldElement
            name="housingFundRate"
            label="失业保险个人缴纳比例"
            variant="standard"
            type="number"
            required
            InputProps={{
              ...percentageSuffix,
            }}
            sx={{ width: 120 }}
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

      <Box
        className="flex flex-row flex-wrap"
        sx={{
          '& .MuiTextField-root': { m: 1 },
        }}
        mb={2}
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

      <Typography variant="body1" mb={1}>
        个人三险总费：{threeDigitFormat(income.insuranceFullCost)}， 社保：
        {threeDigitFormat(income.insuranceCosts.endowment)}， 医保：
        {threeDigitFormat(income.insuranceCosts.health)}， 失业：
        {threeDigitFormat(income.insuranceCosts.unemployment)}
      </Typography>

      <Typography variant="body1" mb={1}>
        公司五险总费：{threeDigitFormat(income.employerCosts.insuranceFull)}，
        社保：{threeDigitFormat(income.employerCosts.insurance.endowment)}，
        医保：{threeDigitFormat(income.employerCosts.insurance.health)}， 失业：
        {threeDigitFormat(income.employerCosts.insurance.unemployment)}， 工伤：
        {threeDigitFormat(income.employerCosts.insurance.occupationalInjury)}，
        生育：{threeDigitFormat(income.employerCosts.insurance.birth)}
      </Typography>

      <Box className="mt-3 flex flex-row justify-end">
        <Button type="submit" variant="contained">
          更新
        </Button>
      </Box>
    </FormContainer>
  );
}
