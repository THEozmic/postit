webpackHotUpdate(0,{

/***/ 19:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9oZWxwZXJzL2FwaS5qcz84OTQzIl0sIm5hbWVzIjpbImFwaSIsImJvZHkiLCJ1cmwiLCJtZXRob2QiLCJQcm9taXNlIiwicmVzb2x2ZSIsImhlYWRlcnMiLCJIZWFkZXJzIiwiYXBwZW5kIiwiSlNPTiIsInBhcnNlIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwidG9rZW4iLCJuZXdIZWFkZXJzIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxNQUFNLFNBQU5BLEdBQU0sQ0FBQ0MsSUFBRCxFQUFPQyxHQUFQLEVBQVlDLE1BQVo7QUFBQSxTQUF3QixJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFhO0FBQzNELFFBQUlDLFVBQVUsSUFBSUMsT0FBSixFQUFkO0FBQ0FELFlBQVFFLE1BQVIsQ0FBZSxjQUFmLEVBQStCLG1DQUEvQjtBQUNBRixZQUFRRSxNQUFSLENBQWUsZ0JBQWYsRUFBaUNDLEtBQUtDLEtBQUwsQ0FBV0MsZUFBZUMsT0FBZixDQUF1QixNQUF2QixDQUFYLEVBQTJDQyxLQUE1RTtBQUNBLFFBQUlQLFlBQVksSUFBaEIsRUFBc0I7QUFDcEJRLG1CQUFhUixPQUFiO0FBQ0Q7O0FBRUQsUUFBSUwsU0FBUyxFQUFULElBQWVBLFNBQVMsSUFBNUIsRUFBa0M7QUFDaENjLFlBQU1iLEdBQU4sRUFBVyxFQUFFQyxjQUFGO0FBQ1RHLGlCQUFTUTtBQURBLE9BQVgsRUFHQ0UsSUFIRCxDQUdNO0FBQUEsZUFBWUMsU0FBU0MsSUFBVCxFQUFaO0FBQUEsT0FITixFQUlDRixJQUpELENBSU0sVUFBQ0MsUUFBRCxFQUFjO0FBQ2xCRSxnQkFBUUMsR0FBUixDQUFZSCxRQUFaLEVBQXNCLG9CQUF0QjtBQUNBWixnQkFBUVksUUFBUjtBQUNELE9BUEQ7QUFRRCxLQVRELE1BU087QUFDTEYsWUFBTWIsR0FBTixFQUFXLEVBQUVDLGNBQUY7QUFDVEYsa0JBRFM7QUFFVEssaUJBQVNRO0FBRkEsT0FBWCxFQUlDRSxJQUpELENBSU07QUFBQSxlQUFZQyxTQUFTQyxJQUFULEVBQVo7QUFBQSxPQUpOLEVBS0NGLElBTEQsQ0FLTSxVQUFDQyxRQUFELEVBQWM7QUFDbEJFLGdCQUFRQyxHQUFSLENBQVlILFFBQVosRUFBc0Isb0JBQXRCO0FBQ0FaLGdCQUFRWSxRQUFSO0FBQ0QsT0FSRDtBQVNEO0FBQ0YsR0E1Qm1DLENBQXhCO0FBQUEsQ0FBWjs7a0JBOEJlakIsRyIsImZpbGUiOiIwLmIzNzMwZDI2MTU2NDBhNzM0NDkwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBYnN0cmFjdGlvbiBvZiB0aGUgZmV0Y2ggYXBpXG5cbmNvbnN0IGFwaSA9IChib2R5LCB1cmwsIG1ldGhvZCkgPT4gKG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcbiAgaGVhZGVycy5hcHBlbmQoJ3gtYWNjZXNzLXRva2VuJywgSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpLnRva2VuKTtcbiAgaWYgKGhlYWRlcnMgIT09IG51bGwpIHtcbiAgICBuZXdIZWFkZXJzID0gaGVhZGVycztcbiAgfVxuXG4gIGlmIChib2R5ID09PSAnJyB8fCBib2R5ID09PSBudWxsKSB7XG4gICAgZmV0Y2godXJsLCB7IG1ldGhvZCxcbiAgICAgIGhlYWRlcnM6IG5ld0hlYWRlcnNcbiAgICB9KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLCAnPT09PT09PT09PT09PT0+Pj4+Jyk7XG4gICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBmZXRjaCh1cmwsIHsgbWV0aG9kLFxuICAgICAgYm9keSxcbiAgICAgIGhlYWRlcnM6IG5ld0hlYWRlcnNcbiAgICB9KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLCAnPT09PT09PT09PT09PT0+Pj4+Jyk7XG4gICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICB9KTtcbiAgfVxufSkpO1xuXG5leHBvcnQgZGVmYXVsdCBhcGk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvanMvY29tcG9uZW50cy9oZWxwZXJzL2FwaS5qcyJdLCJzb3VyY2VSb290IjoiIn0=