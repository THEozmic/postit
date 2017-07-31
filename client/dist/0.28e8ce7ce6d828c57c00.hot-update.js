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
        body: body,
        newHeaders: newHeaders
      }).then(function (response) {
        return response.json();
      }).then(function (response) {
        console.log(response, '==============>>>>');
        resolve(response);
      });
    }ek;
    fetch(url, { method: method,
      body: body,
      newHeaders: newHeaders
    }).then(function (response) {
      return response.json();
    }).then(function (response) {
      console.log(response, '==============>>>>');
      resolve(response);
    });
  });
};

exports.default = api;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9oZWxwZXJzL2FwaS5qcz84OTQzIl0sIm5hbWVzIjpbImFwaSIsImJvZHkiLCJ1cmwiLCJtZXRob2QiLCJoZWFkZXJzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJuZXdIZWFkZXJzIiwiSGVhZGVycyIsImFwcGVuZCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJlayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxNQUFNLFNBQU5BLEdBQU0sQ0FBQ0MsSUFBRCxFQUFPQyxHQUFQLEVBQVlDLE1BQVosRUFBb0JDLE9BQXBCO0FBQUEsU0FBaUMsSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBYTtBQUNwRSxRQUFJQyxhQUFhLElBQUlDLE9BQUosRUFBakI7QUFDQUQsZUFBV0UsTUFBWCxDQUFrQixjQUFsQixFQUFrQyxtQ0FBbEM7QUFDQSxRQUFJTCxZQUFZLElBQWhCLEVBQXNCO0FBQ3BCRyxtQkFBYUgsT0FBYjtBQUNEO0FBQ0QsUUFBSUgsU0FBUyxFQUFiLEVBQWlCO0FBQ2ZTLFlBQU1SLEdBQU4sRUFBVyxFQUFFQyxjQUFGO0FBQ1RGLGtCQURTO0FBRVRNO0FBRlMsT0FBWCxFQUlDSSxJQUpELENBSU07QUFBQSxlQUFZQyxTQUFTQyxJQUFULEVBQVo7QUFBQSxPQUpOLEVBS0NGLElBTEQsQ0FLTSxVQUFDQyxRQUFELEVBQWM7QUFDbEJFLGdCQUFRQyxHQUFSLENBQVlILFFBQVosRUFBc0Isb0JBQXRCO0FBQ0FOLGdCQUFRTSxRQUFSO0FBQ0QsT0FSRDtBQVNELEtBQUNJO0FBQ0ZOLFVBQU1SLEdBQU4sRUFBVyxFQUFFQyxjQUFGO0FBQ1RGLGdCQURTO0FBRVRNO0FBRlMsS0FBWCxFQUlDSSxJQUpELENBSU07QUFBQSxhQUFZQyxTQUFTQyxJQUFULEVBQVo7QUFBQSxLQUpOLEVBS0NGLElBTEQsQ0FLTSxVQUFDQyxRQUFELEVBQWM7QUFDbEJFLGNBQVFDLEdBQVIsQ0FBWUgsUUFBWixFQUFzQixvQkFBdEI7QUFDQU4sY0FBUU0sUUFBUjtBQUNELEtBUkQ7QUFTRCxHQTFCNEMsQ0FBakM7QUFBQSxDQUFaOztrQkE0QmVaLEciLCJmaWxlIjoiMC4yOGU4Y2U3Y2U2ZDgyOGM1N2MwMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQWJzdHJhY3Rpb24gb2YgdGhlIGZldGNoIGFwaVxuXG5jb25zdCBhcGkgPSAoYm9keSwgdXJsLCBtZXRob2QsIGhlYWRlcnMpID0+IChuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICBsZXQgbmV3SGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gIG5ld0hlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XG4gIGlmIChoZWFkZXJzICE9PSBudWxsKSB7XG4gICAgbmV3SGVhZGVycyA9IGhlYWRlcnM7XG4gIH1cbiAgaWYgKGJvZHkgPT09ICcnKSB7XG4gICAgZmV0Y2godXJsLCB7IG1ldGhvZCxcbiAgICAgIGJvZHksXG4gICAgICBuZXdIZWFkZXJzXG4gICAgfSlcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSwgJz09PT09PT09PT09PT09Pj4+PicpO1xuICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgfSk7XG4gIH0gZWtcbiAgZmV0Y2godXJsLCB7IG1ldGhvZCxcbiAgICBib2R5LFxuICAgIG5ld0hlYWRlcnNcbiAgfSlcbiAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZSwgJz09PT09PT09PT09PT09Pj4+PicpO1xuICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICB9KTtcbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgYXBpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2pzL2NvbXBvbmVudHMvaGVscGVycy9hcGkuanMiXSwic291cmNlUm9vdCI6IiJ9