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
    if (headers !== null || h) {
      newHeaders = headers;
    }
    if (body === '') {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9oZWxwZXJzL2FwaS5qcz84OTQzIl0sIm5hbWVzIjpbImFwaSIsImJvZHkiLCJ1cmwiLCJtZXRob2QiLCJoZWFkZXJzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJuZXdIZWFkZXJzIiwiSGVhZGVycyIsImFwcGVuZCIsImgiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLE1BQU0sU0FBTkEsR0FBTSxDQUFDQyxJQUFELEVBQU9DLEdBQVAsRUFBWUMsTUFBWixFQUFvQkMsT0FBcEI7QUFBQSxTQUFpQyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFhO0FBQ3BFLFFBQUlDLGFBQWEsSUFBSUMsT0FBSixFQUFqQjtBQUNBRCxlQUFXRSxNQUFYLENBQWtCLGNBQWxCLEVBQWtDLG1DQUFsQztBQUNBLFFBQUlMLFlBQVksSUFBWixJQUFvQk0sQ0FBeEIsRUFBMkI7QUFDekJILG1CQUFhSCxPQUFiO0FBQ0Q7QUFDRCxRQUFJSCxTQUFTLEVBQWIsRUFBaUI7QUFDZlUsWUFBTVQsR0FBTixFQUFXLEVBQUVDLGNBQUY7QUFDVEMsaUJBQVNHO0FBREEsT0FBWCxFQUdDSyxJQUhELENBR007QUFBQSxlQUFZQyxTQUFTQyxJQUFULEVBQVo7QUFBQSxPQUhOLEVBSUNGLElBSkQsQ0FJTSxVQUFDQyxRQUFELEVBQWM7QUFDbEJFLGdCQUFRQyxHQUFSLENBQVlILFFBQVosRUFBc0Isb0JBQXRCO0FBQ0FQLGdCQUFRTyxRQUFSO0FBQ0QsT0FQRDtBQVFELEtBVEQsTUFTTztBQUNMRixZQUFNVCxHQUFOLEVBQVcsRUFBRUMsY0FBRjtBQUNURixrQkFEUztBQUVUTTtBQUZTLE9BQVgsRUFJQ0ssSUFKRCxDQUlNO0FBQUEsZUFBWUMsU0FBU0MsSUFBVCxFQUFaO0FBQUEsT0FKTixFQUtDRixJQUxELENBS00sVUFBQ0MsUUFBRCxFQUFjO0FBQ2xCRSxnQkFBUUMsR0FBUixDQUFZSCxRQUFaLEVBQXNCLG9CQUF0QjtBQUNBUCxnQkFBUU8sUUFBUjtBQUNELE9BUkQ7QUFTRDtBQUNGLEdBMUI0QyxDQUFqQztBQUFBLENBQVo7O2tCQTRCZWIsRyIsImZpbGUiOiIwLjdlMDM1NGU3NWNiMzUyMzM0NWIzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBYnN0cmFjdGlvbiBvZiB0aGUgZmV0Y2ggYXBpXG5cbmNvbnN0IGFwaSA9IChib2R5LCB1cmwsIG1ldGhvZCwgaGVhZGVycykgPT4gKG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gIGxldCBuZXdIZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgbmV3SGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcbiAgaWYgKGhlYWRlcnMgIT09IG51bGwgfHwgaCkge1xuICAgIG5ld0hlYWRlcnMgPSBoZWFkZXJzO1xuICB9XG4gIGlmIChib2R5ID09PSAnJykge1xuICAgIGZldGNoKHVybCwgeyBtZXRob2QsXG4gICAgICBoZWFkZXJzOiBuZXdIZWFkZXJzXG4gICAgfSlcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSwgJz09PT09PT09PT09PT09Pj4+PicpO1xuICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgZmV0Y2godXJsLCB7IG1ldGhvZCxcbiAgICAgIGJvZHksXG4gICAgICBuZXdIZWFkZXJzXG4gICAgfSlcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSwgJz09PT09PT09PT09PT09Pj4+PicpO1xuICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgfSk7XG4gIH1cbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgYXBpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2pzL2NvbXBvbmVudHMvaGVscGVycy9hcGkuanMiXSwic291cmNlUm9vdCI6IiJ9