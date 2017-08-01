webpackHotUpdate(0,{

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// Abstraction of the fetch api

var api = function api() {
  var body = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var url = arguments[1];
  var method = arguments[2];
  return new Promise(function (resolve) {
    var headers = new Headers();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9oZWxwZXJzL2FwaS5qcz84OTQzIl0sIm5hbWVzIjpbImFwaSIsImJvZHkiLCJ1cmwiLCJtZXRob2QiLCJQcm9taXNlIiwicmVzb2x2ZSIsImhlYWRlcnMiLCJIZWFkZXJzIiwiYXBwZW5kIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxNQUFNLFNBQU5BLEdBQU07QUFBQSxNQUFDQyxJQUFELHVFQUFRLEVBQVI7QUFBQSxNQUFZQyxHQUFaO0FBQUEsTUFBaUJDLE1BQWpCO0FBQUEsU0FBNkIsSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBYTtBQUNoRSxRQUFNQyxVQUFVLElBQUlDLE9BQUosRUFBaEI7QUFDQUQsWUFBUUUsTUFBUixDQUFlLGNBQWYsRUFBK0IsbUNBQS9CO0FBQ0FDLFVBQU1QLEdBQU4sRUFBVyxFQUFFQyxjQUFGO0FBQ1RGLGdCQURTO0FBRVRLO0FBRlMsS0FBWCxFQUlDSSxJQUpELENBSU07QUFBQSxhQUFZQyxTQUFTQyxJQUFULEVBQVo7QUFBQSxLQUpOLEVBS0NGLElBTEQsQ0FLTSxVQUFDQyxRQUFELEVBQWM7QUFDbEJFLGNBQVFDLEdBQVIsQ0FBWUgsUUFBWixFQUFzQixvQkFBdEI7QUFDQU4sY0FBUU0sUUFBUjtBQUNELEtBUkQ7QUFTRCxHQVp3QyxDQUE3QjtBQUFBLENBQVo7O2tCQWNlWCxHIiwiZmlsZSI6IjAuMjcyYjkwMTZhMTFlNmIzM2Q0ZGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEFic3RyYWN0aW9uIG9mIHRoZSBmZXRjaCBhcGlcblxuY29uc3QgYXBpID0gKGJvZHkgPSAnJywgdXJsLCBtZXRob2QpID0+IChuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcbiAgZmV0Y2godXJsLCB7IG1ldGhvZCxcbiAgICBib2R5LFxuICAgIGhlYWRlcnNcbiAgfSlcbiAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZSwgJz09PT09PT09PT09PT09Pj4+PicpO1xuICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICB9KTtcbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgYXBpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2pzL2NvbXBvbmVudHMvaGVscGVycy9hcGkuanMiXSwic291cmNlUm9vdCI6IiJ9