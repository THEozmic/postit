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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9yZWdpc3Rlci5qcz8zNzNiIl0sIm5hbWVzIjpbIlJlZ2lzdGVyIiwicHJvcHMiLCJvblJlZ2lzdGVyVXNlciIsImJpbmQiLCJvbkZvY3VzIiwic3RhdGUiLCJlcnJvcl9tZXNzYWdlIiwic2V0U3RhdGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJ1c2VybmFtZSIsImVtYWlsIiwicGhvbmUiLCJwYXNzd29yZCIsInZhbHVlIiwidHJpbSIsInVzZXIiLCJ1c2VyU3RyaW5nIiwidGhlbiIsIl9yZWdpc3RlclJlcyIsImVycm9yIiwidW5kZWZpbmVkIiwiX2xvZ2luUmVzIiwiY29uc29sZSIsImxvZyIsIm9uTG9naW5Vc2VyIiwic2Vzc2lvblN0b3JhZ2UiLCJzZXRJdGVtIiwibG9jYXRpb24iLCJoYXNoIiwibWVzc2FnZSIsImlucHV0IiwicGFkZGluZyIsIkNvbXBvbmVudCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUEsUTs7O0FBRUosb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxvSEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsY0FBTCxHQUFzQixNQUFLQSxjQUFMLENBQW9CQyxJQUFwQixPQUF0QjtBQUNBLFVBQUtDLE9BQUwsR0FBZSxNQUFLQSxPQUFMLENBQWFELElBQWIsT0FBZjtBQUNBLFVBQUtFLEtBQUwsR0FBYTtBQUNYQyxxQkFBZTtBQURKLEtBQWI7QUFKaUI7QUFPbEI7Ozs7OEJBRVM7QUFDUixXQUFLQyxRQUFMLENBQWMsRUFBRUQsZUFBZSxFQUFqQixFQUFkO0FBQ0Q7OzttQ0FFY0UsQyxFQUFHO0FBQUE7O0FBQ2hCQSxRQUFFQyxjQUFGO0FBRGdCLFVBRVZDLFFBRlUsR0FFMkIsSUFGM0IsQ0FF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QTtBQUFBO0FBSEYsU0FaRjtBQWlCRTtBQUFBO0FBQUEsWUFBSyxXQUFVLGFBQWY7QUFDRSxtREFBTyxTQUFTLEtBQUszQixPQUFyQjtBQUNBLGtCQUFLLFVBREwsRUFDZ0IsSUFBRyxVQURuQixFQUM4QixLQUFLLGFBQUMyQixLQUFELEVBQVc7QUFBRSxxQkFBS2xCLFFBQUwsR0FBZ0JrQixLQUFoQjtBQUF3QixhQUR4RSxHQURGO0FBR0U7QUFBQTtBQUFBLGNBQU8sU0FBSSxVQUFYO0FBQUE7QUFBQTtBQUhGLFNBakJGO0FBc0JJLGFBQUsxQixLQUFMLENBQVdDLGFBQVgsS0FBNkIsRUFBN0IsR0FBa0MsRUFBbEMsR0FDRjtBQUFBO0FBQUEsWUFBSyxXQUFVLFVBQWYsRUFBMEIsT0FBTyxFQUFFMEIsU0FBUyxVQUFYLEVBQWpDO0FBQTJELGVBQUszQixLQUFMLENBQVdDO0FBQXRFLFNBdkJGO0FBd0JFO0FBQUE7QUFBQTtBQUNBLHFCQUFXLEtBQUtKLGNBRGhCO0FBRUEsdUJBQVUseUNBRlY7QUFBQTtBQUFBLFNBeEJGO0FBNEJFO0FBQUE7QUFBQSxZQUFHLFdBQVUsbURBQWI7QUFDRSxrQkFBSyxRQURQO0FBQUE7QUFBQTtBQTVCRixPQURGO0FBaUNEOzs7O0VBekZvQixnQkFBTStCLFM7O0FBMkY3QixJQUFNQyxxQkFBcUIsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFELEVBQWM7QUFDdkMsU0FBTztBQUNMVixpQkFBYTtBQUFBLGFBQVFVLFNBQVMseUJBQVVuQixJQUFWLENBQVQsQ0FBUjtBQUFBO0FBRFIsR0FBUDtBQUdELENBSkQ7O2tCQU1lLHlCQUFRLElBQVIsRUFBY2tCLGtCQUFkLEVBQWtDbEMsUUFBbEMsQyIsImZpbGUiOiIwLjQwNGI5ZWYyOTYwMzQyZGQ1NDY2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBGb3JtIGZyb20gJy4vZm9ybSc7XG5pbXBvcnQgbG9naW5Vc2VyIGZyb20gJy4uLy4uL2FjdGlvbnMvbG9naW5Vc2VyJztcbmltcG9ydCBhcGkgZnJvbSAnLi4vaGVscGVycy9hcGknO1xuXG5jbGFzcyBSZWdpc3RlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5vblJlZ2lzdGVyVXNlciA9IHRoaXMub25SZWdpc3RlclVzZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uRm9jdXMgPSB0aGlzLm9uRm9jdXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZXJyb3JfbWVzc2FnZTogJydcbiAgICB9O1xuICB9XG5cbiAgb25Gb2N1cygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JfbWVzc2FnZTogJycgfSk7XG4gIH1cblxuICBvblJlZ2lzdGVyVXNlcihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCB7IHVzZXJuYW1lLCBlbWFpbCwgcGhvbmUsIHBhc3N3b3JkIH0gPSB0aGlzO1xuICAgIHVzZXJuYW1lID0gdXNlcm5hbWUudmFsdWUudHJpbSgpO1xuICAgIGVtYWlsID0gZW1haWwudmFsdWUudHJpbSgpO1xuICAgIHBob25lID0gcGhvbmUudmFsdWUudHJpbSgpO1xuICAgIHBhc3N3b3JkID0gcGFzc3dvcmQudmFsdWU7XG4gICAgY29uc3QgdXNlciA9IHtcbiAgICAgIHVzZXJuYW1lLFxuICAgICAgZW1haWwsXG4gICAgICBwaG9uZSxcbiAgICAgIHBhc3N3b3JkXG4gICAgfTtcbiAgICBpZiAodXNlcm5hbWUgPT09ICcnIHx8IGVtYWlsID09PSAnJyB8fCBwaG9uZSA9PT0gJycgfHwgcGFzc3dvcmQgPT09ICcnKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JfbWVzc2FnZTogJ0Vycm9yOiBPbmUgb3IgbW9yZSBmaWVsZHMgYXJlIGVtcHR5JyB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdXNlclN0cmluZyA9IGB1c2VybmFtZT0ke3VzZXJuYW1lfSZlbWFpbD0ke2VtYWlsfSZwYXNzd29yZD0ke3Bhc3N3b3JkfSZwaG9uZT0ke3Bob25lfWA7XG4gICAgYXBpKHVzZXJTdHJpbmcsICdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3VzZXJzJywgJ1BPU1QnKS50aGVuKFxuICAgICAgKF9yZWdpc3RlclJlcykgPT4ge1xuICAgICAgICBpZiAoX3JlZ2lzdGVyUmVzLmVycm9yID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBhcGkodXNlclN0cmluZywgJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvc2lnbmluJywgJ1BPU1QnKS50aGVuKFxuICAgICAgICAgICAgKF9sb2dpblJlcykgPT4ge1xuICAgICAgICAgICAgICBpZiAoX2xvZ2luUmVzLmVycm9yID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhfbG9naW5SZXMpO1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25Mb2dpblVzZXIodXNlcik7XG4gICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgndXNlcicsIF9sb2dpblJlcyk7XG4gICAgICAgICAgICAgICAgbG9jYXRpb24uaGFzaCA9ICcjZGFzaGJvYXJkJztcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JfbWVzc2FnZTogX2xvZ2luUmVzLmVycm9yLm1lc3NhZ2UgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcl9tZXNzYWdlOiBfcmVnaXN0ZXJSZXMuZXJyb3IubWVzc2FnZSB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxGb3JtIHRpdGxlPSdDcmVhdGUgYSBuZXcgYWNjb3VudCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1maWVsZCc+XG4gICAgICAgICAgPGlucHV0IG9uRm9jdXM9e3RoaXMub25Gb2N1c31cbiAgICAgICAgICB0eXBlPSd0ZXh0JyBpZD0ndXNlcm5hbWUnXG4gICAgICAgICAgcmVmID0geyhpbnB1dCkgPT4geyB0aGlzLnVzZXJuYW1lID0gaW5wdXQ7IH19IC8+XG4gICAgICAgICAgPGxhYmVsIGZvcj0ndXNlcm5hbWUnPlVzZXJuYW1lPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1maWVsZCc+XG4gICAgICAgICAgPGlucHV0IG9uRm9jdXM9e3RoaXMub25Gb2N1c31cbiAgICAgICAgICB0eXBlPSdlbWFpbCcgaWQ9J2VtYWlsJyByZWY9eyhpbnB1dCkgPT4geyB0aGlzLmVtYWlsID0gaW5wdXQ7IH19Lz5cbiAgICAgICAgICA8bGFiZWwgZm9yPSdlbWFpbCc+RW1haWw8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2lucHV0LWZpZWxkJz5cbiAgICAgICAgICA8aW5wdXQgb25Gb2N1cz17dGhpcy5vbkZvY3VzfVxuICAgICAgICAgIHR5cGU9J3RleHQnIGlkPSdwaG9uZScgcmVmPXsoaW5wdXQpID0+IHsgdGhpcy5waG9uZSA9IGlucHV0OyB9fS8+XG4gICAgICAgICAgPGxhYmVsIGZvcj0ncGhvbmUnPlBob25lPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1maWVsZCc+XG4gICAgICAgICAgPGlucHV0IG9uRm9jdXM9e3RoaXMub25Gb2N1c31cbiAgICAgICAgICB0eXBlPSdwYXNzd29yZCcgaWQ9J3Bhc3N3b3JkJyByZWY9eyhpbnB1dCkgPT4geyB0aGlzLnBhc3N3b3JkID0gaW5wdXQ7IH19Lz5cbiAgICAgICAgICA8bGFiZWwgZm9yPSdwYXNzd29yZCc+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgeyB0aGlzLnN0YXRlLmVycm9yX21lc3NhZ2UgPT09ICcnID8gJycgOlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVkIGNhcmQnIHN0eWxlPXt7IHBhZGRpbmc6ICc1cHggMTBweCcgfX0+e3RoaXMuc3RhdGUuZXJyb3JfbWVzc2FnZX08L2Rpdj59XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgb25DbGljaz0geyB0aGlzLm9uUmVnaXN0ZXJVc2VyIH1cbiAgICAgICAgY2xhc3NOYW1lPSd3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHQgYnRuIGFjdGlvbi1idG4nPlxuICAgICAgICBSZWdpc3RlcjwvYnV0dG9uPlxuICAgICAgICA8YSBjbGFzc05hbWU9J3JpZ2h0IHdhdmVzLWVmZmVjdCB3YXZlcy10ZWFsIGJ0bi1mbGF0IGFjdGlvbi1idG4nXG4gICAgICAgICAgaHJlZj0nI2xvZ2luJz5Mb2dpbjwvYT5cbiAgICAgIDwvRm9ybT5cbiAgICApO1xuICB9XG59XG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBvbkxvZ2luVXNlcjogdXNlciA9PiBkaXNwYXRjaChsb2dpblVzZXIodXNlcikpXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIG1hcERpc3BhdGNoVG9Qcm9wcykoUmVnaXN0ZXIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2pzL2NvbXBvbmVudHMvcHJlc2VudGF0aW9uYWwvcmVnaXN0ZXIuanMiXSwic291cmNlUm9vdCI6IiJ9