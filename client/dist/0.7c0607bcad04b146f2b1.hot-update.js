webpackHotUpdate(0,{

/***/ 124:
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

var _reactRedux = __webpack_require__(18);

var _logoutUser = __webpack_require__(124);

var _logoutUser2 = _interopRequireDefault(_logoutUser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logout = function logout(completeLogout) {
  sessionStorage.removeItem('user');
  completeLogout();
};

var SideMenu = function SideMenu(_ref) {
  var _ref$ingroup = _ref.ingroup,
      ingroup = _ref$ingroup === undefined ? false : _ref$ingroup,
      onChangeSelectedGroup = _ref.onChangeSelectedGroup,
      onLogout = _ref.onLogout;

  if (sessionStorage.user === undefined) {
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

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onLogout: function onLogout() {
      return dispatch((0, _logoutUser2.default)());
    }
  };
};
exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(SideMenu);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvYWN0aW9ucy9sb2dvdXRVc2VyLmpzP2RkNDYiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2pzL2NvbXBvbmVudHMvcHJlc2VudGF0aW9uYWwvc2lkZW1lbnUuanM/MDU3NiJdLCJuYW1lcyI6WyJsb2dvdXRVc2VyIiwidXNlciIsInR5cGUiLCJsb2dvdXQiLCJjb21wbGV0ZUxvZ291dCIsInNlc3Npb25TdG9yYWdlIiwicmVtb3ZlSXRlbSIsIlNpZGVNZW51IiwiaW5ncm91cCIsIm9uQ2hhbmdlU2VsZWN0ZWRHcm91cCIsIm9uTG9nb3V0IiwidW5kZWZpbmVkIiwibG9jYXRpb24iLCJoYXNoIiwibmFtZSIsImlkIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsYUFBYSxTQUFiQSxVQUFhLENBQUNDLElBQUQsRUFBVTtBQUMzQixTQUFPO0FBQ0xDLFVBQU0sYUFERDtBQUVMRDtBQUZLLEdBQVA7QUFJRCxDQUxEOztrQkFPZUQsVTs7Ozs7Ozs7Ozs7Ozs7QUNQZjs7OztBQUNBOztBQUNBOzs7Ozs7QUFFQSxJQUFNRyxTQUFTLFNBQVRBLE1BQVMsQ0FBQ0MsY0FBRCxFQUFvQjtBQUNqQ0MsaUJBQWVDLFVBQWYsQ0FBMEIsTUFBMUI7QUFDQUY7QUFDRCxDQUhEOztBQUtBLElBQU1HLFdBQVcsU0FBWEEsUUFBVyxPQUEwRDtBQUFBLDBCQUF2REMsT0FBdUQ7QUFBQSxNQUF2REEsT0FBdUQsZ0NBQTdDLEtBQTZDO0FBQUEsTUFBdENDLHFCQUFzQyxRQUF0Q0EscUJBQXNDO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlOztBQUN6RSxNQUFJTCxlQUFlSixJQUFmLEtBQXdCVSxTQUE1QixFQUF1QztBQUNyQ0MsYUFBU0MsSUFBVCxHQUFnQixRQUFoQjtBQUNBLFdBQU8sSUFBUDtBQUNEO0FBQ0QsU0FDRTtBQUFBO0FBQUEsTUFBTyxXQUFVLDBCQUFqQjtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFHLE1BQUssWUFBUixFQUFxQixXQUFVLFFBQS9CO0FBQUE7QUFBQTtBQURGLE9BREY7QUFJRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBRyxNQUFLLFlBQVIsRUFBcUIsZUFBWSxPQUFqQyxFQUF5QyxlQUFZLG1CQUFyRDtBQUFBO0FBQUE7QUFERixPQUpGO0FBT0lMLGdCQUNGO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFHLE1BQUssU0FBUixFQUFrQixTQUFVO0FBQUEscUJBQU1DLHNCQUFzQixFQUFFSyxNQUFNLG9CQUFSLEVBQThCQyxJQUFJLENBQWxDLEVBQXRCLENBQU47QUFBQSxhQUE1QjtBQUFBO0FBQUE7QUFERixPQURFLEdBR00sRUFWVjtBQVdFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFHLE1BQUssR0FBUixFQUFZLFNBQVU7QUFBQSxxQkFBTVosT0FBT08sUUFBUCxDQUFOO0FBQUEsYUFBdEI7QUFBQTtBQUFBO0FBREY7QUFYRjtBQURGLEdBREY7QUFrQkQsQ0F2QkQ7O0FBeUJBLElBQU1NLHFCQUFxQixTQUFyQkEsa0JBQXFCLENBQUNDLFFBQUQsRUFBYztBQUN2QyxTQUFPO0FBQ0xQLGNBQVU7QUFBQSxhQUFNTyxTQUFTLDJCQUFULENBQU47QUFBQTtBQURMLEdBQVA7QUFHRCxDQUpEO2tCQUtlLHlCQUFRLElBQVIsRUFBY0Qsa0JBQWQsRUFBa0NULFFBQWxDLEMiLCJmaWxlIjoiMC43YzA2MDdiY2FkMDRiMTQ2ZjJiMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbG9nb3V0VXNlciA9ICh1c2VyKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0xPR09VVF9VU0VSJyxcbiAgICB1c2VyXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2dvdXRVc2VyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2pzL2FjdGlvbnMvbG9nb3V0VXNlci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IGxvZ291dFVzZXIgZnJvbSAnLi4vLi4vYWN0aW9ucy9sb2dvdXRVc2VyJztcblxuY29uc3QgbG9nb3V0ID0gKGNvbXBsZXRlTG9nb3V0KSA9PiB7XG4gIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXInKTtcbiAgY29tcGxldGVMb2dvdXQoKTtcbn07XG5cbmNvbnN0IFNpZGVNZW51ID0gKHsgaW5ncm91cCA9IGZhbHNlLCBvbkNoYW5nZVNlbGVjdGVkR3JvdXAsIG9uTG9nb3V0IH0pID0+IHtcbiAgaWYgKHNlc3Npb25TdG9yYWdlLnVzZXIgPT09IHVuZGVmaW5lZCkge1xuICAgIGxvY2F0aW9uLmhhc2ggPSAnI2xvZ2luJztcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxhc2lkZSBjbGFzc05hbWU9XCJsZWZ0IGRhc2hib2FyZC1tZW51IHByLTNcIj5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhIGhyZWY9XCIjZGFzaGJvYXJkXCIgY2xhc3NOYW1lPVwiYWN0aXZlXCI+TXkgR3JvdXBzPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGEgaHJlZj1cIiNuZXctZ3JvdXBcIiBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS10YXJnZXQ9XCIjY3JlYXRlR3JvdXBNb2RhbFwiPkNyZWF0ZSBHcm91cDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgeyBpbmdyb3VwID9cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhIGhyZWY9XCIjc2VhcmNoXCIgb25DbGljaz17ICgpID0+IG9uQ2hhbmdlU2VsZWN0ZWRHcm91cCh7IG5hbWU6ICdBbmRlbGEgQm9vdGNhbXBlcnMnLCBpZDogMSB9KSB9PkFkZCBtZW1iZXJzPC9hPlxuICAgICAgICA8L2xpPiA6ICcnfVxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsgKCkgPT4gbG9nb3V0KG9uTG9nb3V0KSB9PkxvZ291dDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gIDwvYXNpZGU+KTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICByZXR1cm4ge1xuICAgIG9uTG9nb3V0OiAoKSA9PiBkaXNwYXRjaChsb2dvdXRVc2VyKCkpXG4gIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFNpZGVNZW51KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9qcy9jb21wb25lbnRzL3ByZXNlbnRhdGlvbmFsL3NpZGVtZW51LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==