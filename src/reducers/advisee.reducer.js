import { teacherConstants } from "../constants";

const initialState = {};

export function advisee(state = initialState, action) {
  switch (action.type) {
    case teacherConstants.ADVISEE_REQUEST:
      return {
        requesting: true,
        id: action.id
      };
    case teacherConstants.ADVISEE_SUCCESS:
      return {
        adviseeList: action.advisee
      };
    case teacherConstants.ADVISEE_FAILURE:
      return {};
    default:
      return state;
  }
}
