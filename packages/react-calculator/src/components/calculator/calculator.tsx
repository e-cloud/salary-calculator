import { Box, SxProps } from '@mui/material';

import CalculatorCard from '@/components/calculator/calculator-card';
import MonthIncomeList from '@/components/calculator/month-income-list';
import SummaryCard from '@/components/calculator/summary-card';

export type CalculatorProps = {
  className?: string;
} & SxProps;

function Calculator(props: CalculatorProps) {
  return (
    <div className={props.className}>
      <CalculatorCard {...props} />

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <Box>
          <MonthIncomeList />
        </Box>

        <Box>
          <SummaryCard />
        </Box>
      </div>
    </div>
  );
}

export default Calculator;
