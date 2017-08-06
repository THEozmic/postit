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
              { href: '#/group/' + this.state.selectedGroup.id + '/search', className: active === 'search' ? 'active' : '' },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9zaWRlbWVudS5qcz8wNTc2Il0sIm5hbWVzIjpbImxvZ291dCIsImNvbXBsZXRlTG9nb3V0Iiwic2Vzc2lvblN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwiU2lkZU1lbnUiLCJwcm9wcyIsInN0YXRlIiwic2VsZWN0ZWRHcm91cCIsImFjdGl2ZSIsInVzZXIiLCJpbmdyb3VwIiwib25Mb2dvdXQiLCJvbkxvZ2luVXNlciIsImdldEl0ZW0iLCJsb2NhdGlvbiIsImhhc2giLCJ0b2tlbiIsInVuZGVmaW5lZCIsImlkIiwiaHJlZiIsInNwbGl0IiwibGVuZ3RoIiwidGhlbiIsInJlc3VsdCIsInNldFN0YXRlIiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwidXNlckRhdGEiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxTQUFUQSxNQUFTLENBQUNDLGNBQUQsRUFBb0I7QUFDakNDLGlCQUFlQyxVQUFmLENBQTBCLE1BQTFCO0FBQ0FGO0FBQ0QsQ0FIRDs7SUFLTUcsUTs7O0FBQ0osb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxvSEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLHFCQUFlO0FBREosS0FBYjtBQUZpQjtBQUtsQjs7Ozs2QkFDUTtBQUFBOztBQUFBLG1CQUN3RSxLQUFLRixLQUQ3RTtBQUFBLGlDQUNDRyxNQUREO0FBQUEsVUFDQ0EsTUFERCxpQ0FDVSxXQURWO0FBQUEsVUFDdUJDLElBRHZCLFVBQ3VCQSxJQUR2QjtBQUFBLGtDQUM2QkMsT0FEN0I7QUFBQSxVQUM2QkEsT0FEN0Isa0NBQ3VDLEtBRHZDO0FBQUEsVUFDOENDLFFBRDlDLFVBQzhDQSxRQUQ5QztBQUFBLFVBQ3dEQyxXQUR4RCxVQUN3REEsV0FEeEQ7OztBQUdULFVBQUlWLGVBQWVXLE9BQWYsQ0FBdUIsTUFBdkIsTUFBbUMsSUFBbkMsSUFBMkNDLFNBQVNDLElBQVQsS0FBa0IsWUFBakUsRUFBK0U7QUFDN0UsWUFBSU4sS0FBS08sS0FBTCxLQUFlQyxTQUFuQixFQUE4QjtBQUM1Qkwsc0JBQVlWLGVBQWVXLE9BQWYsQ0FBdUIsTUFBdkIsQ0FBWjtBQUNEO0FBQ0Y7O0FBRUQsVUFBTUssS0FBS0osU0FBU0ssSUFBVCxDQUFjQyxLQUFkLENBQW9CLEdBQXBCLEVBQXlCTixTQUFTSyxJQUFULENBQWNDLEtBQWQsQ0FBb0IsR0FBcEIsRUFBeUJDLE1BQXpCLEdBQWtDLENBQTNELENBQVg7QUFDQSx5QkFBSSxJQUFKLG1CQUF5QkgsRUFBekIsRUFBK0IsS0FBL0IsRUFDR0ksSUFESCxDQUNRLFVBQUNDLE1BQUQsRUFBWTtBQUNoQixlQUFLQyxRQUFMLENBQWMsRUFBRWpCLGVBQWVnQixNQUFqQixFQUFkO0FBQ0QsT0FISDs7QUFLQSxhQUNFO0FBQUE7QUFBQSxVQUFPLFdBQVUsMEJBQWpCO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGdCQUFHLE1BQUssWUFBUixFQUFxQixXQUFZZixXQUFXLFdBQVgsR0FBeUIsUUFBekIsR0FBb0MsRUFBckU7QUFBQTtBQUFBO0FBREYsV0FERjtBQUlFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxnQkFBRyxNQUFLLFlBQVIsRUFBcUIsV0FBWUEsV0FBVyxjQUFYLEdBQTRCLFFBQTVCLEdBQXVDLEVBQXhFO0FBQ0EsK0JBQVksT0FEWixFQUNvQixlQUFZLG1CQURoQztBQUFBO0FBQUE7QUFERixXQUpGO0FBUUlFLG9CQUNGO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxnQkFBRyxtQkFBaUIsS0FBS0osS0FBTCxDQUFXQyxhQUFYLENBQXlCVyxFQUExQyxZQUFILEVBQTBELFdBQVlWLFdBQVcsUUFBWCxHQUFzQixRQUF0QixHQUFpQyxFQUF2RztBQUFBO0FBQUE7QUFERixXQURFLEdBSU0sRUFaVjtBQWFFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxnQkFBRyxNQUFLLEdBQVIsRUFBWSxTQUFVO0FBQUEseUJBQU1SLE9BQU9XLFFBQVAsQ0FBTjtBQUFBLGlCQUF0QjtBQUFBO0FBQUE7QUFERjtBQWJGO0FBREYsT0FERjtBQW9CQzs7OztFQTFDb0IsZ0JBQU1jLFM7O0FBOEM3QixJQUFNQyxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNwQixLQUFELEVBQVc7QUFDakMsU0FBTztBQUNMRyxVQUFNSCxNQUFNcUI7QUFEUCxHQUFQO0FBR0QsQ0FKRDs7QUFNQSxJQUFNQyxxQkFBcUIsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFELEVBQWM7QUFDdkMsU0FBTztBQUNMbEIsY0FBVTtBQUFBLGFBQU1rQixTQUFTLDJCQUFULENBQU47QUFBQSxLQURMO0FBRUxqQixpQkFBYTtBQUFBLGFBQVFpQixTQUFTLHlCQUFVcEIsSUFBVixDQUFULENBQVI7QUFBQTtBQUZSLEdBQVA7QUFJRCxDQUxEO2tCQU1lLHlCQUFRaUIsZUFBUixFQUF5QkUsa0JBQXpCLEVBQTZDeEIsUUFBN0MsQyIsImZpbGUiOiIwLjc0Mjc4YjA2YzJlYjA4Y2YyNTlkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBsb2dvdXRVc2VyIGZyb20gJy4uLy4uL2FjdGlvbnMvbG9nb3V0VXNlcic7XG5pbXBvcnQgbG9naW5Vc2VyIGZyb20gJy4uLy4uL2FjdGlvbnMvbG9naW5Vc2VyJztcbmltcG9ydCBhcGkgZnJvbSAnLi4vaGVscGVycy9hcGknO1xuXG5jb25zdCBsb2dvdXQgPSAoY29tcGxldGVMb2dvdXQpID0+IHtcbiAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcicpO1xuICBjb21wbGV0ZUxvZ291dCgpO1xufTtcblxuY2xhc3MgU2lkZU1lbnUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2VsZWN0ZWRHcm91cDoge31cbiAgICB9O1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGFjdGl2ZSA9ICdkYXNoYm9hcmQnLCB1c2VyLCBpbmdyb3VwID0gZmFsc2UsIG9uTG9nb3V0LCBvbkxvZ2luVXNlciB9ID0gdGhpcy5wcm9wcztcblxuICBpZiAoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpICE9PSBudWxsICYmIGxvY2F0aW9uLmhhc2ggIT09ICcjL3JlZ2lzdGVyJykge1xuICAgIGlmICh1c2VyLnRva2VuID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG9uTG9naW5Vc2VyKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgaWQgPSBsb2NhdGlvbi5ocmVmLnNwbGl0KCcvJylbbG9jYXRpb24uaHJlZi5zcGxpdCgnLycpLmxlbmd0aCAtIDFdO1xuICBhcGkobnVsbCwgYC9hcGkvZ3JvdXBzLyR7aWR9YCwgJ0dFVCcpXG4gICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkR3JvdXA6IHJlc3VsdCB9KTtcbiAgICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxhc2lkZSBjbGFzc05hbWU9XCJsZWZ0IGRhc2hib2FyZC1tZW51IHByLTNcIj5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhIGhyZWY9XCIjZGFzaGJvYXJkXCIgY2xhc3NOYW1lPXsgYWN0aXZlID09PSAnZGFzaGJvYXJkJyA/ICdhY3RpdmUnIDogJyd9Pk15IEdyb3VwczwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhIGhyZWY9XCIjbmV3LWdyb3VwXCIgY2xhc3NOYW1lPXsgYWN0aXZlID09PSAnY3JlYXRlLWdyb3VwJyA/ICdhY3RpdmUnIDogJyd9XG4gICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI2NyZWF0ZUdyb3VwTW9kYWxcIj5DcmVhdGUgR3JvdXA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIHsgaW5ncm91cCA/XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YSBocmVmPXtgIy9ncm91cC8ke3RoaXMuc3RhdGUuc2VsZWN0ZWRHcm91cC5pZH0vc2VhcmNoYH0gY2xhc3NOYW1lPXsgYWN0aXZlID09PSAnc2VhcmNoJyA/ICdhY3RpdmUnIDogJyd9PlxuICAgICAgICAgIFVwZGF0ZSBNZW1iZXJzPC9hPlxuICAgICAgICA8L2xpPiA6ICcnfVxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsgKCkgPT4gbG9nb3V0KG9uTG9nb3V0KSB9PkxvZ291dDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG48L2FzaWRlPik7XG4gIH1cbn1cblxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB1c2VyOiBzdGF0ZS51c2VyRGF0YVxuICB9O1xufTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgb25Mb2dvdXQ6ICgpID0+IGRpc3BhdGNoKGxvZ291dFVzZXIoKSksXG4gICAgb25Mb2dpblVzZXI6IHVzZXIgPT4gZGlzcGF0Y2gobG9naW5Vc2VyKHVzZXIpKVxuICB9O1xufTtcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFNpZGVNZW51KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9qcy9jb21wb25lbnRzL3ByZXNlbnRhdGlvbmFsL3NpZGVtZW51LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==