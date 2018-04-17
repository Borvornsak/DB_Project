import { userConstants } from "../constants";

// let user = JSON.parse(localStorage.getItem("user"));
// const initialState = user ? { loggedIn: true, user } : {};

const initialState = {
  loggedIn: true,
  user: "beam",
  userType: "student",
  firstName: "บวรศักย์",
  lastName: "ลออรัตนพงศ์"
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
        user: action.user,
        userType: "student",
        firstName: "Borvornsak",
        lastName: "Laoratanapong"
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {};
    default:
      return state;
  }
}
