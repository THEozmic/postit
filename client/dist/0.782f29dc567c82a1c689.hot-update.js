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
      e = e.originalEvent;
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
                return _this2.onChangeSelectedGroup(group);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL2dyb3Vwcy5qcz84OGFlIl0sIm5hbWVzIjpbIkdyb3VwcyIsInByb3BzIiwib25DaGFuZ2VTZWxlY3RlZEdyb3VwIiwiYmluZCIsImdyb3VwIiwiZSIsInByZXZlbnREZWZhdWx0Iiwib3JpZ2luYWxFdmVudCIsImdyb3VwcyIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJpZCIsInVucmVhZCIsIm5hbWUiLCJDb21wb25lbnQiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUEsTTs7O0FBQ0osa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxnSEFDWEEsS0FEVzs7QUFFakIsVUFBS0MscUJBQUwsR0FBNkIsTUFBS0EscUJBQUwsQ0FBMkJDLElBQTNCLE9BQTdCO0FBRmlCO0FBR2xCOzs7OzBDQUVxQkMsSyxFQUFPQyxDLEVBQUc7QUFDOUI7QUFDQUEsUUFBRUMsY0FBRjtBQUNBLFdBQUtMLEtBQUwsQ0FBV0MscUJBQVgsQ0FBaUNFLEtBQWpDO0FBQ0FDLFVBQUlBLEVBQUVFLGFBQU47QUFDRDs7OzZCQUVRO0FBQUE7O0FBQUEsVUFDQ0MsTUFERCxHQUNZLEtBQUtQLEtBRGpCLENBQ0NPLE1BREQ7O0FBRVBDLGNBQVFDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCRixNQUF4QjtBQUNBLGFBQ0E7QUFBQTtBQUFBO0FBRUlBLGVBQU9HLEdBQVAsQ0FBVyxVQUFDUCxLQUFELEVBQVc7QUFDcEIsaUJBQU87QUFBQTtBQUFBLGNBQUcsV0FBVSxZQUFiLEVBQTBCLE1BQUssUUFBL0I7QUFDUCx1QkFBUyxpQkFBQ0MsQ0FBRDtBQUFBLHVCQUFPLE9BQUtILHFCQUFMLENBQTJCRSxLQUEzQixDQUFQO0FBQUEsZUFERixFQUM0QyxLQUFLQSxNQUFNUSxFQUR2RDtBQUVMO0FBQUE7QUFBQSxnQkFBSyxXQUFVLFlBQWY7QUFDRTtBQUFBO0FBQUEsa0JBQU0sV0FBVSx1Q0FBaEI7QUFBeURSLHNCQUFNUztBQUEvRCxlQURGO0FBRUU7QUFBQTtBQUFBO0FBQU9ULHNCQUFNVTtBQUFiO0FBRkY7QUFGSyxXQUFQO0FBT0QsU0FSRCxFQVFHLElBUkg7QUFGSixPQURBO0FBY0Q7Ozs7RUE5QmtCLGdCQUFNQyxTOztBQWlDM0IsSUFBTUMscUJBQXFCLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRCxFQUFjO0FBQ3ZDLFNBQU87QUFDTGYsMkJBQXVCO0FBQUEsYUFBU2UsU0FBUyxtQ0FBb0JiLEtBQXBCLENBQVQsQ0FBVDtBQUFBO0FBRGxCLEdBQVA7QUFHRCxDQUpEOztrQkFPZSx5QkFBUSxJQUFSLEVBQWNZLGtCQUFkLEVBQWtDaEIsTUFBbEMsQyIsImZpbGUiOiIwLjc4MmYyOWRjNTY3YzgyYTFjNjg5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBjaGFuZ2VTZWxlY3RlZEdyb3VwIGZyb20gJy4uLy4uL2FjdGlvbnMvY2hhbmdlU2VsZWN0ZWRHcm91cCc7XG5cbmNsYXNzIEdyb3VwcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMub25DaGFuZ2VTZWxlY3RlZEdyb3VwID0gdGhpcy5vbkNoYW5nZVNlbGVjdGVkR3JvdXAuYmluZCh0aGlzKTtcbiAgfVxuXG4gIG9uQ2hhbmdlU2VsZWN0ZWRHcm91cChncm91cCwgZSkge1xuICAgIC8vIHNhdmUgZ3JvdXAgaWRcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZVNlbGVjdGVkR3JvdXAoZ3JvdXApO1xuICAgIGUgPSBlLm9yaWdpbmFsRXZlbnQ7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBncm91cHMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc29sZS5sb2coJ0dyb3VwczogJywgZ3JvdXBzKTtcbiAgICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7XG4gICAgICAgIGdyb3Vwcy5tYXAoKGdyb3VwKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIDxhIGNsYXNzTmFtZT1cImdyb3VwLWNhcmRcIiBocmVmPVwiI2dyb3VwXCJcbiAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gdGhpcy5vbkNoYW5nZVNlbGVjdGVkR3JvdXAoZ3JvdXApfSBrZXk9e2dyb3VwLmlkfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXAtbmFtZVwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyaWdodCBncm91cC11bnJlYWQtY291bnQgYmFkZ2UtZGFuZ2VyXCI+e2dyb3VwLnVucmVhZH08L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuPntncm91cC5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvYT47XG4gICAgICAgIH0sIHRoaXMpXG4gICAgICB9XG4gICAgPC9kaXY+KTtcbiAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBvbkNoYW5nZVNlbGVjdGVkR3JvdXA6IGdyb3VwID0+IGRpc3BhdGNoKGNoYW5nZVNlbGVjdGVkR3JvdXAoZ3JvdXApKSxcbiAgfTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEdyb3Vwcyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL2dyb3Vwcy5qcyJdLCJzb3VyY2VSb290IjoiIn0=