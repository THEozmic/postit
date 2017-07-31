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

var _loginUser = __webpack_require__(73);

var _loginUser2 = _interopRequireDefault(_loginUser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logout = function logout(completeLogout) {
  sessionStorage.removeItem('user');
  completeLogout();
};

var SideMenu = function SideMenu(_ref) {
  var _ref$ingroup = _ref.ingroup,
      ingroup = _ref$ingroup === undefined ? false : _ref$ingroup,
      onChangeSelectedGroup = _ref.onChangeSelectedGroup,
      onLogout = _ref.onLogout,
      onLoginUser = _ref.onLoginUser;

  if (sessionStorage.getItem('user') !== null) {
    location.hash = '#login';
  } else {
    onLoginUser(sessionStorage.getItem('user'));
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
              return onChangeSelectedGroup({ name: 'Andela Bootcampers', id: 1 });
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
    },
    onLoginUser: function onLoginUser(user) {
      return dispatch((0, _loginUser2.default)(user));
    }
  };
};
exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(SideMenu);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9zaWRlbWVudS5qcz8wNTc2Il0sIm5hbWVzIjpbImxvZ291dCIsImNvbXBsZXRlTG9nb3V0Iiwic2Vzc2lvblN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwiU2lkZU1lbnUiLCJpbmdyb3VwIiwib25DaGFuZ2VTZWxlY3RlZEdyb3VwIiwib25Mb2dvdXQiLCJvbkxvZ2luVXNlciIsImdldEl0ZW0iLCJsb2NhdGlvbiIsImhhc2giLCJuYW1lIiwiaWQiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsInVzZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxTQUFUQSxNQUFTLENBQUNDLGNBQUQsRUFBb0I7QUFDakNDLGlCQUFlQyxVQUFmLENBQTBCLE1BQTFCO0FBQ0FGO0FBQ0QsQ0FIRDs7QUFLQSxJQUFNRyxXQUFXLFNBQVhBLFFBQVcsT0FBdUU7QUFBQSwwQkFBcEVDLE9BQW9FO0FBQUEsTUFBcEVBLE9BQW9FLGdDQUExRCxLQUEwRDtBQUFBLE1BQW5EQyxxQkFBbUQsUUFBbkRBLHFCQUFtRDtBQUFBLE1BQTVCQyxRQUE0QixRQUE1QkEsUUFBNEI7QUFBQSxNQUFsQkMsV0FBa0IsUUFBbEJBLFdBQWtCOztBQUN0RixNQUFJTixlQUFlTyxPQUFmLENBQXVCLE1BQXZCLE1BQW1DLElBQXZDLEVBQTZDO0FBQzNDQyxhQUFTQyxJQUFULEdBQWdCLFFBQWhCO0FBRUQsR0FIRCxNQUdPO0FBQ0xILGdCQUFZTixlQUFlTyxPQUFmLENBQXVCLE1BQXZCLENBQVo7QUFDRDtBQUNELFNBQ0U7QUFBQTtBQUFBLE1BQU8sV0FBVSwwQkFBakI7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBRyxNQUFLLFlBQVIsRUFBcUIsV0FBVSxRQUEvQjtBQUFBO0FBQUE7QUFERixPQURGO0FBSUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUcsTUFBSyxZQUFSLEVBQXFCLGVBQVksT0FBakMsRUFBeUMsZUFBWSxtQkFBckQ7QUFBQTtBQUFBO0FBREYsT0FKRjtBQU9JSixnQkFDRjtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBRyxNQUFLLFNBQVIsRUFBa0IsU0FBVTtBQUFBLHFCQUFNQyxzQkFBc0IsRUFBRU0sTUFBTSxvQkFBUixFQUE4QkMsSUFBSSxDQUFsQyxFQUF0QixDQUFOO0FBQUEsYUFBNUI7QUFBQTtBQUFBO0FBREYsT0FERSxHQUdNLEVBVlY7QUFXRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBRyxNQUFLLEdBQVIsRUFBWSxTQUFVO0FBQUEscUJBQU1iLE9BQU9PLFFBQVAsQ0FBTjtBQUFBLGFBQXRCO0FBQUE7QUFBQTtBQURGO0FBWEY7QUFERixHQURGO0FBa0JELENBekJEOztBQTJCQSxJQUFNTyxxQkFBcUIsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFELEVBQWM7QUFDdkMsU0FBTztBQUNMUixjQUFVO0FBQUEsYUFBTVEsU0FBUywyQkFBVCxDQUFOO0FBQUEsS0FETDtBQUVMUCxpQkFBYTtBQUFBLGFBQVFPLFNBQVMseUJBQVVDLElBQVYsQ0FBVCxDQUFSO0FBQUE7QUFGUixHQUFQO0FBSUQsQ0FMRDtrQkFNZSx5QkFBUSxJQUFSLEVBQWNGLGtCQUFkLEVBQWtDVixRQUFsQyxDIiwiZmlsZSI6IjAuNzI4NmZhY2QxNWJkNGQ1MzAwODkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IGxvZ291dFVzZXIgZnJvbSAnLi4vLi4vYWN0aW9ucy9sb2dvdXRVc2VyJztcbmltcG9ydCBsb2dpblVzZXIgZnJvbSAnLi4vLi4vYWN0aW9ucy9sb2dpblVzZXInO1xuXG5jb25zdCBsb2dvdXQgPSAoY29tcGxldGVMb2dvdXQpID0+IHtcbiAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcicpO1xuICBjb21wbGV0ZUxvZ291dCgpO1xufTtcblxuY29uc3QgU2lkZU1lbnUgPSAoeyBpbmdyb3VwID0gZmFsc2UsIG9uQ2hhbmdlU2VsZWN0ZWRHcm91cCwgb25Mb2dvdXQsIG9uTG9naW5Vc2VyIH0pID0+IHtcbiAgaWYgKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSAhPT0gbnVsbCkge1xuICAgIGxvY2F0aW9uLmhhc2ggPSAnI2xvZ2luJztcblxuICB9IGVsc2Uge1xuICAgIG9uTG9naW5Vc2VyKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8YXNpZGUgY2xhc3NOYW1lPVwibGVmdCBkYXNoYm9hcmQtbWVudSBwci0zXCI+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YSBocmVmPVwiI2Rhc2hib2FyZFwiIGNsYXNzTmFtZT1cImFjdGl2ZVwiPk15IEdyb3VwczwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhIGhyZWY9XCIjbmV3LWdyb3VwXCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI2NyZWF0ZUdyb3VwTW9kYWxcIj5DcmVhdGUgR3JvdXA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIHsgaW5ncm91cCA/XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YSBocmVmPVwiI3NlYXJjaFwiIG9uQ2xpY2s9eyAoKSA9PiBvbkNoYW5nZVNlbGVjdGVkR3JvdXAoeyBuYW1lOiAnQW5kZWxhIEJvb3RjYW1wZXJzJywgaWQ6IDEgfSkgfT5BZGQgbWVtYmVyczwvYT5cbiAgICAgICAgPC9saT4gOiAnJ31cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17ICgpID0+IGxvZ291dChvbkxvZ291dCkgfT5Mb2dvdXQ8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICA8L2FzaWRlPik7XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBvbkxvZ291dDogKCkgPT4gZGlzcGF0Y2gobG9nb3V0VXNlcigpKSxcbiAgICBvbkxvZ2luVXNlcjogdXNlciA9PiBkaXNwYXRjaChsb2dpblVzZXIodXNlcikpXG4gIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFNpZGVNZW51KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9qcy9jb21wb25lbnRzL3ByZXNlbnRhdGlvbmFsL3NpZGVtZW51LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==