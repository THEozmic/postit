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

var _helpers = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../../helpers\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _helpers2 = _interopRequireDefault(_helpers);

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

  (0, _helpers2.default)(null, '/api/groups/' + id, 'GET').then(function (result) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9zaWRlbWVudS5qcz8wNTc2Il0sIm5hbWVzIjpbImxvZ291dCIsImNvbXBsZXRlTG9nb3V0Iiwic2Vzc2lvblN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwiU2lkZU1lbnUiLCJhY3RpdmUiLCJ1c2VyIiwiaW5ncm91cCIsIm9uTG9nb3V0Iiwib25Mb2dpblVzZXIiLCJnZXRJdGVtIiwibG9jYXRpb24iLCJoYXNoIiwidG9rZW4iLCJ1bmRlZmluZWQiLCJjb25zb2xlIiwibG9nIiwiaWQiLCJ0aGVuIiwicmVzdWx0Iiwic2VsZWN0ZWRHcm91cCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwidXNlckRhdGEiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFNBQVMsU0FBVEEsTUFBUyxDQUFDQyxjQUFELEVBQW9CO0FBQ2pDQyxpQkFBZUMsVUFBZixDQUEwQixNQUExQjtBQUNBRjtBQUNELENBSEQ7O0FBS0EsSUFBTUcsV0FBVyxTQUFYQSxRQUFXLE9BQTRFO0FBQUEseUJBQXpFQyxNQUF5RTtBQUFBLE1BQXpFQSxNQUF5RSwrQkFBaEUsV0FBZ0U7QUFBQSxNQUFuREMsSUFBbUQsUUFBbkRBLElBQW1EO0FBQUEsMEJBQTdDQyxPQUE2QztBQUFBLE1BQTdDQSxPQUE2QyxnQ0FBbkMsS0FBbUM7QUFBQSxNQUE1QkMsUUFBNEIsUUFBNUJBLFFBQTRCO0FBQUEsTUFBbEJDLFdBQWtCLFFBQWxCQSxXQUFrQjs7QUFDM0YsTUFBSVAsZUFBZVEsT0FBZixDQUF1QixNQUF2QixNQUFtQyxJQUFuQyxJQUEyQ0MsU0FBU0MsSUFBVCxLQUFrQixZQUFqRSxFQUErRTtBQUM3RSxRQUFJTixLQUFLTyxLQUFMLEtBQWVDLFNBQW5CLEVBQThCO0FBQzVCTCxrQkFBWVAsZUFBZVEsT0FBZixDQUF1QixNQUF2QixDQUFaO0FBQ0FLLGNBQVFDLEdBQVIsQ0FBWSx5QkFBWixFQUF1Q2QsZUFBZVEsT0FBZixDQUF1QixNQUF2QixDQUF2QztBQUNEO0FBQ0Y7O0FBRUQseUJBQUksSUFBSixtQkFBeUJPLEVBQXpCLEVBQStCLEtBQS9CLEVBQ0dDLElBREgsQ0FDUSxVQUFDQyxNQUFELEVBQVk7QUFDaEIsUUFBTUMsZ0JBQWdCRCxNQUF0QjtBQUNELEdBSEg7QUFJQUosVUFBUUMsR0FBUixDQUFZLHNCQUFaLEVBQW9DVixJQUFwQzs7QUFFQSxTQUNFO0FBQUE7QUFBQSxNQUFPLFdBQVUsMEJBQWpCO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUcsTUFBSyxZQUFSLEVBQXFCLFdBQVlELFdBQVcsV0FBWCxHQUF5QixRQUF6QixHQUFvQyxFQUFyRTtBQUFBO0FBQUE7QUFERixPQURGO0FBSUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUcsTUFBSyxZQUFSLEVBQXFCLFdBQVlBLFdBQVcsY0FBWCxHQUE0QixRQUE1QixHQUF1QyxFQUF4RTtBQUNBLDJCQUFZLE9BRFosRUFDb0IsZUFBWSxtQkFEaEM7QUFBQTtBQUFBO0FBREYsT0FKRjtBQVFJRSxnQkFDRjtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBRyxtQkFBaUJhLGNBQWNILEVBQS9CLFlBQUgsRUFBK0MsV0FBWVosV0FBVyxRQUFYLEdBQXNCLFFBQXRCLEdBQWlDLEVBQTVGO0FBQUE7QUFBQTtBQURGLE9BREUsR0FJTSxFQVpWO0FBYUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUcsTUFBSyxHQUFSLEVBQVksU0FBVTtBQUFBLHFCQUFNTCxPQUFPUSxRQUFQLENBQU47QUFBQSxhQUF0QjtBQUFBO0FBQUE7QUFERjtBQWJGO0FBREYsR0FERjtBQW9CRCxDQWxDRDs7QUFvQ0EsSUFBTWEsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFELEVBQVc7QUFDakMsU0FBTztBQUNMaEIsVUFBTWdCLE1BQU1DO0FBRFAsR0FBUDtBQUdELENBSkQ7O0FBTUEsSUFBTUMscUJBQXFCLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRCxFQUFjO0FBQ3ZDLFNBQU87QUFDTGpCLGNBQVU7QUFBQSxhQUFNaUIsU0FBUywyQkFBVCxDQUFOO0FBQUEsS0FETDtBQUVMaEIsaUJBQWE7QUFBQSxhQUFRZ0IsU0FBUyx5QkFBVW5CLElBQVYsQ0FBVCxDQUFSO0FBQUE7QUFGUixHQUFQO0FBSUQsQ0FMRDtrQkFNZSx5QkFBUWUsZUFBUixFQUF5Qkcsa0JBQXpCLEVBQTZDcEIsUUFBN0MsQyIsImZpbGUiOiIwLmZmYjdkOTFiMGQyYjkzNjIyNjZlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBsb2dvdXRVc2VyIGZyb20gJy4uLy4uL2FjdGlvbnMvbG9nb3V0VXNlcic7XG5pbXBvcnQgbG9naW5Vc2VyIGZyb20gJy4uLy4uL2FjdGlvbnMvbG9naW5Vc2VyJztcbmltcG9ydCBhcGkgZnJvbSAnLi4vLi4vaGVscGVycydcblxuY29uc3QgbG9nb3V0ID0gKGNvbXBsZXRlTG9nb3V0KSA9PiB7XG4gIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXInKTtcbiAgY29tcGxldGVMb2dvdXQoKTtcbn07XG5cbmNvbnN0IFNpZGVNZW51ID0gKHsgYWN0aXZlID0gJ2Rhc2hib2FyZCcsIHVzZXIsIGluZ3JvdXAgPSBmYWxzZSwgb25Mb2dvdXQsIG9uTG9naW5Vc2VyIH0pID0+IHtcbiAgaWYgKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSAhPT0gbnVsbCAmJiBsb2NhdGlvbi5oYXNoICE9PSAnIy9yZWdpc3RlcicpIHtcbiAgICBpZiAodXNlci50b2tlbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBvbkxvZ2luVXNlcihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpO1xuICAgICAgY29uc29sZS5sb2coJ1NJREVNRU5VX1NFU1NJT046Ojo6Ojo6Jywgc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKTtcbiAgICB9XG4gIH1cblxuICBhcGkobnVsbCwgYC9hcGkvZ3JvdXBzLyR7aWR9YCwgJ0dFVCcpXG4gICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgY29uc3Qgc2VsZWN0ZWRHcm91cCA9IHJlc3VsdDtcbiAgICB9KTtcbiAgY29uc29sZS5sb2coJ1NJREVNRU5VX1VTRVI6Ojo6Ojo6JywgdXNlcik7XG5cbiAgcmV0dXJuIChcbiAgICA8YXNpZGUgY2xhc3NOYW1lPVwibGVmdCBkYXNoYm9hcmQtbWVudSBwci0zXCI+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YSBocmVmPVwiI2Rhc2hib2FyZFwiIGNsYXNzTmFtZT17IGFjdGl2ZSA9PT0gJ2Rhc2hib2FyZCcgPyAnYWN0aXZlJyA6ICcnfT5NeSBHcm91cHM8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YSBocmVmPVwiI25ldy1ncm91cFwiIGNsYXNzTmFtZT17IGFjdGl2ZSA9PT0gJ2NyZWF0ZS1ncm91cCcgPyAnYWN0aXZlJyA6ICcnfVxuICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNjcmVhdGVHcm91cE1vZGFsXCI+Q3JlYXRlIEdyb3VwPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICB7IGluZ3JvdXAgP1xuICAgICAgICA8bGk+XG4gICAgICAgICAgPGEgaHJlZj17YCMvZ3JvdXAvJHtzZWxlY3RlZEdyb3VwLmlkfS9zZWFyY2hgfSBjbGFzc05hbWU9eyBhY3RpdmUgPT09ICdzZWFyY2gnID8gJ2FjdGl2ZScgOiAnJ30+XG4gICAgICAgICAgVXBkYXRlIE1lbWJlcnM8L2E+XG4gICAgICAgIDwvbGk+IDogJyd9XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9eyAoKSA9PiBsb2dvdXQob25Mb2dvdXQpIH0+TG9nb3V0PC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgPC9hc2lkZT4pO1xufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdXNlcjogc3RhdGUudXNlckRhdGFcbiAgfTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICByZXR1cm4ge1xuICAgIG9uTG9nb3V0OiAoKSA9PiBkaXNwYXRjaChsb2dvdXRVc2VyKCkpLFxuICAgIG9uTG9naW5Vc2VyOiB1c2VyID0+IGRpc3BhdGNoKGxvZ2luVXNlcih1c2VyKSlcbiAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShTaWRlTWVudSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9zaWRlbWVudS5qcyJdLCJzb3VyY2VSb290IjoiIn0=