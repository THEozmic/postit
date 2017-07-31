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
      console.log(user),
      ' ',
      user === undefined || user === null ? '' : _react2.default.createElement(
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9oZWFkZXIuanM/MmM1MiJdLCJuYW1lcyI6WyJ1c2VyIiwiSlNPTiIsInBhcnNlIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiSGVhZGVyIiwiY29uc29sZSIsImxvZyIsInVuZGVmaW5lZCIsImRhdGEiLCJ1c2VybmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBLElBQU1BLE9BQU9DLEtBQUtDLEtBQUwsQ0FBV0MsZUFBZUMsT0FBZixDQUF1QixNQUF2QixDQUFYLENBQWI7O0FBRUEsSUFBTUMsU0FBUyxTQUFUQSxNQUFTLEdBQU07QUFDbkIsU0FDQTtBQUFBO0FBQUEsTUFBUSxXQUFVLGFBQWxCO0FBQ0k7QUFBQTtBQUFBLFFBQUssV0FBVSxXQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQ0EscUJBQVUsc0RBRFY7QUFFQSxnQkFBSyxHQUZMO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkEsT0FERjtBQU9JQyxjQUFRQyxHQUFSLENBQVlQLElBQVosQ0FQSjtBQUFBO0FBTzBCQSxlQUFTUSxTQUFULElBQXNCUixTQUFTLElBQS9CLEdBQXNDLEVBQXRDLEdBQ3hCO0FBQUE7QUFBQSxVQUFNLFdBQVUsZUFBaEI7QUFBQTtBQUFzQ0EsYUFBS1MsSUFBTCxDQUFVQztBQUFoRDtBQVJGO0FBREosR0FEQTtBQWNELENBZkQ7O2tCQWlCZUwsTSIsImZpbGUiOiIwLmEwMjc0YWQ3MTBhNzM4ZDgzZTg0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuY29uc3QgdXNlciA9IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKTtcblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICA8aGVhZGVyIGNsYXNzTmFtZT1cInBhZ2UtaGVhZGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgPGFcbiAgICAgICAgY2xhc3NOYW1lPSdwYWdlLXRpdGxlIGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyJ1xuICAgICAgICBocmVmPVwiI1wiPlxuICAgICAgICBQb3N0XG4gICAgICAgIDxzcGFuPkl0PC9zcGFuPlxuICAgICAgICA8L2E+XG4gICAgICAgIHsgY29uc29sZS5sb2codXNlcikgfSB7IHVzZXIgPT09IHVuZGVmaW5lZCB8fCB1c2VyID09PSBudWxsID8gJycgOlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ1c2VyLWdyZWV0aW5nXCI+SGksIHsgdXNlci5kYXRhLnVzZXJuYW1lIH08L3NwYW4+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICA8L2hlYWRlcj4pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9oZWFkZXIuanMiXSwic291cmNlUm9vdCI6IiJ9