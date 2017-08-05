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
      error_message: ''
    };
    return _this;
  }

  _createClass(NewPassword, [{
    key: 'onFocus',
    value: function onFocus() {
      this.setState({ error_message: '' });
    }
  }, {
    key: 'onSubmitPassword',
    value: function onSubmitPassword(e) {
      var _this2 = this;

      e.preventDefault();
      if (this.password.value !== this.confirmPassword.value) {
        this.setState({ error_message: 'Passwords don\'t match.' });
        return;
      }
      if (this.password.value !== '') {
        (0, _api2.default)('password=' + this.password.value, '/api/users/reset-password/', 'POST').then(function (response) {
          _this2.setState;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9uZXctcGFzc3dvcmQuanM/NTNiOCJdLCJuYW1lcyI6WyJOZXdQYXNzd29yZCIsInByb3BzIiwib25TdWJtaXRQYXNzd29yZCIsImJpbmQiLCJvbkZvY3VzIiwic3RhdGUiLCJlcnJvcl9tZXNzYWdlIiwic2V0U3RhdGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJwYXNzd29yZCIsInZhbHVlIiwiY29uZmlybVBhc3N3b3JkIiwidGhlbiIsInJlc3BvbnNlIiwiaW5wdXQiLCJwYWRkaW5nIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLFc7OztBQUVKLHVCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEhBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLGdCQUFMLEdBQXdCLE1BQUtBLGdCQUFMLENBQXNCQyxJQUF0QixPQUF4QjtBQUNBLFVBQUtDLE9BQUwsR0FBZSxNQUFLQSxPQUFMLENBQWFELElBQWIsT0FBZjtBQUNBLFVBQUtFLEtBQUwsR0FBYTtBQUNYQyxxQkFBZTtBQURKLEtBQWI7QUFKaUI7QUFPbEI7Ozs7OEJBRVM7QUFDUixXQUFLQyxRQUFMLENBQWMsRUFBRUQsZUFBZSxFQUFqQixFQUFkO0FBQ0Q7OztxQ0FFZ0JFLEMsRUFBRztBQUFBOztBQUNsQkEsUUFBRUMsY0FBRjtBQUNBLFVBQUksS0FBS0MsUUFBTCxDQUFjQyxLQUFkLEtBQXdCLEtBQUtDLGVBQUwsQ0FBcUJELEtBQWpELEVBQXdEO0FBQ3RELGFBQUtKLFFBQUwsQ0FBYyxFQUFFRCxlQUFlLHlCQUFqQixFQUFkO0FBQ0E7QUFDRDtBQUNELFVBQUksS0FBS0ksUUFBTCxDQUFjQyxLQUFkLEtBQXdCLEVBQTVCLEVBQWdDO0FBQzlCLHlDQUFnQixLQUFLRCxRQUFMLENBQWNDLEtBQTlCLEVBQXVDLDRCQUF2QyxFQUFxRSxNQUFyRSxFQUNDRSxJQURELENBQ00sVUFBQ0MsUUFBRCxFQUFjO0FBQ2xCLGlCQUFLUCxRQUFMO0FBQ0QsU0FIRDtBQUlEO0FBQ0Y7Ozs2QkFFUTtBQUFBOztBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQU0sT0FBTSxnQkFBWixFQUE2QixVQUFVLEtBQXZDO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSxhQUFmO0FBQ0UsbURBQU8sU0FBUyxLQUFLSCxPQUFyQjtBQUNBLGtCQUFLLFVBREwsRUFDZ0IsSUFBRyxVQURuQixFQUM4QixLQUFLLGFBQUNXLEtBQUQsRUFBVztBQUFFLHFCQUFLTCxRQUFMLEdBQWdCSyxLQUFoQjtBQUF3QixhQUR4RSxHQURGO0FBR0U7QUFBQTtBQUFBLGNBQU8sU0FBSSxVQUFYO0FBQUE7QUFBQTtBQUhGLFNBREY7QUFNRTtBQUFBO0FBQUEsWUFBSyxXQUFVLGFBQWY7QUFDRSxtREFBTyxTQUFTLEtBQUtYLE9BQXJCO0FBQ0Esa0JBQUssVUFETCxFQUNnQixJQUFHLFdBRG5CLEVBQytCLEtBQUssYUFBQ1csS0FBRCxFQUFXO0FBQUUscUJBQUtILGVBQUwsR0FBdUJHLEtBQXZCO0FBQStCLGFBRGhGLEdBREY7QUFHRTtBQUFBO0FBQUEsY0FBTyxTQUFJLFdBQVg7QUFBQTtBQUFBO0FBSEYsU0FORjtBQVdJLGFBQUtWLEtBQUwsQ0FBV0MsYUFBWCxLQUE2QixFQUE3QixHQUFrQyxFQUFsQyxHQUNGO0FBQUE7QUFBQSxZQUFLLFdBQVUsVUFBZixFQUEwQixPQUFPLEVBQUVVLFNBQVMsVUFBWCxFQUFqQztBQUEyRCxlQUFLWCxLQUFMLENBQVdDO0FBQXRFLFNBWkY7QUFhRTtBQUFBO0FBQUE7QUFDQSxxQkFBVyxLQUFLSixnQkFEaEI7QUFFQSx1QkFBVSx5Q0FGVjtBQUFBO0FBQUEsU0FiRjtBQWlCRTtBQUFBO0FBQUEsWUFBRyxXQUFVLG1EQUFiO0FBQ0Usa0JBQUssUUFEUDtBQUFBO0FBQUE7QUFqQkYsT0FERjtBQXNCRDs7OztFQXBEdUIsZ0JBQU1lLFM7O2tCQXVEakJqQixXIiwiZmlsZSI6IjAuYjRmMmZjMjc4YzU2MzJiNWYyOGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRm9ybSBmcm9tICcuL2Zvcm0nO1xuaW1wb3J0IGFwaSBmcm9tICcuLi9oZWxwZXJzL2FwaSc7XG5cbmNsYXNzIE5ld1Bhc3N3b3JkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLm9uU3VibWl0UGFzc3dvcmQgPSB0aGlzLm9uU3VibWl0UGFzc3dvcmQuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uRm9jdXMgPSB0aGlzLm9uRm9jdXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZXJyb3JfbWVzc2FnZTogJydcbiAgICB9O1xuICB9XG5cbiAgb25Gb2N1cygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JfbWVzc2FnZTogJycgfSk7XG4gIH1cblxuICBvblN1Ym1pdFBhc3N3b3JkKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKHRoaXMucGFzc3dvcmQudmFsdWUgIT09IHRoaXMuY29uZmlybVBhc3N3b3JkLnZhbHVlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JfbWVzc2FnZTogJ1Bhc3N3b3JkcyBkb25cXCd0IG1hdGNoLicgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLnBhc3N3b3JkLnZhbHVlICE9PSAnJykge1xuICAgICAgYXBpKGBwYXNzd29yZD0ke3RoaXMucGFzc3dvcmQudmFsdWV9YCwgJy9hcGkvdXNlcnMvcmVzZXQtcGFzc3dvcmQvJywgJ1BPU1QnKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGVcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEZvcm0gdGl0bGU9J1Jlc2V0IFBhc3N3b3JkJyBzaWRlbWVudT17ZmFsc2V9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtZmllbGQnPlxuICAgICAgICAgIDxpbnB1dCBvbkZvY3VzPXt0aGlzLm9uRm9jdXN9XG4gICAgICAgICAgdHlwZT0ncGFzc3dvcmQnIGlkPSdwYXNzd29yZCcgcmVmPXsoaW5wdXQpID0+IHsgdGhpcy5wYXNzd29yZCA9IGlucHV0OyB9fS8+XG4gICAgICAgICAgPGxhYmVsIGZvcj0ncGFzc3dvcmQnPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1maWVsZCc+XG4gICAgICAgICAgPGlucHV0IG9uRm9jdXM9e3RoaXMub25Gb2N1c31cbiAgICAgICAgICB0eXBlPSdwYXNzd29yZCcgaWQ9J2NwYXNzd29yZCcgcmVmPXsoaW5wdXQpID0+IHsgdGhpcy5jb25maXJtUGFzc3dvcmQgPSBpbnB1dDsgfX0vPlxuICAgICAgICAgIDxsYWJlbCBmb3I9J2NwYXNzd29yZCc+UGFzc3dvcmQgQWdhaW48L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgeyB0aGlzLnN0YXRlLmVycm9yX21lc3NhZ2UgPT09ICcnID8gJycgOlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVkIGNhcmQnIHN0eWxlPXt7IHBhZGRpbmc6ICc1cHggMTBweCcgfX0+e3RoaXMuc3RhdGUuZXJyb3JfbWVzc2FnZX08L2Rpdj59XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgb25DbGljaz0geyB0aGlzLm9uU3VibWl0UGFzc3dvcmQgfVxuICAgICAgICBjbGFzc05hbWU9J3dhdmVzLWVmZmVjdCB3YXZlcy1saWdodCBidG4gYWN0aW9uLWJ0bic+XG4gICAgICAgIFJlc2V0PC9idXR0b24+XG4gICAgICAgIDxhIGNsYXNzTmFtZT0ncmlnaHQgd2F2ZXMtZWZmZWN0IHdhdmVzLXRlYWwgYnRuLWZsYXQgYWN0aW9uLWJ0bidcbiAgICAgICAgICBocmVmPScjbG9naW4nPkxvZ2luPC9hPlxuICAgICAgPC9Gb3JtPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmV3UGFzc3dvcmQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9uZXctcGFzc3dvcmQuanMiXSwic291cmNlUm9vdCI6IiJ9