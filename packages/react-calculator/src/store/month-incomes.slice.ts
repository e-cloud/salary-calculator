/* eslint-disable @typescript-eslint/no-use-before-define */
import {
  FullYearIncomeInfo,
  MonthlyIncomeInfo,
  MonthlyIncomeMeta,
} from 'calculator-core';
import { merge } from 'lodash-es';

import { RecipesSlice } from '@/store/recipes.slice';
import { StoreSlice } from '@/store/types';

export interface MonthIncomesSlice {
  baseMeta: MonthlyIncomeMeta | null;
  monthlyMetasChanged: boolean;
  monthlyMetas: MonthlyIncomeMeta[];
  monthlyIncomes: MonthlyIncomeInfo[];
  summary: FullYearIncomeInfo | null;
  updateMeta: (data: Partial<MonthlyIncomeMeta>, index: number) => void;
  updateBaseMeta: (data: MonthlyIncomeMeta) => void;
  reset(): void;
  updateMonthlyMetas: (data: MonthlyIncomeMeta[]) => void;
  updateMonthlyIncomes: (data: MonthlyIncomeInfo[]) => void;
  updateSummary: (data: FullYearIncomeInfo) => void;
}

export const createMonthIncomesSlice: StoreSlice<
  MonthIncomesSlice,
  RecipesSlice
> = (set, get) => ({
  baseMeta: null,
  monthlyMetasChanged: false,
  monthlyMetas: [],
  monthlyIncomes: [],
  summary: null,
  updateBaseMeta(data) {
    set({ baseMeta: data });
  },
  updateMeta(meta, index) {
    const oldSlice = get();
    const newList = oldSlice.monthlyMetas.slice();
    newList[index] = merge({}, newList[index], meta);
    newList[0]!.newPayCycle = true;
    set({ monthlyMetas: newList, monthlyMetasChanged: true });
  },
  updateMonthlyMetas(data) {
    set({ monthlyMetas: data });
  },
  updateMonthlyIncomes(data) {
    set({ monthlyIncomes: data });
  },
  updateSummary(data) {
    set({ summary: data });
  },
  reset() {
    set({
      monthlyMetas: [],
      monthlyIncomes: [],
      summary: null,
      monthlyMetasChanged: false,
    });
  },
});
