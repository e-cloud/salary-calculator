import { CityRecipe } from 'calculator-core';

import { StoreSlice } from '@/store/types';

export interface RecipesSlice {
  recipe: CityRecipe;
  recipes: CityRecipe[];
  recipesLoading: boolean;
  fetchRecipes: () => Promise<void>;
  updateRecipe: (item: CityRecipe) => void;
}

const defaultRecipe: CityRecipe = {
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

export const createRecipesSlice: StoreSlice<RecipesSlice> = set => ({
  recipe: defaultRecipe,
  recipes: [],
  recipesLoading: false,
  fetchRecipes: async () => {
    try {
      set({ recipesLoading: true });
      const response = await fetch('/assets/city-recipes.json');
      const recipes = await response.json();
      set({ recipes, recipe: recipes[0] });
    } finally {
      set({ recipesLoading: false });
    }
  },
  updateRecipe(data) {
    set({ recipe: data });
  },
});
