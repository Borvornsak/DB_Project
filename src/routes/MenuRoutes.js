import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import { history } from "../helpers";
import {
  RegisterBoard,
  AddDropWithdrawBoard,
  GradeBoard,
  DocumentBoard,
  FeeBoard,
  TimeTableBoard,
  CourseBoard,
  AdviseeBoard,
  RegisterPeriodBoard
} from "../boards";

const MenuRoutes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/dashboard/register" component={RegisterBoard} />
        <Route
          path="/dashboard/addDropWithdraw"
          component={AddDropWithdrawBoard}
        />
        <Route path="/dashboard/grade" component={GradeBoard} />
        <Route path="/dashboard/document" component={DocumentBoard} />
        <Route path="/dashboard/fee" component={FeeBoard} />
        <Route path="/dashboard/timetable" component={TimeTableBoard} />
        <Route path="/dashboard/course" component={CourseBoard} />
        <Route path="/dashboard/advisee" component={AdviseeBoard} />
        <Route
          path="/dashboard/registerPeriod"
          component={RegisterPeriodBoard}
        />
      </Switch>
    </Router>
  );
};

export default MenuRoutes;
