webpackHotUpdate(0,{

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// Abstraction of the fetch api

var api = function api(body, url, method) {
  return new Promise(function (resolve) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    fetch(url, { method: method,
      body: body,
      headers: headers
    }).then(function (response) {
      return response.json();
    }).then(function (response) {
      console.log(response, '==============>>>>');
      resolve(response);
    });
  });
};

exports.default = api;

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
      var registerRes = (0, _api2.default)(userString, 'http://localhost:3000/api/users', 'POST').then(function (response) {
        if (registerRes.error === undefined) {
          var loginRes = (0, _api2.default)(userString, 'http://localhost:3000/api/signin', 'POST');
          if (loginRes.error === undefined) {
            console.log(loginRes);
            _this2.props.onLoginUser(user);
            location.hash = '#dashboard';
          }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9oZWxwZXJzL2FwaS5qcz84OTQzIiwid2VicGFjazovLy8uL2NsaWVudC9qcy9jb21wb25lbnRzL3ByZXNlbnRhdGlvbmFsL3JlZ2lzdGVyLmpzPzM3M2IiXSwibmFtZXMiOlsiYXBpIiwiYm9keSIsInVybCIsIm1ldGhvZCIsIlByb21pc2UiLCJyZXNvbHZlIiwiaGVhZGVycyIsIkhlYWRlcnMiLCJhcHBlbmQiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiUmVnaXN0ZXIiLCJwcm9wcyIsIm9uUmVnaXN0ZXJVc2VyIiwiYmluZCIsIm9uRm9jdXMiLCJzdGF0ZSIsImVycm9yX21lc3NhZ2UiLCJzZXRTdGF0ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInVzZXJuYW1lIiwiZW1haWwiLCJwaG9uZSIsInBhc3N3b3JkIiwidmFsdWUiLCJ0cmltIiwidXNlciIsInVzZXJTdHJpbmciLCJyZWdpc3RlclJlcyIsImVycm9yIiwidW5kZWZpbmVkIiwibG9naW5SZXMiLCJvbkxvZ2luVXNlciIsImxvY2F0aW9uIiwiaGFzaCIsIm1lc3NhZ2UiLCJpbnB1dCIsInBhZGRpbmciLCJDb21wb25lbnQiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxNQUFNLFNBQU5BLEdBQU0sQ0FBQ0MsSUFBRCxFQUFPQyxHQUFQLEVBQVlDLE1BQVo7QUFBQSxTQUF3QixJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFhO0FBQzNELFFBQU1DLFVBQVUsSUFBSUMsT0FBSixFQUFoQjtBQUNBRCxZQUFRRSxNQUFSLENBQWUsY0FBZixFQUErQixtQ0FBL0I7QUFDQUMsVUFBTVAsR0FBTixFQUFXLEVBQUVDLGNBQUY7QUFDVEYsZ0JBRFM7QUFFVEs7QUFGUyxLQUFYLEVBSUNJLElBSkQsQ0FJTTtB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QkY7QUE0QkU7QUFBQTtBQUFBLFlBQUcsV0FBVSxtREFBYjtBQUNFLGtCQUFLLFFBRFA7QUFBQTtBQUFBO0FBNUJGLE9BREY7QUFpQ0Q7Ozs7RUFuRm9CLGdCQUFNMEIsUzs7QUFxRjdCLElBQU1DLHFCQUFxQixTQUFyQkEsa0JBQXFCLENBQUNDLFFBQUQsRUFBYztBQUN2QyxTQUFPO0FBQ0xSLGlCQUFhO0FBQUEsYUFBUVEsU0FBUyx5QkFBVWQsSUFBVixDQUFULENBQVI7QUFBQTtBQURSLEdBQVA7QUFHRCxDQUpEOztrQkFNZSx5QkFBUSxJQUFSLEVBQWNhLGtCQUFkLEVBQWtDN0IsUUFBbEMsQyIsImZpbGUiOiIwLmNiOTE0OTJlMDQzZGUyZGM5NGEyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBYnN0cmFjdGlvbiBvZiB0aGUgZmV0Y2ggYXBpXG5cbmNvbnN0IGFwaSA9IChib2R5LCB1cmwsIG1ldGhvZCkgPT4gKG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuICBmZXRjaCh1cmwsIHsgbWV0aG9kLFxuICAgIGJvZHksXG4gICAgaGVhZGVyc1xuICB9KVxuICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLCAnPT09PT09PT09PT09PT0+Pj4+Jyk7XG4gICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gIH0pO1xufSkpO1xuXG5leHBvcnQgZGVmYXVsdCBhcGk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvanMvY29tcG9uZW50cy9oZWxwZXJzL2FwaS5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IEZvcm0gZnJvbSAnLi9mb3JtJztcbmltcG9ydCBsb2dpblVzZXIgZnJvbSAnLi4vLi4vYWN0aW9ucy9sb2dpblVzZXInO1xuaW1wb3J0IGFwaSBmcm9tICcuLi9oZWxwZXJzL2FwaSc7XG5cbmNsYXNzIFJlZ2lzdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLm9uUmVnaXN0ZXJVc2VyID0gdGhpcy5vblJlZ2lzdGVyVXNlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25Gb2N1cyA9IHRoaXMub25Gb2N1cy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBlcnJvcl9tZXNzYWdlOiAnJ1xuICAgIH07XG4gIH1cblxuICBvbkZvY3VzKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcl9tZXNzYWdlOiAnJyB9KTtcbiAgfVxuXG4gIG9uUmVnaXN0ZXJVc2VyKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IHsgdXNlcm5hbWUsIGVtYWlsLCBwaG9uZSwgcGFzc3dvcmQgfSA9IHRoaXM7XG4gICAgdXNlcm5hbWUgPSB1c2VybmFtZS52YWx1ZS50cmltKCk7XG4gICAgZW1haWwgPSBlbWFpbC52YWx1ZS50cmltKCk7XG4gICAgcGhvbmUgPSBwaG9uZS52YWx1ZS50cmltKCk7XG4gICAgcGFzc3dvcmQgPSBwYXNzd29yZC52YWx1ZTtcbiAgICBjb25zdCB1c2VyID0ge1xuICAgICAgdXNlcm5hbWUsXG4gICAgICBlbWFpbCxcbiAgICAgIHBob25lLFxuICAgICAgcGFzc3dvcmRcbiAgICB9O1xuICAgIGlmICh1c2VybmFtZSA9PT0gJycgfHwgZW1haWwgPT09ICcnIHx8IHBob25lID09PSAnJyB8fCBwYXNzd29yZCA9PT0gJycpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcl9tZXNzYWdlOiAnRXJyb3I6IE9uZSBvciBtb3JlIGZpZWxkcyBhcmUgZW1wdHknIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB1c2VyU3RyaW5nID0gYHVzZXJuYW1lPSR7dXNlcm5hbWV9JmVtYWlsPSR7ZW1haWx9JnBhc3N3b3JkPSR7cGFzc3dvcmR9JnBob25lPSR7cGhvbmV9YDtcbiAgICBjb25zdCByZWdpc3RlclJlcyA9IGFwaSh1c2VyU3RyaW5nLCAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS91c2VycycsICdQT1NUJykudGhlbihcbiAgICAgIChyZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAocmVnaXN0ZXJSZXMuZXJyb3IgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgbG9naW5SZXMgPSBhcGkodXNlclN0cmluZywgJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvc2lnbmluJywgJ1BPU1QnKTtcbiAgICAgIGlmIChsb2dpblJlcy5lcnJvciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGxvZ2luUmVzKTtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkxvZ2luVXNlcih1c2VyKTtcbiAgICAgICAgbG9jYXRpb24uaGFzaCA9ICcjZGFzaGJvYXJkJztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yX21lc3NhZ2U6IHJlZ2lzdGVyUmVzLmVycm9yLm1lc3NhZ2UgfSk7XG4gICAgfVxuICAgICAgfVxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxGb3JtIHRpdGxlPSdDcmVhdGUgYSBuZXcgYWNjb3VudCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1maWVsZCc+XG4gICAgICAgICAgPGlucHV0IG9uRm9jdXM9e3RoaXMub25Gb2N1c31cbiAgICAgICAgICB0eXBlPSd0ZXh0JyBpZD0ndXNlcm5hbWUnXG4gICAgICAgICAgcmVmID0geyhpbnB1dCkgPT4geyB0aGlzLnVzZXJuYW1lID0gaW5wdXQ7IH19IC8+XG4gICAgICAgICAgPGxhYmVsIGZvcj0ndXNlcm5hbWUnPlVzZXJuYW1lPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1maWVsZCc+XG4gICAgICAgICAgPGlucHV0IG9uRm9jdXM9e3RoaXMub25Gb2N1c31cbiAgICAgICAgICB0eXBlPSdlbWFpbCcgaWQ9J2VtYWlsJyByZWY9eyhpbnB1dCkgPT4geyB0aGlzLmVtYWlsID0gaW5wdXQ7IH19Lz5cbiAgICAgICAgICA8bGFiZWwgZm9yPSdlbWFpbCc+RW1haWw8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2lucHV0LWZpZWxkJz5cbiAgICAgICAgICA8aW5wdXQgb25Gb2N1cz17dGhpcy5vbkZvY3VzfVxuICAgICAgICAgIHR5cGU9J3RleHQnIGlkPSdwaG9uZScgcmVmPXsoaW5wdXQpID0+IHsgdGhpcy5waG9uZSA9IGlucHV0OyB9fS8+XG4gICAgICAgICAgPGxhYmVsIGZvcj0ncGhvbmUnPlBob25lPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1maWVsZCc+XG4gICAgICAgICAgPGlucHV0IG9uRm9jdXM9e3RoaXMub25Gb2N1c31cbiAgICAgICAgICB0eXBlPSdwYXNzd29yZCcgaWQ9J3Bhc3N3b3JkJyByZWY9eyhpbnB1dCkgPT4geyB0aGlzLnBhc3N3b3JkID0gaW5wdXQ7IH19Lz5cbiAgICAgICAgICA8bGFiZWwgZm9yPSdwYXNzd29yZCc+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgeyB0aGlzLnN0YXRlLmVycm9yX21lc3NhZ2UgPT09ICcnID8gJycgOlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVkIGNhcmQnIHN0eWxlPXt7IHBhZGRpbmc6ICc1cHggMTBweCcgfX0+e3RoaXMuc3RhdGUuZXJyb3JfbWVzc2FnZX08L2Rpdj59XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgb25DbGljaz0geyB0aGlzLm9uUmVnaXN0ZXJVc2VyIH1cbiAgICAgICAgY2xhc3NOYW1lPSd3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHQgYnRuIGFjdGlvbi1idG4nPlxuICAgICAgICBSZWdpc3RlcjwvYnV0dG9uPlxuICAgICAgICA8YSBjbGFzc05hbWU9J3JpZ2h0IHdhdmVzLWVmZmVjdCB3YXZlcy10ZWFsIGJ0bi1mbGF0IGFjdGlvbi1idG4nXG4gICAgICAgICAgaHJlZj0nI2xvZ2luJz5Mb2dpbjwvYT5cbiAgICAgIDwvRm9ybT5cbiAgICApO1xuICB9XG59XG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBvbkxvZ2luVXNlcjogdXNlciA9PiBkaXNwYXRjaChsb2dpblVzZXIodXNlcikpXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIG1hcERpc3BhdGNoVG9Qcm9wcykoUmVnaXN0ZXIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2pzL2NvbXBvbmVudHMvcHJlc2VudGF0aW9uYWwvcmVnaXN0ZXIuanMiXSwic291cmNlUm9vdCI6IiJ9