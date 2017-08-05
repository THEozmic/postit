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
      success: ''
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
      if (this.password.value !== this.confirmPassword.value) {
        this.setState({ error: 'Passwords don\'t match.' });
        return;
      }
      if (this.password.value !== '') {
        (0, _api2.default)('password=' + this.password.value, '/api/users/reset-password/', 'POST').then(function (response) {
          _this2.setState({ success: 'Password res' });
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
        ),
        this.state.error_message === '' ? '' : _react2.default.createElement(
          'div',
          { className: 'red card', style: { padding: '5px 10px' } },
          this.state.error_message
        ),
        _react2.default.createElement(
          'button',
          {
            onClick: this.onSubmitPassword,
            className: 'waves-effect waves-light btn action-btn' },
          'Reset'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9uZXctcGFzc3dvcmQuanM/NTNiOCJdLCJuYW1lcyI6WyJOZXdQYXNzd29yZCIsInByb3BzIiwib25TdWJtaXRQYXNzd29yZCIsImJpbmQiLCJvbkZvY3VzIiwic3RhdGUiLCJlcnJvciIsInN1Y2Nlc3MiLCJzZXRTdGF0ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBhc3N3b3JkIiwidmFsdWUiLCJjb25maXJtUGFzc3dvcmQiLCJ0aGVuIiwicmVzcG9uc2UiLCJpbnB1dCIsImVycm9yX21lc3NhZ2UiLCJwYWRkaW5nIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLFc7OztBQUVKLHVCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEhBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLGdCQUFMLEdBQXdCLE1BQUtBLGdCQUFMLENBQXNCQyxJQUF0QixPQUF4QjtBQUNBLFVBQUtDLE9BQUwsR0FBZSxNQUFLQSxPQUFMLENBQWFELElBQWIsT0FBZjtBQUNBLFVBQUtFLEtBQUwsR0FBYTtBQUNYQyxhQUFPLEVBREk7QUFFWEMsZUFBUztBQUZFLEtBQWI7QUFKaUI7QUFRbEI7Ozs7OEJBRVM7QUFDUixXQUFLQyxRQUFMLENBQWMsRUFBRUYsT0FBTyxFQUFULEVBQWQ7QUFDRDs7O3FDQUVnQkcsQyxFQUFHO0FBQUE7O0FBQ2xCQSxRQUFFQyxjQUFGO0FBQ0EsVUFBSSxLQUFLQyxRQUFMLENBQWNDLEtBQWQsS0FBd0IsS0FBS0MsZUFBTCxDQUFxQkQsS0FBakQsRUFBd0Q7QUFDdEQsYUFBS0osUUFBTCxDQUFjLEVBQUVGLE9BQU8seUJBQVQsRUFBZDtBQUNBO0FBQ0Q7QUFDRCxVQUFJLEtBQUtLLFFBQUwsQ0FBY0MsS0FBZCxLQUF3QixFQUE1QixFQUFnQztBQUM5Qix5Q0FBZ0IsS0FBS0QsUUFBTCxDQUFjQyxLQUE5QixFQUF1Qyw0QkFBdkMsRUFBcUUsTUFBckUsRUFDQ0UsSUFERCxDQUNNLFVBQUNDLFFBQUQsRUFBYztBQUNsQixpQkFBS1AsUUFBTCxDQUFjLEVBQUVELFNBQVMsY0FBWCxFQUFkO0FBQ0QsU0FIRDtBQUlEO0FBQ0Y7Ozs2QkFFUTtBQUFBOztBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQU0sT0FBTSxnQkFBWixFQUE2QixVQUFVLEtBQXZDO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSxhQUFmO0FBQ0UsbURBQU8sU0FBUyxLQUFLSCxPQUFyQjtBQUNBLGtCQUFLLFVBREwsRUFDZ0IsSUFBRyxVQURuQixFQUM4QixLQUFLLGFBQUNZLEtBQUQsRUFBVztBQUFFLHFCQUFLTCxRQUFMLEdBQWdCSyxLQUFoQjtBQUF3QixhQUR4RSxHQURGO0FBR0U7QUFBQTtBQUFBLGNBQU8sU0FBSSxVQUFYO0FBQUE7QUFBQTtBQUhGLFNBREY7QUFNRTtBQUFBO0FBQUEsWUFBSyxXQUFVLGFBQWY7QUFDRSxtREFBTyxTQUFTLEtBQUtaLE9BQXJCO0FBQ0Esa0JBQUssVUFETCxFQUNnQixJQUFHLFdBRG5CLEVBQytCLEtBQUssYUFBQ1ksS0FBRCxFQUFXO0FBQUUscUJBQUtILGVBQUwsR0FBdUJHLEtBQXZCO0FBQStCLGFBRGhGLEdBREY7QUFHRTtBQUFBO0FBQUEsY0FBTyxTQUFJLFdBQVg7QUFBQTtBQUFBO0FBSEYsU0FORjtBQVdJLGFBQUtYLEtBQUwsQ0FBV1ksYUFBWCxLQUE2QixFQUE3QixHQUFrQyxFQUFsQyxHQUNGO0FBQUE7QUFBQSxZQUFLLFdBQVUsVUFBZixFQUEwQixPQUFPLEVBQUVDLFNBQVMsVUFBWCxFQUFqQztBQUEyRCxlQUFLYixLQUFMLENBQVdZO0FBQXRFLFNBWkY7QUFhRTtBQUFBO0FBQUE7QUFDQSxxQkFBVyxLQUFLZixnQkFEaEI7QUFFQSx1QkFBVSx5Q0FGVjtBQUFBO0FBQUEsU0FiRjtBQWlCRTtBQUFBO0FBQUEsWUFBRyxXQUFVLG1EQUFiO0FBQ0Usa0JBQUssUUFEUDtBQUFBO0FBQUE7QUFqQkYsT0FERjtBQXNCRDs7OztFQXJEdUIsZ0JBQU1pQixTOztrQkF3RGpCbkIsVyIsImZpbGUiOiIwLmI5NTZkMmVhNzM2NWVlZTkzOWVmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZvcm0gZnJvbSAnLi9mb3JtJztcbmltcG9ydCBhcGkgZnJvbSAnLi4vaGVscGVycy9hcGknO1xuXG5jbGFzcyBOZXdQYXNzd29yZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5vblN1Ym1pdFBhc3N3b3JkID0gdGhpcy5vblN1Ym1pdFBhc3N3b3JkLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkZvY3VzID0gdGhpcy5vbkZvY3VzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGVycm9yOiAnJyxcbiAgICAgIHN1Y2Nlc3M6ICcnXG4gICAgfTtcbiAgfVxuXG4gIG9uRm9jdXMoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yOiAnJyB9KTtcbiAgfVxuXG4gIG9uU3VibWl0UGFzc3dvcmQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAodGhpcy5wYXNzd29yZC52YWx1ZSAhPT0gdGhpcy5jb25maXJtUGFzc3dvcmQudmFsdWUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcjogJ1Bhc3N3b3JkcyBkb25cXCd0IG1hdGNoLicgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLnBhc3N3b3JkLnZhbHVlICE9PSAnJykge1xuICAgICAgYXBpKGBwYXNzd29yZD0ke3RoaXMucGFzc3dvcmQudmFsdWV9YCwgJy9hcGkvdXNlcnMvcmVzZXQtcGFzc3dvcmQvJywgJ1BPU1QnKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdWNjZXNzOiAnUGFzc3dvcmQgcmVzJyB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEZvcm0gdGl0bGU9J1Jlc2V0IFBhc3N3b3JkJyBzaWRlbWVudT17ZmFsc2V9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtZmllbGQnPlxuICAgICAgICAgIDxpbnB1dCBvbkZvY3VzPXt0aGlzLm9uRm9jdXN9XG4gICAgICAgICAgdHlwZT0ncGFzc3dvcmQnIGlkPSdwYXNzd29yZCcgcmVmPXsoaW5wdXQpID0+IHsgdGhpcy5wYXNzd29yZCA9IGlucHV0OyB9fS8+XG4gICAgICAgICAgPGxhYmVsIGZvcj0ncGFzc3dvcmQnPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1maWVsZCc+XG4gICAgICAgICAgPGlucHV0IG9uRm9jdXM9e3RoaXMub25Gb2N1c31cbiAgICAgICAgICB0eXBlPSdwYXNzd29yZCcgaWQ9J2NwYXNzd29yZCcgcmVmPXsoaW5wdXQpID0+IHsgdGhpcy5jb25maXJtUGFzc3dvcmQgPSBpbnB1dDsgfX0vPlxuICAgICAgICAgIDxsYWJlbCBmb3I9J2NwYXNzd29yZCc+UGFzc3dvcmQgQWdhaW48L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgeyB0aGlzLnN0YXRlLmVycm9yX21lc3NhZ2UgPT09ICcnID8gJycgOlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVkIGNhcmQnIHN0eWxlPXt7IHBhZGRpbmc6ICc1cHggMTBweCcgfX0+e3RoaXMuc3RhdGUuZXJyb3JfbWVzc2FnZX08L2Rpdj59XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgb25DbGljaz0geyB0aGlzLm9uU3VibWl0UGFzc3dvcmQgfVxuICAgICAgICBjbGFzc05hbWU9J3dhdmVzLWVmZmVjdCB3YXZlcy1saWdodCBidG4gYWN0aW9uLWJ0bic+XG4gICAgICAgIFJlc2V0PC9idXR0b24+XG4gICAgICAgIDxhIGNsYXNzTmFtZT0ncmlnaHQgd2F2ZXMtZWZmZWN0IHdhdmVzLXRlYWwgYnRuLWZsYXQgYWN0aW9uLWJ0bidcbiAgICAgICAgICBocmVmPScjbG9naW4nPkxvZ2luPC9hPlxuICAgICAgPC9Gb3JtPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmV3UGFzc3dvcmQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9uZXctcGFzc3dvcmQuanMiXSwic291cmNlUm9vdCI6IiJ9