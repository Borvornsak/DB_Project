import { studentConstants } from "../constants";

const initialState = {};

export function schedule(state = initialState, action) {
  switch (action.type) {
    case studentConstants.GET_SCHEDULE_REQUEST:
      return {
        requesting: true,
        id: action.id
      };
    case studentConstants.GET_SCHEDULE_SUCCESS:
      return { scheduleList: action.schedule };
    case studentConstants.GET_SCHEDULE_FAILURE:
      return {};
    default:
      return state;
  }
}
