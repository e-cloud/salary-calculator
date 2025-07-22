/* eslint-disable @typescript-eslint/no-explicit-any */
import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'month',
})
export class MonthPipe extends DatePipe implements PipeTransform {
  override transform(
    value: any,
    format?: any,
    timezone?: any,
    locale?: any
  ): any {
    const date = new Date();
    date.setMonth(value);
    return super.transform(date, 'MMMM');
  }
}
