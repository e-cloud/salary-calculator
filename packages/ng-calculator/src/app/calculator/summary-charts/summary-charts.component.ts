/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import type { EChartsOption } from 'echarts';
import { FullYearIncomeInfo, MonthlyIncomeInfo } from 'calculator-core';
import { BehaviorSubject, Observable, combineLatest, filter, map } from 'rxjs';

@Component({
  selector: 'app-summary-charts',
  templateUrl: './summary-charts.component.html',
  styleUrls: ['./summary-charts.component.scss'],
})
export class SummaryChartsComponent implements OnInit {
  @Input() clear!: boolean;
  @Input() monthlyIncomes$!: Observable<MonthlyIncomeInfo[]>;
  @Input() summary$!: Observable<FullYearIncomeInfo>;
  @Input() selectedMonth$!: BehaviorSubject<number>;
  @Input() scroll$!: Observable<void>;

  @Output() changeChartMonth = new EventEmitter<number>();

  // 用于滚动到图表位置
  @ViewChild('chart', { read: ElementRef }) chart: ElementRef | null = null;

  deductionChartOption$!: Observable<EChartsOption>;
  annualDeductionChartOption$!: Observable<EChartsOption>;
  readonly months = Array.from({ length: 12 }, (_, i) => i + 1);

  ngOnInit() {
    this.initializeChartOptions();
    this.scroll$.subscribe(() => {
      this.scrollToChart();
    });
  }

  onChangeChartMonth(index: number) {
    this.changeChartMonth.emit(index);
  }

  private initializeChartOptions() {
    // 创建月薪扣除饼图数据
    this.deductionChartOption$ = combineLatest([
      this.monthlyIncomes$,
      this.selectedMonth$,
    ]).pipe(
      filter(([incomes, _]) => !!incomes && incomes.length > 0),
      map(([incomes, month]) => {
        // 使用选中月份的数据
        const selectedMonth = incomes[month - 1];

        // 准备饼图数据
        const data = [
          { value: selectedMonth.cashIncome, name: '实发工资' },
          { value: selectedMonth.housingFund, name: '住房公积金' },
          { value: selectedMonth.insuranceCosts.endowment, name: '养老保险' },
          { value: selectedMonth.insuranceCosts.health, name: '医疗保险' },
          { value: selectedMonth.tax, name: '个人所得税' },
          {
            value: selectedMonth.insuranceCosts.unemployment,
            name: '失业保险',
          },
          {
            value: selectedMonth.extraDeduction.enterprisePensionFromEmployee,
            name: '企业年金',
          },
        ];

        // 返回ECharts配置
        return {
          tooltip: {
            trigger: 'item',
            formatter: function (params: any) {
              const currency = new Intl.NumberFormat('zh-CN', {
                style: 'currency',
                currency: 'CNY',
                maximumFractionDigits: 2,
              });
              return `${params.seriesName} <br/>${
                params.name
              }: ${currency.format(params.value)} (${params.percent}%)`;
            },
          },
          legend: {
            orient: 'vertical',
            right: 10,
            data: data.map((item) => item.name),
          },
          series: [
            {
              name: '月薪分配',
              type: 'pie',
              startAngle: -45,
              avoidLabelOverlap: true,
              itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 1,
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: 20,
                  fontWeight: 'bold',
                },
              },
              label: {
                padding: 4,
                minMargin: 8,
                formatter: function (params: any) {
                  const currency = new Intl.NumberFormat('zh-CN', {
                    style: 'currency',
                    currency: 'CNY',
                    maximumFractionDigits: 2,
                  });
                  return `${params.name}:\n${currency.format(params.value)} (${
                    params.percent
                  }%)`;
                },
              },
              data: data,
            },
          ],
        } as EChartsOption;
      })
    );

    this.annualDeductionChartOption$ = this.summary$.pipe(
      map((summary) => {
        const data = [
          { value: summary.cashIncomeDeprecated, name: '全年税后' },
          { value: summary.employee.housingFund, name: '全年公积金' },
          { value: summary.fullInsurance, name: '全年社保' },
          { value: summary.totalSeparatedTax, name: '全年个税' },
          {
            value: summary.employee.enterprisePension,
            name: '全年企业年金',
          },
        ];

        return {
          tooltip: {
            trigger: 'item',
            formatter: function (params: any) {
              const currency = new Intl.NumberFormat('zh-CN', {
                style: 'currency',
                currency: 'CNY',
                maximumFractionDigits: 2,
              });
              return `${params.seriesName} <br/>${
                params.name
              }: ${currency.format(params.value)} (${params.percent}%)`;
            },
          },
          legend: {
            orient: 'vertical',
            right: 10,
            data: data.map((item) => item.name),
          },
          series: [
            {
              name: '年薪分配',
              type: 'pie',
              startAngle: -45,
              avoidLabelOverlap: true,
              itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 1,
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: 20,
                  fontWeight: 'bold',
                },
              },
              label: {
                padding: 4,
                minMargin: 8,
                formatter: function (params: any) {
                  const currency = new Intl.NumberFormat('zh-CN', {
                    style: 'currency',
                    currency: 'CNY',
                    maximumFractionDigits: 2,
                  });
                  return `${params.name}:\n${currency.format(params.value)} (${
                    params.percent
                  }%)`;
                },
              },
              data: data,
            },
          ],
        } as EChartsOption;
      })
    );
  }

  private scrollToChart() {
    setTimeout(() => {
      if (this.chart) {
        (this.chart.nativeElement as HTMLElement).scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
        });
      }
    }, 500);
  }
}
