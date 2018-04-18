import { studentService } from "../services";
import { gradeConstants } from "../constants";
import { alertActions } from "./";

export const studentActions = {
  getGrade
};

function getGrade(id) {
  return dispatch => {
    dispatch(request({ id }));

    studentService.getGrade(id).then(
      grade => {
        dispatch(success(grade));
        dispatch(alertActions.clear());
      },
      error => {
        dispatch(failure(error));
        dispatch(alertActions.error("Can't retrive grade"));
      }
    );
  };

  function request(id) {
    return { type: gradeConstants.GRADE_REQUEST, id };
  }
  function success(grade) {
    return { type: gradeConstants.GRADE_SUCCESS, grade };
  }
  function failure(error) {
    return { type: gradeConstants.GRADE_FAILURE, error };
  }
}
