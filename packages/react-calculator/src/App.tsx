import { AppBar, Icon, IconButton, Toolbar, Typography } from '@mui/material';
import './App.css'
import Calculator from '@/components/calculator/calculator';

function App() {

  return (
    <>
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
        <Calculator className="p-3 sm:px-12 sm:py-6" />
      </div>
    </>
  )
}

export default App
