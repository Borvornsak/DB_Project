import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";
import DashboardPage from "./components/pages/DashboardPage";
import { history } from "./helpers";

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/dashboard" component={DashboardPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
