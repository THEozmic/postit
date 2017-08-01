webpackHotUpdate(0,{

/***/ 137:
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
      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      fetch('http://localhost:3000/api/users', { method: 'POST',
        body: userString,
        headers: headers
      }).then(function (response) {

        console.log(response, '==============>>>>');
        if (response.body.status === 200) {
          _this2.props.onLoginUser(user);
          location.hash = '#dashboard';
        } else {
          response = response.json();
          _this2.setState({ error_message: response.error.message });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9yZWdpc3Rlci5qcz8zNzNiIl0sIm5hbWVzIjpbIlJlZ2lzdGVyIiwicHJvcHMiLCJvblJlZ2lzdGVyVXNlciIsImJpbmQiLCJvbkZvY3VzIiwic3RhdGUiLCJlcnJvcl9tZXNzYWdlIiwic2V0U3RhdGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJ1c2VybmFtZSIsImVtYWlsIiwicGhvbmUiLCJwYXNzd29yZCIsInZhbHVlIiwidHJpbSIsInVzZXIiLCJ1c2VyU3RyaW5nIiwiaGVhZGVycyIsIkhlYWRlcnMiLCJhcHBlbmQiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwib25Mb2dpblVzZXIiLCJsb2NhdGlvbiIsImhhc2giLCJqc29uIiwiZXJyb3IiLCJtZXNzYWdlIiwiaW5wdXQiLCJwYWRkaW5nIiwiQ29tcG9uZW50IiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUEsUTs7O0FBRUosb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxvSEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsY0FBTCxHQUFzQixNQUFLQSxjQUFMLENBQW9CQyxJQUFwQixPQUF0QjtBQUNBLFVBQUtDLE9BQUwsR0FBZSxNQUFLQSxPQUFMLENBQWFELElBQWIsT0FBZjtBQUNBLFVBQUtFLEtBQUwsR0FBYTtBQUNYQyxxQkFBZTtBQURKLEtBQWI7QUFKaUI7QUFPbEI7Ozs7OEJBRVM7QUFDUixXQUFLQyxRQUFMLENBQWMsRUFBRUQsZUFBZSxFQUFqQixFQUFkO0FBQ0Q7OzttQ0FFY0UsQyxFQUFHO0FBQUE7O0FBQ2hCQSxRQUFFQyxjQUFGO0FBRGdCLFVBRVZDLFFBRlUsR0FFMkIsSUFG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Q2dCLElBQUcsVUFEbkIsRUFDOEIsS0FBSyxhQUFDK0IsS0FBRCxFQUFXO0FBQUUscUJBQUt0QixRQUFMLEdBQWdCc0IsS0FBaEI7QUFBd0IsYUFEeEUsR0FERjtBQUdFO0FBQUE7QUFBQSxjQUFPLFNBQUksVUFBWDtBQUFBO0FBQUE7QUFIRixTQWpCRjtBQXNCSSxhQUFLOUIsS0FBTCxDQUFXQyxhQUFYLEtBQTZCLEVBQTdCLEdBQWtDLEVBQWxDLEdBQ0Y7QUFBQTtBQUFBLFlBQUssV0FBVSxVQUFmLEVBQTBCLE9BQU8sRUFBRThCLFNBQVMsVUFBWCxFQUFqQztBQUEyRCxlQUFLL0IsS0FBTCxDQUFXQztBQUF0RSxTQXZCRjtBQXdCRTtBQUFBO0FBQUE7QUFDQSxxQkFBVyxLQUFLSixjQURoQjtBQUVBLHVCQUFVLHlDQUZWO0FBQUE7QUFBQSxTQXhCRjtBQTRCRTtBQUFBO0FBQUEsWUFBRyxXQUFVLG1EQUFiO0FBQ0Usa0JBQUssUUFEUDtBQUFBO0FBQUE7QUE1QkYsT0FERjtBQWlDRDs7OztFQXRGb0IsZ0JBQU1tQyxTOztBQXdGN0IsSUFBTUMscUJBQXFCLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRCxFQUFjO0FBQ3ZDLFNBQU87QUFDTFYsaUJBQWE7QUFBQSxhQUFRVSxTQUFTLHlCQUFVdkIsSUFBVixDQUFULENBQVI7QUFBQTtBQURSLEdBQVA7QUFHRCxDQUpEOztrQkFNZSx5QkFBUSxJQUFSLEVBQWNzQixrQkFBZCxFQUFrQ3RDLFFBQWxDLEMiLCJmaWxlIjoiMC44YzEwZmNkNDM5NzVmOTM4ZDk2MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgRm9ybSBmcm9tICcuL2Zvcm0nO1xuaW1wb3J0IGxvZ2luVXNlciBmcm9tICcuLi8uLi9hY3Rpb25zL2xvZ2luVXNlcic7XG5cbmNsYXNzIFJlZ2lzdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLm9uUmVnaXN0ZXJVc2VyID0gdGhpcy5vblJlZ2lzdGVyVXNlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25Gb2N1cyA9IHRoaXMub25Gb2N1cy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBlcnJvcl9tZXNzYWdlOiAnJ1xuICAgIH07XG4gIH1cblxuICBvbkZvY3VzKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcl9tZXNzYWdlOiAnJyB9KTtcbiAgfVxuXG4gIG9uUmVnaXN0ZXJVc2VyKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IHsgdXNlcm5hbWUsIGVtYWlsLCBwaG9uZSwgcGFzc3dvcmQgfSA9IHRoaXM7XG4gICAgdXNlcm5hbWUgPSB1c2VybmFtZS52YWx1ZS50cmltKCk7XG4gICAgZW1haWwgPSBlbWFpbC52YWx1ZS50cmltKCk7XG4gICAgcGhvbmUgPSBwaG9uZS52YWx1ZS50cmltKCk7XG4gICAgcGFzc3dvcmQgPSBwYXNzd29yZC52YWx1ZTtcbiAgICBjb25zdCB1c2VyID0ge1xuICAgICAgdXNlcm5hbWUsXG4gICAgICBlbWFpbCxcbiAgICAgIHBob25lLFxuICAgICAgcGFzc3dvcmRcbiAgICB9O1xuICAgIGlmICh1c2VybmFtZSA9PT0gJycgfHwgZW1haWwgPT09ICcnIHx8IHBob25lID09PSAnJyB8fCBwYXNzd29yZCA9PT0gJycpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcl9tZXNzYWdlOiAnRXJyb3I6IE9uZSBvciBtb3JlIGZpZWxkcyBhcmUgZW1wdHknIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB1c2VyU3RyaW5nID0gYHVzZXJuYW1lPSR7dXNlcm5hbWV9JmVtYWlsPSR7ZW1haWx9JnBhc3N3b3JkPSR7cGFzc3dvcmR9JnBob25lPSR7cGhvbmV9YDtcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3VzZXJzJywgeyBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IHVzZXJTdHJpbmcsXG4gICAgICBoZWFkZXJzXG4gICAgfSlcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIFxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UsICc9PT09PT09PT09PT09PT4+Pj4nKTtcbiAgICAgIGlmIChyZXNwb25zZS5ib2R5LnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25Mb2dpblVzZXIodXNlcik7XG4gICAgICAgIGxvY2F0aW9uLmhhc2ggPSAnI2Rhc2hib2FyZCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNwb25zZSA9IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yX21lc3NhZ2U6IHJlc3BvbnNlLmVycm9yLm1lc3NhZ2UgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxGb3JtIHRpdGxlPSdDcmVhdGUgYSBuZXcgYWNjb3VudCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1maWVsZCc+XG4gICAgICAgICAgPGlucHV0IG9uRm9jdXM9e3RoaXMub25Gb2N1c31cbiAgICAgICAgICB0eXBlPSd0ZXh0JyBpZD0ndXNlcm5hbWUnXG4gICAgICAgICAgcmVmID0geyhpbnB1dCkgPT4geyB0aGlzLnVzZXJuYW1lID0gaW5wdXQ7IH19IC8+XG4gICAgICAgICAgPGxhYmVsIGZvcj0ndXNlcm5hbWUnPlVzZXJuYW1lPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1maWVsZCc+XG4gICAgICAgICAgPGlucHV0IG9uRm9jdXM9e3RoaXMub25Gb2N1c31cbiAgICAgICAgICB0eXBlPSdlbWFpbCcgaWQ9J2VtYWlsJyByZWY9eyhpbnB1dCkgPT4geyB0aGlzLmVtYWlsID0gaW5wdXQ7IH19Lz5cbiAgICAgICAgICA8bGFiZWwgZm9yPSdlbWFpbCc+RW1haWw8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2lucHV0LWZpZWxkJz5cbiAgICAgICAgICA8aW5wdXQgb25Gb2N1cz17dGhpcy5vbkZvY3VzfVxuICAgICAgICAgIHR5cGU9J3RleHQnIGlkPSdwaG9uZScgcmVmPXsoaW5wdXQpID0+IHsgdGhpcy5waG9uZSA9IGlucHV0OyB9fS8+XG4gICAgICAgICAgPGxhYmVsIGZvcj0ncGhvbmUnPlBob25lPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1maWVsZCc+XG4gICAgICAgICAgPGlucHV0IG9uRm9jdXM9e3RoaXMub25Gb2N1c31cbiAgICAgICAgICB0eXBlPSdwYXNzd29yZCcgaWQ9J3Bhc3N3b3JkJyByZWY9eyhpbnB1dCkgPT4geyB0aGlzLnBhc3N3b3JkID0gaW5wdXQ7IH19Lz5cbiAgICAgICAgICA8bGFiZWwgZm9yPSdwYXNzd29yZCc+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgeyB0aGlzLnN0YXRlLmVycm9yX21lc3NhZ2UgPT09ICcnID8gJycgOlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVkIGNhcmQnIHN0eWxlPXt7IHBhZGRpbmc6ICc1cHggMTBweCcgfX0+e3RoaXMuc3RhdGUuZXJyb3JfbWVzc2FnZX08L2Rpdj59XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgb25DbGljaz0geyB0aGlzLm9uUmVnaXN0ZXJVc2VyIH1cbiAgICAgICAgY2xhc3NOYW1lPSd3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHQgYnRuIGFjdGlvbi1idG4nPlxuICAgICAgICBSZWdpc3RlcjwvYnV0dG9uPlxuICAgICAgICA8YSBjbGFzc05hbWU9J3JpZ2h0IHdhdmVzLWVmZmVjdCB3YXZlcy10ZWFsIGJ0bi1mbGF0IGFjdGlvbi1idG4nXG4gICAgICAgICAgaHJlZj0nI2xvZ2luJz5Mb2dpbjwvYT5cbiAgICAgIDwvRm9ybT5cbiAgICApO1xuICB9XG59XG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBvbkxvZ2luVXNlcjogdXNlciA9PiBkaXNwYXRjaChsb2dpblVzZXIodXNlcikpXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIG1hcERpc3BhdGNoVG9Qcm9wcykoUmVnaXN0ZXIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2pzL2NvbXBvbmVudHMvcHJlc2VudGF0aW9uYWwvcmVnaXN0ZXIuanMiXSwic291cmNlUm9vdCI6IiJ9