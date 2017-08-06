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
      active = _ref$active === undefined ? 'dashboard' : _ref$active,
      user = _ref.user,
      _ref$ingroup = _ref.ingroup,
      ingroup = _ref$ingroup === undefined ? false : _ref$ingroup,
      onLogout = _ref.onLogout,
      onLoginUser = _ref.onLoginUser;

  if (sessionStorage.getItem('user') !== null && location.hash !== '#/register') {
    if (user.token === undefined) {
      onLoginUser(sessionStorage.getItem('user'));
      console.log('SIDEMENU_SESSION:::::::', sessionStorage.getItem('user'));
    }
  }

  var selectedGroup = { name: 'Test', id: 4 };

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
          { href: '#dashboard', className: active === 'dashboard' ? 'active' : '' },
          'My Groups'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'a',
          { href: '#new-group', className: active === 'create-group' ? 'active' : '',
            'data-toggle': 'modal', 'data-target': '#createGroupModal' },
          'Create Group'
        )
      ),
      ingroup ? _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'a',
          { href: '#/group//search', className: active === 'search' ? 'active' : '' },
          'Update Members'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvYWN0aW9ucy9sb2dvdXRVc2VyLmpzP2RkNDYiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2pzL2NvbXBvbmVudHMvcHJlc2VudGF0aW9uYWwvc2lkZW1lbnUuanM/MDU3NiJdLCJuYW1lcyI6WyJsb2dvdXRVc2VyIiwidXNlciIsInR5cGUiLCJsb2dvdXQiLCJjb21wbGV0ZUxvZ291dCIsInNlc3Npb25TdG9yYWdlIiwicmVtb3ZlSXRlbSIsIlNpZGVNZW51IiwiYWN0aXZlIiwiaW5ncm91cCIsIm9uTG9nb3V0Iiwib25Mb2dpblVzZXIiLCJnZXRJdGVtIiwibG9jYXRpb24iLCJoYXNoIiwidG9rZW4iLCJ1bmRlZmluZWQiLCJjb25zb2xlIiwibG9nIiwic2VsZWN0ZWRHcm91cCIsIm5hbWUiLCJpZCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwidXNlckRhdGEiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxhQUFhLFNBQWJBLFVBQWEsQ0FBQ0MsSUFBRCxFQUFVO0FBQzNCLFNBQU87QUFDTEMsVUFBTSxhQUREO0FBRUxEO0FBRkssR0FBUDtBQUlELENBTEQ7O2tCQU9lRCxVOzs7Ozs7Ozs7Ozs7OztBQ1BmOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUcsU0FBUyxTQUFUQSxNQUFTLENBQUNDLGNBQUQsRUFBb0I7QUFDakNDLGlCQUFlQyxVQUFmLENBQTBCLE1BQTFCO0FBQ0FGO0FBQ0QsQ0FIRDs7QUFLQSxJQUFNRyxXQUFXLFNBQVhBLFFBQVcsT0FBNEU7QUFBQSx5QkFBekVDLE1BQXlFO0FBQUEsTUFBekVBLE1BQXlFLCtCQUFoRSxXQUFnRTtBQUFBLE1BQW5EUCxJQUFtRCxRQUFuREEsSUFBbUQ7QUFBQSwwQkFBN0NRLE9BQTZDO0FBQUEsTUFBN0NBLE9BQTZDLGdDQUFuQyxLQUFtQztBQUFBLE1BQTVCQyxRQUE0QixRQUE1QkEsUUFBNEI7QUFBQSxNQUFsQkMsV0FBa0IsUUFBbEJBLFdBQWtCOztBQUMzRixNQUFJTixlQUFlTyxPQUFmLENBQXVCLE1BQXZCLE1BQW1DLElBQW5DLElBQTJDQyxTQUFTQyxJQUFULEtBQWtCLFlBQWpFLEVBQStFO0FBQzdFLFFBQUliLEtBQUtjLEtBQUwsS0FBZUMsU0FBbkIsRUFBOEI7QUFDNUJMLGtCQUFZTixlQUFlTyxPQUFmLENBQXVCLE1BQXZCLENBQVo7QUFDQUssY0FBUUMsR0FBUixDQUFZLHlCQUFaLEVBQXVDYixlQUFlTyxPQUFmLENBQXVCLE1BQXZCLENBQXZDO0FBQ0Q7QUFDRjs7QUFFRCxNQUFNTyxnQkFBZ0IsRUFBRUMsTUFBTSxNQUFSLEVBQWdCQyxJQUFJLENBQXBCLEVBQXRCOztBQUVBSixVQUFRQyxHQUFSLENBQVksc0JBQVosRUFBb0NqQixJQUFwQzs7QUFFQSxTQUNFO0FBQUE7QUFBQSxNQUFPLFdBQVUsMEJBQWpCO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUcsTUFBSyxZQUFSLEVBQXFCLFdBQVlPLFdBQVcsV0FBWCxHQUF5QixRQUF6QixHQUFvQyxFQUFyRTtBQUFBO0FBQUE7QUFERixPQURGO0FBSUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUcsTUFBSyxZQUFSLEVBQXFCLFdBQVlBLFdBQVcsY0FBWCxHQUE0QixRQUE1QixHQUF1QyxFQUF4RTtBQUNBLDJCQUFZLE9BRFosRUFDb0IsZUFBWSxtQkFEaEM7QUFBQTtBQUFBO0FBREYsT0FKRjtBQVFJQyxnQkFDRjtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBRyx1QkFBSCxFQUE0QixXQUFZRCxXQUFXLFFBQVgsR0FBc0IsUUFBdEIsR0FBaUMsRUFBekU7QUFBQTtBQUFBO0FBREYsT0FERSxHQUlNLEVBWlY7QUFhRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBRyxNQUFLLEdBQVIsRUFBWSxTQUFVO0FBQUEscUJBQU1MLE9BQU9PLFFBQVAsQ0FBTjtBQUFBLGFBQXRCO0FBQUE7QUFBQTtBQURGO0FBYkY7QUFERixHQURGO0FBb0JELENBaENEOztBQWtDQSxJQUFNWSxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQsRUFBVztBQUNqQyxTQUFPO0FBQ0x0QixVQUFNc0IsTUFBTUM7QUFEUCxHQUFQO0FBR0QsQ0FKRDs7QUFNQSxJQUFNQyxxQkFBcUIsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFELEVBQWM7QUFDdkMsU0FBTztBQUNMaEIsY0FBVTtBQUFBLGFBQU1nQixTQUFTLDJCQUFULENBQU47QUFBQSxLQURMO0FBRUxmLGlCQUFhO0FBQUEsYUFBUWUsU0FBUyx5QkFBVXpCLElBQVYsQ0FBVCxDQUFSO0FBQUE7QUFGUixHQUFQO0FBSUQsQ0FMRDtrQkFNZSx5QkFBUXFCLGVBQVIsRUFBeUJHLGtCQUF6QixFQUE2Q2xCLFFBQTdDLEMiLCJmaWxlIjoiMC5jZDlkOGRiZDdhM2Q3YjUyNmQ5Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbG9nb3V0VXNlciA9ICh1c2VyKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0xPR09VVF9VU0VSJyxcbiAgICB1c2VyXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2dvdXRVc2VyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2pzL2FjdGlvbnMvbG9nb3V0VXNlci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IGxvZ291dFVzZXIgZnJvbSAnLi4vLi4vYWN0aW9ucy9sb2dvdXRVc2VyJztcbmltcG9ydCBsb2dpblVzZXIgZnJvbSAnLi4vLi4vYWN0aW9ucy9sb2dpblVzZXInO1xuXG5jb25zdCBsb2dvdXQgPSAoY29tcGxldGVMb2dvdXQpID0+IHtcbiAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcicpO1xuICBjb21wbGV0ZUxvZ291dCgpO1xufTtcblxuY29uc3QgU2lkZU1lbnUgPSAoeyBhY3RpdmUgPSAnZGFzaGJvYXJkJywgdXNlciwgaW5ncm91cCA9IGZhbHNlLCBvbkxvZ291dCwgb25Mb2dpblVzZXIgfSkgPT4ge1xuICBpZiAoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpICE9PSBudWxsICYmIGxvY2F0aW9uLmhhc2ggIT09ICcjL3JlZ2lzdGVyJykge1xuICAgIGlmICh1c2VyLnRva2VuID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG9uTG9naW5Vc2VyKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSk7XG4gICAgICBjb25zb2xlLmxvZygnU0lERU1FTlVfU0VTU0lPTjo6Ojo6OjonLCBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHNlbGVjdGVkR3JvdXAgPSB7IG5hbWU6ICdUZXN0JywgaWQ6IDQgfTtcblxuICBjb25zb2xlLmxvZygnU0lERU1FTlVfVVNFUjo6Ojo6OjonLCB1c2VyKTtcblxuICByZXR1cm4gKFxuICAgIDxhc2lkZSBjbGFzc05hbWU9XCJsZWZ0IGRhc2hib2FyZC1tZW51IHByLTNcIj5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhIGhyZWY9XCIjZGFzaGJvYXJkXCIgY2xhc3NOYW1lPXsgYWN0aXZlID09PSAnZGFzaGJvYXJkJyA/ICdhY3RpdmUnIDogJyd9Pk15IEdyb3VwczwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhIGhyZWY9XCIjbmV3LWdyb3VwXCIgY2xhc3NOYW1lPXsgYWN0aXZlID09PSAnY3JlYXRlLWdyb3VwJyA/ICdhY3RpdmUnIDogJyd9XG4gICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI2NyZWF0ZUdyb3VwTW9kYWxcIj5DcmVhdGUgR3JvdXA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIHsgaW5ncm91cCA/XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YSBocmVmPXtgIy9ncm91cC8vc2VhcmNoYH0gY2xhc3NOYW1lPXsgYWN0aXZlID09PSAnc2VhcmNoJyA/ICdhY3RpdmUnIDogJyd9PlxuICAgICAgICAgIFVwZGF0ZSBNZW1iZXJzPC9hPlxuICAgICAgICA8L2xpPiA6ICcnfVxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsgKCkgPT4gbG9nb3V0KG9uTG9nb3V0KSB9PkxvZ291dDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gIDwvYXNpZGU+KTtcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHVzZXI6IHN0YXRlLnVzZXJEYXRhXG4gIH07XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBvbkxvZ291dDogKCkgPT4gZGlzcGF0Y2gobG9nb3V0VXNlcigpKSxcbiAgICBvbkxvZ2luVXNlcjogdXNlciA9PiBkaXNwYXRjaChsb2dpblVzZXIodXNlcikpXG4gIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoU2lkZU1lbnUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2pzL2NvbXBvbmVudHMvcHJlc2VudGF0aW9uYWwvc2lkZW1lbnUuanMiXSwic291cmNlUm9vdCI6IiJ9