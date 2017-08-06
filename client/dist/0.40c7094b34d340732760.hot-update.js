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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9yZWdpc3Rlci5qcz8zNzNiIl0sIm5hbWVzIjpbIlJlZ2lzdGVyIiwicHJvcHMiLCJvblJlZ2lzdGVyVXNlciIsImJpbmQiLCJvbkZvY3VzIiwic3RhdGUiLCJlcnJvcl9tZXNzYWdlIiwic2V0U3RhdGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJ1c2VybmFtZSIsImVtYWlsIiwicGhvbmUiLCJwYXNzd29yZCIsInZhbHVlIiwidHJpbSIsInVzZXJTdHJpbmciLCJ0aGVuIiwiX3JlZ2lzdGVyUmVzIiwiZXJyb3IiLCJ1bmRlZmluZWQiLCJfbG9naW5SZXMiLCJvbkxvZ2luVXNlciIsIkpTT04iLCJzdHJpbmdpZnkiLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJsb2NhdGlvbiIsImhhc2giLCJtZXNzYWdlIiwiaW5wdXQiLCJwYWRkaW5nIiwiQ29tcG9uZW50IiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJ1c2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUEsUTs7O0FBRUosb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxvSEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsY0FBTCxHQUFzQixNQUFLQSxjQUFMLENBQW9CQyxJQUFwQixPQUF0QjtBQUNBLFVBQUtDLE9BQUwsR0FBZSxNQUFLQSxPQUFMLENBQWFELElBQWIsT0FBZjtBQUNBLFVBQUtFLEtBQUwsR0FBYTtBQUNYQyxxQkFBZTtBQURKLEtBQWI7QUFKaUI7QUFPbEI7Ozs7OEJBRVM7QUFDUixXQUFLQyxRQUFMLENBQWMsRUFBRUQsZUFBZSxFQUFqQixFQUFkO0FBQ0Q7OzttQ0FFY0UsQyxFQUFHO0FBQUE7O0FBQ2hCQSxRQUFFQyxjQUFGO0FBRGdCLFVBRVZDLFFBRlUsR0FFMkIsSUFGM0Is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RixTQVpGO0FBaUJFO0FBQUE7QUFBQSxZQUFLLFdBQVUsYUFBZjtBQUNFLG1EQUFPLFNBQVMsS0FBSzFCLE9BQXJCO0FBQ0Esa0JBQUssVUFETCxFQUNnQixJQUFHLFVBRG5CLEVBQzhCLEtBQUssYUFBQzBCLEtBQUQsRUFBVztBQUFFLHFCQUFLakIsUUFBTCxHQUFnQmlCLEtBQWhCO0FBQXdCLGFBRHhFLEdBREY7QUFHRTtBQUFBO0FBQUEsY0FBTyxTQUFJLFVBQVg7QUFBQTtBQUFBO0FBSEYsU0FqQkY7QUFzQkksYUFBS3pCLEtBQUwsQ0FBV0MsYUFBWCxLQUE2QixFQUE3QixHQUFrQyxFQUFsQyxHQUNGO0FBQUE7QUFBQSxZQUFLLFdBQVUsVUFBZixFQUEwQixPQUFPLEVBQUV5QixTQUFTLFVBQVgsRUFBakM7QUFBMkQsZUFBSzFCLEtBQUwsQ0FBV0M7QUFBdEUsU0F2QkY7QUF3QkU7QUFBQTtBQUFBO0FBQ0EscUJBQVcsS0FBS0osY0FEaEI7QUFFQSx1QkFBVSx5Q0FGVjtBQUFBO0FBQUEsU0F4QkY7QUE0QkU7QUFBQTtBQUFBLFlBQUcsV0FBVSxtREFBYjtBQUNFLGtCQUFLLFFBRFA7QUFBQTtBQUFBO0FBNUJGLE9BREY7QUFpQ0Q7Ozs7RUFsRm9CLGdCQUFNOEIsUzs7QUFvRjdCLElBQU1DLHFCQUFxQixTQUFyQkEsa0JBQXFCLENBQUNDLFFBQUQsRUFBYztBQUN2QyxTQUFPO0FBQ0xaLGlCQUFhO0FBQUEsYUFBUVksU0FBUyx5QkFBVUMsSUFBVixDQUFULENBQVI7QUFBQTtBQURSLEdBQVA7QUFHRCxDQUpEOztrQkFNZSx5QkFBUSxJQUFSLEVBQWNGLGtCQUFkLEVBQWtDakMsUUFBbEMsQyIsImZpbGUiOiIwLjQwYzcwOTRiMzRkMzQwNzMyNzYwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBGb3JtIGZyb20gJy4vZm9ybSc7XG5pbXBvcnQgbG9naW5Vc2VyIGZyb20gJy4uLy4uL2FjdGlvbnMvbG9naW5Vc2VyJztcbmltcG9ydCBhcGkgZnJvbSAnLi4vaGVscGVycy9hcGknO1xuXG5jbGFzcyBSZWdpc3RlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5vblJlZ2lzdGVyVXNlciA9IHRoaXMub25SZWdpc3RlclVzZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uRm9jdXMgPSB0aGlzLm9uRm9jdXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZXJyb3JfbWVzc2FnZTogJydcbiAgICB9O1xuICB9XG5cbiAgb25Gb2N1cygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JfbWVzc2FnZTogJycgfSk7XG4gIH1cblxuICBvblJlZ2lzdGVyVXNlcihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCB7IHVzZXJuYW1lLCBlbWFpbCwgcGhvbmUsIHBhc3N3b3JkIH0gPSB0aGlzO1xuICAgIHVzZXJuYW1lID0gdXNlcm5hbWUudmFsdWUudHJpbSgpO1xuICAgIGVtYWlsID0gZW1haWwudmFsdWUudHJpbSgpO1xuICAgIHBob25lID0gcGhvbmUudmFsdWUudHJpbSgpO1xuICAgIHBhc3N3b3JkID0gcGFzc3dvcmQudmFsdWU7XG4gICAgaWYgKHVzZXJuYW1lID09PSAnJyB8fCBlbWFpbCA9PT0gJycgfHwgcGhvbmUgPT09ICcnIHx8IHBhc3N3b3JkID09PSAnJykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yX21lc3NhZ2U6ICdFcnJvcjogT25lIG9yIG1vcmUgZmllbGRzIGFyZSBlbXB0eScgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHVzZXJTdHJpbmcgPSBgdXNlcm5hbWU9JHt1c2VybmFtZX0mZW1haWw9JHtlbWFpbH0mcGFzc3dvcmQ9JHtwYXNzd29yZH0mcGhvbmU9JHtwaG9uZX1gO1xuICAgIGFwaSh1c2VyU3RyaW5nLCAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS91c2VycycsICdQT1NUJywgbnVsbCkudGhlbihcbiAgICAgIChfcmVnaXN0ZXJSZXMpID0+IHtcbiAgICAgICAgaWYgKF9yZWdpc3RlclJlcy5lcnJvciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgYXBpKHVzZXJTdHJpbmcsICdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3NpZ25pbicsICdQT1NUJywgbnVsbCkudGhlbihcbiAgICAgICAgICAgIChfbG9naW5SZXMpID0+IHtcbiAgICAgICAgICAgICAgaWYgKF9sb2dpblJlcy5lcnJvciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkxvZ2luVXNlcihKU09OLnN0cmluZ2lmeShfbG9naW5SZXMpKTtcbiAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCd1c2VyJywgSlNPTi5zdHJpbmdpZnkoX2xvZ2luUmVzKSk7XG4gICAgICAgICAgICAgICAgbG9jYXRpb24uaGFzaCA9ICcjZGFzaGJvYXJkJztcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JfbWVzc2FnZTogX2xvZ2luUmVzLmVycm9yLm1lc3NhZ2UgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcl9tZXNzYWdlOiBfcmVnaXN0ZXJSZXMuZXJyb3IubWVzc2FnZSB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxGb3JtIHRpdGxlPSdDcmVhdGUgYSBuZXcgYWNjb3VudCcgc2lkZW1lbnU9e2ZhbHNlfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2lucHV0LWZpZWxkJz5cbiAgICAgICAgICA8aW5wdXQgb25Gb2N1cz17dGhpcy5vbkZvY3VzfVxuICAgICAgICAgIHR5cGU9J3RleHQnIGlkPSd1c2VybmFtZSdcbiAgICAgICAgICByZWYgPSB7KGlucHV0KSA9PiB7IHRoaXMudXNlcm5hbWUgPSBpbnB1dDsgfX0gLz5cbiAgICAgICAgICA8bGFiZWwgZm9yPSd1c2VybmFtZSc+VXNlcm5hbWU8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2lucHV0LWZpZWxkJz5cbiAgICAgICAgICA8aW5wdXQgb25Gb2N1cz17dGhpcy5vbkZvY3VzfVxuICAgICAgICAgIHR5cGU9J2VtYWlsJyBpZD0nZW1haWwnIHJlZj17KGlucHV0KSA9PiB7IHRoaXMuZW1haWwgPSBpbnB1dDsgfX0vPlxuICAgICAgICAgIDxsYWJlbCBmb3I9J2VtYWlsJz5FbWFpbDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtZmllbGQnPlxuICAgICAgICAgIDxpbnB1dCBvbkZvY3VzPXt0aGlzLm9uRm9jdXN9XG4gICAgICAgICAgdHlwZT0ndGV4dCcgaWQ9J3Bob25lJyByZWY9eyhpbnB1dCkgPT4geyB0aGlzLnBob25lID0gaW5wdXQ7IH19Lz5cbiAgICAgICAgICA8bGFiZWwgZm9yPSdwaG9uZSc+UGhvbmU8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2lucHV0LWZpZWxkJz5cbiAgICAgICAgICA8aW5wdXQgb25Gb2N1cz17dGhpcy5vbkZvY3VzfVxuICAgICAgICAgIHR5cGU9J3Bhc3N3b3JkJyBpZD0ncGFzc3dvcmQnIHJlZj17KGlucHV0KSA9PiB7IHRoaXMucGFzc3dvcmQgPSBpbnB1dDsgfX0vPlxuICAgICAgICAgIDxsYWJlbCBmb3I9J3Bhc3N3b3JkJz5QYXNzd29yZDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7IHRoaXMuc3RhdGUuZXJyb3JfbWVzc2FnZSA9PT0gJycgPyAnJyA6XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZWQgY2FyZCcgc3R5bGU9e3sgcGFkZGluZzogJzVweCAxMHB4JyB9fT57dGhpcy5zdGF0ZS5lcnJvcl9tZXNzYWdlfTwvZGl2Pn1cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICBvbkNsaWNrPSB7IHRoaXMub25SZWdpc3RlclVzZXIgfVxuICAgICAgICBjbGFzc05hbWU9J3dhdmVzLWVmZmVjdCB3YXZlcy1saWdodCBidG4gYWN0aW9uLWJ0bic+XG4gICAgICAgIFJlZ2lzdGVyPC9idXR0b24+XG4gICAgICAgIDxhIGNsYXNzTmFtZT0ncmlnaHQgd2F2ZXMtZWZmZWN0IHdhdmVzLXRlYWwgYnRuLWZsYXQgYWN0aW9uLWJ0bidcbiAgICAgICAgICBocmVmPScjbG9naW4nPkxvZ2luPC9hPlxuICAgICAgPC9Gb3JtPlxuICAgICk7XG4gIH1cbn1cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICByZXR1cm4ge1xuICAgIG9uTG9naW5Vc2VyOiB1c2VyID0+IGRpc3BhdGNoKGxvZ2luVXNlcih1c2VyKSlcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobnVsbCwgbWFwRGlzcGF0Y2hUb1Byb3BzKShSZWdpc3Rlcik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9yZWdpc3Rlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=