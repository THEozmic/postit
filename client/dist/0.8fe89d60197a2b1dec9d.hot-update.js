webpackHotUpdate(0,{

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(18);

var _logoutUser = __webpack_require__(124);

var _logoutUser2 = _interopRequireDefault(_logoutUser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logout = function logout(completeLogout) {
  sessionStorage.user = undefined;
  removeItem;
  completeLogout();
};

var SideMenu = function SideMenu(_ref) {
  var _ref$ingroup = _ref.ingroup,
      ingroup = _ref$ingroup === undefined ? false : _ref$ingroup,
      onChangeSelectedGroup = _ref.onChangeSelectedGroup,
      onLogout = _ref.onLogout;

  if (sessionStorage.user === undefined) {
    location.hash = '#login';
    return null;
  }
  return _react2.default.createElement(
    'aside',
    { className: 'left dashboard-menu pr-3' },
    _react2.default.createElement(
      'ul',
      null,
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'a',
          { href: '#dashboard', className: 'active' },
          'My Groups'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'a',
          { href: '#new-group', 'data-toggle': 'modal', 'data-target': '#createGroupModal' },
          'Create Group'
        )
      ),
      ingroup ? _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'a',
          { href: '#search', onClick: function onClick() {
              return onChangeSelectedGroup('Andela Bootcampers');
            } },
          'Add members'
        )
      ) : '',
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'a',
          { href: '#', onClick: function onClick() {
              return logout(onLogout);
            } },
          'Logout'
        )
      )
    )
  );
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onLogout: function onLogout() {
      return dispatch((0, _logoutUser2.default)());
    }
  };
};
exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(SideMenu);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9zaWRlbWVudS5qcz8wNTc2Il0sIm5hbWVzIjpbImxvZ291dCIsImNvbXBsZXRlTG9nb3V0Iiwic2Vzc2lvblN0b3JhZ2UiLCJ1c2VyIiwidW5kZWZpbmVkIiwicmVtb3ZlSXRlbSIsIlNpZGVNZW51IiwiaW5ncm91cCIsIm9uQ2hhbmdlU2VsZWN0ZWRHcm91cCIsIm9uTG9nb3V0IiwibG9jYXRpb24iLCJoYXNoIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFNBQVMsU0FBVEEsTUFBUyxDQUFDQyxjQUFELEVBQW9CO0FBQ2pDQyxpQkFBZUMsSUFBZixHQUFzQkMsU0FBdEI7QUFDQUM7QUFDQUo7QUFDRCxDQUpEOztBQU1BLElBQU1LLFdBQVcsU0FBWEEsUUFBVyxPQUEwRDtBQUFBLDBCQUF2REMsT0FBdUQ7QUFBQSxNQUF2REEsT0FBdUQsZ0NBQTdDLEtBQTZDO0FBQUEsTUFBdENDLHFCQUFzQyxRQUF0Q0EscUJBQXNDO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlOztBQUN6RSxNQUFJUCxlQUFlQyxJQUFmLEtBQXdCQyxTQUE1QixFQUF1QztBQUNyQ00sYUFBU0MsSUFBVCxHQUFnQixRQUFoQjtBQUNBLFdBQU8sSUFBUDtBQUNEO0FBQ0QsU0FDRTtBQUFBO0FBQUEsTUFBTyxXQUFVLDBCQUFqQjtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFHLE1BQUssWUFBUixFQUFxQixXQUFVLFFBQS9CO0FBQUE7QUFBQTtBQURGLE9BREY7QUFJRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBRyxNQUFLLFlBQVIsRUFBcUIsZUFBWSxPQUFqQyxFQUF5QyxlQUFZLG1CQUFyRDtBQUFBO0FBQUE7QUFERixPQUpGO0FBT0lKLGdCQUNGO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFHLE1BQUssU0FBUixFQUFrQixTQUFVO0FBQUEscUJBQU1DLHNCQUFzQixvQkFBdEIsQ0FBTjtBQUFBLGFBQTVCO0FBQUE7QUFBQTtBQURGLE9BREUsR0FHTSxFQVZWO0FBV0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUcsTUFBSyxHQUFSLEVBQVksU0FBVTtBQUFBLHFCQUFNUixPQUFPUyxRQUFQLENBQU47QUFBQSxhQUF0QjtBQUFBO0FBQUE7QUFERjtBQVhGO0FBREYsR0FERjtBQWtCRCxDQXZCRDs7QUF5QkEsSUFBTUcscUJBQXFCLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRCxFQUFjO0FBQ3ZDLFNBQU87QUFDTEosY0FBVTtBQUFBLGFBQU1JLFNBQVMsMkJBQVQsQ0FBTjtBQUFBO0FBREwsR0FBUDtBQUdELENBSkQ7a0JBS2UseUJBQVEsSUFBUixFQUFjRCxrQkFBZCxFQUFrQ04sUUFBbEMsQyIsImZpbGUiOiIwLjhmZTg5ZDYwMTk3YTJiMWRlYzlkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBsb2dvdXRVc2VyIGZyb20gJy4uLy4uL2FjdGlvbnMvbG9nb3V0VXNlcic7XG5cbmNvbnN0IGxvZ291dCA9IChjb21wbGV0ZUxvZ291dCkgPT4ge1xuICBzZXNzaW9uU3RvcmFnZS51c2VyID0gdW5kZWZpbmVkO1xuICByZW1vdmVJdGVtXG4gIGNvbXBsZXRlTG9nb3V0KCk7XG59O1xuXG5jb25zdCBTaWRlTWVudSA9ICh7IGluZ3JvdXAgPSBmYWxzZSwgb25DaGFuZ2VTZWxlY3RlZEdyb3VwLCBvbkxvZ291dCB9KSA9PiB7XG4gIGlmIChzZXNzaW9uU3RvcmFnZS51c2VyID09PSB1bmRlZmluZWQpIHtcbiAgICBsb2NhdGlvbi5oYXNoID0gJyNsb2dpbic7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8YXNpZGUgY2xhc3NOYW1lPVwibGVmdCBkYXNoYm9hcmQtbWVudSBwci0zXCI+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YSBocmVmPVwiI2Rhc2hib2FyZFwiIGNsYXNzTmFtZT1cImFjdGl2ZVwiPk15IEdyb3VwczwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhIGhyZWY9XCIjbmV3LWdyb3VwXCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI2NyZWF0ZUdyb3VwTW9kYWxcIj5DcmVhdGUgR3JvdXA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIHsgaW5ncm91cCA/XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YSBocmVmPVwiI3NlYXJjaFwiIG9uQ2xpY2s9eyAoKSA9PiBvbkNoYW5nZVNlbGVjdGVkR3JvdXAoJ0FuZGVsYSBCb290Y2FtcGVycycpIH0+QWRkIG1lbWJlcnM8L2E+XG4gICAgICAgIDwvbGk+IDogJyd9XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9eyAoKSA9PiBsb2dvdXQob25Mb2dvdXQpIH0+TG9nb3V0PC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgPC9hc2lkZT4pO1xufTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgb25Mb2dvdXQ6ICgpID0+IGRpc3BhdGNoKGxvZ291dFVzZXIoKSlcbiAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIG1hcERpc3BhdGNoVG9Qcm9wcykoU2lkZU1lbnUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2pzL2NvbXBvbmVudHMvcHJlc2VudGF0aW9uYWwvc2lkZW1lbnUuanMiXSwic291cmNlUm9vdCI6IiJ9