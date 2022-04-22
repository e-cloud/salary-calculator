import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Icon,
  Typography,
} from '@mui/material';
import { CityRecipe, MonthlyIncomeMeta } from 'calculator-core';
import React, { Fragment, useMemo, useState } from 'react';

import {
  DetailFormModel,
  MonthIncomeForm,
} from '@/components/calculator/month-income-form';
import { useStore } from '@/store';
import { currency, month } from '@/utils/pipes';

function makeDetailFormData(
  meta: MonthlyIncomeMeta,
  recipe: CityRecipe,
): DetailFormModel {
  return {
    monthSalary: meta.salary,
    annualBonus: 0,
    monthlyBonus: 0,
    newPayCycle: meta.newPayCycle,
    insuranceBase: meta.insuranceBase,
    housingFundBase: meta.housingFundBase,
    housingFundRate: meta.housingFundRate * 100,
    extraDeduction: { ...meta.extraDeduction },
    insuranceRate: {
      endowment: recipe.employee.insuranceRate.endowment * 100,
      health: recipe.employee.insuranceRate.health * 100,
      unemployment: recipe.employee.insuranceRate.unemployment * 100,
    },
    insuranceBaseOnLastMonth: meta.insuranceBaseOnLastMonth,
  };
}

export default function MonthIncomeList() {
  const [expanded, setExpanded] = useState<number>(-1);

  const handleChange =
    (panel: number) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : -1);
    };

  const monthlyMetas = useStore(state => state.monthlyMetas);
  const recipe = useStore(x => x.recipe);

  const detailForms = useMemo(() => {
    return monthlyMetas.map(x => makeDetailFormData(x, recipe));
  }, [monthlyMetas]);

  const monthlyIncomes = useStore(state => state.monthlyIncomes);

  return (
    <Fragment>
      {monthlyIncomes.map((item, index) => (
        <Accordion
          TransitionProps={{ unmountOnExit: true }}
          key={index}
          expanded={expanded === index}
          onChange={handleChange(index)}
        >
          <AccordionSummary
            expandIcon={<Icon>expand_more</Icon>}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography>
              {month(item.actualMonth - 1)}&nbsp;实收：
              {currency(item.cashIncome)}，公积金：
              {currency(item.housingFund * 2)}，个税：{currency(item.tax)}
              ，公司成本：{currency(item.employerCosts.full)}
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <MonthIncomeForm
              model={detailForms[index]!}
              index={index}
              income={item}
            />
          </AccordionDetails>
        </Accordion>
      ))}
    </Fragment>
  );
}
