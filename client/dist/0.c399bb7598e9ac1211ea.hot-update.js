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
    if (method.toUpperCase() !== '') fetch(url, { method: method,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9oZWxwZXJzL2FwaS5qcz84OTQzIl0sIm5hbWVzIjpbImFwaSIsImJvZHkiLCJ1cmwiLCJtZXRob2QiLCJQcm9taXNlIiwicmVzb2x2ZSIsImhlYWRlcnMiLCJIZWFkZXJzIiwiYXBwZW5kIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwidG9rZW4iLCJ0b1VwcGVyQ2FzZSIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxNQUFNLFNBQU5BLEdBQU0sQ0FBQ0MsSUFBRCxFQUFPQyxHQUFQLEVBQVlDLE1BQVo7QUFBQSxTQUF3QixJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFhO0FBQzNELFFBQU1DLFVBQVUsSUFBSUMsT0FBSixFQUFoQjtBQUNBRCxZQUFRRSxNQUFSLENBQWUsY0FBZixFQUErQixtQ0FBL0I7QUFDQSxRQUFJQyxlQUFlQyxPQUFmLENBQXVCLE1BQXZCLE1BQW1DLElBQXZDLEVBQTZDO0FBQzNDSixjQUFRRSxNQUFSLENBQWUsZ0JBQWYsRUFBaUNHLEtBQUtDLEtBQUwsQ0FBV0gsZUFBZUMsT0FBZixDQUF1QixNQUF2QixDQUFYLEVBQTJDRyxLQUE1RTtBQUNEOztBQUVELFFBQUlaLFNBQVMsSUFBYixFQUFtQjtBQUNqQkEsYUFBTyxFQUFQO0FBQ0Q7QUFDRCxRQUFJRSxPQUFPVyxXQUFQLE9BQXlCLEVBQTdCLEVBQ0FDLE1BQU1iLEdBQU4sRUFBVyxFQUFFQyxjQUFGO0FBQ1RGLGdCQURTO0FBRVRLO0FBRlMsS0FBWCxFQUlDVSxJQUpELENBSU07QUFBQSxhQUFZQyxTQUFTQyxJQUFULEVBQVo7QUFBQSxLQUpOLEVBS0NGLElBTEQsQ0FLTSxVQUFDQyxRQUFELEVBQWM7QUFDbEJaLGNBQVFZLFFBQVI7QUFDRCxLQVBEO0FBUUQsR0FuQm1DLENBQXhCO0FBQUEsQ0FBWjs7a0JBcUJlakIsRyIsImZpbGUiOiIwLmMzOTliYjc1OThlOWFjMTIxMWVhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBYnN0cmFjdGlvbiBvZiB0aGUgZmV0Y2ggYXBpXG5cbmNvbnN0IGFwaSA9IChib2R5LCB1cmwsIG1ldGhvZCkgPT4gKG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuICBpZiAoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpICE9PSBudWxsKSB7XG4gICAgaGVhZGVycy5hcHBlbmQoJ3gtYWNjZXNzLXRva2VuJywgSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpLnRva2VuKTtcbiAgfVxuXG4gIGlmIChib2R5ID09PSBudWxsKSB7XG4gICAgYm9keSA9ICcnO1xuICB9XG4gIGlmIChtZXRob2QudG9VcHBlckNhc2UoKSAhPT0gJycpXG4gIGZldGNoKHVybCwgeyBtZXRob2QsXG4gICAgYm9keSxcbiAgICBoZWFkZXJzXG4gIH0pXG4gIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gIH0pO1xufSkpO1xuXG5leHBvcnQgZGVmYXVsdCBhcGk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvanMvY29tcG9uZW50cy9oZWxwZXJzL2FwaS5qcyJdLCJzb3VyY2VSb290IjoiIn0=