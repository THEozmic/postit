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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9oZWxwZXJzL2FwaS5qcz84OTQzIl0sIm5hbWVzIjpbImFwaSIsImJvZHkiLCJ1cmwiLCJtZXRob2QiLCJoZWFkZXJzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJuZXdIZWFkZXJzIiwiSGVhZGVycyIsImFwcGVuZCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsTUFBTSxTQUFOQSxHQUFNLENBQUNDLElBQUQsRUFBT0MsR0FBUCxFQUFZQyxNQUFaO0FBQUEsTUFBb0JDLE9BQXBCLHVFQUE4QixJQUE5QjtBQUFBLFNBQXdDLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQWE7QUFDM0UsUUFBSUMsYUFBYSxJQUFJQyxPQUFKLEVBQWpCO0FBQ0FELGVBQVdFLE1BQVgsQ0FBa0IsY0FBbEIsRUFBa0MsbUNBQWxDO0FBQ0EsUUFBSUwsWUFBWSxJQUFoQixFQUFzQjtBQUNwQkcsbUJBQWFILE9BQWI7QUFDRDtBQUNELFFBQUlILFNBQVMsRUFBYixFQUFpQjtBQUNmUyxZQUFNUixHQUFOLEVBQVcsRUFBRUMsY0FBRjtBQUNUQyxpQkFBU0c7QUFEQSxPQUFYLEVBR0NJLElBSEQsQ0FHTTtBQUFBLGVBQVlDLFNBQVNDLElBQVQsRUFBWjtBQUFBLE9BSE4sRUFJQ0YsSUFKRCxDQUlNLFVBQUNDLFFBQUQsRUFBYztBQUNsQkUsZ0JBQVFDLEdBQVIsQ0FBWUgsUUFBWixFQUFzQixvQkFBdEI7QUFDQU4sZ0JBQVFNLFFBQVI7QUFDRCxPQVBEO0FBUUQsS0FURCxNQVNPO0FBQ0xGLFlBQU1SLEdBQU4sRUFBVyxFQUFFQyxjQUFGO0FBQ1RGLGtCQURTO0FBRVRNO0FBRlMsT0FBWCxFQUlDSSxJQUpELENBSU07QUFBQSxlQUFZQyxTQUFTQyxJQUFULEVBQVo7QUFBQSxPQUpOLEVBS0NGLElBTEQsQ0FLTSxVQUFDQyxRQUFELEVBQWM7QUFDbEJFLGdCQUFRQyxHQUFSLENBQVlILFFBQVosRUFBc0Isb0JBQXRCO0FBQ0FOLGdCQUFRTSxRQUFSO0FBQ0QsT0FSRDtBQVNEO0FBQ0YsR0ExQm1ELENBQXhDO0FBQUEsQ0FBWjs7a0JBNEJlWixHIiwiZmlsZSI6IjAuY2U1NTUyNmI5MDllNzI1MDJmNGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEFic3RyYWN0aW9uIG9mIHRoZSBmZXRjaCBhcGlcblxuY29uc3QgYXBpID0gKGJvZHksIHVybCwgbWV0aG9kLCBoZWFkZXJzID0gbnVsbCkgPT4gKG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gIGxldCBuZXdIZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgbmV3SGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcbiAgaWYgKGhlYWRlcnMgIT09IG51bGwpIHtcbiAgICBuZXdIZWFkZXJzID0gaGVhZGVycztcbiAgfVxuICBpZiAoYm9keSA9PT0gJycpIHtcbiAgICBmZXRjaCh1cmwsIHsgbWV0aG9kLFxuICAgICAgaGVhZGVyczogbmV3SGVhZGVyc1xuICAgIH0pXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UsICc9PT09PT09PT09PT09PT4+Pj4nKTtcbiAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGZldGNoKHVybCwgeyBtZXRob2QsXG4gICAgICBib2R5LFxuICAgICAgbmV3SGVhZGVyc1xuICAgIH0pXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UsICc9PT09PT09PT09PT09PT4+Pj4nKTtcbiAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgIH0pO1xuICB9XG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFwaTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9qcy9jb21wb25lbnRzL2hlbHBlcnMvYXBpLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==