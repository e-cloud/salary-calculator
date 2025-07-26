/* eslint-disable @typescript-eslint/no-non-null-assertion,@typescript-eslint/no-explicit-any */
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  buildBaseMeta,
  buildEmptyMetaList,
  calculateFullYearIncome,
  calculateMonthlyIncomes,
  CityRecipe,
  FullYearIncomeInfo,
  MonthlyIncomeInfo,
  MonthlyIncomeMeta,
  RawMeta,
} from 'calculator-core';
import { merge } from 'lodash-es';
import { BehaviorSubject, Observable, Subject, combineLatest } from 'rxjs';
import {
  filter,
  map,
  share,
  shareReplay,
  startWith,
  switchMap,
  tap,
} from 'rxjs/operators';
import { MonthlyInputModel } from './types';

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

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent {
  usePredefinedInsurancePercents = true;
  cityRecipe = shenzhenRecipe;
  clear = false;

  baseMeta$ = new BehaviorSubject<MonthlyIncomeMeta>(null as any);
  metaUpdate$ = new Subject<{
    meta: Partial<MonthlyIncomeMeta>;
    index: number;
  }>();
  selectedMonthIndex$ = new BehaviorSubject<number>(0);

  monthlyMetas$: Observable<MonthlyIncomeMeta[]>;
  monthlyIncomes$: Observable<MonthlyIncomeInfo[]>;
  summary$: Observable<FullYearIncomeInfo>;
  recipes$: Observable<CityRecipe[]>;

  constructor(private http: HttpClient) {
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
      shareReplay(1)
    );

    this.summary$ = combineLatest([this.monthlyIncomes$, this.baseMeta$]).pipe(
      filter(([_, meta]) => meta != null),
      filter<[MonthlyIncomeInfo[] | null, MonthlyIncomeMeta]>(
        ([list]) => !!list && list.length > 0
      ),
      map(([list, meta]) => {
        return calculateFullYearIncome(list!, meta.annualBonus);
      }),
      shareReplay(1)
    );

    this.metaUpdate$.subscribe(() => {
      // Form is now managed by child components
    });

    this.recipes$ = this.http
      .get<CityRecipe[]>('assets/city-recipes.json')
      .pipe(
        tap((x) => {
          this.changeRecipe(x[0]);
        })
      );
  }

  changeChartMonth(index: number) {
    this.selectedMonthIndex$.next(index);
  }

  changeRecipe(recipe: CityRecipe) {
    this.cityRecipe = recipe;
  }

  changePredefineCondition(val: boolean) {
    this.usePredefinedInsurancePercents = val;
  }

  clearResult() {
    this.clear = true;
  }

  updateMeta(meta: MonthlyInputModel, index: number) {
    this.metaUpdate$.next({
      meta: {
        salary: meta.monthSalary + (meta.monthlyBonus || 0),
        insuranceBase: meta.insuranceBase,
        housingFundBase: meta.housingFundBase,
        housingFundRate: meta.housingFundRate / 100,
        insuranceRate: {
          endowment: meta.insuranceRate.endowment / 100,
          health: meta.insuranceRate.health / 100,
          unemployment: meta.insuranceRate.unemployment / 100,
        },
        extraDeduction: meta.extraDeduction,
        newPayCycle: meta.newPayCycle,
        insuranceBaseOnLastMonth: meta.insuranceBaseOnLastMonth,
      },
      index,
    });
  }

  calculate(data: RawMeta): void {
    this.baseMeta$.next(buildBaseMeta(data, this.cityRecipe));
    this.clear = false;
  }
}
