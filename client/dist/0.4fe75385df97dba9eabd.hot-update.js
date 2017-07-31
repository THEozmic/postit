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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Groups = function (_React$Component) {
  _inherits(Groups, _React$Component);

  function Groups(props) {
    _classCallCheck(this, Groups);

    var _this = _possibleConstructorReturn(this, (Groups.__proto__ || Object.getPrototypeOf(Groups)).call(this, props));

    _this.onSelectGroup = _this.onSelectGroup.bind(_this);
    return _this;
  }

  _createClass(Groups, [{
    key: "onSelectGroup",
    value: function onSelectGroup(id) {
      this.props.onSelectGroup(id);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var groups = this.props.groups;

      return _react2.default.createElement(
        "div",
        null,
        groups.map(function (group) {
          return _react2.default.createElement(
            "a",
            { className: "group-card", href: "#group",
              onClick: function onClick() {
                return _this2.onSelectGroup(group.id);
              }, key: group.id },
            _react2.default.createElement(
              "div",
              { className: "group-name" },
              _react2.default.createElement(
                "span",
                { className: "right group-unread-count badge-danger" },
                group.unread
              ),
              _react2.default.createElement(
                "span",
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

exports.default = Groups;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL2dyb3Vwcy5qcz84OGFlIl0sIm5hbWVzIjpbIkdyb3VwcyIsInByb3BzIiwib25TZWxlY3RHcm91cCIsImJpbmQiLCJpZCIsImdyb3VwcyIsIm1hcCIsImdyb3VwIiwidW5yZWFkIiwibmFtZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRU1BLE07OztBQUNKLGtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsZ0hBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLGFBQUwsR0FBcUIsTUFBS0EsYUFBTCxDQUFtQkMsSUFBbkIsT0FBckI7QUFGaUI7QUFHbEI7Ozs7a0NBRWFDLEUsRUFBSTtBQUNoQixXQUFLSCxLQUFMLENBQVdDLGFBQVgsQ0FBeUJFLEVBQXpCO0FBQ0Q7Ozs2QkFFUTtBQUFBOztBQUFBLFVBQ0NDLE1BREQsR0FDWSxLQUFLSixLQURqQixDQUNDSSxNQUREOztBQUVQLGFBQ0E7QUFBQTtBQUFBO0FBRUlBLGVBQU9DLEdBQVAsQ0FBVyxVQUFDQyxLQUFELEVBQVc7QUFDcEIsaUJBQU87QUFBQTtBQUFBLGNBQUcsV0FBVSxZQUFiLEVBQTBCLE1BQUssUUFBL0I7QUFDUCx1QkFBUztBQUFBLHVCQUFNLE9BQUtMLGFBQUwsQ0FBbUJLLE1BQU1ILEVBQXpCLENBQU47QUFBQSxlQURGLEVBQ3NDLEtBQUtHLE1BQU1ILEVBRGpEO0FBRUw7QUFBQTtBQUFBLGdCQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQSxrQkFBTSxXQUFVLHVDQUFoQjtBQUF5REcsc0JBQU1DO0FBQS9ELGVBREY7QUFFRTtBQUFBO0FBQUE7QUFBT0Qsc0JBQU1FO0FBQWI7QUFGRjtBQUZLLFdBQVA7QUFPRCxTQVJELEVBUUcsSUFSSDtBQUZKLE9BREE7QUFjRDs7OztFQTFCa0IsZ0JBQU1DLFM7O2tCQThCWlYsTSIsImZpbGUiOiIwLjRmZTc1Mzg1ZGY5N2RiYTllYWJkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBHcm91cHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLm9uU2VsZWN0R3JvdXAgPSB0aGlzLm9uU2VsZWN0R3JvdXAuYmluZCh0aGlzKTtcbiAgfVxuXG4gIG9uU2VsZWN0R3JvdXAoaWQpIHtcbiAgICB0aGlzLnByb3BzLm9uU2VsZWN0R3JvdXAoaWQpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZ3JvdXBzIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtcbiAgICAgICAgZ3JvdXBzLm1hcCgoZ3JvdXApID0+IHtcbiAgICAgICAgICByZXR1cm4gPGEgY2xhc3NOYW1lPVwiZ3JvdXAtY2FyZFwiIGhyZWY9XCIjZ3JvdXBcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMub25TZWxlY3RHcm91cChncm91cC5pZCl9IGtleT17Z3JvdXAuaWR9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cC1uYW1lXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJpZ2h0IGdyb3VwLXVucmVhZC1jb3VudCBiYWRnZS1kYW5nZXJcIj57Z3JvdXAudW5yZWFkfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4+e2dyb3VwLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9hPjtcbiAgICAgICAgfSwgdGhpcylcbiAgICAgIH1cbiAgICA8L2Rpdj4pO1xuICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgR3JvdXBzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2pzL2NvbXBvbmVudHMvY29udGFpbmVycy9ncm91cHMuanMiXSwic291cmNlUm9vdCI6IiJ9