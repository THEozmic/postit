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
            { href: 'recover-password' },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9sb2dpbi5qcz85Mjc0Il0sIm5hbWVzIjpbIkxvZ2luIiwicHJvcHMiLCJvbkxvZ2luVXNlciIsImJpbmQiLCJvbkZvY3VzIiwic3RhdGUiLCJlcnJvcl9tZXNzYWdlIiwic2V0U3RhdGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwidmFsdWUiLCJ0cmltIiwidXNlclN0cmluZyIsInRoZW4iLCJfbG9naW5SZXMiLCJlcnJvciIsInVuZGVmaW5lZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJsb2NhdGlvbiIsImhhc2giLCJtZXNzYWdlIiwiaW5wdXQiLCJwYWRkaW5nIiwiQ29tcG9uZW50IiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJ1c2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUEsSzs7O0FBRUosaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw4R0FDWEEsS0FEVzs7QUFFakIsVUFBS0MsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCQyxJQUFqQixPQUFuQjtBQUNBLFVBQUtDLE9BQUwsR0FBZSxNQUFLQSxPQUFMLENBQWFELElBQWIsT0FBZjtBQUNBLFVBQUtFLEtBQUwsR0FBYTtBQUNYQyxxQkFBZTtBQURKLEtBQWI7QUFKaUI7QUFPbEI7Ozs7OEJBRVM7QUFDUixXQUFLQyxRQUFMLENBQWMsRUFBRUQsZUFBZSxFQUFqQixFQUFkO0FBQ0Q7OztnQ0FFV0UsQyxFQUFHO0FBQUE7O0FBQ2JBLFFBQUVDLGNBQUY7QUFEYSxVQUVQQyxRQUZPLEdBRWdCLElBRmhCLENBRVBBLFFBRk87QUFBQSxVQUVHQyxRQUZILEdBRWdCLElBRmhCLENBRUdBLFFBRkg7O0FBR2JELGlCQUFXQSxTQUFTRSxLQUFULENBQWVDLElBQWYsRUFBWDtBQUNBRixpQkFBV0EsU0FBU0MsS0FBcEI7QUFDQSxVQUFJRixhQUFhLEVBQWIsSUFBbUJDLGFBQWEsRUFBcEMsRUFBd0M7QUFDdEMsWUFBTUcsMkJBQXlCSixRQUF6QixrQkFBOENDLFFBQXBEO0FBQ0EsMkJBQUlHLFVBQUosRUFBZ0IsYUFBaEIsRUFBK0IsTUFBL0IsRUFBdUNDLElBQXZDLENBQ0UsVUFBQ0MsU0FBRCxFQUFlO0FBQ2IsY0FBSUEsVUFBVUMsS0FBVixLQUFvQkMsU0FBeEIsRUFBbUM7QUFDakMsbUJBQUtqQixLQUFMLENBQVdDLFdBQVgsQ0FBdUJpQixLQUFLQyxTQUFMLENBQWVKLFNBQWYsQ0FBdkI7QUFDQUssMkJBQWVDLE9BQWYsQ0FBdUIsTUFBdkIsRUFBK0JILEtBQUtDLFNBQUwsQ0FBZUosU0FBZixDQUEvQjtBQUNBTyxxQkFBU0MsSUFBVCxHQUFnQixZQUFoQjtBQUNELFdBSkQsTUFJTztBQUNMLG1CQUFLakIsUUFBTCxDQUFjLEVBQUVELGVBQWVVLFVBQVVDLEtBQVYsQ0FBZ0JRLE9BQWpDLEVBQWQ7QUFDRDtBQUNGLFNBVEg7QUFXRCxPQWJELE1BYU87QUFDTCxhQUFLbEIsUUFBTCxDQUFjLEVBQUVELGVBQWUscUNBQWpCLEVBQWQ7QUFDRDtBQUNGOzs7NkJBRVE7QUFBQTs7QUFDUCxhQUNFO0FBQUE7QUFBQSxVQUFNLE9BQU0sdUJBQVosRUFBb0MsVUFBVSxLQUE5QztBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsYUFBZjtBQUNFLG1EQUFPLFNBQVMsS0FBS0YsT0FBckI7QUFDQSxrQkFBSyxNQURMLEVBQ1ksSUFBRyxVQURmO0FBRUEsaUJBQU8sYUFBQ3NCLEtBQUQsRUFBVztBQUFFLHFCQUFLaEIsUUFBTCxHQUFnQmdCLEtBQWhCO0FBQXdCLGFBRjVDLEdBREY7QUFJRTtBQUFBO0FBQUEsY0FBTyxTQUFJLFVBQVg7QUFBQTtBQUFBO0FBSkYsU0FERjtBQU9FO0FBQUE7QUFBQSxZQUFLLFdBQVUsYUFBZjtBQUNFLG1EQUFPLFNBQVMsS0FBS3RCLE9BQXJCO0FBQ0Esa0JBQUssVUFETCxFQUNnQixJQUFHLFVBRG5CLEVBQzhCLEtBQUssYUFBQ3NCLEtBQUQsRUFBVztBQUFFLHFCQUFLZixRQUFMLEdBQWdCZSxLQUFoQjtBQUF3QixhQUR4RSxHQURGO0FBR0U7QUFBQTtBQUFBLGNBQU8sU0FBSSxVQUFYO0FBQUE7QUFBQTtBQUhGLFNBUEY7QUFZSSxhQUFLckIsS0FBTCxDQUFXQyxhQUFYLEtBQTZCLEVBQTdCLEdBQWtDLEVBQWxDLEdBQ0Y7QUFBQTtBQUFBLFlBQUssV0FBVSxVQUFmLEVBQTBCLE9BQU8sRUFBRXFCLFNBQVMsVUFBWCxFQUFqQztBQUEyRCxlQUFLdEIsS0FBTCxDQUFXQztBQUF0RSxTQWJGO0FBY0U7QUFBQTtBQUFBLFlBQUssV0FBVSxTQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQUcsTUFBSyxrQkFBUjtBQUFBO0FBQUE7QUFERixTQWRGO0FBaUJFO0FBQUE7QUFBQTtBQUNBLHFCQUFXLEtBQUtKLFdBRGhCO0FBRUEsdUJBQVUseUNBRlY7QUFBQTtBQUFBLFNBakJGO0FBcUJFO0FBQUE7QUFBQSxZQUFHLFdBQVUsbURBQWI7QUFDRSxrQkFBSyxXQURQO0FBQUE7QUFBQTtBQXJCRixPQURGO0FBMEJEOzs7O0VBakVpQixnQkFBTTBCLFM7O0FBbUUxQixJQUFNQyxxQkFBcUIsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFELEVBQWM7QUFDdkMsU0FBTztBQUNMNUIsaUJBQWE7QUFBQSxhQUFRNEIsU0FBUyx5QkFBVUMsSUFBVixDQUFULENBQVI7QUFBQTtBQURSLEdBQVA7QUFHRCxDQUpEOztrQkFNZSx5QkFBUSxJQUFSLEVBQWNGLGtCQUFkLEVBQWtDN0IsS0FBbEMsQyIsImZpbGUiOiIwLmY2ZmRlZDQ2ZjAxNWU0OGZhZTAxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBGb3JtIGZyb20gJy4vZm9ybSc7XG5pbXBvcnQgbG9naW5Vc2VyIGZyb20gJy4uLy4uL2FjdGlvbnMvbG9naW5Vc2VyJztcbmltcG9ydCBhcGkgZnJvbSAnLi4vaGVscGVycy9hcGknO1xuXG5jbGFzcyBMb2dpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5vbkxvZ2luVXNlciA9IHRoaXMub25Mb2dpblVzZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uRm9jdXMgPSB0aGlzLm9uRm9jdXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZXJyb3JfbWVzc2FnZTogJydcbiAgICB9O1xuICB9XG5cbiAgb25Gb2N1cygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JfbWVzc2FnZTogJycgfSk7XG4gIH1cblxuICBvbkxvZ2luVXNlcihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCB7IHVzZXJuYW1lLCBwYXNzd29yZCB9ID0gdGhpcztcbiAgICB1c2VybmFtZSA9IHVzZXJuYW1lLnZhbHVlLnRyaW0oKTtcbiAgICBwYXNzd29yZCA9IHBhc3N3b3JkLnZhbHVlO1xuICAgIGlmICh1c2VybmFtZSAhPT0gJycgfHwgcGFzc3dvcmQgIT09ICcnKSB7XG4gICAgICBjb25zdCB1c2VyU3RyaW5nID0gYHVzZXJuYW1lPSR7dXNlcm5hbWV9JnBhc3N3b3JkPSR7cGFzc3dvcmR9YDtcbiAgICAgIGFwaSh1c2VyU3RyaW5nLCAnL2FwaS9zaWduaW4nLCAnUE9TVCcpLnRoZW4oXG4gICAgICAgIChfbG9naW5SZXMpID0+IHtcbiAgICAgICAgICBpZiAoX2xvZ2luUmVzLmVycm9yID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25Mb2dpblVzZXIoSlNPTi5zdHJpbmdpZnkoX2xvZ2luUmVzKSk7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCd1c2VyJywgSlNPTi5zdHJpbmdpZnkoX2xvZ2luUmVzKSk7XG4gICAgICAgICAgICBsb2NhdGlvbi5oYXNoID0gJyNkYXNoYm9hcmQnO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JfbWVzc2FnZTogX2xvZ2luUmVzLmVycm9yLm1lc3NhZ2UgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JfbWVzc2FnZTogJ0Vycm9yOiBPbmUgb3IgbW9yZSBmaWVsZHMgYXJlIGVtcHR5JyB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxGb3JtIHRpdGxlPSdMb2dpbiB0byB5b3VyIGFjY291bnQnIHNpZGVtZW51PXtmYWxzZX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1maWVsZCc+XG4gICAgICAgICAgPGlucHV0IG9uRm9jdXM9e3RoaXMub25Gb2N1c31cbiAgICAgICAgICB0eXBlPSd0ZXh0JyBpZD0ndXNlcm5hbWUnXG4gICAgICAgICAgcmVmID0geyhpbnB1dCkgPT4geyB0aGlzLnVzZXJuYW1lID0gaW5wdXQ7IH19IC8+XG4gICAgICAgICAgPGxhYmVsIGZvcj0ndXNlcm5hbWUnPlVzZXJuYW1lPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1maWVsZCc+XG4gICAgICAgICAgPGlucHV0IG9uRm9jdXM9e3RoaXMub25Gb2N1c31cbiAgICAgICAgICB0eXBlPSdwYXNzd29yZCcgaWQ9J3Bhc3N3b3JkJyByZWY9eyhpbnB1dCkgPT4geyB0aGlzLnBhc3N3b3JkID0gaW5wdXQ7IH19Lz5cbiAgICAgICAgICA8bGFiZWwgZm9yPSdwYXNzd29yZCc+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgeyB0aGlzLnN0YXRlLmVycm9yX21lc3NhZ2UgPT09ICcnID8gJycgOlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVkIGNhcmQnIHN0eWxlPXt7IHBhZGRpbmc6ICc1cHggMTBweCcgfX0+e3RoaXMuc3RhdGUuZXJyb3JfbWVzc2FnZX08L2Rpdj59XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWN0aW9uJz5cbiAgICAgICAgICA8YSBocmVmPSdyZWNvdmVyLXBhc3N3b3JkJz5Gb3Jnb3QgUGFzc3dvcmQ/PC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICBvbkNsaWNrPSB7IHRoaXMub25Mb2dpblVzZXIgfVxuICAgICAgICBjbGFzc05hbWU9J3dhdmVzLWVmZmVjdCB3YXZlcy1saWdodCBidG4gYWN0aW9uLWJ0bic+XG4gICAgICAgIExvZ2luPC9idXR0b24+XG4gICAgICAgIDxhIGNsYXNzTmFtZT0ncmlnaHQgd2F2ZXMtZWZmZWN0IHdhdmVzLXRlYWwgYnRuLWZsYXQgYWN0aW9uLWJ0bidcbiAgICAgICAgICBocmVmPScjcmVnaXN0ZXInPlJlZ2lzdGVyPC9hPlxuICAgICAgPC9Gb3JtPlxuICAgICk7XG4gIH1cbn1cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICByZXR1cm4ge1xuICAgIG9uTG9naW5Vc2VyOiB1c2VyID0+IGRpc3BhdGNoKGxvZ2luVXNlcih1c2VyKSlcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobnVsbCwgbWFwRGlzcGF0Y2hUb1Byb3BzKShMb2dpbik7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9qcy9jb21wb25lbnRzL3ByZXNlbnRhdGlvbmFsL2xvZ2luLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==