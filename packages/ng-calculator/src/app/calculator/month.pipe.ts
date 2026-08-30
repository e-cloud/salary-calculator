/* eslint-disable @typescript-eslint/no-explicit-any */
import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'month',
  standalone: true,
})
export class MonthPipe extends DatePipe implements PipeTransform {
  override transform(
    value: any,
    format?: any,
    timezone?: any,
    locale?: any,
  ): any {
    // 固定使用每月 1 日，彻底避免因当前系统处于 29/30/31 号时 setMonth 发生日期溢出（如2月溢出到3月出现两个3月）
    const date = new Date(2000, Number(value), 1);
    return super.transform(date, format || 'MMMM', timezone, locale);
  }
}
