import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CityRecipe, MonthlyIncomeInfo } from 'calculator-core';
import {
  autocompleteTemplates,
  monthlyResultsLabelSuffix,
} from '../template-metadata';
import { Observable } from 'rxjs';
import { MonthlyInputForm, MonthlyInputModel } from '../types';

@Component({
  selector: 'app-monthly-results',
  templateUrl: './monthly-results.component.html',
  styleUrls: ['./monthly-results.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateX(-20%)' }),
            stagger(100, [
              animate(300, style({ opacity: 1, transform: 'translateX(0)' })),
            ]),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class MonthlyResultsComponent {
  readonly templates = autocompleteTemplates;
  readonly labelSuffix = monthlyResultsLabelSuffix;
  @Input() clear!: boolean;
  @Input() monthlyIncomes$!: Observable<MonthlyIncomeInfo[]>;
  @Input() detailForms!: FormGroup<MonthlyInputForm>[];
  @Input() cityRecipe!: CityRecipe;

  @Output() updateMeta = new EventEmitter<{
    meta: MonthlyInputModel;
    index: number;
  }>();
  @Output() changeChartMonth = new EventEmitter<number>();

  trackIncome = (_: number, x: MonthlyIncomeInfo) => x.actualMonth;

  get insuranceTop() {
    return Array.isArray(this.cityRecipe.insuranceBaseRange)
      ? this.cityRecipe.insuranceBaseRange[1]
      : this.cityRecipe.insuranceBaseRange.endowment[1];
  }

  get housingFundTop() {
    return this.cityRecipe.housingFundBaseRange[1];
  }

  scrollToChart() {
    // This can be handled by the parent or a dedicated service
  }

  resetConflict(src: number, form: FormGroup, controlName: string) {
    if (src > 0) {
      form.get(controlName)?.setValue(0);
    }
  }
}
