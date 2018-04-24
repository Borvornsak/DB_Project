import { studentConstants } from "../constants";

const initialState = {};

export function registerResult(state = initialState, action) {
  switch (action.type) {
    case studentConstants.GET_REGISTER_COURSE_REQUEST:
      return {
        requesting: true,
        id: action.id
      };
    case studentConstants.GET_REGISTER_COURSE_SUCCESS:
      return {
        registerResultList: action.registerResult
      };
    case studentConstants.GET_REGISTER_COURSE_FAILURE:
      return {};
    default:
      return state;
  }
}
