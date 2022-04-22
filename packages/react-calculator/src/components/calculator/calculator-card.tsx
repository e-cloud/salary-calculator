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
import React, { Fragment, useEffect, useState } from 'react';

import { CalculatorForm } from '@/components/calculator/calculator-form';
import { useStore } from '@/store';

export type CalculatorCardProps = {
  className?: string;
  recipes?: CityRecipe[];
};

function RecipesMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const recipe = useStore(x => x.recipe);
  const recipes = useStore(x => x.recipes);
  const updateRecipe = useStore(x => x.updateRecipe);

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

function CardTitle(props: { handlePredefinedChange: (val: boolean) => void }) {
  const [checked, setChecked] = useState(true);

  useEffect(() => {
    props.handlePredefinedChange(checked);
  }, [checked]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

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
          control={<Switch checked={checked} onChange={handleChange} />}
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
  const [usePredefinedInsurancePercents, updateUsePredefinedInsurancePercents] =
    useState(true);
  const loading = useStore(state => state.recipesLoading);
  const fetchRecipes = useStore(state => state.fetchRecipes);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const handlePredefinedChange = (val: boolean) => {
    updateUsePredefinedInsurancePercents(val);
  };

  return loading ? (
    <Card>
      <CalculatorFormSkeleton />
    </Card>
  ) : (
    <Card>
      <CardHeader
        title={<CardTitle handlePredefinedChange={handlePredefinedChange} />}
      />
      <CardContent>
        <CalculatorForm
          usePredefinedInsurancePercents={usePredefinedInsurancePercents}
        />
      </CardContent>
    </Card>
  );
}

export default CalculatorCard;
