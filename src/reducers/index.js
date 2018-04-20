import { combineReducers } from "redux";

import { authentication } from "./authentication.reducer";
import { alert } from "./alert.reducer";
import { grade } from "./grade.reducer";
import { info } from "./info.reducer";
import { course } from "./course.reducer";

const rootReducer = combineReducers({
  authentication,
  alert,
  grade,
  info,
  course
});

export default rootReducer;
