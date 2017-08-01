webpackHotUpdate(0,{

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(16);

var _logoutUser = __webpack_require__(125);

var _logoutUser2 = _interopRequireDefault(_logoutUser);

var _loginUser = __webpack_require__(44);

var _loginUser2 = _interopRequireDefault(_loginUser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logout = function logout(completeLogout) {
  sessionStorage.removeItem('user');
  completeLogout();
};

var SideMenu = function SideMenu(_ref) {
  var user = _ref.user,
      _ref$ingroup = _ref.ingroup,
      ingroup = _ref$ingroup === undefined ? false : _ref$ingroup,
      onChangeSelectedGroup = _ref.onChangeSelectedGroup,
      onLogout = _ref.onLogout,
      onLoginUser = _ref.onLoginUser;

  if (sessionStorage.getItem('user') !== null) {
    if (user.token === undefined) {
      onLoginUser(sessionStorage.getItem('user'));
      console.log('SIDEMENU_SESSION:::::::', sessionStorage.getItem('user'));
      retur;
    }
  } else {
    location.hash = '#login';
    return null;
  }

  console.log('SIDEMENU_USER:::::::', user);

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

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.userData
  };
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
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SideMenu);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9zaWRlbWVudS5qcz8wNTc2Il0sIm5hbWVzIjpbImxvZ291dCIsImNvbXBsZXRlTG9nb3V0Iiwic2Vzc2lvblN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwiU2lkZU1lbnUiLCJ1c2VyIiwiaW5ncm91cCIsIm9uQ2hhbmdlU2VsZWN0ZWRHcm91cCIsIm9uTG9nb3V0Iiwib25Mb2dpblVzZXIiLCJnZXRJdGVtIiwidG9rZW4iLCJ1bmRlZmluZWQiLCJjb25zb2xlIiwibG9nIiwicmV0dXIiLCJsb2NhdGlvbiIsImhhc2giLCJuYW1lIiwiaWQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInVzZXJEYXRhIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxTQUFUQSxNQUFTLENBQUNDLGNBQUQsRUFBb0I7QUFDakNDLGlCQUFlQyxVQUFmLENBQTBCLE1BQTFCO0FBQ0FGO0FBQ0QsQ0FIRDs7QUFLQSxJQUFNRyxXQUFXLFNBQVhBLFFBQVcsT0FBNkU7QUFBQSxNQUExRUMsSUFBMEUsUUFBMUVBLElBQTBFO0FBQUEsMEJBQXBFQyxPQUFvRTtBQUFBLE1BQXBFQSxPQUFvRSxnQ0FBMUQsS0FBMEQ7QUFBQSxNQUFuREMscUJBQW1ELFFBQW5EQSxxQkFBbUQ7QUFBQSxNQUE1QkMsUUFBNEIsUUFBNUJBLFFBQTRCO0FBQUEsTUFBbEJDLFdBQWtCLFFBQWxCQSxXQUFrQjs7QUFDNUYsTUFBSVAsZUFBZVEsT0FBZixDQUF1QixNQUF2QixNQUFtQyxJQUF2QyxFQUE2QztBQUMzQyxRQUFJTCxLQUFLTSxLQUFMLEtBQWVDLFNBQW5CLEVBQThCO0FBQzVCSCxrQkFBWVAsZUFBZVEsT0FBZixDQUF1QixNQUF2QixDQUFaO0FBQ0FHLGNBQVFDLEdBQVIsQ0FBWSx5QkFBWixFQUF1Q1osZUFBZVEsT0FBZixDQUF1QixNQUF2QixDQUF2QztBQUNBSztBQUNEO0FBQ0YsR0FORCxNQU1PO0FBQ0xDLGFBQVNDLElBQVQsR0FBZ0IsUUFBaEI7QUFDQSxXQUFPLElBQVA7QUFDRDs7QUFFREosVUFBUUMsR0FBUixDQUFZLHNCQUFaLEVBQW9DVCxJQUFwQzs7QUFFQSxTQUNFO0FBQUE7QUFBQSxNQUFPLFdBQVUsMEJBQWpCO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUcsTUFBSyxZQUFSLEVBQXFCLFdBQVUsUUFBL0I7QUFBQTtBQUFBO0FBREYsT0FERjtBQUlFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFHLE1BQUssWUFBUixFQUFxQixlQUFZLE9BQWpDLEVBQXlDLGVBQVksbUJBQXJEO0FBQUE7QUFBQTtBQURGLE9BSkY7QUFPSUMsZ0JBQ0Y7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUcsTUFBSyxTQUFSLEVBQWtCLFNBQVU7QUFBQSxxQkFBTUMsc0JBQXNCLEVBQUVXLE1BQU0sb0JBQVIsRUFBOEJDLElBQUksQ0FBbEMsRUFBdEIsQ0FBTjtBQUFBLGFBQTVCO0FBQUE7QUFBQTtBQURGLE9BREUsR0FHTSxFQVZWO0FBV0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUcsTUFBSyxHQUFSLEVBQVksU0FBVTtBQUFBLHFCQUFNbkIsT0FBT1EsUUFBUCxDQUFOO0FBQUEsYUFBdEI7QUFBQTtBQUFBO0FBREY7QUFYRjtBQURGLEdBREY7QUFrQkQsQ0FoQ0Q7O0FBa0NBLElBQU1ZLGtCQUFrQixTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQ2pDLFNBQU87QUFDTGhCLFVBQU1nQixNQUFNQztBQURQLEdBQVA7QUFHRCxDQUpEOztBQU1BLElBQU1DLHFCQUFxQixTQUFyQkEsa0JBQXFCLENBQUNDLFFBQUQsRUFBYztBQUN2QyxTQUFPO0FBQ0xoQixjQUFVO0FBQUEsYUFBTWdCLFNBQVMsMkJBQVQsQ0FBTjtBQUFBLEtBREw7QUFFTGYsaUJBQWE7QUFBQSxhQUFRZSxTQUFTLHlCQUFVbkIsSUFBVixDQUFULENBQVI7QUFBQTtBQUZSLEdBQVA7QUFJRCxDQUxEO2tCQU1lLHlCQUFRZSxlQUFSLEVBQXlCRyxrQkFBekIsRUFBNkNuQixRQUE3QyxDIiwiZmlsZSI6IjAuYjBkODBmZTU4MjYwMDkwYWM1OTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IGxvZ291dFVzZXIgZnJvbSAnLi4vLi4vYWN0aW9ucy9sb2dvdXRVc2VyJztcbmltcG9ydCBsb2dpblVzZXIgZnJvbSAnLi4vLi4vYWN0aW9ucy9sb2dpblVzZXInO1xuXG5jb25zdCBsb2dvdXQgPSAoY29tcGxldGVMb2dvdXQpID0+IHtcbiAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcicpO1xuICBjb21wbGV0ZUxvZ291dCgpO1xufTtcblxuY29uc3QgU2lkZU1lbnUgPSAoeyB1c2VyLCBpbmdyb3VwID0gZmFsc2UsIG9uQ2hhbmdlU2VsZWN0ZWRHcm91cCwgb25Mb2dvdXQsIG9uTG9naW5Vc2VyIH0pID0+IHtcbiAgaWYgKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSAhPT0gbnVsbCkge1xuICAgIGlmICh1c2VyLnRva2VuID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG9uTG9naW5Vc2VyKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSk7XG4gICAgICBjb25zb2xlLmxvZygnU0lERU1FTlVfU0VTU0lPTjo6Ojo6OjonLCBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpO1xuICAgICAgcmV0dXJcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgbG9jYXRpb24uaGFzaCA9ICcjbG9naW4nO1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc29sZS5sb2coJ1NJREVNRU5VX1VTRVI6Ojo6Ojo6JywgdXNlcik7XG5cbiAgcmV0dXJuIChcbiAgICA8YXNpZGUgY2xhc3NOYW1lPVwibGVmdCBkYXNoYm9hcmQtbWVudSBwci0zXCI+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YSBocmVmPVwiI2Rhc2hib2FyZFwiIGNsYXNzTmFtZT1cImFjdGl2ZVwiPk15IEdyb3VwczwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhIGhyZWY9XCIjbmV3LWdyb3VwXCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI2NyZWF0ZUdyb3VwTW9kYWxcIj5DcmVhdGUgR3JvdXA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIHsgaW5ncm91cCA/XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YSBocmVmPVwiI3NlYXJjaFwiIG9uQ2xpY2s9eyAoKSA9PiBvbkNoYW5nZVNlbGVjdGVkR3JvdXAoeyBuYW1lOiAnQW5kZWxhIEJvb3RjYW1wZXJzJywgaWQ6IDEgfSkgfT5BZGQgbWVtYmVyczwvYT5cbiAgICAgICAgPC9saT4gOiAnJ31cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17ICgpID0+IGxvZ291dChvbkxvZ291dCkgfT5Mb2dvdXQ8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICA8L2FzaWRlPik7XG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB1c2VyOiBzdGF0ZS51c2VyRGF0YVxuICB9O1xufTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgb25Mb2dvdXQ6ICgpID0+IGRpc3BhdGNoKGxvZ291dFVzZXIoKSksXG4gICAgb25Mb2dpblVzZXI6IHVzZXIgPT4gZGlzcGF0Y2gobG9naW5Vc2VyKHVzZXIpKVxuICB9O1xufTtcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFNpZGVNZW51KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9qcy9jb21wb25lbnRzL3ByZXNlbnRhdGlvbmFsL3NpZGVtZW51LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==