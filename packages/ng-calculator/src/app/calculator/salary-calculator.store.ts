import { computed, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  signalStore,
  withState,
  withComputed,
  withMethods,
  patchState,
} from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap, delay } from 'rxjs';
import {
  CityRecipe,
  CityRecipeIndexItem,
  FullYearIncomeInfo,
  MonthlyIncomeInfo,
  MonthlyIncomeMeta,
  calculateFullYearIncome,
  calculateMonthlyIncomes,
  buildMonthlyMetas,
} from 'calculator-core';
import { CalculateParams } from './calculator-form/calculator-form.component';
import { MonthlyInputModel } from './types';

export interface SalaryCalculatorState {
  recipeIndex: CityRecipeIndexItem[];
  cityRecipe: CityRecipe | null;
  selectedYear: number;
  usePredefinedInsurancePercents: boolean;
  selectedMonth: number;
  clear: boolean;
  monthlyMetas: MonthlyIncomeMeta[];
}

const initialState: SalaryCalculatorState = {
  recipeIndex: [],
  cityRecipe: null,
  selectedYear: new Date().getFullYear(),
  usePredefinedInsurancePercents: true,
  selectedMonth: 1,
  clear: false,
  monthlyMetas: [],
};

export const SalaryCalculatorStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed((store) => ({
    hasResults: computed(
      () => store.monthlyMetas().length > 0 && !store.clear(),
    ),
    monthlyIncomes: computed<MonthlyIncomeInfo[]>(() => {
      const metas = store.monthlyMetas();
      if (metas.length === 0 || store.clear()) {
        return [];
      }
      return calculateMonthlyIncomes(metas);
    }),
    summary: computed<FullYearIncomeInfo | null>(() => {
      const metas = store.monthlyMetas();
      if (metas.length === 0 || store.clear()) {
        return null;
      }
      const incomes = calculateMonthlyIncomes(metas);
      if (incomes.length === 0) {
        return null;
      }
      return calculateFullYearIncome(incomes, metas[0].annualBonus || 0);
    }),
  })),
  withMethods((store, http = inject(HttpClient)) => {
    const loadedRecipes = new Map<string, CityRecipe>();

    const selectRecipeItem = (item: CityRecipeIndexItem): void => {
      if (loadedRecipes.has(item.file)) {
        patchState(store, { cityRecipe: loadedRecipes.get(item.file)! });
        return;
      }
      http
        .get<CityRecipe>(`assets/recipes/${item.file}`)
        .pipe(delay(0))
        .subscribe((recipe) => {
          loadedRecipes.set(item.file, recipe);
          patchState(store, { cityRecipe: recipe });
        });
    };

    return {
      selectRecipeItem,

      loadRecipeIndex: rxMethod<void>(
        pipe(
          switchMap(() =>
            http
              .get<CityRecipeIndexItem[]>('assets/recipes/index.json')
              .pipe(delay(0)),
          ),
          tap((items) => {
            patchState(store, { recipeIndex: items });
            if (items.length > 0 && !store.cityRecipe()) {
              selectRecipeItem(items[0]);
            }
          }),
        ),
      ),

      setRecipe(recipe: CityRecipe): void {
        patchState(store, { cityRecipe: recipe });
      },

      setSelectedMonth(month: number): void {
        patchState(store, { selectedMonth: month });
      },

      setSelectedYear(year: number): void {
        patchState(store, { selectedYear: year });
      },

      setPredefinedInsurancePercents(val: boolean): void {
        patchState(store, { usePredefinedInsurancePercents: val });
      },

      clearResults(): void {
        patchState(store, { clear: true });
      },

      updateMeta(meta: MonthlyInputModel, index: number): void {
        const currentMetas = store.monthlyMetas();
        if (currentMetas && currentMetas.length > index) {
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

          patchState(store, { monthlyMetas: updatedMetas, clear: false });
        }
      },

      calculate(params: CalculateParams): void {
        const recipe = store.cityRecipe();
        if (!recipe) {
          return;
        }
        const monthlyMetas = buildMonthlyMetas(
          recipe,
          params.year,
          params,
          params.useUniformPolicy,
        );
        if (monthlyMetas.length > 0) {
          monthlyMetas[0].newPayCycle = true;
        }
        patchState(store, {
          monthlyMetas,
          selectedYear: params.year,
          clear: false,
        });
      },
    };
  }),
);
