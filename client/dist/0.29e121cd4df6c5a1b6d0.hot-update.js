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

var _reactRedux = __webpack_require__(19);

var _form = __webpack_require__(23);

var _form2 = _interopRequireDefault(_form);

var _loginUser = __webpack_require__(44);

var _loginUser2 = _interopRequireDefault(_loginUser);

var _api = __webpack_require__(13);

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

      e.preventDefault();
      var username = this.username,
          password = this.password;

      username = username.value.trim();
      password = password.value;
      if (username !== '' || password !== '') {
        var userString = 'username=' + username + '&password=' + password;
        (0, _api2.default)(userString, '/api/signin', 'POST').then(function (_loginRes) {
          if (_loginRes.error === undefined) {
            _this2.props.onLoginUser(JSON.stringify(_loginRes));
            sessionStorage.setItem('user', JSON.stringify(_loginRes));
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

      if (sessionStorage.getItem('user') === null) {
        location.hash;
      }
      return _react2.default.createElement(
        _form2.default,
        { title: 'Login to your account', sidemenu: false },
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
          'div',
          { className: 'section' },
          _react2.default.createElement(
            'a',
            { href: '#recover-password' },
            'Forgot Password?'
          )
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9sb2dpbi5qcz85Mjc0Il0sIm5hbWVzIjpbIkxvZ2luIiwicHJvcHMiLCJvbkxvZ2luVXNlciIsImJpbmQiLCJvbkZvY3VzIiwic3RhdGUiLCJlcnJvcl9tZXNzYWdlIiwic2V0U3RhdGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwidmFsdWUiLCJ0cmltIiwidXNlclN0cmluZyIsInRoZW4iLCJfbG9naW5SZXMiLCJlcnJvciIsInVuZGVmaW5lZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJsb2NhdGlvbiIsImhhc2giLCJtZXNzYWdlIiwiZ2V0SXRlbSIsImlucHV0IiwicGFkZGluZyIsIkNvbXBvbmVudCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwidXNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLEs7OztBQUVKLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkMsSUFBakIsT0FBbkI7QUFDQSxVQUFLQyxPQUFMLEdBQWUsTUFBS0EsT0FBTCxDQUFhRCxJQUFiLE9BQWY7QUFDQSxVQUFLRSxLQUFMLEdBQWE7QUFDWEMscUJBQWU7QUFESixLQUFiO0FBSmlCO0FBT2xCOzs7OzhCQUVTO0FBQ1IsV0FBS0MsUUFBTCxDQUFjLEVBQUVELGVBQWUsRUFBakIsRUFBZDtBQUNEOzs7Z0NBRVdFLEMsRUFBRztBQUFBOztBQUNiQSxRQUFFQyxjQUFGO0FBRGEsVUFFUEMsUUFGTyxHQUVnQixJQUZoQixDQUVQQSxRQUZPO0FBQUEsVUFFR0MsUUFGSCxHQUVnQixJQUZoQixDQUVHQSxR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ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IEZvcm0gZnJvbSAnLi9mb3JtJztcbmltcG9ydCBsb2dpblVzZXIgZnJvbSAnLi4vLi4vYWN0aW9ucy9sb2dpblVzZXInO1xuaW1wb3J0IGFwaSBmcm9tICcuLi9oZWxwZXJzL2FwaSc7XG5cbmNsYXNzIExvZ2luIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLm9uTG9naW5Vc2VyID0gdGhpcy5vbkxvZ2luVXNlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25Gb2N1cyA9IHRoaXMub25Gb2N1cy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBlcnJvcl9tZXNzYWdlOiAnJ1xuICAgIH07XG4gIH1cblxuICBvbkZvY3VzKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcl9tZXNzYWdlOiAnJyB9KTtcbiAgfVxuXG4gIG9uTG9naW5Vc2VyKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0gPSB0aGlzO1xuICAgIHVzZXJuYW1lID0gdXNlcm5hbWUudmFsdWUudHJpbSgpO1xuICAgIHBhc3N3b3JkID0gcGFzc3dvcmQudmFsdWU7XG4gICAgaWYgKHVzZXJuYW1lICE9PSAnJyB8fCBwYXNzd29yZCAhPT0gJycpIHtcbiAgICAgIGNvbnN0IHVzZXJTdHJpbmcgPSBgdXNlcm5hbWU9JHt1c2VybmFtZX0mcGFzc3dvcmQ9JHtwYXNzd29yZH1gO1xuICAgICAgYXBpKHVzZXJTdHJpbmcsICcvYXBpL3NpZ25pbicsICdQT1NUJykudGhlbihcbiAgICAgICAgKF9sb2dpblJlcykgPT4ge1xuICAgICAgICAgIGlmIChfbG9naW5SZXMuZXJyb3IgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkxvZ2luVXNlcihKU09OLnN0cmluZ2lmeShfbG9naW5SZXMpKTtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3VzZXInLCBKU09OLnN0cmluZ2lmeShfbG9naW5SZXMpKTtcbiAgICAgICAgICAgIGxvY2F0aW9uLmhhc2ggPSAnI2Rhc2hib2FyZCc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcl9tZXNzYWdlOiBfbG9naW5SZXMuZXJyb3IubWVzc2FnZSB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcl9tZXNzYWdlOiAnRXJyb3I6IE9uZSBvciBtb3JlIGZpZWxkcyBhcmUgZW1wdHknIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpID09PSBudWxsKSB7XG4gICAgICBsb2NhdGlvbi5oYXNoXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybSB0aXRsZT0nTG9naW4gdG8geW91ciBhY2NvdW50JyBzaWRlbWVudT17ZmFsc2V9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtZmllbGQnPlxuICAgICAgICAgIDxpbnB1dCBvbkZvY3VzPXt0aGlzLm9uRm9jdXN9XG4gICAgICAgICAgdHlwZT0ndGV4dCcgaWQ9J3VzZXJuYW1lJ1xuICAgICAgICAgIHJlZiA9IHsoaW5wdXQpID0+IHsgdGhpcy51c2VybmFtZSA9IGlucHV0OyB9fSAvPlxuICAgICAgICAgIDxsYWJlbCBmb3I9J3VzZXJuYW1lJz5Vc2VybmFtZTwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtZmllbGQnPlxuICAgICAgICAgIDxpbnB1dCBvbkZvY3VzPXt0aGlzLm9uRm9jdXN9XG4gICAgICAgICAgdHlwZT0ncGFzc3dvcmQnIGlkPSdwYXNzd29yZCcgcmVmPXsoaW5wdXQpID0+IHsgdGhpcy5wYXNzd29yZCA9IGlucHV0OyB9fS8+XG4gICAgICAgICAgPGxhYmVsIGZvcj0ncGFzc3dvcmQnPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsgdGhpcy5zdGF0ZS5lcnJvcl9tZXNzYWdlID09PSAnJyA/ICcnIDpcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlZCBjYXJkJyBzdHlsZT17eyBwYWRkaW5nOiAnNXB4IDEwcHgnIH19Pnt0aGlzLnN0YXRlLmVycm9yX21lc3NhZ2V9PC9kaXY+fVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VjdGlvbic+XG4gICAgICAgICAgPGEgaHJlZj0nI3JlY292ZXItcGFzc3dvcmQnPkZvcmdvdCBQYXNzd29yZD88L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9IHsgdGhpcy5vbkxvZ2luVXNlciB9XG4gICAgICAgIGNsYXNzTmFtZT0nd2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0IGJ0biBhY3Rpb24tYnRuJz5cbiAgICAgICAgTG9naW48L2J1dHRvbj5cbiAgICAgICAgPGEgY2xhc3NOYW1lPSdyaWdodCB3YXZlcy1lZmZlY3Qgd2F2ZXMtdGVhbCBidG4tZmxhdCBhY3Rpb24tYnRuJ1xuICAgICAgICAgIGhyZWY9JyNyZWdpc3Rlcic+UmVnaXN0ZXI8L2E+XG4gICAgICA8L0Zvcm0+XG4gICAgKTtcbiAgfVxufVxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgb25Mb2dpblVzZXI6IHVzZXIgPT4gZGlzcGF0Y2gobG9naW5Vc2VyKHVzZXIpKVxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLCBtYXBEaXNwYXRjaFRvUHJvcHMpKExvZ2luKTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2pzL2NvbXBvbmVudHMvcHJlc2VudGF0aW9uYWwvbG9naW4uanMiXSwic291cmNlUm9vdCI6IiJ9