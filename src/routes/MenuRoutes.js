import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import { history } from "../helpers";
import {
  RegisterBoard,
  ConfigureBoard,
  GradeBoard,
  TranscriptBoard,
  GraduateBoard,
  FeeBoard,
  TimeTableBoard,
  ExamBoard
} from "../boards";

const MenuRoutes = () => {
  return (
    <Router history={history}>
      <Switch>
        {/* <Route exact path="/dashboard/register" component={RegisterBoard} /> */}
        <Route path="/dashboard/register" component={RegisterBoard} />
        <Route path="/dashboard/configure" component={ConfigureBoard} />
        <Route path="/dashboard/grade" component={GradeBoard} />
        <Route path="/dashboard/transcript" component={TranscriptBoard} />
        <Route path="/dashboard/graduate" component={GraduateBoard} />
        <Route path="/dashboard/fee" component={FeeBoard} />
        <Route path="/dashboard/timetable" component={TimeTableBoard} />
        <Route path="/dashboard/exam" component={ExamBoard} />
      </Switch>
    </Router>
  );
};

export default MenuRoutes;
