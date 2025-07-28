import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  CityRecipe,
  MonthlyIncomeInfo,
  MonthlyIncomeMeta,
  findPolicyForMonth,
} from 'calculator-core';
import {
  autocompleteTemplates,
  monthlyResultsLabelSuffix,
} from '../template-metadata';
import { BehaviorSubject, Observable } from 'rxjs';
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
export class MonthlyResultsComponent implements OnInit {
  readonly templates = autocompleteTemplates;
  readonly labelSuffix = monthlyResultsLabelSuffix;
  @Input() clear!: boolean;
  @Input() monthlyIncomes$!: Observable<MonthlyIncomeInfo[]>;
  @Input() monthlyMetas$!: Observable<MonthlyIncomeMeta[]>;
  @Input() cityRecipe!: CityRecipe;
  @Input() calculationYear!: number;
  @Input() scroll$!: BehaviorSubject<void>;

  @Output() updateMeta = new EventEmitter<{
    meta: MonthlyInputModel;
    index: number;
  }>();
  @Output() changeChartMonth = new EventEmitter<number>();

  detailForms: FormGroup<MonthlyInputForm>[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.monthlyMetas$.subscribe((metaList) => {
      if (metaList && metaList.length > 0) {
        this.detailForms = this.buildDetailForms(metaList, this.cityRecipe);
      } else {
        this.detailForms = [];
      }
    });
  }

  trackIncome = (_: number, x: MonthlyIncomeInfo) => x.actualMonth;

  getInsuranceTopForMonth(month: number): number {
    if (this.cityRecipe?.policies && this.calculationYear) {
      const policy = findPolicyForMonth(
        this.cityRecipe,
        this.calculationYear,
        month
      );
      if (policy) {
        return Array.isArray(policy.insuranceBaseRange)
          ? policy.insuranceBaseRange[1]
          : policy.insuranceBaseRange.endowment[1];
      }
    }
    return 0;
  }

  getHousingFundTopForMonth(month: number): number {
    if (this.cityRecipe?.policies && this.calculationYear) {
      const policy = findPolicyForMonth(
        this.cityRecipe,
        this.calculationYear,
        month
      );
      if (policy) {
        return policy.housingFundBaseRange[1];
      }
    }
    return 0;
  }

  getMinimumWageForMonth(month: number): number {
    if (this.cityRecipe?.policies && this.calculationYear) {
      const policy = findPolicyForMonth(
        this.cityRecipe,
        this.calculationYear,
        month
      );
      if (policy) {
        return policy.minimumWage;
      }
    }
    return 0;
  }

  onUpdateMeta(value: MonthlyInputModel, index: number) {
    this.updateMeta.emit({ meta: value, index });
  }

  onChangeChartMonth(index: number) {
    this.changeChartMonth.emit(index + 1);
  }

  scrollToChart() {
    this.scroll$.next();
  }

  resetConflict(src: number, form: FormGroup, controlName: string) {
    if (src > 0) {
      form.get(controlName)?.setValue(0);
    }
  }

  private buildDetailForms(
    metaList: MonthlyIncomeMeta[],
    cityRecipe: CityRecipe
  ) {
    const forms = metaList.map((meta, index) => {
      const month = index + 1;
      let policy = null;

      // 为每个月查找其对应的策略
      if (cityRecipe?.policies && this.calculationYear) {
        policy = findPolicyForMonth(cityRecipe, this.calculationYear, month);
      }

      return this.fb.group({
        monthSalary: [meta.salary, Validators.required],
        monthlyBonus: [0, Validators.required],
        newPayCycle: [meta.newPayCycle],
        insuranceBase: [meta.insuranceBase, Validators.required],
        insuranceRate: this.fb.group({
          endowment: [
            (policy?.employee.insuranceRate?.endowment ??
              meta.insuranceRate.endowment) * 100,
            Validators.required,
          ],
          health: [
            (policy?.employee.insuranceRate?.health ??
              meta.insuranceRate.health) * 100,
            Validators.required,
          ],
          unemployment: [
            (policy?.employee.insuranceRate?.unemployment ??
              meta.insuranceRate.unemployment) * 100,
            Validators.required,
          ],
        }),
        housingFundBase: [meta.housingFundBase, Validators.required],
        housingFundRate: [meta.housingFundRate * 100, Validators.required],
        extraDeduction: this.fb.group({
          childEducation: [
            meta.extraDeduction.childEducation,
            Validators.required,
          ],
          continuingEducation: [
            meta.extraDeduction.continuingEducation,
            Validators.required,
          ],
          seriousMedicalExpense: [
            meta.extraDeduction.seriousMedicalExpense,
            Validators.required,
          ],
          housingLoanInterest: [
            meta.extraDeduction.housingLoanInterest,
            Validators.required,
          ],
          renting: [meta.extraDeduction.renting, Validators.required],
          elderlyCare: [meta.extraDeduction.elderlyCare, Validators.required],
          enterprisePensionFromEmployee: [
            meta.extraDeduction.enterprisePensionFromEmployee,
            Validators.required,
          ],
          enterprisePensionFromEmployer: [
            meta.extraDeduction.enterprisePensionFromEmployer,
            Validators.required,
          ],
          other: [meta.extraDeduction.other, Validators.required],
        }),
      }) as unknown as FormGroup<MonthlyInputForm>;
    });

    return forms;
  }
}
