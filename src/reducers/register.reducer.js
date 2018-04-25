import { studentConstants } from "../constants";

const initialState = {
  registerResult: {
    success: false,
    detail: []
  }
};

export function register(state = initialState, action) {
  switch (action.type) {
    case studentConstants.GET_REGISTER_COURSE_REQUEST:
      return {
        ...state,
        requesting: true,
        id: action.id
      };
    case studentConstants.REGISTER_COURSE_REQUEST:
      return {
        ...initialState,
        requesting: true,
        id: action.id,
        courseList: action.courseList
      };
    case studentConstants.REGISTER_COURSE_SUCCESS:
      return {
        registerResult: action.register
      };
    case studentConstants.GET_REGISTER_COURSE_SUCCESS:
      return {
        registerResult: {
          success: action.register.length > 0 ? true : false,
          detail: action.register
        }
      };
    case studentConstants.REGISTER_COURSE_FAILURE:
      return {
        registerResult: { success: false, detail: action.error.detail }
      };
    case studentConstants.GET_REGISTER_COURSE_FAILURE:
      return state;
    default:
      return state;
  }
}
