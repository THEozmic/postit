// Abstraction of the fetch api

const api = (body, url, method) => (new Promise((resolve) => {
  let headers = new Headers();
  headers.append('Content-Type', 'application/x-www-form-urlencoded');
  headers.append('x-access-token', JSON.parse(sessionStorage.getItem('user')).token);
  if (body === '' || body === null) {
    fetch(url, { method,
      headers
    })
    .then(response => response.json())
    .then((response) => {
      console.log(response, '==============>>>>');
      resolve(response);
    });
  } else {
    fetch(url, { method,
      body,
      headers
    })
    .then(response => response.json())
    .then((response) => {
      console.log(response, '==============>>>>');
      resolve(response);
    });
  }
}));

export default api;
