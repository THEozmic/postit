webpackHotUpdate(0,{

/***/ 131:
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
    newHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
    if (headers !== null) {
      newHeaders = headers;
    }

    console;

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
        newHeaders: newHeaders
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9oZWxwZXJzL2FwaS5qcz84OTQzIl0sIm5hbWVzIjpbImFwaSIsImJvZHkiLCJ1cmwiLCJtZXRob2QiLCJoZWFkZXJzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJuZXdIZWFkZXJzIiwiSGVhZGVycyIsImFwcGVuZCIsImNvbnNvbGUiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsTUFBTSxTQUFOQSxHQUFNLENBQUNDLElBQUQsRUFBT0MsR0FBUCxFQUFZQyxNQUFaO0FBQUEsTUFBb0JDLE9BQXBCLHVFQUE4QixJQUE5QjtBQUFBLFNBQXdDLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQWE7QUFDM0UsUUFBSUMsYUFBYSxJQUFJQyxPQUFKLEVBQWpCO0FBQ0FELGVBQVdFLE1BQVgsQ0FBa0IsY0FBbEIsRUFBa0MsbUNBQWxDO0FBQ0EsUUFBSUwsWUFBWSxJQUFoQixFQUFzQjtBQUNwQkcsbUJBQWFILE9BQWI7QUFDRDs7QUFFRE07O0FBRUEsUUFBSVQsU0FBUyxFQUFULElBQWVBLFNBQVMsSUFBNUIsRUFBa0M7QUFDaENVLFlBQU1ULEdBQU4sRUFBVyxFQUFFQyxjQUFGO0FBQ1RDLGlCQUFTRztBQURBLE9BQVgsRUFHQ0ssSUFIRCxDQUdNO0FBQUEsZUFBWUMsU0FBU0MsSUFBVCxFQUFaO0FBQUEsT0FITixFQUlDRixJQUpELENBSU0sVUFBQ0MsUUFBRCxFQUFjO0FBQ2xCSCxnQkFBUUssR0FBUixDQUFZRixRQUFaLEVBQXNCLG9CQUF0QjtBQUNBUCxnQkFBUU8sUUFBUjtBQUNELE9BUEQ7QUFRRCxLQVRELE1BU087QUFDTEYsWUFBTVQsR0FBTixFQUFXLEVBQUVDLGNBQUY7QUFDVEYsa0JBRFM7QUFFVE07QUFGUyxPQUFYLEVBSUNLLElBSkQsQ0FJTTtBQUFBLGVBQVlDLFNBQVNDLElBQVQsRUFBWjtBQUFBLE9BSk4sRUFLQ0YsSUFMRCxDQUtNLFVBQUNDLFFBQUQsRUFBYztBQUNsQkgsZ0JBQVFLLEdBQVIsQ0FBWUYsUUFBWixFQUFzQixvQkFBdEI7QUFDQVAsZ0JBQVFPLFFBQVI7QUFDRCxPQVJEO0FBU0Q7QUFDRixHQTdCbUQsQ0FBeEM7QUFBQSxDQUFaOztrQkErQmViLEciLCJmaWxlIjoiMC5hNjFhNzJhNDQxNTlmYzk2ZWQwMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQWJzdHJhY3Rpb24gb2YgdGhlIGZldGNoIGFwaVxuXG5jb25zdCBhcGkgPSAoYm9keSwgdXJsLCBtZXRob2QsIGhlYWRlcnMgPSBudWxsKSA9PiAobmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgbGV0IG5ld0hlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICBuZXdIZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuICBpZiAoaGVhZGVycyAhPT0gbnVsbCkge1xuICAgIG5ld0hlYWRlcnMgPSBoZWFkZXJzO1xuICB9XG5cbiAgY29uc29sZVxuXG4gIGlmIChib2R5ID09PSAnJyB8fCBib2R5ID09PSBudWxsKSB7XG4gICAgZmV0Y2godXJsLCB7IG1ldGhvZCxcbiAgICAgIGhlYWRlcnM6IG5ld0hlYWRlcnNcbiAgICB9KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLCAnPT09PT09PT09PT09PT0+Pj4+Jyk7XG4gICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBmZXRjaCh1cmwsIHsgbWV0aG9kLFxuICAgICAgYm9keSxcbiAgICAgIG5ld0hlYWRlcnNcbiAgICB9KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLCAnPT09PT09PT09PT09PT0+Pj4+Jyk7XG4gICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICB9KTtcbiAgfVxufSkpO1xuXG5leHBvcnQgZGVmYXVsdCBhcGk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvanMvY29tcG9uZW50cy9oZWxwZXJzL2FwaS5qcyJdLCJzb3VyY2VSb290IjoiIn0=