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

var user = JSON.strsessionStorage.getItem('user');

var Header = function Header() {
  console.log('User::::::', user);
  if (user === undefined || user === null) {
    location.hash = '#login';
    return null;
  }
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

exports.default = Header;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9oZWFkZXIuanM/MmM1MiJdLCJuYW1lcyI6WyJ1c2VyIiwiSlNPTiIsInN0cnNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsIkhlYWRlciIsImNvbnNvbGUiLCJsb2ciLCJ1bmRlZmluZWQiLCJsb2NhdGlvbiIsImhhc2giLCJkYXRhIiwidXNlcm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxPQUFPQyxLQUFLQyxpQkFBTCxDQUF1QkMsT0FBdkIsQ0FBK0IsTUFBL0IsQ0FBYjs7QUFFQSxJQUFNQyxTQUFTLFNBQVRBLE1BQVMsR0FBTTtBQUNuQkMsVUFBUUMsR0FBUixDQUFZLFlBQVosRUFBMEJOLElBQTFCO0FBQ0EsTUFBSUEsU0FBU08sU0FBVCxJQUFzQlAsU0FBUyxJQUFuQyxFQUF5QztBQUN2Q1EsYUFBU0MsSUFBVCxHQUFnQixRQUFoQjtBQUNBLFdBQU8sSUFBUDtBQUNEO0FBQ0QsU0FDQTtBQUFBO0FBQUEsTUFBUSxXQUFVLGFBQWxCO0FBQ0k7QUFBQTtBQUFBLFFBQUssV0FBVSxXQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQ0EscUJBQVUsc0RBRFY7QUFFQSxnQkFBSyxHQUZMO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkEsT0FERjtBQU9JSixjQUFRQyxHQUFSLENBQVlOLElBQVosQ0FQSjtBQUFBO0FBTzBCQSxXQUFLVSxJQUFMLEtBQWNILFNBQWQsR0FBMEIsRUFBMUIsR0FDeEI7QUFBQTtBQUFBLFVBQU0sV0FBVSxlQUFoQjtBQUFBO0FBQXNDUCxhQUFLVSxJQUFMLENBQVVDO0FBQWhEO0FBUkY7QUFESixHQURBO0FBY0QsQ0FwQkQ7O2tCQXNCZVAsTSIsImZpbGUiOiIwLjQ4OTVmNGUzODQ3N2I5ZWIzNDFkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuY29uc3QgdXNlciA9IEpTT04uc3Ryc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpO1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdVc2VyOjo6Ojo6JywgdXNlcik7XG4gIGlmICh1c2VyID09PSB1bmRlZmluZWQgfHwgdXNlciA9PT0gbnVsbCkge1xuICAgIGxvY2F0aW9uLmhhc2ggPSAnI2xvZ2luJztcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZXR1cm4gKFxuICA8aGVhZGVyIGNsYXNzTmFtZT1cInBhZ2UtaGVhZGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgPGFcbiAgICAgICAgY2xhc3NOYW1lPSdwYWdlLXRpdGxlIGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyJ1xuICAgICAgICBocmVmPVwiI1wiPlxuICAgICAgICBQb3N0XG4gICAgICAgIDxzcGFuPkl0PC9zcGFuPlxuICAgICAgICA8L2E+XG4gICAgICAgIHsgY29uc29sZS5sb2codXNlcikgfSB7IHVzZXIuZGF0YSA9PT0gdW5kZWZpbmVkID8gJycgOlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ1c2VyLWdyZWV0aW5nXCI+SGksIHsgdXNlci5kYXRhLnVzZXJuYW1lIH08L3NwYW4+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICA8L2hlYWRlcj4pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9oZWFkZXIuanMiXSwic291cmNlUm9vdCI6IiJ9