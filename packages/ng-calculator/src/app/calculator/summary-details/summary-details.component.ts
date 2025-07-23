import { Component, Input } from '@angular/core';
import {
  FullYearIncomeInfo,
  nonMergeTaxCalculationEndDate,
} from 'calculator-core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-summary-details',
  templateUrl: './summary-details.component.html',
  styleUrls: ['./summary-details.component.scss'],
})
export class SummaryDetailsComponent {
  @Input() clear!: boolean;
  @Input() summary$!: Observable<FullYearIncomeInfo>;

  readonly nonMergeTaxCalculationEndDate = nonMergeTaxCalculationEndDate;
}
