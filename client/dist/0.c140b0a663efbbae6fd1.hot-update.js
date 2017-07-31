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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9oZWFkZXIuanM/MmM1MiJdLCJuYW1lcyI6WyJIZWFkZXIiLCJ1c2VyIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJ1bmRlZmluZWQiLCJ1c2VybmFtZSIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwidXNlckRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxTQUFTLFNBQVRBLE1BQVM7QUFBQSxNQUFHQyxJQUFILFFBQUdBLElBQUg7QUFBQSxTQUNmO0FBQUE7QUFBQSxNQUFRLFdBQVUsYUFBbEI7QUFDSTtBQUFBO0FBQUEsUUFBSyxXQUFVLFdBQWY7QUFDRTtBQUFBO0FBQUE7QUFDQSxxQkFBVSxzREFEVjtBQUVBLGdCQUFLLEdBRkw7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQSxPQURGO0FBT0lDLGNBQVFDLEdBQVIsQ0FBWUYsSUFBWixDQVBKO0FBQUE7QUFPMEJBLFdBQUtHLElBQUwsS0FBY0MsU0FBZCxHQUEwQixFQUExQixHQUN4QjtBQUFBO0FBQUEsVUFBTSxXQUFVLGVBQWhCO0FBQUE7QUFBc0NKLGFBQUtHLElBQUwsQ0FBVUU7QUFBaEQ7QUFSRjtBQURKLEdBRGU7QUFBQSxDQUFmOztBQWVBLElBQU1DLGtCQUFrQixTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQ2pDLFNBQU87QUFDTFAsVUFBTU8sTUFBTUM7QUFEUCxHQUFQO0FBR0QsQ0FKRDtrQkFLZSx5QkFBUUYsZUFBUixFQUF5QixJQUF6QixFQUErQlAsTUFBL0IsQyIsImZpbGUiOiIwLmMxNDBiMGE2NjNlZmJiYWU2ZmQxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuY29uc3QgSGVhZGVyID0gKHsgdXNlciB9KSA9PlxuPGhlYWRlciBjbGFzc05hbWU9XCJwYWdlLWhlYWRlclwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgPGFcbiAgICAgIGNsYXNzTmFtZT0ncGFnZS10aXRsZSBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlcidcbiAgICAgIGhyZWY9XCIjXCI+XG4gICAgICBQb3N0XG4gICAgICA8c3Bhbj5JdDwvc3Bhbj5cbiAgICAgIDwvYT5cbiAgICAgIHsgY29uc29sZS5sb2codXNlcikgfSB7IHVzZXIuZGF0YSA9PT0gdW5kZWZpbmVkID8gJycgOlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidXNlci1ncmVldGluZ1wiPkhpLCB7IHVzZXIuZGF0YS51c2VybmFtZSB9PC9zcGFuPlxuICAgICAgfVxuICAgIDwvZGl2PlxuPC9oZWFkZXI+O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB1c2VyOiBzdGF0ZS51c2VyRGF0YVxuICB9O1xufTtcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBudWxsKShIZWFkZXIpO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9oZWFkZXIuanMiXSwic291cmNlUm9vdCI6IiJ9