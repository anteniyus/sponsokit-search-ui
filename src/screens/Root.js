import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import ScreensInfluencerList from "./Influencer/List";

const ScreensRoot = () => (
  <Router>
    <Switch>
      <Redirect from="/" to="/influencer/list" exact />
      <Redirect from="/influencer" to="/influencer/list" exact />

      <Route path="/influencer/list" component={ScreensInfluencerList} />
    </Switch>
  </Router>
);

export default ScreensRoot;
