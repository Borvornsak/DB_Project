import { studentConstants } from "../constants";

const initialState = {};

export function section(state = initialState, action) {
  switch (action.type) {
    case studentConstants.SECTION_REQUEST:
      return {
        requesting: true,
        courseId: action.courseId,
        year: action.year,
        semester: action.semester
      };
    case studentConstants.SECTION_SUCCESS:
      return action.section;
    case studentConstants.SECTION_FAILURE:
      return {};
    default:
      return state;
  }
}
