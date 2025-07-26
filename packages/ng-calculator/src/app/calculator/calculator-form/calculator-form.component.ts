import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CityRecipe, RawMeta } from 'calculator-core';
import { autocompleteTemplates } from '../template-metadata';
import { Observable } from 'rxjs';
import { InputForm } from '../types';

@Component({
  selector: 'app-calculator-form',
  templateUrl: './calculator-form.component.html',
  styleUrls: ['./calculator-form.component.scss'],
})
export class CalculatorFormComponent implements OnInit {
  @Input() usePredefinedInsurancePercents!: boolean;
  @Input() cityRecipe!: CityRecipe;
  @Input() recipes$!: Observable<CityRecipe[]>;

  @Output() calculate = new EventEmitter<RawMeta>();
  @Output() clearResult = new EventEmitter<void>();
  @Output() changeRecipe = new EventEmitter<CityRecipe>();
  @Output() changePredefineCondition = new EventEmitter<boolean>();

  baseForm!: FormGroup<InputForm>;
  readonly templates = autocompleteTemplates;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initializeForm();
    this.updateFromCache();
  }

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

  onCalculate() {
    if (this.baseForm.valid) {
      this.saveToCache();
      this.calculate.emit(this.baseForm.value as RawMeta);
    }
  }

  onReset() {
    this.baseForm.patchValue({
      monthSalary: 10000,
      annualBonus: 0,
      insuranceBase: 10000,
      housingFundBase: 10000,
      housingFundRate: 5,
      extraDeduction: {
        childEducation: 0,
        continuingEducation: 0,
        seriousMedicalExpense: 0,
        housingLoanInterest: 0,
        renting: 0,
        elderlyCare: 0,
        enterprisePensionFromEmployee: 0,
        enterprisePensionFromEmployer: 0,
        other: 0,
      },
      insuranceRate: {
        endowment: this.cityRecipe.employee.insuranceRate.endowment * 100,
        health: this.cityRecipe.employee.insuranceRate.health * 100,
        unemployment: this.cityRecipe.employee.insuranceRate.unemployment * 100,
      },
      insuranceBaseOnLastMonth: this.cityRecipe.insuranceBaseOnLastMonth,
    });
  }

  onClearResult() {
    this.clearResult.emit();
  }

  onChangeRecipe(recipe: CityRecipe) {
    this.changeRecipe.emit(recipe);
    this.patchFromRecipe(recipe);
  }

  onChangePredefineCondition(val: boolean) {
    this.changePredefineCondition.emit(val);
    if (val) {
      this.patchFromRecipe(this.cityRecipe);
    }
  }

  resetConflict(src: number, form: FormGroup, controlName: string) {
    if (src > 0) {
      form.get(controlName)?.setValue(0);
    }
  }

  private initializeForm() {
    this.baseForm = this.fb.group({
      monthSalary: [10000, Validators.required],
      monthlyBonus: [0, Validators.required],
      annualBonus: [0, Validators.required],
      insuranceBase: [10000, Validators.required],
      housingFundBase: [10000, Validators.required],
      housingFundRate: [5, Validators.required],
      extraDeduction: this.fb.group({
        childEducation: [0, Validators.required],
        continuingEducation: [0, Validators.required],
        seriousMedicalExpense: [0, Validators.required],
        housingLoanInterest: [0, Validators.required],
        renting: [0, Validators.required],
        elderlyCare: [0, Validators.required],
        enterprisePensionFromEmployee: [0, Validators.required],
        enterprisePensionFromEmployer: [0, Validators.required],
        other: [0, Validators.required],
      }),
      insuranceRate: this.fb.group({
        endowment: [
          this.cityRecipe.employee.insuranceRate.endowment * 100,
          Validators.required,
        ],
        health: [
          this.cityRecipe.employee.insuranceRate.health * 100,
          Validators.required,
        ],
        unemployment: [
          this.cityRecipe.employee.insuranceRate.unemployment * 100,
          Validators.required,
        ],
      }),
      insuranceBaseOnLastMonth: [
        this.cityRecipe.insuranceBaseOnLastMonth,
        Validators.required,
      ],
    }) as FormGroup<InputForm>;
  }

  private patchFromRecipe(recipe: CityRecipe) {
    this.baseForm.patchValue({
      insuranceRate: {
        endowment: recipe.employee.insuranceRate.endowment * 100,
        health: recipe.employee.insuranceRate.health * 100,
        unemployment: recipe.employee.insuranceRate.unemployment * 100,
      },
      insuranceBaseOnLastMonth: recipe.insuranceBaseOnLastMonth,
    });
  }

  private updateFromCache() {
    let cache = JSON.parse(localStorage.getItem('incomeMeta')!);

    if (sessionStorage.getItem('incomeMeta')) {
      cache = JSON.parse(sessionStorage.getItem('incomeMeta')!);
    }

    if (cache) {
      this.baseForm.patchValue(cache);
    }
  }

  private saveToCache() {
    localStorage.setItem('incomeMeta', JSON.stringify(this.baseForm.value));
    sessionStorage.setItem('incomeMeta', JSON.stringify(this.baseForm.value));
  }
}
