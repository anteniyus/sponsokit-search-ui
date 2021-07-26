import React from "react";
import "./App.css";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const theme = createTheme({
  palette: {
    type: "dark",
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
  </ThemeProvider>
);

export default App;
