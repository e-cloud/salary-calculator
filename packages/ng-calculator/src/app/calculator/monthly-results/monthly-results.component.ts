import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  CityRecipe,
  MonthlyIncomeInfo,
  MonthlyIncomeMeta,
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
      this.detailForms = this.buildDetailForms(metaList, this.cityRecipe);
    });
  }

  trackIncome = (_: number, x: MonthlyIncomeInfo) => x.actualMonth;

  get insuranceTop() {
    return Array.isArray(this.cityRecipe.insuranceBaseRange)
      ? this.cityRecipe.insuranceBaseRange[1]
      : this.cityRecipe.insuranceBaseRange.endowment[1];
  }

  get housingFundTop() {
    return this.cityRecipe.housingFundBaseRange[1];
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
    const forms = metaList.map(
      (meta) =>
        this.fb.group({
          monthSalary: [meta.salary, Validators.required],
          monthlyBonus: [0, Validators.required],
          newPayCycle: [meta.newPayCycle],
          insuranceBase: [meta.insuranceBase, Validators.required],
          insuranceRate: this.fb.group({
            endowment: [
              cityRecipe.employee.insuranceRate.endowment * 100,
              Validators.required,
            ],
            health: [
              cityRecipe.employee.insuranceRate.health * 100,
              Validators.required,
            ],
            unemployment: [
              cityRecipe.employee.insuranceRate.unemployment * 100,
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
        }) as unknown as FormGroup<MonthlyInputForm>
    );

    return forms;
  }
}
