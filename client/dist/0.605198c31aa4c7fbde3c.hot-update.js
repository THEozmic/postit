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
    value: function onSelectGroup(e, id) {
      e.preventDefault();
      this.props.onSelectGroup(id);
      e.propagateDefault();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL2dyb3Vwcy5qcz84OGFlIl0sIm5hbWVzIjpbIkdyb3VwcyIsInByb3BzIiwib25TZWxlY3RHcm91cCIsImJpbmQiLCJlIiwiaWQiLCJwcmV2ZW50RGVmYXVsdCIsInByb3BhZ2F0ZURlZmF1bHQiLCJncm91cHMiLCJtYXAiLCJncm91cCIsInVucmVhZCIsIm5hbWUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUVNQSxNOzs7QUFDSixrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGdIQUNYQSxLQURXOztBQUVqQixVQUFLQyxhQUFMLEdBQXFCLE1BQUtBLGFBQUwsQ0FBbUJDLElBQW5CLE9BQXJCO0FBRmlCO0FBR2xCOzs7O2tDQUVhQyxDLEVBQUdDLEUsRUFBSTtBQUNuQkQsUUFBRUUsY0FBRjtBQUNBLFdBQUtMLEtBQUwsQ0FBV0MsYUFBWCxDQUF5QkcsRUFBekI7QUFDQUQsUUFBRUcsZ0JBQUY7QUFDRDs7OzZCQUVRO0FBQUE7O0FBQUEsVUFDQ0MsTUFERCxHQUNZLEtBQUtQLEtBRGpCLENBQ0NPLE1BREQ7O0FBRVAsYUFDQTtBQUFBO0FBQUE7QUFFSUEsZUFBT0MsR0FBUCxDQUFXLFVBQUNDLEtBQUQsRUFBVztBQUNwQixpQkFBTztBQUFBO0FBQUEsY0FBRyxXQUFVLFlBQWIsRUFBMEIsTUFBSyxRQUEvQjtBQUNQLHVCQUFTO0FBQUEsdUJBQU0sT0FBS1IsYUFBTCxDQUFtQlEsTUFBTUwsRUFBekIsQ0FBTjtBQUFBLGVBREYsRUFDc0MsS0FBS0ssTUFBTUwsRUFEakQ7QUFFTDtBQUFBO0FBQUEsZ0JBQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBLGtCQUFNLFdBQVUsdUNBQWhCO0FBQXlESyxzQkFBTUM7QUFBL0QsZUFERjtBQUVFO0FBQUE7QUFBQTtBQUFPRCxzQkFBTUU7QUFBYjtBQUZGO0FBRkssV0FBUDtBQU9ELFNBUkQsRUFRRyxJQVJIO0FBRkosT0FEQTtBQWNEOzs7O0VBNUJrQixnQkFBTUMsUzs7a0JBZ0NaYixNIiwiZmlsZSI6IjAuNjA1MTk4YzMxYWE0YzdmYmRlM2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIEdyb3VwcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMub25TZWxlY3RHcm91cCA9IHRoaXMub25TZWxlY3RHcm91cC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgb25TZWxlY3RHcm91cChlLCBpZCkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnByb3BzLm9uU2VsZWN0R3JvdXAoaWQpO1xuICAgIGUucHJvcGFnYXRlRGVmYXVsdCgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZ3JvdXBzIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtcbiAgICAgICAgZ3JvdXBzLm1hcCgoZ3JvdXApID0+IHtcbiAgICAgICAgICByZXR1cm4gPGEgY2xhc3NOYW1lPVwiZ3JvdXAtY2FyZFwiIGhyZWY9XCIjZ3JvdXBcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMub25TZWxlY3RHcm91cChncm91cC5pZCl9IGtleT17Z3JvdXAuaWR9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cC1uYW1lXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJpZ2h0IGdyb3VwLXVucmVhZC1jb3VudCBiYWRnZS1kYW5nZXJcIj57Z3JvdXAudW5yZWFkfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4+e2dyb3VwLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9hPjtcbiAgICAgICAgfSwgdGhpcylcbiAgICAgIH1cbiAgICA8L2Rpdj4pO1xuICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgR3JvdXBzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2pzL2NvbXBvbmVudHMvY29udGFpbmVycy9ncm91cHMuanMiXSwic291cmNlUm9vdCI6IiJ9