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

var _api = __webpack_require__(19);

var _api2 = _interopRequireDefault(_api);

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

  var id = location.href.split('/')[location.href.split('/').length - 1];
  (0, _api2.default)(null, '/api/groups/' + id, 'GET').then(function (result) {
    var selectedGroup = result;
  });
  console.log('SIDEMENU_USER:::::::', user);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9zaWRlbWVudS5qcz8wNTc2Il0sIm5hbWVzIjpbImxvZ291dCIsImNvbXBsZXRlTG9nb3V0Iiwic2Vzc2lvblN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwiU2lkZU1lbnUiLCJhY3RpdmUiLCJ1c2VyIiwiaW5ncm91cCIsIm9uTG9nb3V0Iiwib25Mb2dpblVzZXIiLCJnZXRJdGVtIiwibG9jYXRpb24iLCJoYXNoIiwidG9rZW4iLCJ1bmRlZmluZWQiLCJjb25zb2xlIiwibG9nIiwiaWQiLCJocmVmIiwic3BsaXQiLCJsZW5ndGgiLCJ0aGVuIiwicmVzdWx0Iiwic2VsZWN0ZWRHcm91cCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwidXNlckRhdGEiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFNBQVMsU0FBVEEsTUFBUyxDQUFDQyxjQUFELEVBQW9CO0FBQ2pDQyxpQkFBZUMsVUFBZixDQUEwQixNQUExQjtBQUNBRjtBQUNELENBSEQ7O0FBS0EsSUFBTUcsV0FBVyxTQUFYQSxRQUFXLE9BQTRFO0FBQUEseUJBQXpFQyxNQUF5RTtBQUFBLE1BQXpFQSxNQUF5RSwrQkFBaEUsV0FBZ0U7QUFBQSxNQUFuREMsSUFBbUQsUUFBbkRBLElBQW1EO0FBQUEsMEJBQTdDQyxPQUE2QztBQUFBLE1BQTdDQSxPQUE2QyxnQ0FBbkMsS0FBbUM7QUFBQSxNQUE1QkMsUUFBNEIsUUFBNUJBLFFBQTRCO0FBQUEsTUFBbEJDLFdBQWtCLFFBQWxCQSxXQUFrQjs7QUFDM0YsTUFBSVAsZUFBZVEsT0FBZixDQUF1QixNQUF2QixNQUFtQyxJQUFuQyxJQUEyQ0MsU0FBU0MsSUFBVCxLQUFrQixZQUFqRSxFQUErRTtBQUM3RSxRQUFJTixLQUFLTyxLQUFMLEtBQWVDLFNBQW5CLEVBQThCO0FBQzVCTCxrQkFBWVAsZUFBZVEsT0FBZixDQUF1QixNQUF2QixDQUFaO0FBQ0FLLGNBQVFDLEdBQVIsQ0FBWSx5QkFBWixFQUF1Q2QsZUFBZVEsT0FBZixDQUF1QixNQUF2QixDQUF2QztBQUNEO0FBQ0Y7O0FBRUQsTUFBTU8sS0FBS04sU0FBU08sSUFBVCxDQUFjQyxLQUFkLENBQW9CLEdBQXBCLEVBQXlCUixTQUFTTyxJQUFULENBQWNDLEtBQWQsQ0FBb0IsR0FBcEIsRUFBeUJDLE1BQXpCLEdBQWtDLENBQTNELENBQVg7QUFDQSxxQkFBSSxJQUFKLG1CQUF5QkgsRUFBekIsRUFBK0IsS0FBL0IsRUFDR0ksSUFESCxDQUNRLFVBQUNDLE1BQUQsRUFBWTtBQUNoQixRQUFNQyxnQkFBZ0JELE1BQXRCO0FBQ0QsR0FISDtBQUlBUCxVQUFRQyxHQUFSLENBQVksc0JBQVosRUFBb0NWLElBQXBDO0FBRUQsQ0FmRDs7QUFpQkEsSUFBTWtCLGtCQUFrQixTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQ2pDLFNBQU87QUFDTG5CLFVBQU1tQixNQUFNQztBQURQLEdBQVA7QUFHRCxDQUpEOztBQU1BLElBQU1DLHFCQUFxQixTQUFyQkEsa0JBQXFCLENBQUNDLFFBQUQsRUFBYztBQUN2QyxTQUFPO0FBQ0xwQixjQUFVO0FBQUEsYUFBTW9CLFNBQVMsMkJBQVQsQ0FBTjtBQUFBLEtBREw7QUFFTG5CLGlCQUFhO0FBQUEsYUFBUW1CLFNBQVMseUJBQVV0QixJQUFWLENBQVQsQ0FBUjtBQUFBO0FBRlIsR0FBUDtBQUlELENBTEQ7a0JBTWUseUJBQVFrQixlQUFSLEVBQXlCRyxrQkFBekIsRUFBNkN2QixRQUE3QyxDIiwiZmlsZSI6IjAuY2Q0YzgzYzRjMzNiY2UwYzUzZGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IGxvZ291dFVzZXIgZnJvbSAnLi4vLi4vYWN0aW9ucy9sb2dvdXRVc2VyJztcbmltcG9ydCBsb2dpblVzZXIgZnJvbSAnLi4vLi4vYWN0aW9ucy9sb2dpblVzZXInO1xuaW1wb3J0IGFwaSBmcm9tICcuLi9oZWxwZXJzL2FwaSc7XG5cbmNvbnN0IGxvZ291dCA9IChjb21wbGV0ZUxvZ291dCkgPT4ge1xuICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyJyk7XG4gIGNvbXBsZXRlTG9nb3V0KCk7XG59O1xuXG5jb25zdCBTaWRlTWVudSA9ICh7IGFjdGl2ZSA9ICdkYXNoYm9hcmQnLCB1c2VyLCBpbmdyb3VwID0gZmFsc2UsIG9uTG9nb3V0LCBvbkxvZ2luVXNlciB9KSA9PiB7XG4gIGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykgIT09IG51bGwgJiYgbG9jYXRpb24uaGFzaCAhPT0gJyMvcmVnaXN0ZXInKSB7XG4gICAgaWYgKHVzZXIudG9rZW4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgb25Mb2dpblVzZXIoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKTtcbiAgICAgIGNvbnNvbGUubG9nKCdTSURFTUVOVV9TRVNTSU9OOjo6Ojo6OicsIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgaWQgPSBsb2NhdGlvbi5ocmVmLnNwbGl0KCcvJylbbG9jYXRpb24uaHJlZi5zcGxpdCgnLycpLmxlbmd0aCAtIDFdO1xuICBhcGkobnVsbCwgYC9hcGkvZ3JvdXBzLyR7aWR9YCwgJ0dFVCcpXG4gICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgY29uc3Qgc2VsZWN0ZWRHcm91cCA9IHJlc3VsdDtcbiAgICB9KTtcbiAgY29uc29sZS5sb2coJ1NJREVNRU5VX1VTRVI6Ojo6Ojo6JywgdXNlcik7XG5cbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHVzZXI6IHN0YXRlLnVzZXJEYXRhXG4gIH07XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBvbkxvZ291dDogKCkgPT4gZGlzcGF0Y2gobG9nb3V0VXNlcigpKSxcbiAgICBvbkxvZ2luVXNlcjogdXNlciA9PiBkaXNwYXRjaChsb2dpblVzZXIodXNlcikpXG4gIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoU2lkZU1lbnUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2pzL2NvbXBvbmVudHMvcHJlc2VudGF0aW9uYWwvc2lkZW1lbnUuanMiXSwic291cmNlUm9vdCI6IiJ9