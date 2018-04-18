export const studentService = {
  getGrade
};

function getGrade(id) {
  const requestOptions = {
    method: "GET"
  };
  const url = `http://localhost:7555/user/${id}/grade`;
  return fetch(url, requestOptions).then(response => {
    if (!response.ok) {
      return Promise.reject(response.statusText);
    }
    return response.json();
  });
}
