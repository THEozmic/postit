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
      successMessag: ''
    };
    return _this;
  }

  _createClass(Recover, [{
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
          'a',
          { href: '#login',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9yZWNvdmVyLXBhc3N3b3JkLmpzP2YxZGEiXSwibmFtZXMiOlsiUmVjb3ZlciIsInByb3BzIiwic3RhdGUiLCJzdWNjZXNzTWVzc2FnIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxPOzs7QUFDSixtQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGtIQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMscUJBQWU7QUFESixLQUFiO0FBRmlCO0FBS2xCOzs7OzZCQUNRO0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBTSxPQUFNLHVCQUFaLEVBQW9DLFVBQVUsS0FBOUM7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLGFBQWY7QUFDRSxtREFBTyxNQUFLLE9BQVosRUFBb0IsSUFBRyxPQUF2QixHQURGO0FBRUU7QUFBQTtBQUFBLGNBQU8sU0FBSSxPQUFYO0FBQUE7QUFBQTtBQUZGLFNBREY7QUFLRTtBQUFBO0FBQUEsWUFBRyxNQUFLLFFBQVI7QUFDQSx1QkFBVSx5Q0FEVjtBQUFBO0FBQUEsU0FMRjtBQU9FO0FBQUE7QUFBQSxZQUFHLFdBQVUsbURBQWI7QUFDQSxrQkFBSyxRQURMO0FBQUE7QUFBQTtBQVBGLE9BREY7QUFZRDs7OztFQXBCbUIsZ0JBQU1DLFM7O2tCQXVCYkosTyIsImZpbGUiOiIwLmQ1MzgxZmI3NGFhMGUzNjJkY2UyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZvcm0gZnJvbSAnLi9mb3JtJztcblxuY2xhc3MgUmVjb3ZlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzdWNjZXNzTWVzc2FnOiAnJ1xuICAgIH07XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybihcbiAgICAgIDxGb3JtIHRpdGxlPSdSZWNvdmVyIHlvdXIgcGFzc3dvcmQnIHNpZGVtZW51PXtmYWxzZX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1maWVsZCc+XG4gICAgICAgICAgPGlucHV0IHR5cGU9J2VtYWlsJyBpZD0nZW1haWwnLz5cbiAgICAgICAgICA8bGFiZWwgZm9yPSdlbWFpbCc+RW1haWw8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGEgaHJlZj0nI2xvZ2luJ1xuICAgICAgICBjbGFzc05hbWU9J3dhdmVzLWVmZmVjdCB3YXZlcy1saWdodCBidG4gYWN0aW9uLWJ0bic+U2VuZDwvYT5cbiAgICAgICAgPGEgY2xhc3NOYW1lPSdyaWdodCB3YXZlcy1lZmZlY3Qgd2F2ZXMtdGVhbCBidG4tZmxhdCBhY3Rpb24tYnRuJ1xuICAgICAgICBocmVmPScjbG9naW4nPkxvZ2luPC9hPlxuICAgICAgPC9Gb3JtPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVjb3ZlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9qcy9jb21wb25lbnRzL3ByZXNlbnRhdGlvbmFsL3JlY292ZXItcGFzc3dvcmQuanMiXSwic291cmNlUm9vdCI6IiJ9