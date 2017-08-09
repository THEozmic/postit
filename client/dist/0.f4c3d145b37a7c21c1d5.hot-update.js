webpackHotUpdate(0,{

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(19);

var _logoutUser = __webpack_require__(125);

var _logoutUser2 = _interopRequireDefault(_logoutUser);

var _loginUser = __webpack_require__(44);

var _loginUser2 = _interopRequireDefault(_loginUser);

var _api = __webpack_require__(13);

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
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      var id = location.href.split('/')[location.href.split('/').length - 1];
      if (!isNaN(id)) {
        (0, _api2.default)(null, '/api/groups/' + id, 'GET').then(function (result) {
          _this2.setState({ selectedGroup: result });
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9zaWRlbWVudS5qcz8wNTc2Il0sIm5hbWVzIjpbImxvZ291dCIsImNvbXBsZXRlTG9nb3V0Iiwic2Vzc2lvblN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwiU2lkZU1lbnUiLCJwcm9wcyIsInN0YXRlIiwic2VsZWN0ZWRHcm91cCIsImlkIiwibG9jYXRpb24iLCJocmVmIiwic3BsaXQiLCJsZW5ndGgiLCJpc05hTiIsInRoZW4iLCJyZXN1bHQiLCJzZXRTdGF0ZSIsImFjdGl2ZSIsInVzZXIiLCJpbmdyb3VwIiwib25Mb2dvdXQiLCJvbkxvZ2luVXNlciIsImdldEl0ZW0iLCJoYXNoIiwidG9rZW4iLCJ1bmRlZmluZWQiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJ1c2VyRGF0YSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTLFNBQVRBLE1BQVMsQ0FBQ0MsY0FBRCxFQUFvQjtBQUNqQ0MsaUJBQWVDLFVBQWYsQ0FBMEIsTUFBMUI7QUFDQUY7QUFDRCxDQUhEOztJQUtNRyxROzs7QUFDSixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLG9IQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMscUJBQWU7QUFESixLQUFiO0FBRmlCO0FBS2xCOzs7O3lDQUVvQjtBQUFBOztBQUNuQixVQUFNQyxLQUFLQyxTQUFTQyxJQUFULENBQWNDLEtBQWQsQ0FBb0IsR0FBcEIsRUFBeUJGLFNBQVNDLElBQVQsQ0FBY0MsS0FBZCxDQUFvQixHQUFwQixFQUF5QkMsTUFBekIsR0FBa0MsQ0FBM0QsQ0FBWDtBQUNBLFVBQUksQ0FBQ0MsTUFBTUwsRUFBTixDQUFMLEVBQWdCO0FBQ2QsMkJBQUksSUFBSixtQkFBeUJBLEVBQXpCLEVBQStCLEtBQS9CLEVBQ0NNLElBREQsQ0FDTSxVQUFDQyxNQUFELEVBQVk7QUFDaEIsaUJBQUtDLFFBQUwsQ0FBYyxFQUFFVCxlQUFlUSxNQUFqQixFQUFkO0FBQ0QsU0FIRDtBQUlEO0FBQ0Y7Ozs2QkFFUTtBQUFBLG1CQUN3RSxLQUFLVixLQUQ3RTtBQUFBLGlDQUNDWSxNQUREO0FBQUEsVUFDQ0EsTUFERCxpQ0FDVSxXQURWO0FBQUEsVUFDdUJDLElBRHZCLFVBQ3VCQSxJQUR2QjtBQUFBLGtDQUM2QkMsT0FEN0I7QUFBQSxVQUM2QkEsT0FEN0Isa0NBQ3VDLEtBRHZDO0FBQUEsVUFDOENDLFFBRDlDLFVBQzhDQSxRQUQ5QztBQUFBLFVBQ3dEQyxXQUR4RCxVQUN3REEsV0FEeEQ7OztBQUdQLFVBQUluQixlQUFlb0IsT0FBZixDQUF1QixNQUF2QixNQUFtQyxJQUFuQyxJQUEyQ2IsU0FBU2MsSUFBVCxLQUFrQixZQUFqRSxFQUErRTtBQUM3RSxZQUFJTCxLQUFLTSxLQUFMLEtBQWVDLFNBQW5CLEVBQThCO0FBQzVCSixzQkFBWW5CLGVBQWVvQixPQUFmLENBQXVCLE1BQXZCLENBQVo7QUFDRDtBQUNGLE9BSkQsTUFJTztBQUNMYixpQkFBU2MsSUFBVCxHQUFnQixRQUFoQjtBQUNBLGVBQU8sSUFBUDtBQUNEOztBQUVELGFBQ0U7QUFBQTtBQUFBLFVBQU8sV0FBVSwwQkFBakI7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsZ0JBQUcsTUFBSyxZQUFSLEVBQXFCLFdBQVlOLFdBQVcsV0FBWCxHQUF5QixRQUF6QixHQUFvQyxFQUFyRTtBQUFBO0FBQUE7QUFERixXQURGO0FBSUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGdCQUFHLE1BQUssWUFBUixFQUFxQixXQUFZQSxXQUFXLGNBQVgsR0FBNEIsUUFBNUIsR0FBdUMsRUFBeEU7QUFDQSwrQkFBWSxPQURaLEVBQ29CLGVBQVksbUJBRGhDO0FBQUE7QUFBQTtBQURGLFdBSkY7QUFRSUUsb0JBQ0Y7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGdCQUFHLG1CQUFpQixLQUFLYixLQUFMLENBQVdDLGFBQVgsQ0FBeUJDLEVBQTFDLFlBQUgsRUFBMEQsV0FBWVMsV0FBVyxRQUFYLEdBQXNCLFFBQXRCLEdBQWlDLEVBQXZHO0FBQUE7QUFBQTtBQURGLFdBREUsR0FJTSxFQVpWO0FBYUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGdCQUFHLE1BQUssR0FBUixFQUFZLFNBQVU7QUFBQSx5QkFBTWpCLE9BQU9vQixRQUFQLENBQU47QUFBQSxpQkFBdEI7QUFBQTtBQUFBO0FBREY7QUFiRjtBQURGLE9BREY7QUFxQkQ7Ozs7RUFuRG9CLGdCQUFNTSxTOztBQXVEN0IsSUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDckIsS0FBRCxFQUFXO0FBQ2pDLFNBQU87QUFDTFksVUFBTVosTUFBTXNCO0FBRFAsR0FBUDtBQUdELENBSkQ7O0FBTUEsSUFBTUMscUJBQXFCLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRCxFQUFjO0FBQ3ZDLFNBQU87QUFDTFYsY0FBVTtBQUFBLGFBQU1VLFNBQVMsMkJBQVQsQ0FBTjtBQUFBLEtBREw7QUFFTFQsaUJBQWE7QUFBQSxhQUFRUyxTQUFTLHlCQUFVWixJQUFWLENBQVQsQ0FBUjtBQUFBO0FBRlIsR0FBUDtBQUlELENBTEQ7a0JBTWUseUJBQVFTLGVBQVIsRUFBeUJFLGtCQUF6QixFQUE2Q3pCLFFBQTdDLEMiLCJmaWxlIjoiMC5mNGMzZDE0NWIzN2E3YzIxYzFkNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgbG9nb3V0VXNlciBmcm9tICcuLi8uLi9hY3Rpb25zL2xvZ291dFVzZXInO1xuaW1wb3J0IGxvZ2luVXNlciBmcm9tICcuLi8uLi9hY3Rpb25zL2xvZ2luVXNlcic7XG5pbXBvcnQgYXBpIGZyb20gJy4uL2hlbHBlcnMvYXBpJztcblxuY29uc3QgbG9nb3V0ID0gKGNvbXBsZXRlTG9nb3V0KSA9PiB7XG4gIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXInKTtcbiAgY29tcGxldGVMb2dvdXQoKTtcbn07XG5cbmNsYXNzIFNpZGVNZW51IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNlbGVjdGVkR3JvdXA6IHt9XG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBjb25zdCBpZCA9IGxvY2F0aW9uLmhyZWYuc3BsaXQoJy8nKVtsb2NhdGlvbi5ocmVmLnNwbGl0KCcvJykubGVuZ3RoIC0gMV07XG4gICAgaWYgKCFpc05hTihpZCkpIHtcbiAgICAgIGFwaShudWxsLCBgL2FwaS9ncm91cHMvJHtpZH1gLCAnR0VUJylcbiAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkR3JvdXA6IHJlc3VsdCB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGFjdGl2ZSA9ICdkYXNoYm9hcmQnLCB1c2VyLCBpbmdyb3VwID0gZmFsc2UsIG9uTG9nb3V0LCBvbkxvZ2luVXNlciB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykgIT09IG51bGwgJiYgbG9jYXRpb24uaGFzaCAhPT0gJyMvcmVnaXN0ZXInKSB7XG4gICAgICBpZiAodXNlci50b2tlbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG9uTG9naW5Vc2VyKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvY2F0aW9uLmhhc2ggPSAnI2xvZ2luJztcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8YXNpZGUgY2xhc3NOYW1lPVwibGVmdCBkYXNoYm9hcmQtbWVudSBwci0zXCI+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8YSBocmVmPVwiI2Rhc2hib2FyZFwiIGNsYXNzTmFtZT17IGFjdGl2ZSA9PT0gJ2Rhc2hib2FyZCcgPyAnYWN0aXZlJyA6ICcnfT5NeSBHcm91cHM8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8YSBocmVmPVwiI25ldy1ncm91cFwiIGNsYXNzTmFtZT17IGFjdGl2ZSA9PT0gJ2NyZWF0ZS1ncm91cCcgPyAnYWN0aXZlJyA6ICcnfVxuICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI2NyZWF0ZUdyb3VwTW9kYWxcIj5DcmVhdGUgR3JvdXA8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICB7IGluZ3JvdXAgP1xuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxhIGhyZWY9e2AjL2dyb3VwLyR7dGhpcy5zdGF0ZS5zZWxlY3RlZEdyb3VwLmlkfS9zZWFyY2hgfSBjbGFzc05hbWU9eyBhY3RpdmUgPT09ICdzZWFyY2gnID8gJ2FjdGl2ZScgOiAnJ30+XG4gICAgICAgICAgICBVcGRhdGUgTWVtYmVyczwvYT5cbiAgICAgICAgICA8L2xpPiA6ICcnfVxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17ICgpID0+IGxvZ291dChvbkxvZ291dCkgfT5Mb2dvdXQ8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvYXNpZGU+XG4gICAgKTtcbiAgfVxufVxuXG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHVzZXI6IHN0YXRlLnVzZXJEYXRhXG4gIH07XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBvbkxvZ291dDogKCkgPT4gZGlzcGF0Y2gobG9nb3V0VXNlcigpKSxcbiAgICBvbkxvZ2luVXNlcjogdXNlciA9PiBkaXNwYXRjaChsb2dpblVzZXIodXNlcikpXG4gIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoU2lkZU1lbnUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2pzL2NvbXBvbmVudHMvcHJlc2VudGF0aW9uYWwvc2lkZW1lbnUuanMiXSwic291cmNlUm9vdCI6IiJ9