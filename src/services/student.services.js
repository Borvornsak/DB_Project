export const studentService = {
  getGrade,
  getInfo,
  getAvailCourse,
  getCourseSection
};

const apiPath = "http://localhost:7555/student";

function getGrade(id) {
  const requestOptions = {
    method: "GET"
  };
  const url = `${apiPath}/${id}/grade`;
  return fetch(url, requestOptions).then(response => {
    if (!response.ok) {
      return Promise.reject(response.statusText);
    }
    return response.json();
  });
}

function getInfo(id) {
  const requestOptions = {
    method: "GET"
  };
  const url = `${apiPath}/${id}/info`;
  return fetch(url, requestOptions).then(response => {
    if (!response.ok) {
      return Promise.reject(response.statusText);
    }
    return response.json();
  });
}

function getAvailCourse(year, semester) {
  const requestOptions = {
    method: "GET"
  };
  const url = `${apiPath}/getAvailCourse/${year}/${semester}`;
  return fetch(url, requestOptions).then(response => {
    if (!response.ok) {
      return Promise.reject(response.statusText);
    }
    return response.json();
  });
}

function getCourseSection(courseId, year, semester) {
  const requestOptions = {
    method: "GET"
  };
  const url = `${apiPath}/getCourseSection/${courseId}/${year}/${semester}`;
  return fetch(url, requestOptions).then(response => {
    if (!response.ok) {
      return Promise.reject(response.statusText);
    }
    return response.json();
  });
}
