import React from "react";
import "./App.css";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./components/Header/Header";

const theme = createTheme({
  palette: {
    type: "dark",
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Header />
  </ThemeProvider>
);

export default App;
