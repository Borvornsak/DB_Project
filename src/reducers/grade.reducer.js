import { studentConstants } from "../constants";

const initialState = {};

export function grade(state = initialState, action) {
  switch (action.type) {
    case studentConstants.GRADE_REQUEST:
      return {
        requesting: true,
        id: action.id
      };
    case studentConstants.GRADE_SUCCESS:
      return {
        ...action.grade
      };
    case studentConstants.GRADE_FAILURE:
      return {};
    default:
      return state;
  }
}
