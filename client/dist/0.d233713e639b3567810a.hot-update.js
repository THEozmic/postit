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
    newHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
    if (headers !== null) {
      newHeaders = headers;
    }
    if (body === '') {}
    fetch(url, { method: method,
      body: body,
      newHeaders: newHeaders
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9oZWxwZXJzL2FwaS5qcz84OTQzIl0sIm5hbWVzIjpbImFwaSIsImJvZHkiLCJ1cmwiLCJtZXRob2QiLCJoZWFkZXJzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJuZXdIZWFkZXJzIiwiSGVhZGVycyIsImFwcGVuZCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsTUFBTSxTQUFOQSxHQUFNLENBQUNDLElBQUQsRUFBT0MsR0FBUCxFQUFZQyxNQUFaLEVBQW9CQyxPQUFwQjtBQUFBLFNBQWlDLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQWE7QUFDcEUsUUFBSUMsYUFBYSxJQUFJQyxPQUFKLEVBQWpCO0FBQ0FELGVBQVdFLE1BQVgsQ0FBa0IsY0FBbEIsRUFBa0MsbUNBQWxDO0FBQ0EsUUFBSUwsWUFBWSxJQUFoQixFQUFzQjtBQUNwQkcsbUJBQWFILE9BQWI7QUFDRDtBQUNELFFBQUlILFNBQVMsRUFBYixFQUFpQixDQUVoQjtBQUNEUyxVQUFNUixHQUFOLEVBQVcsRUFBRUMsY0FBRjtBQUNURixnQkFEUztBQUVUTTtBQUZTLEtBQVgsRUFJQ0ksSUFKRCxDQUlNO0FBQUEsYUFBWUMsU0FBU0MsSUFBVCxFQUFaO0FBQUEsS0FKTixFQUtDRixJQUxELENBS00sVUFBQ0MsUUFBRCxFQUFjO0FBQ2xCRSxjQUFRQyxHQUFSLENBQVlILFFBQVosRUFBc0Isb0JBQXRCO0FBQ0FOLGNBQVFNLFFBQVI7QUFDRCxLQVJEO0FBU0QsR0FsQjRDLENBQWpDO0FBQUEsQ0FBWjs7a0JBb0JlWixHIiwiZmlsZSI6IjAuZDIzMzcxM2U2MzliMzU2NzgxMGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEFic3RyYWN0aW9uIG9mIHRoZSBmZXRjaCBhcGlcblxuY29uc3QgYXBpID0gKGJvZHksIHVybCwgbWV0aG9kLCBoZWFkZXJzKSA9PiAobmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgbGV0IG5ld0hlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICBuZXdIZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuICBpZiAoaGVhZGVycyAhPT0gbnVsbCkge1xuICAgIG5ld0hlYWRlcnMgPSBoZWFkZXJzO1xuICB9XG4gIGlmIChib2R5ID09PSAnJykge1xuICAgIFxuICB9XG4gIGZldGNoKHVybCwgeyBtZXRob2QsXG4gICAgYm9keSxcbiAgICBuZXdIZWFkZXJzXG4gIH0pXG4gIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UsICc9PT09PT09PT09PT09PT4+Pj4nKTtcbiAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgfSk7XG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFwaTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9qcy9jb21wb25lbnRzL2hlbHBlcnMvYXBpLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==