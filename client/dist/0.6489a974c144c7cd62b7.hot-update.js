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

var Groups = function Groups(_ref) {
  var groups = _ref.groups;
  return _react2.default.createElement(
    "div",
    null,
    groups.map(function (group) {
      return _react2.default.createElement(
        "a",
        { className: "group-card", href: "#group", onClick: onSelectGroup(group.id), key: group.id },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL2dyb3Vwcy5qcz84OGFlIl0sIm5hbWVzIjpbIkdyb3VwcyIsImdyb3VwcyIsIm1hcCIsImdyb3VwIiwib25TZWxlY3RHcm91cCIsImlkIiwidW5yZWFkIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztBQUVBLElBQU1BLFNBQVMsU0FBVEEsTUFBUztBQUFBLE1BQUdDLE1BQUgsUUFBR0EsTUFBSDtBQUFBLFNBQ2Y7QUFBQTtBQUFBO0FBRUlBLFdBQU9DLEdBQVAsQ0FBVyxVQUFDQyxLQUFELEVBQVc7QUFDcEIsYUFBTztBQUFBO0FBQUEsVUFBRyxXQUFVLFlBQWIsRUFBMEIsTUFBSyxRQUEvQixFQUF3QyxTQUFTQyxjQUFjRCxNQUFNRSxFQUFwQixDQUFqRCxFQUEwRSxLQUFLRixNQUFNRSxFQUFyRjtBQUNMO0FBQUE7QUFBQSxZQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQSxjQUFNLFdBQVUsdUNBQWhCO0FBQXlERixrQkFBTUc7QUFBL0QsV0FERjtBQUVFO0FBQUE7QUFBQTtBQUFPSCxrQkFBTUk7QUFBYjtBQUZGO0FBREssT0FBUDtBQU1ELEtBUEQ7QUFGSixHQURlO0FBQUEsQ0FBZjs7a0JBY2VQLE0iLCJmaWxlIjoiMC42NDg5YTk3NGMxNDRjN2NkNjJiNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgR3JvdXBzID0gKHsgZ3JvdXBzIH0pID0+XG48ZGl2PlxuICB7XG4gICAgZ3JvdXBzLm1hcCgoZ3JvdXApID0+IHtcbiAgICAgIHJldHVybiA8YSBjbGFzc05hbWU9XCJncm91cC1jYXJkXCIgaHJlZj1cIiNncm91cFwiIG9uQ2xpY2s9e29uU2VsZWN0R3JvdXAoZ3JvdXAuaWQpfSBrZXk9e2dyb3VwLmlkfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cC1uYW1lXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmlnaHQgZ3JvdXAtdW5yZWFkLWNvdW50IGJhZGdlLWRhbmdlclwiPntncm91cC51bnJlYWR9PC9zcGFuPlxuICAgICAgICAgIDxzcGFuPntncm91cC5uYW1lfTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2E+O1xuICAgIH0sIHRoaXMpXG4gIH1cbjwvZGl2PjtcblxuZXhwb3J0IGRlZmF1bHQgR3JvdXBzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2pzL2NvbXBvbmVudHMvY29udGFpbmVycy9ncm91cHMuanMiXSwic291cmNlUm9vdCI6IiJ9