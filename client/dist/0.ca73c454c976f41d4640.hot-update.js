webpackHotUpdate(0,{

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(18);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(_ref) {
  var user = _ref.user;

  console.log('', user);
  user = JSON.parse(user);
  return _react2.default.createElement(
    'header',
    { className: 'page-header' },
    _react2.default.createElement(
      'div',
      { className: 'container' },
      _react2.default.createElement(
        'a',
        {
          className: 'page-title justify-content-center align-items-center',
          href: '#' },
        'Post',
        _react2.default.createElement(
          'span',
          null,
          'It'
        )
      ),
      console.log(user),
      ' ',
      user.data === undefined ? '' : _react2.default.createElement(
        'span',
        { className: 'user-greeting' },
        'Hi, ',
        user.data.username
      )
    )
  );
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.userData
  };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, null)(Header);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9oZWFkZXIuanM/MmM1MiJdLCJuYW1lcyI6WyJIZWFkZXIiLCJ1c2VyIiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJwYXJzZSIsImRhdGEiLCJ1bmRlZmluZWQiLCJ1c2VybmFtZSIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwidXNlckRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxTQUFTLFNBQVRBLE1BQVMsT0FBYztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFDM0JDLFVBQVFDLEdBQVIsQ0FBWSxFQUFaLEVBQWdCRixJQUFoQjtBQUNBQSxTQUFPRyxLQUFLQyxLQUFMLENBQVdKLElBQVgsQ0FBUDtBQUNBLFNBQVE7QUFBQTtBQUFBLE1BQVEsV0FBVSxhQUFsQjtBQUNKO0FBQUE7QUFBQSxRQUFLLFdBQVUsV0FBZjtBQUNFO0FBQUE7QUFBQTtBQUNBLHFCQUFVLHNEQURWO0FBRUEsZ0JBQUssR0FGTDtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBLE9BREY7QUFPSUMsY0FBUUMsR0FBUixDQUFZRixJQUFaLENBUEo7QUFBQTtBQU8wQkEsV0FBS0ssSUFBTCxLQUFjQyxTQUFkLEdBQTBCLEVBQTFCLEdBQ3hCO0FBQUE7QUFBQSxVQUFNLFdBQVUsZUFBaEI7QUFBQTtBQUFzQ04sYUFBS0ssSUFBTCxDQUFVRTtBQUFoRDtBQVJGO0FBREksR0FBUjtBQWFELENBaEJEOztBQWtCQSxJQUFNQyxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQsRUFBVztBQUNqQyxTQUFPO0FBQ0xULFVBQU1TLE1BQU1DO0FBRFAsR0FBUDtBQUdELENBSkQ7a0JBS2UseUJBQVFGLGVBQVIsRUFBeUIsSUFBekIsRUFBK0JULE1BQS9CLEMiLCJmaWxlIjoiMC5jYTczYzQ1NGM5NzZmNDFkNDY0MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmNvbnN0IEhlYWRlciA9ICh7IHVzZXIgfSkgPT4ge1xuICBjb25zb2xlLmxvZygnJywgdXNlcik7XG4gIHVzZXIgPSBKU09OLnBhcnNlKHVzZXIpO1xuICByZXR1cm4gKDxoZWFkZXIgY2xhc3NOYW1lPVwicGFnZS1oZWFkZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICA8YVxuICAgICAgICBjbGFzc05hbWU9J3BhZ2UtdGl0bGUganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXInXG4gICAgICAgIGhyZWY9XCIjXCI+XG4gICAgICAgIFBvc3RcbiAgICAgICAgPHNwYW4+SXQ8L3NwYW4+XG4gICAgICAgIDwvYT5cbiAgICAgICAgeyBjb25zb2xlLmxvZyh1c2VyKSB9IHsgdXNlci5kYXRhID09PSB1bmRlZmluZWQgPyAnJyA6XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInVzZXItZ3JlZXRpbmdcIj5IaSwgeyB1c2VyLmRhdGEudXNlcm5hbWUgfTwvc3Bhbj5cbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gIDwvaGVhZGVyPik7XG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB1c2VyOiBzdGF0ZS51c2VyRGF0YVxuICB9O1xufTtcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBudWxsKShIZWFkZXIpO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9oZWFkZXIuanMiXSwic291cmNlUm9vdCI6IiJ9