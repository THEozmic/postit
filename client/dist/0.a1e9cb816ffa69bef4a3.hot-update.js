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

var _form = __webpack_require__(27);

var _form2 = _interopRequireDefault(_form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Recover = function (_React$Component) {
  _inherits(Recover, _React$Component);

  function Recover(props) {
    _classCallCheck(this, Recover);

    var _this = _possibleConstructorReturn(this, (Recover.__proto__ || Object.getPrototypeOf(Recover)).call(this, props));

    _this.state = {
      successMessage: '',
      buttonText: 'Send'
    };
    _this.onSend = _this.onSend.bind(_this);
    return _this;
  }

  _createClass(Recover, [{
    key: 'onSend',
    value: function onSend() {

      if (this.state.buttonText === 'Okay') {
        location.hash = '#login';
        return;
      }
      this.setState({
        successMessage: 'A password reset link has been sent to that email',
        buttonText: 'Okay'
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _form2.default,
        { title: 'Recover your password', sidemenu: false },
        this.state.successMessage !== '' ? _react2.default.createElement(
          'div',
          { className: 'section', style: { color: '#0275d8' } },
          this.state.successMessage
        ) : _react2.default.createElement(
          'div',
          { className: 'input-field' },
          _react2.default.createElement('input', { type: 'email', id: 'email' }),
          _react2.default.createElement(
            'label',
            { htmlFor: 'email' },
            'Email'
          )
        ),
        _react2.default.createElement(
          'button',
          { onClick: this.onSend,
            className: 'waves-effect waves-light btn action-btn' },
          this.state.buttonText
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

  return Recover;
}(_react2.default.Component);

exports.default = Recover;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9yZWNvdmVyLXBhc3N3b3JkLmpzP2YxZGEiXSwibmFtZXMiOlsiUmVjb3ZlciIsInByb3BzIiwic3RhdGUiLCJzdWNjZXNzTWVzc2FnZSIsImJ1dHRvblRleHQiLCJvblNlbmQiLCJiaW5kIiwibG9jYXRpb24iLCJoYXNoIiwic2V0U3RhdGUiLCJjb2xvciIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUEsTzs7O0FBQ0osbUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxrSEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLHNCQUFnQixFQURMO0FBRVhDLGtCQUFZO0FBRkQsS0FBYjtBQUlBLFVBQUtDLE1BQUwsR0FBYyxNQUFLQSxNQUFMLENBQVlDLElBQVosT0FBZDtBQU5pQjtBQU9sQjs7Ozs2QkFDUTs7QUFFUCxVQUFJLEtBQUtKLEtBQUwsQ0FBV0UsVUFBWCxLQUEwQixNQUE5QixFQUFzQztBQUNwQ0csaUJBQVNDLElBQVQsR0FBZ0IsUUFBaEI7QUFDQTtBQUNEO0FBQ0QsV0FBS0MsUUFBTCxDQUFjO0FBQ1pOLHdCQUFnQixtREFESjtBQUVaQyxvQkFBWTtBQUZBLE9BQWQ7QUFJRDs7OzZCQUNRO0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBTSxPQUFNLHVCQUFaLEVBQW9DLFVBQVUsS0FBOUM7QUFDTSxhQUFLRixLQUFMLENBQVdDLGNBQVgsS0FBOEIsRUFBOUIsR0FDRjtBQUFBO0FBQUEsWUFBSyxXQUFVLFNBQWYsRUFBeUIsT0FBTyxFQUFFTyxPQUFPLFNBQVQsRUFBaEM7QUFDSSxlQUFLUixLQUFMLENBQVdDO0FBRGYsU0FERSxHQUlGO0FBQUE7QUFBQSxZQUFLLFdBQVUsYUFBZjtBQUNFLG1EQUFPLE1BQUssT0FBWixFQUFvQixJQUFHLE9BQXZCLEdBREY7QUFFRTtBQUFBO0FBQUEsY0FBTyxTQUFJLE9BQVg7QUFBQTtBQUFBO0FBRkYsU0FMSjtBQVVFO0FBQUE7QUFBQSxZQUFRLFNBQVMsS0FBS0UsTUFBdEI7QUFDQSx1QkFBVSx5Q0FEVjtBQUNzRCxlQUFLSCxLQUFMLENBQVdFO0FBRGpFLFNBVkY7QUFZRTtBQUFBO0FBQUEsWUFBRyxXQUFVLG1EQUFiO0FBQ0Esa0JBQUssUUFETDtBQUFBO0FBQUE7QUFaRixPQURGO0FBaUJEOzs7O0VBdENtQixnQkFBTU8sUzs7a0JBeUNiWCxPIiwiZmlsZSI6IjAuYTFlOWNiODE2ZmZhNjliZWY0YTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRm9ybSBmcm9tICcuL2Zvcm0nO1xuXG5jbGFzcyBSZWNvdmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHN1Y2Nlc3NNZXNzYWdlOiAnJyxcbiAgICAgIGJ1dHRvblRleHQ6ICdTZW5kJ1xuICAgIH07XG4gICAgdGhpcy5vblNlbmQgPSB0aGlzLm9uU2VuZC5iaW5kKHRoaXMpO1xuICB9XG4gIG9uU2VuZCgpIHtcbiAgICBcbiAgICBpZiAodGhpcy5zdGF0ZS5idXR0b25UZXh0ID09PSAnT2theScpIHtcbiAgICAgIGxvY2F0aW9uLmhhc2ggPSAnI2xvZ2luJztcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzdWNjZXNzTWVzc2FnZTogJ0EgcGFzc3dvcmQgcmVzZXQgbGluayBoYXMgYmVlbiBzZW50IHRvIHRoYXQgZW1haWwnLFxuICAgICAgYnV0dG9uVGV4dDogJ09rYXknXG4gICAgfSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybSB0aXRsZT0nUmVjb3ZlciB5b3VyIHBhc3N3b3JkJyBzaWRlbWVudT17ZmFsc2V9PlxuICAgICAgICAgIHsgdGhpcy5zdGF0ZS5zdWNjZXNzTWVzc2FnZSAhPT0gJycgP1xuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWN0aW9uJyBzdHlsZT17eyBjb2xvcjogJyMwMjc1ZDgnIH19PlxuICAgICAgICAgICAgeyB0aGlzLnN0YXRlLnN1Y2Nlc3NNZXNzYWdlIH1cbiAgICAgICAgICA8L2Rpdj4gOlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1maWVsZCc+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0nZW1haWwnIGlkPSdlbWFpbCcvPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj0nZW1haWwnPkVtYWlsPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMub25TZW5kfVxuICAgICAgICBjbGFzc05hbWU9J3dhdmVzLWVmZmVjdCB3YXZlcy1saWdodCBidG4gYWN0aW9uLWJ0bic+eyB0aGlzLnN0YXRlLmJ1dHRvblRleHQgfTwvYnV0dG9uPlxuICAgICAgICA8YSBjbGFzc05hbWU9J3JpZ2h0IHdhdmVzLWVmZmVjdCB3YXZlcy10ZWFsIGJ0bi1mbGF0IGFjdGlvbi1idG4nXG4gICAgICAgIGhyZWY9JyNsb2dpbic+TG9naW48L2E+XG4gICAgICA8L0Zvcm0+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWNvdmVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2pzL2NvbXBvbmVudHMvcHJlc2VudGF0aW9uYWwvcmVjb3Zlci1wYXNzd29yZC5qcyJdLCJzb3VyY2VSb290IjoiIn0=