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
      this.props.onChangeSelectedGroup(group);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var groups = this.props.groups;

      this.props.onChangeSelectedGroup(groups[0]);
      console.log('Groups: ', groups);
      return _react2.default.createElement(
        'div',
        null,
        groups.map(function (group) {
          return _react2.default.createElement(
            'a',
            { className: 'group-card', href: '#group/' + group.id,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL2dyb3Vwcy5qcz84OGFlIl0sIm5hbWVzIjpbIkdyb3VwcyIsInByb3BzIiwib25DaGFuZ2VTZWxlY3RlZEdyb3VwIiwiYmluZCIsImdyb3VwIiwiZSIsImdyb3VwcyIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJpZCIsInVucmVhZCIsIm5hbWUiLCJDb21wb25lbnQiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUEsTTs7O0FBQ0osa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxnSEFDWEEsS0FEVzs7QUFFakIsVUFBS0MscUJBQUwsR0FBNkIsTUFBS0EscUJBQUwsQ0FBMkJDLElBQTNCLE9BQTdCO0FBRmlCO0FBR2xCOzs7OzBDQUVxQkMsSyxFQUFPQyxDLEVBQUc7QUFDOUI7QUFDQSxXQUFLSixLQUFMLENBQVdDLHFCQUFYLENBQWlDRSxLQUFqQztBQUNEOzs7NkJBRVE7QUFBQTs7QUFBQSxVQUNDRSxNQURELEdBQ1ksS0FBS0wsS0FEakIsQ0FDQ0ssTUFERDs7QUFFUCxXQUFLTCxLQUFMLENBQVdDLHFCQUFYLENBQWlDSSxPQUFPLENBQVAsQ0FBakM7QUFDQUMsY0FBUUMsR0FBUixDQUFZLFVBQVosRUFBd0JGLE1BQXhCO0FBQ0EsYUFDQTtBQUFBO0FBQUE7QUFFSUEsZUFBT0csR0FBUCxDQUFXLFVBQUNMLEtBQUQsRUFBVztBQUNwQixpQkFBTztBQUFBO0FBQUEsY0FBRyxXQUFVLFlBQWIsRUFBMEIsa0JBQWdCQSxNQUFNTSxFQUFoRDtBQUNQLHVCQUFTO0FBQUEsdUJBQUssT0FBS1IscUJBQUwsQ0FBMkJFLEtBQTNCLEVBQWtDQyxDQUFsQyxDQUFMO0FBQUEsZUFERixFQUM2QyxLQUFLRCxNQUFNTSxFQUR4RDtBQUVMO0FBQUE7QUFBQSxnQkFBSyxXQUFVLFlBQWY7QUFDRTtBQUFBO0FBQUEsa0JBQU0sV0FBVSx1Q0FBaEI7QUFBeUROLHNCQUFNTztBQUEvRCxlQURGO0FBRUU7QUFBQTtBQUFBO0FBQU9QLHNCQUFNUTtBQUFiO0FBRkY7QUFGSyxXQUFQO0FBT0QsU0FSRCxFQVFHLElBUkg7QUFGSixPQURBO0FBY0Q7Ozs7RUE3QmtCLGdCQUFNQyxTOztBQWdDM0IsSUFBTUMscUJBQXFCLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRCxFQUFjO0FBQ3ZDLFNBQU87QUFDTGIsMkJBQXVCO0FBQUEsYUFBU2EsU0FBUyxtQ0FBb0JYLEtBQXBCLENBQVQsQ0FBVDtBQUFBO0FBRGxCLEdBQVA7QUFHRCxDQUpEOztrQkFPZSx5QkFBUSxJQUFSLEVBQWNVLGtCQUFkLEVBQWtDZCxNQUFsQyxDIiwiZmlsZSI6IjAuMTYwNWRmZTg4ZTMwYTY5ZjQyMzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IGNoYW5nZVNlbGVjdGVkR3JvdXAgZnJvbSAnLi4vLi4vYWN0aW9ucy9jaGFuZ2VTZWxlY3RlZEdyb3VwJztcblxuY2xhc3MgR3JvdXBzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5vbkNoYW5nZVNlbGVjdGVkR3JvdXAgPSB0aGlzLm9uQ2hhbmdlU2VsZWN0ZWRHcm91cC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgb25DaGFuZ2VTZWxlY3RlZEdyb3VwKGdyb3VwLCBlKSB7XG4gICAgLy8gc2F2ZSBncm91cCBpZFxuICAgIHRoaXMucHJvcHMub25DaGFuZ2VTZWxlY3RlZEdyb3VwKGdyb3VwKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGdyb3VwcyB9ID0gdGhpcy5wcm9wcztcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlU2VsZWN0ZWRHcm91cChncm91cHNbMF0pO1xuICAgIGNvbnNvbGUubG9nKCdHcm91cHM6ICcsIGdyb3Vwcyk7XG4gICAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAge1xuICAgICAgICBncm91cHMubWFwKChncm91cCkgPT4ge1xuICAgICAgICAgIHJldHVybiA8YSBjbGFzc05hbWU9XCJncm91cC1jYXJkXCIgaHJlZj17YCNncm91cC8ke2dyb3VwLmlkfWB9XG4gICAgICAgICAgb25DbGljaz17ZSA9PiB0aGlzLm9uQ2hhbmdlU2VsZWN0ZWRHcm91cChncm91cCwgZSl9IGtleT17Z3JvdXAuaWR9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cC1uYW1lXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJpZ2h0IGdyb3VwLXVucmVhZC1jb3VudCBiYWRnZS1kYW5nZXJcIj57Z3JvdXAudW5yZWFkfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4+e2dyb3VwLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9hPjtcbiAgICAgICAgfSwgdGhpcylcbiAgICAgIH1cbiAgICA8L2Rpdj4pO1xuICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICByZXR1cm4ge1xuICAgIG9uQ2hhbmdlU2VsZWN0ZWRHcm91cDogZ3JvdXAgPT4gZGlzcGF0Y2goY2hhbmdlU2VsZWN0ZWRHcm91cChncm91cCkpLFxuICB9O1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIG1hcERpc3BhdGNoVG9Qcm9wcykoR3JvdXBzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9qcy9jb21wb25lbnRzL2NvbnRhaW5lcnMvZ3JvdXBzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==