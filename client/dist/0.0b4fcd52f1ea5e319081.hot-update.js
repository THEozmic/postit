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

      console.log('Groups: ', groups);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL2dyb3Vwcy5qcz84OGFlIl0sIm5hbWVzIjpbIkdyb3VwcyIsInByb3BzIiwib25DaGFuZ2VTZWxlY3RlZEdyb3VwIiwiYmluZCIsImdyb3VwIiwiZSIsImdyb3VwcyIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJpZCIsInVucmVhZCIsIm5hbWUiLCJDb21wb25lbnQiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUEsTTs7O0FBQ0osa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxnSEFDWEEsS0FEVzs7QUFFakIsVUFBS0MscUJBQUwsR0FBNkIsTUFBS0EscUJBQUwsQ0FBMkJDLElBQTNCLE9BQTdCO0FBRmlCO0FBR2xCOzs7OzBDQUVxQkMsSyxFQUFPQyxDLEVBQUc7QUFDOUI7QUFDQSxXQUFLSixLQUFMLENBQVdDLHFCQUFYLENBQWlDRSxLQUFqQztBQUNEOzs7NkJBRVE7QUFBQTs7QUFBQSxVQUNDRSxNQURELEdBQ1ksS0FBS0wsS0FEakIsQ0FDQ0ssTUFERDs7QUFFUEMsY0FBUUMsR0FBUixDQUFZLFVBQVosRUFBd0JGLE1BQXhCO0FBQ0EsV0FBS0wsS0FBTCxDQUFXQyxxQkFBWCxDQUFpQ0ksT0FBTyxDQUFQLENBQWpDO0FBQ0FDLGNBQVFDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCRixNQUF4QjtBQUNBLGFBQ0E7QUFBQTtBQUFBO0FBRUlBLGVBQU9HLEdBQVAsQ0FBVyxVQUFDTCxLQUFELEVBQVc7QUFDcEIsaUJBQU87QUFBQTtBQUFBLGNBQUcsV0FBVSxZQUFiLEVBQTBCLGtCQUFnQkEsTUFBTU0sRUFBaEQ7QUFDUCx1QkFBUztBQUFBLHVCQUFLLE9BQUtSLHFCQUFMLENBQTJCRSxLQUEzQixFQUFrQ0MsQ0FBbEMsQ0FBTDtBQUFBLGVBREYsRUFDNkMsS0FBS0QsTUFBTU0sRUFEeEQ7QUFFTDtBQUFBO0FBQUEsZ0JBQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBLGtCQUFNLFdBQVUsdUNBQWhCO0FBQXlETixzQkFBTU87QUFBL0QsZUFERjtBQUVFO0FBQUE7QUFBQTtBQUFPUCxzQkFBTVE7QUFBYjtBQUZGO0FBRkssV0FBUDtBQU9ELFNBUkQsRUFRRyxJQVJIO0FBRkosT0FEQTtBQWNEOzs7O0VBOUJrQixnQkFBTUMsUzs7QUFpQzNCLElBQU1DLHFCQUFxQixTQUFyQkEsa0JBQXFCLENBQUNDLFFBQUQsRUFBYztBQUN2QyxTQUFPO0FBQ0xiLDJCQUF1QjtBQUFBLGFBQVNhLFNBQVMsbUNBQW9CWCxLQUFwQixDQUFULENBQVQ7QUFBQTtBQURsQixHQUFQO0FBR0QsQ0FKRDs7a0JBT2UseUJBQVEsSUFBUixFQUFjVSxrQkFBZCxFQUFrQ2QsTUFBbEMsQyIsImZpbGUiOiIwLjBiNGZjZDUyZjFlYTVlMzE5MDgxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBjaGFuZ2VTZWxlY3RlZEdyb3VwIGZyb20gJy4uLy4uL2FjdGlvbnMvY2hhbmdlU2VsZWN0ZWRHcm91cCc7XG5cbmNsYXNzIEdyb3VwcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMub25DaGFuZ2VTZWxlY3RlZEdyb3VwID0gdGhpcy5vbkNoYW5nZVNlbGVjdGVkR3JvdXAuYmluZCh0aGlzKTtcbiAgfVxuXG4gIG9uQ2hhbmdlU2VsZWN0ZWRHcm91cChncm91cCwgZSkge1xuICAgIC8vIHNhdmUgZ3JvdXAgaWRcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlU2VsZWN0ZWRHcm91cChncm91cCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBncm91cHMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc29sZS5sb2coJ0dyb3VwczogJywgZ3JvdXBzKTtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlU2VsZWN0ZWRHcm91cChncm91cHNbMF0pO1xuICAgIGNvbnNvbGUubG9nKCdHcm91cHM6ICcsIGdyb3Vwcyk7XG4gICAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAge1xuICAgICAgICBncm91cHMubWFwKChncm91cCkgPT4ge1xuICAgICAgICAgIHJldHVybiA8YSBjbGFzc05hbWU9XCJncm91cC1jYXJkXCIgaHJlZj17YCNncm91cC8ke2dyb3VwLmlkfWB9XG4gICAgICAgICAgb25DbGljaz17ZSA9PiB0aGlzLm9uQ2hhbmdlU2VsZWN0ZWRHcm91cChncm91cCwgZSl9IGtleT17Z3JvdXAuaWR9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cC1uYW1lXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJpZ2h0IGdyb3VwLXVucmVhZC1jb3VudCBiYWRnZS1kYW5nZXJcIj57Z3JvdXAudW5yZWFkfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4+e2dyb3VwLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9hPjtcbiAgICAgICAgfSwgdGhpcylcbiAgICAgIH1cbiAgICA8L2Rpdj4pO1xuICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICByZXR1cm4ge1xuICAgIG9uQ2hhbmdlU2VsZWN0ZWRHcm91cDogZ3JvdXAgPT4gZGlzcGF0Y2goY2hhbmdlU2VsZWN0ZWRHcm91cChncm91cCkpLFxuICB9O1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIG1hcERpc3BhdGNoVG9Qcm9wcykoR3JvdXBzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9qcy9jb21wb25lbnRzL2NvbnRhaW5lcnMvZ3JvdXBzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==