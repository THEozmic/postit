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

      e.preventDefault();
      var username = this.username,
          password = this.password;

      username = username.value.trim();
      password = password.value;
      var user = {
        username: username,
        password: password
      };

      var userString = 'username=' + username + '&password=' + password;
      (0, _api2.default)(userString, 'http://localhost:3000/api/signin', 'POST').then(function (_loginRes) {
        if (_loginRes.error === undefined) {
          console.log(_loginRes);
          _this2.props.onLoginUser(user);
          sessionStorage.setItem('user', JSON.stringify(_loginRes));
          location.hash = '#dashboard';
        } else {
          _this2.setState({ error_message: _loginRes.error.message });
        }
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9sb2dpbi5qcz85Mjc0Il0sIm5hbWVzIjpbIkxvZ2luIiwicHJvcHMiLCJvbkxvZ2luVXNlciIsImJpbmQiLCJvbkZvY3VzIiwic3RhdGUiLCJlcnJvcl9tZXNzYWdlIiwic2V0U3RhdGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwidmFsdWUiLCJ0cmltIiwidXNlciIsInVzZXJTdHJpbmciLCJ0aGVuIiwiX2xvZ2luUmVzIiwiZXJyb3IiLCJ1bmRlZmluZWQiLCJjb25zb2xlIiwibG9nIiwic2Vzc2lvblN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImxvY2F0aW9uIiwiaGFzaCIsIm1lc3NhZ2UiLCJpbnB1dCIsInBhZGRpbmciLCJDb21wb25lbnQiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLEs7OztBQUVKLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkMsSUFBakIsT0FBbkI7QUFDQSxVQUFLQyxPQUFMLEdBQWUsTUFBS0EsT0FBTCxDQUFhRCxJQUFiLE9BQWY7QUFDQSxVQUFLRSxLQUFMLEdBQWE7QUFDWEMscUJBQWU7QUFESixLQUFiO0FBSmlCO0FBT2xCOzs7OzhCQUVTO0FBQ1IsV0FBS0MsUUFBTCxDQUFjLEVBQUVELGVBQWUsRUFBakIsRUFBZDtBQUNEOzs7Z0NBRVdFLEMsRUFBRztBQUFBOztBQUNiQSxRQUFFQyxjQUFGO0FBRGEsVUFFUEMsUUFGTyxHQUVnQixJQUZoQixDQUVQQSxRQUZPO0FBQUEsVUFFR0MsUUFGSCxHQUVnQixJQUZoQixDQUVHQSxRQUZIOztBQUdiRCxpQkFBV0EsU0FBU0UsS0FBVCxDQUFlQyxJQUFmLEVBQVg7QUFDQUYsaUJBQVdBLFNBQVNDLEtBQXBCO0FBQ0EsVUFBTUUsT0FBTztBQUNYSiwwQkFEVztBQUVYQztBQUZXLE9BQWI7O0FBS0EsVUFBTUksMkJBQXlCTCxRQUF6QixrQkFBOENDLFFBQXBEO0FBQ0EseUJBQUlJLFVBQUosRUFBZ0Isa0NBQWhCLEVBQW9ELE1BQXBELEVBQTREQyxJQUE1RCxDQUNFLFVBQUNDLFNBQUQsRUFBZTtBQUNiLFlBQUlBLFVBQVVDLEtBQVYsS0FBb0JDLFNBQXhCLEVBQW1DO0FBQ2pDQyxrQkFBUUMsR0FBUixDQUFZSixTQUFaO0FBQ0EsaUJBQUtoQixLQUFMLENBQVdDLFdBQVgsQ0FBdUJZLElBQXZCO0FBQ0FRLHlCQUFlQyxPQUFmLENBQXVCLE1BQXZCLEVBQStCQyxLQUFLQyxTQUFMLENBQWVSLFNBQWYsQ0FBL0I7QUFDQVMsbUJBQVNDLElBQVQsR0FBZ0IsWUFBaEI7QUFDRCxTQUxELE1BS087QUFDTCxpQkFBS3BCLFFBQUwsQ0FBYyxFQUFFRCxlQUFlVyxVQUFVQyxLQUFWLENBQWdCVSxPQUFqQyxFQUFkO0FBQ0Q7QUFDRixPQVZIO0FBWUQ7Ozs2QkFFUTtBQUFBOztBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQU0sT0FBTSx1QkFBWjtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsYUFBZjtBQUNFLG1EQUFPLFNBQVMsS0FBS3hCLE9BQXJCO0FBQ0Esa0JBQUssTUFETCxFQUNZLElBQUcsVUFEZjtBQUVBLGlCQUFPLGFBQUN5QixLQUFELEVBQVc7QUFBRSxxQkFBS25CLFFBQUwsR0FBZ0JtQixLQUFoQjtBQUF3QixhQUY1QyxHQURGO0FBSUU7QUFBQTtBQUFBLGNBQU8sU0FBSSxVQUFYO0FBQUE7QUFBQTtBQUpGLFNBREY7QUFPRTtBQUFBO0FBQUEsWUFBSyxXQUFVLGFBQWY7QUFDRSxtREFBTyxTQUFTLEtBQUt6QixPQUFyQjtBQUNBLGtCQUFLLFVBREwsRUFDZ0IsSUFBRyxVQURuQixFQUM4QixLQUFLLGFBQUN5QixLQUFELEVBQVc7QUFBRSxxQkFBS2xCLFFBQUwsR0FBZ0JrQixLQUFoQjtBQUF3QixhQUR4RSxHQURGO0FBR0U7QUFBQTtBQUFBLGNBQU8sU0FBSSxVQUFYO0FBQUE7QUFBQTtBQUhGLFNBUEY7QUFZSSxhQUFLeEIsS0FBTCxDQUFXQyxhQUFYLEtBQTZCLEVBQTdCLEdBQWtDLEVBQWxDLEdBQ0Y7QUFBQTtBQUFBLFlBQUssV0FBVSxVQUFmLEVBQTBCLE9BQU8sRUFBRXdCLFNBQVMsVUFBWCxFQUFqQztBQUEyRCxlQUFLekIsS0FBTCxDQUFXQztBQUF0RSxTQWJGO0FBY0U7QUFBQTtBQUFBO0FBQ0EscUJBQVcsS0FBS0osV0FEaEI7QUFFQSx1QkFBVSx5Q0FGVjtBQUFBO0FBQUEsU0FkRjtBQWtCRTtBQUFBO0FBQUEsWUFBRyxXQUFVLG1EQUFiO0FBQ0Usa0JBQUssV0FEUDtBQUFBO0FBQUE7QUFsQkYsT0FERjtBQXVCRDs7OztFQWhFaUIsZ0JBQU02QixTOztBQWtFMUIsSUFBTUMscUJBQXFCLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRCxFQUFjO0FBQ3ZDLFNBQU87QUFDTC9CLGlCQUFhO0FBQUEsYUFBUStCLFNBQVMseUJBQVVuQixJQUFWLENBQVQsQ0FBUjtBQUFBO0FBRFIsR0FBUDtBQUdELENBSkQ7O2tCQU1lLHlCQUFRLElBQVIsRUFBY2tCLGtCQUFkLEVBQWtDaEMsS0FBbEMsQyIsImZpbGUiOiIwLmYxNjM5MGM3NDM2YjNjMjkwOTdhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBGb3JtIGZyb20gJy4vZm9ybSc7XG5pbXBvcnQgbG9naW5Vc2VyIGZyb20gJy4uLy4uL2FjdGlvbnMvbG9naW5Vc2VyJztcbmltcG9ydCBhcGkgZnJvbSAnLi4vaGVscGVycy9hcGknO1xuXG5jbGFzcyBMb2dpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5vbkxvZ2luVXNlciA9IHRoaXMub25Mb2dpblVzZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uRm9jdXMgPSB0aGlzLm9uRm9jdXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZXJyb3JfbWVzc2FnZTogJydcbiAgICB9O1xuICB9XG5cbiAgb25Gb2N1cygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JfbWVzc2FnZTogJycgfSk7XG4gIH1cblxuICBvbkxvZ2luVXNlcihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCB7IHVzZXJuYW1lLCBwYXNzd29yZCB9ID0gdGhpcztcbiAgICB1c2VybmFtZSA9IHVzZXJuYW1lLnZhbHVlLnRyaW0oKTtcbiAgICBwYXNzd29yZCA9IHBhc3N3b3JkLnZhbHVlO1xuICAgIGNvbnN0IHVzZXIgPSB7XG4gICAgICB1c2VybmFtZSxcbiAgICAgIHBhc3N3b3JkXG4gICAgfTtcbiAgICBcbiAgICBjb25zdCB1c2VyU3RyaW5nID0gYHVzZXJuYW1lPSR7dXNlcm5hbWV9JnBhc3N3b3JkPSR7cGFzc3dvcmR9YDtcbiAgICBhcGkodXNlclN0cmluZywgJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvc2lnbmluJywgJ1BPU1QnKS50aGVuKFxuICAgICAgKF9sb2dpblJlcykgPT4ge1xuICAgICAgICBpZiAoX2xvZ2luUmVzLmVycm9yID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhfbG9naW5SZXMpO1xuICAgICAgICAgIHRoaXMucHJvcHMub25Mb2dpblVzZXIodXNlcik7XG4gICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgndXNlcicsIEpTT04uc3RyaW5naWZ5KF9sb2dpblJlcykpO1xuICAgICAgICAgIGxvY2F0aW9uLmhhc2ggPSAnI2Rhc2hib2FyZCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yX21lc3NhZ2U6IF9sb2dpblJlcy5lcnJvci5tZXNzYWdlIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEZvcm0gdGl0bGU9J0xvZ2luIHRvIHlvdXIgYWNjb3VudCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1maWVsZCc+XG4gICAgICAgICAgPGlucHV0IG9uRm9jdXM9e3RoaXMub25Gb2N1c31cbiAgICAgICAgICB0eXBlPSd0ZXh0JyBpZD0ndXNlcm5hbWUnXG4gICAgICAgICAgcmVmID0geyhpbnB1dCkgPT4geyB0aGlzLnVzZXJuYW1lID0gaW5wdXQ7IH19IC8+XG4gICAgICAgICAgPGxhYmVsIGZvcj0ndXNlcm5hbWUnPlVzZXJuYW1lPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1maWVsZCc+XG4gICAgICAgICAgPGlucHV0IG9uRm9jdXM9e3RoaXMub25Gb2N1c31cbiAgICAgICAgICB0eXBlPSdwYXNzd29yZCcgaWQ9J3Bhc3N3b3JkJyByZWY9eyhpbnB1dCkgPT4geyB0aGlzLnBhc3N3b3JkID0gaW5wdXQ7IH19Lz5cbiAgICAgICAgICA8bGFiZWwgZm9yPSdwYXNzd29yZCc+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgeyB0aGlzLnN0YXRlLmVycm9yX21lc3NhZ2UgPT09ICcnID8gJycgOlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVkIGNhcmQnIHN0eWxlPXt7IHBhZGRpbmc6ICc1cHggMTBweCcgfX0+e3RoaXMuc3RhdGUuZXJyb3JfbWVzc2FnZX08L2Rpdj59XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgb25DbGljaz0geyB0aGlzLm9uTG9naW5Vc2VyIH1cbiAgICAgICAgY2xhc3NOYW1lPSd3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHQgYnRuIGFjdGlvbi1idG4nPlxuICAgICAgICBMb2dpbjwvYnV0dG9uPlxuICAgICAgICA8YSBjbGFzc05hbWU9J3JpZ2h0IHdhdmVzLWVmZmVjdCB3YXZlcy10ZWFsIGJ0bi1mbGF0IGFjdGlvbi1idG4nXG4gICAgICAgICAgaHJlZj0nI3JlZ2lzdGVyJz5SZWdpc3RlcjwvYT5cbiAgICAgIDwvRm9ybT5cbiAgICApO1xuICB9XG59XG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBvbkxvZ2luVXNlcjogdXNlciA9PiBkaXNwYXRjaChsb2dpblVzZXIodXNlcikpXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIG1hcERpc3BhdGNoVG9Qcm9wcykoTG9naW4pO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9sb2dpbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=