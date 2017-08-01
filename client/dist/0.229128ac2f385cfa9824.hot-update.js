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
    if (headers === null) {
      newHeaders = headers;
    } else {
      newHeaders;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9oZWxwZXJzL2FwaS5qcz84OTQzIl0sIm5hbWVzIjpbImFwaSIsImJvZHkiLCJ1cmwiLCJtZXRob2QiLCJoZWFkZXJzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJuZXdIZWFkZXJzIiwiSGVhZGVycyIsImFwcGVuZCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsTUFBTSxTQUFOQSxHQUFNLENBQUNDLElBQUQsRUFBT0MsR0FBUCxFQUFZQyxNQUFaO0FBQUEsTUFBb0JDLE9BQXBCLHVFQUE4QixJQUE5QjtBQUFBLFNBQXdDLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQWE7QUFDM0UsUUFBSUMsYUFBYSxJQUFJQyxPQUFKLEVBQWpCO0FBQ0FELGVBQVdFLE1BQVgsQ0FBa0IsY0FBbEIsRUFBa0MsbUNBQWxDO0FBQ0EsUUFBSUwsWUFBWSxJQUFoQixFQUFzQjtBQUNwQkcsbUJBQWFILE9BQWI7QUFDRCxLQUZELE1BRU87QUFDTEc7QUFDRDtBQUNELFFBQUlOLFNBQVMsRUFBYixFQUFpQjtBQUNmUyxZQUFNUixHQUFOLEVBQVcsRUFBRUMsY0FBRjtBQUNUQyxpQkFBU0c7QUFEQSxPQUFYLEVBR0NJLElBSEQsQ0FHTTtBQUFBLGVBQVlDLFNBQVNDLElBQVQsRUFBWjtBQUFBLE9BSE4sRUFJQ0YsSUFKRCxDQUlNLFVBQUNDLFFBQUQsRUFBYztBQUNsQkUsZ0JBQVFDLEdBQVIsQ0FBWUgsUUFBWixFQUFzQixvQkFBdEI7QUFDQU4sZ0JBQVFNLFFBQVI7QUFDRCxPQVBEO0FBUUQsS0FURCxNQVNPO0FBQ0xGLFlBQU1SLEdBQU4sRUFBVyxFQUFFQyxjQUFGO0FBQ1RGLGtCQURTO0FBRVRNO0FBRlMsT0FBWCxFQUlDSSxJQUpELENBSU07QUFBQSxlQUFZQyxTQUFTQyxJQUFULEVBQVo7QUFBQSxPQUpOLEVBS0NGLElBTEQsQ0FLTSxVQUFDQyxRQUFELEVBQWM7QUFDbEJFLGdCQUFRQyxHQUFSLENBQVlILFFBQVosRUFBc0Isb0JBQXRCO0FBQ0FOLGdCQUFRTSxRQUFSO0FBQ0QsT0FSRDtBQVNEO0FBQ0YsR0E1Qm1ELENBQXhDO0FBQUEsQ0FBWjs7a0JBOEJlWixHIiwiZmlsZSI6IjAuMjI5MTI4YWMyZjM4NWNmYTk4MjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEFic3RyYWN0aW9uIG9mIHRoZSBmZXRjaCBhcGlcblxuY29uc3QgYXBpID0gKGJvZHksIHVybCwgbWV0aG9kLCBoZWFkZXJzID0gbnVsbCkgPT4gKG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gIGxldCBuZXdIZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgbmV3SGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcbiAgaWYgKGhlYWRlcnMgPT09IG51bGwpIHtcbiAgICBuZXdIZWFkZXJzID0gaGVhZGVycztcbiAgfSBlbHNlIHtcbiAgICBuZXdIZWFkZXJzXG4gIH1cbiAgaWYgKGJvZHkgPT09ICcnKSB7XG4gICAgZmV0Y2godXJsLCB7IG1ldGhvZCxcbiAgICAgIGhlYWRlcnM6IG5ld0hlYWRlcnNcbiAgICB9KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLCAnPT09PT09PT09PT09PT0+Pj4+Jyk7XG4gICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBmZXRjaCh1cmwsIHsgbWV0aG9kLFxuICAgICAgYm9keSxcbiAgICAgIG5ld0hlYWRlcnNcbiAgICB9KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLCAnPT09PT09PT09PT09PT0+Pj4+Jyk7XG4gICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICB9KTtcbiAgfVxufSkpO1xuXG5leHBvcnQgZGVmYXVsdCBhcGk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvanMvY29tcG9uZW50cy9oZWxwZXJzL2FwaS5qcyJdLCJzb3VyY2VSb290IjoiIn0=