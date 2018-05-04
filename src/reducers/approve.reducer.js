import { studentConstants } from "../constants";

const initialState = {};

export function approve(state = initialState, action) {
  switch (action.type) {
    case studentConstants.GET_APPROVE_COURSE_REQUEST:
      return {
        requesting: true,
        id: action.id
      };
    case studentConstants.GET_APPROVE_COURSE_SUCCESS:
      return { approveList: action.approveList };
    case studentConstants.GET_APPROVE_COURSE_FAILURE:
      return state;

    case studentConstants.ADD_DROP_COURSE_REQUEST:
      return {
        ...state,
        requesting: true,
        id: action.id
      };
    case studentConstants.ADD_DROP_COURSE_SUCCESS:
      return { approveList: action.approveList };
    case studentConstants.ADD_DROP_COURSE_FAILURE:
      return state;

    default:
      return state;
  }
}
