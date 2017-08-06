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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9yZWNvdmVyLXBhc3N3b3JkLmpzP2YxZGEiXSwibmFtZXMiOlsiUmVjb3ZlciIsInByb3BzIiwic3RhdGUiLCJzdWNjZXNzTWVzc2FnZSIsIm9uU2VuZCIsImJpbmQiLCJzZXRTdGF0ZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUEsTzs7O0FBQ0osbUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxrSEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLHNCQUFnQjtBQURMLEtBQWI7QUFHQSxVQUFLQyxNQUFMLEdBQWMsTUFBS0EsTUFBTCxDQUFZQyxJQUFaLE9BQWQ7QUFMaUI7QUFNbEI7Ozs7NkJBQ1E7QUFDUCxXQUFLQyxRQUFMLENBQWMsRUFBRUgsZ0JBQWdCLG1EQUFsQixFQUFkO0FBQ0Q7Ozs2QkFDUTtBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQU0sT0FBTSx1QkFBWixFQUFvQyxVQUFVLEtBQTlDO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSxhQUFmO0FBQ0UsbURBQU8sTUFBSyxPQUFaLEVBQW9CLElBQUcsT0FBdkIsR0FERjtBQUVFO0FBQUE7QUFBQSxjQUFPLFNBQUksT0FBWDtBQUFBO0FBQUE7QUFGRixTQURGO0FBS0U7QUFBQTtBQUFBLFlBQVEsU0FBUyxLQUFLQyxNQUF0QjtBQUNBLHVCQUFVLHlDQURWO0FBQUE7QUFBQSxTQUxGO0FBT0U7QUFBQTtBQUFBLFlBQUcsV0FBVSxtREFBYjtBQUNBLGtCQUFLLFFBREw7QUFBQTtBQUFBO0FBUEYsT0FERjtBQVlEOzs7O0VBeEJtQixnQkFBTUcsUzs7a0JBMkJiUCxPIiwiZmlsZSI6IjAuYTdlODgxOWE1YTdlMTM5MGEwYTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRm9ybSBmcm9tICcuL2Zvcm0nO1xuXG5jbGFzcyBSZWNvdmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHN1Y2Nlc3NNZXNzYWdlOiAnJ1xuICAgIH07XG4gICAgdGhpcy5vblNlbmQgPSB0aGlzLm9uU2VuZC5iaW5kKHRoaXMpO1xuICB9XG4gIG9uU2VuZCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc3VjY2Vzc01lc3NhZ2U6ICdBIHBhc3N3b3JkIHJlc2V0IGxpbmsgaGFzIGJlZW4gc2VudCB0byB0aGF0IGVtYWlsJyB9KTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuKFxuICAgICAgPEZvcm0gdGl0bGU9J1JlY292ZXIgeW91ciBwYXNzd29yZCcgc2lkZW1lbnU9e2ZhbHNlfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2lucHV0LWZpZWxkJz5cbiAgICAgICAgICA8aW5wdXQgdHlwZT0nZW1haWwnIGlkPSdlbWFpbCcvPlxuICAgICAgICAgIDxsYWJlbCBmb3I9J2VtYWlsJz5FbWFpbDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMub25TZW5kfVxuICAgICAgICBjbGFzc05hbWU9J3dhdmVzLWVmZmVjdCB3YXZlcy1saWdodCBidG4gYWN0aW9uLWJ0bic+U2VuZDwvYnV0dG9uPlxuICAgICAgICA8YSBjbGFzc05hbWU9J3JpZ2h0IHdhdmVzLWVmZmVjdCB3YXZlcy10ZWFsIGJ0bi1mbGF0IGFjdGlvbi1idG4nXG4gICAgICAgIGhyZWY9JyNsb2dpbic+TG9naW48L2E+XG4gICAgICA8L0Zvcm0+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWNvdmVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2pzL2NvbXBvbmVudHMvcHJlc2VudGF0aW9uYWwvcmVjb3Zlci1wYXNzd29yZC5qcyJdLCJzb3VyY2VSb290IjoiIn0=