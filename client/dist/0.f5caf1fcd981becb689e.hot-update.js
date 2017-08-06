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

var _reactRedux = __webpack_require__(19);

var _form = __webpack_require__(27);

var _form2 = _interopRequireDefault(_form);

var _loginUser = __webpack_require__(44);

var _loginUser2 = _interopRequireDefault(_loginUser);

var _api = __webpack_require__(16);

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
              _this2.props.onLoginUser(JSON.stringify(_loginRes));
              sessionStorage.setItem('user', JSON.stringify(_loginRes));
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
        { title: 'Create a new account', sidemenu: false },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9yZWdpc3Rlci5qcz8zNzNiIl0sIm5hbWVzIjpbIlJlZ2lzdGVyIiwicHJvcHMiLCJvblJlZ2lzdGVyVXNlciIsImJpbmQiLCJvbkZvY3VzIiwic3RhdGUiLCJlcnJvcl9tZXNzYWdlIiwic2V0U3RhdGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJ1c2VybmFtZSIsImVtYWlsIiwicGhvbmUiLCJwYXNzd29yZCIsInZhbHVlIiwidHJpbSIsInVzZXIiLCJ1c2VyU3RyaW5nIiwidGhlbiIsIl9yZWdpc3RlclJlcyIsImVycm9yIiwidW5kZWZpbmVkIiwiX2xvZ2luUmVzIiwib25Mb2dpblVzZXIiLCJKU09OIiwic3RyaW5naWZ5Iiwic2Vzc2lvblN0b3JhZ2UiLCJzZXRJdGVtIiwibG9jYXRpb24iLCJoYXNoIiwibWVzc2FnZSIsImlucHV0IiwicGFkZGluZyIsIkNvbXBvbmVudCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUEsUTs7O0FBRUosb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxvSEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsY0FBTCxHQUFzQixNQUFLQSxjQUFMLENBQW9CQyxJQUFwQixPQUF0QjtBQUNBLFVBQUtDLE9BQUwsR0FBZSxNQUFLQSxPQUFMLENBQWFELElBQWIsT0FBZjtBQUNBLFVBQUtFLEtBQUwsR0FBYTtBQUNYQyxxQkFBZTtBQURKLEtBQWI7QUFKaUI7QUFPbEI7Ozs7OEJBRVM7QUFDUixXQUFLQyxRQUFMLENBQWMsRUFBRUQsZUFBZSxFQUFqQixFQUFkO0FBQ0Q7OzttQ0FFY0UsQyxFQUFHO0FBQUE7O0FBQ2hCQSxRQUFFQyxjQUFGO0FBRGdCLFVBRVZDLFFBRlUsR0FFMkIsSUFGM0Is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YW1CLEtBQWI7QUFBcUIsYUFEOUQsR0FERjtBQUdFO0FBQUE7QUFBQSxjQUFPLFNBQUksT0FBWDtBQUFBO0FBQUE7QUFIRixTQVpGO0FBaUJFO0FBQUE7QUFBQSxZQUFLLFdBQVUsYUFBZjtBQUNFLG1EQUFPLFNBQVMsS0FBSzNCLE9BQXJCO0FBQ0Esa0JBQUssVUFETCxFQUNnQixJQUFHLFVBRG5CLEVBQzhCLEtBQUssYUFBQzJCLEtBQUQsRUFBVztBQUFFLHFCQUFLbEIsUUFBTCxHQUFnQmtCLEtBQWhCO0FBQXdCLGFBRHhFLEdBREY7QUFHRTtBQUFBO0FBQUEsY0FBTyxTQUFJLFVBQVg7QUFBQTtBQUFBO0FBSEYsU0FqQkY7QUFzQkksYUFBSzFCLEtBQUwsQ0FBV0MsYUFBWCxLQUE2QixFQUE3QixHQUFrQyxFQUFsQyxHQUNGO0FBQUE7QUFBQSxZQUFLLFdBQVUsVUFBZixFQUEwQixPQUFPLEVBQUUwQixTQUFTLFVBQVgsRUFBakM7QUFBMkQsZUFBSzNCLEtBQUwsQ0FBV0M7QUFBdEUsU0F2QkY7QUF3QkU7QUFBQTtBQUFBO0FBQ0EscUJBQVcsS0FBS0osY0FEaEI7QUFFQSx1QkFBVSx5Q0FGVjtBQUFBO0FBQUEsU0F4QkY7QUE0QkU7QUFBQTtBQUFBLFlBQUcsV0FBVSxtREFBYjtBQUNFLGtCQUFLLFFBRFA7QUFBQTtBQUFBO0FBNUJGLE9BREY7QUFpQ0Q7Ozs7RUF4Rm9CLGdCQUFNK0IsUzs7QUEwRjdCLElBQU1DLHFCQUFxQixTQUFyQkEsa0JBQXFCLENBQUNDLFFBQUQsRUFBYztBQUN2QyxTQUFPO0FBQ0xaLGlCQUFhO0FBQUEsYUFBUVksU0FBUyx5QkFBVW5CLElBQVYsQ0FBVCxDQUFSO0FBQUE7QUFEUixHQUFQO0FBR0QsQ0FKRDs7a0JBTWUseUJBQVEsSUFBUixFQUFja0Isa0JBQWQsRUFBa0NsQyxRQUFsQyxDIiwiZmlsZSI6IjAuZjVjYWYxZmNkOTgxYmVjYjY4OWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IEZvcm0gZnJvbSAnLi9mb3JtJztcbmltcG9ydCBsb2dpblVzZXIgZnJvbSAnLi4vLi4vYWN0aW9ucy9sb2dpblVzZXInO1xuaW1wb3J0IGFwaSBmcm9tICcuLi9oZWxwZXJzL2FwaSc7XG5cbmNsYXNzIFJlZ2lzdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLm9uUmVnaXN0ZXJVc2VyID0gdGhpcy5vblJlZ2lzdGVyVXNlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25Gb2N1cyA9IHRoaXMub25Gb2N1cy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBlcnJvcl9tZXNzYWdlOiAnJ1xuICAgIH07XG4gIH1cblxuICBvbkZvY3VzKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcl9tZXNzYWdlOiAnJyB9KTtcbiAgfVxuXG4gIG9uUmVnaXN0ZXJVc2VyKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IHsgdXNlcm5hbWUsIGVtYWlsLCBwaG9uZSwgcGFzc3dvcmQgfSA9IHRoaXM7XG4gICAgdXNlcm5hbWUgPSB1c2VybmFtZS52YWx1ZS50cmltKCk7XG4gICAgZW1haWwgPSBlbWFpbC52YWx1ZS50cmltKCk7XG4gICAgcGhvbmUgPSBwaG9uZS52YWx1ZS50cmltKCk7XG4gICAgcGFzc3dvcmQgPSBwYXNzd29yZC52YWx1ZTtcbiAgICBjb25zdCB1c2VyID0ge1xuICAgICAgdXNlcm5hbWUsXG4gICAgICBlbWFpbCxcbiAgICAgIHBob25lLFxuICAgICAgcGFzc3dvcmRcbiAgICB9O1xuICAgIGlmICh1c2VybmFtZSA9PT0gJycgfHwgZW1haWwgPT09ICcnIHx8IHBob25lID09PSAnJyB8fCBwYXNzd29yZCA9PT0gJycpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcl9tZXNzYWdlOiAnRXJyb3I6IE9uZSBvciBtb3JlIGZpZWxkcyBhcmUgZW1wdHknIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB1c2VyU3RyaW5nID0gYHVzZXJuYW1lPSR7dXNlcm5hbWV9JmVtYWlsPSR7ZW1haWx9JnBhc3N3b3JkPSR7cGFzc3dvcmR9JnBob25lPSR7cGhvbmV9YDtcbiAgICBhcGkodXNlclN0cmluZywgJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdXNlcnMnLCAnUE9TVCcsIG51bGwpLnRoZW4oXG4gICAgICAoX3JlZ2lzdGVyUmVzKSA9PiB7XG4gICAgICAgIGlmIChfcmVnaXN0ZXJSZXMuZXJyb3IgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGFwaSh1c2VyU3RyaW5nLCAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9zaWduaW4nLCAnUE9TVCcsIG51bGwpLnRoZW4oXG4gICAgICAgICAgICAoX2xvZ2luUmVzKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChfbG9naW5SZXMuZXJyb3IgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25Mb2dpblVzZXIoSlNPTi5zdHJpbmdpZnkoX2xvZ2luUmVzKSk7XG4gICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgndXNlcicsIEpTT04uc3RyaW5naWZ5KF9sb2dpblJlcykpO1xuICAgICAgICAgICAgICAgIGxvY2F0aW9uLmhhc2ggPSAnI2Rhc2hib2FyZCc7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yX21lc3NhZ2U6IF9sb2dpblJlcy5lcnJvci5tZXNzYWdlIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JfbWVzc2FnZTogX3JlZ2lzdGVyUmVzLmVycm9yLm1lc3NhZ2UgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybSB0aXRsZT0nQ3JlYXRlIGEgbmV3IGFjY291bnQnIHNpZGVtZW51PXtmYWxzZX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1maWVsZCc+XG4gICAgICAgICAgPGlucHV0IG9uRm9jdXM9e3RoaXMub25Gb2N1c31cbiAgICAgICAgICB0eXBlPSd0ZXh0JyBpZD0ndXNlcm5hbWUnXG4gICAgICAgICAgcmVmID0geyhpbnB1dCkgPT4geyB0aGlzLnVzZXJuYW1lID0gaW5wdXQ7IH19IC8+XG4gICAgICAgICAgPGxhYmVsIGZvcj0ndXNlcm5hbWUnPlVzZXJuYW1lPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1maWVsZCc+XG4gICAgICAgICAgPGlucHV0IG9uRm9jdXM9e3RoaXMub25Gb2N1c31cbiAgICAgICAgICB0eXBlPSdlbWFpbCcgaWQ9J2VtYWlsJyByZWY9eyhpbnB1dCkgPT4geyB0aGlzLmVtYWlsID0gaW5wdXQ7IH19Lz5cbiAgICAgICAgICA8bGFiZWwgZm9yPSdlbWFpbCc+RW1haWw8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2lucHV0LWZpZWxkJz5cbiAgICAgICAgICA8aW5wdXQgb25Gb2N1cz17dGhpcy5vbkZvY3VzfVxuICAgICAgICAgIHR5cGU9J3RleHQnIGlkPSdwaG9uZScgcmVmPXsoaW5wdXQpID0+IHsgdGhpcy5waG9uZSA9IGlucHV0OyB9fS8+XG4gICAgICAgICAgPGxhYmVsIGZvcj0ncGhvbmUnPlBob25lPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1maWVsZCc+XG4gICAgICAgICAgPGlucHV0IG9uRm9jdXM9e3RoaXMub25Gb2N1c31cbiAgICAgICAgICB0eXBlPSdwYXNzd29yZCcgaWQ9J3Bhc3N3b3JkJyByZWY9eyhpbnB1dCkgPT4geyB0aGlzLnBhc3N3b3JkID0gaW5wdXQ7IH19Lz5cbiAgICAgICAgICA8bGFiZWwgZm9yPSdwYXNzd29yZCc+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgeyB0aGlzLnN0YXRlLmVycm9yX21lc3NhZ2UgPT09ICcnID8gJycgOlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVkIGNhcmQnIHN0eWxlPXt7IHBhZGRpbmc6ICc1cHggMTBweCcgfX0+e3RoaXMuc3RhdGUuZXJyb3JfbWVzc2FnZX08L2Rpdj59XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgb25DbGljaz0geyB0aGlzLm9uUmVnaXN0ZXJVc2VyIH1cbiAgICAgICAgY2xhc3NOYW1lPSd3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHQgYnRuIGFjdGlvbi1idG4nPlxuICAgICAgICBSZWdpc3RlcjwvYnV0dG9uPlxuICAgICAgICA8YSBjbGFzc05hbWU9J3JpZ2h0IHdhdmVzLWVmZmVjdCB3YXZlcy10ZWFsIGJ0bi1mbGF0IGFjdGlvbi1idG4nXG4gICAgICAgICAgaHJlZj0nI2xvZ2luJz5Mb2dpbjwvYT5cbiAgICAgIDwvRm9ybT5cbiAgICApO1xuICB9XG59XG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBvbkxvZ2luVXNlcjogdXNlciA9PiBkaXNwYXRjaChsb2dpblVzZXIodXNlcikpXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIG1hcERpc3BhdGNoVG9Qcm9wcykoUmVnaXN0ZXIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2pzL2NvbXBvbmVudHMvcHJlc2VudGF0aW9uYWwvcmVnaXN0ZXIuanMiXSwic291cmNlUm9vdCI6IiJ9