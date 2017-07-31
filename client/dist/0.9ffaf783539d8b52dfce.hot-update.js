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

var user = sessionStorage.getItem('user');

var Header = function Header() {
  _react2.default.createElement(
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

exports.default = Header;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9oZWFkZXIuanM/MmM1MiJdLCJuYW1lcyI6WyJ1c2VyIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiSGVhZGVyIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJ1bmRlZmluZWQiLCJ1c2VybmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBLElBQU1BLE9BQU9DLGVBQWVDLE9BQWYsQ0FBdUIsTUFBdkIsQ0FBYjs7QUFFQSxJQUFNQyxTQUFTLFNBQVRBLE1BQVMsR0FBTTtBQUNyQjtBQUFBO0FBQUEsTUFBUSxXQUFVLGFBQWxCO0FBQ0k7QUFBQTtBQUFBLFFBQUssV0FBVSxXQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQ0EscUJBQVUsc0RBRFY7QUFFQSxnQkFBSyxHQUZMO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkEsT0FERjtBQU9JQyxjQUFRQyxHQUFSLENBQVlMLElBQVosQ0FQSjtBQUFBO0FBTzBCQSxXQUFLTSxJQUFMLEtBQWNDLFNBQWQsR0FBMEIsRUFBMUIsR0FDeEI7QUFBQTtBQUFBLFVBQU0sV0FBVSxlQUFoQjtBQUFBO0FBQXNDUCxhQUFLTSxJQUFMLENBQVVFO0FBQWhEO0FBUkY7QUFESjtBQWFDLENBZEQ7O2tCQWdCZUwsTSIsImZpbGUiOiIwLjlmZmFmNzgzNTM5ZDhiNTJkZmNlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuY29uc3QgdXNlciA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXInKTtcblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuPGhlYWRlciBjbGFzc05hbWU9XCJwYWdlLWhlYWRlclwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgPGFcbiAgICAgIGNsYXNzTmFtZT0ncGFnZS10aXRsZSBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlcidcbiAgICAgIGhyZWY9XCIjXCI+XG4gICAgICBQb3N0XG4gICAgICA8c3Bhbj5JdDwvc3Bhbj5cbiAgICAgIDwvYT5cbiAgICAgIHsgY29uc29sZS5sb2codXNlcikgfSB7IHVzZXIuZGF0YSA9PT0gdW5kZWZpbmVkID8gJycgOlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidXNlci1ncmVldGluZ1wiPkhpLCB7IHVzZXIuZGF0YS51c2VybmFtZSB9PC9zcGFuPlxuICAgICAgfVxuICAgIDwvZGl2PlxuPC9oZWFkZXI+XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2pzL2NvbXBvbmVudHMvcHJlc2VudGF0aW9uYWwvaGVhZGVyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==