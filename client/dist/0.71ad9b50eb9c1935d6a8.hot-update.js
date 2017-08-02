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
    if (method.toUpperCase() === 'GET') {
      fetch(url, { method: method,
        headers: headers
      }).then(function (response) {
        return response.json();
      }).then(function (response) {
        resolve(response);
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9oZWxwZXJzL2FwaS5qcz84OTQzIl0sIm5hbWVzIjpbImFwaSIsImJvZHkiLCJ1cmwiLCJtZXRob2QiLCJQcm9taXNlIiwicmVzb2x2ZSIsImhlYWRlcnMiLCJIZWFkZXJzIiwiYXBwZW5kIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwidG9rZW4iLCJ0b1VwcGVyQ2FzZSIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxNQUFNLFNBQU5BLEdBQU0sQ0FBQ0MsSUFBRCxFQUFPQyxHQUFQLEVBQVlDLE1BQVo7QUFBQSxTQUF3QixJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFhO0FBQzNELFFBQU1DLFVBQVUsSUFBSUMsT0FBSixFQUFoQjtBQUNBRCxZQUFRRSxNQUFSLENBQWUsY0FBZixFQUErQixtQ0FBL0I7QUFDQSxRQUFJQyxlQUFlQyxPQUFmLENBQXVCLE1BQXZCLE1BQW1DLElBQXZDLEVBQTZDO0FBQzNDSixjQUFRRSxNQUFSLENBQWUsZ0JBQWYsRUFBaUNHLEtBQUtDLEtBQUwsQ0FBV0gsZUFBZUMsT0FBZixDQUF1QixNQUF2QixDQUFYLEVBQTJDRyxLQUE1RTtBQUNEOztBQUVELFFBQUlaLFNBQVMsSUFBYixFQUFtQjtBQUNqQkEsYUFBTyxFQUFQO0FBQ0Q7QUFDRCxRQUFJRSxPQUFPVyxXQUFQLE9BQXlCLEtBQTdCLEVBQW9DO0FBQ2xDQyxZQUFNYixHQUFOLEVBQVcsRUFBRUMsY0FBRjtBQUNURztBQURTLE9BQVgsRUFHQ1UsSUFIRCxDQUdNO0FBQUEsZUFBWUMsU0FBU0MsSUFBVCxFQUFaO0FBQUEsT0FITixFQUlDRixJQUpELENBSU0sVUFBQ0MsUUFBRCxFQUFjO0FBQ2xCWixnQkFBUVksUUFBUjtBQUNELE9BTkQ7QUFPRDtBQUNERixVQUFNYixHQUFOLEVBQVcsRUFBRUMsY0FBRjtBQUNURixnQkFEUztBQUVUSztBQUZTLEtBQVgsRUFJQ1UsSUFKRCxDQUlNO0FBQUEsYUFBWUMsU0FBU0MsSUFBVCxFQUFaO0FBQUEsS0FKTixFQUtDRixJQUxELENBS00sVUFBQ0MsUUFBRCxFQUFjO0FBQ2xCWixjQUFRWSxRQUFSO0FBQ0QsS0FQRDtBQVFELEdBM0JtQyxDQUF4QjtBQUFBLENBQVo7O2tCQTZCZWpCLEciLCJmaWxlIjoiMC43MWFkOWI1MGViOWMxOTM1ZDZhOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQWJzdHJhY3Rpb24gb2YgdGhlIGZldGNoIGFwaVxuXG5jb25zdCBhcGkgPSAoYm9keSwgdXJsLCBtZXRob2QpID0+IChuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcbiAgaWYgKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSAhPT0gbnVsbCkge1xuICAgIGhlYWRlcnMuYXBwZW5kKCd4LWFjY2Vzcy10b2tlbicsIEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKS50b2tlbik7XG4gIH1cblxuICBpZiAoYm9keSA9PT0gbnVsbCkge1xuICAgIGJvZHkgPSAnJztcbiAgfVxuICBpZiAobWV0aG9kLnRvVXBwZXJDYXNlKCkgPT09ICdHRVQnKSB7XG4gICAgZmV0Y2godXJsLCB7IG1ldGhvZCxcbiAgICAgIGhlYWRlcnNcbiAgICB9KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgIH0pO1xuICB9XG4gIGZldGNoKHVybCwgeyBtZXRob2QsXG4gICAgYm9keSxcbiAgICBoZWFkZXJzXG4gIH0pXG4gIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gIH0pO1xufSkpO1xuXG5leHBvcnQgZGVmYXVsdCBhcGk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvanMvY29tcG9uZW50cy9oZWxwZXJzL2FwaS5qcyJdLCJzb3VyY2VSb290IjoiIn0=