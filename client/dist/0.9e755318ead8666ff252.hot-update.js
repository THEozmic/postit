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
      console.log('NEWUSER:::::::', sessionStorage.getItem('user'));
    }
  } else {
    location.hash = '#login';
    return null;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9zaWRlbWVudS5qcz8wNTc2Il0sIm5hbWVzIjpbImxvZ291dCIsImNvbXBsZXRlTG9nb3V0Iiwic2Vzc2lvblN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwiU2lkZU1lbnUiLCJ1c2VyIiwiaW5ncm91cCIsIm9uQ2hhbmdlU2VsZWN0ZWRHcm91cCIsIm9uTG9nb3V0Iiwib25Mb2dpblVzZXIiLCJnZXRJdGVtIiwidG9rZW4iLCJ1bmRlZmluZWQiLCJjb25zb2xlIiwibG9nIiwibG9jYXRpb24iLCJoYXNoIiwibmFtZSIsImlkIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJ1c2VyRGF0YSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFNBQVMsU0FBVEEsTUFBUyxDQUFDQyxjQUFELEVBQW9CO0FBQ2pDQyxpQkFBZUMsVUFBZixDQUEwQixNQUExQjtBQUNBRjtBQUNELENBSEQ7O0FBS0EsSUFBTUcsV0FBVyxTQUFYQSxRQUFXLE9BQTZFO0FBQUEsTUFBMUVDLElBQTBFLFFBQTFFQSxJQUEwRTtBQUFBLDBCQUFwRUMsT0FBb0U7QUFBQSxNQUFwRUEsT0FBb0UsZ0NBQTFELEtBQTBEO0FBQUEsTUFBbkRDLHFCQUFtRCxRQUFuREEscUJBQW1EO0FBQUEsTUFBNUJDLFFBQTRCLFFBQTVCQSxRQUE0QjtBQUFBLE1BQWxCQyxXQUFrQixRQUFsQkEsV0FBa0I7O0FBQzVGLE1BQUlQLGVBQWVRLE9BQWYsQ0FBdUIsTUFBdkIsTUFBbUMsSUFBdkMsRUFBNkM7QUFDM0MsUUFBSUwsS0FBS00sS0FBTCxLQUFlQyxTQUFuQixFQUE4QjtBQUM1Qkgsa0JBQVlQLGVBQWVRLE9BQWYsQ0FBdUIsTUFBdkIsQ0FBWjtBQUNBRyxjQUFRQyxHQUFSLENBQVksZ0JBQVosRUFBOEJaLGVBQWVRLE9BQWYsQ0FBdUIsTUFBdkIsQ0FBOUI7QUFDRDtBQUNGLEdBTEQsTUFLTztBQUNMSyxhQUFTQyxJQUFULEdBQWdCLFFBQWhCO0FBQ0EsV0FBTyxJQUFQO0FBQ0Q7O0FBRUQsU0FDRTtBQUFBO0FBQUEsTUFBTyxXQUFVLDBCQUFqQjtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFHLE1BQUssWUFBUixFQUFxQixXQUFVLFFBQS9CO0FBQUE7QUFBQTtBQURGLE9BREY7QUFJRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBRyxNQUFLLFlBQVIsRUFBcUIsZUFBWSxPQUFqQyxFQUF5QyxlQUFZLG1CQUFyRDtBQUFBO0FBQUE7QUFERixPQUpGO0FBT0lWLGdCQUNGO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFHLE1BQUssU0FBUixFQUFrQixTQUFVO0FBQUEscUJBQU1DLHNCQUFzQixFQUFFVSxNQUFNLG9CQUFSLEVBQThCQyxJQUFJLENBQWxDLEVBQXRCLENBQU47QUFBQSxhQUE1QjtBQUFBO0FBQUE7QUFERixPQURFLEdBR00sRUFWVjtBQVdFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFHLE1BQUssR0FBUixFQUFZLFNBQVU7QUFBQSxxQkFBTWxCLE9BQU9RLFFBQVAsQ0FBTjtBQUFBLGFBQXRCO0FBQUE7QUFBQTtBQURGO0FBWEY7QUFERixHQURGO0FBa0JELENBN0JEOztBQStCQSxJQUFNVyxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQsRUFBVztBQUNqQyxTQUFPO0FBQ0xmLFVBQU1lLE1BQU1DO0FBRFAsR0FBUDtBQUdELENBSkQ7O0FBTUEsSUFBTUMscUJBQXFCLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRCxFQUFjO0FBQ3ZDLFNBQU87QUFDTGYsY0FBVTtBQUFBLGFBQU1lLFNBQVMsMkJBQVQsQ0FBTjtBQUFBLEtBREw7QUFFTGQsaUJBQWE7QUFBQSxhQUFRYyxTQUFTLHlCQUFVbEIsSUFBVixDQUFULENBQVI7QUFBQTtBQUZSLEdBQVA7QUFJRCxDQUxEO2tCQU1lLHlCQUFRYyxlQUFSLEVBQXlCRyxrQkFBekIsRUFBNkNsQixRQUE3QyxDIiwiZmlsZSI6IjAuOWU3NTUzMThlYWQ4NjY2ZmYyNTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IGxvZ291dFVzZXIgZnJvbSAnLi4vLi4vYWN0aW9ucy9sb2dvdXRVc2VyJztcbmltcG9ydCBsb2dpblVzZXIgZnJvbSAnLi4vLi4vYWN0aW9ucy9sb2dpblVzZXInO1xuXG5jb25zdCBsb2dvdXQgPSAoY29tcGxldGVMb2dvdXQpID0+IHtcbiAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcicpO1xuICBjb21wbGV0ZUxvZ291dCgpO1xufTtcblxuY29uc3QgU2lkZU1lbnUgPSAoeyB1c2VyLCBpbmdyb3VwID0gZmFsc2UsIG9uQ2hhbmdlU2VsZWN0ZWRHcm91cCwgb25Mb2dvdXQsIG9uTG9naW5Vc2VyIH0pID0+IHtcbiAgaWYgKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSAhPT0gbnVsbCkge1xuICAgIGlmICh1c2VyLnRva2VuID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG9uTG9naW5Vc2VyKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSk7XG4gICAgICBjb25zb2xlLmxvZygnTkVXVVNFUjo6Ojo6OjonLCBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBsb2NhdGlvbi5oYXNoID0gJyNsb2dpbic7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxhc2lkZSBjbGFzc05hbWU9XCJsZWZ0IGRhc2hib2FyZC1tZW51IHByLTNcIj5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhIGhyZWY9XCIjZGFzaGJvYXJkXCIgY2xhc3NOYW1lPVwiYWN0aXZlXCI+TXkgR3JvdXBzPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGEgaHJlZj1cIiNuZXctZ3JvdXBcIiBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS10YXJnZXQ9XCIjY3JlYXRlR3JvdXBNb2RhbFwiPkNyZWF0ZSBHcm91cDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgeyBpbmdyb3VwID9cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhIGhyZWY9XCIjc2VhcmNoXCIgb25DbGljaz17ICgpID0+IG9uQ2hhbmdlU2VsZWN0ZWRHcm91cCh7IG5hbWU6ICdBbmRlbGEgQm9vdGNhbXBlcnMnLCBpZDogMSB9KSB9PkFkZCBtZW1iZXJzPC9hPlxuICAgICAgICA8L2xpPiA6ICcnfVxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsgKCkgPT4gbG9nb3V0KG9uTG9nb3V0KSB9PkxvZ291dDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gIDwvYXNpZGU+KTtcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHVzZXI6IHN0YXRlLnVzZXJEYXRhXG4gIH07XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBvbkxvZ291dDogKCkgPT4gZGlzcGF0Y2gobG9nb3V0VXNlcigpKSxcbiAgICBvbkxvZ2luVXNlcjogdXNlciA9PiBkaXNwYXRjaChsb2dpblVzZXIodXNlcikpXG4gIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoU2lkZU1lbnUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2pzL2NvbXBvbmVudHMvcHJlc2VudGF0aW9uYWwvc2lkZW1lbnUuanMiXSwic291cmNlUm9vdCI6IiJ9