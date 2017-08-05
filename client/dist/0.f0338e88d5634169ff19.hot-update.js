webpackHotUpdate(0,{

/***/ 320:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _form = __webpack_require__(27);

var _form2 = _interopRequireDefault(_form);

var _api = __webpack_require__(16);

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewPassword = function (_React$Component) {
  _inherits(NewPassword, _React$Component);

  function NewPassword(props) {
    _classCallCheck(this, NewPassword);

    var _this = _possibleConstructorReturn(this, (NewPassword.__proto__ || Object.getPrototypeOf(NewPassword)).call(this, props));

    _this.onSubmitPassword = _this.onSubmitPassword.bind(_this);
    _this.onFocus = _this.onFocus.bind(_this);
    _this.state = {
      error: '',
      success: '',
      resetText: 'Reset'
    };
    return _this;
  }

  _createClass(NewPassword, [{
    key: 'onFocus',
    value: function onFocus() {
      this.setState({ error: '' });
    }
  }, {
    key: 'onSubmitPassword',
    value: function onSubmitPassword(e) {
      var _this2 = this;

      e.preventDefault();
      if (this.state.resetText === 'Okay') {
        location.hash = '#login';
        return;
      }
      if (this.password.value !== this.confirmPassword.value) {
        this.setState({ error: 'Passwords don\'t match.' });
        return;
      }
      if (this.password.value !== '') {

        (0, _api2.default)('password=' + this.password.value + '&email=', '/api/users/reset-password/', 'POST').then(function (response) {
          _this2.setState({
            success: 'Password reset successful',
            resetText: 'Okay'
          });
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        _form2.default,
        { title: 'Reset Password', sidemenu: false },
        this.state.success === '' ? _react2.default.createElement(
          'div',
          null,
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
          _react2.default.createElement(
            'div',
            { className: 'input-field' },
            _react2.default.createElement('input', { onFocus: this.onFocus,
              type: 'password', id: 'cpassword', ref: function ref(input) {
                _this3.confirmPassword = input;
              } }),
            _react2.default.createElement(
              'label',
              { htmlFor: 'cpassword' },
              'Password Again'
            )
          )
        ) : _react2.default.createElement(
          'div',
          { className: 'section', style: { color: '#0275d8' } },
          this.state.success
        ),
        this.state.error === '' ? '' : _react2.default.createElement(
          'div',
          { className: 'red card', style: { padding: '5px 10px' } },
          this.state.error
        ),
        _react2.default.createElement(
          'button',
          {
            onClick: this.onSubmitPassword,
            className: 'waves-effect waves-light btn action-btn' },
          this.state.resetText
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

  return NewPassword;
}(_react2.default.Component);

exports.default = NewPassword;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9uZXctcGFzc3dvcmQuanM/NTNiOCJdLCJuYW1lcyI6WyJOZXdQYXNzd29yZCIsInByb3BzIiwib25TdWJtaXRQYXNzd29yZCIsImJpbmQiLCJvbkZvY3VzIiwic3RhdGUiLCJlcnJvciIsInN1Y2Nlc3MiLCJyZXNldFRleHQiLCJzZXRTdGF0ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImxvY2F0aW9uIiwiaGFzaCIsInBhc3N3b3JkIiwidmFsdWUiLCJjb25maXJtUGFzc3dvcmQiLCJ0aGVuIiwicmVzcG9uc2UiLCJpbnB1dCIsImNvbG9yIiwicGFkZGluZyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxXOzs7QUFFSix1QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBIQUNYQSxLQURXOztBQUVqQixVQUFLQyxnQkFBTCxHQUF3QixNQUFLQSxnQkFBTCxDQUFzQkMsSUFBdEIsT0FBeEI7QUFDQSxVQUFLQyxPQUFMLEdBQWUsTUFBS0EsT0FBTCxDQUFhRCxJQUFiLE9BQWY7QUFDQSxVQUFLRSxLQUFMLEdBQWE7QUFDWEMsYUFBTyxFQURJO0FBRVhDLGVBQVMsRUFGRTtBQUdYQyxpQkFBVztBQUhBLEtBQWI7QUFKaUI7QUFTbEI7Ozs7OEJBRVM7QUFDUixXQUFLQyxRQUFMLENBQWMsRUFBRUgsT0FBTyxFQUFULEVBQWQ7QUFDRDs7O3FDQUVnQkksQyxFQUFHO0FBQUE7O0FBQ2xCQSxRQUFFQyxjQUFGO0FBQ0EsVUFBSSxLQUFLTixLQUFMLENBQVdHLFNBQVgsS0FBeUIsTUFBN0IsRUFBcUM7QUFDbkNJLGlCQUFTQyxJQUFULEdBQWdCLFFBQWhCO0FBQ0E7QUFDRDtBQUNELFVBQUksS0FBS0MsUUFBTCxDQUFjQyxLQUFkLEtBQXdCLEtBQUtDLGVBQUwsQ0FBcUJELEtBQWpELEVBQXdEO0FBQ3RELGFBQUtOLFFBQUwsQ0FBYyxFQUFFSCxPQUFPLHlCQUFULEVBQWQ7QUFDQTtBQUNEO0FBQ0QsVUFBSSxLQUFLUSxRQUFMLENBQWNDLEtBQWQsS0FBd0IsRUFBNUIsRUFBZ0M7O0FBRTlCLHlDQUFnQixLQUFLRCxRQUFMLENBQWNDLEtBQTlCLGNBQThDLDRCQUE5QyxFQUE0RSxNQUE1RSxFQUNDRSxJQURELENBQ00sVUFBQ0MsUUFBRCxFQUFjO0FBQ2xCLGlCQUFLVCxRQUFMLENBQWM7QUFDWkYscUJBQVMsMkJBREc7QUFFWkMsdUJBQVc7QUFGQyxXQUFkO0FBSUQsU0FORDtBQU9EO0FBQ0Y7Ozs2QkFFUTtBQUFBOztBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQU0sT0FBTSxnQkFBWixFQUE2QixVQUFVLEtBQXZDO0FBQ0ksYUFBS0gsS0FBTCxDQUFXRSxPQUFYLEtBQXVCLEVBQXZCLEdBQ0Y7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxhQUFmO0FBQ0UscURBQU8sU0FBUyxLQUFLSCxPQUFyQjtBQUNBLG9CQUFLLFVBREwsRUFDZ0IsSUFBRyxVQURuQixFQUM4QixLQUFLLGFBQUNlLEtBQUQsRUFBVztBQUFFLHVCQUFLTCxRQUFMLEdBQWdCSyxLQUFoQjtBQUF3QixlQUR4RSxHQURGO0FBR0U7QUFBQTtBQUFBLGdCQUFPLFNBQUksVUFBWDtBQUFBO0FBQUE7QUFIRixXQURGO0FBTUU7QUFBQTtBQUFBLGNBQUssV0FBVSxhQUFmO0FBQ0UscURBQU8sU0FBUyxLQUFLZixPQUFyQjtBQUNBLG9CQUFLLFVBREwsRUFDZ0IsSUFBRyxXQURuQixFQUMrQixLQUFLLGFBQUNlLEtBQUQsRUFBVztBQUFFLHVCQUFLSCxlQUFMLEdBQXVCRyxLQUF2QjtBQUErQixlQURoRixHQURGO0FBR0U7QUFBQTtBQUFBLGdCQUFPLFNBQUksV0FBWDtBQUFBO0FBQUE7QUFIRjtBQU5GLFNBREUsR0FhRjtBQUFBO0FBQUEsWUFBSyxXQUFVLFNBQWYsRUFBeUIsT0FBTyxFQUFFQyxPQUFPLFNBQVQsRUFBaEM7QUFDRyxlQUFLZixLQUFMLENBQVdFO0FBRGQsU0FkRjtBQWtCSSxhQUFLRixLQUFMLENBQVdDLEtBQVgsS0FBcUIsRUFBckIsR0FBMEIsRUFBMUIsR0FDRjtBQUFBO0FBQUEsWUFBSyxXQUFVLFVBQWYsRUFBMEIsT0FBTyxFQUFFZSxTQUFTLFVBQVgsRUFBakM7QUFBMkQsZUFBS2hCLEtBQUwsQ0FBV0M7QUFBdEUsU0FuQkY7QUFvQkU7QUFBQTtBQUFBO0FBQ0EscUJBQVcsS0FBS0osZ0JBRGhCO0FBRUEsdUJBQVUseUNBRlY7QUFHQyxlQUFLRyxLQUFMLENBQVdHO0FBSFosU0FwQkY7QUF3QkU7QUFBQTtBQUFBLFlBQUcsV0FBVSxtREFBYjtBQUNFLGtCQUFLLFFBRFA7QUFBQTtBQUFBO0FBeEJGLE9BREY7QUE2QkQ7Ozs7RUFyRXVCLGdCQUFNYyxTOztrQkF3RWpCdEIsVyIsImZpbGUiOiIwLmYwMzM4ZTg4ZDU2MzQxNjlmZjE5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZvcm0gZnJvbSAnLi9mb3JtJztcbmltcG9ydCBhcGkgZnJvbSAnLi4vaGVscGVycy9hcGknO1xuXG5jbGFzcyBOZXdQYXNzd29yZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5vblN1Ym1pdFBhc3N3b3JkID0gdGhpcy5vblN1Ym1pdFBhc3N3b3JkLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkZvY3VzID0gdGhpcy5vbkZvY3VzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGVycm9yOiAnJyxcbiAgICAgIHN1Y2Nlc3M6ICcnLFxuICAgICAgcmVzZXRUZXh0OiAnUmVzZXQnXG4gICAgfTtcbiAgfVxuXG4gIG9uRm9jdXMoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yOiAnJyB9KTtcbiAgfVxuXG4gIG9uU3VibWl0UGFzc3dvcmQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAodGhpcy5zdGF0ZS5yZXNldFRleHQgPT09ICdPa2F5Jykge1xuICAgICAgbG9jYXRpb24uaGFzaCA9ICcjbG9naW4nO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5wYXNzd29yZC52YWx1ZSAhPT0gdGhpcy5jb25maXJtUGFzc3dvcmQudmFsdWUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcjogJ1Bhc3N3b3JkcyBkb25cXCd0IG1hdGNoLicgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLnBhc3N3b3JkLnZhbHVlICE9PSAnJykge1xuICAgICAgXG4gICAgICBhcGkoYHBhc3N3b3JkPSR7dGhpcy5wYXNzd29yZC52YWx1ZX0mZW1haWw9YCwgJy9hcGkvdXNlcnMvcmVzZXQtcGFzc3dvcmQvJywgJ1BPU1QnKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHN1Y2Nlc3M6ICdQYXNzd29yZCByZXNldCBzdWNjZXNzZnVsJyxcbiAgICAgICAgICByZXNldFRleHQ6ICdPa2F5J1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEZvcm0gdGl0bGU9J1Jlc2V0IFBhc3N3b3JkJyBzaWRlbWVudT17ZmFsc2V9PlxuICAgICAgICB7IHRoaXMuc3RhdGUuc3VjY2VzcyA9PT0gJycgP1xuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1maWVsZCc+XG4gICAgICAgICAgICA8aW5wdXQgb25Gb2N1cz17dGhpcy5vbkZvY3VzfVxuICAgICAgICAgICAgdHlwZT0ncGFzc3dvcmQnIGlkPSdwYXNzd29yZCcgcmVmPXsoaW5wdXQpID0+IHsgdGhpcy5wYXNzd29yZCA9IGlucHV0OyB9fS8+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPSdwYXNzd29yZCc+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1maWVsZCc+XG4gICAgICAgICAgICA8aW5wdXQgb25Gb2N1cz17dGhpcy5vbkZvY3VzfVxuICAgICAgICAgICAgdHlwZT0ncGFzc3dvcmQnIGlkPSdjcGFzc3dvcmQnIHJlZj17KGlucHV0KSA9PiB7IHRoaXMuY29uZmlybVBhc3N3b3JkID0gaW5wdXQ7IH19Lz5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9J2NwYXNzd29yZCc+UGFzc3dvcmQgQWdhaW48L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj4gOlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VjdGlvbicgc3R5bGU9e3sgY29sb3I6ICcjMDI3NWQ4JyB9fT5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5zdWNjZXNzfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgICB7IHRoaXMuc3RhdGUuZXJyb3IgPT09ICcnID8gJycgOlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVkIGNhcmQnIHN0eWxlPXt7IHBhZGRpbmc6ICc1cHggMTBweCcgfX0+e3RoaXMuc3RhdGUuZXJyb3J9PC9kaXY+fVxuICAgICAgICA8YnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9IHsgdGhpcy5vblN1Ym1pdFBhc3N3b3JkIH1cbiAgICAgICAgY2xhc3NOYW1lPSd3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHQgYnRuIGFjdGlvbi1idG4nPlxuICAgICAgICB7dGhpcy5zdGF0ZS5yZXNldFRleHR9PC9idXR0b24+XG4gICAgICAgIDxhIGNsYXNzTmFtZT0ncmlnaHQgd2F2ZXMtZWZmZWN0IHdhdmVzLXRlYWwgYnRuLWZsYXQgYWN0aW9uLWJ0bidcbiAgICAgICAgICBocmVmPScjbG9naW4nPkxvZ2luPC9hPlxuICAgICAgPC9Gb3JtPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmV3UGFzc3dvcmQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9uZXctcGFzc3dvcmQuanMiXSwic291cmNlUm9vdCI6IiJ9