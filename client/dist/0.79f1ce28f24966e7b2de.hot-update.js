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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9oZWFkZXIuanM/MmM1MiJdLCJuYW1lcyI6WyJ1c2VyIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiSGVhZGVyIiwiY29uc29sZSIsImxvZyIsInVuZGVmaW5lZCIsImxvY2F0aW9uIiwiaGFzaCIsImRhdGEiLCJ1c2VybmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBLElBQU1BLE9BQU9DLGVBQWVDLE9BQWYsQ0FBdUIsTUFBdkIsQ0FBYjs7QUFFQSxJQUFNQyxTQUFTLFNBQVRBLE1BQVMsR0FBTTtBQUNuQkMsVUFBUUMsR0FBUixDQUFZLFlBQVosRUFBMEJMLElBQTFCO0FBQ0EsTUFBSUEsU0FBU00sU0FBVCxJQUFzQk4sU0FBUyxJQUFuQyxFQUF5QztBQUN2Q08sYUFBU0MsSUFBVCxHQUFnQixRQUFoQjtBQUNBLFdBQU8sSUFBUDtBQUNEO0FBQ0QsU0FDQTtBQUFBO0FBQUEsTUFBUSxXQUFVLGFBQWxCO0FBQ0k7QUFBQTtBQUFBLFFBQUssV0FBVSxXQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQ0EscUJBQVUsc0RBRFY7QUFFQSxnQkFBSyxHQUZMO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkEsT0FERjtBQU9JSixjQUFRQyxHQUFSLENBQVlMLElBQVosQ0FQSjtBQUFBO0FBTzBCQSxXQUFLUyxJQUFMLEtBQWNILFNBQWQsR0FBMEIsRUFBMUIsR0FDeEI7QUFBQTtBQUFBLFVBQU0sV0FBVSxlQUFoQjtBQUFBO0FBQXNDTixhQUFLUyxJQUFMLENBQVVDO0FBQWhEO0FBUkY7QUFESixHQURBO0FBY0QsQ0FwQkQ7O2tCQXNCZVAsTSIsImZpbGUiOiIwLjc5ZjFjZTI4ZjI0OTY2ZTdiMmRlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuY29uc3QgdXNlciA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXInKTtcblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICBjb25zb2xlLmxvZygnVXNlcjo6Ojo6OicsIHVzZXIpO1xuICBpZiAodXNlciA9PT0gdW5kZWZpbmVkIHx8IHVzZXIgPT09IG51bGwpIHtcbiAgICBsb2NhdGlvbi5oYXNoID0gJyNsb2dpbic7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcmV0dXJuIChcbiAgPGhlYWRlciBjbGFzc05hbWU9XCJwYWdlLWhlYWRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgIDxhXG4gICAgICAgIGNsYXNzTmFtZT0ncGFnZS10aXRsZSBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlcidcbiAgICAgICAgaHJlZj1cIiNcIj5cbiAgICAgICAgUG9zdFxuICAgICAgICA8c3Bhbj5JdDwvc3Bhbj5cbiAgICAgICAgPC9hPlxuICAgICAgICB7IGNvbnNvbGUubG9nKHVzZXIpIH0geyB1c2VyLmRhdGEgPT09IHVuZGVmaW5lZCA/ICcnIDpcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidXNlci1ncmVldGluZ1wiPkhpLCB7IHVzZXIuZGF0YS51c2VybmFtZSB9PC9zcGFuPlxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgPC9oZWFkZXI+KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2pzL2NvbXBvbmVudHMvcHJlc2VudGF0aW9uYWwvaGVhZGVyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==