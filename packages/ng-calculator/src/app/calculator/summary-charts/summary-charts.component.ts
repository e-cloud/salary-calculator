import { Component, EventEmitter, Input, Output } from '@angular/core';
import type { EChartsOption } from 'echarts';
import { FullYearIncomeInfo, MonthlyIncomeInfo } from 'calculator-core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-summary-charts',
  templateUrl: './summary-charts.component.html',
  styleUrls: ['./summary-charts.component.scss'],
})
export class SummaryChartsComponent {
  @Input() clear!: boolean;
  @Input() deductionChartOption!: Observable<EChartsOption> | null;
  @Input() annualDeductionChartOption!: Observable<EChartsOption> | null;
  @Input() monthlyIncomes$!: Observable<MonthlyIncomeInfo[]>;
  @Input() summary$!: Observable<FullYearIncomeInfo>;
  @Input() selectedMonthIndex$!: BehaviorSubject<number>;

  @Output() changeChartMonth = new EventEmitter<number>();

  readonly months = Array.from({ length: 12 }, (_, i) => i + 1);
}
