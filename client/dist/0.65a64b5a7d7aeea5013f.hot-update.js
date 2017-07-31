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

exports.default = (0, _reactRedux.connect)(mapStateToProps, null)(Header);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9oZWFkZXIuanM/MmM1MiJdLCJuYW1lcyI6WyJIZWFkZXIiLCJ1c2VyIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJ1bmRlZmluZWQiLCJ1c2VybmFtZSIsIm1hcFN0YXRlVG9Qcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBLElBQU1BLFNBQVMsU0FBVEEsTUFBUztBQUFBLE1BQUdDLElBQUgsUUFBR0EsSUFBSDtBQUFBLFNBQ2Y7QUFBQTtBQUFBLE1BQVEsV0FBVSxhQUFsQjtBQUNJO0FBQUE7QUFBQSxRQUFLLFdBQVUsV0FBZjtBQUNFO0FBQUE7QUFBQTtBQUNBLHFCQUFVLHNEQURWO0FBRUEsZ0JBQUssR0FGTDtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBLE9BREY7QUFPSUMsY0FBUUMsR0FBUixDQUFZRixJQUFaLENBUEo7QUFBQTtBQU8wQkEsV0FBS0csSUFBTCxLQUFjQyxTQUFkLEdBQTBCLEVBQTFCLEdBQ3hCO0FBQUE7QUFBQSxVQUFNLFdBQVUsZUFBaEI7QUFBQTtBQUFzQ0osYUFBS0csSUFBTCxDQUFVRTtBQUFoRDtBQVJGO0FBREosR0FEZTtBQUFBLENBQWY7O2tCQWVlLHlCQUFRQyxlQUFSLEVBQXlCLElBQXpCLEVBQStCUCxNQUEvQixDIiwiZmlsZSI6IjAuNjVhNjRiNWE3ZDdhZWVhNTAxM2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5jb25zdCBIZWFkZXIgPSAoeyB1c2VyIH0pID0+XG48aGVhZGVyIGNsYXNzTmFtZT1cInBhZ2UtaGVhZGVyXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICA8YVxuICAgICAgY2xhc3NOYW1lPSdwYWdlLXRpdGxlIGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyJ1xuICAgICAgaHJlZj1cIiNcIj5cbiAgICAgIFBvc3RcbiAgICAgIDxzcGFuPkl0PC9zcGFuPlxuICAgICAgPC9hPlxuICAgICAgeyBjb25zb2xlLmxvZyh1c2VyKSB9IHsgdXNlci5kYXRhID09PSB1bmRlZmluZWQgPyAnJyA6XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ1c2VyLWdyZWV0aW5nXCI+SGksIHsgdXNlci5kYXRhLnVzZXJuYW1lIH08L3NwYW4+XG4gICAgICB9XG4gICAgPC9kaXY+XG48L2hlYWRlcj47XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBudWxsKShIZWFkZXIpO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9oZWFkZXIuanMiXSwic291cmNlUm9vdCI6IiJ9