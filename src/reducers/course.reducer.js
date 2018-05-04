import { studentConstants } from "../constants";

const initialState = {};

export function course(state = initialState, action) {
  switch (action.type) {
    case studentConstants.COURSE_REQUEST:
      return {
        requesting: true,
        year: action.year,
        semester: action.semester
      };
    case studentConstants.COURSE_SUCCESS:
      return {
        courseList: action.course
      };
    case studentConstants.COURSE_FAILURE:
      return {};
    case studentConstants.COURSE_CLEAR:
      return {};
    default:
      return state;
  }
}
