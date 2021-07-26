import React from "react";
import "./App.css";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Provider } from "react-redux";
import Header from "./components/Header/Header";
import settings from "./settings.json";
import store from "./store/store";

const theme = createTheme({
  palette: {
    type: "dark",
  },
});

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header title={settings.header.title} />
    </ThemeProvider>
  </Provider>
);

export default App;
