import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import LoginPage from "../components/pages/LoginPage";
import DashboardPage from "../components/pages/DashboardPage";
import { history } from "../helpers";
import PrivateRoute from "./PrivateRoute";

export const MainRoutes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <PrivateRoute exact path="/dashboard" component={DashboardPage} />
      </Switch>
    </Router>
  );
};
