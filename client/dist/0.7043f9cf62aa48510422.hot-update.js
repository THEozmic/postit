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
  undefined.props;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL2dyb3Vwcy5qcz84OGFlIl0sIm5hbWVzIjpbIm9uU2VsZWN0R3JvdXAiLCJpZCIsInByb3BzIiwiR3JvdXBzIiwiZ3JvdXBzIiwibWFwIiwiZ3JvdXAiLCJ1bnJlYWQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBRUEsSUFBTUEsZ0JBQWdCLFNBQWhCQSxhQUFnQixDQUFDQyxFQUFELEVBQVE7QUFDNUIsWUFBS0MsS0FBTDtBQUNELENBRkQ7QUFHQSxJQUFNQyxTQUFTLFNBQVRBLE1BQVM7QUFBQSxNQUFHQyxNQUFILFFBQUdBLE1BQUg7QUFBQSxTQUNmO0FBQUE7QUFBQTtBQUVJQSxXQUFPQyxHQUFQLENBQVcsVUFBQ0MsS0FBRCxFQUFXO0FBQ3BCLGFBQU87QUFBQTtBQUFBLFVBQUcsV0FBVSxZQUFiLEVBQTBCLE1BQUssUUFBL0I7QUFDUCxtQkFBUztBQUFBLG1CQUFNTixjQUFjTSxNQUFNTCxFQUFwQixDQUFOO0FBQUEsV0FERixFQUNpQyxLQUFLSyxNQUFNTCxFQUQ1QztBQUVMO0FBQUE7QUFBQSxZQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQSxjQUFNLFdBQVUsdUNBQWhCO0FBQXlESyxrQkFBTUM7QUFBL0QsV0FERjtBQUVFO0FBQUE7QUFBQTtBQUFPRCxrQkFBTUU7QUFBYjtBQUZGO0FBRkssT0FBUDtBQU9ELEtBUkQ7QUFGSixHQURlO0FBQUEsQ0FBZjs7a0JBZWVMLE0iLCJmaWxlIjoiMC43MDQzZjljZjYyYWE0ODUxMDQyMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3Qgb25TZWxlY3RHcm91cCA9IChpZCkgPT4ge1xuICB0aGlzLnByb3BzXG59XG5jb25zdCBHcm91cHMgPSAoeyBncm91cHMgfSkgPT5cbjxkaXY+XG4gIHtcbiAgICBncm91cHMubWFwKChncm91cCkgPT4ge1xuICAgICAgcmV0dXJuIDxhIGNsYXNzTmFtZT1cImdyb3VwLWNhcmRcIiBocmVmPVwiI2dyb3VwXCJcbiAgICAgIG9uQ2xpY2s9eygpID0+IG9uU2VsZWN0R3JvdXAoZ3JvdXAuaWQpfSBrZXk9e2dyb3VwLmlkfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cC1uYW1lXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmlnaHQgZ3JvdXAtdW5yZWFkLWNvdW50IGJhZGdlLWRhbmdlclwiPntncm91cC51bnJlYWR9PC9zcGFuPlxuICAgICAgICAgIDxzcGFuPntncm91cC5uYW1lfTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2E+O1xuICAgIH0sIHRoaXMpXG4gIH1cbjwvZGl2PjtcblxuZXhwb3J0IGRlZmF1bHQgR3JvdXBzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2pzL2NvbXBvbmVudHMvY29udGFpbmVycy9ncm91cHMuanMiXSwic291cmNlUm9vdCI6IiJ9