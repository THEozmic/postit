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

    headers.append('x-access-token', JSON.parse(sessionStorage.getItem('user')).token);
    if (body === '' || body === null) {
      fetch(url, { method: method,
        headers: headers
      }).then(function (response) {
        return response.json();
      }).then(function (response) {
        resolve(response);
      });
    } else {
      fetch(url, { method: method,
        body: body,
        headers: headers
      }).then(function (response) {
        return response.json();
      }).then(function (response) {
        resolve(response);
      });
    }
  });
};

exports.default = api;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9oZWxwZXJzL2FwaS5qcz84OTQzIl0sIm5hbWVzIjpbImFwaSIsImJvZHkiLCJ1cmwiLCJtZXRob2QiLCJQcm9taXNlIiwicmVzb2x2ZSIsImhlYWRlcnMiLCJIZWFkZXJzIiwiYXBwZW5kIiwiSlNPTiIsInBhcnNlIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwidG9rZW4iLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsTUFBTSxTQUFOQSxHQUFNLENBQUNDLElBQUQsRUFBT0MsR0FBUCxFQUFZQyxNQUFaO0FBQUEsU0FBd0IsSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBYTtBQUMzRCxRQUFJQyxVQUFVLElBQUlDLE9BQUosRUFBZDtBQUNBRCxZQUFRRSxNQUFSLENBQWUsY0FBZixFQUErQixtQ0FBL0I7O0FBRUFGLFlBQVFFLE1BQVIsQ0FBZSxnQkFBZixFQUFpQ0MsS0FBS0MsS0FBTCxDQUFXQyxlQUFlQyxPQUFmLENBQXVCLE1BQXZCLENBQVgsRUFBMkNDLEtBQTVFO0FBQ0EsUUFBSVosU0FBUyxFQUFULElBQWVBLFNBQVMsSUFBNUIsRUFBa0M7QUFDaENhLFlBQU1aLEdBQU4sRUFBVyxFQUFFQyxjQUFGO0FBQ1RHO0FBRFMsT0FBWCxFQUdDUyxJQUhELENBR007QUFBQSxlQUFZQyxTQUFTQyxJQUFULEVBQVo7QUFBQSxPQUhOLEVBSUNGLElBSkQsQ0FJTSxVQUFDQyxRQUFELEVBQWM7QUFDbEJYLGdCQUFRVyxRQUFSO0FBQ0QsT0FORDtBQU9ELEtBUkQsTUFRTztBQUNMRixZQUFNWixHQUFOLEVBQVcsRUFBRUMsY0FBRjtBQUNURixrQkFEUztBQUVUSztBQUZTLE9BQVgsRUFJQ1MsSUFKRCxDQUlNO0FBQUEsZUFBWUMsU0FBU0MsSUFBVCxFQUFaO0FBQUEsT0FKTixFQUtDRixJQUxELENBS00sVUFBQ0MsUUFBRCxFQUFjO0FBQ2xCWCxnQkFBUVcsUUFBUjtBQUNELE9BUEQ7QUFRRDtBQUNGLEdBdkJtQyxDQUF4QjtBQUFBLENBQVo7O2tCQXlCZWhCLEciLCJmaWxlIjoiMC5kNGJlZmU5YWY1N2U1MDBjNGIzNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQWJzdHJhY3Rpb24gb2YgdGhlIGZldGNoIGFwaVxuXG5jb25zdCBhcGkgPSAoYm9keSwgdXJsLCBtZXRob2QpID0+IChuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XG4gIFxuICBoZWFkZXJzLmFwcGVuZCgneC1hY2Nlc3MtdG9rZW4nLCBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSkudG9rZW4pO1xuICBpZiAoYm9keSA9PT0gJycgfHwgYm9keSA9PT0gbnVsbCkge1xuICAgIGZldGNoKHVybCwgeyBtZXRob2QsXG4gICAgICBoZWFkZXJzXG4gICAgfSlcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBmZXRjaCh1cmwsIHsgbWV0aG9kLFxuICAgICAgYm9keSxcbiAgICAgIGhlYWRlcnNcbiAgICB9KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgIH0pO1xuICB9XG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFwaTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9qcy9jb21wb25lbnRzL2hlbHBlcnMvYXBpLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==