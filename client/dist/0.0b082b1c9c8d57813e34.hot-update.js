webpackHotUpdate(0,{

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(18);

var _changeSelectedGroup = __webpack_require__(122);

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
    value: function onChangeSelectedGroup(e, group) {
      // save group id
      e.preventDefault();
      this.props.onChangeSelectedGroup(group);
      e = e.originalEvent;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var groups = this.props.groups;

      console.log();
      return _react2.default.createElement(
        'div',
        null,
        groups.map(function (group) {
          return _react2.default.createElement(
            'a',
            { className: 'group-card', href: '#group',
              onClick: function onClick() {
                return _this2.onChangeSelectedGroup(group);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL2dyb3Vwcy5qcz84OGFlIl0sIm5hbWVzIjpbIkdyb3VwcyIsInByb3BzIiwib25DaGFuZ2VTZWxlY3RlZEdyb3VwIiwiYmluZCIsImUiLCJncm91cCIsInByZXZlbnREZWZhdWx0Iiwib3JpZ2luYWxFdmVudCIsImdyb3VwcyIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJpZCIsInVucmVhZCIsIm5hbWUiLCJDb21wb25lbnQiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUEsTTs7O0FBQ0osa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxnSEFDWEEsS0FEVzs7QUFFakIsVUFBS0MscUJBQUwsR0FBNkIsTUFBS0EscUJBQUwsQ0FBMkJDLElBQTNCLE9BQTdCO0FBRmlCO0FBR2xCOzs7OzBDQUVxQkMsQyxFQUFHQyxLLEVBQU87QUFDOUI7QUFDQUQsUUFBRUUsY0FBRjtBQUNBLFdBQUtMLEtBQUwsQ0FBV0MscUJBQVgsQ0FBaUNHLEtBQWpDO0FBQ0FELFVBQUlBLEVBQUVHLGFBQU47QUFDRDs7OzZCQUVRO0FBQUE7O0FBQUEsVUFDQ0MsTUFERCxHQUNZLEtBQUtQLEtBRGpCLENBQ0NPLE1BREQ7O0FBRVBDLGNBQVFDLEdBQVI7QUFDQSxhQUNBO0FBQUE7QUFBQTtBQUVJRixlQUFPRyxHQUFQLENBQVcsVUFBQ04sS0FBRCxFQUFXO0FBQ3BCLGlCQUFPO0FBQUE7QUFBQSxjQUFHLFdBQVUsWUFBYixFQUEwQixNQUFLLFFBQS9CO0FBQ1AsdUJBQVM7QUFBQSx1QkFBTSxPQUFLSCxxQkFBTCxDQUEyQkcsS0FBM0IsQ0FBTjtBQUFBLGVBREYsRUFDMkMsS0FBS0EsTUFBTU8sRUFEdEQ7QUFFTDtBQUFBO0FBQUEsZ0JBQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBLGtCQUFNLFdBQVUsdUNBQWhCO0FBQXlEUCxzQkFBTVE7QUFBL0QsZUFERjtBQUVFO0FBQUE7QUFBQTtBQUFPUixzQkFBTVM7QUFBYjtBQUZGO0FBRkssV0FBUDtBQU9ELFNBUkQsRUFRRyxJQVJIO0FBRkosT0FEQTtBQWNEOzs7O0VBOUJrQixnQkFBTUMsUzs7QUFpQzNCLElBQU1DLHFCQUFxQixTQUFyQkEsa0JBQXFCLENBQUNDLFFBQUQsRUFBYztBQUN2QyxTQUFPO0FBQ0xmLDJCQUF1QjtBQUFBLGFBQVNlLFNBQVMsbUNBQW9CWixLQUFwQixDQUFULENBQVQ7QUFBQTtBQURsQixHQUFQO0FBR0QsQ0FKRDs7a0JBT2UseUJBQVEsSUFBUixFQUFjVyxrQkFBZCxFQUFrQ2hCLE1BQWxDLEMiLCJmaWxlIjoiMC4wYjA4MmIxYzljOGQ1NzgxM2UzNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgY2hhbmdlU2VsZWN0ZWRHcm91cCBmcm9tICcuLi8uLi9hY3Rpb25zL2NoYW5nZVNlbGVjdGVkR3JvdXAnO1xuXG5jbGFzcyBHcm91cHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLm9uQ2hhbmdlU2VsZWN0ZWRHcm91cCA9IHRoaXMub25DaGFuZ2VTZWxlY3RlZEdyb3VwLmJpbmQodGhpcyk7XG4gIH1cblxuICBvbkNoYW5nZVNlbGVjdGVkR3JvdXAoZSwgZ3JvdXApIHtcbiAgICAvLyBzYXZlIGdyb3VwIGlkXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2VTZWxlY3RlZEdyb3VwKGdyb3VwKTtcbiAgICBlID0gZS5vcmlnaW5hbEV2ZW50O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZ3JvdXBzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnNvbGUubG9nKClcbiAgICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7XG4gICAgICAgIGdyb3Vwcy5tYXAoKGdyb3VwKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIDxhIGNsYXNzTmFtZT1cImdyb3VwLWNhcmRcIiBocmVmPVwiI2dyb3VwXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLm9uQ2hhbmdlU2VsZWN0ZWRHcm91cChncm91cCl9IGtleT17Z3JvdXAuaWR9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cC1uYW1lXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJpZ2h0IGdyb3VwLXVucmVhZC1jb3VudCBiYWRnZS1kYW5nZXJcIj57Z3JvdXAudW5yZWFkfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4+e2dyb3VwLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9hPjtcbiAgICAgICAgfSwgdGhpcylcbiAgICAgIH1cbiAgICA8L2Rpdj4pO1xuICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICByZXR1cm4ge1xuICAgIG9uQ2hhbmdlU2VsZWN0ZWRHcm91cDogZ3JvdXAgPT4gZGlzcGF0Y2goY2hhbmdlU2VsZWN0ZWRHcm91cChncm91cCkpLFxuICB9O1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIG1hcERpc3BhdGNoVG9Qcm9wcykoR3JvdXBzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9qcy9jb21wb25lbnRzL2NvbnRhaW5lcnMvZ3JvdXBzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==