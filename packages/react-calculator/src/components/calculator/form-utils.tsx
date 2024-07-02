import { InputAdornment } from '@mui/material';
import * as yup from 'yup';

function makeSuffixElement(suffix: string) {
  return <InputAdornment position="end">{suffix}</InputAdornment>;
}

export const yuanSuffix = {
  endAdornment: makeSuffixElement('元'),
};
export const percentageSuffix = {
  endAdornment: makeSuffixElement('%'),
};
const minMessage = '需不小于0';
const typeErrMessage = '请输入有效数字';
export const numberRule = yup
  .number()
  .min(0, minMessage)
  .typeError(typeErrMessage);
