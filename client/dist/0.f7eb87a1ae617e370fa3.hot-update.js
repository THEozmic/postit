webpackHotUpdate(0,{

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// Abstraction of the fetch api

var api = function api(body, url, method, headers) {
  return new Promise(function (resolve) {
    var newHeaders = new Headers();
    newHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
    if (headers !== null) {
      newHeaders = headers;
    }
    if (body === '') {
      fetch(url, { method: method,
        newHeaders: newHeaders
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9oZWxwZXJzL2FwaS5qcz84OTQzIl0sIm5hbWVzIjpbImFwaSIsImJvZHkiLCJ1cmwiLCJtZXRob2QiLCJoZWFkZXJzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJuZXdIZWFkZXJzIiwiSGVhZGVycyIsImFwcGVuZCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsTUFBTSxTQUFOQSxHQUFNLENBQUNDLElBQUQsRUFBT0MsR0FBUCxFQUFZQyxNQUFaLEVBQW9CQyxPQUFwQjtBQUFBLFNBQWlDLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQWE7QUFDcEUsUUFBSUMsYUFBYSxJQUFJQyxPQUFKLEVBQWpCO0FBQ0FELGVBQVdFLE1BQVgsQ0FBa0IsY0FBbEIsRUFBa0MsbUNBQWxDO0FBQ0EsUUFBSUwsWUFBWSxJQUFoQixFQUFzQjtBQUNwQkcsbUJBQWFILE9BQWI7QUFDRDtBQUNELFFBQUlILFNBQVMsRUFBYixFQUFpQjtBQUNmUyxZQUFNUixHQUFOLEVBQVcsRUFBRUMsY0FBRjtBQUNUSTtBQURTLE9BQVgsRUFHQ0ksSUFIRCxDQUdNO0FBQUEsZUFBWUMsU0FBU0MsSUFBVCxFQUFaO0FBQUEsT0FITixFQUlDRixJQUpELENBSU0sVUFBQ0MsUUFBRCxFQUFjO0FBQ2xCRSxnQkFBUUMsR0FBUixDQUFZSCxRQUFaLEVBQXNCLG9CQUF0QjtBQUNBTixnQkFBUU0sUUFBUjtBQUNELE9BUEQ7QUFRRCxLQVRELE1BU087QUFDTEYsWUFBTVIsR0FBTixFQUFXLEVBQUVDLGNBQUY7QUFDVEYsa0JBRFM7QUFFVE07QUFGUyxPQUFYLEVBSUNJLElBSkQsQ0FJTTtBQUFBLGVBQVlDLFNBQVNDLElBQVQsRUFBWjtBQUFBLE9BSk4sRUFLQ0YsSUFMRCxDQUtNLFVBQUNDLFFBQUQsRUFBYztBQUNsQkUsZ0JBQVFDLEdBQVIsQ0FBWUgsUUFBWixFQUFzQixvQkFBdEI7QUFDQU4sZ0JBQVFNLFFBQVI7QUFDRCxPQVJEO0FBU0Q7QUFDRixHQTFCNEMsQ0FBakM7QUFBQSxDQUFaOztrQkE0QmVaLEciLCJmaWxlIjoiMC5mN2ViODdhMWFlNjE3ZTM3MGZhMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQWJzdHJhY3Rpb24gb2YgdGhlIGZldGNoIGFwaVxuXG5jb25zdCBhcGkgPSAoYm9keSwgdXJsLCBtZXRob2QsIGhlYWRlcnMpID0+IChuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICBsZXQgbmV3SGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gIG5ld0hlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XG4gIGlmIChoZWFkZXJzICE9PSBudWxsKSB7XG4gICAgbmV3SGVhZGVycyA9IGhlYWRlcnM7XG4gIH1cbiAgaWYgKGJvZHkgPT09ICcnKSB7XG4gICAgZmV0Y2godXJsLCB7IG1ldGhvZCxcbiAgICAgIG5ld0hlYWRlcnNcbiAgICB9KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLCAnPT09PT09PT09PT09PT0+Pj4+Jyk7XG4gICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBmZXRjaCh1cmwsIHsgbWV0aG9kLFxuICAgICAgYm9keSxcbiAgICAgIG5ld0hlYWRlcnNcbiAgICB9KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLCAnPT09PT09PT09PT09PT0+Pj4+Jyk7XG4gICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICB9KTtcbiAgfVxufSkpO1xuXG5leHBvcnQgZGVmYXVsdCBhcGk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvanMvY29tcG9uZW50cy9oZWxwZXJzL2FwaS5qcyJdLCJzb3VyY2VSb290IjoiIn0=