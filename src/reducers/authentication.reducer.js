import { userConstants } from "../constants";

// let user = JSON.parse(localStorage.getItem("user"));
// const initialState = user ? { loggedIn: true, user } : {};

const initialState = {
  loggedIn: true,
  // firstName: "นนทวี",
  // id: "teacher",
  // lastName: "สายปัญญา",
  // userType: "Teacher"
  firstName: "สมหญิง",
  id: "student",
  lastName: "บุญมี",
  userType: "Student",
  // id: "officer",
  // userType: "Officer",
  // firstName: "Officer",
  registerPeriod: "add/drop"
};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        ...action.user
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {};
    default:
      return state;
  }
}
