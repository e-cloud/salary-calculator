import {
  Box,
  Button,
  FormControlLabel,
  Switch,
  TextField,
} from '@mui/material';
import { Fragment } from 'react';

import {
  percentageSuffix,
  yuanSuffix,
} from '@/components/calculator/calculator-form';

export function MonthIncomeForm() {
  return (
    <Fragment>
      <div className="flex flex-row flex-wrap">
        <TextField
          name="monthSalary"
          label="月薪"
          variant="standard"
          type="number"
          required
          InputProps={{ ...yuanSuffix }}
        />

        <TextField
          className="ml-6"
          name="annualBonus"
          label="年终奖"
          variant="standard"
          type="number"
          required
          InputProps={{ ...yuanSuffix }}
        />

        <FormControlLabel
          className="ml-3"
          control={<Switch defaultChecked />}
          label="入职新公司（新计费周期）？"
        />
      </div>

      <Box
        className="flex flex-row flex-wrap"
        sx={{
          '& .MuiTextField-root': { m: 1 },
        }}
      >
        <TextField
          name="insuranceBase"
          label="社保缴纳基数"
          variant="standard"
          type="number"
          required
          InputProps={{ ...yuanSuffix }}
        />

        <Box>
          <TextField
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

          <TextField
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

          <TextField
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
        <TextField
          name="housingFundBase"
          label="公积金缴纳基数"
          variant="standard"
          type="number"
          required
          InputProps={{ ...yuanSuffix }}
        />

        <TextField
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
      >
        <TextField
          name="childEducation"
          label="子女教育(当月)"
          variant="standard"
          type="number"
          required
          InputProps={{ ...yuanSuffix }}
          sx={{ width: 120 }}
        />

        <TextField
          name="continuingEducation"
          label="继续教育(当月)"
          variant="standard"
          type="number"
          required
          InputProps={{ ...yuanSuffix }}
          sx={{ width: 120 }}
        />

        <TextField
          name="seriousMedicalExpense"
          label="大病医疗(当月)"
          variant="standard"
          type="number"
          required
          InputProps={{ ...yuanSuffix }}
          sx={{ width: 120 }}
        />

        <TextField
          name="housingLoanInterest"
          label="住房贷款利息(当月)"
          variant="standard"
          type="number"
          required
          InputProps={{ ...yuanSuffix }}
          sx={{ width: 120 }}
        />

        <TextField
          name="renting"
          label="住房租金(当月)"
          variant="standard"
          type="number"
          required
          InputProps={{ ...yuanSuffix }}
          sx={{ width: 120 }}
        />

        <TextField
          name="elderlyCare"
          label="赡养老人(当月)"
          variant="standard"
          type="number"
          required
          InputProps={{ ...yuanSuffix }}
          sx={{ width: 120 }}
        />

        <TextField
          name="enterprisePension"
          label="企业年金个人缴纳金额"
          variant="standard"
          type="number"
          required
          InputProps={{ ...yuanSuffix }}
          sx={{ width: 120 }}
        />

        <TextField
          name="enterprisePensionTwo"
          label="企业年金公司缴纳金额"
          variant="standard"
          type="number"
          required
          InputProps={{ ...yuanSuffix }}
          sx={{ width: 120 }}
        />

        <TextField
          name="other"
          label="其他扣除项"
          variant="standard"
          type="number"
          required
          InputProps={{ ...yuanSuffix }}
          sx={{ width: 120 }}
        />
      </Box>

      <Box className="mt-3 flex flex-row justify-end">
        <Button variant="contained">更新</Button>
      </Box>
    </Fragment>
  );
}
