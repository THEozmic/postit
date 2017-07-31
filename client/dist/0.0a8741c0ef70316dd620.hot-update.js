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
  if (user === undefined || user === null) {
    locaion.has;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9oZWFkZXIuanM/MmM1MiJdLCJuYW1lcyI6WyJ1c2VyIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiSGVhZGVyIiwidW5kZWZpbmVkIiwibG9jYWlvbiIsImhhcyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwidXNlcm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxPQUFPQyxlQUFlQyxPQUFmLENBQXVCLE1BQXZCLENBQWI7O0FBRUEsSUFBTUMsU0FBUyxTQUFUQSxNQUFTLEdBQU07QUFDbkIsTUFBSUgsU0FBU0ksU0FBVCxJQUFzQkosU0FBUyxJQUFuQyxFQUF5QztBQUN2Q0ssWUFBUUMsR0FBUjtBQUNBLFdBQU8sSUFBUDtBQUNEO0FBQ0QsU0FDQTtBQUFBO0FBQUEsTUFBUSxXQUFVLGFBQWxCO0FBQ0k7QUFBQTtBQUFBLFFBQUssV0FBVSxXQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQ0EscUJBQVUsc0RBRFY7QUFFQSxnQkFBSyxHQUZMO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkEsT0FERjtBQU9JQyxjQUFRQyxHQUFSLENBQVlSLElBQVosQ0FQSjtBQUFBO0FBTzBCQSxXQUFLUyxJQUFMLEtBQWNMLFNBQWQsR0FBMEIsRUFBMUIsR0FDeEI7QUFBQTtBQUFBLFVBQU0sV0FBVSxlQUFoQjtBQUFBO0FBQXNDSixhQUFLUyxJQUFMLENBQVVDO0FBQWhEO0FBUkY7QUFESixHQURBO0FBY0QsQ0FuQkQ7O2tCQXFCZVAsTSIsImZpbGUiOiIwLjBhODc0MWMwZWY3MDMxNmRkNjIwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuY29uc3QgdXNlciA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXInKTtcblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICBpZiAodXNlciA9PT0gdW5kZWZpbmVkIHx8IHVzZXIgPT09IG51bGwpIHtcbiAgICBsb2NhaW9uLmhhc1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiAoXG4gIDxoZWFkZXIgY2xhc3NOYW1lPVwicGFnZS1oZWFkZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICA8YVxuICAgICAgICBjbGFzc05hbWU9J3BhZ2UtdGl0bGUganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXInXG4gICAgICAgIGhyZWY9XCIjXCI+XG4gICAgICAgIFBvc3RcbiAgICAgICAgPHNwYW4+SXQ8L3NwYW4+XG4gICAgICAgIDwvYT5cbiAgICAgICAgeyBjb25zb2xlLmxvZyh1c2VyKSB9IHsgdXNlci5kYXRhID09PSB1bmRlZmluZWQgPyAnJyA6XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInVzZXItZ3JlZXRpbmdcIj5IaSwgeyB1c2VyLmRhdGEudXNlcm5hbWUgfTwvc3Bhbj5cbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gIDwvaGVhZGVyPik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9qcy9jb21wb25lbnRzL3ByZXNlbnRhdGlvbmFsL2hlYWRlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=