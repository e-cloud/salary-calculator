 
import {
  buildEmptyMetaList,
  calculateFullYearIncome,
  calculateMonthlyIncomes,
} from 'calculator-core';
import { useEffect } from 'react';

import { useStore } from '@/store/index';

export function useMonthlyIncomeCalculateService() {
  let baseMeta = useStore(state => state.baseMeta);
  const updateMonthlyMetas = useStore(state => state.updateMonthlyMetas);

  // calculate monthlyMetas
  useEffect(() => {
    if (baseMeta) {
      const emptyMetaList = buildEmptyMetaList(baseMeta);

      emptyMetaList[0]!.newPayCycle = true;
      updateMonthlyMetas(emptyMetaList);
    }
  }, [baseMeta]);

  // calculate monthlyIncomes
  const monthlyMetas = useStore(state => state.monthlyMetas);
  const updateMonthlyIncomes = useStore(state => state.updateMonthlyIncomes);
  useEffect(() => {
    const monthlyIncomes = calculateMonthlyIncomes(monthlyMetas);
    updateMonthlyIncomes(monthlyIncomes);
  }, [monthlyMetas]);

  // calculate summary
  const monthlyIncomes = useStore(state => state.monthlyIncomes);
  baseMeta = useStore(state => state.baseMeta);
  const updateSummary = useStore(state => state.updateSummary);
  useEffect(() => {
    if (baseMeta && monthlyIncomes.length) {
      const summary = calculateFullYearIncome(
        monthlyIncomes,
        baseMeta.annualBonus,
      );

      updateSummary(summary);
    }
  }, [baseMeta, monthlyIncomes]);
}
