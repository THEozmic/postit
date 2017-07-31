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
              localStorage.setItem("lastname", "Smith");

              location.hash = '#dashboard';
            } else {
              _this2.setState({ error_message: _loginRes.error.message });
            }
          });
        } else {
          _this2.setState({ error_message: _registerRes.error.message });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9yZWdpc3Rlci5qcz8zNzNiIl0sIm5hbWVzIjpbIlJlZ2lzdGVyIiwicHJvcHMiLCJvblJlZ2lzdGVyVXNlciIsImJpbmQiLCJvbkZvY3VzIiwic3RhdGUiLCJlcnJvcl9tZXNzYWdlIiwic2V0U3RhdGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJ1c2VybmFtZSIsImVtYWlsIiwicGhvbmUiLCJwYXNzd29yZCIsInZhbHVlIiwidHJpbSIsInVzZXIiLCJ1c2VyU3RyaW5nIiwidGhlbiIsIl9yZWdpc3RlclJlcyIsImVycm9yIiwidW5kZWZpbmVkIiwiX2xvZ2luUmVzIiwiY29uc29sZSIsImxvZyIsIm9uTG9naW5Vc2VyIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImxvY2F0aW9uIiwiaGFzaCIsIm1lc3NhZ2UiLCJpbnB1dCIsInBhZGRpbmciLCJDb21wb25lbnQiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLFE7OztBQUVKLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsb0hBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLGNBQUwsR0FBc0IsTUFBS0EsY0FBTCxDQUFvQkMsSUFBcEIsT0FBdEI7QUFDQSxVQUFLQyxPQUFMLEdBQWUsTUFBS0EsT0FBTCxDQUFhRCxJQUFiLE9BQWY7QUFDQSxVQUFLRSxLQUFMLEdBQWE7QUFDWEMscUJBQWU7QUFESixLQUFiO0FBSmlCO0FBT2xCOzs7OzhCQUVTO0FBQ1IsV0FBS0MsUUFBTCxDQUFjLEVBQUVELGVBQWUsRUFBakIsRUFBZDtBQUNEOzs7bUNBRWNFLEMsRUFBRztBQUFBOztBQUNoQkEsUUFBRUMsY0FBRjtBQURnQixVQUVWQyxRQUZVLEdBRTJCLElBRjNCLENBRVZB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QUFBQTtBQUhGLFNBWkY7QUFpQkU7QUFBQTtBQUFBLFlBQUssV0FBVSxhQUFmO0FBQ0UsbURBQU8sU0FBUyxLQUFLM0IsT0FBckI7QUFDQSxrQkFBSyxVQURMLEVBQ2dCLElBQUcsVUFEbkIsRUFDOEIsS0FBSyxhQUFDMkIsS0FBRCxFQUFXO0FBQUUscUJBQUtsQixRQUFMLEdBQWdCa0IsS0FBaEI7QUFBd0IsYUFEeEUsR0FERjtBQUdFO0FBQUE7QUFBQSxjQUFPLFNBQUksVUFBWDtBQUFBO0FBQUE7QUFIRixTQWpCRjtBQXNCSSxhQUFLMUIsS0FBTCxDQUFXQyxhQUFYLEtBQTZCLEVBQTdCLEdBQWtDLEVBQWxDLEdBQ0Y7QUFBQTtBQUFBLFlBQUssV0FBVSxVQUFmLEVBQTBCLE9BQU8sRUFBRTBCLFNBQVMsVUFBWCxFQUFqQztBQUEyRCxlQUFLM0IsS0FBTCxDQUFXQztBQUF0RSxTQXZCRjtBQXdCRTtBQUFBO0FBQUE7QUFDQSxxQkFBVyxLQUFLSixjQURoQjtBQUVBLHVCQUFVLHlDQUZWO0FBQUE7QUFBQSxTQXhCRjtBQTRCRTtBQUFBO0FBQUEsWUFBRyxXQUFVLG1EQUFiO0FBQ0Usa0JBQUssUUFEUDtBQUFBO0FBQUE7QUE1QkYsT0FERjtBQWlDRDs7OztFQTFGb0IsZ0JBQU0rQixTOztBQTRGN0IsSUFBTUMscUJBQXFCLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRCxFQUFjO0FBQ3ZDLFNBQU87QUFDTFYsaUJBQWE7QUFBQSxhQUFRVSxTQUFTLHlCQUFVbkIsSUFBVixDQUFULENBQVI7QUFBQTtBQURSLEdBQVA7QUFHRCxDQUpEOztrQkFNZSx5QkFBUSxJQUFSLEVBQWNrQixrQkFBZCxFQUFrQ2xDLFFBQWxDLEMiLCJmaWxlIjoiMC4zMjQzNzEwMmFiZThlZmI1MWJiYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgRm9ybSBmcm9tICcuL2Zvcm0nO1xuaW1wb3J0IGxvZ2luVXNlciBmcm9tICcuLi8uLi9hY3Rpb25zL2xvZ2luVXNlcic7XG5pbXBvcnQgYXBpIGZyb20gJy4uL2hlbHBlcnMvYXBpJztcblxuY2xhc3MgUmVnaXN0ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMub25SZWdpc3RlclVzZXIgPSB0aGlzLm9uUmVnaXN0ZXJVc2VyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkZvY3VzID0gdGhpcy5vbkZvY3VzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGVycm9yX21lc3NhZ2U6ICcnXG4gICAgfTtcbiAgfVxuXG4gIG9uRm9jdXMoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yX21lc3NhZ2U6ICcnIH0pO1xuICB9XG5cbiAgb25SZWdpc3RlclVzZXIoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgeyB1c2VybmFtZSwgZW1haWwsIHBob25lLCBwYXNzd29yZCB9ID0gdGhpcztcbiAgICB1c2VybmFtZSA9IHVzZXJuYW1lLnZhbHVlLnRyaW0oKTtcbiAgICBlbWFpbCA9IGVtYWlsLnZhbHVlLnRyaW0oKTtcbiAgICBwaG9uZSA9IHBob25lLnZhbHVlLnRyaW0oKTtcbiAgICBwYXNzd29yZCA9IHBhc3N3b3JkLnZhbHVlO1xuICAgIGNvbnN0IHVzZXIgPSB7XG4gICAgICB1c2VybmFtZSxcbiAgICAgIGVtYWlsLFxuICAgICAgcGhvbmUsXG4gICAgICBwYXNzd29yZFxuICAgIH07XG4gICAgaWYgKHVzZXJuYW1lID09PSAnJyB8fCBlbWFpbCA9PT0gJycgfHwgcGhvbmUgPT09ICcnIHx8IHBhc3N3b3JkID09PSAnJykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yX21lc3NhZ2U6ICdFcnJvcjogT25lIG9yIG1vcmUgZmllbGRzIGFyZSBlbXB0eScgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHVzZXJTdHJpbmcgPSBgdXNlcm5hbWU9JHt1c2VybmFtZX0mZW1haWw9JHtlbWFpbH0mcGFzc3dvcmQ9JHtwYXNzd29yZH0mcGhvbmU9JHtwaG9uZX1gO1xuICAgIGFwaSh1c2VyU3RyaW5nLCAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS91c2VycycsICdQT1NUJykudGhlbihcbiAgICAgIChfcmVnaXN0ZXJSZXMpID0+IHtcbiAgICAgICAgaWYgKF9yZWdpc3RlclJlcy5lcnJvciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgYXBpKHVzZXJTdHJpbmcsICdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3NpZ25pbicsICdQT1NUJykudGhlbihcbiAgICAgICAgICAgIChfbG9naW5SZXMpID0+IHtcbiAgICAgICAgICAgICAgaWYgKF9sb2dpblJlcy5lcnJvciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coX2xvZ2luUmVzKTtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uTG9naW5Vc2VyKHVzZXIpO1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGFzdG5hbWVcIiwgXCJTbWl0aFwiKTtcblxuICAgICAgICAgICAgICAgIGxvY2F0aW9uLmhhc2ggPSAnI2Rhc2hib2FyZCc7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yX21lc3NhZ2U6IF9sb2dpblJlcy5lcnJvci5tZXNzYWdlIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JfbWVzc2FnZTogX3JlZ2lzdGVyUmVzLmVycm9yLm1lc3NhZ2UgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybSB0aXRsZT0nQ3JlYXRlIGEgbmV3IGFjY291bnQnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtZmllbGQnPlxuICAgICAgICAgIDxpbnB1dCBvbkZvY3VzPXt0aGlzLm9uRm9jdXN9XG4gICAgICAgICAgdHlwZT0ndGV4dCcgaWQ9J3VzZXJuYW1lJ1xuICAgICAgICAgIHJlZiA9IHsoaW5wdXQpID0+IHsgdGhpcy51c2VybmFtZSA9IGlucHV0OyB9fSAvPlxuICAgICAgICAgIDxsYWJlbCBmb3I9J3VzZXJuYW1lJz5Vc2VybmFtZTwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtZmllbGQnPlxuICAgICAgICAgIDxpbnB1dCBvbkZvY3VzPXt0aGlzLm9uRm9jdXN9XG4gICAgICAgICAgdHlwZT0nZW1haWwnIGlkPSdlbWFpbCcgcmVmPXsoaW5wdXQpID0+IHsgdGhpcy5lbWFpbCA9IGlucHV0OyB9fS8+XG4gICAgICAgICAgPGxhYmVsIGZvcj0nZW1haWwnPkVtYWlsPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1maWVsZCc+XG4gICAgICAgICAgPGlucHV0IG9uRm9jdXM9e3RoaXMub25Gb2N1c31cbiAgICAgICAgICB0eXBlPSd0ZXh0JyBpZD0ncGhvbmUnIHJlZj17KGlucHV0KSA9PiB7IHRoaXMucGhvbmUgPSBpbnB1dDsgfX0vPlxuICAgICAgICAgIDxsYWJlbCBmb3I9J3Bob25lJz5QaG9uZTwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtZmllbGQnPlxuICAgICAgICAgIDxpbnB1dCBvbkZvY3VzPXt0aGlzLm9uRm9jdXN9XG4gICAgICAgICAgdHlwZT0ncGFzc3dvcmQnIGlkPSdwYXNzd29yZCcgcmVmPXsoaW5wdXQpID0+IHsgdGhpcy5wYXNzd29yZCA9IGlucHV0OyB9fS8+XG4gICAgICAgICAgPGxhYmVsIGZvcj0ncGFzc3dvcmQnPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsgdGhpcy5zdGF0ZS5lcnJvcl9tZXNzYWdlID09PSAnJyA/ICcnIDpcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlZCBjYXJkJyBzdHlsZT17eyBwYWRkaW5nOiAnNXB4IDEwcHgnIH19Pnt0aGlzLnN0YXRlLmVycm9yX21lc3NhZ2V9PC9kaXY+fVxuICAgICAgICA8YnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9IHsgdGhpcy5vblJlZ2lzdGVyVXNlciB9XG4gICAgICAgIGNsYXNzTmFtZT0nd2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0IGJ0biBhY3Rpb24tYnRuJz5cbiAgICAgICAgUmVnaXN0ZXI8L2J1dHRvbj5cbiAgICAgICAgPGEgY2xhc3NOYW1lPSdyaWdodCB3YXZlcy1lZmZlY3Qgd2F2ZXMtdGVhbCBidG4tZmxhdCBhY3Rpb24tYnRuJ1xuICAgICAgICAgIGhyZWY9JyNsb2dpbic+TG9naW48L2E+XG4gICAgICA8L0Zvcm0+XG4gICAgKTtcbiAgfVxufVxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgb25Mb2dpblVzZXI6IHVzZXIgPT4gZGlzcGF0Y2gobG9naW5Vc2VyKHVzZXIpKVxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFJlZ2lzdGVyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9qcy9jb21wb25lbnRzL3ByZXNlbnRhdGlvbmFsL3JlZ2lzdGVyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==