import { teacherService } from "../services";
import { teacherConstants } from "../constants";
import { alertActions } from "./";

export const teacherActions = {
  getAdvisee
};

function getAdvisee(id) {
  return dispatch => {
    dispatch(request(id));

    teacherService.getAdviseeGrade(id).then(
      advisee => {
        dispatch(success(advisee));
        dispatch(alertActions.clear());
      },
      error => {
        dispatch(failure(error));
        dispatch(alertActions.error("Can't retrive advisee"));
      }
    );
  };
  function request(id) {
    return {
      type: teacherConstants.ADVISEE_REQUEST,
      id
    };
  }
  function success(advisee) {
    return { type: teacherConstants.ADVISEE_SUCCESS, advisee };
  }
  function failure(error) {
    return { type: teacherConstants.ADVISEE_FAILURE, error };
  }
}
