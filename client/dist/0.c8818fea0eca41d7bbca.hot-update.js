webpackHotUpdate(0,{

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// Abstraction of the fetch api

var api = function api(body, url, method) {
  var headers = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  return new Promise(function (resolve) {
    var newHeaders = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('x-access-token', JSON.parse(sessionStorage.getItem('user')).token);
    if (headers !== null) {
      newHeaders = headers;
    }

    if (body === '' || body === null) {
      fetch(url, { method: method,
        headers: newHeaders
      }).then(function (response) {
        return response.json();
      }).then(function (response) {
        console.log(response, '==============>>>>');
        resolve(response);
      });
    } else {
      fetch(url, { method: method,
        body: body,
        headers: newHeaders
      }).then(function (response) {
        return response.json();
      }).then(function (response) {
        console.log(response, '==============>>>>');
        resolve(response);
      });
    }
  });
};

exports.default = api;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9oZWxwZXJzL2FwaS5qcz84OTQzIl0sIm5hbWVzIjpbImFwaSIsImJvZHkiLCJ1cmwiLCJtZXRob2QiLCJoZWFkZXJzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJuZXdIZWFkZXJzIiwiSGVhZGVycyIsImFwcGVuZCIsIkpTT04iLCJwYXJzZSIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsInRva2VuIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxNQUFNLFNBQU5BLEdBQU0sQ0FBQ0MsSUFBRCxFQUFPQyxHQUFQLEVBQVlDLE1BQVo7QUFBQSxNQUFvQkMsT0FBcEIsdUVBQThCLElBQTlCO0FBQUEsU0FBd0MsSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBYTtBQUMzRSxRQUFJQyxhQUFhLElBQUlDLE9BQUosRUFBakI7QUFDQUosWUFBUUssTUFBUixDQUFlLGNBQWYsRUFBK0IsbUNBQS9CO0FBQ0FMLFlBQVFLLE1BQVIsQ0FBZSxnQkFBZixFQUFpQ0MsS0FBS0MsS0FBTCxDQUFXQyxlQUFlQyxPQUFmLENBQXVCLE1BQXZCLENBQVgsRUFBMkNDLEtBQTVFO0FBQ0EsUUFBSVYsWUFBWSxJQUFoQixFQUFzQjtBQUNwQkcsbUJBQWFILE9BQWI7QUFDRDs7QUFFRCxRQUFJSCxTQUFTLEVBQVQsSUFBZUEsU0FBUyxJQUE1QixFQUFrQztBQUNoQ2MsWUFBTWIsR0FBTixFQUFXLEVBQUVDLGNBQUY7QUFDVEMsaUJBQVNHO0FBREEsT0FBWCxFQUdDUyxJQUhELENBR007QUFBQSxlQUFZQyxTQUFTQyxJQUFULEVBQVo7QUFBQSxPQUhOLEVBSUNGLElBSkQsQ0FJTSxVQUFDQyxRQUFELEVBQWM7QUFDbEJFLGdCQUFRQyxHQUFSLENBQVlILFFBQVosRUFBc0Isb0JBQXRCO0FBQ0FYLGdCQUFRVyxRQUFSO0FBQ0QsT0FQRDtBQVFELEtBVEQsTUFTTztBQUNMRixZQUFNYixHQUFOLEVBQVcsRUFBRUMsY0FBRjtBQUNURixrQkFEUztBQUVURyxpQkFBU0c7QUFGQSxPQUFYLEVBSUNTLElBSkQsQ0FJTTtBQUFBLGVBQVlDLFNBQVNDLElBQVQsRUFBWjtBQUFBLE9BSk4sRUFLQ0YsSUFMRCxDQUtNLFVBQUNDLFFBQUQsRUFBYztBQUNsQkUsZ0JBQVFDLEdBQVIsQ0FBWUgsUUFBWixFQUFzQixvQkFBdEI7QUFDQVgsZ0JBQVFXLFFBQVI7QUFDRCxPQVJEO0FBU0Q7QUFDRixHQTVCbUQsQ0FBeEM7QUFBQSxDQUFaOztrQkE4QmVqQixHIiwiZmlsZSI6IjAuYzg4MThmZWEwZWNhNDFkN2JiY2EuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEFic3RyYWN0aW9uIG9mIHRoZSBmZXRjaCBhcGlcblxuY29uc3QgYXBpID0gKGJvZHksIHVybCwgbWV0aG9kLCBoZWFkZXJzID0gbnVsbCkgPT4gKG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gIGxldCBuZXdIZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcbiAgaGVhZGVycy5hcHBlbmQoJ3gtYWNjZXNzLXRva2VuJywgSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpLnRva2VuKTtcbiAgaWYgKGhlYWRlcnMgIT09IG51bGwpIHtcbiAgICBuZXdIZWFkZXJzID0gaGVhZGVycztcbiAgfVxuXG4gIGlmIChib2R5ID09PSAnJyB8fCBib2R5ID09PSBudWxsKSB7XG4gICAgZmV0Y2godXJsLCB7IG1ldGhvZCxcbiAgICAgIGhlYWRlcnM6IG5ld0hlYWRlcnNcbiAgICB9KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLCAnPT09PT09PT09PT09PT0+Pj4+Jyk7XG4gICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBmZXRjaCh1cmwsIHsgbWV0aG9kLFxuICAgICAgYm9keSxcbiAgICAgIGhlYWRlcnM6IG5ld0hlYWRlcnNcbiAgICB9KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLCAnPT09PT09PT09PT09PT0+Pj4+Jyk7XG4gICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICB9KTtcbiAgfVxufSkpO1xuXG5leHBvcnQgZGVmYXVsdCBhcGk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvanMvY29tcG9uZW50cy9oZWxwZXJzL2FwaS5qcyJdLCJzb3VyY2VSb290IjoiIn0=