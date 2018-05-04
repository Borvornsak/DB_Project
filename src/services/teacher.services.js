export const teacherService = { getAdviseeGrade };

const apiPath = "http://localhost:7555/teacher";

function getAdviseeGrade(id) {
  const requestOptions = {
    method: "GET"
  };
  const url = `${apiPath}/${id}/adviseeGrade`;
  return fetch(url, requestOptions).then(response => {
    if (!response.ok) {
      return Promise.reject(response.statusText);
    }
    return response.json();
  });
}
