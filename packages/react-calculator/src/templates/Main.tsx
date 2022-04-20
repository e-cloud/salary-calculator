import { AppBar, Icon, IconButton, Toolbar, Typography } from '@mui/material';
import { Fragment, ReactNode } from 'react';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <Fragment>
    <AppBar position="fixed">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}
        >
          <Icon sx={{ mr: 1 }}>calculate</Icon>
          Calculator
        </Typography>

        <IconButton edge="start" color="inherit" aria-label="help">
          <Icon>help</Icon>
        </IconButton>
      </Toolbar>
    </AppBar>

    <div className="page-content" style={{ marginTop: '64px' }}>
      {props.children}
    </div>
  </Fragment>
);

export { Main };
