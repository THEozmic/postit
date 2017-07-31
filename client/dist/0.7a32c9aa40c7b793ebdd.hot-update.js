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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9sb2dpbi5qcz85Mjc0Il0sIm5hbWVzIjpbIkxvZ2luIiwicHJvcHMiLCJvbkxvZ2luVXNlciIsImJpbmQiLCJvbkZvY3VzIiwic3RhdGUiLCJlcnJvcl9tZXNzYWdlIiwic2V0U3RhdGUiLCJlIiwiY29uc29sZSIsImxvZyIsInByZXZlbnREZWZhdWx0IiwidXNlcm5hbWUiLCJwYXNzd29yZCIsInZhbHVlIiwidHJpbSIsInVzZXJTdHJpbmciLCJ0aGVuIiwiX2xvZ2luUmVzIiwiZXJyb3IiLCJ1bmRlZmluZWQiLCJKU09OIiwic3RyaW5naWZ5Iiwic2Vzc2lvblN0b3JhZ2UiLCJzZXRJdGVtIiwibG9jYXRpb24iLCJoYXNoIiwibWVzc2FnZSIsImlucHV0IiwicGFkZGluZyIsIkNvbXBvbmVudCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwidXNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLEs7OztBQUVKLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkMsSUFBakIsT0FBbkI7QUFDQSxVQUFLQyxPQUFMLEdBQWUsTUFBS0EsT0FBTCxDQUFhRCxJQUFiLE9BQWY7QUFDQSxVQUFLRSxLQUFMLEdBQWE7QUFDWEMscUJBQWU7QUFESixLQUFiO0FBSmlCO0FBT2xCOzs7OzhCQUVTO0FBQ1IsV0FBS0MsUUFBTCxDQUFjLEVBQUVELGVBQWUsRUFBakIsRUFBZDtBQUNEOzs7Z0NBRVdFLEMsRUFBRztBQUFBOztBQUNiQyxjQUFRQyxHQUFSLENBQVksTUFBWjtBQUNBRixRQUFFRyxjQUFGO0FBRmEsVUFHUEMsUUFITyxHQUdnQixJQUhoQixDQUdQQSxRQUhPO0FBQUEsVUFHR0MsUUFISCxHQUdnQixJQUhoQixDQUdHQSxRQUhIOztBQUliRCxpQkFBV0EsU0FBU0UsS0FBVCxDQUFlQyxJQUFmLEVBQVg7QUFDQUYsaUJBQVdBLFNBQVNDLEtBQXBCO0FBQ0EsVUFBSUYsYUFBYSxFQUFiLElBQW1CQyxhQUFhLEVBQXBDLEVBQXdDO0FBQ3RDLFlBQU1HLDJCQUF5QkosUUFBekIsa0JBQThDQyxRQUFwRDtBQUNBLDJCQUFJRyxVQUFKLEVBQWdCLGtDQUFoQixFQUFvRCxNQUFwRCxFQUE0REMsSUFBNUQsQ0FDRSxVQUFDQyxTQUFELEVBQWU7QUFDYixjQUFJQSxVQUFVQyxLQUFWLEtBQW9CQyxTQUF4QixFQUFtQztBQUNqQ1gsb0JBQVFDLEdBQVIsQ0FBWVEsU0FBWjtBQUNBLG1CQUFLakIsS0FBTCxDQUFXQyxXQUFYLENBQXVCbUIsS0FBS0MsU0FBTCxDQUFlSixTQUFmLENBQXZCO0FBQ0FLLDJCQUFlQyxPQUFmLENBQXVCLE1BQXZCLEVBQStCSCxLQUFLQyxTQUFMLENBQWVKLFNBQWYsQ0FBL0I7QUFDQU8scUJBQVNDLElBQVQsR0FBZ0IsWUFBaEI7QUFDRCxXQUxELE1BS087QUFDTCxtQkFBS25CLFFBQUwsQ0FBYyxFQUFFRCxlQUFlWSxVQUFVQyxLQUFWLENBQWdCUSxPQUFqQyxFQUFkO0FBQ0Q7QUFDRixTQVZIO0FBWUQsT0FkRCxNQWNPO0FBQ0wsYUFBS3BCLFFBQUwsQ0FBYyxFQUFFRCxlQUFlLHFDQUFqQixFQUFkO0FBQ0Q7QUFDRjs7OzZCQUVRO0FBQUE7O0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBTSxPQUFNLHVCQUFaO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSxhQUFmO0FBQ0UsbURBQU8sU0FBUyxLQUFLRixPQUFyQjtBQUNBLGtCQUFLLE1BREwsRUFDWSxJQUFHLFVBRGY7QUFFQSxpQkFBTyxhQUFDd0IsS0FBRCxFQUFXO0FBQUUscUJBQUtoQixRQUFMLEdBQWdCZ0IsS0FBaEI7QUFBd0IsYUFGNUMsR0FERjtBQUlFO0FBQUE7QUFBQSxjQUFPLFNBQUksVUFBWDtBQUFBO0FBQUE7QUFKRixTQURGO0FBT0U7QUFBQTtBQUFBLFlBQUssV0FBVSxhQUFmO0FBQ0UsbURBQU8sU0FBUyxLQUFLeEIsT0FBckI7QUFDQSxrQkFBSyxVQURMLEVBQ2dCLElBQUcsVUFEbkIsRUFDOEIsS0FBSyxhQUFDd0IsS0FBRCxFQUFXO0FBQUUscUJBQUtmLFFBQUwsR0FBZ0JlLEtBQWhCO0FBQXdCLGFBRHhFLEdBREY7QUFHRTtBQUFBO0FBQUEsY0FBTyxTQUFJLFVBQVg7QUFBQTtBQUFBO0FBSEYsU0FQRjtBQVlJLGFBQUt2QixLQUFMLENBQVdDLGFBQVgsS0FBNkIsRUFBN0IsR0FBa0MsRUFBbEMsR0FDRjtBQUFBO0FBQUEsWUFBSyxXQUFVLFVBQWYsRUFBMEIsT0FBTyxFQUFFdUIsU0FBUyxVQUFYLEVBQWpDO0FBQTJELGVBQUt4QixLQUFMLENBQVdDO0FBQXRFLFNBYkY7QUFjRTtBQUFBO0FBQUE7QUFDQSxxQkFBVyxLQUFLSixXQURoQjtBQUVBLHVCQUFVLHlDQUZWO0FBQUE7QUFBQSxTQWRGO0FBa0JFO0FBQUE7QUFBQSxZQUFHLFdBQVUsbURBQWI7QUFDRSxrQkFBSyxXQURQO0FBQUE7QUFBQTtBQWxCRixPQURGO0FBdUJEOzs7O0VBaEVpQixnQkFBTTRCLFM7O0FBa0UxQixJQUFNQyxxQkFBcUIsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFELEVBQWM7QUFDdkMsU0FBTztBQUNMOUIsaUJBQWE7QUFBQSxhQUFROEIsU0FBUyx5QkFBVUMsSUFBVixDQUFULENBQVI7QUFBQTtBQURSLEdBQVA7QUFHRCxDQUpEOztrQkFNZSx5QkFBUSxJQUFSLEVBQWNGLGtCQUFkLEVBQWtDL0IsS0FBbEMsQyIsImZpbGUiOiIwLjdhMzJjOWFhNDBjN2I3OTNlYmRkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBGb3JtIGZyb20gJy4vZm9ybSc7XG5pbXBvcnQgbG9naW5Vc2VyIGZyb20gJy4uLy4uL2FjdGlvbnMvbG9naW5Vc2VyJztcbmltcG9ydCBhcGkgZnJvbSAnLi4vaGVscGVycy9hcGknO1xuXG5jbGFzcyBMb2dpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5vbkxvZ2luVXNlciA9IHRoaXMub25Mb2dpblVzZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uRm9jdXMgPSB0aGlzLm9uRm9jdXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZXJyb3JfbWVzc2FnZTogJydcbiAgICB9O1xuICB9XG5cbiAgb25Gb2N1cygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JfbWVzc2FnZTogJycgfSk7XG4gIH1cblxuICBvbkxvZ2luVXNlcihlKSB7XG4gICAgY29uc29sZS5sb2coJ3VzZXInKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0gPSB0aGlzO1xuICAgIHVzZXJuYW1lID0gdXNlcm5hbWUudmFsdWUudHJpbSgpO1xuICAgIHBhc3N3b3JkID0gcGFzc3dvcmQudmFsdWU7XG4gICAgaWYgKHVzZXJuYW1lICE9PSAnJyB8fCBwYXNzd29yZCAhPT0gJycpIHtcbiAgICAgIGNvbnN0IHVzZXJTdHJpbmcgPSBgdXNlcm5hbWU9JHt1c2VybmFtZX0mcGFzc3dvcmQ9JHtwYXNzd29yZH1gO1xuICAgICAgYXBpKHVzZXJTdHJpbmcsICdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3NpZ25pbicsICdQT1NUJykudGhlbihcbiAgICAgICAgKF9sb2dpblJlcykgPT4ge1xuICAgICAgICAgIGlmIChfbG9naW5SZXMuZXJyb3IgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coX2xvZ2luUmVzKTtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25Mb2dpblVzZXIoSlNPTi5zdHJpbmdpZnkoX2xvZ2luUmVzKSk7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCd1c2VyJywgSlNPTi5zdHJpbmdpZnkoX2xvZ2luUmVzKSk7XG4gICAgICAgICAgICBsb2NhdGlvbi5oYXNoID0gJyNkYXNoYm9hcmQnO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JfbWVzc2FnZTogX2xvZ2luUmVzLmVycm9yLm1lc3NhZ2UgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JfbWVzc2FnZTogJ0Vycm9yOiBPbmUgb3IgbW9yZSBmaWVsZHMgYXJlIGVtcHR5JyB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxGb3JtIHRpdGxlPSdMb2dpbiB0byB5b3VyIGFjY291bnQnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtZmllbGQnPlxuICAgICAgICAgIDxpbnB1dCBvbkZvY3VzPXt0aGlzLm9uRm9jdXN9XG4gICAgICAgICAgdHlwZT0ndGV4dCcgaWQ9J3VzZXJuYW1lJ1xuICAgICAgICAgIHJlZiA9IHsoaW5wdXQpID0+IHsgdGhpcy51c2VybmFtZSA9IGlucHV0OyB9fSAvPlxuICAgICAgICAgIDxsYWJlbCBmb3I9J3VzZXJuYW1lJz5Vc2VybmFtZTwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtZmllbGQnPlxuICAgICAgICAgIDxpbnB1dCBvbkZvY3VzPXt0aGlzLm9uRm9jdXN9XG4gICAgICAgICAgdHlwZT0ncGFzc3dvcmQnIGlkPSdwYXNzd29yZCcgcmVmPXsoaW5wdXQpID0+IHsgdGhpcy5wYXNzd29yZCA9IGlucHV0OyB9fS8+XG4gICAgICAgICAgPGxhYmVsIGZvcj0ncGFzc3dvcmQnPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsgdGhpcy5zdGF0ZS5lcnJvcl9tZXNzYWdlID09PSAnJyA/ICcnIDpcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlZCBjYXJkJyBzdHlsZT17eyBwYWRkaW5nOiAnNXB4IDEwcHgnIH19Pnt0aGlzLnN0YXRlLmVycm9yX21lc3NhZ2V9PC9kaXY+fVxuICAgICAgICA8YnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9IHsgdGhpcy5vbkxvZ2luVXNlciB9XG4gICAgICAgIGNsYXNzTmFtZT0nd2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0IGJ0biBhY3Rpb24tYnRuJz5cbiAgICAgICAgTG9naW48L2J1dHRvbj5cbiAgICAgICAgPGEgY2xhc3NOYW1lPSdyaWdodCB3YXZlcy1lZmZlY3Qgd2F2ZXMtdGVhbCBidG4tZmxhdCBhY3Rpb24tYnRuJ1xuICAgICAgICAgIGhyZWY9JyNyZWdpc3Rlcic+UmVnaXN0ZXI8L2E+XG4gICAgICA8L0Zvcm0+XG4gICAgKTtcbiAgfVxufVxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgb25Mb2dpblVzZXI6IHVzZXIgPT4gZGlzcGF0Y2gobG9naW5Vc2VyKHVzZXIpKVxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLCBtYXBEaXNwYXRjaFRvUHJvcHMpKExvZ2luKTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2pzL2NvbXBvbmVudHMvcHJlc2VudGF0aW9uYWwvbG9naW4uanMiXSwic291cmNlUm9vdCI6IiJ9