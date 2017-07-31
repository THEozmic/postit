webpackHotUpdate(0,{

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

var logout = function logout() {
  logout();
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
              return onChangeSelectedGroup('Andela Bootcampers');
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
              return _onLogout(onLogout);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9zaWRlbWVudS5qcz8wNTc2Il0sIm5hbWVzIjpbImxvZ291dCIsIlNpZGVNZW51IiwiaW5ncm91cCIsIm9uQ2hhbmdlU2VsZWN0ZWRHcm91cCIsIm9uTG9nb3V0Iiwic2Vzc2lvblN0b3JhZ2UiLCJ1c2VyIiwidW5kZWZpbmVkIiwibG9jYXRpb24iLCJoYXNoIiwiX29uTG9nb3V0IiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFNBQVMsU0FBVEEsTUFBUyxHQUFNO0FBQ25CQTtBQUNELENBRkQ7QUFHQSxJQUFNQyxXQUFXLFNBQVhBLFFBQVcsT0FBMEQ7QUFBQSwwQkFBdkRDLE9BQXVEO0FBQUEsTUFBdkRBLE9BQXVELGdDQUE3QyxLQUE2QztBQUFBLE1BQXRDQyxxQkFBc0MsUUFBdENBLHFCQUFzQztBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFDekUsTUFBSUMsZUFBZUMsSUFBZixLQUF3QkMsU0FBNUIsRUFBdUM7QUFDckNDLGFBQVNDLElBQVQsR0FBZ0IsUUFBaEI7QUFDQSxXQUFPLElBQVA7QUFDRDtBQUNELFNBQ0U7QUFBQTtBQUFBLE1BQU8sV0FBVSwwQkFBakI7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBRyxNQUFLLFlBQVIsRUFBcUIsV0FBVSxRQUEvQjtBQUFBO0FBQUE7QUFERixPQURGO0FBSUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUcsTUFBSyxZQUFSLEVBQXFCLGVBQVksT0FBakMsRUFBeUMsZUFBWSxtQkFBckQ7QUFBQTtBQUFBO0FBREYsT0FKRjtBQU9JUCxnQkFDRjtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBRyxNQUFLLFNBQVIsRUFBa0IsU0FBVTtBQUFBLHFCQUFNQyxzQkFBc0Isb0JBQXRCLENBQU47QUFBQSxhQUE1QjtBQUFBO0FBQUE7QUFERixPQURFLEdBR00sRUFWVjtBQVdFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFHLE1BQUssR0FBUixFQUFZLFNBQVU7QUFBQSxxQkFBTU8sVUFBVU4sUUFBVixDQUFOO0FBQUEsYUFBdEI7QUFBQTtBQUFBO0FBREY7QUFYRjtBQURGLEdBREY7QUFrQkQsQ0F2QkQ7O0FBMEJBLElBQU1PLHFCQUFxQixTQUFyQkEsa0JBQXFCLENBQUNDLFFBQUQsRUFBYztBQUN2QyxTQUFPO0FBQ0xSLGNBQVU7QUFBQSxhQUFNUSxTQUFTLDJCQUFULENBQU47QUFBQTtBQURMLEdBQVA7QUFHRCxDQUpEO2tCQUtlLHlCQUFRLElBQVIsRUFBY0Qsa0JBQWQsRUFBa0NWLFFBQWxDLEMiLCJmaWxlIjoiMC4yNzA3NGRmNjk5YjE0MGUyNTIyNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgbG9nb3V0VXNlciBmcm9tICcuLi8uLi9hY3Rpb25zL2xvZ291dFVzZXInO1xuXG5jb25zdCBsb2dvdXQgPSAoKSA9PiB7XG4gIGxvZ291dCgpO1xufVxuY29uc3QgU2lkZU1lbnUgPSAoeyBpbmdyb3VwID0gZmFsc2UsIG9uQ2hhbmdlU2VsZWN0ZWRHcm91cCwgb25Mb2dvdXQgfSkgPT4ge1xuICBpZiAoc2Vzc2lvblN0b3JhZ2UudXNlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbG9jYXRpb24uaGFzaCA9ICcjbG9naW4nO1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiAoXG4gICAgPGFzaWRlIGNsYXNzTmFtZT1cImxlZnQgZGFzaGJvYXJkLW1lbnUgcHItM1wiPlxuICAgICAgPHVsPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGEgaHJlZj1cIiNkYXNoYm9hcmRcIiBjbGFzc05hbWU9XCJhY3RpdmVcIj5NeSBHcm91cHM8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YSBocmVmPVwiI25ldy1ncm91cFwiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNjcmVhdGVHcm91cE1vZGFsXCI+Q3JlYXRlIEdyb3VwPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICB7IGluZ3JvdXAgP1xuICAgICAgICA8bGk+XG4gICAgICAgICAgPGEgaHJlZj1cIiNzZWFyY2hcIiBvbkNsaWNrPXsgKCkgPT4gb25DaGFuZ2VTZWxlY3RlZEdyb3VwKCdBbmRlbGEgQm9vdGNhbXBlcnMnKSB9PkFkZCBtZW1iZXJzPC9hPlxuICAgICAgICA8L2xpPiA6ICcnfVxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsgKCkgPT4gX29uTG9nb3V0KG9uTG9nb3V0KSB9PkxvZ291dDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gIDwvYXNpZGU+KTtcbn07XG5cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgb25Mb2dvdXQ6ICgpID0+IGRpc3BhdGNoKGxvZ291dFVzZXIoKSlcbiAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIG1hcERpc3BhdGNoVG9Qcm9wcykoU2lkZU1lbnUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2pzL2NvbXBvbmVudHMvcHJlc2VudGF0aW9uYWwvc2lkZW1lbnUuanMiXSwic291cmNlUm9vdCI6IiJ9