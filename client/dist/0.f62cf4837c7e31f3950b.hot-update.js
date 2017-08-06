webpackHotUpdate(0,{

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// Abstraction of the fetch api

var api = function api(body, url, method) {
  return new Promise(function (resolve) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    if (sessionStorage.getItem('user') !== null) {
      headers.append('x-access-token', JSON.parse(sessionStorage.getItem('user')).token);
    }
    if (body === null) {
      body = '';
    }
    fetch(url, { method: method,
      body: body,
      headers: headers
    }).then(function (response) {
      return response.json();
    }).then(function (response) {
      resolve(response);
    });
  });
};

exports.default = api;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9oZWxwZXJzL2FwaS5qcz84OTQzIl0sIm5hbWVzIjpbImFwaSIsImJvZHkiLCJ1cmwiLCJtZXRob2QiLCJQcm9taXNlIiwicmVzb2x2ZSIsImhlYWRlcnMiLCJIZWFkZXJzIiwiYXBwZW5kIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwidG9rZW4iLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsTUFBTSxTQUFOQSxHQUFNLENBQUNDLElBQUQsRUFBT0MsR0FBUCxFQUFZQyxNQUFaO0FBQUEsU0FBd0IsSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBYTtBQUMzRCxRQUFNQyxVQUFVLElBQUlDLE9BQUosRUFBaEI7QUFDQUQsWUFBUUUsTUFBUixDQUFlLGNBQWYsRUFBK0IsbUNBQS9CO0FBQ0EsUUFBSUMsZUFBZUMsT0FBZixDQUF1QixNQUF2QixNQUFtQyxJQUF2QyxFQUE2QztBQUMzQ0osY0FBUUUsTUFBUixDQUFlLGdCQUFmLEVBQWlDRyxLQUFLQyxLQUFMLENBQVdILGVBQWVDLE9BQWYsQ0FBdUIsTUFBdkIsQ0FBWCxFQUEyQ0csS0FBNUU7QUFDRDtBQUNELFFBQUlaLFNBQVMsSUFBYixFQUFtQjtBQUNqQkEsYUFBTyxFQUFQO0FBQ0Q7QUFDQ2EsVUFBTVosR0FBTixFQUFXLEVBQUVDLGNBQUY7QUFDVEYsZ0JBRFM7QUFFVEs7QUFGUyxLQUFYLEVBSUNTLElBSkQsQ0FJTTtBQUFBLGFBQVlDLFNBQVNDLElBQVQsRUFBWjtBQUFBLEtBSk4sRUFLQ0YsSUFMRCxDQUtNLFVBQUNDLFFBQUQsRUFBYztBQUNsQlgsY0FBUVcsUUFBUjtBQUNELEtBUEQ7QUFTSCxHQWxCbUMsQ0FBeEI7QUFBQSxDQUFaOztrQkFvQmVoQixHIiwiZmlsZSI6IjAuZjYyY2Y0ODM3YzdlMzFmMzk1MGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEFic3RyYWN0aW9uIG9mIHRoZSBmZXRjaCBhcGlcblxuY29uc3QgYXBpID0gKGJvZHksIHVybCwgbWV0aG9kKSA9PiAobmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XG4gIGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykgIT09IG51bGwpIHtcbiAgICBoZWFkZXJzLmFwcGVuZCgneC1hY2Nlc3MtdG9rZW4nLCBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSkudG9rZW4pO1xuICB9XG4gIGlmIChib2R5ID09PSBudWxsKSB7XG4gICAgYm9keSA9ICcnO1xuICB9XG4gICAgZmV0Y2godXJsLCB7IG1ldGhvZCxcbiAgICAgIGJvZHksXG4gICAgICBoZWFkZXJzXG4gICAgfSlcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICB9KTtcbiAgXG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFwaTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9qcy9jb21wb25lbnRzL2hlbHBlcnMvYXBpLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==