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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9zaWRlbWVudS5qcz8wNTc2Il0sIm5hbWVzIjpbImxvZ291dCIsImNvbXBsZXRlTG9nb3V0Iiwic2Vzc2lvblN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwiU2lkZU1lbnUiLCJ1c2VyIiwiaW5ncm91cCIsIm9uQ2hhbmdlU2VsZWN0ZWRHcm91cCIsIm9uTG9nb3V0Iiwib25Mb2dpblVzZXIiLCJnZXRJdGVtIiwidG9rZW4iLCJ1bmRlZmluZWQiLCJjb25zb2xlIiwibG9nIiwibG9jYXRpb24iLCJoYXNoIiwiYWN0aXZlIiwibmFtZSIsImlkIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJ1c2VyRGF0YSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFNBQVMsU0FBVEEsTUFBUyxDQUFDQyxjQUFELEVBQW9CO0FBQ2pDQyxpQkFBZUMsVUFBZixDQUEwQixNQUExQjtBQUNBRjtBQUNELENBSEQ7O0FBS0EsSUFBTUcsV0FBVyxTQUFYQSxRQUFXLE9BQTZFO0FBQUEsTUFBMUVDLElBQTBFLFFBQTFFQSxJQUEwRTtBQUFBLDBCQUFwRUMsT0FBb0U7QUFBQSxNQUFwRUEsT0FBb0UsZ0NBQTFELEtBQTBEO0FBQUEsTUFBbkRDLHFCQUFtRCxRQUFuREEscUJBQW1EO0FBQUEsTUFBNUJDLFFBQTRCLFFBQTVCQSxRQUE0QjtBQUFBLE1BQWxCQyxXQUFrQixRQUFsQkEsV0FBa0I7O0FBQzVGLE1BQUlQLGVBQWVRLE9BQWYsQ0FBdUIsTUFBdkIsTUFBbUMsSUFBdkMsRUFBNkM7QUFDM0MsUUFBSUwsS0FBS00sS0FBTCxLQUFlQyxTQUFuQixFQUE4QjtBQUM1Qkgsa0JBQVlQLGVBQWVRLE9BQWYsQ0FBdUIsTUFBdkIsQ0FBWjtBQUNBRyxjQUFRQyxHQUFSLENBQVkseUJBQVosRUFBdUNaLGVBQWVRLE9BQWYsQ0FBdUIsTUFBdkIsQ0FBdkM7QUFDRDtBQUNGLEdBTEQsTUFLTztBQUNMSyxhQUFTQyxJQUFULEdBQWdCLFFBQWhCO0FBQ0EsV0FBTyxJQUFQO0FBQ0Q7O0FBRURILFVBQVFDLEdBQVIsQ0FBWSxzQkFBWixFQUFvQ1QsSUFBcEM7O0FBRUEsU0FDRTtBQUFBO0FBQUEsTUFBTyxXQUFVLDBCQUFqQjtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFHLE1BQUssWUFBUixFQUFxQixXQUFXWSxNQUFoQztBQUFBO0FBQUE7QUFERixPQURGO0FBSUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUcsTUFBSyxZQUFSLEVBQXFCLGVBQVksT0FBakMsRUFBeUMsZUFBWSxtQkFBckQ7QUFBQTtBQUFBO0FBREYsT0FKRjtBQU9JWCxnQkFDRjtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBRyxNQUFLLFNBQVIsRUFBa0IsU0FBVTtBQUFBLHFCQUFNQyxzQkFBc0IsRUFBRVcsTUFBTSxvQkFBUixFQUE4QkMsSUFBSSxDQUFsQyxFQUF0QixDQUFOO0FBQUEsYUFBNUI7QUFBQTtBQUFBO0FBREYsT0FERSxHQUdNLEVBVlY7QUFXRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBRyxNQUFLLEdBQVIsRUFBWSxTQUFVO0FBQUEscUJBQU1uQixPQUFPUSxRQUFQLENBQU47QUFBQSxhQUF0QjtBQUFBO0FBQUE7QUFERjtBQVhGO0FBREYsR0FERjtBQWtCRCxDQS9CRDs7QUFpQ0EsSUFBTVksa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFELEVBQVc7QUFDakMsU0FBTztBQUNMaEIsVUFBTWdCLE1BQU1DO0FBRFAsR0FBUDtBQUdELENBSkQ7O0FBTUEsSUFBTUMscUJBQXFCLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRCxFQUFjO0FBQ3ZDLFNBQU87QUFDTGhCLGNBQVU7QUFBQSxhQUFNZ0IsU0FBUywyQkFBVCxDQUFOO0FBQUEsS0FETDtBQUVMZixpQkFBYTtBQUFBLGFBQVFlLFNBQVMseUJBQVVuQixJQUFWLENBQVQsQ0FBUjtBQUFBO0FBRlIsR0FBUDtBQUlELENBTEQ7a0JBTWUseUJBQVFlLGVBQVIsRUFBeUJHLGtCQUF6QixFQUE2Q25CLFFBQTdDLEMiLCJmaWxlIjoiMC43NmY3ZGY5M2JjMmVmNzU2MjlhZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgbG9nb3V0VXNlciBmcm9tICcuLi8uLi9hY3Rpb25zL2xvZ291dFVzZXInO1xuaW1wb3J0IGxvZ2luVXNlciBmcm9tICcuLi8uLi9hY3Rpb25zL2xvZ2luVXNlcic7XG5cbmNvbnN0IGxvZ291dCA9IChjb21wbGV0ZUxvZ291dCkgPT4ge1xuICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyJyk7XG4gIGNvbXBsZXRlTG9nb3V0KCk7XG59O1xuXG5jb25zdCBTaWRlTWVudSA9ICh7IHVzZXIsIGluZ3JvdXAgPSBmYWxzZSwgb25DaGFuZ2VTZWxlY3RlZEdyb3VwLCBvbkxvZ291dCwgb25Mb2dpblVzZXIgfSkgPT4ge1xuICBpZiAoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpICE9PSBudWxsKSB7XG4gICAgaWYgKHVzZXIudG9rZW4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgb25Mb2dpblVzZXIoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKTtcbiAgICAgIGNvbnNvbGUubG9nKCdTSURFTUVOVV9TRVNTSU9OOjo6Ojo6OicsIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGxvY2F0aW9uLmhhc2ggPSAnI2xvZ2luJztcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnNvbGUubG9nKCdTSURFTUVOVV9VU0VSOjo6Ojo6OicsIHVzZXIpO1xuXG4gIHJldHVybiAoXG4gICAgPGFzaWRlIGNsYXNzTmFtZT1cImxlZnQgZGFzaGJvYXJkLW1lbnUgcHItM1wiPlxuICAgICAgPHVsPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGEgaHJlZj1cIiNkYXNoYm9hcmRcIiBjbGFzc05hbWU9e2FjdGl2ZX0+TXkgR3JvdXBzPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGEgaHJlZj1cIiNuZXctZ3JvdXBcIiBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS10YXJnZXQ9XCIjY3JlYXRlR3JvdXBNb2RhbFwiPkNyZWF0ZSBHcm91cDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgeyBpbmdyb3VwID9cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhIGhyZWY9XCIjc2VhcmNoXCIgb25DbGljaz17ICgpID0+IG9uQ2hhbmdlU2VsZWN0ZWRHcm91cCh7IG5hbWU6ICdBbmRlbGEgQm9vdGNhbXBlcnMnLCBpZDogMSB9KSB9PkFkZCBtZW1iZXJzPC9hPlxuICAgICAgICA8L2xpPiA6ICcnfVxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsgKCkgPT4gbG9nb3V0KG9uTG9nb3V0KSB9PkxvZ291dDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gIDwvYXNpZGU+KTtcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHVzZXI6IHN0YXRlLnVzZXJEYXRhXG4gIH07XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBvbkxvZ291dDogKCkgPT4gZGlzcGF0Y2gobG9nb3V0VXNlcigpKSxcbiAgICBvbkxvZ2luVXNlcjogdXNlciA9PiBkaXNwYXRjaChsb2dpblVzZXIodXNlcikpXG4gIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoU2lkZU1lbnUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2pzL2NvbXBvbmVudHMvcHJlc2VudGF0aW9uYWwvc2lkZW1lbnUuanMiXSwic291cmNlUm9vdCI6IiJ9