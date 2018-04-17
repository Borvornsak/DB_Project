export const userService = {
  login,
  logout
};

function login(username, password) {
  const requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify({ username, password })
  };
  return fetch("http://localhost:7555/login", requestOptions).then(response => {
    if (!response.ok) {
      return Promise.reject(response.statusText);
    }
    return response;
  });
}

function logout() {
  // // remove user from local storage to log user out
  // localStorage.removeItem('user');
  return true;
}
