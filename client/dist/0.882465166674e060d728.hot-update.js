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
      resetText: ''
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
          _this2.setState({ success: 'Password reset successfull' });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9uZXctcGFzc3dvcmQuanM/NTNiOCJdLCJuYW1lcyI6WyJOZXdQYXNzd29yZCIsInByb3BzIiwib25TdWJtaXRQYXNzd29yZCIsImJpbmQiLCJvbkZvY3VzIiwic3RhdGUiLCJlcnJvciIsInN1Y2Nlc3MiLCJyZXNldFRleHQiLCJzZXRTdGF0ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBhc3N3b3JkIiwidmFsdWUiLCJjb25maXJtUGFzc3dvcmQiLCJ0aGVuIiwicmVzcG9uc2UiLCJpbnB1dCIsImNvbG9yIiwiZXJyb3JfbWVzc2FnZSIsInBhZGRpbmciLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUEsVzs7O0FBRUosdUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwSEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsZ0JBQUwsR0FBd0IsTUFBS0EsZ0JBQUwsQ0FBc0JDLElBQXRCLE9BQXhCO0FBQ0EsVUFBS0MsT0FBTCxHQUFlLE1BQUtBLE9BQUwsQ0FBYUQsSUFBYixPQUFmO0FBQ0EsVUFBS0UsS0FBTCxHQUFhO0FBQ1hDLGFBQU8sRUFESTtBQUVYQyxlQUFTLEVBRkU7QUFHWEMsaUJBQVc7QUFIQSxLQUFiO0FBSmlCO0FBU2xCOzs7OzhCQUVTO0FBQ1IsV0FBS0MsUUFBTCxDQUFjLEVBQUVILE9BQU8sRUFBVCxFQUFkO0FBQ0Q7OztxQ0FFZ0JJLEMsRUFBRztBQUFBOztBQUNsQkEsUUFBRUMsY0FBRjtBQUNBLFVBQUksS0FBS0MsUUFBTCxDQUFjQyxLQUFkLEtBQXdCLEtBQUtDLGVBQUwsQ0FBcUJELEtBQWpELEVBQXdEO0FBQ3RELGFBQUtKLFFBQUwsQ0FBYyxFQUFFSCxPQUFPLHlCQUFULEVBQWQ7QUFDQTtBQUNEO0FBQ0QsVUFBSSxLQUFLTSxRQUFMLENBQWNDLEtBQWQsS0FBd0IsRUFBNUIsRUFBZ0M7QUFDOUIseUNBQWdCLEtBQUtELFFBQUwsQ0FBY0MsS0FBOUIsRUFBdUMsNEJBQXZDLEVBQXFFLE1BQXJFLEVBQ0NFLElBREQsQ0FDTSxVQUFDQyxRQUFELEVBQWM7QUFDbEIsaUJBQUtQLFFBQUwsQ0FBYyxFQUFFRixTQUFTLDRCQUFYLEVBQWQ7QUFDRCxTQUhEO0FBSUQ7QUFDRjs7OzZCQUVRO0FBQUE7O0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBTSxPQUFNLGdCQUFaLEVBQTZCLFVBQVUsS0FBdkM7QUFDSSxhQUFLRixLQUFMLENBQVdFLE9BQVgsS0FBdUIsRUFBdkIsR0FDRjtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsY0FBSyxXQUFVLGFBQWY7QUFDRSxxREFBTyxTQUFTLEtBQUtILE9BQXJCO0FBQ0Esb0JBQUssVUFETCxFQUNnQixJQUFHLFVBRG5CLEVBQzhCLEtBQUssYUFBQ2EsS0FBRCxFQUFXO0FBQUUsdUJBQUtMLFFBQUwsR0FBZ0JLLEtBQWhCO0FBQXdCLGVBRHhFLEdBREY7QUFHRTtBQUFBO0FBQUEsZ0JBQU8sU0FBSSxVQUFYO0FBQUE7QUFBQTtBQUhGLFdBREY7QUFNRTtBQUFBO0FBQUEsY0FBSyxXQUFVLGFBQWY7QUFDRSxxREFBTyxTQUFTLEtBQUtiLE9BQXJCO0FBQ0Esb0JBQUssVUFETCxFQUNnQixJQUFHLFdBRG5CLEVBQytCLEtBQUssYUFBQ2EsS0FBRCxFQUFXO0FBQUUsdUJBQUtILGVBQUwsR0FBdUJHLEtBQXZCO0FBQStCLGVBRGhGLEdBREY7QUFHRTtBQUFBO0FBQUEsZ0JBQU8sU0FBSSxXQUFYO0FBQUE7QUFBQTtBQUhGO0FBTkYsU0FERSxHQWFGO0FBQUE7QUFBQSxZQUFLLFdBQVUsU0FBZixFQUF5QixPQUFPLEVBQUVDLE9BQU8sU0FBVCxFQUFoQztBQUNHLGVBQUtiLEtBQUwsQ0FBV0U7QUFEZCxTQWRGO0FBa0JJLGFBQUtGLEtBQUwsQ0FBV2MsYUFBWCxLQUE2QixFQUE3QixHQUFrQyxFQUFsQyxHQUNGO0FBQUE7QUFBQSxZQUFLLFdBQVUsVUFBZixFQUEwQixPQUFPLEVBQUVDLFNBQVMsVUFBWCxFQUFqQztBQUEyRCxlQUFLZixLQUFMLENBQVdjO0FBQXRFLFNBbkJGO0FBb0JFO0FBQUE7QUFBQTtBQUNBLHFCQUFXLEtBQUtqQixnQkFEaEI7QUFFQSx1QkFBVSx5Q0FGVjtBQUdDLGVBQUtHLEtBQUwsQ0FBV0c7QUFIWixTQXBCRjtBQXdCRTtBQUFBO0FBQUEsWUFBRyxXQUFVLG1EQUFiO0FBQ0Usa0JBQUssUUFEUDtBQUFBO0FBQUE7QUF4QkYsT0FERjtBQTZCRDs7OztFQTdEdUIsZ0JBQU1hLFM7O2tCQWdFakJyQixXIiwiZmlsZSI6IjAuODgyNDY1MTY2Njc0ZTA2MGQ3MjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRm9ybSBmcm9tICcuL2Zvcm0nO1xuaW1wb3J0IGFwaSBmcm9tICcuLi9oZWxwZXJzL2FwaSc7XG5cbmNsYXNzIE5ld1Bhc3N3b3JkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLm9uU3VibWl0UGFzc3dvcmQgPSB0aGlzLm9uU3VibWl0UGFzc3dvcmQuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uRm9jdXMgPSB0aGlzLm9uRm9jdXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZXJyb3I6ICcnLFxuICAgICAgc3VjY2VzczogJycsXG4gICAgICByZXNldFRleHQ6ICcnXG4gICAgfTtcbiAgfVxuXG4gIG9uRm9jdXMoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yOiAnJyB9KTtcbiAgfVxuXG4gIG9uU3VibWl0UGFzc3dvcmQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAodGhpcy5wYXNzd29yZC52YWx1ZSAhPT0gdGhpcy5jb25maXJtUGFzc3dvcmQudmFsdWUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcjogJ1Bhc3N3b3JkcyBkb25cXCd0IG1hdGNoLicgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLnBhc3N3b3JkLnZhbHVlICE9PSAnJykge1xuICAgICAgYXBpKGBwYXNzd29yZD0ke3RoaXMucGFzc3dvcmQudmFsdWV9YCwgJy9hcGkvdXNlcnMvcmVzZXQtcGFzc3dvcmQvJywgJ1BPU1QnKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdWNjZXNzOiAnUGFzc3dvcmQgcmVzZXQgc3VjY2Vzc2Z1bGwnIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybSB0aXRsZT0nUmVzZXQgUGFzc3dvcmQnIHNpZGVtZW51PXtmYWxzZX0+XG4gICAgICAgIHsgdGhpcy5zdGF0ZS5zdWNjZXNzID09PSAnJyA/XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2lucHV0LWZpZWxkJz5cbiAgICAgICAgICAgIDxpbnB1dCBvbkZvY3VzPXt0aGlzLm9uRm9jdXN9XG4gICAgICAgICAgICB0eXBlPSdwYXNzd29yZCcgaWQ9J3Bhc3N3b3JkJyByZWY9eyhpbnB1dCkgPT4geyB0aGlzLnBhc3N3b3JkID0gaW5wdXQ7IH19Lz5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9J3Bhc3N3b3JkJz5QYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2lucHV0LWZpZWxkJz5cbiAgICAgICAgICAgIDxpbnB1dCBvbkZvY3VzPXt0aGlzLm9uRm9jdXN9XG4gICAgICAgICAgICB0eXBlPSdwYXNzd29yZCcgaWQ9J2NwYXNzd29yZCcgcmVmPXsoaW5wdXQpID0+IHsgdGhpcy5jb25maXJtUGFzc3dvcmQgPSBpbnB1dDsgfX0vPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj0nY3Bhc3N3b3JkJz5QYXNzd29yZCBBZ2FpbjwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PiA6XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWN0aW9uJyBzdHlsZT17eyBjb2xvcjogJyMwMjc1ZDgnIH19PlxuICAgICAgICAgIHt0aGlzLnN0YXRlLnN1Y2Nlc3N9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICAgIHsgdGhpcy5zdGF0ZS5lcnJvcl9tZXNzYWdlID09PSAnJyA/ICcnIDpcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlZCBjYXJkJyBzdHlsZT17eyBwYWRkaW5nOiAnNXB4IDEwcHgnIH19Pnt0aGlzLnN0YXRlLmVycm9yX21lc3NhZ2V9PC9kaXY+fVxuICAgICAgICA8YnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9IHsgdGhpcy5vblN1Ym1pdFBhc3N3b3JkIH1cbiAgICAgICAgY2xhc3NOYW1lPSd3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHQgYnRuIGFjdGlvbi1idG4nPlxuICAgICAgICB7dGhpcy5zdGF0ZS5yZXNldFRleHR9PC9idXR0b24+XG4gICAgICAgIDxhIGNsYXNzTmFtZT0ncmlnaHQgd2F2ZXMtZWZmZWN0IHdhdmVzLXRlYWwgYnRuLWZsYXQgYWN0aW9uLWJ0bidcbiAgICAgICAgICBocmVmPScjbG9naW4nPkxvZ2luPC9hPlxuICAgICAgPC9Gb3JtPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmV3UGFzc3dvcmQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9uZXctcGFzc3dvcmQuanMiXSwic291cmNlUm9vdCI6IiJ9