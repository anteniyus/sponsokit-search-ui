import React from "react";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Provider } from "react-redux";
import Header from "./components/Header/Header";
import settings from "./settings.json";
import ScreensInfluencerList from "./screens/Influencer/List";
import store from "./store/store";
import { Colors } from "./constants/ColorPalette";
import AppTheme from "./AppTheme";

const App = () => (
  <Provider store={store}>
    <AppTheme>
      <CssBaseline />
      <Header
        title={settings.header.title}
        backgroundColor={Colors.LIGHT_GREEN}
        color={Colors.WHITE}
      />
      <ScreensInfluencerList />
    </AppTheme>
  </Provider>
);

export default App;
