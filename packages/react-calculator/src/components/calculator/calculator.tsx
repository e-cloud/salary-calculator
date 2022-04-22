import { Box, SxProps } from '@mui/material';

import CalculatorCard from '@/components/calculator/calculator-card';
import MonthIncomeList from '@/components/calculator/month-income-list';
import SummaryCard from '@/components/calculator/summary-card';
import { useStore } from '@/store';
import { useMonthlyIncomeCalculateService } from '@/store/month-incomes.service';

export type CalculatorProps = {
  className?: string;
} & SxProps;

function Calculator(props: CalculatorProps) {
  const monthlyIncomes = useStore(state => state.monthlyIncomes);
  const summary = useStore(state => state.summary);

  useMonthlyIncomeCalculateService();

  return (
    <div className={props.className}>
      <CalculatorCard {...props} />

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {monthlyIncomes && monthlyIncomes.length > 0 && (
          <Box>
            <MonthIncomeList />
          </Box>
        )}

        {summary && (
          <Box>
            <SummaryCard model={summary} />
          </Box>
        )}
      </div>
    </div>
  );
}

export default Calculator;
