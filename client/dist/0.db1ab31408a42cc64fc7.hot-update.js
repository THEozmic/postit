webpackHotUpdate(0,{

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(16);

var _changeSelectedGroup = __webpack_require__(75);

var _changeSelectedGroup2 = _interopRequireDefault(_changeSelectedGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Groups = function (_React$Component) {
  _inherits(Groups, _React$Component);

  function Groups(props) {
    _classCallCheck(this, Groups);

    var _this = _possibleConstructorReturn(this, (Groups.__proto__ || Object.getPrototypeOf(Groups)).call(this, props));

    _this.onChangeSelectedGroup = _this.onChangeSelectedGroup.bind(_this);
    return _this;
  }

  _createClass(Groups, [{
    key: 'onChangeSelectedGroup',
    value: function onChangeSelectedGroup(group, e) {
      // save group id
      this.props.onChangeSelectedGroup(group);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var groups = this.props.groups;

      conso;
      this.props.onChangeSelectedGroup(groups[0]);
      console.log('Groups: ', groups);
      return _react2.default.createElement(
        'div',
        null,
        groups.map(function (group) {
          return _react2.default.createElement(
            'a',
            { className: 'group-card', href: '#group/' + group.id,
              onClick: function onClick(e) {
                return _this2.onChangeSelectedGroup(group, e);
              }, key: group.id },
            _react2.default.createElement(
              'div',
              { className: 'group-name' },
              _react2.default.createElement(
                'span',
                { className: 'right group-unread-count badge-danger' },
                group.unread
              ),
              _react2.default.createElement(
                'span',
                null,
                group.name
              )
            )
          );
        }, this)
      );
    }
  }]);

  return Groups;
}(_react2.default.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onChangeSelectedGroup: function onChangeSelectedGroup(group) {
      return dispatch((0, _changeSelectedGroup2.default)(group));
    }
  };
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(Groups);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL2dyb3Vwcy5qcz84OGFlIl0sIm5hbWVzIjpbIkdyb3VwcyIsInByb3BzIiwib25DaGFuZ2VTZWxlY3RlZEdyb3VwIiwiYmluZCIsImdyb3VwIiwiZSIsImdyb3VwcyIsImNvbnNvIiwiY29uc29sZSIsImxvZyIsIm1hcCIsImlkIiwidW5yZWFkIiwibmFtZSIsIkNvbXBvbmVudCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxNOzs7QUFDSixrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGdIQUNYQSxLQURXOztBQUVqQixVQUFLQyxxQkFBTCxHQUE2QixNQUFLQSxxQkFBTCxDQUEyQkMsSUFBM0IsT0FBN0I7QUFGaUI7QUFHbEI7Ozs7MENBRXFCQyxLLEVBQU9DLEMsRUFBRztBQUM5QjtBQUNBLFdBQUtKLEtBQUwsQ0FBV0MscUJBQVgsQ0FBaUNFLEtBQWpDO0FBQ0Q7Ozs2QkFFUTtBQUFBOztBQUFBLFVBQ0NFLE1BREQsR0FDWSxLQUFLTCxLQURqQixDQUNDSyxNQUREOztBQUVQQztBQUNBLFdBQUtOLEtBQUwsQ0FBV0MscUJBQVgsQ0FBaUNJLE9BQU8sQ0FBUCxDQUFqQztBQUNBRSxjQUFRQyxHQUFSLENBQVksVUFBWixFQUF3QkgsTUFBeEI7QUFDQSxhQUNBO0FBQUE7QUFBQTtBQUVJQSxlQUFPSSxHQUFQLENBQVcsVUFBQ04sS0FBRCxFQUFXO0FBQ3BCLGlCQUFPO0FBQUE7QUFBQSxjQUFHLFdBQVUsWUFBYixFQUEwQixrQkFBZ0JBLE1BQU1PLEVBQWhEO0FBQ1AsdUJBQVM7QUFBQSx1QkFBSyxPQUFLVCxxQkFBTCxDQUEyQkUsS0FBM0IsRUFBa0NDLENBQWxDLENBQUw7QUFBQSxlQURGLEVBQzZDLEtBQUtELE1BQU1PLEVBRHhEO0FBRUw7QUFBQTtBQUFBLGdCQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQSxrQkFBTSxXQUFVLHVDQUFoQjtBQUF5RFAsc0JBQU1RO0FBQS9ELGVBREY7QUFFRTtBQUFBO0FBQUE7QUFBT1Isc0JBQU1TO0FBQWI7QUFGRjtBQUZLLFdBQVA7QUFPRCxTQVJELEVBUUcsSUFSSDtBQUZKLE9BREE7QUFjRDs7OztFQTlCa0IsZ0JBQU1DLFM7O0FBaUMzQixJQUFNQyxxQkFBcUIsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFELEVBQWM7QUFDdkMsU0FBTztBQUNMZCwyQkFBdUI7QUFBQSxhQUFTYyxTQUFTLG1DQUFvQlosS0FBcEIsQ0FBVCxDQUFUO0FBQUE7QUFEbEIsR0FBUDtBQUdELENBSkQ7O2tCQU9lLHlCQUFRLElBQVIsRUFBY1csa0JBQWQsRUFBa0NmLE1BQWxDLEMiLCJmaWxlIjoiMC5kYjFhYjMxNDA4YTQyY2M2NGZjNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgY2hhbmdlU2VsZWN0ZWRHcm91cCBmcm9tICcuLi8uLi9hY3Rpb25zL2NoYW5nZVNlbGVjdGVkR3JvdXAnO1xuXG5jbGFzcyBHcm91cHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLm9uQ2hhbmdlU2VsZWN0ZWRHcm91cCA9IHRoaXMub25DaGFuZ2VTZWxlY3RlZEdyb3VwLmJpbmQodGhpcyk7XG4gIH1cblxuICBvbkNoYW5nZVNlbGVjdGVkR3JvdXAoZ3JvdXAsIGUpIHtcbiAgICAvLyBzYXZlIGdyb3VwIGlkXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZVNlbGVjdGVkR3JvdXAoZ3JvdXApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZ3JvdXBzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnNvXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZVNlbGVjdGVkR3JvdXAoZ3JvdXBzWzBdKTtcbiAgICBjb25zb2xlLmxvZygnR3JvdXBzOiAnLCBncm91cHMpO1xuICAgIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtcbiAgICAgICAgZ3JvdXBzLm1hcCgoZ3JvdXApID0+IHtcbiAgICAgICAgICByZXR1cm4gPGEgY2xhc3NOYW1lPVwiZ3JvdXAtY2FyZFwiIGhyZWY9e2AjZ3JvdXAvJHtncm91cC5pZH1gfVxuICAgICAgICAgIG9uQ2xpY2s9e2UgPT4gdGhpcy5vbkNoYW5nZVNlbGVjdGVkR3JvdXAoZ3JvdXAsIGUpfSBrZXk9e2dyb3VwLmlkfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXAtbmFtZVwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyaWdodCBncm91cC11bnJlYWQtY291bnQgYmFkZ2UtZGFuZ2VyXCI+e2dyb3VwLnVucmVhZH08L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuPntncm91cC5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvYT47XG4gICAgICAgIH0sIHRoaXMpXG4gICAgICB9XG4gICAgPC9kaXY+KTtcbiAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBvbkNoYW5nZVNlbGVjdGVkR3JvdXA6IGdyb3VwID0+IGRpc3BhdGNoKGNoYW5nZVNlbGVjdGVkR3JvdXAoZ3JvdXApKSxcbiAgfTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEdyb3Vwcyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL2dyb3Vwcy5qcyJdLCJzb3VyY2VSb290IjoiIn0=