webpackHotUpdate(0,{

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// Abstraction of the fetch api

var api = function api(body, url, method, headers) {
  return new Promise(function (resolve) {
    var newHeaders = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    fetch(url, { method: method,
      body: body,
      headers: headers
    }).then(function (response) {
      return response.json();
    }).then(function (response) {
      console.log(response, '==============>>>>');
      resolve(response);
    });
  });
};

exports.default = api;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9oZWxwZXJzL2FwaS5qcz84OTQzIl0sIm5hbWVzIjpbImFwaSIsImJvZHkiLCJ1cmwiLCJtZXRob2QiLCJoZWFkZXJzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJuZXdIZWFkZXJzIiwiSGVhZGVycyIsImFwcGVuZCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsTUFBTSxTQUFOQSxHQUFNLENBQUNDLElBQUQsRUFBT0MsR0FBUCxFQUFZQyxNQUFaLEVBQW9CQyxPQUFwQjtBQUFBLFNBQWlDLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQWE7QUFDcEUsUUFBTUMsYUFBYSxJQUFJQyxPQUFKLEVBQW5CO0FBQ0FKLFlBQVFLLE1BQVIsQ0FBZSxjQUFmLEVBQStCLG1DQUEvQjtBQUNBQyxVQUFNUixHQUFOLEVBQVcsRUFBRUMsY0FBRjtBQUNURixnQkFEUztBQUVURztBQUZTLEtBQVgsRUFJQ08sSUFKRCxDQUlNO0FBQUEsYUFBWUMsU0FBU0MsSUFBVCxFQUFaO0FBQUEsS0FKTixFQUtDRixJQUxELENBS00sVUFBQ0MsUUFBRCxFQUFjO0FBQ2xCRSxjQUFRQyxHQUFSLENBQVlILFFBQVosRUFBc0Isb0JBQXRCO0FBQ0FOLGNBQVFNLFFBQVI7QUFDRCxLQVJEO0FBU0QsR0FaNEMsQ0FBakM7QUFBQSxDQUFaOztrQkFjZVosRyIsImZpbGUiOiIwLjc1MTI1ZWZlOWQxMjVjMzJlY2VhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBYnN0cmFjdGlvbiBvZiB0aGUgZmV0Y2ggYXBpXG5cbmNvbnN0IGFwaSA9IChib2R5LCB1cmwsIG1ldGhvZCwgaGVhZGVycykgPT4gKG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gIGNvbnN0IG5ld0hlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuICBmZXRjaCh1cmwsIHsgbWV0aG9kLFxuICAgIGJvZHksXG4gICAgaGVhZGVyc1xuICB9KVxuICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLCAnPT09PT09PT09PT09PT0+Pj4+Jyk7XG4gICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gIH0pO1xufSkpO1xuXG5leHBvcnQgZGVmYXVsdCBhcGk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvanMvY29tcG9uZW50cy9oZWxwZXJzL2FwaS5qcyJdLCJzb3VyY2VSb290IjoiIn0=