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
        (0, _api2.default)('password=' + this.password.value, '/api/users/reset-password/', 'POST').then(function (response) {
          _this2.setState({
            success: 'Password reset successfull',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9uZXctcGFzc3dvcmQuanM/NTNiOCJdLCJuYW1lcyI6WyJOZXdQYXNzd29yZCIsInByb3BzIiwib25TdWJtaXRQYXNzd29yZCIsImJpbmQiLCJvbkZvY3VzIiwic3RhdGUiLCJlcnJvciIsInN1Y2Nlc3MiLCJyZXNldFRleHQiLCJzZXRTdGF0ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImxvY2F0aW9uIiwiaGFzaCIsInBhc3N3b3JkIiwidmFsdWUiLCJjb25maXJtUGFzc3dvcmQiLCJ0aGVuIiwicmVzcG9uc2UiLCJpbnB1dCIsImNvbG9yIiwicGFkZGluZyIsImVycm9yX21lc3NhZ2UiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUEsVzs7O0FBRUosdUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwSEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsZ0JBQUwsR0FBd0IsTUFBS0EsZ0JBQUwsQ0FBc0JDLElBQXRCLE9BQXhCO0FBQ0EsVUFBS0MsT0FBTCxHQUFlLE1BQUtBLE9BQUwsQ0FBYUQsSUFBYixPQUFmO0FBQ0EsVUFBS0UsS0FBTCxHQUFhO0FBQ1hDLGFBQU8sRUFESTtBQUVYQyxlQUFTLEVBRkU7QUFHWEMsaUJBQVc7QUFIQSxLQUFiO0FBSmlCO0FBU2xCOzs7OzhCQUVTO0FBQ1IsV0FBS0MsUUFBTCxDQUFjLEVBQUVILE9BQU8sRUFBVCxFQUFkO0FBQ0Q7OztxQ0FFZ0JJLEMsRUFBRztBQUFBOztBQUNsQkEsUUFBRUMsY0FBRjtBQUNBLFVBQUksS0FBS04sS0FBTCxDQUFXRyxTQUFYLEtBQXlCLE1BQTdCLEVBQXFDO0FBQ25DSSxpQkFBU0MsSUFBVCxHQUFnQixRQUFoQjtBQUNBO0FBQ0Q7QUFDRCxVQUFJLEtBQUtDLFFBQUwsQ0FBY0MsS0FBZCxLQUF3QixLQUFLQyxlQUFMLENBQXFCRCxLQUFqRCxFQUF3RDtBQUN0RCxhQUFLTixRQUFMLENBQWMsRUFBRUgsT0FBTyx5QkFBVCxFQUFkO0FBQ0E7QUFDRDtBQUNELFVBQUksS0FBS1EsUUFBTCxDQUFjQyxLQUFkLEtBQXdCLEVBQTVCLEVBQWdDO0FBQzlCLHlDQUFnQixLQUFLRCxRQUFMLENBQWNDLEtBQTlCLEVBQXVDLDRCQUF2QyxFQUFxRSxNQUFyRSxFQUNDRSxJQURELENBQ00sVUFBQ0MsUUFBRCxFQUFjO0FBQ2xCLGlCQUFLVCxRQUFMLENBQWM7QUFDWkYscUJBQVMsNEJBREc7QUFFWkMsdUJBQVc7QUFGQyxXQUFkO0FBSUQsU0FORDtBQU9EO0FBQ0Y7Ozs2QkFFUTtBQUFBOztBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQU0sT0FBTSxnQkFBWixFQUE2QixVQUFVLEtBQXZDO0FBQ0ksYUFBS0gsS0FBTCxDQUFXRSxPQUFYLEtBQXVCLEVBQXZCLEdBQ0Y7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxhQUFmO0FBQ0UscURBQU8sU0FBUyxLQUFLSCxPQUFyQjtBQUNBLG9CQUFLLFVBREwsRUFDZ0IsSUFBRyxVQURuQixFQUM4QixLQUFLLGFBQUNlLEtBQUQsRUFBVztBQUFFLHVCQUFLTCxRQUFMLEdBQWdCSyxLQUFoQjtBQUF3QixlQUR4RSxHQURGO0FBR0U7QUFBQTtBQUFBLGdCQUFPLFNBQUksVUFBWDtBQUFBO0FBQUE7QUFIRixXQURGO0FBTUU7QUFBQTtBQUFBLGNBQUssV0FBVSxhQUFmO0FBQ0UscURBQU8sU0FBUyxLQUFLZixPQUFyQjtBQUNBLG9CQUFLLFVBREwsRUFDZ0IsSUFBRyxXQURuQixFQUMrQixLQUFLLGFBQUNlLEtBQUQsRUFBVztBQUFFLHVCQUFLSCxlQUFMLEdBQXVCRyxLQUF2QjtBQUErQixlQURoRixHQURGO0FBR0U7QUFBQTtBQUFBLGdCQUFPLFNBQUksV0FBWDtBQUFBO0FBQUE7QUFIRjtBQU5GLFNBREUsR0FhRjtBQUFBO0FBQUEsWUFBSyxXQUFVLFNBQWYsRUFBeUIsT0FBTyxFQUFFQyxPQUFPLFNBQVQsRUFBaEM7QUFDRyxlQUFLZixLQUFMLENBQVdFO0FBRGQsU0FkRjtBQWtCSSxhQUFLRixLQUFMLENBQVdDLEtBQVgsS0FBcUIsRUFBckIsR0FBMEIsRUFBMUIsR0FDRjtBQUFBO0FBQUEsWUFBSyxXQUFVLFVBQWYsRUFBMEIsT0FBTyxFQUFFZSxTQUFTLFVBQVgsRUFBakM7QUFBMkQsZUFBS2hCLEtBQUwsQ0FBV2lCO0FBQXRFLFNBbkJGO0FBb0JFO0FBQUE7QUFBQTtBQUNBLHFCQUFXLEtBQUtwQixnQkFEaEI7QUFFQSx1QkFBVSx5Q0FGVjtBQUdDLGVBQUtHLEtBQUwsQ0FBV0c7QUFIWixTQXBCRjtBQXdCRTtBQUFBO0FBQUEsWUFBRyxXQUFVLG1EQUFiO0FBQ0Usa0JBQUssUUFEUDtBQUFBO0FBQUE7QUF4QkYsT0FERjtBQTZCRDs7OztFQXBFdUIsZ0JBQU1lLFM7O2tCQXVFakJ2QixXIiwiZmlsZSI6IjAuMzBhNGEzYmRmYTNmYTFiZGFlZjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRm9ybSBmcm9tICcuL2Zvcm0nO1xuaW1wb3J0IGFwaSBmcm9tICcuLi9oZWxwZXJzL2FwaSc7XG5cbmNsYXNzIE5ld1Bhc3N3b3JkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLm9uU3VibWl0UGFzc3dvcmQgPSB0aGlzLm9uU3VibWl0UGFzc3dvcmQuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uRm9jdXMgPSB0aGlzLm9uRm9jdXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZXJyb3I6ICcnLFxuICAgICAgc3VjY2VzczogJycsXG4gICAgICByZXNldFRleHQ6ICdSZXNldCdcbiAgICB9O1xuICB9XG5cbiAgb25Gb2N1cygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3I6ICcnIH0pO1xuICB9XG5cbiAgb25TdWJtaXRQYXNzd29yZChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICh0aGlzLnN0YXRlLnJlc2V0VGV4dCA9PT0gJ09rYXknKSB7XG4gICAgICBsb2NhdGlvbi5oYXNoID0gJyNsb2dpbic7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLnBhc3N3b3JkLnZhbHVlICE9PSB0aGlzLmNvbmZpcm1QYXNzd29yZC52YWx1ZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yOiAnUGFzc3dvcmRzIGRvblxcJ3QgbWF0Y2guJyB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMucGFzc3dvcmQudmFsdWUgIT09ICcnKSB7XG4gICAgICBhcGkoYHBhc3N3b3JkPSR7dGhpcy5wYXNzd29yZC52YWx1ZX1gLCAnL2FwaS91c2Vycy9yZXNldC1wYXNzd29yZC8nLCAnUE9TVCcpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgc3VjY2VzczogJ1Bhc3N3b3JkIHJlc2V0IHN1Y2Nlc3NmdWxsJyxcbiAgICAgICAgICByZXNldFRleHQ6ICdPa2F5J1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEZvcm0gdGl0bGU9J1Jlc2V0IFBhc3N3b3JkJyBzaWRlbWVudT17ZmFsc2V9PlxuICAgICAgICB7IHRoaXMuc3RhdGUuc3VjY2VzcyA9PT0gJycgP1xuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1maWVsZCc+XG4gICAgICAgICAgICA8aW5wdXQgb25Gb2N1cz17dGhpcy5vbkZvY3VzfVxuICAgICAgICAgICAgdHlwZT0ncGFzc3dvcmQnIGlkPSdwYXNzd29yZCcgcmVmPXsoaW5wdXQpID0+IHsgdGhpcy5wYXNzd29yZCA9IGlucHV0OyB9fS8+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPSdwYXNzd29yZCc+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1maWVsZCc+XG4gICAgICAgICAgICA8aW5wdXQgb25Gb2N1cz17dGhpcy5vbkZvY3VzfVxuICAgICAgICAgICAgdHlwZT0ncGFzc3dvcmQnIGlkPSdjcGFzc3dvcmQnIHJlZj17KGlucHV0KSA9PiB7IHRoaXMuY29uZmlybVBhc3N3b3JkID0gaW5wdXQ7IH19Lz5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9J2NwYXNzd29yZCc+UGFzc3dvcmQgQWdhaW48L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj4gOlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VjdGlvbicgc3R5bGU9e3sgY29sb3I6ICcjMDI3NWQ4JyB9fT5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5zdWNjZXNzfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgICB7IHRoaXMuc3RhdGUuZXJyb3IgPT09ICcnID8gJycgOlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVkIGNhcmQnIHN0eWxlPXt7IHBhZGRpbmc6ICc1cHggMTBweCcgfX0+e3RoaXMuc3RhdGUuZXJyb3JfbWVzc2FnZX08L2Rpdj59XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgb25DbGljaz0geyB0aGlzLm9uU3VibWl0UGFzc3dvcmQgfVxuICAgICAgICBjbGFzc05hbWU9J3dhdmVzLWVmZmVjdCB3YXZlcy1saWdodCBidG4gYWN0aW9uLWJ0bic+XG4gICAgICAgIHt0aGlzLnN0YXRlLnJlc2V0VGV4dH08L2J1dHRvbj5cbiAgICAgICAgPGEgY2xhc3NOYW1lPSdyaWdodCB3YXZlcy1lZmZlY3Qgd2F2ZXMtdGVhbCBidG4tZmxhdCBhY3Rpb24tYnRuJ1xuICAgICAgICAgIGhyZWY9JyNsb2dpbic+TG9naW48L2E+XG4gICAgICA8L0Zvcm0+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOZXdQYXNzd29yZDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9qcy9jb21wb25lbnRzL3ByZXNlbnRhdGlvbmFsL25ldy1wYXNzd29yZC5qcyJdLCJzb3VyY2VSb290IjoiIn0=