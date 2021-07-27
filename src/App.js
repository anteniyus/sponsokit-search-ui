import React from "react";
import "./App.css";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Provider } from "react-redux";
import Header from "./components/Header/Header";
import settings from "./settings.json";
import ScreensInfluencerList from "./screens/Influencer/List";
import store from "./store/store";
import { Colors } from "./constants/ColorPalette";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#416673",
    },
  },
  typography: {
    fontSize: 12,
  },
});

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header
        title={settings.header.title}
        backgroundColor={Colors.LIGHT_GREEN}
        color={Colors.WHITE}
      />
      <ScreensInfluencerList />
    </ThemeProvider>
  </Provider>
);

export default App;
