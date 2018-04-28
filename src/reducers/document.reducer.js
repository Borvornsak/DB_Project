import { studentConstants } from "../constants";

const initialState = {};

export function document(state = initialState, action) {
  switch (action.type) {
    case studentConstants.GET_DOCUMENT_REQUEST:
      return {
        requesting: true,
        id: action.id
      };
    case studentConstants.GET_DOCUMENT_SUCCESS:
      return {
        ...action.documentList
      };
    case studentConstants.GET_DOCUMENT_FAILURE:
      return {};
    default:
      return state;
  }
}
