import { studentConstants } from "../constants";

const initialState = {};

export function register(state = initialState, action) {
  switch (action.type) {
    case studentConstants.REGISTER_REQUEST:
      return {
        registering: true,
        id: action.id
      };
    case studentConstants.REGISTER_SUCCESS:
      return {
        ...state,
        ...action.register
      };
    case studentConstants.REGISTER_FAILURE:
      return {};
    default:
      return state;
  }
}
