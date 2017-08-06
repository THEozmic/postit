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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9oZWxwZXJzL2FwaS5qcz84OTQzIl0sIm5hbWVzIjpbImFwaSIsImJvZHkiLCJ1cmwiLCJtZXRob2QiLCJQcm9taXNlIiwicmVzb2x2ZSIsImhlYWRlcnMiLCJIZWFkZXJzIiwiYXBwZW5kIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwidG9rZW4iLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsTUFBTSxTQUFOQSxHQUFNLENBQUNDLElBQUQsRUFBT0MsR0FBUCxFQUFZQyxNQUFaO0FBQUEsU0FBd0IsSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBYTtBQUMzRCxRQUFNQyxVQUFVLElBQUlDLE9BQUosRUFBaEI7QUFDQUQsWUFBUUUsTUFBUixDQUFlLGNBQWYsRUFBK0IsbUNBQS9CO0FBQ0EsUUFBSUMsZUFBZUMsT0FBZixDQUF1QixNQUF2QixNQUFtQyxJQUF2QyxFQUE2QztBQUMzQ0osY0FBUUUsTUFBUixDQUFlLGdCQUFmLEVBQWlDRyxLQUFLQyxLQUFMLENBQVdILGVBQWVDLE9BQWYsQ0FBdUIsTUFBdkIsQ0FBWCxFQUEyQ0csS0FBNUU7QUFDRDtBQUNELFFBQUlaLFNBQVMsSUFBYixFQUFtQjtBQUNqQkEsYUFBTyxFQUFQO0FBQ0QsS0FGRCxNQUVPO0FBQ0xhLFlBQU1aLEdBQU4sRUFBVyxFQUFFQyxjQUFGO0FBQ1RGLGtCQURTO0FBRVRLO0FBRlMsT0FBWCxFQUlDUyxJQUpELENBSU07QUFBQSxlQUFZQyxTQUFTQyxJQUFULEVBQVo7QUFBQSxPQUpOLEVBS0NGLElBTEQsQ0FLTSxVQUFDQyxRQUFELEVBQWM7QUFDbEJYLGdCQUFRVyxRQUFSO0FBQ0QsT0FQRDtBQVFEO0FBQ0YsR0FsQm1DLENBQXhCO0FBQUEsQ0FBWjs7a0JBb0JlaEIsRyIsImZpbGUiOiIwLmNlNTcwMWJiODhiN2RiZTU5YzY1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBYnN0cmFjdGlvbiBvZiB0aGUgZmV0Y2ggYXBpXG5cbmNvbnN0IGFwaSA9IChib2R5LCB1cmwsIG1ldGhvZCkgPT4gKG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuICBpZiAoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpICE9PSBudWxsKSB7XG4gICAgaGVhZGVycy5hcHBlbmQoJ3gtYWNjZXNzLXRva2VuJywgSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpLnRva2VuKTtcbiAgfVxuICBpZiAoYm9keSA9PT0gbnVsbCkge1xuICAgIGJvZHkgPSAnJztcbiAgfSBlbHNlIHtcbiAgICBmZXRjaCh1cmwsIHsgbWV0aG9kLFxuICAgICAgYm9keSxcbiAgICAgIGhlYWRlcnNcbiAgICB9KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgIH0pO1xuICB9XG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFwaTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9qcy9jb21wb25lbnRzL2hlbHBlcnMvYXBpLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==