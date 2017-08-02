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

  (0, _api2.default)(null, '/api/groups/' + id, 'GET').then(function (result) {
    var selectedGroup = result;
  });
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
          { href: '#/group/' + selectedGroup.id + '/search', className: active === 'search' ? 'active' : '' },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9zaWRlbWVudS5qcz8wNTc2Il0sIm5hbWVzIjpbImxvZ291dCIsImNvbXBsZXRlTG9nb3V0Iiwic2Vzc2lvblN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwiU2lkZU1lbnUiLCJhY3RpdmUiLCJ1c2VyIiwiaW5ncm91cCIsIm9uTG9nb3V0Iiwib25Mb2dpblVzZXIiLCJnZXRJdGVtIiwibG9jYXRpb24iLCJoYXNoIiwidG9rZW4iLCJ1bmRlZmluZWQiLCJjb25zb2xlIiwibG9nIiwiaWQiLCJ0aGVuIiwicmVzdWx0Iiwic2VsZWN0ZWRHcm91cCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwidXNlckRhdGEiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFNBQVMsU0FBVEEsTUFBUyxDQUFDQyxjQUFELEVBQW9CO0FBQ2pDQyxpQkFBZUMsVUFBZixDQUEwQixNQUExQjtBQUNBRjtBQUNELENBSEQ7O0FBS0EsSUFBTUcsV0FBVyxTQUFYQSxRQUFXLE9BQTRFO0FBQUEseUJBQXpFQyxNQUF5RTtBQUFBLE1BQXpFQSxNQUF5RSwrQkFBaEUsV0FBZ0U7QUFBQSxNQUFuREMsSUFBbUQsUUFBbkRBLElBQW1EO0FBQUEsMEJBQTdDQyxPQUE2QztBQUFBLE1BQTdDQSxPQUE2QyxnQ0FBbkMsS0FBbUM7QUFBQSxNQUE1QkMsUUFBNEIsUUFBNUJBLFFBQTRCO0FBQUEsTUFBbEJDLFdBQWtCLFFBQWxCQSxXQUFrQjs7QUFDM0YsTUFBSVAsZUFBZVEsT0FBZixDQUF1QixNQUF2QixNQUFtQyxJQUFuQyxJQUEyQ0MsU0FBU0MsSUFBVCxLQUFrQixZQUFqRSxFQUErRTtBQUM3RSxRQUFJTixLQUFLTyxLQUFMLEtBQWVDLFNBQW5CLEVBQThCO0FBQzVCTCxrQkFBWVAsZUFBZVEsT0FBZixDQUF1QixNQUF2QixDQUFaO0FBQ0FLLGNBQVFDLEdBQVIsQ0FBWSx5QkFBWixFQUF1Q2QsZUFBZVEsT0FBZixDQUF1QixNQUF2QixDQUF2QztBQUNEO0FBQ0Y7O0FBRUQscUJBQUksSUFBSixtQkFBeUJPLEVBQXpCLEVBQStCLEtBQS9CLEVBQ0dDLElBREgsQ0FDUSxVQUFDQyxNQUFELEVBQVk7QUFDaEIsUUFBTUMsZ0JBQWdCRCxNQUF0QjtBQUNELEdBSEg7QUFJQUosVUFBUUMsR0FBUixDQUFZLHNCQUFaLEVBQW9DVixJQUFwQzs7QUFFQSxTQUNFO0FBQUE7QUFBQSxNQUFPLFdBQVUsMEJBQWpCO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUcsTUFBSyxZQUFSLEVBQXFCLFdBQVlELFdBQVcsV0FBWCxHQUF5QixRQUF6QixHQUFvQyxFQUFyRTtBQUFBO0FBQUE7QUFERixPQURGO0FBSUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUcsTUFBSyxZQUFSLEVBQXFCLFdBQVlBLFdBQVcsY0FBWCxHQUE0QixRQUE1QixHQUF1QyxFQUF4RTtBQUNBLDJCQUFZLE9BRFosRUFDb0IsZUFBWSxtQkFEaEM7QUFBQTtBQUFBO0FBREYsT0FKRjtBQVFJRSxnQkFDRjtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBRyxtQkFBaUJhLGNBQWNILEVBQS9CLFlBQUgsRUFBK0MsV0FBWVosV0FBVyxRQUFYLEdBQXNCLFFBQXRCLEdBQWlDLEVBQTVGO0FBQUE7QUFBQTtBQURGLE9BREUsR0FJTSxFQVpWO0FBYUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUcsTUFBSyxHQUFSLEVBQVksU0FBVTtBQUFBLHFCQUFNTCxPQUFPUSxRQUFQLENBQU47QUFBQSxhQUF0QjtBQUFBO0FBQUE7QUFERjtBQWJGO0FBREYsR0FERjtBQW9CRCxDQWxDRDs7QUFvQ0EsSUFBTWEsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFELEVBQVc7QUFDakMsU0FBTztBQUNMaEIsVUFBTWdCLE1BQU1DO0FBRFAsR0FBUDtBQUdELENBSkQ7O0FBTUEsSUFBTUMscUJBQXFCLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRCxFQUFjO0FBQ3ZDLFNBQU87QUFDTGpCLGNBQVU7QUFBQSxhQUFNaUIsU0FBUywyQkFBVCxDQUFOO0FBQUEsS0FETDtBQUVMaEIsaUJBQWE7QUFBQSxhQUFRZ0IsU0FBUyx5QkFBVW5CLElBQVYsQ0FBVCxDQUFSO0FBQUE7QUFGUixHQUFQO0FBSUQsQ0FMRDtrQkFNZSx5QkFBUWUsZUFBUixFQUF5Qkcsa0JBQXpCLEVBQTZDcEIsUUFBN0MsQyIsImZpbGUiOiIwLmMzOTIzNDM1NTEwYmQ4OTk3OWQ1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBsb2dvdXRVc2VyIGZyb20gJy4uLy4uL2FjdGlvbnMvbG9nb3V0VXNlcic7XG5pbXBvcnQgbG9naW5Vc2VyIGZyb20gJy4uLy4uL2FjdGlvbnMvbG9naW5Vc2VyJztcbmltcG9ydCBhcGkgZnJvbSAnLi4vaGVscGVycy9hcGknO1xuXG5jb25zdCBsb2dvdXQgPSAoY29tcGxldGVMb2dvdXQpID0+IHtcbiAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcicpO1xuICBjb21wbGV0ZUxvZ291dCgpO1xufTtcblxuY29uc3QgU2lkZU1lbnUgPSAoeyBhY3RpdmUgPSAnZGFzaGJvYXJkJywgdXNlciwgaW5ncm91cCA9IGZhbHNlLCBvbkxvZ291dCwgb25Mb2dpblVzZXIgfSkgPT4ge1xuICBpZiAoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpICE9PSBudWxsICYmIGxvY2F0aW9uLmhhc2ggIT09ICcjL3JlZ2lzdGVyJykge1xuICAgIGlmICh1c2VyLnRva2VuID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG9uTG9naW5Vc2VyKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSk7XG4gICAgICBjb25zb2xlLmxvZygnU0lERU1FTlVfU0VTU0lPTjo6Ojo6OjonLCBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpO1xuICAgIH1cbiAgfVxuXG4gIGFwaShudWxsLCBgL2FwaS9ncm91cHMvJHtpZH1gLCAnR0VUJylcbiAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICBjb25zdCBzZWxlY3RlZEdyb3VwID0gcmVzdWx0O1xuICAgIH0pO1xuICBjb25zb2xlLmxvZygnU0lERU1FTlVfVVNFUjo6Ojo6OjonLCB1c2VyKTtcblxuICByZXR1cm4gKFxuICAgIDxhc2lkZSBjbGFzc05hbWU9XCJsZWZ0IGRhc2hib2FyZC1tZW51IHByLTNcIj5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhIGhyZWY9XCIjZGFzaGJvYXJkXCIgY2xhc3NOYW1lPXsgYWN0aXZlID09PSAnZGFzaGJvYXJkJyA/ICdhY3RpdmUnIDogJyd9Pk15IEdyb3VwczwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhIGhyZWY9XCIjbmV3LWdyb3VwXCIgY2xhc3NOYW1lPXsgYWN0aXZlID09PSAnY3JlYXRlLWdyb3VwJyA/ICdhY3RpdmUnIDogJyd9XG4gICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI2NyZWF0ZUdyb3VwTW9kYWxcIj5DcmVhdGUgR3JvdXA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIHsgaW5ncm91cCA/XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YSBocmVmPXtgIy9ncm91cC8ke3NlbGVjdGVkR3JvdXAuaWR9L3NlYXJjaGB9IGNsYXNzTmFtZT17IGFjdGl2ZSA9PT0gJ3NlYXJjaCcgPyAnYWN0aXZlJyA6ICcnfT5cbiAgICAgICAgICBVcGRhdGUgTWVtYmVyczwvYT5cbiAgICAgICAgPC9saT4gOiAnJ31cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17ICgpID0+IGxvZ291dChvbkxvZ291dCkgfT5Mb2dvdXQ8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICA8L2FzaWRlPik7XG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB1c2VyOiBzdGF0ZS51c2VyRGF0YVxuICB9O1xufTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgb25Mb2dvdXQ6ICgpID0+IGRpc3BhdGNoKGxvZ291dFVzZXIoKSksXG4gICAgb25Mb2dpblVzZXI6IHVzZXIgPT4gZGlzcGF0Y2gobG9naW5Vc2VyKHVzZXIpKVxuICB9O1xufTtcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFNpZGVNZW51KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9qcy9jb21wb25lbnRzL3ByZXNlbnRhdGlvbmFsL3NpZGVtZW51LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==