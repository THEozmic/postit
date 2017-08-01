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

  console.log('SIDEMENU:::::::', sessionStorage.getItem('user'));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9zaWRlbWVudS5qcz8wNTc2Il0sIm5hbWVzIjpbImxvZ291dCIsImNvbXBsZXRlTG9nb3V0Iiwic2Vzc2lvblN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwiU2lkZU1lbnUiLCJ1c2VyIiwiaW5ncm91cCIsIm9uQ2hhbmdlU2VsZWN0ZWRHcm91cCIsIm9uTG9nb3V0Iiwib25Mb2dpblVzZXIiLCJnZXRJdGVtIiwidG9rZW4iLCJ1bmRlZmluZWQiLCJjb25zb2xlIiwibG9nIiwibG9jYXRpb24iLCJoYXNoIiwibmFtZSIsImlkIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJ1c2VyRGF0YSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFNBQVMsU0FBVEEsTUFBUyxDQUFDQyxjQUFELEVBQW9CO0FBQ2pDQyxpQkFBZUMsVUFBZixDQUEwQixNQUExQjtBQUNBRjtBQUNELENBSEQ7O0FBS0EsSUFBTUcsV0FBVyxTQUFYQSxRQUFXLE9BQTZFO0FBQUEsTUFBMUVDLElBQTBFLFFBQTFFQSxJQUEwRTtBQUFBLDBCQUFwRUMsT0FBb0U7QUFBQSxNQUFwRUEsT0FBb0UsZ0NBQTFELEtBQTBEO0FBQUEsTUFBbkRDLHFCQUFtRCxRQUFuREEscUJBQW1EO0FBQUEsTUFBNUJDLFFBQTRCLFFBQTVCQSxRQUE0QjtBQUFBLE1BQWxCQyxXQUFrQixRQUFsQkEsV0FBa0I7O0FBQzVGLE1BQUlQLGVBQWVRLE9BQWYsQ0FBdUIsTUFBdkIsTUFBbUMsSUFBdkMsRUFBNkM7QUFDM0MsUUFBSUwsS0FBS00sS0FBTCxLQUFlQyxTQUFuQixFQUE4QjtBQUM1Qkgsa0JBQVlQLGVBQWVRLE9BQWYsQ0FBdUIsTUFBdkIsQ0FBWjtBQUNBRyxjQUFRQyxHQUFSLENBQVkseUJBQVosRUFBdUNaLGVBQWVRLE9BQWYsQ0FBdUIsTUFBdkIsQ0FBdkM7QUFDRDtBQUNGLEdBTEQsTUFLTztBQUNMSyxhQUFTQyxJQUFULEdBQWdCLFFBQWhCO0FBQ0EsV0FBTyxJQUFQO0FBQ0Q7O0FBRURILFVBQVFDLEdBQVIsQ0FBWSxpQkFBWixFQUErQlosZUFBZVEsT0FBZixDQUF1QixNQUF2QixDQUEvQjs7QUFFQSxTQUNFO0FBQUE7QUFBQSxNQUFPLFdBQVUsMEJBQWpCO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUcsTUFBSyxZQUFSLEVBQXFCLFdBQVUsUUFBL0I7QUFBQTtBQUFBO0FBREYsT0FERjtBQUlFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFHLE1BQUssWUFBUixFQUFxQixlQUFZLE9BQWpDLEVBQXlDLGVBQVksbUJBQXJEO0FBQUE7QUFBQTtBQURGLE9BSkY7QUFPSUosZ0JBQ0Y7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUcsTUFBSyxTQUFSLEVBQWtCLFNBQVU7QUFBQSxxQkFBTUMsc0JBQXNCLEVBQUVVLE1BQU0sb0JBQVIsRUFBOEJDLElBQUksQ0FBbEMsRUFBdEIsQ0FBTjtBQUFBLGFBQTVCO0FBQUE7QUFBQTtBQURGLE9BREUsR0FHTSxFQVZWO0FBV0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUcsTUFBSyxHQUFSLEVBQVksU0FBVTtBQUFBLHFCQUFNbEIsT0FBT1EsUUFBUCxDQUFOO0FBQUEsYUFBdEI7QUFBQTtBQUFBO0FBREY7QUFYRjtBQURGLEdBREY7QUFrQkQsQ0EvQkQ7O0FBaUNBLElBQU1XLGtCQUFrQixTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQ2pDLFNBQU87QUFDTGYsVUFBTWUsTUFBTUM7QUFEUCxHQUFQO0FBR0QsQ0FKRDs7QUFNQSxJQUFNQyxxQkFBcUIsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFELEVBQWM7QUFDdkMsU0FBTztBQUNMZixjQUFVO0FBQUEsYUFBTWUsU0FBUywyQkFBVCxDQUFOO0FBQUEsS0FETDtBQUVMZCxpQkFBYTtBQUFBLGFBQVFjLFNBQVMseUJBQVVsQixJQUFWLENBQVQsQ0FBUjtBQUFBO0FBRlIsR0FBUDtBQUlELENBTEQ7a0JBTWUseUJBQVFjLGVBQVIsRUFBeUJHLGtCQUF6QixFQUE2Q2xCLFFBQTdDLEMiLCJmaWxlIjoiMC4yOTViMDBiMjM1YWQxMWFiYWZkZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgbG9nb3V0VXNlciBmcm9tICcuLi8uLi9hY3Rpb25zL2xvZ291dFVzZXInO1xuaW1wb3J0IGxvZ2luVXNlciBmcm9tICcuLi8uLi9hY3Rpb25zL2xvZ2luVXNlcic7XG5cbmNvbnN0IGxvZ291dCA9IChjb21wbGV0ZUxvZ291dCkgPT4ge1xuICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyJyk7XG4gIGNvbXBsZXRlTG9nb3V0KCk7XG59O1xuXG5jb25zdCBTaWRlTWVudSA9ICh7IHVzZXIsIGluZ3JvdXAgPSBmYWxzZSwgb25DaGFuZ2VTZWxlY3RlZEdyb3VwLCBvbkxvZ291dCwgb25Mb2dpblVzZXIgfSkgPT4ge1xuICBpZiAoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpICE9PSBudWxsKSB7XG4gICAgaWYgKHVzZXIudG9rZW4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgb25Mb2dpblVzZXIoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKTtcbiAgICAgIGNvbnNvbGUubG9nKCdTSURFTUVOVV9TRVNTSU9OOjo6Ojo6OicsIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGxvY2F0aW9uLmhhc2ggPSAnI2xvZ2luJztcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnNvbGUubG9nKCdTSURFTUVOVTo6Ojo6OjonLCBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpO1xuXG4gIHJldHVybiAoXG4gICAgPGFzaWRlIGNsYXNzTmFtZT1cImxlZnQgZGFzaGJvYXJkLW1lbnUgcHItM1wiPlxuICAgICAgPHVsPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGEgaHJlZj1cIiNkYXNoYm9hcmRcIiBjbGFzc05hbWU9XCJhY3RpdmVcIj5NeSBHcm91cHM8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YSBocmVmPVwiI25ldy1ncm91cFwiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNjcmVhdGVHcm91cE1vZGFsXCI+Q3JlYXRlIEdyb3VwPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICB7IGluZ3JvdXAgP1xuICAgICAgICA8bGk+XG4gICAgICAgICAgPGEgaHJlZj1cIiNzZWFyY2hcIiBvbkNsaWNrPXsgKCkgPT4gb25DaGFuZ2VTZWxlY3RlZEdyb3VwKHsgbmFtZTogJ0FuZGVsYSBCb290Y2FtcGVycycsIGlkOiAxIH0pIH0+QWRkIG1lbWJlcnM8L2E+XG4gICAgICAgIDwvbGk+IDogJyd9XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9eyAoKSA9PiBsb2dvdXQob25Mb2dvdXQpIH0+TG9nb3V0PC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgPC9hc2lkZT4pO1xufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdXNlcjogc3RhdGUudXNlckRhdGFcbiAgfTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICByZXR1cm4ge1xuICAgIG9uTG9nb3V0OiAoKSA9PiBkaXNwYXRjaChsb2dvdXRVc2VyKCkpLFxuICAgIG9uTG9naW5Vc2VyOiB1c2VyID0+IGRpc3BhdGNoKGxvZ2luVXNlcih1c2VyKSlcbiAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShTaWRlTWVudSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9zaWRlbWVudS5qcyJdLCJzb3VyY2VSb290IjoiIn0=