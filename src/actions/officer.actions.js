import { officerService } from "../services";
import { officerConstants } from "../constants";
import { alertActions } from "./";

export const officerActions = {
  manageRegisterPeriod,
  getRequestList,
  submitRequest
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

function getRequestList() {
  return dispatch => {
    dispatch(request());

    officerService.getRequestList().then(
      requestList => {
        dispatch(success(requestList));
        dispatch(alertActions.clear());
      },
      error => {
        console.log(error);
        dispatch(failure(error));
        dispatch(alertActions.error("Can't get request list"));
      }
    );
  };
  function request() {
    return {
      type: officerConstants.GET_REQUEST_REQUEST
    };
  }
  function success(requestList) {
    return { type: officerConstants.GET_REQUEST_SUCCESS, requestList };
  }
  function failure(error) {
    return { type: officerConstants.GET_REQUEST_FAILURE, error };
  }
}

function submitRequest(barcode, status) {
  return dispatch => {
    dispatch(request(barcode, status));

    officerService.submitRequest(barcode, status).then(
      requestList => {
        dispatch(success(requestList));
        dispatch(alertActions.clear());
      },
      error => {
        console.log(error);
        dispatch(failure(error));
        dispatch(alertActions.error("Can't submit request"));
      }
    );
  };
  function request(barcode, status) {
    return {
      type: officerConstants.SUBMIT_REQUEST_REQUEST,
      barcode,
      status
    };
  }
  function success(requestList) {
    return { type: officerConstants.SUBMIT_REQUEST_SUCCESS, requestList };
  }
  function failure(error) {
    return { type: officerConstants.SUBMIT_REQUEST_FAILURE, error };
  }
}
