import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CityRecipe, RawMeta } from 'calculator-core';
import { autocompleteTemplates } from '../template-metadata';
import { Observable } from 'rxjs';
import { InputForm } from '../types';

@Component({
  selector: 'app-calculator-form',
  templateUrl: './calculator-form.component.html',
  styleUrls: ['./calculator-form.component.scss'],
})
export class CalculatorFormComponent {
  @Input() baseForm!: FormGroup<InputForm>;
  @Input() usePredefinedInsurancePercents!: boolean;
  @Input() cityRecipe!: CityRecipe;
  @Input() recipes$!: Observable<CityRecipe[]>;

  @Output() calculate = new EventEmitter<RawMeta>();
  // eslint-disable-next-line @angular-eslint/no-output-native
  @Output() reset = new EventEmitter<void>();
  @Output() clearResult = new EventEmitter<void>();
  @Output() changeRecipe = new EventEmitter<CityRecipe>();
  @Output() changePredefineCondition = new EventEmitter<boolean>();

  readonly templates = autocompleteTemplates;

  get childEducationDeductionOptions() {
    return this.templates.childEducation.options;
  }

  get continuousEducationDeductionOptions() {
    return this.templates.continuingEducation.options;
  }

  get housingLoanInterestDeductionOptions() {
    return this.templates.housingLoanInterest.options;
  }

  get rentingDeductionOptions() {
    return this.templates.renting.options;
  }

  get elderlyCareDeductionOptions() {
    return this.templates.elderlyCare.options;
  }

  get insuranceTop() {
    return Array.isArray(this.cityRecipe.insuranceBaseRange)
      ? this.cityRecipe.insuranceBaseRange[1]
      : this.cityRecipe.insuranceBaseRange.endowment[1];
  }

  get housingFundTop() {
    return this.cityRecipe.housingFundBaseRange[1];
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  trackByValue = (_: number, x: any) => x.value;

  resetConflict(src: number, form: FormGroup, controlName: string) {
    if (src > 0) {
      form.get(controlName)?.setValue(0);
    }
  }
}
