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
              _this2.setState({ error_message: _registerRes.error.message });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9yZWdpc3Rlci5qcz8zNzNiIl0sIm5hbWVzIjpbIlJlZ2lzdGVyIiwicHJvcHMiLCJvblJlZ2lzdGVyVXNlciIsImJpbmQiLCJvbkZvY3VzIiwic3RhdGUiLCJlcnJvcl9tZXNzYWdlIiwic2V0U3RhdGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJ1c2VybmFtZSIsImVtYWlsIiwicGhvbmUiLCJwYXNzd29yZCIsInZhbHVlIiwidHJpbSIsInVzZXIiLCJ1c2VyU3RyaW5nIiwidGhlbiIsIl9yZWdpc3RlclJlcyIsImVycm9yIiwidW5kZWZpbmVkIiwiX2xvZ2luUmVzIiwiY29uc29sZSIsImxvZyIsIm9uTG9naW5Vc2VyIiwibG9jYXRpb24iLCJoYXNoIiwibWVzc2FnZSIsImlucHV0IiwicGFkZGluZyIsIkNvbXBvbmVudCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUEsUTs7O0FBRUosb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxvSEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsY0FBTCxHQUFzQixNQUFLQSxjQUFMLENBQW9CQyxJQUFwQixPQUF0QjtBQUNBLFVBQUtDLE9BQUwsR0FBZSxNQUFLQSxPQUFMLENBQWFELElBQWIsT0FBZjtBQUNBLFVBQUtFLEtBQUwsR0FBYTtBQUNYQyxxQkFBZTtBQURKLEtBQWI7QUFKaUI7QUFPbEI7Ozs7OEJBRVM7QUFDUixXQUFLQyxRQUFMLENBQWMsRUFBRUQsZUFBZSxFQUFqQixFQUFkO0FBQ0Q7OzttQ0FFY0UsQyxFQUFHO0FBQUE7O0FBQ2hCQSxRQUFFQyxjQUFGO0FBRGdCLFVBRVZDLFFBRlUsR0FFMkIsSUFGM0IsQ0FFVkEsUUFGVTtBQUFBLFVBRUFDLEtBRkEsR0FF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T0FBckI7QUFDQSxrQkFBSyxVQURMLEVBQ2dCLElBQUcsVUFEbkIsRUFDOEIsS0FBSyxhQUFDeUIsS0FBRCxFQUFXO0FBQUUscUJBQUtoQixRQUFMLEdBQWdCZ0IsS0FBaEI7QUFBd0IsYUFEeEUsR0FERjtBQUdFO0FBQUE7QUFBQSxjQUFPLFNBQUksVUFBWDtBQUFBO0FBQUE7QUFIRixTQWpCRjtBQXNCSSxhQUFLeEIsS0FBTCxDQUFXQyxhQUFYLEtBQTZCLEVBQTdCLEdBQWtDLEVBQWxDLEdBQ0Y7QUFBQTtBQUFBLFlBQUssV0FBVSxVQUFmLEVBQTBCLE9BQU8sRUFBRXdCLFNBQVMsVUFBWCxFQUFqQztBQUEyRCxlQUFLekIsS0FBTCxDQUFXQztBQUF0RSxTQXZCRjtBQXdCRTtBQUFBO0FBQUE7QUFDQSxxQkFBVyxLQUFLSixjQURoQjtBQUVBLHVCQUFVLHlDQUZWO0FBQUE7QUFBQSxTQXhCRjtBQTRCRTtBQUFBO0FBQUEsWUFBRyxXQUFVLG1EQUFiO0FBQ0Usa0JBQUssUUFEUDtBQUFBO0FBQUE7QUE1QkYsT0FERjtBQWlDRDs7OztFQXhGb0IsZ0JBQU02QixTOztBQTBGN0IsSUFBTUMscUJBQXFCLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRCxFQUFjO0FBQ3ZDLFNBQU87QUFDTFIsaUJBQWE7QUFBQSxhQUFRUSxTQUFTLHlCQUFVakIsSUFBVixDQUFULENBQVI7QUFBQTtBQURSLEdBQVA7QUFHRCxDQUpEOztrQkFNZSx5QkFBUSxJQUFSLEVBQWNnQixrQkFBZCxFQUFrQ2hDLFFBQWxDLEMiLCJmaWxlIjoiMC5jZTNiM2EyZjFmMzQ5NGNmODQ0Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgRm9ybSBmcm9tICcuL2Zvcm0nO1xuaW1wb3J0IGxvZ2luVXNlciBmcm9tICcuLi8uLi9hY3Rpb25zL2xvZ2luVXNlcic7XG5pbXBvcnQgYXBpIGZyb20gJy4uL2hlbHBlcnMvYXBpJztcblxuY2xhc3MgUmVnaXN0ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMub25SZWdpc3RlclVzZXIgPSB0aGlzLm9uUmVnaXN0ZXJVc2VyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkZvY3VzID0gdGhpcy5vbkZvY3VzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGVycm9yX21lc3NhZ2U6ICcnXG4gICAgfTtcbiAgfVxuXG4gIG9uRm9jdXMoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yX21lc3NhZ2U6ICcnIH0pO1xuICB9XG5cbiAgb25SZWdpc3RlclVzZXIoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgeyB1c2VybmFtZSwgZW1haWwsIHBob25lLCBwYXNzd29yZCB9ID0gdGhpcztcbiAgICB1c2VybmFtZSA9IHVzZXJuYW1lLnZhbHVlLnRyaW0oKTtcbiAgICBlbWFpbCA9IGVtYWlsLnZhbHVlLnRyaW0oKTtcbiAgICBwaG9uZSA9IHBob25lLnZhbHVlLnRyaW0oKTtcbiAgICBwYXNzd29yZCA9IHBhc3N3b3JkLnZhbHVlO1xuICAgIGNvbnN0IHVzZXIgPSB7XG4gICAgICB1c2VybmFtZSxcbiAgICAgIGVtYWlsLFxuICAgICAgcGhvbmUsXG4gICAgICBwYXNzd29yZFxuICAgIH07XG4gICAgaWYgKHVzZXJuYW1lID09PSAnJyB8fCBlbWFpbCA9PT0gJycgfHwgcGhvbmUgPT09ICcnIHx8IHBhc3N3b3JkID09PSAnJykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yX21lc3NhZ2U6ICdFcnJvcjogT25lIG9yIG1vcmUgZmllbGRzIGFyZSBlbXB0eScgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHVzZXJTdHJpbmcgPSBgdXNlcm5hbWU9JHt1c2VybmFtZX0mZW1haWw9JHtlbWFpbH0mcGFzc3dvcmQ9JHtwYXNzd29yZH0mcGhvbmU9JHtwaG9uZX1gO1xuICAgIGFwaSh1c2VyU3RyaW5nLCAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS91c2VycycsICdQT1NUJykudGhlbihcbiAgICAgIChfcmVnaXN0ZXJSZXMpID0+IHtcbiAgICAgICAgaWYgKF9yZWdpc3RlclJlcy5lcnJvciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgYXBpKHVzZXJTdHJpbmcsICdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3NpZ25pbicsICdQT1NUJykudGhlbihcbiAgICAgICAgICAgIChfbG9naW5SZXMpID0+IHtcbiAgICAgICAgICAgICAgaWYgKF9sb2dpblJlcy5lcnJvciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coX2xvZ2luUmVzKTtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uTG9naW5Vc2VyKHVzZXIpO1xuICAgICAgICAgICAgICAgIGxvY2F0aW9uLmhhc2ggPSAnI2Rhc2hib2FyZCc7XG4gICAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JfbWVzc2FnZTogX3JlZ2lzdGVyUmVzLmVycm9yLm1lc3NhZ2UgfSk7XG4gICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcl9tZXNzYWdlOiBfcmVnaXN0ZXJSZXMuZXJyb3IubWVzc2FnZSB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxGb3JtIHRpdGxlPSdDcmVhdGUgYSBuZXcgYWNjb3VudCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1maWVsZCc+XG4gICAgICAgICAgPGlucHV0IG9uRm9jdXM9e3RoaXMub25Gb2N1c31cbiAgICAgICAgICB0eXBlPSd0ZXh0JyBpZD0ndXNlcm5hbWUnXG4gICAgICAgICAgcmVmID0geyhpbnB1dCkgPT4geyB0aGlzLnVzZXJuYW1lID0gaW5wdXQ7IH19IC8+XG4gICAgICAgICAgPGxhYmVsIGZvcj0ndXNlcm5hbWUnPlVzZXJuYW1lPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1maWVsZCc+XG4gICAgICAgICAgPGlucHV0IG9uRm9jdXM9e3RoaXMub25Gb2N1c31cbiAgICAgICAgICB0eXBlPSdlbWFpbCcgaWQ9J2VtYWlsJyByZWY9eyhpbnB1dCkgPT4geyB0aGlzLmVtYWlsID0gaW5wdXQ7IH19Lz5cbiAgICAgICAgICA8bGFiZWwgZm9yPSdlbWFpbCc+RW1haWw8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2lucHV0LWZpZWxkJz5cbiAgICAgICAgICA8aW5wdXQgb25Gb2N1cz17dGhpcy5vbkZvY3VzfVxuICAgICAgICAgIHR5cGU9J3RleHQnIGlkPSdwaG9uZScgcmVmPXsoaW5wdXQpID0+IHsgdGhpcy5waG9uZSA9IGlucHV0OyB9fS8+XG4gICAgICAgICAgPGxhYmVsIGZvcj0ncGhvbmUnPlBob25lPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1maWVsZCc+XG4gICAgICAgICAgPGlucHV0IG9uRm9jdXM9e3RoaXMub25Gb2N1c31cbiAgICAgICAgICB0eXBlPSdwYXNzd29yZCcgaWQ9J3Bhc3N3b3JkJyByZWY9eyhpbnB1dCkgPT4geyB0aGlzLnBhc3N3b3JkID0gaW5wdXQ7IH19Lz5cbiAgICAgICAgICA8bGFiZWwgZm9yPSdwYXNzd29yZCc+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgeyB0aGlzLnN0YXRlLmVycm9yX21lc3NhZ2UgPT09ICcnID8gJycgOlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVkIGNhcmQnIHN0eWxlPXt7IHBhZGRpbmc6ICc1cHggMTBweCcgfX0+e3RoaXMuc3RhdGUuZXJyb3JfbWVzc2FnZX08L2Rpdj59XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgb25DbGljaz0geyB0aGlzLm9uUmVnaXN0ZXJVc2VyIH1cbiAgICAgICAgY2xhc3NOYW1lPSd3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHQgYnRuIGFjdGlvbi1idG4nPlxuICAgICAgICBSZWdpc3RlcjwvYnV0dG9uPlxuICAgICAgICA8YSBjbGFzc05hbWU9J3JpZ2h0IHdhdmVzLWVmZmVjdCB3YXZlcy10ZWFsIGJ0bi1mbGF0IGFjdGlvbi1idG4nXG4gICAgICAgICAgaHJlZj0nI2xvZ2luJz5Mb2dpbjwvYT5cbiAgICAgIDwvRm9ybT5cbiAgICApO1xuICB9XG59XG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBvbkxvZ2luVXNlcjogdXNlciA9PiBkaXNwYXRjaChsb2dpblVzZXIodXNlcikpXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIG1hcERpc3BhdGNoVG9Qcm9wcykoUmVnaXN0ZXIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2pzL2NvbXBvbmVudHMvcHJlc2VudGF0aW9uYWwvcmVnaXN0ZXIuanMiXSwic291cmNlUm9vdCI6IiJ9