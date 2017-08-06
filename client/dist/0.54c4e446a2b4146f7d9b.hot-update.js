webpackHotUpdate(0,{

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// Abstraction of the fetch api

var api = function api() {
  var body = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var url = arguments[1];
  var method = arguments[2];
  var headers = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9oZWxwZXJzL2FwaS5qcz84OTQzIl0sIm5hbWVzIjpbImFwaSIsImJvZHkiLCJ1cmwiLCJtZXRob2QiLCJoZWFkZXJzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJuZXdIZWFkZXJzIiwiSGVhZGVycyIsImFwcGVuZCIsIkpTT04iLCJwYXJzZSIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsInRva2VuIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxNQUFNLFNBQU5BLEdBQU07QUFBQSxNQUFDQyxJQUFELHVFQUFRLElBQVI7QUFBQSxNQUFjQyxHQUFkO0FBQUEsTUFBbUJDLE1BQW5CO0FBQUEsTUFBMkJDLE9BQTNCLHVFQUFxQyxJQUFyQztBQUFBLFNBQStDLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQWE7QUFDbEYsUUFBSUMsYUFBYSxJQUFJQyxPQUFKLEVBQWpCO0FBQ0FKLFlBQVFLLE1BQVIsQ0FBZSxjQUFmLEVBQStCLG1DQUEvQjtBQUNBTCxZQUFRSyxNQUFSLENBQWUsZ0JBQWYsRUFBaUNDLEtBQUtDLEtBQUwsQ0FBV0MsZUFBZUMsT0FBZixDQUF1QixNQUF2QixDQUFYLEVBQTJDQyxLQUE1RTtBQUNBLFFBQUlWLFlBQVksSUFBaEIsRUFBc0I7QUFDcEJHLG1CQUFhSCxPQUFiO0FBQ0Q7O0FBRUQsUUFBSUgsU0FBUyxFQUFULElBQWVBLFNBQVMsSUFBNUIsRUFBa0M7QUFDaENjLFlBQU1iLEdBQU4sRUFBVyxFQUFFQyxjQUFGO0FBQ1RDLGlCQUFTRztBQURBLE9BQVgsRUFHQ1MsSUFIRCxDQUdNO0FBQUEsZUFBWUMsU0FBU0MsSUFBVCxFQUFaO0FBQUEsT0FITixFQUlDRixJQUpELENBSU0sVUFBQ0MsUUFBRCxFQUFjO0FBQ2xCRSxnQkFBUUMsR0FBUixDQUFZSCxRQUFaLEVBQXNCLG9CQUF0QjtBQUNBWCxnQkFBUVcsUUFBUjtBQUNELE9BUEQ7QUFRRCxLQVRELE1BU087QUFDTEYsWUFBTWIsR0FBTixFQUFXLEVBQUVDLGNBQUY7QUFDVEYsa0JBRFM7QUFFVEcsaUJBQVNHO0FBRkEsT0FBWCxFQUlDUyxJQUpELENBSU07QUFBQSxlQUFZQyxTQUFTQyxJQUFULEVBQVo7QUFBQSxPQUpOLEVBS0NGLElBTEQsQ0FLTSxVQUFDQyxRQUFELEVBQWM7QUFDbEJFLGdCQUFRQyxHQUFSLENBQVlILFFBQVosRUFBc0Isb0JBQXRCO0FBQ0FYLGdCQUFRVyxRQUFSO0FBQ0QsT0FSRDtBQVNEO0FBQ0YsR0E1QjBELENBQS9DO0FBQUEsQ0FBWjs7a0JBOEJlakIsRyIsImZpbGUiOiIwLjU0YzRlNDQ2YTJiNDE0NmY3ZDliLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBYnN0cmFjdGlvbiBvZiB0aGUgZmV0Y2ggYXBpXG5cbmNvbnN0IGFwaSA9IChib2R5ID0gbnVsbCwgdXJsLCBtZXRob2QsIGhlYWRlcnMgPSBudWxsKSA9PiAobmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgbGV0IG5ld0hlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuICBoZWFkZXJzLmFwcGVuZCgneC1hY2Nlc3MtdG9rZW4nLCBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSkudG9rZW4pO1xuICBpZiAoaGVhZGVycyAhPT0gbnVsbCkge1xuICAgIG5ld0hlYWRlcnMgPSBoZWFkZXJzO1xuICB9XG5cbiAgaWYgKGJvZHkgPT09ICcnIHx8IGJvZHkgPT09IG51bGwpIHtcbiAgICBmZXRjaCh1cmwsIHsgbWV0aG9kLFxuICAgICAgaGVhZGVyczogbmV3SGVhZGVyc1xuICAgIH0pXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UsICc9PT09PT09PT09PT09PT4+Pj4nKTtcbiAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGZldGNoKHVybCwgeyBtZXRob2QsXG4gICAgICBib2R5LFxuICAgICAgaGVhZGVyczogbmV3SGVhZGVyc1xuICAgIH0pXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UsICc9PT09PT09PT09PT09PT4+Pj4nKTtcbiAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgIH0pO1xuICB9XG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFwaTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9qcy9jb21wb25lbnRzL2hlbHBlcnMvYXBpLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==