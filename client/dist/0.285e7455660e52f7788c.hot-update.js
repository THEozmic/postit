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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9oZWxwZXJzL2FwaS5qcz84OTQzIl0sIm5hbWVzIjpbImFwaSIsImJvZHkiLCJ1cmwiLCJtZXRob2QiLCJoZWFkZXJzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJIZWFkZXJzIiwiYXBwZW5kIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxNQUFNLFNBQU5BLEdBQU0sQ0FBQ0MsSUFBRCxFQUFPQyxHQUFQLEVBQVlDLE1BQVosRUFBb0JDLE9BQXBCO0FBQUEsU0FBaUMsSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBYTtBQUNwRSxRQUFNRixVQUFVLElBQUlHLE9BQUosRUFBaEI7QUFDQUgsWUFBUUksTUFBUixDQUFlLGNBQWYsRUFBK0IsbUNBQS9CO0FBQ0FDLFVBQU1QLEdBQU4sRUFBVyxFQUFFQyxjQUFGO0FBQ1RGLGdCQURTO0FBRVRHO0FBRlMsS0FBWCxFQUlDTSxJQUpELENBSU07QUFBQSxhQUFZQyxTQUFTQyxJQUFULEVBQVo7QUFBQSxLQUpOLEVBS0NGLElBTEQsQ0FLTSxVQUFDQyxRQUFELEVBQWM7QUFDbEJFLGNBQVFDLEdBQVIsQ0FBWUgsUUFBWixFQUFzQixvQkFBdEI7QUFDQUwsY0FBUUssUUFBUjtBQUNELEtBUkQ7QUFTRCxHQVo0QyxDQUFqQztBQUFBLENBQVo7O2tCQWNlWCxHIiwiZmlsZSI6IjAuMjg1ZTc0NTU2NjBlNTJmNzc4OGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEFic3RyYWN0aW9uIG9mIHRoZSBmZXRjaCBhcGlcblxuY29uc3QgYXBpID0gKGJvZHksIHVybCwgbWV0aG9kLCBoZWFkZXJzKSA9PiAobmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XG4gIGZldGNoKHVybCwgeyBtZXRob2QsXG4gICAgYm9keSxcbiAgICBoZWFkZXJzXG4gIH0pXG4gIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UsICc9PT09PT09PT09PT09PT4+Pj4nKTtcbiAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgfSk7XG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFwaTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9qcy9jb21wb25lbnRzL2hlbHBlcnMvYXBpLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==