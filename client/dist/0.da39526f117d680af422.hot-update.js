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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9oZWFkZXIuanM/MmM1MiJdLCJuYW1lcyI6WyJIZWFkZXIiLCJ1c2VyIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJ1bmRlZmluZWQiLCJ1c2VybmFtZSIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwidXNlckRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxTQUFTLFNBQVRBLE1BQVMsT0FBYztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFDM0JDLFVBQVFDLEdBQVIsQ0FBWSwyQkFBWixFQUF5Q0YsSUFBekM7QUFDQUMsVUFBUUMsR0FBUixDQUFZLCtCQUFaLEVBQTZDRixLQUFLRyxJQUFsRDtBQUNBLFNBQVE7QUFBQTtBQUFBLE1BQVEsV0FBVSxhQUFsQjtBQUNKO0FBQUE7QUFBQSxRQUFLLFdBQVUsV0FBZjtBQUNFO0FBQUE7QUFBQTtBQUNBLHFCQUFVLHNEQURWO0FBRUEsZ0JBQUssR0FGTDtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBLE9BREY7QUFPSUgsV0FBS0csSUFBTCxLQUFjQyxTQUFkLEdBQTBCLEVBQTFCLEdBQ0Y7QUFBQTtBQUFBLFVBQU0sV0FBVSxlQUFoQjtBQUFBO0FBQXNDSixhQUFLRyxJQUFMLENBQVVFO0FBQWhEO0FBUkY7QUFESSxHQUFSO0FBYUQsQ0FoQkQ7O0FBa0JBLElBQU1DLGtCQUFrQixTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQ2pDLFNBQU87QUFDTFAsVUFBTU8sTUFBTUM7QUFEUCxHQUFQO0FBR0QsQ0FKRDtrQkFLZSx5QkFBUUYsZUFBUixFQUF5QixJQUF6QixFQUErQlAsTUFBL0IsQyIsImZpbGUiOiIwLmRhMzk1MjZmMTE3ZDY4MGFmNDIyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuY29uc3QgSGVhZGVyID0gKHsgdXNlciB9KSA9PiB7XG4gIGNvbnNvbGUubG9nKCdVU0VSOjo6Ojo6Ojo6Ojo6PT09PT0+Pj4+JywgdXNlcik7XG4gIGNvbnNvbGUubG9nKCdVU0VSREFUQTo6Ojo6Ojo6Ojo6Oj09PT09Pj4+PicsIHVzZXIuZGF0YSk7XG4gIHJldHVybiAoPGhlYWRlciBjbGFzc05hbWU9XCJwYWdlLWhlYWRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgIDxhXG4gICAgICAgIGNsYXNzTmFtZT0ncGFnZS10aXRsZSBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlcidcbiAgICAgICAgaHJlZj1cIiNcIj5cbiAgICAgICAgUG9zdFxuICAgICAgICA8c3Bhbj5JdDwvc3Bhbj5cbiAgICAgICAgPC9hPlxuICAgICAgICB7IHVzZXIuZGF0YSA9PT0gdW5kZWZpbmVkID8gJycgOlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ1c2VyLWdyZWV0aW5nXCI+SGksIHsgdXNlci5kYXRhLnVzZXJuYW1lIH08L3NwYW4+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICA8L2hlYWRlcj4pO1xufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdXNlcjogc3RhdGUudXNlckRhdGFcbiAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbnVsbCkoSGVhZGVyKTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2pzL2NvbXBvbmVudHMvcHJlc2VudGF0aW9uYWwvaGVhZGVyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==