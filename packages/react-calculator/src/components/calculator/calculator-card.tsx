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
  Skeleton,
  Switch,
  Typography,
} from '@mui/material';
import { CityRecipe } from 'calculator-core';
import React, { Fragment, useContext } from 'react';

import { CalculatorForm } from '@/components/calculator/calculator-form';
import { RecipesService } from '@/components/calculator/recipes-service';

export type CalculatorCardProps = {
  className?: string;
  recipes?: CityRecipe[];
};

function RecipesMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { recipe, recipes, updateRecipe } = useContext(RecipesService);

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleSelect = (item: CityRecipe) => {
    setAnchorEl(null);
    updateRecipe(item);
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
        {recipe.label}
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
        {recipes.map(item => (
          <MenuItem key={item.id} onClick={() => handleSelect(item)}>
            {item.label}
          </MenuItem>
        ))}
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

        <RecipesMenu />
      </div>
    </div>
  );
}

function CalculatorFormSkeleton() {
  return (
    <CardContent>
      <Typography variant="h3">
        <Skeleton animation="wave" />
      </Typography>
      <Typography variant="h2">
        <Skeleton animation="wave" />
      </Typography>
      <Typography variant="h3">
        <Skeleton animation="wave" />
      </Typography>
      <Typography variant="h3">
        <Skeleton animation="wave" />
      </Typography>
      <Typography variant="h3">
        <Skeleton animation="wave" />
      </Typography>
      <Typography variant="h3">
        <Skeleton animation="wave" />
      </Typography>
    </CardContent>
  );
}

function CalculatorCard(_: CalculatorCardProps) {
  const { loading } = useContext(RecipesService);
  return loading ? (
    <Card>
      <CalculatorFormSkeleton />
    </Card>
  ) : (
    <Card>
      <CardHeader title={<CardTitle />} />
      <CardContent>
        <CalculatorForm />
      </CardContent>
    </Card>
  );
}

export default CalculatorCard;
