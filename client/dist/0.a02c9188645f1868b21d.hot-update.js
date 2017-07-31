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

/***/ 140:
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
      onChangeSelectedGroup = _ref.onChangeSelectedGroup,
      onLogout = _ref.onLogout,
      onLoginUser = _ref.onLoginUser;

  if (sessionStorage.getItem('user') !== null && location.hash !== 'register') {
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
          { href: '#search', className: active === 'search' ? 'active' : '' },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvYWN0aW9ucy9sb2dvdXRVc2VyLmpzP2RkNDYiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2pzL2NvbXBvbmVudHMvcHJlc2VudGF0aW9uYWwvc2lkZW1lbnUuanM/MDU3NiJdLCJuYW1lcyI6WyJsb2dvdXRVc2VyIiwidXNlciIsInR5cGUiLCJsb2dvdXQiLCJjb21wbGV0ZUxvZ291dCIsInNlc3Npb25TdG9yYWdlIiwicmVtb3ZlSXRlbSIsIlNpZGVNZW51IiwiYWN0aXZlIiwiaW5ncm91cCIsIm9uQ2hhbmdlU2VsZWN0ZWRHcm91cCIsIm9uTG9nb3V0Iiwib25Mb2dpblVzZXIiLCJnZXRJdGVtIiwibG9jYXRpb24iLCJoYXNoIiwidG9rZW4iLCJ1bmRlZmluZWQiLCJjb25zb2xlIiwibG9nIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJ1c2VyRGF0YSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLElBQU1BLGFBQWEsU0FBYkEsVUFBYSxDQUFDQyxJQUFELEVBQVU7QUFDM0IsU0FBTztBQUNMQyxVQUFNLGFBREQ7QUFFTEQ7QUFGSyxHQUFQO0FBSUQsQ0FMRDs7a0JBT2VELFU7Ozs7Ozs7Ozs7Ozs7O0FDUGY7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNRyxTQUFTLFNBQVRBLE1BQVMsQ0FBQ0MsY0FBRCxFQUFvQjtBQUNqQ0MsaUJBQWVDLFVBQWYsQ0FBMEIsTUFBMUI7QUFDQUY7QUFDRCxDQUhEOztBQUtBLElBQU1HLFdBQVcsU0FBWEEsUUFBVyxPQUFtRztBQUFBLHlCQUFoR0MsTUFBZ0c7QUFBQSxNQUFoR0EsTUFBZ0csK0JBQXZGLFdBQXVGO0FBQUEsTUFBMUVQLElBQTBFLFFBQTFFQSxJQUEwRTtBQUFBLDBCQUFwRVEsT0FBb0U7QUFBQSxNQUFwRUEsT0FBb0UsZ0NBQTFELEtBQTBEO0FBQUEsTUFBbkRDLHFCQUFtRCxRQUFuREEscUJBQW1EO0FBQUEsTUFBNUJDLFFBQTRCLFFBQTVCQSxRQUE0QjtBQUFBLE1BQWxCQyxXQUFrQixRQUFsQkEsV0FBa0I7O0FBQ2xILE1BQUlQLGVBQWVRLE9BQWYsQ0FBdUIsTUFBdkIsTUFBbUMsSUFBbkMsSUFBMkNDLFNBQVNDLElBQVQsS0FBa0IsVUFBakUsRUFBNkU7QUFDM0UsUUFBSWQsS0FBS2UsS0FBTCxLQUFlQyxTQUFuQixFQUE4QjtBQUM1Qkwsa0JBQVlQLGVBQWVRLE9BQWYsQ0FBdUIsTUFBdkIsQ0FBWjtBQUNBSyxjQUFRQyxHQUFSLENBQVkseUJBQVosRUFBdUNkLGVBQWVRLE9BQWYsQ0FBdUIsTUFBdkIsQ0FBdkM7QUFDRDtBQUNGLEdBTEQsTUFLTztBQUNMQyxhQUFTQyxJQUFULEdBQWdCLFFBQWhCO0FBQ0EsV0FBTyxJQUFQO0FBQ0Q7O0FBRURHLFVBQVFDLEdBQVIsQ0FBWSxzQkFBWixFQUFvQ2xCLElBQXBDOztBQUVBLFNBQ0U7QUFBQTtBQUFBLE1BQU8sV0FBVSwwQkFBakI7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBRyxNQUFLLFlBQVIsRUFBcUIsV0FBWU8sV0FBVyxXQUFYLEdBQXlCLFFBQXpCLEdBQW9DLEVBQXJFO0FBQUE7QUFBQTtBQURGLE9BREY7QUFJRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBRyxNQUFLLFlBQVIsRUFBcUIsV0FBWUEsV0FBVyxjQUFYLEdBQTRCLFFBQTVCLEdBQXVDLEVBQXhFO0FBQ0EsMkJBQVksT0FEWixFQUNvQixlQUFZLG1CQURoQztBQUFBO0FBQUE7QUFERixPQUpGO0FBUUlDLGdCQUNGO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFHLE1BQUssU0FBUixFQUFrQixXQUFZRCxXQUFXLFFBQVgsR0FBc0IsUUFBdEIsR0FBaUMsRUFBL0Q7QUFBQTtBQUFBO0FBREYsT0FERSxHQUlNLEVBWlY7QUFhRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBRyxNQUFLLEdBQVIsRUFBWSxTQUFVO0FBQUEscUJBQU1MLE9BQU9RLFFBQVAsQ0FBTjtBQUFBLGFBQXRCO0FBQUE7QUFBQTtBQURGO0FBYkY7QUFERixHQURGO0FBb0JELENBakNEOztBQW1DQSxJQUFNUyxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQsRUFBVztBQUNqQyxTQUFPO0FBQ0xwQixVQUFNb0IsTUFBTUM7QUFEUCxHQUFQO0FBR0QsQ0FKRDs7QUFNQSxJQUFNQyxxQkFBcUIsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFELEVBQWM7QUFDdkMsU0FBTztBQUNMYixjQUFVO0FBQUEsYUFBTWEsU0FBUywyQkFBVCxDQUFOO0FBQUEsS0FETDtBQUVMWixpQkFBYTtBQUFBLGFBQVFZLFNBQVMseUJBQVV2QixJQUFWLENBQVQsQ0FBUjtBQUFBO0FBRlIsR0FBUDtBQUlELENBTEQ7a0JBTWUseUJBQVFtQixlQUFSLEVBQXlCRyxrQkFBekIsRUFBNkNoQixRQUE3QyxDIiwiZmlsZSI6IjAuYTAyYzkxODg2NDVmMTg2OGIyMWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGxvZ291dFVzZXIgPSAodXNlcikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdMT0dPVVRfVVNFUicsXG4gICAgdXNlclxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9nb3V0VXNlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9qcy9hY3Rpb25zL2xvZ291dFVzZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBsb2dvdXRVc2VyIGZyb20gJy4uLy4uL2FjdGlvbnMvbG9nb3V0VXNlcic7XG5pbXBvcnQgbG9naW5Vc2VyIGZyb20gJy4uLy4uL2FjdGlvbnMvbG9naW5Vc2VyJztcblxuY29uc3QgbG9nb3V0ID0gKGNvbXBsZXRlTG9nb3V0KSA9PiB7XG4gIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXInKTtcbiAgY29tcGxldGVMb2dvdXQoKTtcbn07XG5cbmNvbnN0IFNpZGVNZW51ID0gKHsgYWN0aXZlID0gJ2Rhc2hib2FyZCcsIHVzZXIsIGluZ3JvdXAgPSBmYWxzZSwgb25DaGFuZ2VTZWxlY3RlZEdyb3VwLCBvbkxvZ291dCwgb25Mb2dpblVzZXIgfSkgPT4ge1xuICBpZiAoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpICE9PSBudWxsICYmIGxvY2F0aW9uLmhhc2ggIT09ICdyZWdpc3RlcicpIHtcbiAgICBpZiAodXNlci50b2tlbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBvbkxvZ2luVXNlcihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpO1xuICAgICAgY29uc29sZS5sb2coJ1NJREVNRU5VX1NFU1NJT046Ojo6Ojo6Jywgc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgbG9jYXRpb24uaGFzaCA9ICcjbG9naW4nO1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc29sZS5sb2coJ1NJREVNRU5VX1VTRVI6Ojo6Ojo6JywgdXNlcik7XG5cbiAgcmV0dXJuIChcbiAgICA8YXNpZGUgY2xhc3NOYW1lPVwibGVmdCBkYXNoYm9hcmQtbWVudSBwci0zXCI+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YSBocmVmPVwiI2Rhc2hib2FyZFwiIGNsYXNzTmFtZT17IGFjdGl2ZSA9PT0gJ2Rhc2hib2FyZCcgPyAnYWN0aXZlJyA6ICcnfT5NeSBHcm91cHM8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YSBocmVmPVwiI25ldy1ncm91cFwiIGNsYXNzTmFtZT17IGFjdGl2ZSA9PT0gJ2NyZWF0ZS1ncm91cCcgPyAnYWN0aXZlJyA6ICcnfVxuICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNjcmVhdGVHcm91cE1vZGFsXCI+Q3JlYXRlIEdyb3VwPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICB7IGluZ3JvdXAgP1xuICAgICAgICA8bGk+XG4gICAgICAgICAgPGEgaHJlZj1cIiNzZWFyY2hcIiBjbGFzc05hbWU9eyBhY3RpdmUgPT09ICdzZWFyY2gnID8gJ2FjdGl2ZScgOiAnJ30+XG4gICAgICAgICAgQWRkIG1lbWJlcnM8L2E+XG4gICAgICAgIDwvbGk+IDogJyd9XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9eyAoKSA9PiBsb2dvdXQob25Mb2dvdXQpIH0+TG9nb3V0PC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgPC9hc2lkZT4pO1xufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdXNlcjogc3RhdGUudXNlckRhdGFcbiAgfTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICByZXR1cm4ge1xuICAgIG9uTG9nb3V0OiAoKSA9PiBkaXNwYXRjaChsb2dvdXRVc2VyKCkpLFxuICAgIG9uTG9naW5Vc2VyOiB1c2VyID0+IGRpc3BhdGNoKGxvZ2luVXNlcih1c2VyKSlcbiAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShTaWRlTWVudSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9zaWRlbWVudS5qcyJdLCJzb3VyY2VSb290IjoiIn0=