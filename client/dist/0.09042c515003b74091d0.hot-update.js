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
        'user Post',
        _react2.default.createElement(
          'span',
          null,
          'It'
        )
      ),
      user.data.username === undefined ? '' : _react2.default.createElement(
        'span',
        { className: 'user-greeting' },
        'Hi, ',
        user.data.username
      )
    )
  );
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, null)(Header);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9oZWFkZXIuanM/MmM1MiJdLCJuYW1lcyI6WyJ1c2VyIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiSGVhZGVyIiwiZGF0YSIsInVzZXJuYW1lIiwidW5kZWZpbmVkIiwibWFwU3RhdGVUb1Byb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUEsSUFBTUEsT0FBT0MsZUFBZUMsT0FBZixDQUF1QixNQUF2QixDQUFiO0FBQ0EsSUFBTUMsU0FBUyxTQUFUQSxNQUFTO0FBQUEsU0FDZjtBQUFBO0FBQUEsTUFBUSxXQUFVLGFBQWxCO0FBQ0k7QUFBQTtBQUFBLFFBQUssV0FBVSxXQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQ0EscUJBQVUsc0RBRFY7QUFFQSxnQkFBSyxHQUZMO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkEsT0FERjtBQU9JSCxXQUFLSSxJQUFMLENBQVVDLFFBQVYsS0FBdUJDLFNBQXZCLEdBQW1DLEVBQW5DLEdBQ0Y7QUFBQTtBQUFBLFVBQU0sV0FBVSxlQUFoQjtBQUFBO0FBQXNDTixhQUFLSSxJQUFMLENBQVVDO0FBQWhEO0FBUkY7QUFESixHQURlO0FBQUEsQ0FBZjs7a0JBZ0JlLHlCQUFRRSxlQUFSLEVBQXlCLElBQXpCLEVBQStCSixNQUEvQixDIiwiZmlsZSI6IjAuMDkwNDJjNTE1MDAzYjc0MDkxZDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5jb25zdCB1c2VyID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpO1xuY29uc3QgSGVhZGVyID0gKCkgPT5cbjxoZWFkZXIgY2xhc3NOYW1lPVwicGFnZS1oZWFkZXJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgIDxhXG4gICAgICBjbGFzc05hbWU9J3BhZ2UtdGl0bGUganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXInXG4gICAgICBocmVmPVwiI1wiPnVzZXJcbiAgICAgIFBvc3RcbiAgICAgIDxzcGFuPkl0PC9zcGFuPlxuICAgICAgPC9hPlxuICAgICAgeyB1c2VyLmRhdGEudXNlcm5hbWUgPT09IHVuZGVmaW5lZCA/ICcnIDpcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInVzZXItZ3JlZXRpbmdcIj5IaSwgeyB1c2VyLmRhdGEudXNlcm5hbWUgfTwvc3Bhbj5cbiAgICAgIH1cbiAgICA8L2Rpdj5cbjwvaGVhZGVyPjtcblxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbnVsbCkoSGVhZGVyKTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2pzL2NvbXBvbmVudHMvcHJlc2VudGF0aW9uYWwvaGVhZGVyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==