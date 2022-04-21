import { Box, SxProps } from '@mui/material';

import CalculatorCard from '@/components/calculator/calculator-card';
import MonthIncomeList from '@/components/calculator/month-income-list';
import {
  RecipesService,
  useRecipesService,
} from '@/components/calculator/recipes-service';
import SummaryCard from '@/components/calculator/summary-card';

export type CalculatorProps = {
  className?: string;
} & SxProps;

function Calculator(props: CalculatorProps) {
  const monthlyIncomes = null;
  const summary = null;

  return (
    <RecipesService.Provider value={useRecipesService()}>
      <div className={props.className}>
        <CalculatorCard {...props} />

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {monthlyIncomes && (
            <Box>
              <MonthIncomeList />
            </Box>
          )}

          {summary && (
            <Box>
              <SummaryCard />
            </Box>
          )}
        </div>
      </div>
    </RecipesService.Provider>
  );
}

export default Calculator;
