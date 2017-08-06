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
        var hash = location.href.split('/')[4];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9uZXctcGFzc3dvcmQuanM/NTNiOCJdLCJuYW1lcyI6WyJOZXdQYXNzd29yZCIsInByb3BzIiwib25TdWJtaXRQYXNzd29yZCIsImJpbmQiLCJvbkZvY3VzIiwic3RhdGUiLCJlcnJvciIsInN1Y2Nlc3MiLCJyZXNldFRleHQiLCJzZXRTdGF0ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImxvY2F0aW9uIiwiaGFzaCIsInBhc3N3b3JkIiwidmFsdWUiLCJjb25maXJtUGFzc3dvcmQiLCJocmVmIiwic3BsaXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJpbnB1dCIsImNvbG9yIiwicGFkZGluZyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxXOzs7QUFFSix1QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBIQUNYQSxLQURXOztBQUVqQixVQUFLQyxnQkFBTCxHQUF3QixNQUFLQSxnQkFBTCxDQUFzQkMsSUFBdEIsT0FBeEI7QUFDQSxVQUFLQyxPQUFMLEdBQWUsTUFBS0EsT0FBTCxDQUFhRCxJQUFiLE9BQWY7QUFDQSxVQUFLRSxLQUFMLEdBQWE7QUFDWEMsYUFBTyxFQURJO0FBRVhDLGVBQVMsRUFGRTtBQUdYQyxpQkFBVztBQUhBLEtBQWI7QUFKaUI7QUFTbEI7Ozs7OEJBRVM7QUFDUixXQUFLQyxRQUFMLENBQWMsRUFBRUgsT0FBTyxFQUFULEVBQWQ7QUFDRDs7O3FDQUVnQkksQyxFQUFHO0FBQUE7O0FBQ2xCQSxRQUFFQyxjQUFGO0FBQ0EsVUFBSSxLQUFLTixLQUFMLENBQVdHLFNBQVgsS0FBeUIsTUFBN0IsRUFBcUM7QUFDbkNJLGlCQUFTQyxJQUFULEdBQWdCLFFBQWhCO0FBQ0E7QUFDRDtBQUNELFVBQUksS0FBS0MsUUFBTCxDQUFjQyxLQUFkLEtBQXdCLEtBQUtDLGVBQUwsQ0FBcUJELEtBQWpELEVBQXdEO0FBQ3RELGFBQUtOLFFBQUwsQ0FBYyxFQUFFSCxPQUFPLHlCQUFULEVBQWQ7QUFDQTtBQUNEO0FBQ0QsVUFBSSxLQUFLUSxRQUFMLENBQWNDLEtBQWQsS0FBd0IsRUFBNUIsRUFBZ0M7QUFDOUIsWUFBTUYsT0FBT0QsU0FBU0ssSUFBVCxDQUFjQyxLQUFkLENBQW9CLEdBQXBCLEVBQXlCLENBQXpCLENBQWI7QUFDQSx5Q0FBZ0IsS0FBS0osUUFBTCxDQUFjQyxLQUE5QixpQ0FBb0VGLElBQXBFLEVBQTRFLE1BQTVFLEVBQ0NNLElBREQsQ0FDTSxVQUFDQyxRQUFELEVBQWM7QUFDbEIsaUJBQUtYLFFBQUwsQ0FBYztBQUNaRixxQkFBUywyQkFERztBQUVaQyx1QkFBVztBQUZDLFdBQWQ7QUFJRCxTQU5EO0FBT0Q7QUFDRjs7OzZCQUVRO0FBQUE7O0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBTSxPQUFNLGdCQUFaLEVBQTZCLFVBQVUsS0FBdkM7QUFDSSxhQUFLSCxLQUFMLENBQVdFLE9BQVgsS0FBdUIsRUFBdkIsR0FDRjtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsY0FBSyxXQUFVLGFBQWY7QUFDRSxxREFBTyxTQUFTLEtBQUtILE9BQXJCO0FBQ0Esb0JBQUssVUFETCxFQUNnQixJQUFHLFVBRG5CLEVBQzhCLEtBQUssYUFBQ2lCLEtBQUQsRUFBVztBQUFFLHVCQUFLUCxRQUFMLEdBQWdCTyxLQUFoQjtBQUF3QixlQUR4RSxHQURGO0FBR0U7QUFBQTtBQUFBLGdCQUFPLFNBQUksVUFBWDtBQUFBO0FBQUE7QUFIRixXQURGO0FBTUU7QUFBQTtBQUFBLGNBQUssV0FBVSxhQUFmO0FBQ0UscURBQU8sU0FBUyxLQUFLakIsT0FBckI7QUFDQSxvQkFBSyxVQURMLEVBQ2dCLElBQUcsV0FEbkIsRUFDK0IsS0FBSyxhQUFDaUIsS0FBRCxFQUFXO0FBQUUsdUJBQUtMLGVBQUwsR0FBdUJLLEtBQXZCO0FBQStCLGVBRGhGLEdBREY7QUFHRTtBQUFBO0FBQUEsZ0JBQU8sU0FBSSxXQUFYO0FBQUE7QUFBQTtBQUhGO0FBTkYsU0FERSxHQWFGO0FBQUE7QUFBQSxZQUFLLFdBQVUsU0FBZixFQUF5QixPQUFPLEVBQUVDLE9BQU8sU0FBVCxFQUFoQztBQUNHLGVBQUtqQixLQUFMLENBQVdFO0FBRGQsU0FkRjtBQWtCSSxhQUFLRixLQUFMLENBQVdDLEtBQVgsS0FBcUIsRUFBckIsR0FBMEIsRUFBMUIsR0FDRjtBQUFBO0FBQUEsWUFBSyxXQUFVLFVBQWYsRUFBMEIsT0FBTyxFQUFFaUIsU0FBUyxVQUFYLEVBQWpDO0FBQTJELGVBQUtsQixLQUFMLENBQVdDO0FBQXRFLFNBbkJGO0FBb0JFO0FBQUE7QUFBQTtBQUNBLHFCQUFXLEtBQUtKLGdCQURoQjtBQUVBLHVCQUFVLHlDQUZWO0FBR0MsZUFBS0csS0FBTCxDQUFXRztBQUhaLFNBcEJGO0FBd0JFO0FBQUE7QUFBQSxZQUFHLFdBQVUsbURBQWI7QUFDRSxrQkFBSyxRQURQO0FBQUE7QUFBQTtBQXhCRixPQURGO0FBNkJEOzs7O0VBckV1QixnQkFBTWdCLFM7O2tCQXdFakJ4QixXIiwiZmlsZSI6IjAuOTE3OTZhNmE4NjM2NTMyZjBjZmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRm9ybSBmcm9tICcuL2Zvcm0nO1xuaW1wb3J0IGFwaSBmcm9tICcuLi9oZWxwZXJzL2FwaSc7XG5cbmNsYXNzIE5ld1Bhc3N3b3JkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLm9uU3VibWl0UGFzc3dvcmQgPSB0aGlzLm9uU3VibWl0UGFzc3dvcmQuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uRm9jdXMgPSB0aGlzLm9uRm9jdXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZXJyb3I6ICcnLFxuICAgICAgc3VjY2VzczogJycsXG4gICAgICByZXNldFRleHQ6ICdSZXNldCdcbiAgICB9O1xuICB9XG5cbiAgb25Gb2N1cygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3I6ICcnIH0pO1xuICB9XG5cbiAgb25TdWJtaXRQYXNzd29yZChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICh0aGlzLnN0YXRlLnJlc2V0VGV4dCA9PT0gJ09rYXknKSB7XG4gICAgICBsb2NhdGlvbi5oYXNoID0gJyNsb2dpbic7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLnBhc3N3b3JkLnZhbHVlICE9PSB0aGlzLmNvbmZpcm1QYXNzd29yZC52YWx1ZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yOiAnUGFzc3dvcmRzIGRvblxcJ3QgbWF0Y2guJyB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMucGFzc3dvcmQudmFsdWUgIT09ICcnKSB7XG4gICAgICBjb25zdCBoYXNoID0gbG9jYXRpb24uaHJlZi5zcGxpdCgnLycpWzRdO1xuICAgICAgYXBpKGBwYXNzd29yZD0ke3RoaXMucGFzc3dvcmQudmFsdWV9YCwgYC9hcGkvdXNlcnMvcmVzZXQtcGFzc3dvcmQvJHtoYXNofWAsICdQT1NUJylcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBzdWNjZXNzOiAnUGFzc3dvcmQgcmVzZXQgc3VjY2Vzc2Z1bCcsXG4gICAgICAgICAgcmVzZXRUZXh0OiAnT2theSdcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxGb3JtIHRpdGxlPSdSZXNldCBQYXNzd29yZCcgc2lkZW1lbnU9e2ZhbHNlfT5cbiAgICAgICAgeyB0aGlzLnN0YXRlLnN1Y2Nlc3MgPT09ICcnID9cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtZmllbGQnPlxuICAgICAgICAgICAgPGlucHV0IG9uRm9jdXM9e3RoaXMub25Gb2N1c31cbiAgICAgICAgICAgIHR5cGU9J3Bhc3N3b3JkJyBpZD0ncGFzc3dvcmQnIHJlZj17KGlucHV0KSA9PiB7IHRoaXMucGFzc3dvcmQgPSBpbnB1dDsgfX0vPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj0ncGFzc3dvcmQnPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtZmllbGQnPlxuICAgICAgICAgICAgPGlucHV0IG9uRm9jdXM9e3RoaXMub25Gb2N1c31cbiAgICAgICAgICAgIHR5cGU9J3Bhc3N3b3JkJyBpZD0nY3Bhc3N3b3JkJyByZWY9eyhpbnB1dCkgPT4geyB0aGlzLmNvbmZpcm1QYXNzd29yZCA9IGlucHV0OyB9fS8+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPSdjcGFzc3dvcmQnPlBhc3N3b3JkIEFnYWluPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+IDpcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlY3Rpb24nIHN0eWxlPXt7IGNvbG9yOiAnIzAyNzVkOCcgfX0+XG4gICAgICAgICAge3RoaXMuc3RhdGUuc3VjY2Vzc31cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAgeyB0aGlzLnN0YXRlLmVycm9yID09PSAnJyA/ICcnIDpcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlZCBjYXJkJyBzdHlsZT17eyBwYWRkaW5nOiAnNXB4IDEwcHgnIH19Pnt0aGlzLnN0YXRlLmVycm9yfTwvZGl2Pn1cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICBvbkNsaWNrPSB7IHRoaXMub25TdWJtaXRQYXNzd29yZCB9XG4gICAgICAgIGNsYXNzTmFtZT0nd2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0IGJ0biBhY3Rpb24tYnRuJz5cbiAgICAgICAge3RoaXMuc3RhdGUucmVzZXRUZXh0fTwvYnV0dG9uPlxuICAgICAgICA8YSBjbGFzc05hbWU9J3JpZ2h0IHdhdmVzLWVmZmVjdCB3YXZlcy10ZWFsIGJ0bi1mbGF0IGFjdGlvbi1idG4nXG4gICAgICAgICAgaHJlZj0nI2xvZ2luJz5Mb2dpbjwvYT5cbiAgICAgIDwvRm9ybT5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5ld1Bhc3N3b3JkO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2pzL2NvbXBvbmVudHMvcHJlc2VudGF0aW9uYWwvbmV3LXBhc3N3b3JkLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==