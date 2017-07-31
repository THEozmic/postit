webpackHotUpdate(0,{

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var logoutUser = function logoutUser(user) {
  return {
    type: 'LOGOUT_USER',
    user: user
  };
};

exports.default = logoutUser;

/***/ }),

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
  var _ref$active = _ref.active,
      active = _ref$active === undefined ? '' : _ref$active,
      user = _ref.user,
      _ref$ingroup = _ref.ingroup,
      ingroup = _ref$ingroup === undefined ? false : _ref$ingroup,
      onChangeSelectedGroup = _ref.onChangeSelectedGroup,
      onLogout = _ref.onLogout,
      onLoginUser = _ref.onLoginUser;

  if (sessionStorage.getItem('user') !== null) {
    if (user.token === undefined) {
      onLoginUser(sessionStorage.getItem('user'));
      console.log('SIDEMENU_SESSION:::::::', sessionStorage.getItem('user'));
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
          { href: '#dashboard', className: active },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvYWN0aW9ucy9sb2dvdXRVc2VyLmpzP2RkNDYiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2pzL2NvbXBvbmVudHMvcHJlc2VudGF0aW9uYWwvc2lkZW1lbnUuanM/MDU3NiJdLCJuYW1lcyI6WyJsb2dvdXRVc2VyIiwidXNlciIsInR5cGUiLCJsb2dvdXQiLCJjb21wbGV0ZUxvZ291dCIsInNlc3Npb25TdG9yYWdlIiwicmVtb3ZlSXRlbSIsIlNpZGVNZW51IiwiYWN0aXZlIiwiaW5ncm91cCIsIm9uQ2hhbmdlU2VsZWN0ZWRHcm91cCIsIm9uTG9nb3V0Iiwib25Mb2dpblVzZXIiLCJnZXRJdGVtIiwidG9rZW4iLCJ1bmRlZmluZWQiLCJjb25zb2xlIiwibG9nIiwibG9jYXRpb24iLCJoYXNoIiwibmFtZSIsImlkIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJ1c2VyRGF0YSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLElBQU1BLGFBQWEsU0FBYkEsVUFBYSxDQUFDQyxJQUFELEVBQVU7QUFDM0IsU0FBTztBQUNMQyxVQUFNLGFBREQ7QUFFTEQ7QUFGSyxHQUFQO0FBSUQsQ0FMRDs7a0JBT2VELFU7Ozs7Ozs7Ozs7Ozs7O0FDUGY7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNRyxTQUFTLFNBQVRBLE1BQVMsQ0FBQ0MsY0FBRCxFQUFvQjtBQUNqQ0MsaUJBQWVDLFVBQWYsQ0FBMEIsTUFBMUI7QUFDQUY7QUFDRCxDQUhEOztBQUtBLElBQU1HLFdBQVcsU0FBWEEsUUFBVyxPQUEwRjtBQUFBLHlCQUF2RkMsTUFBdUY7QUFBQSxNQUF2RkEsTUFBdUYsK0JBQTlFLEVBQThFO0FBQUEsTUFBMUVQLElBQTBFLFFBQTFFQSxJQUEwRTtBQUFBLDBCQUFwRVEsT0FBb0U7QUFBQSxNQUFwRUEsT0FBb0UsZ0NBQTFELEtBQTBEO0FBQUEsTUFBbkRDLHFCQUFtRCxRQUFuREEscUJBQW1EO0FBQUEsTUFBNUJDLFFBQTRCLFFBQTVCQSxRQUE0QjtBQUFBLE1BQWxCQyxXQUFrQixRQUFsQkEsV0FBa0I7O0FBQ3pHLE1BQUlQLGVBQWVRLE9BQWYsQ0FBdUIsTUFBdkIsTUFBbUMsSUFBdkMsRUFBNkM7QUFDM0MsUUFBSVosS0FBS2EsS0FBTCxLQUFlQyxTQUFuQixFQUE4QjtBQUM1Qkgsa0JBQVlQLGVBQWVRLE9BQWYsQ0FBdUIsTUFBdkIsQ0FBWjtBQUNBRyxjQUFRQyxHQUFSLENBQVkseUJBQVosRUFBdUNaLGVBQWVRLE9BQWYsQ0FBdUIsTUFBdkIsQ0FBdkM7QUFDRDtBQUNGLEdBTEQsTUFLTztBQUNMSyxhQUFTQyxJQUFULEdBQWdCLFFBQWhCO0FBQ0EsV0FBTyxJQUFQO0FBQ0Q7O0FBRURILFVBQVFDLEdBQVIsQ0FBWSxzQkFBWixFQUFvQ2hCLElBQXBDOztBQUVBLFNBQ0U7QUFBQTtBQUFBLE1BQU8sV0FBVSwwQkFBakI7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBRyxNQUFLLFlBQVIsRUFBcUIsV0FBWU8sTUFBakM7QUFBQTtBQUFBO0FBREYsT0FERjtBQUlFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFHLE1BQUssWUFBUixFQUFxQixlQUFZLE9BQWpDLEVBQXlDLGVBQVksbUJBQXJEO0FBQUE7QUFBQTtBQURGLE9BSkY7QUFPSUMsZ0JBQ0Y7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUcsTUFBSyxTQUFSLEVBQWtCLFNBQVU7QUFBQSxxQkFBTUMsc0JBQXNCLEVBQUVVLE1BQU0sb0JBQVIsRUFBOEJDLElBQUksQ0FBbEMsRUFBdEIsQ0FBTjtBQUFBLGFBQTVCO0FBQUE7QUFBQTtBQURGLE9BREUsR0FHTSxFQVZWO0FBV0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUcsTUFBSyxHQUFSLEVBQVksU0FBVTtBQUFBLHFCQUFNbEIsT0FBT1EsUUFBUCxDQUFOO0FBQUEsYUFBdEI7QUFBQTtBQUFBO0FBREY7QUFYRjtBQURGLEdBREY7QUFrQkQsQ0EvQkQ7O0FBaUNBLElBQU1XLGtCQUFrQixTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQ2pDLFNBQU87QUFDTHRCLFVBQU1zQixNQUFNQztBQURQLEdBQVA7QUFHRCxDQUpEOztBQU1BLElBQU1DLHFCQUFxQixTQUFyQkEsa0JBQXFCLENBQUNDLFFBQUQsRUFBYztBQUN2QyxTQUFPO0FBQ0xmLGNBQVU7QUFBQSxhQUFNZSxTQUFTLDJCQUFULENBQU47QUFBQSxLQURMO0FBRUxkLGlCQUFhO0FBQUEsYUFBUWMsU0FBUyx5QkFBVXpCLElBQVYsQ0FBVCxDQUFSO0FBQUE7QUFGUixHQUFQO0FBSUQsQ0FMRDtrQkFNZSx5QkFBUXFCLGVBQVIsRUFBeUJHLGtCQUF6QixFQUE2Q2xCLFFBQTdDLEMiLCJmaWxlIjoiMC42MjM4NTJiMDlhZGU4YmM4ZmJhNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbG9nb3V0VXNlciA9ICh1c2VyKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0xPR09VVF9VU0VSJyxcbiAgICB1c2VyXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2dvdXRVc2VyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2pzL2FjdGlvbnMvbG9nb3V0VXNlci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IGxvZ291dFVzZXIgZnJvbSAnLi4vLi4vYWN0aW9ucy9sb2dvdXRVc2VyJztcbmltcG9ydCBsb2dpblVzZXIgZnJvbSAnLi4vLi4vYWN0aW9ucy9sb2dpblVzZXInO1xuXG5jb25zdCBsb2dvdXQgPSAoY29tcGxldGVMb2dvdXQpID0+IHtcbiAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcicpO1xuICBjb21wbGV0ZUxvZ291dCgpO1xufTtcblxuY29uc3QgU2lkZU1lbnUgPSAoeyBhY3RpdmUgPSAnJywgdXNlciwgaW5ncm91cCA9IGZhbHNlLCBvbkNoYW5nZVNlbGVjdGVkR3JvdXAsIG9uTG9nb3V0LCBvbkxvZ2luVXNlciB9KSA9PiB7XG4gIGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykgIT09IG51bGwpIHtcbiAgICBpZiAodXNlci50b2tlbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBvbkxvZ2luVXNlcihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpO1xuICAgICAgY29uc29sZS5sb2coJ1NJREVNRU5VX1NFU1NJT046Ojo6Ojo6Jywgc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgbG9jYXRpb24uaGFzaCA9ICcjbG9naW4nO1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc29sZS5sb2coJ1NJREVNRU5VX1VTRVI6Ojo6Ojo6JywgdXNlcik7XG5cbiAgcmV0dXJuIChcbiAgICA8YXNpZGUgY2xhc3NOYW1lPVwibGVmdCBkYXNoYm9hcmQtbWVudSBwci0zXCI+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YSBocmVmPVwiI2Rhc2hib2FyZFwiIGNsYXNzTmFtZT17IGFjdGl2ZSB9Pk15IEdyb3VwczwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhIGhyZWY9XCIjbmV3LWdyb3VwXCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI2NyZWF0ZUdyb3VwTW9kYWxcIj5DcmVhdGUgR3JvdXA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIHsgaW5ncm91cCA/XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YSBocmVmPVwiI3NlYXJjaFwiIG9uQ2xpY2s9eyAoKSA9PiBvbkNoYW5nZVNlbGVjdGVkR3JvdXAoeyBuYW1lOiAnQW5kZWxhIEJvb3RjYW1wZXJzJywgaWQ6IDEgfSkgfT5BZGQgbWVtYmVyczwvYT5cbiAgICAgICAgPC9saT4gOiAnJ31cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17ICgpID0+IGxvZ291dChvbkxvZ291dCkgfT5Mb2dvdXQ8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICA8L2FzaWRlPik7XG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB1c2VyOiBzdGF0ZS51c2VyRGF0YVxuICB9O1xufTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgb25Mb2dvdXQ6ICgpID0+IGRpc3BhdGNoKGxvZ291dFVzZXIoKSksXG4gICAgb25Mb2dpblVzZXI6IHVzZXIgPT4gZGlzcGF0Y2gobG9naW5Vc2VyKHVzZXIpKVxuICB9O1xufTtcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFNpZGVNZW51KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9qcy9jb21wb25lbnRzL3ByZXNlbnRhdGlvbmFsL3NpZGVtZW51LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==