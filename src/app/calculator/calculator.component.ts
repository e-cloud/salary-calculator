import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CityRecipe, FullYearIncomeInfo, MonthlyIncomeInfo, MonthlyIncomeMeta} from './model';
import {IncomeCalculateService} from './income-calculate.service';
import {last, mapValues, merge} from 'lodash-es';
import {animate, query, stagger, style, transition, trigger} from '@angular/animations';
import {BehaviorSubject, combineLatest, Observable, Subject} from 'rxjs';
import {filter, map, share, startWith, switchMap, take, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

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
    }
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
  housingFundBaseRange: [2200, 31938],
  insuranceBaseOnLastMonth: true,
  references: [
    'http://hrss.sz.gov.cn/szsi/sbjxxgk/tzgg/simtgg/content/post_8388699.html',
    'http://gjj.sz.gov.cn/xxgk/zxtzgg/content/post_7827299.html'
  ]
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
  recipes$: Observable<CityRecipe[]>;

  get insuranceTop() {
    return Array.isArray(this.cityRecipe.insuranceBaseRange)
      ? this.cityRecipe.insuranceBaseRange[1]
      : this.cityRecipe.insuranceBaseRange.endowment[1];
  }

  get housingFundTop() {
    return this.cityRecipe.housingFundBaseRange[1];
  }

  constructor(private fb: FormBuilder, private incomeService: IncomeCalculateService, private http: HttpClient) {
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
      map(meta => this.incomeService.buildEmptyMetaList(meta)),
      switchMap(list => {
        return this.metaUpdate$.pipe(startWith(null))
          .pipe(map(update => {
            if (update) {
              list[update.index] = merge({}, list[update.index], update.meta);
            }

            // 1 月强制新计费周期
            list[0].newPayCycle = true;
            return list.slice();
          }));
      }),
      share(),
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

    this.monthlyMetas$.pipe(take(1)).subscribe((metaList) => {
      this.detailForms = this.buildDetailForms(metaList, this.cityRecipe);
    });

    this.recipes$ = this.http.get<CityRecipe[]>('/assets/city-recipes.json')
      .pipe(tap(x => {
        this.changeRecipe(x[0]);
      }));

    this.updateFromCache();
  }

  trackIncome = (_: number, x: MonthlyIncomeInfo) => x.actualMonth;

  ngOnInit(): void {
  }

  resetConflict(src: number, form: FormGroup, controlName: string) {
    if (src > 0) {
      form.get(controlName)?.setValue(0);
    }
  }

  changeRecipe(recipe: CityRecipe) {
    this.cityRecipe = recipe;
    this.baseForm.patchValue({
      insuranceRate: {
        endowment: this.cityRecipe.employee.insuranceRate.endowment * 100,
        health: this.cityRecipe.employee.insuranceRate.health * 100,
        unemployment: this.cityRecipe.employee.insuranceRate.unemployment * 100,
      }
    });
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
        newPayCycle: value.newPayCycle,
      },
      index,
    });
  }

  calculate(data: any): void {
    this.saveToCache();
    const rawMeta: MonthlyIncomeMeta = {
      salary: data.monthSalary,
      insuranceBase: data.insuranceBase,
      housingFundBase: data.housingFundBase,
      housingFundRate: data.housingFundRate / 100,
      insuranceRate: mapValues<MonthlyIncomeMeta['insuranceRate'], number>(data.insuranceRate, (v) => v / 100),
      freeTaxQuota: 5000,
      extraDeduction: data.extraDeduction,
      annualBonus: data.annualBonus,
      insuranceBaseRange: normalizeInsuranceBaseRange(this.cityRecipe),
      housingFundBaseRange: this.cityRecipe.housingFundBaseRange,
      insuranceBaseOnLastMonth: this.cityRecipe.insuranceBaseOnLastMonth,
      newPayCycle: false
    };

    this.baseMeta$.next(rawMeta);

    this.clear = false;
  }

  private updateFromCache() {
    const cache = JSON.parse(localStorage.getItem('incomeMeta') || null as any);

    if (cache) {
      this.baseForm.patchValue(cache);
    }
  }

  private saveToCache() {
    localStorage.setItem('incomeMeta', JSON.stringify(this.baseForm.value));
  }

  private calculateMonthlyIncomes(metaList: MonthlyIncomeMeta[]) {
    return metaList.reduce((incomeList, meta) => {
      const current = this.incomeService.calculateMonthIncome(meta, last(incomeList));

      incomeList.push(current);

      return incomeList;
    }, [] as MonthlyIncomeInfo[]);
  }

  private buildDetailForms(metaList: MonthlyIncomeMeta[], cityRecipe: CityRecipe) {
    const forms = metaList.map((meta) => this.fb.group({
      monthSalary: [meta.salary, Validators.required],
      monthlyBonus: [0, Validators.required],
      newPayCycle: [meta.newPayCycle],
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
