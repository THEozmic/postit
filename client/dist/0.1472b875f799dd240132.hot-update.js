webpackHotUpdate(0,{

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var logout = function logout(completeLogout) {
  sessionStorage.removeItem('user');
  completeLogout();
};

var SideMenu = function (_React$Component) {
  _inherits(SideMenu, _React$Component);

  function SideMenu(props) {
    _classCallCheck(this, SideMenu);

    var _this = _possibleConstructorReturn(this, (SideMenu.__proto__ || Object.getPrototypeOf(SideMenu)).call(this, props));

    _this.state = {
      selectedGroup: {}
    };
    return _this;
  }

  _createClass(SideMenu, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          _props$active = _props.active,
          active = _props$active === undefined ? 'dashboard' : _props$active,
          user = _props.user,
          _props$ingroup = _props.ingroup,
          ingroup = _props$ingroup === undefined ? false : _props$ingroup,
          onLogout = _props.onLogout,
          onLoginUser = _props.onLoginUser;


      if (sessionStorage.getItem('user') !== null && location.hash !== '#/register') {
        if (user.token === undefined) {
          onLoginUser(sessionStorage.getItem('user'));
        }
      }

      var id = location.href.split('/')[location.href.split('/').length - 1];
      (0, _api2.default)(null, '/api/groups/' + id, 'GET').then(function (result) {
        _this2.setState({ selectedGroup: result });
      });

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
    }
  }]);

  return SideMenu;
}(_react2.default.Component);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9zaWRlbWVudS5qcz8wNTc2Il0sIm5hbWVzIjpbImxvZ291dCIsImNvbXBsZXRlTG9nb3V0Iiwic2Vzc2lvblN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwiU2lkZU1lbnUiLCJwcm9wcyIsInN0YXRlIiwic2VsZWN0ZWRHcm91cCIsImFjdGl2ZSIsInVzZXIiLCJpbmdyb3VwIiwib25Mb2dvdXQiLCJvbkxvZ2luVXNlciIsImdldEl0ZW0iLCJsb2NhdGlvbiIsImhhc2giLCJ0b2tlbiIsInVuZGVmaW5lZCIsImlkIiwiaHJlZiIsInNwbGl0IiwibGVuZ3RoIiwidGhlbiIsInJlc3VsdCIsInNldFN0YXRlIiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwidXNlckRhdGEiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxTQUFUQSxNQUFTLENBQUNDLGNBQUQsRUFBb0I7QUFDakNDLGlCQUFlQyxVQUFmLENBQTBCLE1BQTFCO0FBQ0FGO0FBQ0QsQ0FIRDs7SUFLTUcsUTs7O0FBQ0osb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxvSEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLHFCQUFlO0FBREosS0FBYjtBQUZpQjtBQUtsQjs7Ozs2QkFDUTtBQUFBOztBQUFBLG1CQUN3RSxLQUFLRixLQUQ3RTtBQUFBLGlDQUNDRyxNQUREO0FBQUEsVUFDQ0EsTUFERCxpQ0FDVSxXQURWO0FBQUEsVUFDdUJDLElBRHZCLFVBQ3VCQSxJQUR2QjtBQUFBLGtDQUM2QkMsT0FEN0I7QUFBQSxVQUM2QkEsT0FEN0Isa0NBQ3VDLEtBRHZDO0FBQUEsVUFDOENDLFFBRDlDLFVBQzhDQSxRQUQ5QztBQUFBLFVBQ3dEQyxXQUR4RCxVQUN3REEsV0FEeEQ7OztBQUdULFVBQUlWLGVBQWVXLE9BQWYsQ0FBdUIsTUFBdkIsTUFBbUMsSUFBbkMsSUFBMkNDLFNBQVNDLElBQVQsS0FBa0IsWUFBakUsRUFBK0U7QUFDN0UsWUFBSU4sS0FBS08sS0FBTCxLQUFlQyxTQUFuQixFQUE4QjtBQUM1Qkwsc0JBQVlWLGVBQWVXLE9BQWYsQ0FBdUIsTUFBdkIsQ0FBWjtBQUNEO0FBQ0Y7O0FBRUQsVUFBTUssS0FBS0osU0FBU0ssSUFBVCxDQUFjQyxLQUFkLENBQW9CLEdBQXBCLEVBQXlCTixTQUFTSyxJQUFULENBQWNDLEtBQWQsQ0FBb0IsR0FBcEIsRUFBeUJDLE1BQXpCLEdBQWtDLENBQTNELENBQVg7QUFDQSx5QkFBSSxJQUFKLG1CQUF5QkgsRUFBekIsRUFBK0IsS0FBL0IsRUFDR0ksSUFESCxDQUNRLFVBQUNDLE1BQUQsRUFBWTtBQUNoQixlQUFLQyxRQUFMLENBQWMsRUFBRWpCLGVBQWVnQixNQUFqQixFQUFkO0FBQ0QsT0FISDs7QUFLQSxhQUNFO0FBQUE7QUFBQSxVQUFPLFdBQVUsMEJBQWpCO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGdCQUFHLE1BQUssWUFBUixFQUFxQixXQUFZZixXQUFXLFdBQVgsR0FBeUIsUUFBekIsR0FBb0MsRUFBckU7QUFBQTtBQUFBO0FBREYsV0FERjtBQUlFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxnQkFBRyxNQUFLLFlBQVIsRUFBcUIsV0FBWUEsV0FBVyxjQUFYLEdBQTRCLFFBQTVCLEdBQXVDLEVBQXhFO0FBQ0EsK0JBQVksT0FEWixFQUNvQixlQUFZLG1CQURoQztBQUFBO0FBQUE7QUFERixXQUpGO0FBUUlFLG9CQUNGO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxnQkFBRyxtQkFBaUJILGNBQWNXLEVBQS9CLFlBQUgsRUFBK0MsV0FBWVYsV0FBVyxRQUFYLEdBQXNCLFFBQXRCLEdBQWlDLEVBQTVGO0FBQUE7QUFBQTtBQURGLFdBREUsR0FJTSxFQVpWO0FBYUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGdCQUFHLE1BQUssR0FBUixFQUFZLFNBQVU7QUFBQSx5QkFBTVIsT0FBT1csUUFBUCxDQUFOO0FBQUEsaUJBQXRCO0FBQUE7QUFBQTtBQURGO0FBYkY7QUFERixPQURGO0FBb0JDOzs7O0VBMUNvQixnQkFBTWMsUzs7QUE4QzdCLElBQU1DLGtCQUFrQixTQUFsQkEsZUFBa0IsQ0FBQ3BCLEtBQUQsRUFBVztBQUNqQyxTQUFPO0FBQ0xHLFVBQU1ILE1BQU1xQjtBQURQLEdBQVA7QUFHRCxDQUpEOztBQU1BLElBQU1DLHFCQUFxQixTQUFyQkEsa0JBQXFCLENBQUNDLFFBQUQsRUFBYztBQUN2QyxTQUFPO0FBQ0xsQixjQUFVO0FBQUEsYUFBTWtCLFNBQVMsMkJBQVQsQ0FBTjtBQUFBLEtBREw7QUFFTGpCLGlCQUFhO0FBQUEsYUFBUWlCLFNBQVMseUJBQVVwQixJQUFWLENBQVQsQ0FBUjtBQUFBO0FBRlIsR0FBUDtBQUlELENBTEQ7a0JBTWUseUJBQVFpQixlQUFSLEVBQXlCRSxrQkFBekIsRUFBNkN4QixRQUE3QyxDIiwiZmlsZSI6IjAuMTQ3MmI4NzVmNzk5ZGQyNDAxMzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IGxvZ291dFVzZXIgZnJvbSAnLi4vLi4vYWN0aW9ucy9sb2dvdXRVc2VyJztcbmltcG9ydCBsb2dpblVzZXIgZnJvbSAnLi4vLi4vYWN0aW9ucy9sb2dpblVzZXInO1xuaW1wb3J0IGFwaSBmcm9tICcuLi9oZWxwZXJzL2FwaSc7XG5cbmNvbnN0IGxvZ291dCA9IChjb21wbGV0ZUxvZ291dCkgPT4ge1xuICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyJyk7XG4gIGNvbXBsZXRlTG9nb3V0KCk7XG59O1xuXG5jbGFzcyBTaWRlTWVudSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzZWxlY3RlZEdyb3VwOiB7fVxuICAgIH07XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgYWN0aXZlID0gJ2Rhc2hib2FyZCcsIHVzZXIsIGluZ3JvdXAgPSBmYWxzZSwgb25Mb2dvdXQsIG9uTG9naW5Vc2VyIH0gPSB0aGlzLnByb3BzO1xuXG4gIGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykgIT09IG51bGwgJiYgbG9jYXRpb24uaGFzaCAhPT0gJyMvcmVnaXN0ZXInKSB7XG4gICAgaWYgKHVzZXIudG9rZW4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgb25Mb2dpblVzZXIoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBpZCA9IGxvY2F0aW9uLmhyZWYuc3BsaXQoJy8nKVtsb2NhdGlvbi5ocmVmLnNwbGl0KCcvJykubGVuZ3RoIC0gMV07XG4gIGFwaShudWxsLCBgL2FwaS9ncm91cHMvJHtpZH1gLCAnR0VUJylcbiAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRHcm91cDogcmVzdWx0IH0pO1xuICAgIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPGFzaWRlIGNsYXNzTmFtZT1cImxlZnQgZGFzaGJvYXJkLW1lbnUgcHItM1wiPlxuICAgICAgPHVsPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGEgaHJlZj1cIiNkYXNoYm9hcmRcIiBjbGFzc05hbWU9eyBhY3RpdmUgPT09ICdkYXNoYm9hcmQnID8gJ2FjdGl2ZScgOiAnJ30+TXkgR3JvdXBzPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGEgaHJlZj1cIiNuZXctZ3JvdXBcIiBjbGFzc05hbWU9eyBhY3RpdmUgPT09ICdjcmVhdGUtZ3JvdXAnID8gJ2FjdGl2ZScgOiAnJ31cbiAgICAgICAgICBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS10YXJnZXQ9XCIjY3JlYXRlR3JvdXBNb2RhbFwiPkNyZWF0ZSBHcm91cDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgeyBpbmdyb3VwID9cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhIGhyZWY9e2AjL2dyb3VwLyR7c2VsZWN0ZWRHcm91cC5pZH0vc2VhcmNoYH0gY2xhc3NOYW1lPXsgYWN0aXZlID09PSAnc2VhcmNoJyA/ICdhY3RpdmUnIDogJyd9PlxuICAgICAgICAgIFVwZGF0ZSBNZW1iZXJzPC9hPlxuICAgICAgICA8L2xpPiA6ICcnfVxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsgKCkgPT4gbG9nb3V0KG9uTG9nb3V0KSB9PkxvZ291dDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG48L2FzaWRlPik7XG4gIH1cbn1cblxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB1c2VyOiBzdGF0ZS51c2VyRGF0YVxuICB9O1xufTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgb25Mb2dvdXQ6ICgpID0+IGRpc3BhdGNoKGxvZ291dFVzZXIoKSksXG4gICAgb25Mb2dpblVzZXI6IHVzZXIgPT4gZGlzcGF0Y2gobG9naW5Vc2VyKHVzZXIpKVxuICB9O1xufTtcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFNpZGVNZW51KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9qcy9jb21wb25lbnRzL3ByZXNlbnRhdGlvbmFsL3NpZGVtZW51LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==