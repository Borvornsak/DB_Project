import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import { connect } from "react-redux";
import { LoginPage, DashboardPage } from "../pages";
import { history } from "../helpers";
import PrivateRoute from "./PrivateRoute";
import { alertActions } from "../actions";

class MainRoutes extends React.Component {
  constructor(props) {
    super(props);

    // this line is required to work on plunker because the app preview runs on a subfolder url
    // history.push("/");

    // const { dispatch } = this.props;
    // history.listen((location, action) => {
    //   // clear alert on location change
    //   dispatch(alertActions.clear());
    // });
  }
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <PrivateRoute path="/dashboard" component={DashboardPage} />
        </Switch>
      </Router>
    );
  }
}

export default connect()(MainRoutes);
