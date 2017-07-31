webpackHotUpdate(0,{

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(18);

var _form = __webpack_require__(26);

var _form2 = _interopRequireDefault(_form);

var _loginUser = __webpack_require__(73);

var _loginUser2 = _interopRequireDefault(_loginUser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_React$Component) {
  _inherits(Login, _React$Component);

  function Login(props) {
    _classCallCheck(this, Login);

    var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

    _this.onLoginUser = _this.onLoginUser.bind(_this);
    _this.onFocus = _this.onFocus.bind(_this);
    _this.state = {
      error_message: ''
    };
    return _this;
  }

  _createClass(Login, [{
    key: 'onFocus',
    value: function onFocus() {
      this.setState({ error_message: '' });
    }
  }, {
    key: 'onLoginUser',
    value: function onLoginUser(e) {
      e.preventDefault();
      var username = this.username,
          password = this.password;

      username = username.value.trim();
      password = password.value;
      var user = {
        username: username,
        password: password,
        email: 'dummy@email.com',
        phone: '090PHONNY'
      };
      if (username === '' || password === '') {
        this.setState({ error_message: 'Error: One or more fields are empty' });
        return;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _form2.default,
        { title: 'Login to your account' },
        _react2.default.createElement(
          'div',
          { className: 'input-field' },
          _react2.default.createElement('input', { onFocus: this.onFocus,
            type: 'text', id: 'username',
            ref: function ref(input) {
              _this2.username = input;
            } }),
          _react2.default.createElement(
            'label',
            { htmlFor: 'username' },
            'Username'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'input-field' },
          _react2.default.createElement('input', { onFocus: this.onFocus,
            type: 'password', id: 'password', ref: function ref(input) {
              _this2.password = input;
            } }),
          _react2.default.createElement(
            'label',
            { htmlFor: 'password' },
            'Password'
          )
        ),
        this.state.error_message === '' ? '' : _react2.default.createElement(
          'div',
          { className: 'red card', style: { padding: '5px 10px' } },
          this.state.error_message
        ),
        _react2.default.createElement(
          'button',
          {
            onClick: this.onLoginUser,
            className: 'waves-effect waves-light btn action-btn' },
          'Login'
        ),
        _react2.default.createElement(
          'a',
          { className: 'right waves-effect waves-teal btn-flat action-btn',
            href: '#register' },
          'Register'
        )
      );
    }
  }]);

  return Login;
}(_react2.default.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onLoginUser: function onLoginUser(user) {
      return dispatch((0, _loginUser2.default)(user));
    }
  };
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(Login);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9sb2dpbi5qcz85Mjc0Il0sIm5hbWVzIjpbIkxvZ2luIiwicHJvcHMiLCJvbkxvZ2luVXNlciIsImJpbmQiLCJvbkZvY3VzIiwic3RhdGUiLCJlcnJvcl9tZXNzYWdlIiwic2V0U3RhdGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwidmFsdWUiLCJ0cmltIiwidXNlciIsImVtYWlsIiwicGhvbmUiLCJpbnB1dCIsInBhZGRpbmciLCJDb21wb25lbnQiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxLOzs7QUFFSixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDhHQUNYQSxLQURXOztBQUVqQixVQUFLQyxXQUFMLEdBQW1CLE1BQUtBLFdBQUwsQ0FBaUJDLElBQWpCLE9BQW5CO0FBQ0EsVUFBS0MsT0FBTCxHQUFlLE1BQUtBLE9BQUwsQ0FBYUQsSUFBYixPQUFmO0FBQ0EsVUFBS0UsS0FBTCxHQUFhO0FBQ1hDLHFCQUFlO0FBREosS0FBYjtBQUppQjtBQU9sQjs7Ozs4QkFFUztBQUNSLFdBQUtDLFFBQUwsQ0FBYyxFQUFFRCxlQUFlLEVBQWpCLEVBQWQ7QUFDRDs7O2dDQUVXRSxDLEVBQUc7QUFDYkEsUUFBRUMsY0FBRjtBQURhLFVBRVBDLFFBRk8sR0FFZ0IsSUFGaEIsQ0FFUEEsUUFGTztBQUFBLFVBRUdDLFFBRkgsR0FFZ0IsSUFGaEIsQ0FFR0EsUUFGSDs7QUFHYkQsaUJBQVdBLFNBQVNFLEtBQVQsQ0FBZUMsSUFBZixFQUFYO0FBQ0FGLGlCQUFXQSxTQUFTQyxLQUFwQjtBQUNBLFVBQU1FLE9BQU87QUFDWEosMEJBRFc7QUFFWEMsMEJBRlc7QUFHWEksZUFBTyxpQkFISTtBQUlYQyxlQUFPO0FBSkksT0FBYjtBQU1BLFVBQUlOLGFBQWEsRUFBYixJQUFtQkMsYUFBYSxFQUFwQyxFQUF3QztBQUN0QyxhQUFLSixRQUFMLENBQWMsRUFBRUQsZUFBZSxxQ0FBakIsRUFBZDtBQUNBO0FBQ0Q7QUFDRjs7OzZCQUVRO0FBQUE7O0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBTSxPQUFNLHVCQUFaO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSxhQUFmO0FBQ0UsbURBQU8sU0FBUyxLQUFLRixPQUFyQjtBQUNBLGtCQUFLLE1BREwsRUFDWSxJQUFHLFVBRGY7QUFFQSxpQkFBTyxhQUFDYSxLQUFELEVBQVc7QUFBRSxxQkFBS1AsUUFBTCxHQUFnQk8sS0FBaEI7QUFBd0IsYUFGNUMsR0FERjtBQUlFO0FBQUE7QUFBQSxjQUFPLFNBQUksVUFBWDtBQUFBO0FBQUE7QUFKRixTQURGO0FBT0U7QUFBQTtBQUFBLFlBQUssV0FBVSxhQUFmO0FBQ0UsbURBQU8sU0FBUyxLQUFLYixPQUFyQjtBQUNBLGtCQUFLLFVBREwsRUFDZ0IsSUFBRyxVQURuQixFQUM4QixLQUFLLGFBQUNhLEtBQUQsRUFBVztBQUFFLHFCQUFLTixRQUFMLEdBQWdCTSxLQUFoQjtBQUF3QixhQUR4RSxHQURGO0FBR0U7QUFBQTtBQUFBLGNBQU8sU0FBSSxVQUFYO0FBQUE7QUFBQTtBQUhGLFNBUEY7QUFZSSxhQUFLWixLQUFMLENBQVdDLGFBQVgsS0FBNkIsRUFBN0IsR0FBa0MsRUFBbEMsR0FDRjtBQUFBO0FBQUEsWUFBSyxXQUFVLFVBQWYsRUFBMEIsT0FBTyxFQUFFWSxTQUFTLFVBQVgsRUFBakM7QUFBMkQsZUFBS2IsS0FBTCxDQUFXQztBQUF0RSxTQWJGO0FBY0U7QUFBQTtBQUFBO0FBQ0EscUJBQVcsS0FBS0osV0FEaEI7QUFFQSx1QkFBVSx5Q0FGVjtBQUFBO0FBQUEsU0FkRjtBQWtCRTtBQUFBO0FBQUEsWUFBRyxXQUFVLG1EQUFiO0FBQ0Usa0JBQUssV0FEUDtBQUFBO0FBQUE7QUFsQkYsT0FERjtBQXVCRDs7OztFQXhEaUIsZ0JBQU1pQixTOztBQTBEMUIsSUFBTUMscUJBQXFCLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRCxFQUFjO0FBQ3ZDLFNBQU87QUFDTG5CLGlCQUFhO0FBQUEsYUFBUW1CLFNBQVMseUJBQVVQLElBQVYsQ0FBVCxDQUFSO0FBQUE7QUFEUixHQUFQO0FBR0QsQ0FKRDs7a0JBTWUseUJBQVEsSUFBUixFQUFjTSxrQkFBZCxFQUFrQ3BCLEtBQWxDLEMiLCJmaWxlIjoiMC4zOTY5NzE0ODI4YWQ0MTI2NTFkZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgRm9ybSBmcm9tICcuL2Zvcm0nO1xuaW1wb3J0IGxvZ2luVXNlciBmcm9tICcuLi8uLi9hY3Rpb25zL2xvZ2luVXNlcic7XG5cbmNsYXNzIExvZ2luIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLm9uTG9naW5Vc2VyID0gdGhpcy5vbkxvZ2luVXNlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25Gb2N1cyA9IHRoaXMub25Gb2N1cy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBlcnJvcl9tZXNzYWdlOiAnJ1xuICAgIH07XG4gIH1cblxuICBvbkZvY3VzKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcl9tZXNzYWdlOiAnJyB9KTtcbiAgfVxuXG4gIG9uTG9naW5Vc2VyKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0gPSB0aGlzO1xuICAgIHVzZXJuYW1lID0gdXNlcm5hbWUudmFsdWUudHJpbSgpO1xuICAgIHBhc3N3b3JkID0gcGFzc3dvcmQudmFsdWU7XG4gICAgY29uc3QgdXNlciA9IHtcbiAgICAgIHVzZXJuYW1lLFxuICAgICAgcGFzc3dvcmQsXG4gICAgICBlbWFpbDogJ2R1bW15QGVtYWlsLmNvbScsXG4gICAgICBwaG9uZTogJzA5MFBIT05OWSdcbiAgICB9O1xuICAgIGlmICh1c2VybmFtZSA9PT0gJycgfHwgcGFzc3dvcmQgPT09ICcnKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JfbWVzc2FnZTogJ0Vycm9yOiBPbmUgb3IgbW9yZSBmaWVsZHMgYXJlIGVtcHR5JyB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxGb3JtIHRpdGxlPSdMb2dpbiB0byB5b3VyIGFjY291bnQnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtZmllbGQnPlxuICAgICAgICAgIDxpbnB1dCBvbkZvY3VzPXt0aGlzLm9uRm9jdXN9XG4gICAgICAgICAgdHlwZT0ndGV4dCcgaWQ9J3VzZXJuYW1lJ1xuICAgICAgICAgIHJlZiA9IHsoaW5wdXQpID0+IHsgdGhpcy51c2VybmFtZSA9IGlucHV0OyB9fSAvPlxuICAgICAgICAgIDxsYWJlbCBmb3I9J3VzZXJuYW1lJz5Vc2VybmFtZTwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtZmllbGQnPlxuICAgICAgICAgIDxpbnB1dCBvbkZvY3VzPXt0aGlzLm9uRm9jdXN9XG4gICAgICAgICAgdHlwZT0ncGFzc3dvcmQnIGlkPSdwYXNzd29yZCcgcmVmPXsoaW5wdXQpID0+IHsgdGhpcy5wYXNzd29yZCA9IGlucHV0OyB9fS8+XG4gICAgICAgICAgPGxhYmVsIGZvcj0ncGFzc3dvcmQnPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsgdGhpcy5zdGF0ZS5lcnJvcl9tZXNzYWdlID09PSAnJyA/ICcnIDpcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlZCBjYXJkJyBzdHlsZT17eyBwYWRkaW5nOiAnNXB4IDEwcHgnIH19Pnt0aGlzLnN0YXRlLmVycm9yX21lc3NhZ2V9PC9kaXY+fVxuICAgICAgICA8YnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9IHsgdGhpcy5vbkxvZ2luVXNlciB9XG4gICAgICAgIGNsYXNzTmFtZT0nd2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0IGJ0biBhY3Rpb24tYnRuJz5cbiAgICAgICAgTG9naW48L2J1dHRvbj5cbiAgICAgICAgPGEgY2xhc3NOYW1lPSdyaWdodCB3YXZlcy1lZmZlY3Qgd2F2ZXMtdGVhbCBidG4tZmxhdCBhY3Rpb24tYnRuJ1xuICAgICAgICAgIGhyZWY9JyNyZWdpc3Rlcic+UmVnaXN0ZXI8L2E+XG4gICAgICA8L0Zvcm0+XG4gICAgKTtcbiAgfVxufVxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgb25Mb2dpblVzZXI6IHVzZXIgPT4gZGlzcGF0Y2gobG9naW5Vc2VyKHVzZXIpKVxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLCBtYXBEaXNwYXRjaFRvUHJvcHMpKExvZ2luKTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2pzL2NvbXBvbmVudHMvcHJlc2VudGF0aW9uYWwvbG9naW4uanMiXSwic291cmNlUm9vdCI6IiJ9