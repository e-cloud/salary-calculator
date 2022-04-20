import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Icon,
  Typography,
} from '@mui/material';
import React, { Fragment, useState } from 'react';

import { MonthIncomeForm } from '@/components/calculator/month-income-form';

export default function MonthIncomeList() {
  const [expanded, setExpanded] = useState<number>(-1);

  const handleChange =
    (panel: number) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : -1);
    };

  const list = new Array(12).fill(0);

  return (
    <Fragment>
      {list.map((_, index) => (
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
              一月&nbsp;实收：¥8141.16，公积金：¥1600.00，个税：¥50.76，公司成本：¥1,2852.52
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <MonthIncomeForm />
          </AccordionDetails>
        </Accordion>
      ))}
    </Fragment>
  );
}
