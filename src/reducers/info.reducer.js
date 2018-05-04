import { userConstants } from "../constants";

const initialState = {};

export function info(state = initialState, action) {
  switch (action.type) {
    case userConstants.INFO_REQUEST:
      return {
        requesting: true,
        id: action.id
      };
    case userConstants.INFO_SUCCESS:
      return {
        ...action.info
      };
    case userConstants.INFO_FAILURE:
      return {};
    default:
      return state;
  }
}
