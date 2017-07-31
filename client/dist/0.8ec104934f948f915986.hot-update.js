webpackHotUpdate(0,{

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// Abstraction of the fetch api

var api = function api(body, url, method) {
  return Promise = function Promise(resolve, reject) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    fetch(url, { method: method,
      body: body,
      headers: headers
    }).then(function (response) {
      return response.json();
    }).then(function (response) {
      console.log(response, '==============>>>>');
      return response;
    });
  };
};

exports.default = api;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9oZWxwZXJzL2FwaS5qcz84OTQzIl0sIm5hbWVzIjpbImFwaSIsImJvZHkiLCJ1cmwiLCJtZXRob2QiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImhlYWRlcnMiLCJIZWFkZXJzIiwiYXBwZW5kIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxNQUFNLFNBQU5BLEdBQU0sQ0FBQ0MsSUFBRCxFQUFPQyxHQUFQLEVBQVlDLE1BQVo7QUFBQSxTQUF5QkMsVUFBVSxpQkFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ2xFLFFBQU1DLFVBQVUsSUFBSUMsT0FBSixFQUFoQjtBQUNBRCxZQUFRRSxNQUFSLENBQWUsY0FBZixFQUErQixtQ0FBL0I7QUFDQUMsVUFBTVIsR0FBTixFQUFXLEVBQUVDLGNBQUY7QUFDVEYsZ0JBRFM7QUFFVE07QUFGUyxLQUFYLEVBSUNJLElBSkQsQ0FJTTtBQUFBLGFBQVlDLFNBQVNDLElBQVQsRUFBWjtBQUFBLEtBSk4sRUFLQ0YsSUFMRCxDQUtNLFVBQUNDLFFBQUQsRUFBYztBQUNsQkUsY0FBUUMsR0FBUixDQUFZSCxRQUFaLEVBQXNCLG9CQUF0QjtBQUNBLGFBQU9BLFFBQVA7QUFDRCxLQVJEO0FBU0QsR0FaVztBQUFBLENBQVo7O2tCQWNlWixHIiwiZmlsZSI6IjAuOGVjMTA0OTM0Zjk0OGY5MTU5ODYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEFic3RyYWN0aW9uIG9mIHRoZSBmZXRjaCBhcGlcblxuY29uc3QgYXBpID0gKGJvZHksIHVybCwgbWV0aG9kKSA9PiAoIFByb21pc2UgPSAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuICBmZXRjaCh1cmwsIHsgbWV0aG9kLFxuICAgIGJvZHksXG4gICAgaGVhZGVyc1xuICB9KVxuICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLCAnPT09PT09PT09PT09PT0+Pj4+Jyk7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9KTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBhcGk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvanMvY29tcG9uZW50cy9oZWxwZXJzL2FwaS5qcyJdLCJzb3VyY2VSb290IjoiIn0=