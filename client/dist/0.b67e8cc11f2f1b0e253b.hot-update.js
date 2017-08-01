webpackHotUpdate(0,{

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(_ref) {
  var user = _ref.user;

  user = JSON.parse;
  console.log('USER::::::::::::=====>>>>', user);
  console.log('USERDATA::::::::::::=====>>>>', user.data);
  console.log('USERTOKEN::::::::::::=====>>>>', user.token);
  console.log('USERDATA::::::::::::=====>>>>', user.data);
  console.log('USERTYPE::::::::::::=====>>>>', typeof user === 'undefined' ? 'undefined' : _typeof(user));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9oZWFkZXIuanM/MmM1MiJdLCJuYW1lcyI6WyJIZWFkZXIiLCJ1c2VyIiwiSlNPTiIsInBhcnNlIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJ0b2tlbiIsInVuZGVmaW5lZCIsInVzZXJuYW1lIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJ1c2VyRGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUEsSUFBTUEsU0FBUyxTQUFUQSxNQUFTLE9BQWM7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQzNCQSxTQUFPQyxLQUFLQyxLQUFaO0FBQ0FDLFVBQVFDLEdBQVIsQ0FBWSwyQkFBWixFQUF5Q0osSUFBekM7QUFDQUcsVUFBUUMsR0FBUixDQUFZLCtCQUFaLEVBQTZDSixLQUFLSyxJQUFsRDtBQUNBRixVQUFRQyxHQUFSLENBQVksZ0NBQVosRUFBOENKLEtBQUtNLEtBQW5EO0FBQ0FILFVBQVFDLEdBQVIsQ0FBWSwrQkFBWixFQUE2Q0osS0FBS0ssSUFBbEQ7QUFDQUYsVUFBUUMsR0FBUixDQUFZLCtCQUFaLFNBQW9ESixJQUFwRCx5Q0FBb0RBLElBQXBEO0FBQ0EsU0FBUTtBQUFBO0FBQUEsTUFBUSxXQUFVLGFBQWxCO0FBQ0o7QUFBQTtBQUFBLFFBQUssV0FBVSxXQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQ0EscUJBQVUsc0RBRFY7QUFFQSxnQkFBSyxHQUZMO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkEsT0FERjtBQU9JQSxXQUFLSyxJQUFMLEtBQWNFLFNBQWQsR0FBMEIsRUFBMUIsR0FDRjtBQUFBO0FBQUEsVUFBTSxXQUFVLGVBQWhCO0FBQUE7QUFBc0NQLGFBQUtLLElBQUwsQ0FBVUc7QUFBaEQ7QUFSRjtBQURJLEdBQVI7QUFhRCxDQXBCRDs7QUFzQkEsSUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFELEVBQVc7QUFDakMsU0FBTztBQUNMVixVQUFNVSxNQUFNQztBQURQLEdBQVA7QUFHRCxDQUpEO2tCQUtlLHlCQUFRRixlQUFSLEVBQXlCLElBQXpCLEVBQStCVixNQUEvQixDIiwiZmlsZSI6IjAuYjY3ZThjYzExZjJmMWIwZTI1M2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5jb25zdCBIZWFkZXIgPSAoeyB1c2VyIH0pID0+IHtcbiAgdXNlciA9IEpTT04ucGFyc2VcbiAgY29uc29sZS5sb2coJ1VTRVI6Ojo6Ojo6Ojo6Ojo9PT09PT4+Pj4nLCB1c2VyKTtcbiAgY29uc29sZS5sb2coJ1VTRVJEQVRBOjo6Ojo6Ojo6Ojo6PT09PT0+Pj4+JywgdXNlci5kYXRhKTtcbiAgY29uc29sZS5sb2coJ1VTRVJUT0tFTjo6Ojo6Ojo6Ojo6Oj09PT09Pj4+PicsIHVzZXIudG9rZW4pO1xuICBjb25zb2xlLmxvZygnVVNFUkRBVEE6Ojo6Ojo6Ojo6Ojo9PT09PT4+Pj4nLCB1c2VyLmRhdGEpO1xuICBjb25zb2xlLmxvZygnVVNFUlRZUEU6Ojo6Ojo6Ojo6Ojo9PT09PT4+Pj4nLCB0eXBlb2YgdXNlcik7XG4gIHJldHVybiAoPGhlYWRlciBjbGFzc05hbWU9XCJwYWdlLWhlYWRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgIDxhXG4gICAgICAgIGNsYXNzTmFtZT0ncGFnZS10aXRsZSBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlcidcbiAgICAgICAgaHJlZj1cIiNcIj5cbiAgICAgICAgUG9zdFxuICAgICAgICA8c3Bhbj5JdDwvc3Bhbj5cbiAgICAgICAgPC9hPlxuICAgICAgICB7IHVzZXIuZGF0YSA9PT0gdW5kZWZpbmVkID8gJycgOlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ1c2VyLWdyZWV0aW5nXCI+SGksIHsgdXNlci5kYXRhLnVzZXJuYW1lIH08L3NwYW4+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICA8L2hlYWRlcj4pO1xufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdXNlcjogc3RhdGUudXNlckRhdGFcbiAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbnVsbCkoSGVhZGVyKTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2pzL2NvbXBvbmVudHMvcHJlc2VudGF0aW9uYWwvaGVhZGVyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==