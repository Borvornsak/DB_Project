import { studentService } from "../services";
import { studentConstants, userConstants } from "../constants";
import { alertActions } from "./";

export const studentActions = {
  getGrade,
  getInfo,
  getAvailCourse,
  getCourseSection,
  getCoursePendingList,
  registerCourse,
  getRegisterResult
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

function getCourseSection(courseId, year, semester) {
  return dispatch => {
    dispatch(request(courseId, year, semester));

    studentService.getCourseSection(courseId, year, semester).then(
      section => {
        dispatch(success(section));
        dispatch(alertActions.clear());
      },
      error => {
        dispatch(failure(error));
        dispatch(alertActions.error("Can't retrive section"));
      }
    );
  };
  function request(courseId, year, semester) {
    return {
      type: studentConstants.SECTION_REQUEST,
      courseId,
      year,
      semester
    };
  }
  function success(section) {
    return { type: studentConstants.SECTION_SUCCESS, section };
  }
  function failure(error) {
    return { type: studentConstants.SECTION_FAILURE, error };
  }
}

function getCoursePendingList(id) {
  return dispatch => {
    dispatch(request(id));

    studentService.getCoursePendingList(id).then(
      registerResult => {
        dispatch(success(registerResult));
        dispatch(alertActions.clear());
      },
      error => {
        dispatch(failure(error));
        dispatch(alertActions.error("Can't retrive register course"));
      }
    );
  };
  function request(id) {
    return {
      type: studentConstants.GET_REGISTER_COURSE_REQUEST,
      id
    };
  }
  function success(register) {
    return { type: studentConstants.GET_REGISTER_COURSE_SUCCESS, register };
  }
  function failure(error) {
    return { type: studentConstants.GET_REGISTER_COURSE_FAILURE, error };
  }
}

function registerCourse(id, courseList) {
  return dispatch => {
    dispatch(request(id, courseList));

    studentService.registerCourse(id, courseList).then(
      registerResult => {
        console.log("regis", registerResult);
        if (registerResult.success) {
          dispatch(success(registerResult));
          dispatch(alertActions.clear());
        } else {
          dispatch(failure(registerResult));
        }
      },
      error => {
        dispatch(alertActions.error("register FAIL!!!"));
      }
    );
  };
  function request(id, courseList) {
    return {
      type: studentConstants.REGISTER_COURSE_REQUEST,
      id,
      courseList
    };
  }
  function success(register) {
    return { type: studentConstants.REGISTER_COURSE_SUCCESS, register };
  }
  function failure(error) {
    return { type: studentConstants.REGISTER_COURSE_FAILURE, error };
  }
}

function getRegisterResult(id) {
  return dispatch => {
    dispatch(request(id));

    studentService.getRegisterResult(id).then(
      registerResult => {
        dispatch(success(registerResult));
        dispatch(alertActions.clear());
      },
      error => {
        dispatch(failure(error));
        dispatch(alertActions.error("Can't retrive register course"));
      }
    );
  };
  function request(id) {
    return {
      type: studentConstants.GET_REGISTER_COURSE_REQUEST,
      id
    };
  }
  function success(register) {
    return { type: studentConstants.GET_REGISTER_COURSE_SUCCESS, register };
  }
  function failure(error) {
    return { type: studentConstants.GET_REGISTER_COURSE_FAILURE, error };
  }
}
