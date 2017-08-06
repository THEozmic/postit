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
          Reset
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9uZXctcGFzc3dvcmQuanM/NTNiOCJdLCJuYW1lcyI6WyJOZXdQYXNzd29yZCIsInByb3BzIiwib25TdWJtaXRQYXNzd29yZCIsImJpbmQiLCJvbkZvY3VzIiwic3RhdGUiLCJlcnJvciIsInN1Y2Nlc3MiLCJzZXRTdGF0ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBhc3N3b3JkIiwidmFsdWUiLCJjb25maXJtUGFzc3dvcmQiLCJ0aGVuIiwicmVzcG9uc2UiLCJpbnB1dCIsImNvbG9yIiwiZXJyb3JfbWVzc2FnZSIsInBhZGRpbmciLCJSZXNldCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxXOzs7QUFFSix1QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBIQUNYQSxLQURXOztBQUVqQixVQUFLQyxnQkFBTCxHQUF3QixNQUFLQSxnQkFBTCxDQUFzQkMsSUFBdEIsT0FBeEI7QUFDQSxVQUFLQyxPQUFMLEdBQWUsTUFBS0EsT0FBTCxDQUFhRCxJQUFiLE9BQWY7QUFDQSxVQUFLRSxLQUFMLEdBQWE7QUFDWEMsYUFBTyxFQURJO0FBRVhDLGVBQVM7QUFGRSxLQUFiO0FBSmlCO0FBUWxCOzs7OzhCQUVTO0FBQ1IsV0FBS0MsUUFBTCxDQUFjLEVBQUVGLE9BQU8sRUFBVCxFQUFkO0FBQ0Q7OztxQ0FFZ0JHLEMsRUFBRztBQUFBOztBQUNsQkEsUUFBRUMsY0FBRjtBQUNBLFVBQUksS0FBS0MsUUFBTCxDQUFjQyxLQUFkLEtBQXdCLEtBQUtDLGVBQUwsQ0FBcUJELEtBQWpELEVBQXdEO0FBQ3RELGFBQUtKLFFBQUwsQ0FBYyxFQUFFRixPQUFPLHlCQUFULEVBQWQ7QUFDQTtBQUNEO0FBQ0QsVUFBSSxLQUFLSyxRQUFMLENBQWNDLEtBQWQsS0FBd0IsRUFBNUIsRUFBZ0M7QUFDOUIseUNBQWdCLEtBQUtELFFBQUwsQ0FBY0MsS0FBOUIsRUFBdUMsNEJBQXZDLEVBQXFFLE1BQXJFLEVBQ0NFLElBREQsQ0FDTSxVQUFDQyxRQUFELEVBQWM7QUFDbEIsaUJBQUtQLFFBQUwsQ0FBYyxFQUFFRCxTQUFTLDRCQUFYLEVBQWQ7QUFDRCxTQUhEO0FBSUQ7QUFDRjs7OzZCQUVRO0FBQUE7O0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBTSxPQUFNLGdCQUFaLEVBQTZCLFVBQVUsS0FBdkM7QUFDSSxhQUFLRixLQUFMLENBQVdFLE9BQVgsS0FBdUIsRUFBdkIsR0FDRjtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsY0FBSyxXQUFVLGFBQWY7QUFDRSxxREFBTyxTQUFTLEtBQUtILE9BQXJCO0FBQ0Esb0JBQUssVUFETCxFQUNnQixJQUFHLFVBRG5CLEVBQzhCLEtBQUssYUFBQ1ksS0FBRCxFQUFXO0FBQUUsdUJBQUtMLFFBQUwsR0FBZ0JLLEtBQWhCO0FBQXdCLGVBRHhFLEdBREY7QUFHRTtBQUFBO0FBQUEsZ0JBQU8sU0FBSSxVQUFYO0FBQUE7QUFBQTtBQUhGLFdBREY7QUFNRTtBQUFBO0FBQUEsY0FBSyxXQUFVLGFBQWY7QUFDRSxxREFBTyxTQUFTLEtBQUtaLE9BQXJCO0FBQ0Esb0JBQUssVUFETCxFQUNnQixJQUFHLFdBRG5CLEVBQytCLEtBQUssYUFBQ1ksS0FBRCxFQUFXO0FBQUUsdUJBQUtILGVBQUwsR0FBdUJHLEtBQXZCO0FBQStCLGVBRGhGLEdBREY7QUFHRTtBQUFBO0FBQUEsZ0JBQU8sU0FBSSxXQUFYO0FBQUE7QUFBQTtBQUhGO0FBTkYsU0FERSxHQWFGO0FBQUE7QUFBQSxZQUFLLFdBQVUsU0FBZixFQUF5QixPQUFPLEVBQUVDLE9BQU8sU0FBVCxFQUFoQztBQUNHLGVBQUtaLEtBQUwsQ0FBV0U7QUFEZCxTQWRGO0FBa0JJLGFBQUtGLEtBQUwsQ0FBV2EsYUFBWCxLQUE2QixFQUE3QixHQUFrQyxFQUFsQyxHQUNGO0FBQUE7QUFBQSxZQUFLLFdBQVUsVUFBZixFQUEwQixPQUFPLEVBQUVDLFNBQVMsVUFBWCxFQUFqQztBQUEyRCxlQUFLZCxLQUFMLENBQVdhO0FBQXRFLFNBbkJGO0FBb0JFO0FBQUE7QUFBQTtBQUNBLHFCQUFXLEtBQUtoQixnQkFEaEI7QUFFQSx1QkFBVSx5Q0FGVjtBQUdDa0I7QUFIRCxTQXBCRjtBQXdCRTtBQUFBO0FBQUEsWUFBRyxXQUFVLG1EQUFiO0FBQ0Usa0JBQUssUUFEUDtBQUFBO0FBQUE7QUF4QkYsT0FERjtBQTZCRDs7OztFQTVEdUIsZ0JBQU1DLFM7O2tCQStEakJyQixXIiwiZmlsZSI6IjAuYjBhYWIzZjdhZTUzMzE0MTMwMGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRm9ybSBmcm9tICcuL2Zvcm0nO1xuaW1wb3J0IGFwaSBmcm9tICcuLi9oZWxwZXJzL2FwaSc7XG5cbmNsYXNzIE5ld1Bhc3N3b3JkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLm9uU3VibWl0UGFzc3dvcmQgPSB0aGlzLm9uU3VibWl0UGFzc3dvcmQuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uRm9jdXMgPSB0aGlzLm9uRm9jdXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZXJyb3I6ICcnLFxuICAgICAgc3VjY2VzczogJydcbiAgICB9O1xuICB9XG5cbiAgb25Gb2N1cygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3I6ICcnIH0pO1xuICB9XG5cbiAgb25TdWJtaXRQYXNzd29yZChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICh0aGlzLnBhc3N3b3JkLnZhbHVlICE9PSB0aGlzLmNvbmZpcm1QYXNzd29yZC52YWx1ZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yOiAnUGFzc3dvcmRzIGRvblxcJ3QgbWF0Y2guJyB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMucGFzc3dvcmQudmFsdWUgIT09ICcnKSB7XG4gICAgICBhcGkoYHBhc3N3b3JkPSR7dGhpcy5wYXNzd29yZC52YWx1ZX1gLCAnL2FwaS91c2Vycy9yZXNldC1wYXNzd29yZC8nLCAnUE9TVCcpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN1Y2Nlc3M6ICdQYXNzd29yZCByZXNldCBzdWNjZXNzZnVsbCcgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxGb3JtIHRpdGxlPSdSZXNldCBQYXNzd29yZCcgc2lkZW1lbnU9e2ZhbHNlfT5cbiAgICAgICAgeyB0aGlzLnN0YXRlLnN1Y2Nlc3MgPT09ICcnID9cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtZmllbGQnPlxuICAgICAgICAgICAgPGlucHV0IG9uRm9jdXM9e3RoaXMub25Gb2N1c31cbiAgICAgICAgICAgIHR5cGU9J3Bhc3N3b3JkJyBpZD0ncGFzc3dvcmQnIHJlZj17KGlucHV0KSA9PiB7IHRoaXMucGFzc3dvcmQgPSBpbnB1dDsgfX0vPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj0ncGFzc3dvcmQnPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtZmllbGQnPlxuICAgICAgICAgICAgPGlucHV0IG9uRm9jdXM9e3RoaXMub25Gb2N1c31cbiAgICAgICAgICAgIHR5cGU9J3Bhc3N3b3JkJyBpZD0nY3Bhc3N3b3JkJyByZWY9eyhpbnB1dCkgPT4geyB0aGlzLmNvbmZpcm1QYXNzd29yZCA9IGlucHV0OyB9fS8+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPSdjcGFzc3dvcmQnPlBhc3N3b3JkIEFnYWluPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+IDpcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlY3Rpb24nIHN0eWxlPXt7IGNvbG9yOiAnIzAyNzVkOCcgfX0+XG4gICAgICAgICAge3RoaXMuc3RhdGUuc3VjY2Vzc31cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAgeyB0aGlzLnN0YXRlLmVycm9yX21lc3NhZ2UgPT09ICcnID8gJycgOlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVkIGNhcmQnIHN0eWxlPXt7IHBhZGRpbmc6ICc1cHggMTBweCcgfX0+e3RoaXMuc3RhdGUuZXJyb3JfbWVzc2FnZX08L2Rpdj59XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgb25DbGljaz0geyB0aGlzLm9uU3VibWl0UGFzc3dvcmQgfVxuICAgICAgICBjbGFzc05hbWU9J3dhdmVzLWVmZmVjdCB3YXZlcy1saWdodCBidG4gYWN0aW9uLWJ0bic+XG4gICAgICAgIHtSZXNldH08L2J1dHRvbj5cbiAgICAgICAgPGEgY2xhc3NOYW1lPSdyaWdodCB3YXZlcy1lZmZlY3Qgd2F2ZXMtdGVhbCBidG4tZmxhdCBhY3Rpb24tYnRuJ1xuICAgICAgICAgIGhyZWY9JyNsb2dpbic+TG9naW48L2E+XG4gICAgICA8L0Zvcm0+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOZXdQYXNzd29yZDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9qcy9jb21wb25lbnRzL3ByZXNlbnRhdGlvbmFsL25ldy1wYXNzd29yZC5qcyJdLCJzb3VyY2VSb290IjoiIn0=