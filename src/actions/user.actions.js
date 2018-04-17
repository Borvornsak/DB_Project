import { userConstants } from "../constants";
import { userService } from "../services";
import { alertActions } from "./";
import { history } from "../helpers";

export const userActions = {
  login,
  logout
};

function login(username, password) {
  return dispatch => {
    dispatch(request({ username }));

    userService.login(username, password).then(
      response => {
        console.log(response);
        dispatch(success({ username }));
        dispatch(alertActions.clear());
        history.push("/dashboard");
      },
      error => {
        dispatch(failure(error));
        dispatch(alertActions.error("Username or password is incorrect."));
      }
    );
  };

  function request(user) {
    return { type: userConstants.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }
}

function logout() {
  userService.logout();
  return { type: userConstants.LOGOUT };
}
