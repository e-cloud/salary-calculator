import { useStore } from '@/store';
import {
  Card,
  CardContent,
  Icon,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { FullYearIncomeInfo } from 'calculator-core';

import { currency } from '@/utils/pipes';
import { useEffect, useRef } from 'react';

const makeDollarText = (text: string) => (
  <Typography
    sx={{
      fontSize: '1.5rem',
    }}
    component="span"
    variant="body2"
    color="primary"
  >
    {text}
  </Typography>
);

export interface SummaryCardProps {
  model: FullYearIncomeInfo;
}

export default function SummaryCard(props: SummaryCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const baseMeta = useStore(state => state.baseMeta);
  useEffect(() => {
    const timer = setTimeout(() => {
      ref.current?.scrollIntoView({ behavior: 'smooth' });
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [baseMeta]);

  const { model } = props;
  return (
    <Card ref={ref}>
      <CardContent>
        <List
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            width: '100%',
            bgcolor: 'background.paper',
            '& .MuiListItem-root': {
              width: '50%',
            },
            '& .MuiListItemText-primary': {
              fontSize: '1rem',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
            },
            '& .material-icons': {
              fontSize: '1.75rem',
              color: 'black',
            },
          }}
        >
          <ListItem>
            <ListItemIcon>
              <Icon>money</Icon>
            </ListItemIcon>
            <ListItemText
              primary="全年账面薪资收入"
              secondary={makeDollarText(currency(model.bookSalary))}
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <Icon>money</Icon>
            </ListItemIcon>
            <ListItemText
              primary="全年一次性奖金收入(单独计税)"
              secondary={makeDollarText(
                `${currency(model.bonus)} (${currency(model.bonusTax)})`,
              )}
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <Icon>redeem</Icon>
            </ListItemIcon>
            <ListItemText
              primary="全年公积金缴纳金额"
              secondary={makeDollarText(currency(model.fullHousingFund))}
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <Icon>monetization_on</Icon>
            </ListItemIcon>
            <ListItemText
              primary="全年预缴税额"
              secondary={makeDollarText(currency(model.prepaidTax))}
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <Icon>monetization_on</Icon>
            </ListItemIcon>
            <ListItemText
              primary="全年个人综合所得税额"
              secondary={makeDollarText(currency(model.theoreticalTax))}
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <Icon>monetization_on</Icon>
            </ListItemIcon>
            <ListItemText
              primary="全年个人综合所得税额（单独计算）"
              secondary={makeDollarText(currency(model.totalSeparatedTax))}
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <Icon>savings</Icon>
            </ListItemIcon>
            <ListItemText
              primary="全年税后收入"
              secondary={makeDollarText(currency(model.taxedIncome))}
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <Icon>savings</Icon>
            </ListItemIcon>
            <ListItemText
              primary="全年税后收入（非合并 - 2024.1.1止）"
              secondary={makeDollarText(currency(model.taxedIncomeDeprecated))}
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <Icon>savings</Icon>
            </ListItemIcon>
            <ListItemText
              primary="全年现金收入"
              secondary={makeDollarText(currency(model.cashIncome))}
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <Icon>savings</Icon>
            </ListItemIcon>
            <ListItemText
              primary="全年现金收入（非合并 - 2024.1.1止）"
              secondary={makeDollarText(currency(model.cashIncomeDeprecated))}
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <Icon>savings</Icon>
            </ListItemIcon>
            <ListItemText
              primary="全年综合货币收入"
              secondary={makeDollarText(
                currency(model.cashIncome + model.fullHousingFund),
              )}
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <Icon>savings</Icon>
            </ListItemIcon>
            <ListItemText
              primary="全年综合货币收入（非合并 - 2024.1.1止）"
              secondary={makeDollarText(
                currency(model.cashIncomeDeprecated + model.fullHousingFund),
              )}
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <Icon>redeem</Icon>
            </ListItemIcon>
            <ListItemText
              primary="个人养老保险缴纳总额"
              secondary={makeDollarText(
                currency(model.employee.endowmentInsurance),
              )}
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <Icon>redeem</Icon>
            </ListItemIcon>
            <ListItemText
              primary="个人医保缴纳总额"
              secondary={makeDollarText(
                currency(model.employee.healthInsurance),
              )}
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <Icon>payments</Icon>
            </ListItemIcon>
            <ListItemText
              primary="公司成本"
              secondary={makeDollarText(currency(model.employerCosts.full))}
            />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}
