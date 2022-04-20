import { css } from '@emotion/react';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  FormControlLabel,
  Icon,
  Menu,
  MenuItem,
  Switch,
} from '@mui/material';
import React, { Fragment } from 'react';

import { CalculatorForm } from '@/components/calculator/calculator-form';

export type CalculatorFormProps = {
  className?: string;
};

function ReceiptMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        endIcon={<Icon>arrow_drop_down</Icon>}
      >
        Dashboard
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </Fragment>
  );
}

function CardTitle() {
  return (
    <div
      css={css`
        display: flex;
        justify-content: space-between;
      `}
    >
      <span>基础信息</span>

      <div>
        <FormControlLabel
          control={<Switch defaultChecked />}
          label="预定义社保缴纳参数"
        />

        <ReceiptMenu />
      </div>
    </div>
  );
}

function CalculatorCard(_: CalculatorFormProps) {
  return (
    <Card>
      <CardHeader title={<CardTitle />} />
      <CardContent>
        <CalculatorForm />
      </CardContent>
    </Card>
  );
}

export default CalculatorCard;
