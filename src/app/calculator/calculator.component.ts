import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CityRecipe, FullYearIncomeInfo, MonthlyIncomeInfo, MonthlyIncomeMeta} from './model';
import {IncomeCalculateService} from './income-calculate.service';
import {last, mapValues, merge} from 'lodash-es';
import {animate, query, stagger, style, transition, trigger} from '@angular/animations';
import {BehaviorSubject, combineLatest, Observable, Subject, zip} from 'rxjs';
import {filter, map, share, startWith, switchMap, tap} from 'rxjs/operators';

const shenzhenRecipe: CityRecipe = {
  id: 0,
  label: '深圳',
  city: '深圳',
  minimumWage: 6000,
  employee: {
    insuranceRate: {
      endowment: 0.08,
      health: 0.02,
      unemployment: 0.001,
    }
  },
  employer: {
    insuranceRate: {
      endowment: 0.13,
      health: 0.08,
      unemployment: 0.02,
      birth: 0.1,
      occupationalInjury: 0.005,
    },
  },
};

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* <=> *', [
        query(':enter', [
          style({opacity: 0, transform: 'translateX(-20%)'}),
          stagger(100, [
            animate(400, style({opacity: 1, transform: 'translateX(0)'}))
          ])
        ], {optional: true})
      ])
    ])
  ]
})
export class CalculatorComponent implements OnInit {
  baseForm: FormGroup;
  detailForms: FormGroup[] = [];
  usePredefinedInsurancePercents = true;
  cityRecipe = shenzhenRecipe;
  clear = false;

  baseMeta$ = new BehaviorSubject<MonthlyIncomeMeta>(null as any);
  metaUpdate$ = new Subject<{
    meta: Partial<MonthlyIncomeMeta>,
    index: number
  }>();

  monthlyMetas$: Observable<MonthlyIncomeMeta[]>;
  monthlyIncomes$: Observable<MonthlyIncomeInfo[]>;
  summary$: Observable<FullYearIncomeInfo>;

  constructor(private fb: FormBuilder, private incomeService: IncomeCalculateService) {
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
      }),
      insuranceRate: this.fb.group({
        endowment: [this.cityRecipe.employee.insuranceRate.endowment * 100, Validators.required],
        health: [this.cityRecipe.employee.insuranceRate.health * 100, Validators.required],
        unemployment: [this.cityRecipe.employee.insuranceRate.unemployment * 100, Validators.required],
      }),
    });

    this.monthlyMetas$ = this.baseMeta$.pipe(
      filter(meta => meta != null),
      map(meta => this.incomeService.buildEmptyIncomeList(meta)),
      switchMap(list => {
        return this.metaUpdate$.pipe(startWith(null))
          .pipe(map(update => {
            if (update) {
              list[update.index] = merge({}, list[update.index], update.meta);
            }
            return list.slice();
          }));
      })
    );

    this.monthlyIncomes$ = this.monthlyMetas$.pipe(
      filter(list => list.length > 0),
      map(list => this.calculateMonthlyIncomes(list)),
      share(),
    );

    this.summary$ = combineLatest([this.monthlyIncomes$, this.baseMeta$]).pipe(
      tap((data) => {
        console.log(data);
      }),
      filter(([_, meta]) => meta != null),
      filter<[MonthlyIncomeInfo[] | null, MonthlyIncomeMeta]>(([list]) => !!list && list.length > 0),
      map(([list, meta]) => {
        // tslint:disable-next-line:no-non-null-assertion
        return this.incomeService.calculateFullYearIncome(list!, meta.annualBonus);
      }),
    );

    this.metaUpdate$.subscribe(() => {
      this.baseForm.disable();
    });
  }

  trackIncome = (_: number, x: MonthlyIncomeInfo) => x.month;

  ngOnInit(): void {
  }

  resetConflict(src: number, form: FormGroup, controlName: string) {
    if (src > 0) {
      form.get(controlName)?.setValue(0);
    }
  }

  clearResult() {
    this.clear = true;
    this.baseForm.enable();
  }

  updateMeta(value: any, index: number) {
    this.metaUpdate$.next({
      meta: {
        salary: value.monthSalary + value.monthlyBonus,
        insuranceBase: value.insuranceBase,
        housingFundBase: value.housingFundBase,
        housingFundRate: value.housingFundRate / 100,
        insuranceRate: mapValues<MonthlyIncomeMeta['insuranceRate'], number>(value.insuranceRate, (v) => v / 100),
        extraDeduction: value.extraDeduction,
      },
      index,
    });
  }

  calculate(data: any): void {
    const rawMeta: MonthlyIncomeMeta = {
      salary: data.monthSalary,
      insuranceBase: data.insuranceBase,
      housingFundBase: data.housingFundBase,
      housingFundRate: data.housingFundRate / 100,
      insuranceRate: mapValues<MonthlyIncomeMeta['insuranceRate'], number>(data.insuranceRate, (v) => v / 100),
      freeTaxQuota: 5000,
      extraDeduction: data.extraDeduction,
      annualBonus: data.annualBonus,
    };

    if (this.clear || !this.detailForms.length) {
      this.detailForms = this.buildDetailForms(rawMeta, this.cityRecipe);
    }

    this.baseMeta$.next(rawMeta);

    this.clear = false;
  }

  private calculateMonthlyIncomes(metaList: MonthlyIncomeMeta[]) {
    return metaList.reduce((incomeList, meta) => {
      const current = this.incomeService.calculateMonthIncome(meta, last(incomeList));

      incomeList.push(current);

      return incomeList;
    }, [] as MonthlyIncomeInfo[]);
  }

  private buildDetailForms(meta: MonthlyIncomeMeta, cityRecipe: CityRecipe) {
    const forms = new Array(12).fill(0).map(() => this.fb.group({
      monthSalary: [meta.salary, Validators.required],
      monthlyBonus: [0, Validators.required],
      insuranceBase: [meta.insuranceBase, Validators.required],
      insuranceRate: this.fb.group({
        endowment: [cityRecipe.employee.insuranceRate.endowment * 100, Validators.required],
        health: [cityRecipe.employee.insuranceRate.health * 100, Validators.required],
        unemployment: [cityRecipe.employee.insuranceRate.unemployment * 100, Validators.required],
      }),
      housingFundBase: [meta.housingFundBase, Validators.required],
      housingFundRate: [meta.housingFundRate * 100, Validators.required],
      extraDeduction: this.fb.group({
        childEducation: [meta.extraDeduction.childEducation, Validators.required],
        continuingEducation: [meta.extraDeduction.continuingEducation, Validators.required],
        seriousMedicalExpense: [meta.extraDeduction.seriousMedicalExpense, Validators.required],
        housingLoanInterest: [meta.extraDeduction.housingLoanInterest, Validators.required],
        renting: [meta.extraDeduction.renting, Validators.required],
        elderlyCare: [meta.extraDeduction.elderlyCare, Validators.required],
      })
    }));

    return forms;
  }
}
