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

    return _possibleConstructorReturn(this, (Groups.__proto__ || Object.getPrototypeOf(Groups)).call(this, props));
  }

  _createClass(Groups, [{
    key: "onSelectGroup",
    value: function onSelectGroup(id) {
      this.props.onSelectGroup(id);
    }
  }, {
    key: "render",
    value: function render() {
      var groups = this.props.groups;

      return _react2.default.createElement(
        "div",
        null,
        groups.map(function (group) {
          return _react2.default.createElement(
            "a",
            { className: "group-card", href: "#group",
              onClick: function onClick() {
                return onSelectGroup(group.id);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL2dyb3Vwcy5qcz84OGFlIl0sIm5hbWVzIjpbIkdyb3VwcyIsInByb3BzIiwiaWQiLCJvblNlbGVjdEdyb3VwIiwiZ3JvdXBzIiwibWFwIiwiZ3JvdXAiLCJ1bnJlYWQiLCJuYW1lIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFTUEsTTs7O0FBQ0osa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwyR0FDWEEsS0FEVztBQUVsQjs7OztrQ0FFYUMsRSxFQUFJO0FBQ2hCLFdBQUtELEtBQUwsQ0FBV0UsYUFBWCxDQUF5QkQsRUFBekI7QUFDRDs7OzZCQUVRO0FBQUEsVUFDQ0UsTUFERCxHQUNZLEtBQUtILEtBRGpCLENBQ0NHLE1BREQ7O0FBRVAsYUFDQTtBQUFBO0FBQUE7QUFFSUEsZUFBT0MsR0FBUCxDQUFXLFVBQUNDLEtBQUQsRUFBVztBQUNwQixpQkFBTztBQUFBO0FBQUEsY0FBRyxXQUFVLFlBQWIsRUFBMEIsTUFBSyxRQUEvQjtBQUNQLHVCQUFTO0FBQUEsdUJBQU1ILGNBQWNHLE1BQU1KLEVBQXBCLENBQU47QUFBQSxlQURGLEVBQ2lDLEtBQUtJLE1BQU1KLEVBRDVDO0FBRUw7QUFBQTtBQUFBLGdCQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQSxrQkFBTSxXQUFVLHVDQUFoQjtBQUF5REksc0JBQU1DO0FBQS9ELGVBREY7QUFFRTtBQUFBO0FBQUE7QUFBT0Qsc0JBQU1FO0FBQWI7QUFGRjtBQUZLLFdBQVA7QUFPRCxTQVJELEVBUUcsSUFSSDtBQUZKLE9BREE7QUFjRDs7OztFQXpCa0IsZ0JBQU1DLFM7O2tCQTZCWlQsTSIsImZpbGUiOiIwLjAzYWQ0MTdiNmI4YjdhMDc0YTlmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBHcm91cHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIG9uU2VsZWN0R3JvdXAoaWQpIHtcbiAgICB0aGlzLnByb3BzLm9uU2VsZWN0R3JvdXAoaWQpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZ3JvdXBzIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtcbiAgICAgICAgZ3JvdXBzLm1hcCgoZ3JvdXApID0+IHtcbiAgICAgICAgICByZXR1cm4gPGEgY2xhc3NOYW1lPVwiZ3JvdXAtY2FyZFwiIGhyZWY9XCIjZ3JvdXBcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uU2VsZWN0R3JvdXAoZ3JvdXAuaWQpfSBrZXk9e2dyb3VwLmlkfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXAtbmFtZVwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyaWdodCBncm91cC11bnJlYWQtY291bnQgYmFkZ2UtZGFuZ2VyXCI+e2dyb3VwLnVucmVhZH08L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuPntncm91cC5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvYT47XG4gICAgICAgIH0sIHRoaXMpXG4gICAgICB9XG4gICAgPC9kaXY+KTtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEdyb3VwcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9qcy9jb21wb25lbnRzL2NvbnRhaW5lcnMvZ3JvdXBzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==