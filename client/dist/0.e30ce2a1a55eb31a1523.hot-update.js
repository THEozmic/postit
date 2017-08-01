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
  sessionStorage.removeItem('user');
  completeLogout();
};

var SideMenu = function SideMenu(_ref) {
  var _ref$ingroup = _ref.ingroup,
      ingroup = _ref$ingroup === undefined ? false : _ref$ingroup,
      onChangeSelectedGroup = _ref.onChangeSelectedGroup,
      onLogout = _ref.onLogout,
      onLoginUser = _ref.onLoginUser;

  if (sessionStorage.getItem('user') === null) {
    location.hash = '#login';
  } else {
    undefined.props.onLoginUser(sessionStorage.getItem('user'));
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
    }
  };
};
exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(SideMenu);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9zaWRlbWVudS5qcz8wNTc2Il0sIm5hbWVzIjpbImxvZ291dCIsImNvbXBsZXRlTG9nb3V0Iiwic2Vzc2lvblN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwiU2lkZU1lbnUiLCJpbmdyb3VwIiwib25DaGFuZ2VTZWxlY3RlZEdyb3VwIiwib25Mb2dvdXQiLCJvbkxvZ2luVXNlciIsImdldEl0ZW0iLCJsb2NhdGlvbiIsImhhc2giLCJwcm9wcyIsIm5hbWUiLCJpZCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxTQUFTLFNBQVRBLE1BQVMsQ0FBQ0MsY0FBRCxFQUFvQjtBQUNqQ0MsaUJBQWVDLFVBQWYsQ0FBMEIsTUFBMUI7QUFDQUY7QUFDRCxDQUhEOztBQUtBLElBQU1HLFdBQVcsU0FBWEEsUUFBVyxPQUF1RTtBQUFBLDBCQUFwRUMsT0FBb0U7QUFBQSxNQUFwRUEsT0FBb0UsZ0NBQTFELEtBQTBEO0FBQUEsTUFBbkRDLHFCQUFtRCxRQUFuREEscUJBQW1EO0FBQUEsTUFBNUJDLFFBQTRCLFFBQTVCQSxRQUE0QjtBQUFBLE1BQWxCQyxXQUFrQixRQUFsQkEsV0FBa0I7O0FBQ3RGLE1BQUlOLGVBQWVPLE9BQWYsQ0FBdUIsTUFBdkIsTUFBbUMsSUFBdkMsRUFBNkM7QUFDM0NDLGFBQVNDLElBQVQsR0FBZ0IsUUFBaEI7QUFDRCxHQUZELE1BRU87QUFDTCxjQUFLQyxLQUFMLENBQVdKLFdBQVgsQ0FBdUJOLGVBQWVPLE9BQWYsQ0FBdUIsTUFBdkIsQ0FBdkI7QUFDRDtBQUNELFNBQ0U7QUFBQTtBQUFBLE1BQU8sV0FBVSwwQkFBakI7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBRyxNQUFLLFlBQVIsRUFBcUIsV0FBVSxRQUEvQjtBQUFBO0FBQUE7QUFERixPQURGO0FBSUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUcsTUFBSyxZQUFSLEVBQXFCLGVBQVksT0FBakMsRUFBeUMsZUFBWSxtQkFBckQ7QUFBQTtBQUFBO0FBREYsT0FKRjtBQU9JSixnQkFDRjtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBRyxNQUFLLFNBQVIsRUFBa0IsU0FBVTtBQUFBLHFCQUFNQyxzQkFBc0IsRUFBRU8sTUFBTSxvQkFBUixFQUE4QkMsSUFBSSxDQUFsQyxFQUF0QixDQUFOO0FBQUEsYUFBNUI7QUFBQTtBQUFBO0FBREYsT0FERSxHQUdNLEVBVlY7QUFXRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBRyxNQUFLLEdBQVIsRUFBWSxTQUFVO0FBQUEscUJBQU1kLE9BQU9PLFFBQVAsQ0FBTjtBQUFBLGFBQXRCO0FBQUE7QUFBQTtBQURGO0FBWEY7QUFERixHQURGO0FBa0JELENBeEJEOztBQTBCQSxJQUFNUSxxQkFBcUIsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFELEVBQWM7QUFDdkMsU0FBTztBQUNMVCxjQUFVO0FBQUEsYUFBTVMsU0FBUywyQkFBVCxDQUFOO0FBQUE7QUFETCxHQUFQO0FBR0QsQ0FKRDtrQkFLZSx5QkFBUSxJQUFSLEVBQWNELGtCQUFkLEVBQWtDWCxRQUFsQyxDIiwiZmlsZSI6IjAuZTMwY2UyYTFhNTVlYjMxYTE1MjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IGxvZ291dFVzZXIgZnJvbSAnLi4vLi4vYWN0aW9ucy9sb2dvdXRVc2VyJztcblxuY29uc3QgbG9nb3V0ID0gKGNvbXBsZXRlTG9nb3V0KSA9PiB7XG4gIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXInKTtcbiAgY29tcGxldGVMb2dvdXQoKTtcbn07XG5cbmNvbnN0IFNpZGVNZW51ID0gKHsgaW5ncm91cCA9IGZhbHNlLCBvbkNoYW5nZVNlbGVjdGVkR3JvdXAsIG9uTG9nb3V0LCBvbkxvZ2luVXNlciB9KSA9PiB7XG4gIGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykgPT09IG51bGwpIHtcbiAgICBsb2NhdGlvbi5oYXNoID0gJyNsb2dpbic7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5wcm9wcy5vbkxvZ2luVXNlcihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpO1xuICB9XG4gIHJldHVybiAoXG4gICAgPGFzaWRlIGNsYXNzTmFtZT1cImxlZnQgZGFzaGJvYXJkLW1lbnUgcHItM1wiPlxuICAgICAgPHVsPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGEgaHJlZj1cIiNkYXNoYm9hcmRcIiBjbGFzc05hbWU9XCJhY3RpdmVcIj5NeSBHcm91cHM8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YSBocmVmPVwiI25ldy1ncm91cFwiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNjcmVhdGVHcm91cE1vZGFsXCI+Q3JlYXRlIEdyb3VwPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICB7IGluZ3JvdXAgP1xuICAgICAgICA8bGk+XG4gICAgICAgICAgPGEgaHJlZj1cIiNzZWFyY2hcIiBvbkNsaWNrPXsgKCkgPT4gb25DaGFuZ2VTZWxlY3RlZEdyb3VwKHsgbmFtZTogJ0FuZGVsYSBCb290Y2FtcGVycycsIGlkOiAxIH0pIH0+QWRkIG1lbWJlcnM8L2E+XG4gICAgICAgIDwvbGk+IDogJyd9XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9eyAoKSA9PiBsb2dvdXQob25Mb2dvdXQpIH0+TG9nb3V0PC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgPC9hc2lkZT4pO1xufTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgb25Mb2dvdXQ6ICgpID0+IGRpc3BhdGNoKGxvZ291dFVzZXIoKSlcbiAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIG1hcERpc3BhdGNoVG9Qcm9wcykoU2lkZU1lbnUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2pzL2NvbXBvbmVudHMvcHJlc2VudGF0aW9uYWwvc2lkZW1lbnUuanMiXSwic291cmNlUm9vdCI6IiJ9