import {
  ApplicationConfig,
  DEFAULT_CURRENCY_CODE,
  LOCALE_ID,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { provideEchartsCore } from 'ngx-echarts';

// 自定义中文货币与格式化规则
zh[14] = ['#,###0.###', '#,##0%', '¤#,###0.00', '#E0'];
registerLocaleData(zh);

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    echarts: any;
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideHttpClient(),
    provideAnimationsAsync(),
    {
      provide: LOCALE_ID,
      useValue: 'zh',
    },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: '¥',
    },
    provideEchartsCore({
      echarts: () =>
        typeof window !== 'undefined' && window.echarts
          ? Promise.resolve(window.echarts)
          : import('echarts'),
    }),
  ],
};
