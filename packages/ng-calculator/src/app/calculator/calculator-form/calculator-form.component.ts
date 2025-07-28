import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  CityRecipe,
  RawMeta,
  Policy,
  findLatestPolicyForYear,
} from 'calculator-core';
import { autocompleteTemplates } from '../template-metadata';
import { Observable } from 'rxjs';
import { InputForm } from '../types';

export interface CalculateParams extends RawMeta {
  year: number;
  useUniformPolicy: boolean;
}

@Component({
  selector: 'app-calculator-form',
  templateUrl: './calculator-form.component.html',
  styleUrls: ['./calculator-form.component.scss'],
})
export class CalculatorFormComponent implements OnInit, OnChanges {
  @Input() usePredefinedInsurancePercents!: boolean;
  @Input() cityRecipe!: CityRecipe;
  @Input() recipes$!: Observable<CityRecipe[]>;

  @Output() calculate = new EventEmitter<CalculateParams>();
  @Output() clearResult = new EventEmitter<void>();
  @Output() changeRecipe = new EventEmitter<CityRecipe>();
  @Output() changePredefineCondition = new EventEmitter<boolean>();
  @Output() changeSelectedYear = new EventEmitter<number>();

  baseForm!: FormGroup<InputForm>;
  readonly templates = autocompleteTemplates;

  // 新增属性
  availableYears: number[] = [];
  selectedYear: number = new Date().getFullYear();
  useUniformPolicy: boolean = false;
  latestPolicy: Policy | null = null;
  policyHint: string = '';

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initializeForm();
    if (this.cityRecipe) {
      this.updateAvailableYears();
      this.onYearChange(this.selectedYear);
    }
    this.updateFromCache();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['cityRecipe'] && !changes['cityRecipe'].firstChange) {
      this.initializeForm();
      this.updateAvailableYears();
      this.onYearChange(this.selectedYear);
      this.patchFromRecipe(this.cityRecipe);
    }
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
    if (this.latestPolicy) {
      return Array.isArray(this.latestPolicy.insuranceBaseRange)
        ? this.latestPolicy.insuranceBaseRange[1]
        : this.latestPolicy.insuranceBaseRange.endowment[1];
    }
    return 0;
  }

  get housingFundTop() {
    if (this.latestPolicy) {
      return this.latestPolicy.housingFundBaseRange[1];
    }
    return 0;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  trackByValue = (_: number, x: any) => x.value;

  onCalculate() {
    if (this.baseForm.valid) {
      this.saveToCache();
      const params: CalculateParams = {
        ...(this.baseForm.value as RawMeta),
        year: this.selectedYear,
        useUniformPolicy: this.useUniformPolicy,
      };
      this.calculate.emit(params);
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
        endowment:
          (this.latestPolicy?.employee.insuranceRate?.endowment ?? 0) * 100,
        health: (this.latestPolicy?.employee.insuranceRate?.health ?? 0) * 100,
        unemployment:
          (this.latestPolicy?.employee.insuranceRate?.unemployment ?? 0) * 100,
      },
      insuranceBaseOnLastMonth:
        this.cityRecipe?.insuranceBaseOnLastMonth ?? false,
    });
  }

  onClearResult() {
    this.clearResult.emit();
  }

  onChangeRecipe(recipe: CityRecipe) {
    this.changeRecipe.emit(recipe);
    this.patchFromRecipe(recipe);
  }

  onYearChange(year: number) {
    this.selectedYear = year;
    this.updateLatestPolicy();
    this.changeSelectedYear.emit(year);
  }

  onUniformPolicyChange(useUniform: boolean) {
    this.useUniformPolicy = useUniform;
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
          (this.latestPolicy?.employee.insuranceRate?.endowment ?? 0) * 100,
          Validators.required,
        ],
        health: [
          (this.latestPolicy?.employee.insuranceRate?.health ?? 0) * 100,
          Validators.required,
        ],
        unemployment: [
          (this.latestPolicy?.employee.insuranceRate?.unemployment ?? 0) * 100,
          Validators.required,
        ],
      }),
      insuranceBaseOnLastMonth: [
        this.cityRecipe?.insuranceBaseOnLastMonth ?? false,
        Validators.required,
      ],
    }) as FormGroup<InputForm>;
  }

  private patchFromRecipe(recipe: CityRecipe) {
    if (this.latestPolicy) {
      this.baseForm.patchValue({
        insuranceRate: {
          endowment: this.latestPolicy.employee.insuranceRate.endowment * 100,
          health: this.latestPolicy.employee.insuranceRate.health * 100,
          unemployment:
            this.latestPolicy.employee.insuranceRate.unemployment * 100,
        },
        insuranceBaseOnLastMonth: recipe.insuranceBaseOnLastMonth,
      });
    }
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

  private updateAvailableYears() {
    const years = this.cityRecipe.policies
      .map((policy) => new Date(policy.effectiveDate).getFullYear())
      .filter(
        (year: number, index: number, arr: number[]) =>
          arr.indexOf(year) === index
      )
      .sort((a: number, b: number) => b - a); // 降序排列
    this.availableYears = years;

    // 默认选择最新年份
    if (years.length > 0 && !years.includes(this.selectedYear)) {
      this.selectedYear = years[0];
    }
  }

  private updateLatestPolicy() {
    this.latestPolicy = findLatestPolicyForYear(
      this.cityRecipe,
      this.selectedYear
    );
    this.updatePolicyHint();
    this.updateBasePlaceholders();
  }

  private updatePolicyHint() {
    if (this.latestPolicy) {
      const effectiveDate = new Date(this.latestPolicy.effectiveDate);
      const month = effectiveDate.getMonth() + 1;
      const year = effectiveDate.getFullYear();
      this.policyHint = `提示：将使用 ${year}-${month
        .toString()
        .padStart(2, '0')} 生效的最新标准。${month}月前将自动沿用旧标准计算。`;
    } else {
      this.policyHint = '';
    }
  }

  private updateBasePlaceholders() {
    if (this.latestPolicy) {
      // 更新社保基数范围提示
      const insuranceRange = this.latestPolicy.insuranceBaseRange;
      if (Array.isArray(insuranceRange)) {
        this.templates.insuranceBase.placeholder = `${insuranceRange[0]}-${insuranceRange[1]}`;
      } else {
        this.templates.insuranceBase.placeholder = `${insuranceRange.endowment[0]}-${insuranceRange.endowment[1]}`;
      }

      // 更新公积金基数范围提示
      const housingFundRange = this.latestPolicy.housingFundBaseRange;
      this.templates.housingFundBase.placeholder = `${housingFundRange[0]}-${housingFundRange[1]}`;
    }
  }

  get currentInsuranceTop() {
    if (this.latestPolicy) {
      return Array.isArray(this.latestPolicy.insuranceBaseRange)
        ? this.latestPolicy.insuranceBaseRange[1]
        : this.latestPolicy.insuranceBaseRange.endowment[1];
    }
    return this.insuranceTop;
  }

  get currentHousingFundTop() {
    if (this.latestPolicy) {
      return this.latestPolicy.housingFundBaseRange[1];
    }
    return this.housingFundTop;
  }

  get currentMinimumWage() {
    if (this.latestPolicy) {
      return this.latestPolicy.minimumWage;
    }
    return 0;
  }
}
