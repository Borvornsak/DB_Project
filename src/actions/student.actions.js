import { studentService } from "../services";
import { studentConstants, userConstants } from "../constants";
import { alertActions } from "./";

export const studentActions = {
  getGrade,
  getInfo,
  getAvailCourse
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
    return { type: studentConstants.GRADE_REQUEST, id };
  }
  function success(grade) {
    return { type: studentConstants.GRADE_SUCCESS, grade };
  }
  function failure(error) {
    return { type: studentConstants.GRADE_FAILURE, error };
  }
}

function getInfo(id) {
  return dispatch => {
    dispatch(request(id));

    studentService.getInfo(id).then(
      info => {
        dispatch(success(info));
        dispatch(alertActions.clear());
      },
      error => {
        dispatch(failure(error));
        dispatch(alertActions.error("Can't retrive info"));
      }
    );
  };
  function request(id) {
    return { type: userConstants.INFO_REQUEST, id };
  }
  function success(info) {
    return { type: userConstants.INFO_SUCCESS, info };
  }
  function failure(error) {
    return { type: userConstants.INFO_FAILURE, error };
  }
}

function getAvailCourse(year, semester) {
  return dispatch => {
    dispatch(request(year, semester));

    studentService.getAvailCourse(year, semester).then(
      course => {
        dispatch(success(course));
        dispatch(alertActions.clear());
      },
      error => {
        dispatch(failure(error));
        dispatch(alertActions.error("Can't retrive avalible course"));
      }
    );
  };
  function request(year, semester) {
    return { type: studentConstants.COURSE_REQUEST, year, semester };
  }
  function success(course) {
    return { type: studentConstants.COURSE_SUCCESS, course };
  }
  function failure(error) {
    return { type: studentConstants.COURSE_FAILURE, error };
  }
}
