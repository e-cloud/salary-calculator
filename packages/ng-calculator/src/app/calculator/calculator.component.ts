/* eslint-disable @typescript-eslint/no-non-null-assertion,@typescript-eslint/no-explicit-any */
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  buildMonthlyMetas,
  calculateFullYearIncome,
  calculateMonthlyIncomes,
  CityRecipe,
  FullYearIncomeInfo,
  MonthlyIncomeInfo,
  MonthlyIncomeMeta,
} from 'calculator-core';
import {
  BehaviorSubject,
  Observable,
  combineLatest,
  filter,
  shareReplay,
  tap,
  take,
  map,
  debounceTime,
} from 'rxjs';
import { MonthlyInputModel } from './types';
import { CalculateParams } from './calculator-form/calculator-form.component';

// 默认城市的示例数据，不应该在实际应用中使用
const sampleRecipe: CityRecipe = {
  id: 1,
  label: '默认城市',
  city: '默认城市',
  policies: [
    {
      effectiveDate: '2024-07',
      minimumWage: 2360,
      avgWage: 11620,
      employee: {
        insuranceRate: {
          endowment: 0.08,
          health: 0.02,
          unemployment: 0.003,
        },
      },
      employer: {
        insuranceRate: {
          endowment: 0.13,
          health: 0.045,
          unemployment: 0.007,
          birth: 0.0045,
          occupationalInjury: 0.0014,
        },
      },
      insuranceBaseRange: {
        endowment: [2360, 34860],
        health: [6972, 34860],
        unemployment: [2360, 34860],
        birth: [6972, 34860],
        occupationalInjury: [6972, 34860],
      },
      housingFundBaseRange: [2360, 34860],
    },
  ],
  insuranceBaseOnLastMonth: true,
};

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent {
  usePredefinedInsurancePercents = true;
  cityRecipe: CityRecipe = null!;
  clear = false;
  selectedYear = new Date().getFullYear();

  selectedMonth$ = new BehaviorSubject<number>(1);
  scroll$ = new BehaviorSubject<void>(undefined);

  private monthlyMetasSubject$ = new BehaviorSubject<MonthlyIncomeMeta[]>([]);
  monthlyMetas$!: Observable<MonthlyIncomeMeta[]>;
  monthlyIncomes$!: Observable<MonthlyIncomeInfo[]>;
  summary$!: Observable<FullYearIncomeInfo>;
  recipes$: Observable<CityRecipe[]>;

  constructor(private http: HttpClient) {
    // 初始化流
    this.monthlyMetasSubject$ = new BehaviorSubject<MonthlyIncomeMeta[]>([]);
    this.monthlyMetas$ = this.monthlyMetasSubject$
      .asObservable()
      .pipe(filter((list) => list.length > 0));
    this.monthlyIncomes$ = this.monthlyMetas$.pipe(
      debounceTime(300),
      filter((list) => list.length > 0),
      map((metas) => calculateMonthlyIncomes(metas)),
      shareReplay(1)
    );
    this.summary$ = combineLatest([
      this.monthlyIncomes$,
      this.monthlyMetas$,
    ]).pipe(
      map(([list, metas]) => {
        return calculateFullYearIncome(list, metas[0].annualBonus);
      }),
      shareReplay(1)
    );

    this.recipes$ = this.http
      .get<CityRecipe[]>('assets/city-recipes.json')
      .pipe(
        tap((x) => {
          this.changeRecipe(x[0]);
        })
      );
  }

  changeChartMonth(month: number) {
    console.log(`Changing chart month to: ${month}`);
    this.selectedMonth$.next(month);
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
    // 获取当前的月度元数据列表
    this.monthlyMetas$.pipe(take(1)).subscribe((currentMetas) => {
      if (currentMetas && currentMetas.length > index) {
        // 更新指定索引的元数据
        const updatedMetas = [...currentMetas];
        updatedMetas[index] = {
          ...updatedMetas[index],
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
          insuranceBaseOnLastMonth: meta.insuranceBaseOnLastMonth,
        };

        // 更新月度数据，其他流会自动重新计算
        this.monthlyMetasSubject$.next(updatedMetas);
      }
    });
  }

  calculate(params: CalculateParams): void {
    this.clear = false;

    const monthlyMetas = this.buildMonthlyMetasFromPolicy(params);

    monthlyMetas[0].newPayCycle = true;

    // 更新月度数据，其他流会自动响应
    this.monthlyMetasSubject$.next(monthlyMetas);
  }

  private buildMonthlyMetasFromPolicy(
    params: CalculateParams
  ): MonthlyIncomeMeta[] {
    return buildMonthlyMetas(
      this.cityRecipe,
      params.year,
      params,
      params.useUniformPolicy
    );
  }
}
