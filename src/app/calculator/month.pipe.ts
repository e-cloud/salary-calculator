import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'month',
})
export class MonthPipe extends DatePipe {
  transform(value: any, format?: any, timezone?: any, locale?: any): any {
    const date = new Date();
    date.setMonth(value);
    return super.transform(date, 'MMMM');
  }
}
