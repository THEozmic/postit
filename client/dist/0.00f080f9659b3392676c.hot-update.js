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
      successMessage: ''
    };
    _this.onSend = _this.onSend.bind(_this);
    return _this;
  }

  _createClass(Recover, [{
    key: 'onSend',
    value: function onSend() {
      this.setState({ successMessage: 'A password reset link has been sent to that email' });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _form2.default,
        { title: 'Recover your password', sidemenu: false },
        _react2.default.createElement(
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
          'div',
          { className: 'section', style: { color: '#0275d8' } },
          this.state.successMessage === '' && this.state.successMessage
        ),
        _react2.default.createElement(
          'button',
          { onClick: this.onSend,
            className: 'waves-effect waves-light btn action-btn' },
          'Send'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9yZWNvdmVyLXBhc3N3b3JkLmpzP2YxZGEiXSwibmFtZXMiOlsiUmVjb3ZlciIsInByb3BzIiwic3RhdGUiLCJzdWNjZXNzTWVzc2FnZSIsIm9uU2VuZCIsImJpbmQiLCJzZXRTdGF0ZSIsImNvbG9yIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxPOzs7QUFDSixtQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGtIQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsc0JBQWdCO0FBREwsS0FBYjtBQUdBLFVBQUtDLE1BQUwsR0FBYyxNQUFLQSxNQUFMLENBQVlDLElBQVosT0FBZDtBQUxpQjtBQU1sQjs7Ozs2QkFDUTtBQUNQLFdBQUtDLFFBQUwsQ0FBYyxFQUFFSCxnQkFBZ0IsbURBQWxCLEVBQWQ7QUFDRDs7OzZCQUNRO0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBTSxPQUFNLHVCQUFaLEVBQW9DLFVBQVUsS0FBOUM7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLGFBQWY7QUFDRSxtREFBTyxNQUFLLE9BQVosRUFBb0IsSUFBRyxPQUF2QixHQURGO0FBRUU7QUFBQTtBQUFBLGNBQU8sU0FBSSxPQUFYO0FBQUE7QUFBQTtBQUZGLFNBREY7QUFLRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFNBQWYsRUFBeUIsT0FBTyxFQUFFSSxPQUFPLFNBQVQsRUFBaEM7QUFDSSxlQUFLTCxLQUFMLENBQVdDLGNBQVgsS0FBOEIsRUFBOUIsSUFBb0MsS0FBS0QsS0FBTCxDQUFXQztBQURuRCxTQUxGO0FBUUU7QUFBQTtBQUFBLFlBQVEsU0FBUyxLQUFLQyxNQUF0QjtBQUNBLHVCQUFVLHlDQURWO0FBQUE7QUFBQSxTQVJGO0FBVUU7QUFBQTtBQUFBLFlBQUcsV0FBVSxtREFBYjtBQUNBLGtCQUFLLFFBREw7QUFBQTtBQUFBO0FBVkYsT0FERjtBQWVEOzs7O0VBM0JtQixnQkFBTUksUzs7a0JBOEJiUixPIiwiZmlsZSI6IjAuMDBmMDgwZjk2NTliMzM5MjY3NmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRm9ybSBmcm9tICcuL2Zvcm0nO1xuXG5jbGFzcyBSZWNvdmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHN1Y2Nlc3NNZXNzYWdlOiAnJ1xuICAgIH07XG4gICAgdGhpcy5vblNlbmQgPSB0aGlzLm9uU2VuZC5iaW5kKHRoaXMpO1xuICB9XG4gIG9uU2VuZCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc3VjY2Vzc01lc3NhZ2U6ICdBIHBhc3N3b3JkIHJlc2V0IGxpbmsgaGFzIGJlZW4gc2VudCB0byB0aGF0IGVtYWlsJyB9KTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuKFxuICAgICAgPEZvcm0gdGl0bGU9J1JlY292ZXIgeW91ciBwYXNzd29yZCcgc2lkZW1lbnU9e2ZhbHNlfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2lucHV0LWZpZWxkJz5cbiAgICAgICAgICA8aW5wdXQgdHlwZT0nZW1haWwnIGlkPSdlbWFpbCcvPlxuICAgICAgICAgIDxsYWJlbCBmb3I9J2VtYWlsJz5FbWFpbDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VjdGlvbicgc3R5bGU9e3sgY29sb3I6ICcjMDI3NWQ4JyB9fT5cbiAgICAgICAgICB7IHRoaXMuc3RhdGUuc3VjY2Vzc01lc3NhZ2UgPT09ICcnICYmIHRoaXMuc3RhdGUuc3VjY2Vzc01lc3NhZ2UgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9uU2VuZH1cbiAgICAgICAgY2xhc3NOYW1lPSd3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHQgYnRuIGFjdGlvbi1idG4nPlNlbmQ8L2J1dHRvbj5cbiAgICAgICAgPGEgY2xhc3NOYW1lPSdyaWdodCB3YXZlcy1lZmZlY3Qgd2F2ZXMtdGVhbCBidG4tZmxhdCBhY3Rpb24tYnRuJ1xuICAgICAgICBocmVmPScjbG9naW4nPkxvZ2luPC9hPlxuICAgICAgPC9Gb3JtPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVjb3ZlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9qcy9jb21wb25lbnRzL3ByZXNlbnRhdGlvbmFsL3JlY292ZXItcGFzc3dvcmQuanMiXSwic291cmNlUm9vdCI6IiJ9