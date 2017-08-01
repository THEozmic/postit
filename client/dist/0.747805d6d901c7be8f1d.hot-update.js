webpackHotUpdate(0,{

/***/ 138:
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

var _api = __webpack_require__(131);

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Register = function (_React$Component) {
  _inherits(Register, _React$Component);

  function Register(props) {
    _classCallCheck(this, Register);

    var _this = _possibleConstructorReturn(this, (Register.__proto__ || Object.getPrototypeOf(Register)).call(this, props));

    _this.onRegisterUser = _this.onRegisterUser.bind(_this);
    _this.onFocus = _this.onFocus.bind(_this);
    _this.state = {
      error_message: ''
    };
    return _this;
  }

  _createClass(Register, [{
    key: 'onFocus',
    value: function onFocus() {
      this.setState({ error_message: '' });
    }
  }, {
    key: 'onRegisterUser',
    value: function onRegisterUser(e) {
      var _this2 = this;

      e.preventDefault();
      var username = this.username,
          email = this.email,
          phone = this.phone,
          password = this.password;

      username = username.value.trim();
      email = email.value.trim();
      phone = phone.value.trim();
      password = password.value;
      var user = {
        username: username,
        email: email,
        phone: phone,
        password: password
      };
      if (username === '' || email === '' || phone === '' || password === '') {
        this.setState({ error_message: 'Error: One or more fields are empty' });
        return;
      }
      var userString = 'username=' + username + '&email=' + email + '&password=' + password + '&phone=' + phone;
      (0, _api2.default)(userString, 'http://localhost:3000/api/users', 'POST').then(function (_registerRes) {
        if (_registerRes.error === undefined) {
          (0, _api2.default)(userString, 'http://localhost:3000/api/signin', 'POST').then(function (_loginRes) {
            if (_loginRes.error === undefined) {
              console.log(_loginRes);
              _this2.props.onLoginUser(user);
              location.hash = '#dashboard';
            } else {
              _this2.setState({ error_message: registerRes.error.message });
            }
          });
        } else {
          _this2.setState({ error_message: registerRes.error.message });
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        _form2.default,
        { title: 'Create a new account' },
        _react2.default.createElement(
          'div',
          { className: 'input-field' },
          _react2.default.createElement('input', { onFocus: this.onFocus,
            type: 'text', id: 'username',
            ref: function ref(input) {
              _this3.username = input;
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
            type: 'email', id: 'email', ref: function ref(input) {
              _this3.email = input;
            } }),
          _react2.default.createElement(
            'label',
            { htmlFor: 'email' },
            'Email'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'input-field' },
          _react2.default.createElement('input', { onFocus: this.onFocus,
            type: 'text', id: 'phone', ref: function ref(input) {
              _this3.phone = input;
            } }),
          _react2.default.createElement(
            'label',
            { htmlFor: 'phone' },
            'Phone'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'input-field' },
          _react2.default.createElement('input', { onFocus: this.onFocus,
            type: 'password', id: 'password', ref: function ref(input) {
              _this3.password = input;
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
            onClick: this.onRegisterUser,
            className: 'waves-effect waves-light btn action-btn' },
          'Register'
        ),
        _react2.default.createElement(
          'a',
          { className: 'right waves-effect waves-teal btn-flat action-btn',
            href: '#login' },
          'Login'
        )
      );
    }
  }]);

  return Register;
}(_react2.default.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onLoginUser: function onLoginUser(user) {
      return dispatch((0, _loginUser2.default)(user));
    }
  };
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(Register);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9yZWdpc3Rlci5qcz8zNzNiIl0sIm5hbWVzIjpbIlJlZ2lzdGVyIiwicHJvcHMiLCJvblJlZ2lzdGVyVXNlciIsImJpbmQiLCJvbkZvY3VzIiwic3RhdGUiLCJlcnJvcl9tZXNzYWdlIiwic2V0U3RhdGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJ1c2VybmFtZSIsImVtYWlsIiwicGhvbmUiLCJwYXNzd29yZCIsInZhbHVlIiwidHJpbSIsInVzZXIiLCJ1c2VyU3RyaW5nIiwidGhlbiIsIl9yZWdpc3RlclJlcyIsImVycm9yIiwidW5kZWZpbmVkIiwiX2xvZ2luUmVzIiwiY29uc29sZSIsImxvZyIsIm9uTG9naW5Vc2VyIiwibG9jYXRpb24iLCJoYXNoIiwicmVnaXN0ZXJSZXMiLCJtZXNzYWdlIiwiaW5wdXQiLCJwYWRkaW5nIiwiQ29tcG9uZW50IiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxROzs7QUFFSixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLG9IQUNYQSxLQURXOztBQUVqQixVQUFLQyxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0JDLElBQXBCLE9BQXRCO0FBQ0EsVUFBS0MsT0FBTCxHQUFlLE1BQUtBLE9BQUwsQ0FBYUQsSUFBYixPQUFmO0FBQ0EsVUFBS0UsS0FBTCxHQUFhO0FBQ1hDLHFCQUFlO0FBREosS0FBYjtBQUppQjtBQU9sQjs7Ozs4QkFFUztBQUNSLFdBQUtDLFFBQUwsQ0FBYyxFQUFFRCxlQUFlLEVBQWpCLEVBQWQ7QUFDRDs7O21DQUVjRSxDLEVBQUc7QUFBQTs7QUFDaEJBLFFBQUVDLGNBQUY7QUFEZ0IsVUFFVkMsUUFGVSxHQUUyQixJQUYzQixDQUVWQSxRQUZVO0FBQUEs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QUFPLFNBQVMsS0FBSzFCLE9BQXJCO0FBQ0Esa0JBQUssVUFETCxFQUNnQixJQUFHLFVBRG5CLEVBQzhCLEtBQUssYUFBQzBCLEtBQUQsRUFBVztBQUFFLHFCQUFLakIsUUFBTCxHQUFnQmlCLEtBQWhCO0FBQXdCLGFBRHhFLEdBREY7QUFHRTtBQUFBO0FBQUEsY0FBTyxTQUFJLFVBQVg7QUFBQTtBQUFBO0FBSEYsU0FqQkY7QUFzQkksYUFBS3pCLEtBQUwsQ0FBV0MsYUFBWCxLQUE2QixFQUE3QixHQUFrQyxFQUFsQyxHQUNGO0FBQUE7QUFBQSxZQUFLLFdBQVUsVUFBZixFQUEwQixPQUFPLEVBQUV5QixTQUFTLFVBQVgsRUFBakM7QUFBMkQsZUFBSzFCLEtBQUwsQ0FBV0M7QUFBdEUsU0F2QkY7QUF3QkU7QUFBQTtBQUFBO0FBQ0EscUJBQVcsS0FBS0osY0FEaEI7QUFFQSx1QkFBVSx5Q0FGVjtBQUFBO0FBQUEsU0F4QkY7QUE0QkU7QUFBQTtBQUFBLFlBQUcsV0FBVSxtREFBYjtBQUNFLGtCQUFLLFFBRFA7QUFBQTtBQUFBO0FBNUJGLE9BREY7QUFpQ0Q7Ozs7RUF6Rm9CLGdCQUFNOEIsUzs7QUEyRjdCLElBQU1DLHFCQUFxQixTQUFyQkEsa0JBQXFCLENBQUNDLFFBQUQsRUFBYztBQUN2QyxTQUFPO0FBQ0xULGlCQUFhO0FBQUEsYUFBUVMsU0FBUyx5QkFBVWxCLElBQVYsQ0FBVCxDQUFSO0FBQUE7QUFEUixHQUFQO0FBR0QsQ0FKRDs7a0JBTWUseUJBQVEsSUFBUixFQUFjaUIsa0JBQWQsRUFBa0NqQyxRQUFsQyxDIiwiZmlsZSI6IjAuNzQ3ODA1ZDZkOTAxYzdiZThmMWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IEZvcm0gZnJvbSAnLi9mb3JtJztcbmltcG9ydCBsb2dpblVzZXIgZnJvbSAnLi4vLi4vYWN0aW9ucy9sb2dpblVzZXInO1xuaW1wb3J0IGFwaSBmcm9tICcuLi9oZWxwZXJzL2FwaSc7XG5cbmNsYXNzIFJlZ2lzdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLm9uUmVnaXN0ZXJVc2VyID0gdGhpcy5vblJlZ2lzdGVyVXNlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25Gb2N1cyA9IHRoaXMub25Gb2N1cy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBlcnJvcl9tZXNzYWdlOiAnJ1xuICAgIH07XG4gIH1cblxuICBvbkZvY3VzKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcl9tZXNzYWdlOiAnJyB9KTtcbiAgfVxuXG4gIG9uUmVnaXN0ZXJVc2VyKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IHsgdXNlcm5hbWUsIGVtYWlsLCBwaG9uZSwgcGFzc3dvcmQgfSA9IHRoaXM7XG4gICAgdXNlcm5hbWUgPSB1c2VybmFtZS52YWx1ZS50cmltKCk7XG4gICAgZW1haWwgPSBlbWFpbC52YWx1ZS50cmltKCk7XG4gICAgcGhvbmUgPSBwaG9uZS52YWx1ZS50cmltKCk7XG4gICAgcGFzc3dvcmQgPSBwYXNzd29yZC52YWx1ZTtcbiAgICBjb25zdCB1c2VyID0ge1xuICAgICAgdXNlcm5hbWUsXG4gICAgICBlbWFpbCxcbiAgICAgIHBob25lLFxuICAgICAgcGFzc3dvcmRcbiAgICB9O1xuICAgIGlmICh1c2VybmFtZSA9PT0gJycgfHwgZW1haWwgPT09ICcnIHx8IHBob25lID09PSAnJyB8fCBwYXNzd29yZCA9PT0gJycpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcl9tZXNzYWdlOiAnRXJyb3I6IE9uZSBvciBtb3JlIGZpZWxkcyBhcmUgZW1wdHknIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB1c2VyU3RyaW5nID0gYHVzZXJuYW1lPSR7dXNlcm5hbWV9JmVtYWlsPSR7ZW1haWx9JnBhc3N3b3JkPSR7cGFzc3dvcmR9JnBob25lPSR7cGhvbmV9YDtcbiAgICBhcGkodXNlclN0cmluZywgJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdXNlcnMnLCAnUE9TVCcpLnRoZW4oXG4gICAgICAoX3JlZ2lzdGVyUmVzKSA9PiB7XG4gICAgICAgIGlmIChfcmVnaXN0ZXJSZXMuZXJyb3IgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGFwaSh1c2VyU3RyaW5nLCAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9zaWduaW4nLCAnUE9TVCcpLnRoZW4oXG4gICAgICAgICAgICAoX2xvZ2luUmVzKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChfbG9naW5SZXMuZXJyb3IgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKF9sb2dpblJlcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkxvZ2luVXNlcih1c2VyKTtcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5oYXNoID0gJyNkYXNoYm9hcmQnO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcl9tZXNzYWdlOiByZWdpc3RlclJlcy5lcnJvci5tZXNzYWdlIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JfbWVzc2FnZTogcmVnaXN0ZXJSZXMuZXJyb3IubWVzc2FnZSB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEZvcm0gdGl0bGU9J0NyZWF0ZSBhIG5ldyBhY2NvdW50Jz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2lucHV0LWZpZWxkJz5cbiAgICAgICAgICA8aW5wdXQgb25Gb2N1cz17dGhpcy5vbkZvY3VzfVxuICAgICAgICAgIHR5cGU9J3RleHQnIGlkPSd1c2VybmFtZSdcbiAgICAgICAgICByZWYgPSB7KGlucHV0KSA9PiB7IHRoaXMudXNlcm5hbWUgPSBpbnB1dDsgfX0gLz5cbiAgICAgICAgICA8bGFiZWwgZm9yPSd1c2VybmFtZSc+VXNlcm5hbWU8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2lucHV0LWZpZWxkJz5cbiAgICAgICAgICA8aW5wdXQgb25Gb2N1cz17dGhpcy5vbkZvY3VzfVxuICAgICAgICAgIHR5cGU9J2VtYWlsJyBpZD0nZW1haWwnIHJlZj17KGlucHV0KSA9PiB7IHRoaXMuZW1haWwgPSBpbnB1dDsgfX0vPlxuICAgICAgICAgIDxsYWJlbCBmb3I9J2VtYWlsJz5FbWFpbDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtZmllbGQnPlxuICAgICAgICAgIDxpbnB1dCBvbkZvY3VzPXt0aGlzLm9uRm9jdXN9XG4gICAgICAgICAgdHlwZT0ndGV4dCcgaWQ9J3Bob25lJyByZWY9eyhpbnB1dCkgPT4geyB0aGlzLnBob25lID0gaW5wdXQ7IH19Lz5cbiAgICAgICAgICA8bGFiZWwgZm9yPSdwaG9uZSc+UGhvbmU8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2lucHV0LWZpZWxkJz5cbiAgICAgICAgICA8aW5wdXQgb25Gb2N1cz17dGhpcy5vbkZvY3VzfVxuICAgICAgICAgIHR5cGU9J3Bhc3N3b3JkJyBpZD0ncGFzc3dvcmQnIHJlZj17KGlucHV0KSA9PiB7IHRoaXMucGFzc3dvcmQgPSBpbnB1dDsgfX0vPlxuICAgICAgICAgIDxsYWJlbCBmb3I9J3Bhc3N3b3JkJz5QYXNzd29yZDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7IHRoaXMuc3RhdGUuZXJyb3JfbWVzc2FnZSA9PT0gJycgPyAnJyA6XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZWQgY2FyZCcgc3R5bGU9e3sgcGFkZGluZzogJzVweCAxMHB4JyB9fT57dGhpcy5zdGF0ZS5lcnJvcl9tZXNzYWdlfTwvZGl2Pn1cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICBvbkNsaWNrPSB7IHRoaXMub25SZWdpc3RlclVzZXIgfVxuICAgICAgICBjbGFzc05hbWU9J3dhdmVzLWVmZmVjdCB3YXZlcy1saWdodCBidG4gYWN0aW9uLWJ0bic+XG4gICAgICAgIFJlZ2lzdGVyPC9idXR0b24+XG4gICAgICAgIDxhIGNsYXNzTmFtZT0ncmlnaHQgd2F2ZXMtZWZmZWN0IHdhdmVzLXRlYWwgYnRuLWZsYXQgYWN0aW9uLWJ0bidcbiAgICAgICAgICBocmVmPScjbG9naW4nPkxvZ2luPC9hPlxuICAgICAgPC9Gb3JtPlxuICAgICk7XG4gIH1cbn1cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICByZXR1cm4ge1xuICAgIG9uTG9naW5Vc2VyOiB1c2VyID0+IGRpc3BhdGNoKGxvZ2luVXNlcih1c2VyKSlcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobnVsbCwgbWFwRGlzcGF0Y2hUb1Byb3BzKShSZWdpc3Rlcik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9yZWdpc3Rlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=