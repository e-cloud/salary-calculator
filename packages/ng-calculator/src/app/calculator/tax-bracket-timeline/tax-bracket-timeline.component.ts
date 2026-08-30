/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgxEchartsDirective } from 'ngx-echarts';
import type { EChartsOption } from 'echarts';
import {
  MonthlyIncomeInfo,
  MonthlyTaxBracketAnalysis,
  TaxBracketTimelineResult,
  analyzeTaxBracketTimeline,
} from 'calculator-core';

@Component({
  selector: 'app-tax-bracket-timeline',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatTabsModule,
    MatProgressBarModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    NgxEchartsDirective,
  ],
  templateUrl: './tax-bracket-timeline.component.html',
  styleUrls: ['./tax-bracket-timeline.component.scss'],
})
export class TaxBracketTimelineComponent implements OnInit, OnChanges {
  @Input() monthlyIncomes: MonthlyIncomeInfo[] = [];
  @Input() clear = false;
  @Input() selectedMonth = 1;

  @Output() changeSelectedMonth = new EventEmitter<number>();

  protected readonly Math = Math;

  timelineResult: TaxBracketTimelineResult | null = null;
  selectedAnalysis: MonthlyTaxBracketAnalysis | null = null;
  trendChartOption: EChartsOption | null = null;

  ngOnInit(): void {
    this.updateAnalysis();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['monthlyIncomes'] || changes['clear']) {
      this.updateAnalysis();
    }
    if (changes['selectedMonth']) {
      this.updateSelectedAnalysis();
    }
  }

  onSelectMonth(actualMonth: number): void {
    this.selectedMonth = actualMonth;
    this.updateSelectedAnalysis();
    this.changeSelectedMonth.emit(actualMonth);
  }

  getRateColorClass(rate: number): string {
    if (rate <= 0.03) return 'rate-level-1'; // 3% 绿色
    if (rate <= 0.1) return 'rate-level-2'; // 10% 浅蓝
    if (rate <= 0.2) return 'rate-level-3'; // 20% 橙色
    if (rate <= 0.25) return 'rate-level-4'; // 25% 琥珀色
    if (rate <= 0.3) return 'rate-level-5'; // 30% 紫红
    if (rate <= 0.35) return 'rate-level-6'; // 35% 绯红
    return 'rate-level-7'; // 45% 深红
  }

  formatRate(rate: number): string {
    return `${Math.round(rate * 100)}%`;
  }

  private updateAnalysis(): void {
    if (
      this.clear ||
      !this.monthlyIncomes ||
      this.monthlyIncomes.length === 0
    ) {
      this.timelineResult = null;
      this.selectedAnalysis = null;
      this.trendChartOption = null;
      return;
    }

    this.timelineResult = analyzeTaxBracketTimeline(this.monthlyIncomes);
    this.updateSelectedAnalysis();
    this.buildTrendChartOption();
  }

  private updateSelectedAnalysis(): void {
    if (
      !this.timelineResult ||
      this.timelineResult.monthlyAnalyses.length === 0
    ) {
      this.selectedAnalysis = null;
      return;
    }
    const found = this.timelineResult.monthlyAnalyses.find(
      (m) => m.actualMonth === this.selectedMonth,
    );
    this.selectedAnalysis = found || this.timelineResult.monthlyAnalyses[0];
  }

  private buildTrendChartOption(): void {
    if (
      !this.timelineResult ||
      this.timelineResult.monthlyAnalyses.length === 0
    ) {
      this.trendChartOption = null;
      return;
    }

    const analyses = this.timelineResult.monthlyAnalyses;
    const months = analyses.map((m) => `${m.actualMonth}月`);
    const cashIncomes = analyses.map((m) => m.cashIncome);
    const taxes = analyses.map((m) => m.tax);
    const marginalRates = analyses.map((m) => Math.round(m.endRate * 100));

    // 跳档标记点
    const transitionMarkPoints = analyses
      .filter((m) => m.isTransition)
      .map((m) => ({
        name: `${m.actualMonth}月跳档`,
        value: `${this.formatRate(m.startRate)}→${this.formatRate(m.endRate)}`,
        xAxis: `${m.actualMonth}月`,
        yAxis: Math.round(m.endRate * 100),
      }));

    this.trendChartOption = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
        },
        formatter: (params: any) => {
          if (!Array.isArray(params) || params.length === 0) return '';
          const monthIdx = params[0].dataIndex;
          const analysis = analyses[monthIdx];
          if (!analysis) return '';

          let html = `<div style="font-weight: bold; margin-bottom: 4px;">${analysis.actualMonth}月份 薪税分析</div>`;
          html += `<div>边际税率：<b style="color:#ff7043">${this.formatRate(analysis.endRate)}</b>${
            analysis.isTransition
              ? ` (⚡ 发生跳档: ${this.formatRate(analysis.startRate)}→${this.formatRate(analysis.endRate)})`
              : ''
          }</div>`;
          html += `<div>当月个税：¥${analysis.tax.toFixed(2)} ${
            analysis.taxDelta > 0
              ? `<span style="color:#e53935">(+¥${analysis.taxDelta.toFixed(2)})</span>`
              : ''
          }</div>`;
          html += `<div>到手现金：¥${analysis.cashIncome.toFixed(2)} ${
            analysis.cashDelta < 0
              ? `<span style="color:#d32f2f">(${analysis.cashDelta.toFixed(2)})</span>`
              : ''
          }</div>`;
          html += `<div>累计应纳税所得额：¥${analysis.accumulatedTaxQuota.toFixed(2)}</div>`;
          if (analysis.distanceToNextThreshold > 0) {
            html += `<div>距下档门槛 (¥${analysis.upperThreshold.toLocaleString()}): 剩 ¥${analysis.distanceToNextThreshold.toFixed(2)}</div>`;
          }
          return html;
        },
      },
      legend: {
        data: ['到手现金(元)', '当月个税(元)', '适用边际税率(%)'],
        bottom: 0,
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '12%',
        top: '12%',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'category',
          data: months,
          axisPointer: {
            type: 'shadow',
          },
        },
      ],
      yAxis: [
        {
          type: 'value',
          name: '金额 (元)',
          axisLabel: {
            formatter: '¥{value}',
          },
        },
        {
          type: 'value',
          name: '边际税率 (%)',
          min: 0,
          max: 45,
          interval: 10,
          axisLabel: {
            formatter: '{value}%',
          },
        },
      ],
      series: [
        {
          name: '到手现金(元)',
          type: 'line',
          smooth: true,
          data: cashIncomes,
          itemStyle: {
            color: '#42a5f5',
          },
        },
        {
          name: '当月个税(元)',
          type: 'bar',
          data: taxes,
          itemStyle: {
            color: '#ef5350',
          },
        },
        {
          name: '适用边际税率(%)',
          type: 'line',
          step: 'end',
          yAxisIndex: 1,
          data: marginalRates,
          itemStyle: {
            color: '#ff9800',
          },
          lineStyle: {
            width: 3,
          },
          markPoint: {
            symbol: 'pin',
            symbolSize: 46,
            data: transitionMarkPoints,
            itemStyle: {
              color: '#d32f2f',
            },
          },
        },
      ],
    };
  }
}
