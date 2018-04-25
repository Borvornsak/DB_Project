import { officerConstants } from "../constants";

const initialState = {};

export function registerPeriod(state = initialState, action) {
  switch (action.type) {
    case officerConstants.MANAGE_REAGISTER_PERIOD_REQUEST:
      return {
        requesting: true,
        option: action.option
      };
    case officerConstants.MANAGE_REAGISTER_PERIOD_SUCCESS:
      return {};
    case officerConstants.MANAGE_REAGISTER_PERIOD_FAILURE:
      return {};
    default:
      return state;
  }
}
