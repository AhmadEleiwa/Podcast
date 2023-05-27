import { ThemeProvider, createTheme } from "@mui/material";
import "./App.css";
import Router from "./Router";
import { CastProvider } from "./context/useCast";

const theme = createTheme({
  palette: {
    primary: {
      main: "#816AFE",
    },
    secondary: {
      main: "#8EFCBA",
    },
    white: {
      main: "#ffffff",
      contrastText: "#816AFE",
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CastProvider>
        <Router />
      </CastProvider>
    </ThemeProvider>
  );
}

export default App;
