/* eslint-disable @typescript-eslint/no-non-null-assertion,@typescript-eslint/no-explicit-any */
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  buildMonthlyMetas,
  calculateFullYearIncome,
  calculateMonthlyIncomes,
  CityRecipe,
  CityRecipeIndexItem,
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
  take,
  map,
  debounceTime,
  delay,
} from 'rxjs';
import { MonthlyInputModel } from './types';
import {
  CalculateParams,
  CalculatorFormComponent,
} from './calculator-form/calculator-form.component';
import { MonthlyResultsComponent } from './monthly-results/monthly-results.component';
import { SummaryChartsComponent } from './summary-charts/summary-charts.component';
import { SummaryDetailsComponent } from './summary-details/summary-details.component';
import { BonusOptimizationCardComponent } from './bonus-optimization-card/bonus-optimization-card.component';
import { SalaryCalculatorStore } from './salary-calculator.store';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [
    CommonModule,
    CalculatorFormComponent,
    MonthlyResultsComponent,
    SummaryChartsComponent,
    SummaryDetailsComponent,
    BonusOptimizationCardComponent,
  ],

  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent implements OnInit {
  readonly store = inject(SalaryCalculatorStore);
  private http = inject(HttpClient);

  readonly usePredefinedInsurancePercents = signal<boolean>(true);
  readonly cityRecipe = signal<CityRecipe | null>(null);
  readonly clear = signal<boolean>(false);
  selectedYear = new Date().getFullYear();

  selectedMonth$ = new BehaviorSubject<number>(1);
  scroll$ = new BehaviorSubject<void>(undefined);

  private monthlyMetasSubject$ = new BehaviorSubject<MonthlyIncomeMeta[]>([]);
  monthlyMetas$!: Observable<MonthlyIncomeMeta[]>;
  monthlyIncomes$!: Observable<MonthlyIncomeInfo[]>;
  summary$!: Observable<FullYearIncomeInfo>;
  recipeIndex$!: Observable<CityRecipeIndexItem[]>;
  private loadedRecipes = new Map<string, CityRecipe>();

  ngOnInit() {
    // 初始化流
    this.monthlyMetasSubject$ = new BehaviorSubject<MonthlyIncomeMeta[]>([]);
    this.monthlyMetas$ = this.monthlyMetasSubject$
      .asObservable()
      .pipe(filter((list) => list.length > 0));
    this.monthlyIncomes$ = this.monthlyMetas$.pipe(
      debounceTime(300),
      filter((list) => list.length > 0),
      map((metas) => calculateMonthlyIncomes(metas)),
      shareReplay(1),
    );
    this.summary$ = combineLatest([
      this.monthlyIncomes$,
      this.monthlyMetas$,
    ]).pipe(
      map(([list, metas]) => {
        return calculateFullYearIncome(list, metas[0].annualBonus);
      }),
      shareReplay(1),
    );

    // 配方索引流（统领入口，通过 delay(0) 自动调度解耦至下一事件循环）
    this.recipeIndex$ = this.http
      .get<CityRecipeIndexItem[]>('assets/recipes/index.json')
      .pipe(delay(0), shareReplay(1));

    // 主动订阅触发配方加载，避免 mat-menu 懒渲染导致不发请求
    this.recipeIndex$.subscribe((items) => {
      if (items.length > 0 && !this.cityRecipe()) {
        this.selectRecipeItem(items[0]);
      }
    });
  }

  selectRecipeItem(item: CityRecipeIndexItem) {
    if (this.loadedRecipes.has(item.file)) {
      this.changeRecipe(this.loadedRecipes.get(item.file)!);
      return;
    }
    this.http
      .get<CityRecipe>(`assets/recipes/${item.file}`)
      .pipe(delay(0))
      .subscribe((recipe) => {
        this.loadedRecipes.set(item.file, recipe);
        this.changeRecipe(recipe);
      });
  }

  changeChartMonth(month: number) {
    console.log(`Changing chart month to: ${month}`);
    this.selectedMonth$.next(month);
  }

  changeRecipe(recipe: CityRecipe) {
    this.cityRecipe.set(recipe);
  }

  changePredefineCondition(val: boolean) {
    this.usePredefinedInsurancePercents.set(val);
  }

  clearResult() {
    this.clear.set(true);
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
          supplementaryHousingFundRate:
            meta.supplementaryHousingFundRate !== undefined
              ? meta.supplementaryHousingFundRate / 100
              : 0,
          supplementaryHousingFundEmployerRate:
            meta.supplementaryHousingFundEmployerRate !== undefined
              ? meta.supplementaryHousingFundEmployerRate / 100
              : 0,
          insuranceRate: {
            endowment: meta.insuranceRate.endowment / 100,
            health: meta.insuranceRate.health / 100,
            unemployment: meta.insuranceRate.unemployment / 100,
          },
          extraDeduction: meta.extraDeduction,
          insuranceBaseOnLastMonth: meta.insuranceBaseOnLastMonth,
          newPayCycle: meta.newPayCycle,
        };

        // 更新月度数据，其他流会自动重新计算
        this.monthlyMetasSubject$.next(updatedMetas);
      }
    });
  }

  calculate(params: CalculateParams): void {
    this.clear.set(false);

    const monthlyMetas = this.buildMonthlyMetasFromPolicy(params);

    monthlyMetas[0].newPayCycle = true;

    // 更新月度数据，其他流会自动响应
    this.monthlyMetasSubject$.next(monthlyMetas);
  }

  private buildMonthlyMetasFromPolicy(
    params: CalculateParams,
  ): MonthlyIncomeMeta[] {
    return buildMonthlyMetas(
      this.cityRecipe()!,
      params.year,
      params,
      params.useUniformPolicy,
    );
  }
}
