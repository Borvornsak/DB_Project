import { officerConstants } from "../constants";

const initialState = {};

export function request(state = initialState, action) {
  switch (action.type) {
    case officerConstants.GET_REQUEST_REQUEST:
      return {
        requesting: true
      };
    case officerConstants.GET_REQUEST_SUCCESS:
      return { requestList: action.requestList };
    case officerConstants.GET_REQUEST_FAILURE:
      return state;

    case officerConstants.SUBMIT_REQUEST_REQUEST:
      return {
        requesting: true,
        barcode: action.barcode,
        status: action.status
      };
    case officerConstants.SUBMIT_REQUEST_SUCCESS:
      return {
        requestList: action.requestList
      };
    case officerConstants.SUBMIT_REQUEST_FAILURE:
      return state;
    default:
      return state;
  }
}
