import { studentConstants } from "../constants";

const initialState = {};

export function payment(state = initialState, action) {
  switch (action.type) {
    case studentConstants.GET_PAYMENT_REQUEST:
      return {
        requesting: true,
        id: action.id
      };
    case studentConstants.GET_PAYMENT_SUCCESS:
      return { paymentList: action.payment };
    case studentConstants.GET_PAYMENT_FAILURE:
      return {};
    default:
      return state;
  }
}
