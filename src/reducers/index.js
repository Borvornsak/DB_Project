import { combineReducers } from "redux";

import { authentication } from "./authentication.reducer";
import { alert } from "./alert.reducer";
import { grade } from "./grade.reducer";
import { info } from "./info.reducer";
import { course } from "./course.reducer";
import { section } from "./section.reducer";
import { advisee } from "./advisee.reducer";
import { register } from "./register.reducer";
import { registerPeriod } from "./registerPeriod.reducer";
import { document } from "./document.reducer";
import { schedule } from "./schedule.reducer";
const rootReducer = combineReducers({
  authentication,
  alert,
  grade,
  info,
  course,
  section,
  advisee,
  register,
  registerPeriod,
  document,
  schedule
});

export default rootReducer;
