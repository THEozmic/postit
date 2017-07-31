webpackHotUpdate(0,{

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var onSelectGroup = function onSelectGroup(id) {
  undefined.props.onSelectGroup(id);
};

var Groups = function Groups(_ref) {
  var groups = _ref.groups;
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
    }, undefined)
  );
};

exports.default = Groups;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL2dyb3Vwcy5qcz84OGFlIl0sIm5hbWVzIjpbIm9uU2VsZWN0R3JvdXAiLCJpZCIsInByb3BzIiwiR3JvdXBzIiwiZ3JvdXBzIiwibWFwIiwiZ3JvdXAiLCJ1bnJlYWQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBSUEsSUFBTUEsZ0JBQWdCLFNBQWhCQSxhQUFnQixDQUFDQyxFQUFELEVBQVE7QUFDNUIsWUFBS0MsS0FBTCxDQUFXRixhQUFYLENBQXlCQyxFQUF6QjtBQUNELENBRkQ7O0FBSUEsSUFBTUUsU0FBUyxTQUFUQSxNQUFTO0FBQUEsTUFBR0MsTUFBSCxRQUFHQSxNQUFIO0FBQUEsU0FDZjtBQUFBO0FBQUE7QUFFSUEsV0FBT0MsR0FBUCxDQUFXLFVBQUNDLEtBQUQsRUFBVztBQUNwQixhQUFPO0FBQUE7QUFBQSxVQUFHLFdBQVUsWUFBYixFQUEwQixNQUFLLFFBQS9CO0FBQ1AsbUJBQVM7QUFBQSxtQkFBTU4sY0FBY00sTUFBTUwsRUFBcEIsQ0FBTjtBQUFBLFdBREYsRUFDaUMsS0FBS0ssTUFBTUwsRUFENUM7QUFFTDtBQUFBO0FBQUEsWUFBSyxXQUFVLFlBQWY7QUFDRTtBQUFBO0FBQUEsY0FBTSxXQUFVLHVDQUFoQjtBQUF5REssa0JBQU1DO0FBQS9ELFdBREY7QUFFRTtBQUFBO0FBQUE7QUFBT0Qsa0JBQU1FO0FBQWI7QUFGRjtBQUZLLE9BQVA7QUFPRCxLQVJEO0FBRkosR0FEZTtBQUFBLENBQWY7O2tCQWVlTCxNIiwiZmlsZSI6IjAuOWJhNmNkOGJkM2UxY2ZjZTZiNzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cblxuXG5jb25zdCBvblNlbGVjdEdyb3VwID0gKGlkKSA9PiB7XG4gIHRoaXMucHJvcHMub25TZWxlY3RHcm91cChpZCk7XG59O1xuXG5jb25zdCBHcm91cHMgPSAoeyBncm91cHMgfSkgPT5cbjxkaXY+XG4gIHtcbiAgICBncm91cHMubWFwKChncm91cCkgPT4ge1xuICAgICAgcmV0dXJuIDxhIGNsYXNzTmFtZT1cImdyb3VwLWNhcmRcIiBocmVmPVwiI2dyb3VwXCJcbiAgICAgIG9uQ2xpY2s9eygpID0+IG9uU2VsZWN0R3JvdXAoZ3JvdXAuaWQpfSBrZXk9e2dyb3VwLmlkfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cC1uYW1lXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmlnaHQgZ3JvdXAtdW5yZWFkLWNvdW50IGJhZGdlLWRhbmdlclwiPntncm91cC51bnJlYWR9PC9zcGFuPlxuICAgICAgICAgIDxzcGFuPntncm91cC5uYW1lfTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2E+O1xuICAgIH0sIHRoaXMpXG4gIH1cbjwvZGl2PjtcblxuZXhwb3J0IGRlZmF1bHQgR3JvdXBzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2pzL2NvbXBvbmVudHMvY29udGFpbmVycy9ncm91cHMuanMiXSwic291cmNlUm9vdCI6IiJ9