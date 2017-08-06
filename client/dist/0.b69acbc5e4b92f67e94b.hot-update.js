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
    if (sessionStorage.getItem) headers.append('x-access-token', JSON.parse(sessionStorage.getItem('user')).token);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9oZWxwZXJzL2FwaS5qcz84OTQzIl0sIm5hbWVzIjpbImFwaSIsImJvZHkiLCJ1cmwiLCJtZXRob2QiLCJQcm9taXNlIiwicmVzb2x2ZSIsImhlYWRlcnMiLCJIZWFkZXJzIiwiYXBwZW5kIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwidG9rZW4iLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsTUFBTSxTQUFOQSxHQUFNLENBQUNDLElBQUQsRUFBT0MsR0FBUCxFQUFZQyxNQUFaO0FBQUEsU0FBd0IsSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBYTtBQUMzRCxRQUFJQyxVQUFVLElBQUlDLE9BQUosRUFBZDtBQUNBRCxZQUFRRSxNQUFSLENBQWUsY0FBZixFQUErQixtQ0FBL0I7QUFDQSxRQUFJQyxlQUFlQyxPQUFuQixFQUNBSixRQUFRRSxNQUFSLENBQWUsZ0JBQWYsRUFBaUNHLEtBQUtDLEtBQUwsQ0FBV0gsZUFBZUMsT0FBZixDQUF1QixNQUF2QixDQUFYLEVBQTJDRyxLQUE1RTtBQUNBLFFBQUlaLFNBQVMsRUFBVCxJQUFlQSxTQUFTLElBQTVCLEVBQWtDO0FBQ2hDYSxZQUFNWixHQUFOLEVBQVcsRUFBRUMsY0FBRjtBQUNURztBQURTLE9BQVgsRUFHQ1MsSUFIRCxDQUdNO0FBQUEsZUFBWUMsU0FBU0MsSUFBVCxFQUFaO0FBQUEsT0FITixFQUlDRixJQUpELENBSU0sVUFBQ0MsUUFBRCxFQUFjO0FBQ2xCWCxnQkFBUVcsUUFBUjtBQUNELE9BTkQ7QUFPRCxLQVJELE1BUU87QUFDTEYsWUFBTVosR0FBTixFQUFXLEVBQUVDLGNBQUY7QUFDVEYsa0JBRFM7QUFFVEs7QUFGUyxPQUFYLEVBSUNTLElBSkQsQ0FJTTtBQUFBLGVBQVlDLFNBQVNDLElBQVQsRUFBWjtBQUFBLE9BSk4sRUFLQ0YsSUFMRCxDQUtNLFVBQUNDLFFBQUQsRUFBYztBQUNsQlgsZ0JBQVFXLFFBQVI7QUFDRCxPQVBEO0FBUUQ7QUFDRixHQXZCbUMsQ0FBeEI7QUFBQSxDQUFaOztrQkF5QmVoQixHIiwiZmlsZSI6IjAuYjY5YWNiYzVlNGI5MmY2N2U5NGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEFic3RyYWN0aW9uIG9mIHRoZSBmZXRjaCBhcGlcblxuY29uc3QgYXBpID0gKGJvZHksIHVybCwgbWV0aG9kKSA9PiAobmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuICBpZiAoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSlcbiAgaGVhZGVycy5hcHBlbmQoJ3gtYWNjZXNzLXRva2VuJywgSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpLnRva2VuKTtcbiAgaWYgKGJvZHkgPT09ICcnIHx8IGJvZHkgPT09IG51bGwpIHtcbiAgICBmZXRjaCh1cmwsIHsgbWV0aG9kLFxuICAgICAgaGVhZGVyc1xuICAgIH0pXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgZmV0Y2godXJsLCB7IG1ldGhvZCxcbiAgICAgIGJvZHksXG4gICAgICBoZWFkZXJzXG4gICAgfSlcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICB9KTtcbiAgfVxufSkpO1xuXG5leHBvcnQgZGVmYXVsdCBhcGk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvanMvY29tcG9uZW50cy9oZWxwZXJzL2FwaS5qcyJdLCJzb3VyY2VSb290IjoiIn0=