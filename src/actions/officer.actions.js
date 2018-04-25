import { officerService } from "../services";
import { officerConstants } from "../constants";
import { alertActions } from "./";

export const officerActions = {
  manageRegisterPeriod
};

function manageRegisterPeriod(option) {
  return dispatch => {
    dispatch(request(option));

    officerService.manageRegisterPeriod(option).then(
      response => {
        console.log(response);
        dispatch(success(response));
        dispatch(alertActions.clear());
      },
      error => {
        dispatch(failure(error));
        dispatch(alertActions.error("Can't change register period"));
      }
    );
  };
  function request(option) {
    return {
      type: officerConstants.MANAGE_REAGISTER_PERIOD_REQUEST,
      option
    };
  }
  function success(response) {
    return { type: officerConstants.MANAGE_REAGISTER_PERIOD_SUCCESS, response };
  }
  function failure(error) {
    return { type: officerConstants.MANAGE_REAGISTER_PERIOD_FAILURE, error };
  }
}
