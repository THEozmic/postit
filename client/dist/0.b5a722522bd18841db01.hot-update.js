webpackHotUpdate(0,{

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// Abstraction of the fetch api

var api = function api(_ref) {
  var _ref$body = _ref.body,
      body = _ref$body === undefined ? null : _ref$body,
      url = _ref.url,
      method = _ref.method,
      _ref$headers = _ref.headers,
      headers = _ref$headers === undefined ? null : _ref$headers;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9oZWxwZXJzL2FwaS5qcz84OTQzIl0sIm5hbWVzIjpbImFwaSIsImJvZHkiLCJ1cmwiLCJtZXRob2QiLCJoZWFkZXJzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJuZXdIZWFkZXJzIiwiSGVhZGVycyIsImFwcGVuZCIsIkpTT04iLCJwYXJzZSIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsInRva2VuIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxNQUFNLFNBQU5BLEdBQU07QUFBQSx1QkFBR0MsSUFBSDtBQUFBLE1BQUdBLElBQUgsNkJBQVUsSUFBVjtBQUFBLE1BQWdCQyxHQUFoQixRQUFnQkEsR0FBaEI7QUFBQSxNQUFxQkMsTUFBckIsUUFBcUJBLE1BQXJCO0FBQUEsMEJBQTZCQyxPQUE3QjtBQUFBLE1BQTZCQSxPQUE3QixnQ0FBdUMsSUFBdkM7QUFBQSxTQUFtRCxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFhO0FBQ3RGLFFBQUlDLGFBQWEsSUFBSUMsT0FBSixFQUFqQjtBQUNBSixZQUFRSyxNQUFSLENBQWUsY0FBZixFQUErQixtQ0FBL0I7QUFDQUwsWUFBUUssTUFBUixDQUFlLGdCQUFmLEVBQWlDQyxLQUFLQyxLQUFMLENBQVdDLGVBQWVDLE9BQWYsQ0FBdUIsTUFBdkIsQ0FBWCxFQUEyQ0MsS0FBNUU7QUFDQSxRQUFJVixZQUFZLElBQWhCLEVBQXNCO0FBQ3BCRyxtQkFBYUgsT0FBYjtBQUNEOztBQUVELFFBQUlILFNBQVMsRUFBVCxJQUFlQSxTQUFTLElBQTVCLEVBQWtDO0FBQ2hDYyxZQUFNYixHQUFOLEVBQVcsRUFBRUMsY0FBRjtBQUNUQyxpQkFBU0c7QUFEQSxPQUFYLEVBR0NTLElBSEQsQ0FHTTtBQUFBLGVBQVlDLFNBQVNDLElBQVQsRUFBWjtBQUFBLE9BSE4sRUFJQ0YsSUFKRCxDQUlNLFVBQUNDLFFBQUQsRUFBYztBQUNsQkUsZ0JBQVFDLEdBQVIsQ0FBWUgsUUFBWixFQUFzQixvQkFBdEI7QUFDQVgsZ0JBQVFXLFFBQVI7QUFDRCxPQVBEO0FBUUQsS0FURCxNQVNPO0FBQ0xGLFlBQU1iLEdBQU4sRUFBVyxFQUFFQyxjQUFGO0FBQ1RGLGtCQURTO0FBRVRHLGlCQUFTRztBQUZBLE9BQVgsRUFJQ1MsSUFKRCxDQUlNO0FBQUEsZUFBWUMsU0FBU0MsSUFBVCxFQUFaO0FBQUEsT0FKTixFQUtDRixJQUxELENBS00sVUFBQ0MsUUFBRCxFQUFjO0FBQ2xCRSxnQkFBUUMsR0FBUixDQUFZSCxRQUFaLEVBQXNCLG9CQUF0QjtBQUNBWCxnQkFBUVcsUUFBUjtBQUNELE9BUkQ7QUFTRDtBQUNGLEdBNUI4RCxDQUFuRDtBQUFBLENBQVo7O2tCQThCZWpCLEciLCJmaWxlIjoiMC5iNWE3MjI1MjJiZDE4ODQxZGIwMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQWJzdHJhY3Rpb24gb2YgdGhlIGZldGNoIGFwaVxuXG5jb25zdCBhcGkgPSAoeyBib2R5ID0gbnVsbCwgdXJsLCBtZXRob2QsIGhlYWRlcnMgPSBudWxsIH0pID0+IChuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICBsZXQgbmV3SGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XG4gIGhlYWRlcnMuYXBwZW5kKCd4LWFjY2Vzcy10b2tlbicsIEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKS50b2tlbik7XG4gIGlmIChoZWFkZXJzICE9PSBudWxsKSB7XG4gICAgbmV3SGVhZGVycyA9IGhlYWRlcnM7XG4gIH1cblxuICBpZiAoYm9keSA9PT0gJycgfHwgYm9keSA9PT0gbnVsbCkge1xuICAgIGZldGNoKHVybCwgeyBtZXRob2QsXG4gICAgICBoZWFkZXJzOiBuZXdIZWFkZXJzXG4gICAgfSlcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSwgJz09PT09PT09PT09PT09Pj4+PicpO1xuICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgZmV0Y2godXJsLCB7IG1ldGhvZCxcbiAgICAgIGJvZHksXG4gICAgICBoZWFkZXJzOiBuZXdIZWFkZXJzXG4gICAgfSlcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSwgJz09PT09PT09PT09PT09Pj4+PicpO1xuICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgfSk7XG4gIH1cbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgYXBpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2pzL2NvbXBvbmVudHMvaGVscGVycy9hcGkuanMiXSwic291cmNlUm9vdCI6IiJ9