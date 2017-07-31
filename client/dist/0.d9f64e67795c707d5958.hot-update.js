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

    var _this = _possibleConstructorReturn(this, (Groups.__proto__ || Object.getPrototypeOf(Groups)).call(this, props));

    _this.onChangeSelectedGroup = _this.onChangeSelectedGroup.bind(_this);
    return _this;
  }

  _createClass(Groups, [{
    key: 'onChangeSelectedGroup',
    value: function onChangeSelectedGroup(group, e) {
      // save group id
      e.preventDefault();
      this.props.onChangeSelectedGroup(group);
      console.log(e);
      this.onChangeSelectedGroup(group, e);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var groups = this.props.groups;

      console.log('Groups: ', groups);
      return _react2.default.createElement(
        'div',
        null,
        groups.map(function (group) {
          return _react2.default.createElement(
            'a',
            { className: 'group-card', href: '#group',
              onClick: function onClick(e) {
                return _this2.onChangeSelectedGroup(group, e);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL2dyb3Vwcy5qcz84OGFlIl0sIm5hbWVzIjpbIkdyb3VwcyIsInByb3BzIiwib25DaGFuZ2VTZWxlY3RlZEdyb3VwIiwiYmluZCIsImdyb3VwIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImdyb3VwcyIsIm1hcCIsImlkIiwidW5yZWFkIiwibmFtZSIsIkNvbXBvbmVudCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxNOzs7QUFDSixrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGdIQUNYQSxLQURXOztBQUVqQixVQUFLQyxxQkFBTCxHQUE2QixNQUFLQSxxQkFBTCxDQUEyQkMsSUFBM0IsT0FBN0I7QUFGaUI7QUFHbEI7Ozs7MENBRXFCQyxLLEVBQU9DLEMsRUFBRztBQUM5QjtBQUNBQSxRQUFFQyxjQUFGO0FBQ0EsV0FBS0wsS0FBTCxDQUFXQyxxQkFBWCxDQUFpQ0UsS0FBakM7QUFDQUcsY0FBUUMsR0FBUixDQUFZSCxDQUFaO0FBQ0EsV0FBS0gscUJBQUwsQ0FBMkJFLEtBQTNCLEVBQWtDQyxDQUFsQztBQUNEOzs7NkJBRVE7QUFBQTs7QUFBQSxVQUNDSSxNQURELEdBQ1ksS0FBS1IsS0FEakIsQ0FDQ1EsTUFERDs7QUFFUEYsY0FBUUMsR0FBUixDQUFZLFVBQVosRUFBd0JDLE1BQXhCO0FBQ0EsYUFDQTtBQUFBO0FBQUE7QUFFSUEsZUFBT0MsR0FBUCxDQUFXLFVBQUNOLEtBQUQsRUFBVztBQUNwQixpQkFBTztBQUFBO0FBQUEsY0FBRyxXQUFVLFlBQWIsRUFBMEIsTUFBSyxRQUEvQjtBQUNQLHVCQUFTO0FBQUEsdUJBQUssT0FBS0YscUJBQUwsQ0FBMkJFLEtBQTNCLEVBQWtDQyxDQUFsQyxDQUFMO0FBQUEsZUFERixFQUM2QyxLQUFLRCxNQUFNTyxFQUR4RDtBQUVMO0FBQUE7QUFBQSxnQkFBSyxXQUFVLFlBQWY7QUFDRTtBQUFBO0FBQUEsa0JBQU0sV0FBVSx1Q0FBaEI7QUFBeURQLHNCQUFNUTtBQUEvRCxlQURGO0FBRUU7QUFBQTtBQUFBO0FBQU9SLHNCQUFNUztBQUFiO0FBRkY7QUFGSyxXQUFQO0FBT0QsU0FSRCxFQVFHLElBUkg7QUFGSixPQURBO0FBY0Q7Ozs7RUEvQmtCLGdCQUFNQyxTOztBQWtDM0IsSUFBTUMscUJBQXFCLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRCxFQUFjO0FBQ3ZDLFNBQU87QUFDTGQsMkJBQXVCO0FBQUEsYUFBU2MsU0FBUyxtQ0FBb0JaLEtBQXBCLENBQVQsQ0FBVDtBQUFBO0FBRGxCLEdBQVA7QUFHRCxDQUpEOztrQkFPZSx5QkFBUSxJQUFSLEVBQWNXLGtCQUFkLEVBQWtDZixNQUFsQyxDIiwiZmlsZSI6IjAuZDlmNjRlNjc3OTVjNzA3ZDU5NTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IGNoYW5nZVNlbGVjdGVkR3JvdXAgZnJvbSAnLi4vLi4vYWN0aW9ucy9jaGFuZ2VTZWxlY3RlZEdyb3VwJztcblxuY2xhc3MgR3JvdXBzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5vbkNoYW5nZVNlbGVjdGVkR3JvdXAgPSB0aGlzLm9uQ2hhbmdlU2VsZWN0ZWRHcm91cC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgb25DaGFuZ2VTZWxlY3RlZEdyb3VwKGdyb3VwLCBlKSB7XG4gICAgLy8gc2F2ZSBncm91cCBpZFxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlU2VsZWN0ZWRHcm91cChncm91cCk7XG4gICAgY29uc29sZS5sb2coZSk7XG4gICAgdGhpcy5vbkNoYW5nZVNlbGVjdGVkR3JvdXAoZ3JvdXAsIGUpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZ3JvdXBzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnNvbGUubG9nKCdHcm91cHM6ICcsIGdyb3Vwcyk7XG4gICAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAge1xuICAgICAgICBncm91cHMubWFwKChncm91cCkgPT4ge1xuICAgICAgICAgIHJldHVybiA8YSBjbGFzc05hbWU9XCJncm91cC1jYXJkXCIgaHJlZj1cIiNncm91cFwiXG4gICAgICAgICAgb25DbGljaz17ZSA9PiB0aGlzLm9uQ2hhbmdlU2VsZWN0ZWRHcm91cChncm91cCwgZSl9IGtleT17Z3JvdXAuaWR9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cC1uYW1lXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJpZ2h0IGdyb3VwLXVucmVhZC1jb3VudCBiYWRnZS1kYW5nZXJcIj57Z3JvdXAudW5yZWFkfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4+e2dyb3VwLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9hPjtcbiAgICAgICAgfSwgdGhpcylcbiAgICAgIH1cbiAgICA8L2Rpdj4pO1xuICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICByZXR1cm4ge1xuICAgIG9uQ2hhbmdlU2VsZWN0ZWRHcm91cDogZ3JvdXAgPT4gZGlzcGF0Y2goY2hhbmdlU2VsZWN0ZWRHcm91cChncm91cCkpLFxuICB9O1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIG1hcERpc3BhdGNoVG9Qcm9wcykoR3JvdXBzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9qcy9jb21wb25lbnRzL2NvbnRhaW5lcnMvZ3JvdXBzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==