/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  buildBaseMeta,
  buildEmptyMetaList,
  calculateFullYearIncome,
  calculateMonthlyIncomes,
  childEducationDeductionOptions,
  CityRecipe,
  continuousEducationDeductionOptions,
  elderlyCareDeductionOptions,
  FullYearIncomeInfo,
  housingLoanInterestDeductionOptions,
  MonthlyIncomeInfo,
  MonthlyIncomeMeta,
  nonMergeTaxCalculationEndDate,
  rentingDeductionOptions,
} from 'calculator-core';
import { mapValues, merge } from 'lodash-es';
import { BehaviorSubject, combineLatest, Observable, Subject } from 'rxjs';
import { filter, map, share, startWith, switchMap, tap } from 'rxjs/operators';

const shenzhenRecipe: CityRecipe = {
  id: 0,
  label: '非深户一档',
  city: '深圳',
  minimumWage: 2200,
  avgWage: 10646,
  employee: {
    insuranceRate: {
      endowment: 0.08,
      health: 0.02,
      unemployment: 0.003,
    },
  },
  employer: {
    insuranceRate: {
      endowment: 0.14,
      health: 0.052,
      unemployment: 0.007,
      birth: 0.0045,
      occupationalInjury: 0.007,
    },
  },
  insuranceBaseRange: [2200, 20268],
  housingFundBaseRange: [2200, 34860],
  insuranceBaseOnLastMonth: true,
  references: [
    'http://hrss.sz.gov.cn/szsi/sbjxxgk/tzgg/simtgg/content/post_8388699.html',
    'http://gjj.sz.gov.cn/xxgk/zxtzgg/content/post_7827299.html',
  ],
};

export type TypedFormControls<T extends Record<any, any>> = {
  [K in keyof T]-?: T[K] extends Array<infer R>
    ? FormArray<
        R extends Record<any, any>
          ? FormGroup<TypedFormControls<R>>
          : FormControl<R>
      >
    : T[K] extends Record<any, any>
    ? FormGroup<TypedFormControls<T[K]>>
    : FormControl<T[K]>;
};

export interface InputModel {
  monthSalary: number;
  annualBonus: number;
  insuranceBase: number;
  housingFundBase: number;
  housingFundRate: number;
  extraDeduction: {
    childEducation: number;
    continuingEducation: number;
    seriousMedicalExpense: number;
    housingLoanInterest: number;
    renting: number;
    elderlyCare: number;
    enterprisePension: number;
    enterprisePensionTwo: number;
    other: number;
  };
  insuranceRate: {
    endowment: number;
    health: number;
    unemployment: number;
  };
  insuranceBaseOnLastMonth: boolean;
}

export interface MonthlyInputModel extends InputModel {
  newPayCycle: boolean;
}

export type InputForm = TypedFormControls<InputModel>;
export type MonthlyInputForm = TypedFormControls<MonthlyInputModel>;

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
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
export class CalculatorComponent {
  baseForm: FormGroup<InputForm>;
  detailForms: FormGroup<MonthlyInputForm>[] = [];
  usePredefinedInsurancePercents = true;
  cityRecipe = shenzhenRecipe;
  clear = false;

  baseMeta$ = new BehaviorSubject<MonthlyIncomeMeta>(null as any);
  metaUpdate$ = new Subject<{
    meta: Partial<MonthlyIncomeMeta>;
    index: number;
  }>();

  monthlyMetas$: Observable<MonthlyIncomeMeta[]>;
  monthlyIncomes$: Observable<MonthlyIncomeInfo[]>;
  summary$: Observable<FullYearIncomeInfo>;
  recipes$: Observable<CityRecipe[]>;

  @ViewChild('summary', { read: ElementRef }) summary: ElementRef | null = null;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.baseForm = fb.group({
      monthSalary: [10000, Validators.required],
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
        enterprisePension: [0, Validators.required],
        enterprisePensionTwo: [0, Validators.required],
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

    this.monthlyMetas$ = this.baseMeta$.pipe(
      filter((meta) => meta != null),
      map((meta) => buildEmptyMetaList(meta)),
      switchMap((list) => {
        return this.metaUpdate$.pipe(startWith(null)).pipe(
          map((update) => {
            if (update) {
              list[update.index] = merge({}, list[update.index], update.meta);
            }

            // 1 月强制新计费周期
            list[0].newPayCycle = true;
            return list.slice();
          })
        );
      }),
      share()
    );

    this.monthlyIncomes$ = this.monthlyMetas$.pipe(
      filter((list) => list.length > 0),
      map((list) => calculateMonthlyIncomes(list)),
      share()
    );

    this.summary$ = combineLatest([this.monthlyIncomes$, this.baseMeta$]).pipe(
      filter(([_, meta]) => meta != null),
      filter<[MonthlyIncomeInfo[] | null, MonthlyIncomeMeta]>(
        ([list]) => !!list && list.length > 0
      ),
      map(([list, meta]) => {
        return calculateFullYearIncome(list!, meta.annualBonus);
      })
    );

    this.metaUpdate$.subscribe(() => {
      this.baseForm.disable();
    });

    this.monthlyMetas$.subscribe((metaList) => {
      this.detailForms = this.buildDetailForms(metaList, this.cityRecipe);
    });

    this.recipes$ = this.http
      .get<CityRecipe[]>('assets/city-recipes.json')
      .pipe(
        tap((x) => {
          this.changeRecipe(x[0]);
        })
      );

    this.updateFromCache();
  }

  get insuranceTop() {
    return Array.isArray(this.cityRecipe.insuranceBaseRange)
      ? this.cityRecipe.insuranceBaseRange[1]
      : this.cityRecipe.insuranceBaseRange.endowment[1];
  }

  get housingFundTop() {
    return this.cityRecipe.housingFundBaseRange[1];
  }

  trackIncome = (_: number, x: MonthlyIncomeInfo) => x.actualMonth;
  trackByValue = (_: number, x: any) => x.value;

  resetConflict(src: number, form: FormGroup, controlName: string) {
    if (src > 0) {
      form.get(controlName)?.setValue(0);
    }
  }

  changeRecipe(recipe: CityRecipe) {
    this.cityRecipe = recipe;
    this.patchFromRecipe();
  }

  changePredefineCondition(val: boolean) {
    if (val) {
      this.patchFromRecipe();
    }
  }

  clearResult() {
    this.clear = true;
    this.baseForm.enable();
  }

  reset() {
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
        enterprisePension: 0,
        enterprisePensionTwo: 0,
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

  scrollToSummary() {
    setTimeout(() => {
      if (this.summary) {
        (this.summary.nativeElement as HTMLElement).scrollIntoView({
          behavior: 'smooth',
        });
      }
    }, 500);
  }

  updateMeta(value: any, index: number) {
    this.metaUpdate$.next({
      meta: {
        salary: value.monthSalary + value.monthlyBonus,
        insuranceBase: value.insuranceBase,
        housingFundBase: value.housingFundBase,
        housingFundRate: value.housingFundRate / 100,
        insuranceRate: mapValues<MonthlyIncomeMeta['insuranceRate'], number>(
          value.insuranceRate,
          (v: number) => v / 100
        ),
        extraDeduction: value.extraDeduction,
        newPayCycle: value.newPayCycle,
        insuranceBaseOnLastMonth: value.insuranceBaseOnLastMonth,
      },
      index,
    });
  }

  calculate(data: any): void {
    this.saveToCache();

    this.baseMeta$.next(buildBaseMeta(data, this.cityRecipe));

    this.clear = false;
  }

  private patchFromRecipe() {
    this.baseForm.patchValue({
      insuranceRate: {
        endowment: this.cityRecipe.employee.insuranceRate.endowment * 100,
        health: this.cityRecipe.employee.insuranceRate.health * 100,
        unemployment: this.cityRecipe.employee.insuranceRate.unemployment * 100,
      },
      insuranceBaseOnLastMonth: this.cityRecipe.insuranceBaseOnLastMonth,
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
            enterprisePension: [
              meta.extraDeduction.enterprisePension,
              Validators.required,
            ],
            enterprisePensionTwo: [
              meta.extraDeduction.enterprisePensionTwo,
              Validators.required,
            ],
            other: [meta.extraDeduction.other, Validators.required],
          }),
        }) as unknown as FormGroup<MonthlyInputForm>
    );

    return forms;
  }

  readonly childEducationDeductionOptions = childEducationDeductionOptions;
  readonly continuousEducationDeductionOptions =
    continuousEducationDeductionOptions;
  readonly housingLoanInterestDeductionOptions =
    housingLoanInterestDeductionOptions;
  readonly rentingDeductionOptions = rentingDeductionOptions;
  readonly elderlyCareDeductionOptions = elderlyCareDeductionOptions;
  readonly nonMergeTaxCalculationEndDate = nonMergeTaxCalculationEndDate;
}

function normalizeInsuranceBaseRange(meta: CityRecipe) {
  if (Array.isArray(meta.insuranceBaseRange)) {
    const originRange = meta.insuranceBaseRange;
    meta.insuranceBaseRange = {
      endowment: originRange,
      health: originRange,
      unemployment: originRange,
      birth: originRange,
      occupationalInjury: originRange,
    };
  }

  return meta.insuranceBaseRange;
}
