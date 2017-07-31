// Abstraction of the fetch api

const api = (body, url, method, headers = null) => (new Promise((resolve) => {
  let newHeaders = new Headers();
  newHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
  if (headers !== null) {
    newHeaders = headers;
  }


  if (body === '' || body === null) {
    fetch(url, { method,
      headers: newHeaders
    })
    .then(response => response.json())
    .then((response) => {
      console.log(response, '==============>>>>');
      resolve(response);
    });
  } else {
    fetch(url, { method,
      body,
      headers: newHeaders
    })
    .then(response => response.json())
    .then((response) => {
      console.log(response, '==============>>>>');
      resolve(response);
    });
  }
}));

export default api;
