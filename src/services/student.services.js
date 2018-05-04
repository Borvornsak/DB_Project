export const studentService = {
  getGrade,
  getInfo,
  getAvailCourse,
  getCourseSection,
  getCoursePendingList,
  registerCourse,
  getRegisterResult,
  getDocumentList,
  requestDocument,
  getSchedule,
  addDropCourse,
  getApproveCourse,
  getPaymentStatus
};

const apiPath = "http://localhost:7555/student";

// const delay = time => result =>
//   new Promise(resolve => setTimeout(() => resolve(result), time));

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

function getCoursePendingList(id) {
  const requestOptions = {
    method: "GET"
  };
  const url = `${apiPath}/${id}/getCoursePendingList`;
  return fetch(url, requestOptions).then(response => {
    if (!response.ok) {
      return Promise.reject(response.statusText);
    }
    return response.json();
  });
}

function registerCourse(id, courseList) {
  const requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      id,
      courseList
    })
  };
  const url = `${apiPath}/registerCourse`;
  return fetch(url, requestOptions).then(response => {
    if (!response.ok) {
      return Promise.reject(response.statusText);
    }
    return response.json();
  });
}

function getRegisterResult(id) {
  const requestOptions = {
    method: "GET"
  };
  const url = `${apiPath}/${id}/getRegisterResult`;
  return fetch(url, requestOptions).then(response => {
    if (!response.ok) {
      return Promise.reject(response.statusText);
    }
    return response.json();
  });
}

function getDocumentList(id) {
  const requestOptions = {
    method: "GET"
  };
  const url = `${apiPath}/${id}/getDocumentList`;
  return fetch(url, requestOptions).then(response => {
    if (!response.ok) {
      return Promise.reject(response.statusText);
    }
    return response.json();
  });
}

function requestDocument(id, docId) {
  const requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      id,
      docId
    })
  };
  const url = `${apiPath}/requestDocument`;
  return fetch(url, requestOptions).then(response => {
    if (!response.ok) {
      return Promise.reject(response.statusText);
    }
    return response.json();
  });
}

function getSchedule(id) {
  const requestOptions = {
    method: "GET"
  };
  const url = `${apiPath}/${id}/getSchedule`;
  return fetch(url, requestOptions).then(response => {
    if (!response.ok) {
      return Promise.reject(response.statusText);
    }
    return response.json();
  });
}

function addDropCourse(id, courseList) {
  const requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      id,
      courseList
    })
  };
  const url = `${apiPath}/addDropCourse`;
  return fetch(url, requestOptions).then(response => {
    if (!response.ok) {
      return Promise.reject(response.statusText);
    }
    console.log("DONE");
    return response.json();
  });
}

function getApproveCourse(id) {
  const requestOptions = {
    method: "GET"
  };
  const url = `${apiPath}/${id}/getApproveCourse`;
  return fetch(url, requestOptions).then(response => {
    if (!response.ok) {
      return Promise.reject(response.statusText);
    }
    return response.json();
  });
}

function getPaymentStatus(id) {
  const requestOptions = {
    method: "GET"
  };
  const url = `${apiPath}/${id}/getPaymentStatus`;
  return fetch(url, requestOptions).then(response => {
    if (!response.ok) {
      return Promise.reject(response.statusText);
    }
    return response.json();
  });
}
