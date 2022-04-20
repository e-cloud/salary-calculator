import { indigo, pink } from '@mui/material/colors';
import { ThemeOptions } from '@mui/material/styles';

const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: indigo,
    secondary: pink,
  },
  typography: {
    // 中文字符和日文字符通常比较大，
    // 所以选用一个略小的 fontsize 会比较合适。
    fontSize: 12,
  },
};

export default lightThemeOptions;
