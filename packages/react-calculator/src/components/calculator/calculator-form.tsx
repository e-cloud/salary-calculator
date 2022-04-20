import {
  Box,
  Button,
  FormControlLabel,
  InputAdornment,
  Switch,
  TextField,
} from '@mui/material';
import { Fragment } from 'react';

function makeSuffixElement(suffix: string) {
  return <InputAdornment position="end">{suffix}</InputAdornment>;
}

export const yuanSuffix = {
  endAdornment: makeSuffixElement('元'),
};

export const percentageSuffix = {
  endAdornment: makeSuffixElement('%'),
};

export function CalculatorForm() {
  return (
    <Fragment>
      <div className="grid gap-8 md:grid-cols-4">
        <div className="w-full">
          <TextField
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
          <TextField
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

      <Box
        className="flex flex-row flex-wrap"
        sx={{
          '& .MuiTextField-root': { m: 1 },
        }}
      >
        <TextField
          name="housingFundRate"
          label="养老保险个人缴纳比例"
          variant="standard"
          type="number"
          required
          InputProps={{
            ...percentageSuffix,
          }}
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
        />

        <FormControlLabel
          control={<Switch defaultChecked />}
          label="按上月收入缴纳社保"
        />
      </Box>

      <Box className="mt-3 flex flex-row">
        <Button variant="contained" size="large">
          计算
        </Button>

        <Button className="ml-3" variant="outlined" size="large">
          重置
        </Button>

        <Button className="ml-3" variant="outlined" size="large">
          清空结果
        </Button>
      </Box>
    </Fragment>
  );
}
