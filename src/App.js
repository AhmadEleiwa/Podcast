
import { ThemeProvider, createTheme } from '@mui/material';
import './App.css';
import Router from './Router';

const theme = createTheme({
  palette: {
    primary:{
      main: '#816AFE',
      
    },
    white:{
      main: '#f1f1f1',

    }
  }
})
function App() {

  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
