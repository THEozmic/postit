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

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.userData
  };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, null)(Header);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9oZWFkZXIuanM/MmM1MiJdLCJuYW1lcyI6WyJIZWFkZXIiLCJ1c2VyIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJ1bmRlZmluZWQiLCJ1c2VybmFtZSIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwidXNlckRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxTQUFTLFNBQVRBLE1BQVMsT0FBYztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFDM0IsU0FBUTtBQUFBO0FBQUEsTUFBUSxXQUFVLGFBQWxCO0FBQ0o7QUFBQTtBQUFBLFFBQUssV0FBVSxXQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQ0EscUJBQVUsc0RBRFY7QUFFQSxnQkFBSyxHQUZMO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkEsT0FERjtBQU9JQyxjQUFRQyxHQUFSLENBQVlGLElBQVosQ0FQSjtBQUFBO0FBTzBCQSxXQUFLRyxJQUFMLEtBQWNDLFNBQWQsR0FBMEIsRUFBMUIsR0FDeEI7QUFBQTtBQUFBLFVBQU0sV0FBVSxlQUFoQjtBQUFBO0FBQXNDSixhQUFLRyxJQUFMLENBQVVFO0FBQWhEO0FBUkY7QUFESSxHQUFSO0FBYUQsQ0FkRDs7QUFnQkEsSUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFELEVBQVc7QUFDakMsU0FBTztBQUNMUCxVQUFNTyxNQUFNQztBQURQLEdBQVA7QUFHRCxDQUpEO2tCQUtlLHlCQUFRRixlQUFSLEVBQXlCLElBQXpCLEVBQStCUCxNQUEvQixDIiwiZmlsZSI6IjAuZGVmZjhiYWYyNWE1ZTgyZjFiNTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5jb25zdCBIZWFkZXIgPSAoeyB1c2VyIH0pID0+IHtcbiAgcmV0dXJuICg8aGVhZGVyIGNsYXNzTmFtZT1cInBhZ2UtaGVhZGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgPGFcbiAgICAgICAgY2xhc3NOYW1lPSdwYWdlLXRpdGxlIGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyJ1xuICAgICAgICBocmVmPVwiI1wiPlxuICAgICAgICBQb3N0XG4gICAgICAgIDxzcGFuPkl0PC9zcGFuPlxuICAgICAgICA8L2E+XG4gICAgICAgIHsgY29uc29sZS5sb2codXNlcikgfSB7IHVzZXIuZGF0YSA9PT0gdW5kZWZpbmVkID8gJycgOlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ1c2VyLWdyZWV0aW5nXCI+SGksIHsgdXNlci5kYXRhLnVzZXJuYW1lIH08L3NwYW4+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICA8L2hlYWRlcj4pO1xufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdXNlcjogc3RhdGUudXNlckRhdGFcbiAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbnVsbCkoSGVhZGVyKTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2pzL2NvbXBvbmVudHMvcHJlc2VudGF0aW9uYWwvaGVhZGVyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==