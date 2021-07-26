import React from "react";
import "./App.css";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./components/Header/Header";
import settings from "./settings.json";

const theme = createTheme({
  palette: {
    type: "dark",
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Header title={settings.header.title} />
  </ThemeProvider>
);

export default App;
