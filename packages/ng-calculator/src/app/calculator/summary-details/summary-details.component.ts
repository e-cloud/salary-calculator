import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
  FullYearIncomeInfo,
  nonMergeTaxCalculationEndDate,
} from 'calculator-core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-summary-details',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatTooltipModule,
  ],
  templateUrl: './summary-details.component.html',
  styleUrls: ['./summary-details.component.scss'],
})
export class SummaryDetailsComponent {
  @Input() clear!: boolean;
  @Input() summary$!: Observable<FullYearIncomeInfo | null>;

  readonly nonMergeTaxCalculationEndDate = nonMergeTaxCalculationEndDate;
}
