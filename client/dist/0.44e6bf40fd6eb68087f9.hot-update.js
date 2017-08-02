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

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(19);

var _logoutUser = __webpack_require__(125);

var _logoutUser2 = _interopRequireDefault(_logoutUser);

var _loginUser = __webpack_require__(44);

var _loginUser2 = _interopRequireDefault(_loginUser);

var _api = __webpack_require__(16);

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
      if (_typeof(NaN(id))) (0, _api2.default)(null, '/api/groups/' + id, 'GET').then(function (result) {
        _this2.setState({ selectedGroup: result });
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvYWN0aW9ucy9sb2dvdXRVc2VyLmpzP2RkNDYiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2pzL2NvbXBvbmVudHMvcHJlc2VudGF0aW9uYWwvc2lkZW1lbnUuanM/MDU3NiJdLCJuYW1lcyI6WyJsb2dvdXRVc2VyIiwidXNlciIsInR5cGUiLCJsb2dvdXQiLCJjb21wbGV0ZUxvZ291dCIsInNlc3Npb25TdG9yYWdlIiwicmVtb3ZlSXRlbSIsIlNpZGVNZW51IiwicHJvcHMiLCJzdGF0ZSIsInNlbGVjdGVkR3JvdXAiLCJpZCIsImxvY2F0aW9uIiwiaHJlZiIsInNwbGl0IiwibGVuZ3RoIiwiTmFOIiwidGhlbiIsInJlc3VsdCIsInNldFN0YXRlIiwiYWN0aXZlIiwiaW5ncm91cCIsIm9uTG9nb3V0Iiwib25Mb2dpblVzZXIiLCJnZXRJdGVtIiwiaGFzaCIsInRva2VuIiwidW5kZWZpbmVkIiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwidXNlckRhdGEiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxhQUFhLFNBQWJBLFVBQWEsQ0FBQ0MsSUFBRCxFQUFVO0FBQzNCLFNBQU87QUFDTEMsVUFBTSxhQUREO0FBRUxEO0FBRkssR0FBUDtBQUlELENBTEQ7O2tCQU9lRCxVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQZjs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUcsU0FBUyxTQUFUQSxNQUFTLENBQUNDLGNBQUQsRUFBb0I7QUFDakNDLGlCQUFlQyxVQUFmLENBQTBCLE1BQTFCO0FBQ0FGO0FBQ0QsQ0FIRDs7SUFLTUcsUTs7O0FBQ0osb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxvSEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLHFCQUFlO0FBREosS0FBYjtBQUZpQjtBQUtsQjs7Ozt5Q0FFb0I7QUFBQTs7QUFDbkIsVUFBTUMsS0FBS0MsU0FBU0MsSUFBVCxDQUFjQyxLQUFkLENBQW9CLEdBQXBCLEVBQXlCRixTQUFTQyxJQUFULENBQWNDLEtBQWQsQ0FBb0IsR0FBcEIsRUFBeUJDLE1BQXpCLEdBQWtDLENBQTNELENBQVg7QUFDQSxrQkFBV0MsSUFBSUwsRUFBSixDQUFYLEdBQ0EsbUJBQUksSUFBSixtQkFBeUJBLEVBQXpCLEVBQStCLEtBQS9CLEVBQ0dNLElBREgsQ0FDUSxVQUFDQyxNQUFELEVBQVk7QUFDaEIsZUFBS0MsUUFBTCxDQUFjLEVBQUVULGVBQWVRLE1BQWpCLEVBQWQ7QUFDRCxPQUhIO0FBSUQ7Ozs2QkFFUTtBQUFBLG1CQUN3RSxLQUFLVixLQUQ3RTtBQUFBLGlDQUNDWSxNQUREO0FBQUEsVUFDQ0EsTUFERCxpQ0FDVSxXQURWO0FBQUEsVUFDdUJuQixJQUR2QixVQUN1QkEsSUFEdkI7QUFBQSxrQ0FDNkJvQixPQUQ3QjtBQUFBLFVBQzZCQSxPQUQ3QixrQ0FDdUMsS0FEdkM7QUFBQSxVQUM4Q0MsUUFEOUMsVUFDOENBLFFBRDlDO0FBQUEsVUFDd0RDLFdBRHhELFVBQ3dEQSxXQUR4RDs7O0FBR1AsVUFBSWxCLGVBQWVtQixPQUFmLENBQXVCLE1BQXZCLE1BQW1DLElBQW5DLElBQTJDWixTQUFTYSxJQUFULEtBQWtCLFlBQWpFLEVBQStFO0FBQzdFLFlBQUl4QixLQUFLeUIsS0FBTCxLQUFlQyxTQUFuQixFQUE4QjtBQUM1Qkosc0JBQVlsQixlQUFlbUIsT0FBZixDQUF1QixNQUF2QixDQUFaO0FBQ0Q7QUFDRjs7QUFFRCxhQUNFO0FBQUE7QUFBQSxVQUFPLFdBQVUsMEJBQWpCO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGdCQUFHLE1BQUssWUFBUixFQUFxQixXQUFZSixXQUFXLFdBQVgsR0FBeUIsUUFBekIsR0FBb0MsRUFBckU7QUFBQTtBQUFBO0FBREYsV0FERjtBQUlFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxnQkFBRyxNQUFLLFlBQVIsRUFBcUIsV0FBWUEsV0FBVyxjQUFYLEdBQTRCLFFBQTVCLEdBQXVDLEVBQXhFO0FBQ0EsK0JBQVksT0FEWixFQUNvQixlQUFZLG1CQURoQztBQUFBO0FBQUE7QUFERixXQUpGO0FBUUlDLG9CQUNGO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxnQkFBRyxtQkFBaUIsS0FBS1osS0FBTCxDQUFXQyxhQUFYLENBQXlCQyxFQUExQyxZQUFILEVBQTBELFdBQVlTLFdBQVcsUUFBWCxHQUFzQixRQUF0QixHQUFpQyxFQUF2RztBQUFBO0FBQUE7QUFERixXQURFLEdBSU0sRUFaVjtBQWFFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxnQkFBRyxNQUFLLEdBQVIsRUFBWSxTQUFVO0FBQUEseUJBQU1qQixPQUFPbUIsUUFBUCxDQUFOO0FBQUEsaUJBQXRCO0FBQUE7QUFBQTtBQURGO0FBYkY7QUFERixPQURGO0FBcUJEOzs7O0VBL0NvQixnQkFBTU0sUzs7QUFtRDdCLElBQU1DLGtCQUFrQixTQUFsQkEsZUFBa0IsQ0FBQ3BCLEtBQUQsRUFBVztBQUNqQyxTQUFPO0FBQ0xSLFVBQU1RLE1BQU1xQjtBQURQLEdBQVA7QUFHRCxDQUpEOztBQU1BLElBQU1DLHFCQUFxQixTQUFyQkEsa0JBQXFCLENBQUNDLFFBQUQsRUFBYztBQUN2QyxTQUFPO0FBQ0xWLGNBQVU7QUFBQSxhQUFNVSxTQUFTLDJCQUFULENBQU47QUFBQSxLQURMO0FBRUxULGlCQUFhO0FBQUEsYUFBUVMsU0FBUyx5QkFBVS9CLElBQVYsQ0FBVCxDQUFSO0FBQUE7QUFGUixHQUFQO0FBSUQsQ0FMRDtrQkFNZSx5QkFBUTRCLGVBQVIsRUFBeUJFLGtCQUF6QixFQUE2Q3hCLFFBQTdDLEMiLCJmaWxlIjoiMC40NGU2YmY0MGZkNmViNjgwODdmOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbG9nb3V0VXNlciA9ICh1c2VyKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0xPR09VVF9VU0VSJyxcbiAgICB1c2VyXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2dvdXRVc2VyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2pzL2FjdGlvbnMvbG9nb3V0VXNlci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IGxvZ291dFVzZXIgZnJvbSAnLi4vLi4vYWN0aW9ucy9sb2dvdXRVc2VyJztcbmltcG9ydCBsb2dpblVzZXIgZnJvbSAnLi4vLi4vYWN0aW9ucy9sb2dpblVzZXInO1xuaW1wb3J0IGFwaSBmcm9tICcuLi9oZWxwZXJzL2FwaSc7XG5cbmNvbnN0IGxvZ291dCA9IChjb21wbGV0ZUxvZ291dCkgPT4ge1xuICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyJyk7XG4gIGNvbXBsZXRlTG9nb3V0KCk7XG59O1xuXG5jbGFzcyBTaWRlTWVudSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzZWxlY3RlZEdyb3VwOiB7fVxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgY29uc3QgaWQgPSBsb2NhdGlvbi5ocmVmLnNwbGl0KCcvJylbbG9jYXRpb24uaHJlZi5zcGxpdCgnLycpLmxlbmd0aCAtIDFdO1xuICAgIGlmICh0eXBlb2YgTmFOKGlkKSlcbiAgICBhcGkobnVsbCwgYC9hcGkvZ3JvdXBzLyR7aWR9YCwgJ0dFVCcpXG4gICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZEdyb3VwOiByZXN1bHQgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGFjdGl2ZSA9ICdkYXNoYm9hcmQnLCB1c2VyLCBpbmdyb3VwID0gZmFsc2UsIG9uTG9nb3V0LCBvbkxvZ2luVXNlciB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykgIT09IG51bGwgJiYgbG9jYXRpb24uaGFzaCAhPT0gJyMvcmVnaXN0ZXInKSB7XG4gICAgICBpZiAodXNlci50b2tlbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG9uTG9naW5Vc2VyKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxhc2lkZSBjbGFzc05hbWU9XCJsZWZ0IGRhc2hib2FyZC1tZW51IHByLTNcIj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjZGFzaGJvYXJkXCIgY2xhc3NOYW1lPXsgYWN0aXZlID09PSAnZGFzaGJvYXJkJyA/ICdhY3RpdmUnIDogJyd9Pk15IEdyb3VwczwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjbmV3LWdyb3VwXCIgY2xhc3NOYW1lPXsgYWN0aXZlID09PSAnY3JlYXRlLWdyb3VwJyA/ICdhY3RpdmUnIDogJyd9XG4gICAgICAgICAgICBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS10YXJnZXQ9XCIjY3JlYXRlR3JvdXBNb2RhbFwiPkNyZWF0ZSBHcm91cDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIHsgaW5ncm91cCA/XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGEgaHJlZj17YCMvZ3JvdXAvJHt0aGlzLnN0YXRlLnNlbGVjdGVkR3JvdXAuaWR9L3NlYXJjaGB9IGNsYXNzTmFtZT17IGFjdGl2ZSA9PT0gJ3NlYXJjaCcgPyAnYWN0aXZlJyA6ICcnfT5cbiAgICAgICAgICAgIFVwZGF0ZSBNZW1iZXJzPC9hPlxuICAgICAgICAgIDwvbGk+IDogJyd9XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsgKCkgPT4gbG9nb3V0KG9uTG9nb3V0KSB9PkxvZ291dDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9hc2lkZT5cbiAgICApO1xuICB9XG59XG5cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdXNlcjogc3RhdGUudXNlckRhdGFcbiAgfTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICByZXR1cm4ge1xuICAgIG9uTG9nb3V0OiAoKSA9PiBkaXNwYXRjaChsb2dvdXRVc2VyKCkpLFxuICAgIG9uTG9naW5Vc2VyOiB1c2VyID0+IGRpc3BhdGNoKGxvZ2luVXNlcih1c2VyKSlcbiAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShTaWRlTWVudSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9zaWRlbWVudS5qcyJdLCJzb3VyY2VSb290IjoiIn0=