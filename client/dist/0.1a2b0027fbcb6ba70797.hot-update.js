webpackHotUpdate(0,{

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(_ref) {
  var user = _ref.user;

  console.log('USER::::::::::::=====>>>>', user);
  console.log('USERDATA::::::::::::=====>>>>', user.data);
  console.log('USERTOKEN::::::::::::=====>>>>', user.token);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9oZWFkZXIuanM/MmM1MiJdLCJuYW1lcyI6WyJIZWFkZXIiLCJ1c2VyIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJ0b2tlbiIsInVuZGVmaW5lZCIsInVzZXJuYW1lIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJ1c2VyRGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBLElBQU1BLFNBQVMsU0FBVEEsTUFBUyxPQUFjO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXOztBQUMzQkMsVUFBUUMsR0FBUixDQUFZLDJCQUFaLEVBQXlDRixJQUF6QztBQUNBQyxVQUFRQyxHQUFSLENBQVksK0JBQVosRUFBNkNGLEtBQUtHLElBQWxEO0FBQ0FGLFVBQVFDLEdBQVIsQ0FBWSxnQ0FBWixFQUE4Q0YsS0FBS0ksS0FBbkQ7QUFDQSxTQUFRO0FBQUE7QUFBQSxNQUFRLFdBQVUsYUFBbEI7QUFDSjtBQUFBO0FBQUEsUUFBSyxXQUFVLFdBQWY7QUFDRTtBQUFBO0FBQUE7QUFDQSxxQkFBVSxzREFEVjtBQUVBLGdCQUFLLEdBRkw7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQSxPQURGO0FBT0lKLFdBQUtHLElBQUwsS0FBY0UsU0FBZCxHQUEwQixFQUExQixHQUNGO0FBQUE7QUFBQSxVQUFNLFdBQVUsZUFBaEI7QUFBQTtBQUFzQ0wsYUFBS0csSUFBTCxDQUFVRztBQUFoRDtBQVJGO0FBREksR0FBUjtBQWFELENBakJEOztBQW1CQSxJQUFNQyxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQsRUFBVztBQUNqQyxTQUFPO0FBQ0xSLFVBQU1RLE1BQU1DO0FBRFAsR0FBUDtBQUdELENBSkQ7a0JBS2UseUJBQVFGLGVBQVIsRUFBeUIsSUFBekIsRUFBK0JSLE1BQS9CLEMiLCJmaWxlIjoiMC4xYTJiMDAyN2ZiY2I2YmE3MDc5Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmNvbnN0IEhlYWRlciA9ICh7IHVzZXIgfSkgPT4ge1xuICBjb25zb2xlLmxvZygnVVNFUjo6Ojo6Ojo6Ojo6Oj09PT09Pj4+PicsIHVzZXIpO1xuICBjb25zb2xlLmxvZygnVVNFUkRBVEE6Ojo6Ojo6Ojo6Ojo9PT09PT4+Pj4nLCB1c2VyLmRhdGEpO1xuICBjb25zb2xlLmxvZygnVVNFUlRPS0VOOjo6Ojo6Ojo6Ojo6PT09PT0+Pj4+JywgdXNlci50b2tlbik7XG4gIHJldHVybiAoPGhlYWRlciBjbGFzc05hbWU9XCJwYWdlLWhlYWRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgIDxhXG4gICAgICAgIGNsYXNzTmFtZT0ncGFnZS10aXRsZSBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlcidcbiAgICAgICAgaHJlZj1cIiNcIj5cbiAgICAgICAgUG9zdFxuICAgICAgICA8c3Bhbj5JdDwvc3Bhbj5cbiAgICAgICAgPC9hPlxuICAgICAgICB7IHVzZXIuZGF0YSA9PT0gdW5kZWZpbmVkID8gJycgOlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ1c2VyLWdyZWV0aW5nXCI+SGksIHsgdXNlci5kYXRhLnVzZXJuYW1lIH08L3NwYW4+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICA8L2hlYWRlcj4pO1xufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdXNlcjogc3RhdGUudXNlckRhdGFcbiAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbnVsbCkoSGVhZGVyKTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2pzL2NvbXBvbmVudHMvcHJlc2VudGF0aW9uYWwvaGVhZGVyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==