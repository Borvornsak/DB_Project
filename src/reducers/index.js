import { combineReducers } from "redux";

import { authentication } from "./authentication.reducer";
import { alert } from "./alert.reducer";
import { grade } from "./grade.reducer";

const rootReducer = combineReducers({
  authentication,
  alert,
  grade
});

export default rootReducer;
