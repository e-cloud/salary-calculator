import create, { GetState, SetState } from 'zustand';

import {
  createMonthIncomesSlice,
  MonthIncomesSlice,
} from '@/store/month-incomes.slice';
import { createRecipesSlice, RecipesSlice } from '@/store/recipes.slice';

export type RootState = RecipesSlice & MonthIncomesSlice;

const createRootSlice = (
  set: SetState<RootState>,
  get: GetState<RootState>,
) => ({
  ...createRecipesSlice(set, get),
  ...createMonthIncomesSlice(set, get),
});

export const useStore = create(createRootSlice);
