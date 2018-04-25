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
        dispatch(success(option));
        dispatch(alertActions.clear());
      },
      error => {
        console.log(error);
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
  function success(option) {
    return { type: officerConstants.MANAGE_REAGISTER_PERIOD_SUCCESS, option };
  }
  function failure(error) {
    return { type: officerConstants.MANAGE_REAGISTER_PERIOD_FAILURE, error };
  }
}
