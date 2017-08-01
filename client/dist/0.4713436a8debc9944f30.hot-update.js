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
  var _ref$active = _ref.active,
      active = _ref$active === undefined ? 'dashboard' : _ref$active,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9zaWRlbWVudS5qcz8wNTc2Il0sIm5hbWVzIjpbImxvZ291dCIsImNvbXBsZXRlTG9nb3V0Iiwic2Vzc2lvblN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwiU2lkZU1lbnUiLCJhY3RpdmUiLCJ1c2VyIiwiaW5ncm91cCIsIm9uQ2hhbmdlU2VsZWN0ZWRHcm91cCIsIm9uTG9nb3V0Iiwib25Mb2dpblVzZXIiLCJnZXRJdGVtIiwidG9rZW4iLCJ1bmRlZmluZWQiLCJjb25zb2xlIiwibG9nIiwibG9jYXRpb24iLCJoYXNoIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJ1c2VyRGF0YSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFNBQVMsU0FBVEEsTUFBUyxDQUFDQyxjQUFELEVBQW9CO0FBQ2pDQyxpQkFBZUMsVUFBZixDQUEwQixNQUExQjtBQUNBRjtBQUNELENBSEQ7O0FBS0EsSUFBTUcsV0FBVyxTQUFYQSxRQUFXLE9BQW1HO0FBQUEseUJBQWhHQyxNQUFnRztBQUFBLE1BQWhHQSxNQUFnRywrQkFBdkYsV0FBdUY7QUFBQSxNQUExRUMsSUFBMEUsUUFBMUVBLElBQTBFO0FBQUEsMEJBQXBFQyxPQUFvRTtBQUFBLE1BQXBFQSxPQUFvRSxnQ0FBMUQsS0FBMEQ7QUFBQSxNQUFuREMscUJBQW1ELFFBQW5EQSxxQkFBbUQ7QUFBQSxNQUE1QkMsUUFBNEIsUUFBNUJBLFFBQTRCO0FBQUEsTUFBbEJDLFdBQWtCLFFBQWxCQSxXQUFrQjs7QUFDbEgsTUFBSVIsZUFBZVMsT0FBZixDQUF1QixNQUF2QixNQUFtQyxJQUF2QyxFQUE2QztBQUMzQyxRQUFJTCxLQUFLTSxLQUFMLEtBQWVDLFNBQW5CLEVBQThCO0FBQzVCSCxrQkFBWVIsZUFBZVMsT0FBZixDQUF1QixNQUF2QixDQUFaO0FBQ0FHLGNBQVFDLEdBQVIsQ0FBWSx5QkFBWixFQUF1Q2IsZUFBZVMsT0FBZixDQUF1QixNQUF2QixDQUF2QztBQUNEO0FBQ0YsR0FMRCxNQUtPO0FBQ0xLLGFBQVNDLElBQVQsR0FBZ0IsUUFBaEI7QUFDQSxXQUFPLElBQVA7QUFDRDs7QUFFREgsVUFBUUMsR0FBUixDQUFZLHNCQUFaLEVBQW9DVCxJQUFwQzs7QUFFQSxTQUNFO0FBQUE7QUFBQSxNQUFPLFdBQVUsMEJBQWpCO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUcsTUFBSyxZQUFSLEVBQXFCLFdBQVlELFdBQVcsV0FBWCxHQUF5QixRQUF6QixHQUFvQyxFQUFyRTtBQUFBO0FBQUE7QUFERixPQURGO0FBSUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUcsTUFBSyxZQUFSLEVBQXFCLFdBQVlBLFdBQVcsY0FBWCxHQUE0QixRQUE1QixHQUF1QyxFQUF4RTtBQUNBLDJCQUFZLE9BRFosRUFDb0IsZUFBWSxtQkFEaEM7QUFBQTtBQUFBO0FBREYsT0FKRjtBQVFJRSxnQkFDRjtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBRyxNQUFLLFNBQVIsRUFBa0IsV0FBWUYsV0FBVyxRQUFYLEdBQXNCLFFBQXRCLEdBQWlDLEVBQS9EO0FBQUE7QUFBQTtBQURGLE9BREUsR0FJTSxFQVpWO0FBYUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUcsTUFBSyxHQUFSLEVBQVksU0FBVTtBQUFBLHFCQUFNTCxPQUFPUyxRQUFQLENBQU47QUFBQSxhQUF0QjtBQUFBO0FBQUE7QUFERjtBQWJGO0FBREYsR0FERjtBQW9CRCxDQWpDRDs7QUFtQ0EsSUFBTVMsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFELEVBQVc7QUFDakMsU0FBTztBQUNMYixVQUFNYSxNQUFNQztBQURQLEdBQVA7QUFHRCxDQUpEOztBQU1BLElBQU1DLHFCQUFxQixTQUFyQkEsa0JBQXFCLENBQUNDLFFBQUQsRUFBYztBQUN2QyxTQUFPO0FBQ0xiLGNBQVU7QUFBQSxhQUFNYSxTQUFTLDJCQUFULENBQU47QUFBQSxLQURMO0FBRUxaLGlCQUFhO0FBQUEsYUFBUVksU0FBUyx5QkFBVWhCLElBQVYsQ0FBVCxDQUFSO0FBQUE7QUFGUixHQUFQO0FBSUQsQ0FMRDtrQkFNZSx5QkFBUVksZUFBUixFQUF5Qkcsa0JBQXpCLEVBQTZDakIsUUFBN0MsQyIsImZpbGUiOiIwLjQ3MTM0MzZhOGRlYmM5OTQ0ZjMwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBsb2dvdXRVc2VyIGZyb20gJy4uLy4uL2FjdGlvbnMvbG9nb3V0VXNlcic7XG5pbXBvcnQgbG9naW5Vc2VyIGZyb20gJy4uLy4uL2FjdGlvbnMvbG9naW5Vc2VyJztcblxuY29uc3QgbG9nb3V0ID0gKGNvbXBsZXRlTG9nb3V0KSA9PiB7XG4gIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXInKTtcbiAgY29tcGxldGVMb2dvdXQoKTtcbn07XG5cbmNvbnN0IFNpZGVNZW51ID0gKHsgYWN0aXZlID0gJ2Rhc2hib2FyZCcsIHVzZXIsIGluZ3JvdXAgPSBmYWxzZSwgb25DaGFuZ2VTZWxlY3RlZEdyb3VwLCBvbkxvZ291dCwgb25Mb2dpblVzZXIgfSkgPT4ge1xuICBpZiAoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpICE9PSBudWxsKSB7XG4gICAgaWYgKHVzZXIudG9rZW4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgb25Mb2dpblVzZXIoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKTtcbiAgICAgIGNvbnNvbGUubG9nKCdTSURFTUVOVV9TRVNTSU9OOjo6Ojo6OicsIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGxvY2F0aW9uLmhhc2ggPSAnI2xvZ2luJztcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnNvbGUubG9nKCdTSURFTUVOVV9VU0VSOjo6Ojo6OicsIHVzZXIpO1xuXG4gIHJldHVybiAoXG4gICAgPGFzaWRlIGNsYXNzTmFtZT1cImxlZnQgZGFzaGJvYXJkLW1lbnUgcHItM1wiPlxuICAgICAgPHVsPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGEgaHJlZj1cIiNkYXNoYm9hcmRcIiBjbGFzc05hbWU9eyBhY3RpdmUgPT09ICdkYXNoYm9hcmQnID8gJ2FjdGl2ZScgOiAnJ30+TXkgR3JvdXBzPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGEgaHJlZj1cIiNuZXctZ3JvdXBcIiBjbGFzc05hbWU9eyBhY3RpdmUgPT09ICdjcmVhdGUtZ3JvdXAnID8gJ2FjdGl2ZScgOiAnJ31cbiAgICAgICAgICBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS10YXJnZXQ9XCIjY3JlYXRlR3JvdXBNb2RhbFwiPkNyZWF0ZSBHcm91cDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgeyBpbmdyb3VwID9cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhIGhyZWY9XCIjc2VhcmNoXCIgY2xhc3NOYW1lPXsgYWN0aXZlID09PSAnc2VhcmNoJyA/ICdhY3RpdmUnIDogJyd9PlxuICAgICAgICAgIEFkZCBtZW1iZXJzPC9hPlxuICAgICAgICA8L2xpPiA6ICcnfVxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsgKCkgPT4gbG9nb3V0KG9uTG9nb3V0KSB9PkxvZ291dDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gIDwvYXNpZGU+KTtcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHVzZXI6IHN0YXRlLnVzZXJEYXRhXG4gIH07XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBvbkxvZ291dDogKCkgPT4gZGlzcGF0Y2gobG9nb3V0VXNlcigpKSxcbiAgICBvbkxvZ2luVXNlcjogdXNlciA9PiBkaXNwYXRjaChsb2dpblVzZXIodXNlcikpXG4gIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoU2lkZU1lbnUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2pzL2NvbXBvbmVudHMvcHJlc2VudGF0aW9uYWwvc2lkZW1lbnUuanMiXSwic291cmNlUm9vdCI6IiJ9