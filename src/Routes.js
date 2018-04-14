import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";
import DashboardPage from "./components/pages/DashboardPage";
import App from "./App";
import history from "./history";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginPage} history={history} />
        <Route
          exact
          path="/dashboard"
          component={DashboardPage}
          history={history}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
