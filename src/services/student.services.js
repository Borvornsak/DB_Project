export const studentService = {
  getGrade,
  getInfo,
  getAvailCourse,
  getCourseSection,
  registerCourse
};

const apiPath = "http://localhost:7555/student";

const delay = time => result =>
  new Promise(resolve => setTimeout(() => resolve(result), time));

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

function registerCourse(id, courseId, section, semester, year) {
  const requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      id,
      courseId,
      section,
      semester,
      year
    })
  };

  const url = `${apiPath}/register`;
  return fetch(url, requestOptions)
    .then(delay(1000))
    .then(response => {
      if (!response.ok) {
        return Promise.reject(response.statusText);
      }
      return response.json();
    });
}
