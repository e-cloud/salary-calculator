import { CityRecipe } from 'calculator-core';
import { createContext, useCallback, useEffect, useState } from 'react';

interface State {
  loading: boolean;
  recipe: CityRecipe;
  recipes: CityRecipe[];
  updateRecipe: (recipe: CityRecipe) => void;
  updateRecipes: (list: CityRecipe[]) => void;
}

export const RecipesService = createContext<State>(null as any);

export const useRecipesService = () => {
  const [recipe, setRecipe] = useState<CityRecipe>({} as any);
  const [recipes, setRecipes] = useState<CityRecipe[]>([]);
  const [loading, setLoading] = useState(true);

  const updateRecipe = useCallback((item: CityRecipe) => {
    setRecipe(item);
  }, []);
  const updateRecipes = useCallback((items: CityRecipe[]) => {
    setRecipes(items);
  }, []);

  useEffect(() => {
    fetch('/assets/city-recipes.json')
      .then(resp => {
        resp.json().then(data => {
          updateRecipes(data as any[]);
          updateRecipe(data[0]);
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {
    loading,
    recipe,
    recipes,
    updateRecipe,
    updateRecipes,
  };
};
