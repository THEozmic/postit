webpackHotUpdate(0,{

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var user = JSON.parse(sessionStorage.getItem('user'));
var Header = function Header() {
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
      user.data.username === undefined ? '' : _react2.default.createElement(
        'span',
        { className: 'user-greeting' },
        'Hi, ',
        user.data.username
      )
    )
  );
};

exports.default = Header;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9oZWFkZXIuanM/MmM1MiJdLCJuYW1lcyI6WyJ1c2VyIiwiSlNPTiIsInBhcnNlIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiSGVhZGVyIiwiZGF0YSIsInVzZXJuYW1lIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsS0FBS0MsS0FBTCxDQUFXQyxlQUFlQyxPQUFmLENBQXVCLE1BQXZCLENBQVgsQ0FBYjtBQUNBLElBQU1DLFNBQVMsU0FBVEEsTUFBUztBQUFBLFNBQ2Y7QUFBQTtBQUFBLE1BQVEsV0FBVSxhQUFsQjtBQUNJO0FBQUE7QUFBQSxRQUFLLFdBQVUsV0FBZjtBQUNFO0FBQUE7QUFBQTtBQUNBLHFCQUFVLHNEQURWO0FBRUEsZ0JBQUssR0FGTDtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBLE9BREY7QUFPSUwsV0FBS00sSUFBTCxDQUFVQyxRQUFWLEtBQXVCQyxTQUF2QixHQUFtQyxFQUFuQyxHQUNGO0FBQUE7QUFBQSxVQUFNLFdBQVUsZUFBaEI7QUFBQTtBQUFzQ1IsYUFBS00sSUFBTCxDQUFVQztBQUFoRDtBQVJGO0FBREosR0FEZTtBQUFBLENBQWY7O2tCQWVlRixNIiwiZmlsZSI6IjAuMmRmNzczOGYwNjUyYjk0ZDc5ZDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IHVzZXIgPSBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSk7XG5jb25zdCBIZWFkZXIgPSAoKSA9PlxuPGhlYWRlciBjbGFzc05hbWU9XCJwYWdlLWhlYWRlclwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgPGFcbiAgICAgIGNsYXNzTmFtZT0ncGFnZS10aXRsZSBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlcidcbiAgICAgIGhyZWY9XCIjXCI+XG4gICAgICBQb3N0XG4gICAgICA8c3Bhbj5JdDwvc3Bhbj5cbiAgICAgIDwvYT5cbiAgICAgIHsgdXNlci5kYXRhLnVzZXJuYW1lID09PSB1bmRlZmluZWQgPyAnJyA6XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ1c2VyLWdyZWV0aW5nXCI+SGksIHsgdXNlci5kYXRhLnVzZXJuYW1lIH08L3NwYW4+XG4gICAgICB9XG4gICAgPC9kaXY+XG48L2hlYWRlcj47XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2pzL2NvbXBvbmVudHMvcHJlc2VudGF0aW9uYWwvaGVhZGVyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==