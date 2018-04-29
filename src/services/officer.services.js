export const officerService = {
  manageRegisterPeriod,
  getRequestList,
  submitRequest
};

const apiPath = "http://localhost:7555/officer";

function manageRegisterPeriod(option) {
  const requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      option
    })
  };
  const url = `${apiPath}/manageRegisterPeriod`;
  return fetch(url, requestOptions).then(response => {
    if (!response.ok) {
      return Promise.reject(response.statusText);
    }
    return response;
  });
}

function getRequestList() {
  const requestOptions = {
    method: "GET"
  };
  const url = `${apiPath}/getRequestList`;
  return fetch(url, requestOptions).then(response => {
    if (!response.ok) {
      return Promise.reject(response.statusText);
    }
    return response.json();
  });
}

function submitRequest(barcode, status) {
  const requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      barcode,
      status
    })
  };
  const url = `${apiPath}/submitRequest`;
  return fetch(url, requestOptions).then(response => {
    if (!response.ok) {
      return Promise.reject(response.statusText);
    }
    return response.json();
  });
}
