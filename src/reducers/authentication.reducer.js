import { userConstants } from "../constants";

// let user = JSON.parse(localStorage.getItem("user"));
// const initialState = user ? { loggedIn: true, user } : {};

const initialState = {
  firstName: "พชร",
  id: "5830000121",
  lastName: "แสนลัง",
  loggedIn: true,
  registrationStatus: "none",
  semester: 1,
  userType: "Student",
  year: 2018
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
        // ...action.user
        firstName: action.user.firstName,
        id: action.user.id,
        lastName: action.user.lastName,
        userType: action.user.userType,
        ...action.user.academicStatus
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {};
    default:
      return state;
  }
}
