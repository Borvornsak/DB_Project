import { combineReducers } from "redux";

import { authentication } from "./authentication.reducer";
import { alert } from "./alert.reducer";
import { grade } from "./grade.reducer";
import { info } from "./info.reducer";

const rootReducer = combineReducers({
  authentication,
  alert,
  grade,
  info
});

export default rootReducer;
