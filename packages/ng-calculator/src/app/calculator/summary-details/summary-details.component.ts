import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import {
  FullYearIncomeInfo,
  MonthlyIncomeInfo,
  nonMergeTaxCalculationEndDate,
} from 'calculator-core';
import { Observable } from 'rxjs';
import { ExportDataService } from '../export-data.service';

@Component({
  selector: 'app-summary-details',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
  ],
  templateUrl: './summary-details.component.html',
  styleUrls: ['./summary-details.component.scss'],
})
export class SummaryDetailsComponent {
  @Input() clear!: boolean;
  @Input() summary$!: Observable<FullYearIncomeInfo | null>;
  @Input() monthlyIncomes: MonthlyIncomeInfo[] = [];
  @Input() cityLabel: string = '全国';
  @Input() year: number = new Date().getFullYear();

  readonly nonMergeTaxCalculationEndDate = nonMergeTaxCalculationEndDate;
  private exportService = inject(ExportDataService);

  onExportCsv(sum: FullYearIncomeInfo): void {
    this.exportService.downloadCsv(
      this.monthlyIncomes,
      sum,
      this.cityLabel,
      this.year,
    );
  }
}
