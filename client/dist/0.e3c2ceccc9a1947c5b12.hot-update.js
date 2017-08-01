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

var _api = __webpack_require__(131);

var _api2 = _interopRequireDefault(_api);

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
      var _this2 = this;

      console.log('user');
      e.preventDefault();
      var username = this.username,
          password = this.password;

      username = username.value.trim();
      password = password.value;
      if (username !== '' || password !== '') {
        var userString = 'username=' + username + '&password=' + password;
        (0, _api2.default)(userString, 'http://localhost:3000/api/signin', 'POST').then(function (_loginRes) {
          if (_loginRes.error === undefined) {
            console.log(_loginRes);
            _this2.props.onLoginUser(_loginRes);
            sessionStorage.setItem('user', _loginRes);
            location.hash = '#dashboard';
          } else {
            _this2.setState({ error_message: _loginRes.error.message });
          }
        });
      } else {
        this.setState({ error_message: 'Error: One or more fields are empty' });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        _form2.default,
        { title: 'Login to your account' },
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

/***/ }),

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
      (0, _api2.default)(userString, 'http://localhost:3000/api/users', 'POST', null).then(function (_registerRes) {
        if (_registerRes.error === undefined) {
          (0, _api2.default)(userString, 'http://localhost:3000/api/signin', 'POST', null).then(function (_loginRes) {
            if (_loginRes.error === undefined) {
              console.log(_loginRes);
              _this2.props.onLoginUser(_loginRes);
              sessionStorage.setItem('user', _loginRes);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9sb2dpbi5qcz85Mjc0Iiwid2VicGFjazovLy8uL2NsaWVudC9qcy9jb21wb25lbnRzL3ByZXNlbnRhdGlvbmFsL3JlZ2lzdGVyLmpzPzM3M2IiXSwibmFtZXMiOlsiTG9naW4iLCJwcm9wcyIsIm9uTG9naW5Vc2VyIiwiYmluZCIsIm9uRm9jdXMiLCJzdGF0ZSIsImVycm9yX21lc3NhZ2UiLCJzZXRTdGF0ZSIsImUiLCJjb25zb2xlIiwibG9nIiwicHJldmVudERlZmF1bHQiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwidmFsdWUiLCJ0cmltIiwidXNlclN0cmluZyIsInRoZW4iLCJfbG9naW5SZXMiLCJlcnJvciIsInVuZGVmaW5lZCIsInNlc3Npb25TdG9yYWdlIiwic2V0SXRlbSIsImxvY2F0aW9uIiwiaGFzaCIsIm1lc3NhZ2UiLCJpbnB1dCIsInBhZGRpbmciLCJDb21wb25lbnQiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsInVzZXIiLCJSZWdpc3RlciIsIm9uUmVnaXN0ZXJVc2VyIiwiZW1haWwiLCJwaG9uZSIsIl9yZWdpc3RlclJlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLEs7OztBQUVKLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkMsSUFBakIsT0FBbkI7QUFDQSxVQUFLQyxPQUFMLEdBQWUsTUFBS0EsT0FBTCxDQUFhRCxJQUFiLE9BQWY7QUFDQSxVQUFLRSxLQUFMLEdBQWE7QUFDWEMscUJBQWU7QUFESixLQUFiO0FBSmlCO0FBT2xCOzs7OzhCQUVTO0FBQ1IsV0FBS0MsUUFBTCxDQUFjLEVBQUVELGVBQWUsRUFBakIsRUFBZDtBQUNE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QU1MLFM7O0FBMkY3QixJQUFNQyxxQkFBcUIsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFELEVBQWM7QUFDdkMsU0FBTztBQUNMNUIsaUJBQWE7QUFBQSxhQUFRNEIsU0FBUyx5QkFBVUMsSUFBVixDQUFULENBQVI7QUFBQTtBQURSLEdBQVA7QUFHRCxDQUpEOztrQkFNZSx5QkFBUSxJQUFSLEVBQWNGLGtCQUFkLEVBQWtDRyxRQUFsQyxDIiwiZmlsZSI6IjAuZTNjMmNlY2NjOWExOTQ3YzViMTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IEZvcm0gZnJvbSAnLi9mb3JtJztcbmltcG9ydCBsb2dpblVzZXIgZnJvbSAnLi4vLi4vYWN0aW9ucy9sb2dpblVzZXInO1xuaW1wb3J0IGFwaSBmcm9tICcuLi9oZWxwZXJzL2FwaSc7XG5cbmNsYXNzIExvZ2luIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLm9uTG9naW5Vc2VyID0gdGhpcy5vbkxvZ2luVXNlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25Gb2N1cyA9IHRoaXMub25Gb2N1cy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBlcnJvcl9tZXNzYWdlOiAnJ1xuICAgIH07XG4gIH1cblxuICBvbkZvY3VzKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcl9tZXNzYWdlOiAnJyB9KTtcbiAgfVxuXG4gIG9uTG9naW5Vc2VyKGUpIHtcbiAgICBjb25zb2xlLmxvZygndXNlcicpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgeyB1c2VybmFtZSwgcGFzc3dvcmQgfSA9IHRoaXM7XG4gICAgdXNlcm5hbWUgPSB1c2VybmFtZS52YWx1ZS50cmltKCk7XG4gICAgcGFzc3dvcmQgPSBwYXNzd29yZC52YWx1ZTtcbiAgICBpZiAodXNlcm5hbWUgIT09ICcnIHx8IHBhc3N3b3JkICE9PSAnJykge1xuICAgICAgY29uc3QgdXNlclN0cmluZyA9IGB1c2VybmFtZT0ke3VzZXJuYW1lfSZwYXNzd29yZD0ke3Bhc3N3b3JkfWA7XG4gICAgICBhcGkodXNlclN0cmluZywgJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvc2lnbmluJywgJ1BPU1QnKS50aGVuKFxuICAgICAgICAoX2xvZ2luUmVzKSA9PiB7XG4gICAgICAgICAgaWYgKF9sb2dpblJlcy5lcnJvciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhfbG9naW5SZXMpO1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkxvZ2luVXNlcihfbG9naW5SZXMpO1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgndXNlcicsIF9sb2dpblJlcyk7XG4gICAgICAgICAgICBsb2NhdGlvbi5oYXNoID0gJyNkYXNoYm9hcmQnO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JfbWVzc2FnZTogX2xvZ2luUmVzLmVycm9yLm1lc3NhZ2UgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JfbWVzc2FnZTogJ0Vycm9yOiBPbmUgb3IgbW9yZSBmaWVsZHMgYXJlIGVtcHR5JyB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxGb3JtIHRpdGxlPSdMb2dpbiB0byB5b3VyIGFjY291bnQnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtZmllbGQnPlxuICAgICAgICAgIDxpbnB1dCBvbkZvY3VzPXt0aGlzLm9uRm9jdXN9XG4gICAgICAgICAgdHlwZT0ndGV4dCcgaWQ9J3VzZXJuYW1lJ1xuICAgICAgICAgIHJlZiA9IHsoaW5wdXQpID0+IHsgdGhpcy51c2VybmFtZSA9IGlucHV0OyB9fSAvPlxuICAgICAgICAgIDxsYWJlbCBmb3I9J3VzZXJuYW1lJz5Vc2VybmFtZTwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtZmllbGQnPlxuICAgICAgICAgIDxpbnB1dCBvbkZvY3VzPXt0aGlzLm9uRm9jdXN9XG4gICAgICAgICAgdHlwZT0ncGFzc3dvcmQnIGlkPSdwYXNzd29yZCcgcmVmPXsoaW5wdXQpID0+IHsgdGhpcy5wYXNzd29yZCA9IGlucHV0OyB9fS8+XG4gICAgICAgICAgPGxhYmVsIGZvcj0ncGFzc3dvcmQnPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsgdGhpcy5zdGF0ZS5lcnJvcl9tZXNzYWdlID09PSAnJyA/ICcnIDpcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlZCBjYXJkJyBzdHlsZT17eyBwYWRkaW5nOiAnNXB4IDEwcHgnIH19Pnt0aGlzLnN0YXRlLmVycm9yX21lc3NhZ2V9PC9kaXY+fVxuICAgICAgICA8YnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9IHsgdGhpcy5vbkxvZ2luVXNlciB9XG4gICAgICAgIGNsYXNzTmFtZT0nd2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0IGJ0biBhY3Rpb24tYnRuJz5cbiAgICAgICAgTG9naW48L2J1dHRvbj5cbiAgICAgICAgPGEgY2xhc3NOYW1lPSdyaWdodCB3YXZlcy1lZmZlY3Qgd2F2ZXMtdGVhbCBidG4tZmxhdCBhY3Rpb24tYnRuJ1xuICAgICAgICAgIGhyZWY9JyNyZWdpc3Rlcic+UmVnaXN0ZXI8L2E+XG4gICAgICA8L0Zvcm0+XG4gICAgKTtcbiAgfVxufVxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgb25Mb2dpblVzZXI6IHVzZXIgPT4gZGlzcGF0Y2gobG9naW5Vc2VyKHVzZXIpKVxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLCBtYXBEaXNwYXRjaFRvUHJvcHMpKExvZ2luKTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2pzL2NvbXBvbmVudHMvcHJlc2VudGF0aW9uYWwvbG9naW4uanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBGb3JtIGZyb20gJy4vZm9ybSc7XG5pbXBvcnQgbG9naW5Vc2VyIGZyb20gJy4uLy4uL2FjdGlvbnMvbG9naW5Vc2VyJztcbmltcG9ydCBhcGkgZnJvbSAnLi4vaGVscGVycy9hcGknO1xuXG5jbGFzcyBSZWdpc3RlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5vblJlZ2lzdGVyVXNlciA9IHRoaXMub25SZWdpc3RlclVzZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uRm9jdXMgPSB0aGlzLm9uRm9jdXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZXJyb3JfbWVzc2FnZTogJydcbiAgICB9O1xuICB9XG5cbiAgb25Gb2N1cygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JfbWVzc2FnZTogJycgfSk7XG4gIH1cblxuICBvblJlZ2lzdGVyVXNlcihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCB7IHVzZXJuYW1lLCBlbWFpbCwgcGhvbmUsIHBhc3N3b3JkIH0gPSB0aGlzO1xuICAgIHVzZXJuYW1lID0gdXNlcm5hbWUudmFsdWUudHJpbSgpO1xuICAgIGVtYWlsID0gZW1haWwudmFsdWUudHJpbSgpO1xuICAgIHBob25lID0gcGhvbmUudmFsdWUudHJpbSgpO1xuICAgIHBhc3N3b3JkID0gcGFzc3dvcmQudmFsdWU7XG4gICAgY29uc3QgdXNlciA9IHtcbiAgICAgIHVzZXJuYW1lLFxuICAgICAgZW1haWwsXG4gICAgICBwaG9uZSxcbiAgICAgIHBhc3N3b3JkXG4gICAgfTtcbiAgICBpZiAodXNlcm5hbWUgPT09ICcnIHx8IGVtYWlsID09PSAnJyB8fCBwaG9uZSA9PT0gJycgfHwgcGFzc3dvcmQgPT09ICcnKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JfbWVzc2FnZTogJ0Vycm9yOiBPbmUgb3IgbW9yZSBmaWVsZHMgYXJlIGVtcHR5JyB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdXNlclN0cmluZyA9IGB1c2VybmFtZT0ke3VzZXJuYW1lfSZlbWFpbD0ke2VtYWlsfSZwYXNzd29yZD0ke3Bhc3N3b3JkfSZwaG9uZT0ke3Bob25lfWA7XG4gICAgYXBpKHVzZXJTdHJpbmcsICdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3VzZXJzJywgJ1BPU1QnLCBudWxsKS50aGVuKFxuICAgICAgKF9yZWdpc3RlclJlcykgPT4ge1xuICAgICAgICBpZiAoX3JlZ2lzdGVyUmVzLmVycm9yID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBhcGkodXNlclN0cmluZywgJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvc2lnbmluJywgJ1BPU1QnLCBudWxsKS50aGVuKFxuICAgICAgICAgICAgKF9sb2dpblJlcykgPT4ge1xuICAgICAgICAgICAgICBpZiAoX2xvZ2luUmVzLmVycm9yID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhfbG9naW5SZXMpO1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25Mb2dpblVzZXIoX2xvZ2luUmVzKTtcbiAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCd1c2VyJywgX2xvZ2luUmVzKTtcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5oYXNoID0gJyNkYXNoYm9hcmQnO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcl9tZXNzYWdlOiBfbG9naW5SZXMuZXJyb3IubWVzc2FnZSB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yX21lc3NhZ2U6IF9yZWdpc3RlclJlcy5lcnJvci5tZXNzYWdlIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEZvcm0gdGl0bGU9J0NyZWF0ZSBhIG5ldyBhY2NvdW50Jz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2lucHV0LWZpZWxkJz5cbiAgICAgICAgICA8aW5wdXQgb25Gb2N1cz17dGhpcy5vbkZvY3VzfVxuICAgICAgICAgIHR5cGU9J3RleHQnIGlkPSd1c2VybmFtZSdcbiAgICAgICAgICByZWYgPSB7KGlucHV0KSA9PiB7IHRoaXMudXNlcm5hbWUgPSBpbnB1dDsgfX0gLz5cbiAgICAgICAgICA8bGFiZWwgZm9yPSd1c2VybmFtZSc+VXNlcm5hbWU8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2lucHV0LWZpZWxkJz5cbiAgICAgICAgICA8aW5wdXQgb25Gb2N1cz17dGhpcy5vbkZvY3VzfVxuICAgICAgICAgIHR5cGU9J2VtYWlsJyBpZD0nZW1haWwnIHJlZj17KGlucHV0KSA9PiB7IHRoaXMuZW1haWwgPSBpbnB1dDsgfX0vPlxuICAgICAgICAgIDxsYWJlbCBmb3I9J2VtYWlsJz5FbWFpbDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtZmllbGQnPlxuICAgICAgICAgIDxpbnB1dCBvbkZvY3VzPXt0aGlzLm9uRm9jdXN9XG4gICAgICAgICAgdHlwZT0ndGV4dCcgaWQ9J3Bob25lJyByZWY9eyhpbnB1dCkgPT4geyB0aGlzLnBob25lID0gaW5wdXQ7IH19Lz5cbiAgICAgICAgICA8bGFiZWwgZm9yPSdwaG9uZSc+UGhvbmU8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2lucHV0LWZpZWxkJz5cbiAgICAgICAgICA8aW5wdXQgb25Gb2N1cz17dGhpcy5vbkZvY3VzfVxuICAgICAgICAgIHR5cGU9J3Bhc3N3b3JkJyBpZD0ncGFzc3dvcmQnIHJlZj17KGlucHV0KSA9PiB7IHRoaXMucGFzc3dvcmQgPSBpbnB1dDsgfX0vPlxuICAgICAgICAgIDxsYWJlbCBmb3I9J3Bhc3N3b3JkJz5QYXNzd29yZDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7IHRoaXMuc3RhdGUuZXJyb3JfbWVzc2FnZSA9PT0gJycgPyAnJyA6XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZWQgY2FyZCcgc3R5bGU9e3sgcGFkZGluZzogJzVweCAxMHB4JyB9fT57dGhpcy5zdGF0ZS5lcnJvcl9tZXNzYWdlfTwvZGl2Pn1cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICBvbkNsaWNrPSB7IHRoaXMub25SZWdpc3RlclVzZXIgfVxuICAgICAgICBjbGFzc05hbWU9J3dhdmVzLWVmZmVjdCB3YXZlcy1saWdodCBidG4gYWN0aW9uLWJ0bic+XG4gICAgICAgIFJlZ2lzdGVyPC9idXR0b24+XG4gICAgICAgIDxhIGNsYXNzTmFtZT0ncmlnaHQgd2F2ZXMtZWZmZWN0IHdhdmVzLXRlYWwgYnRuLWZsYXQgYWN0aW9uLWJ0bidcbiAgICAgICAgICBocmVmPScjbG9naW4nPkxvZ2luPC9hPlxuICAgICAgPC9Gb3JtPlxuICAgICk7XG4gIH1cbn1cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICByZXR1cm4ge1xuICAgIG9uTG9naW5Vc2VyOiB1c2VyID0+IGRpc3BhdGNoKGxvZ2luVXNlcih1c2VyKSlcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobnVsbCwgbWFwRGlzcGF0Y2hUb1Byb3BzKShSZWdpc3Rlcik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9yZWdpc3Rlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=