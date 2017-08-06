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
        groups.length !== 0 ? groups.map(function (group) {
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
                group.count
              ),
              _react2.default.createElement(
                'span',
                null,
                group.name
              )
            )
          );
        }) : 'You don\'t belong to any group'
      );
    }
  }]);

  return Groups;
}(_react2.default.Component);

exports.default = Groups;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL2dyb3Vwcy5qcz84OGFlIl0sIm5hbWVzIjpbIkdyb3VwcyIsInByb3BzIiwiZ3JvdXBzIiwibGVuZ3RoIiwibWFwIiwiZ3JvdXAiLCJpZCIsImNvdW50IiwibmFtZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUEsTTs7O0FBQ0osa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwyR0FDWEEsS0FEVztBQUVsQjs7Ozs2QkFFUTtBQUFBLFVBQ0NDLE1BREQsR0FDWSxLQUFLRCxLQURqQixDQUNDQyxNQUREOztBQUVQLGFBQ0E7QUFBQTtBQUFBO0FBQ0lBLGVBQU9DLE1BQVAsS0FBa0IsQ0FBbEIsR0FDQUQsT0FBT0UsR0FBUCxDQUFXO0FBQUEsaUJBQ1Q7QUFBQTtBQUFBLGNBQUcsV0FBVSxZQUFiLEVBQTBCLGtCQUFnQkMsTUFBTUMsRUFBaEQ7QUFDQSxtQkFBS0QsTUFBTUMsRUFEWDtBQUVFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLFlBQWY7QUFDS0Qsb0JBQU1FLEtBQU4sS0FBZ0IsQ0FBaEIsR0FBb0IsRUFBcEIsR0FDSDtBQUFBO0FBQUEsa0JBQU0sV0FBVSx1Q0FBaEI7QUFBeURGLHNCQUFNRTtBQUEvRCxlQUZGO0FBSUU7QUFBQTtBQUFBO0FBQU9GLHNCQUFNRztBQUFiO0FBSkY7QUFGRixXQURTO0FBQUEsU0FBWCxDQURBLEdBWUE7QUFiSixPQURBO0FBaUJEOzs7O0VBeEJrQixnQkFBTUMsUzs7a0JBMkJaVCxNIiwiZmlsZSI6IjAuOWE5NmRlM2RmNDZjZjIyZjdlNzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IGNoYW5nZVNlbGVjdGVkR3JvdXAgZnJvbSAnLi4vLi4vYWN0aW9ucy9jaGFuZ2VTZWxlY3RlZEdyb3VwJztcblxuY2xhc3MgR3JvdXBzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBncm91cHMgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgeyBncm91cHMubGVuZ3RoICE9PSAwID9cbiAgICAgICAgZ3JvdXBzLm1hcChncm91cCA9PlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImdyb3VwLWNhcmRcIiBocmVmPXtgI2dyb3VwLyR7Z3JvdXAuaWR9YH1cbiAgICAgICAgICBrZXk9e2dyb3VwLmlkfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXAtbmFtZVwiPlxuICAgICAgICAgICAgICAgeyBncm91cC5jb3VudCA9PT0gMCA/ICcnIDpcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmlnaHQgZ3JvdXAtdW5yZWFkLWNvdW50IGJhZGdlLWRhbmdlclwiPntncm91cC5jb3VudH08L3NwYW4+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPHNwYW4+e2dyb3VwLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9hPlxuICAgICAgICApIDpcbiAgICAgICAgJ1lvdSBkb25cXCd0IGJlbG9uZyB0byBhbnkgZ3JvdXAnXG4gICAgICB9XG4gICAgPC9kaXY+KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHcm91cHM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL2dyb3Vwcy5qcyJdLCJzb3VyY2VSb290IjoiIn0=