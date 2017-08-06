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

    return _possibleConstructorReturn(this, (Groups.__proto__ || Object.getPrototypeOf(Groups)).call(this, props));
  }

  _createClass(Groups, [{
    key: 'render',
    value: function render() {
      var groups = this.props.groups;

      console.log('Groups: ', groups);
      return _react2.default.createElement(
        'div',
        null,
        groups.map(function (group) {
          return _react2.default.createElement(
            'a',
            { className: 'group-card', href: '#group/' + group.id,
              key: group.id },
            _react2.default.createElement(
              'div',
              { className: 'group-name' },
              group.unread === 0 ? '' : _react2.default.createElement(
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

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(Groups);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL2dyb3Vwcy5qcz84OGFlIl0sIm5hbWVzIjpbIkdyb3VwcyIsInByb3BzIiwiZ3JvdXBzIiwiY29uc29sZSIsImxvZyIsIm1hcCIsImdyb3VwIiwiaWQiLCJ1bnJlYWQiLCJuYW1lIiwiQ29tcG9uZW50IiwibWFwRGlzcGF0Y2hUb1Byb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxNOzs7QUFDSixrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDJHQUNYQSxLQURXO0FBRWxCOzs7OzZCQUVRO0FBQUEsVUFDQ0MsTUFERCxHQUNZLEtBQUtELEtBRGpCLENBQ0NDLE1BREQ7O0FBRVBDLGNBQVFDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCRixNQUF4QjtBQUNBLGFBQ0E7QUFBQTtBQUFBO0FBRUlBLGVBQU9HLEdBQVAsQ0FBVyxVQUFDQyxLQUFELEVBQVc7QUFDcEIsaUJBQU87QUFBQTtBQUFBLGNBQUcsV0FBVSxZQUFiLEVBQTBCLGtCQUFnQkEsTUFBTUMsRUFBaEQ7QUFDUCxtQkFBS0QsTUFBTUMsRUFESjtBQUVMO0FBQUE7QUFBQSxnQkFBSyxXQUFVLFlBQWY7QUFDSUQsb0JBQU1FLE1BQU4sS0FBaUIsQ0FBakIsR0FBcUIsRUFBckIsR0FDRjtBQUFBO0FBQUEsa0JBQU0sV0FBVSx1Q0FBaEI7QUFBeURGLHNCQUFNRTtBQUEvRCxlQUZGO0FBSUU7QUFBQTtBQUFBO0FBQU9GLHNCQUFNRztBQUFiO0FBSkY7QUFGSyxXQUFQO0FBU0QsU0FWRCxFQVVHLElBVkg7QUFGSixPQURBO0FBZ0JEOzs7O0VBeEJrQixnQkFBTUMsUzs7a0JBMkJaLHlCQUFRLElBQVIsRUFBY0Msa0JBQWQsRUFBa0NYLE1BQWxDLEMiLCJmaWxlIjoiMC4wMGM5ZDA3ODIwYWM5YWY5NGFmYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgY2hhbmdlU2VsZWN0ZWRHcm91cCBmcm9tICcuLi8uLi9hY3Rpb25zL2NoYW5nZVNlbGVjdGVkR3JvdXAnO1xuXG5jbGFzcyBHcm91cHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGdyb3VwcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zb2xlLmxvZygnR3JvdXBzOiAnLCBncm91cHMpO1xuICAgIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtcbiAgICAgICAgZ3JvdXBzLm1hcCgoZ3JvdXApID0+IHtcbiAgICAgICAgICByZXR1cm4gPGEgY2xhc3NOYW1lPVwiZ3JvdXAtY2FyZFwiIGhyZWY9e2AjZ3JvdXAvJHtncm91cC5pZH1gfVxuICAgICAgICAgIGtleT17Z3JvdXAuaWR9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cC1uYW1lXCI+XG4gICAgICAgICAgICAgIHsgZ3JvdXAudW5yZWFkID09PSAwID8gJycgOlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyaWdodCBncm91cC11bnJlYWQtY291bnQgYmFkZ2UtZGFuZ2VyXCI+e2dyb3VwLnVucmVhZH08L3NwYW4+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPHNwYW4+e2dyb3VwLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9hPjtcbiAgICAgICAgfSwgdGhpcylcbiAgICAgIH1cbiAgICA8L2Rpdj4pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobnVsbCwgbWFwRGlzcGF0Y2hUb1Byb3BzKShHcm91cHMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2pzL2NvbXBvbmVudHMvY29udGFpbmVycy9ncm91cHMuanMiXSwic291cmNlUm9vdCI6IiJ9