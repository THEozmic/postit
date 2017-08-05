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

var _reactRedux = __webpack_require__(19);

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
              group.count === 0 ? '' : _react2.default.createElement(
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

exports.default = Groups;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL2dyb3Vwcy5qcz84OGFlIl0sIm5hbWVzIjpbIkdyb3VwcyIsInByb3BzIiwiZ3JvdXBzIiwibWFwIiwiZ3JvdXAiLCJpZCIsImNvdW50IiwidW5yZWFkIiwibmFtZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUEsTTs7O0FBQ0osa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwyR0FDWEEsS0FEVztBQUVsQjs7Ozs2QkFFUTtBQUFBLFVBQ0NDLE1BREQsR0FDWSxLQUFLRCxLQURqQixDQUNDQyxNQUREOztBQUVQLGFBQ0E7QUFBQTtBQUFBO0FBRUlBLGVBQU9DLEdBQVAsQ0FBVyxVQUFDQyxLQUFELEVBQVc7QUFDcEIsaUJBQU87QUFBQTtBQUFBLGNBQUcsV0FBVSxZQUFiLEVBQTBCLGtCQUFnQkEsTUFBTUMsRUFBaEQ7QUFDUCxtQkFBS0QsTUFBTUMsRUFESjtBQUVMO0FBQUE7QUFBQSxnQkFBSyxXQUFVLFlBQWY7QUFDS0Qsb0JBQU1FLEtBQU4sS0FBZ0IsQ0FBaEIsR0FBb0IsRUFBcEIsR0FDSDtBQUFBO0FBQUEsa0JBQU0sV0FBVSx1Q0FBaEI7QUFBeURGLHNCQUFNRztBQUEvRCxlQUZGO0FBSUU7QUFBQTtBQUFBO0FBQU9ILHNCQUFNSTtBQUFiO0FBSkY7QUFGSyxXQUFQO0FBU0QsU0FWRCxFQVVHLElBVkg7QUFGSixPQURBO0FBZ0JEOzs7O0VBdkJrQixnQkFBTUMsUzs7a0JBMEJaVCxNIiwiZmlsZSI6IjAuZGNlZTA1NWM2YTQ1MDMyYjgzZTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IGNoYW5nZVNlbGVjdGVkR3JvdXAgZnJvbSAnLi4vLi4vYWN0aW9ucy9jaGFuZ2VTZWxlY3RlZEdyb3VwJztcblxuY2xhc3MgR3JvdXBzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBncm91cHMgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAge1xuICAgICAgICBncm91cHMubWFwKChncm91cCkgPT4ge1xuICAgICAgICAgIHJldHVybiA8YSBjbGFzc05hbWU9XCJncm91cC1jYXJkXCIgaHJlZj17YCNncm91cC8ke2dyb3VwLmlkfWB9XG4gICAgICAgICAga2V5PXtncm91cC5pZH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3VwLW5hbWVcIj5cbiAgICAgICAgICAgICAgIHsgZ3JvdXAuY291bnQgPT09IDAgPyAnJyA6XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJpZ2h0IGdyb3VwLXVucmVhZC1jb3VudCBiYWRnZS1kYW5nZXJcIj57Z3JvdXAudW5yZWFkfTwvc3Bhbj5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8c3Bhbj57Z3JvdXAubmFtZX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2E+O1xuICAgICAgICB9LCB0aGlzKVxuICAgICAgfVxuICAgIDwvZGl2Pik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR3JvdXBzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2pzL2NvbXBvbmVudHMvY29udGFpbmVycy9ncm91cHMuanMiXSwic291cmNlUm9vdCI6IiJ9