webpackHotUpdate(0,{

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _form = __webpack_require__(23);

var _form2 = _interopRequireDefault(_form);

var _api = __webpack_require__(15);

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

        (0, _api2.default)('password=' + this.password.value, '/api/users/reset-password/' + hash, 'POST').then(function (response) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9uZXctcGFzc3dvcmQuanM/NTNiOCJdLCJuYW1lcyI6WyJOZXdQYXNzd29yZCIsInByb3BzIiwib25TdWJtaXRQYXNzd29yZCIsImJpbmQiLCJvbkZvY3VzIiwic3RhdGUiLCJlcnJvciIsInN1Y2Nlc3MiLCJyZXNldFRleHQiLCJzZXRTdGF0ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImxvY2F0aW9uIiwiaGFzaCIsInBhc3N3b3JkIiwidmFsdWUiLCJjb25maXJtUGFzc3dvcmQiLCJ0aGVuIiwicmVzcG9uc2UiLCJpbnB1dCIsImNvbG9yIiwicGFkZGluZyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxXOzs7QUFFSix1QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBIQUNYQSxLQURXOztBQUVqQixVQUFLQyxnQkFBTCxHQUF3QixNQUFLQSxnQkFBTCxDQUFzQkMsSUFBdEIsT0FBeEI7QUFDQSxVQUFLQyxPQUFMLEdBQWUsTUFBS0EsT0FBTCxDQUFhRCxJQUFiLE9BQWY7QUFDQSxVQUFLRSxLQUFMLEdBQWE7QUFDWEMsYUFBTyxFQURJO0FBRVhDLGVBQVMsRUFGRTtBQUdYQyxpQkFBVztBQUhBLEtBQWI7QUFKaUI7QUFTbEI7Ozs7OEJBRVM7QUFDUixXQUFLQyxRQUFMLENBQWMsRUFBRUgsT0FBTyxFQUFULEVBQWQ7QUFDRDs7O3FDQUVnQkksQyxFQUFHO0FBQUE7O0FBQ2xCQSxRQUFFQyxjQUFGO0FBQ0EsVUFBSSxLQUFLTixLQUFMLENBQVdHLFNBQVgsS0FBeUIsTUFBN0IsRUFBcUM7QUFDbkNJLGlCQUFTQyxJQUFULEdBQWdCLFFBQWhCO0FBQ0E7QUFDRDtBQUNELFVBQUksS0FBS0MsUUFBTCxDQUFjQyxLQUFkLEtBQXdCLEtBQUtDLGVBQUwsQ0FBcUJELEtBQWpELEVBQXdEO0FBQ3RELGFBQUtOLFFBQUwsQ0FBYyxFQUFFSCxPQUFPLHlCQUFULEVBQWQ7QUFDQTtBQUNEO0FBQ0QsVUFBSSxLQUFLUSxRQUFMLENBQWNDLEtBQWQsS0FBd0IsRUFBNUIsRUFBZ0M7O0FBRTlCLHlDQUFnQixLQUFLRCxRQUFMLENBQWNDLEtBQTlCLGlDQUFvRUYsSUFBcEUsRUFBNEUsTUFBNUUsRUFDQ0ksSUFERCxDQUNNLFVBQUNDLFFBQUQsRUFBYztBQUNsQixpQkFBS1QsUUFBTCxDQUFjO0FBQ1pGLHFCQUFTLDJCQURHO0FBRVpDLHVCQUFXO0FBRkMsV0FBZDtBQUlELFNBTkQ7QUFPRDtBQUNGOzs7NkJBRVE7QUFBQTs7QUFDUCxhQUNFO0FBQUE7QUFBQSxVQUFNLE9BQU0sZ0JBQVosRUFBNkIsVUFBVSxLQUF2QztBQUNJLGFBQUtILEtBQUwsQ0FBV0UsT0FBWCxLQUF1QixFQUF2QixHQUNGO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsYUFBZjtBQUNFLHFEQUFPLFNBQVMsS0FBS0gsT0FBckI7QUFDQSxvQkFBSyxVQURMLEVBQ2dCLElBQUcsVUFEbkIsRUFDOEIsS0FBSyxhQUFDZSxLQUFELEVBQVc7QUFBRSx1QkFBS0wsUUFBTCxHQUFnQkssS0FBaEI7QUFBd0IsZUFEeEUsR0FERjtBQUdFO0FBQUE7QUFBQSxnQkFBTyxTQUFJLFVBQVg7QUFBQTtBQUFBO0FBSEYsV0FERjtBQU1FO0FBQUE7QUFBQSxjQUFLLFdBQVUsYUFBZjtBQUNFLHFEQUFPLFNBQVMsS0FBS2YsT0FBckI7QUFDQSxvQkFBSyxVQURMLEVBQ2dCLElBQUcsV0FEbkIsRUFDK0IsS0FBSyxhQUFDZSxLQUFELEVBQVc7QUFBRSx1QkFBS0gsZUFBTCxHQUF1QkcsS0FBdkI7QUFBK0IsZUFEaEYsR0FERjtBQUdFO0FBQUE7QUFBQSxnQkFBTyxTQUFJLFdBQVg7QUFBQTtBQUFBO0FBSEY7QUFORixTQURFLEdBYUY7QUFBQTtBQUFBLFlBQUssV0FBVSxTQUFmLEVBQXlCLE9BQU8sRUFBRUMsT0FBTyxTQUFULEVBQWhDO0FBQ0csZUFBS2YsS0FBTCxDQUFXRTtBQURkLFNBZEY7QUFrQkksYUFBS0YsS0FBTCxDQUFXQyxLQUFYLEtBQXFCLEVBQXJCLEdBQTBCLEVBQTFCLEdBQ0Y7QUFBQTtBQUFBLFlBQUssV0FBVSxVQUFmLEVBQTBCLE9BQU8sRUFBRWUsU0FBUyxVQUFYLEVBQWpDO0FBQTJELGVBQUtoQixLQUFMLENBQVdDO0FBQXRFLFNBbkJGO0FBb0JFO0FBQUE7QUFBQTtBQUNBLHFCQUFXLEtBQUtKLGdCQURoQjtBQUVBLHVCQUFVLHlDQUZWO0FBR0MsZUFBS0csS0FBTCxDQUFXRztBQUhaLFNBcEJGO0FBd0JFO0FBQUE7QUFBQSxZQUFHLFdBQVUsbURBQWI7QUFDRSxrQkFBSyxRQURQO0FBQUE7QUFBQTtBQXhCRixPQURGO0FBNkJEOzs7O0VBckV1QixnQkFBTWMsUzs7a0JBd0VqQnRCLFciLCJmaWxlIjoiMC41MzVjYTdmOTVkMjdlYTJjOGRlNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGb3JtIGZyb20gJy4vZm9ybSc7XG5pbXBvcnQgYXBpIGZyb20gJy4uL2hlbHBlcnMvYXBpJztcblxuY2xhc3MgTmV3UGFzc3dvcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMub25TdWJtaXRQYXNzd29yZCA9IHRoaXMub25TdWJtaXRQYXNzd29yZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25Gb2N1cyA9IHRoaXMub25Gb2N1cy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBlcnJvcjogJycsXG4gICAgICBzdWNjZXNzOiAnJyxcbiAgICAgIHJlc2V0VGV4dDogJ1Jlc2V0J1xuICAgIH07XG4gIH1cblxuICBvbkZvY3VzKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcjogJycgfSk7XG4gIH1cblxuICBvblN1Ym1pdFBhc3N3b3JkKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKHRoaXMuc3RhdGUucmVzZXRUZXh0ID09PSAnT2theScpIHtcbiAgICAgIGxvY2F0aW9uLmhhc2ggPSAnI2xvZ2luJztcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMucGFzc3dvcmQudmFsdWUgIT09IHRoaXMuY29uZmlybVBhc3N3b3JkLnZhbHVlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3I6ICdQYXNzd29yZHMgZG9uXFwndCBtYXRjaC4nIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5wYXNzd29yZC52YWx1ZSAhPT0gJycpIHtcbiAgICAgIFxuICAgICAgYXBpKGBwYXNzd29yZD0ke3RoaXMucGFzc3dvcmQudmFsdWV9YCwgYC9hcGkvdXNlcnMvcmVzZXQtcGFzc3dvcmQvJHtoYXNofWAsICdQT1NUJylcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBzdWNjZXNzOiAnUGFzc3dvcmQgcmVzZXQgc3VjY2Vzc2Z1bCcsXG4gICAgICAgICAgcmVzZXRUZXh0OiAnT2theSdcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxGb3JtIHRpdGxlPSdSZXNldCBQYXNzd29yZCcgc2lkZW1lbnU9e2ZhbHNlfT5cbiAgICAgICAgeyB0aGlzLnN0YXRlLnN1Y2Nlc3MgPT09ICcnID9cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtZmllbGQnPlxuICAgICAgICAgICAgPGlucHV0IG9uRm9jdXM9e3RoaXMub25Gb2N1c31cbiAgICAgICAgICAgIHR5cGU9J3Bhc3N3b3JkJyBpZD0ncGFzc3dvcmQnIHJlZj17KGlucHV0KSA9PiB7IHRoaXMucGFzc3dvcmQgPSBpbnB1dDsgfX0vPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj0ncGFzc3dvcmQnPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtZmllbGQnPlxuICAgICAgICAgICAgPGlucHV0IG9uRm9jdXM9e3RoaXMub25Gb2N1c31cbiAgICAgICAgICAgIHR5cGU9J3Bhc3N3b3JkJyBpZD0nY3Bhc3N3b3JkJyByZWY9eyhpbnB1dCkgPT4geyB0aGlzLmNvbmZpcm1QYXNzd29yZCA9IGlucHV0OyB9fS8+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPSdjcGFzc3dvcmQnPlBhc3N3b3JkIEFnYWluPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+IDpcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlY3Rpb24nIHN0eWxlPXt7IGNvbG9yOiAnIzAyNzVkOCcgfX0+XG4gICAgICAgICAge3RoaXMuc3RhdGUuc3VjY2Vzc31cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAgeyB0aGlzLnN0YXRlLmVycm9yID09PSAnJyA/ICcnIDpcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlZCBjYXJkJyBzdHlsZT17eyBwYWRkaW5nOiAnNXB4IDEwcHgnIH19Pnt0aGlzLnN0YXRlLmVycm9yfTwvZGl2Pn1cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICBvbkNsaWNrPSB7IHRoaXMub25TdWJtaXRQYXNzd29yZCB9XG4gICAgICAgIGNsYXNzTmFtZT0nd2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0IGJ0biBhY3Rpb24tYnRuJz5cbiAgICAgICAge3RoaXMuc3RhdGUucmVzZXRUZXh0fTwvYnV0dG9uPlxuICAgICAgICA8YSBjbGFzc05hbWU9J3JpZ2h0IHdhdmVzLWVmZmVjdCB3YXZlcy10ZWFsIGJ0bi1mbGF0IGFjdGlvbi1idG4nXG4gICAgICAgICAgaHJlZj0nI2xvZ2luJz5Mb2dpbjwvYT5cbiAgICAgIDwvRm9ybT5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5ld1Bhc3N3b3JkO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2pzL2NvbXBvbmVudHMvcHJlc2VudGF0aW9uYWwvbmV3LXBhc3N3b3JkLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==