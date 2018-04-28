import { studentConstants } from "../constants";

const initialState = {};

export function document(state = initialState, action) {
  switch (action.type) {
    case studentConstants.GET_DOCUMENT_REQUEST:
      return {
        requesting: true,
        id: action.id
      };
    case studentConstants.REQUEST_DOCUMENT_REQUEST:
      return {
        ...state,
        requesting: true,
        id: action.id,
        docId: action.id
      };
    case studentConstants.GET_DOCUMENT_SUCCESS:
      return {
        ...action.documentList
      };
    case studentConstants.REQUEST_DOCUMENT_SUCCESS:
      return {
        docList: state.docList,
        requestList: action.requestList
      };
    case studentConstants.GET_DOCUMENT_FAILURE:
    case studentConstants.REQUEST_DOCUMENT_FAILURE:
      return state;
    default:
      return state;
  }
}
