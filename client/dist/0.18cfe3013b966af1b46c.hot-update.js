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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9oZWFkZXIuanM/MmM1MiJdLCJuYW1lcyI6WyJIZWFkZXIiLCJ1c2VyIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJ0b2tlbiIsInVuZGVmaW5lZCIsInVzZXJuYW1lIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJ1c2VyRGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUEsSUFBTUEsU0FBUyxTQUFUQSxNQUFTLE9BQWM7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQzNCQyxVQUFRQyxHQUFSLENBQVksMkJBQVosRUFBeUNGLElBQXpDO0FBQ0FDLFVBQVFDLEdBQVIsQ0FBWSwrQkFBWixFQUE2Q0YsS0FBS0csSUFBbEQ7QUFDQUYsVUFBUUMsR0FBUixDQUFZLGdDQUFaLEVBQThDRixLQUFLSSxLQUFuRDtBQUNBSCxVQUFRQyxHQUFSLENBQVksK0JBQVosRUFBNkNGLEtBQUtHLElBQWxEO0FBQ0FGLFVBQVFDLEdBQVIsQ0FBWSwrQkFBWixTQUFvREYsSUFBcEQseUNBQW9EQSxJQUFwRDtBQUNBLFNBQVE7QUFBQTtBQUFBLE1BQVEsV0FBVSxhQUFsQjtBQUNKO0FBQUE7QUFBQSxRQUFLLFdBQVUsV0FBZjtBQUNFO0FBQUE7QUFBQTtBQUNBLHFCQUFVLHNEQURWO0FBRUEsZ0JBQUssR0FGTDtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBLE9BREY7QUFPSUEsV0FBS0csSUFBTCxLQUFjRSxTQUFkLEdBQTBCLEVBQTFCLEdBQ0Y7QUFBQTtBQUFBLFVBQU0sV0FBVSxlQUFoQjtBQUFBO0FBQXNDTCxhQUFLRyxJQUFMLENBQVVHO0FBQWhEO0FBUkY7QUFESSxHQUFSO0FBYUQsQ0FuQkQ7O0FBcUJBLElBQU1DLGtCQUFrQixTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQ2pDLFNBQU87QUFDTFIsVUFBTVEsTUFBTUM7QUFEUCxHQUFQO0FBR0QsQ0FKRDtrQkFLZSx5QkFBUUYsZUFBUixFQUF5QixJQUF6QixFQUErQlIsTUFBL0IsQyIsImZpbGUiOiIwLjE4Y2ZlMzAxM2I5NjZhZjFiNDZjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuY29uc3QgSGVhZGVyID0gKHsgdXNlciB9KSA9PiB7XG4gIGNvbnNvbGUubG9nKCdVU0VSOjo6Ojo6Ojo6Ojo6PT09PT0+Pj4+JywgdXNlcik7XG4gIGNvbnNvbGUubG9nKCdVU0VSREFUQTo6Ojo6Ojo6Ojo6Oj09PT09Pj4+PicsIHVzZXIuZGF0YSk7XG4gIGNvbnNvbGUubG9nKCdVU0VSVE9LRU46Ojo6Ojo6Ojo6Ojo9PT09PT4+Pj4nLCB1c2VyLnRva2VuKTtcbiAgY29uc29sZS5sb2coJ1VTRVJEQVRBOjo6Ojo6Ojo6Ojo6PT09PT0+Pj4+JywgdXNlci5kYXRhKTtcbiAgY29uc29sZS5sb2coJ1VTRVJUWVBFOjo6Ojo6Ojo6Ojo6PT09PT0+Pj4+JywgdHlwZW9mKHVzZXIpKTtcbiAgcmV0dXJuICg8aGVhZGVyIGNsYXNzTmFtZT1cInBhZ2UtaGVhZGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgPGFcbiAgICAgICAgY2xhc3NOYW1lPSdwYWdlLXRpdGxlIGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyJ1xuICAgICAgICBocmVmPVwiI1wiPlxuICAgICAgICBQb3N0XG4gICAgICAgIDxzcGFuPkl0PC9zcGFuPlxuICAgICAgICA8L2E+XG4gICAgICAgIHsgdXNlci5kYXRhID09PSB1bmRlZmluZWQgPyAnJyA6XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInVzZXItZ3JlZXRpbmdcIj5IaSwgeyB1c2VyLmRhdGEudXNlcm5hbWUgfTwvc3Bhbj5cbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gIDwvaGVhZGVyPik7XG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB1c2VyOiBzdGF0ZS51c2VyRGF0YVxuICB9O1xufTtcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBudWxsKShIZWFkZXIpO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9oZWFkZXIuanMiXSwic291cmNlUm9vdCI6IiJ9