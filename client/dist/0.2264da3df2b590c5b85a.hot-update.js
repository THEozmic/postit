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
    _this.groupSaved = false;
    return _this;
  }

  _createClass(Groups, [{
    key: 'onChangeSelectedGroup',
    value: function onChangeSelectedGroup(group, e) {
      // save group id
      if (!this.groupSaved) {
        e.preventDefault();
        this.props.onChangeSelectedGroup(group);
        console.log(e);
        this.groupSaved = true;
        this.onChangeSelectedGroup(group, e);
      } else {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL2dyb3Vwcy5qcz84OGFlIl0sIm5hbWVzIjpbIkdyb3VwcyIsInByb3BzIiwib25DaGFuZ2VTZWxlY3RlZEdyb3VwIiwiYmluZCIsImdyb3VwU2F2ZWQiLCJncm91cCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJncm91cHMiLCJtYXAiLCJpZCIsInVucmVhZCIsIm5hbWUiLCJDb21wb25lbnQiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUEsTTs7O0FBQ0osa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxnSEFDWEEsS0FEVzs7QUFFakIsVUFBS0MscUJBQUwsR0FBNkIsTUFBS0EscUJBQUwsQ0FBMkJDLElBQTNCLE9BQTdCO0FBQ0EsVUFBS0MsVUFBTCxHQUFrQixLQUFsQjtBQUhpQjtBQUlsQjs7OzswQ0FFcUJDLEssRUFBT0MsQyxFQUFHO0FBQzlCO0FBQ0EsVUFBSSxDQUFDLEtBQUtGLFVBQVYsRUFBc0I7QUFDcEJFLFVBQUVDLGNBQUY7QUFDQSxhQUFLTixLQUFMLENBQVdDLHFCQUFYLENBQWlDRyxLQUFqQztBQUNBRyxnQkFBUUMsR0FBUixDQUFZSCxDQUFaO0FBQ0EsYUFBS0YsVUFBTCxHQUFrQixJQUFsQjtBQUNBLGFBQUtGLHFCQUFMLENBQTJCRyxLQUEzQixFQUFrQ0MsQ0FBbEM7QUFDRCxPQU5ELE1BTU8sQ0FFTjtBQUNGOzs7NkJBRVE7QUFBQTs7QUFBQSxVQUNDSSxNQURELEdBQ1ksS0FBS1QsS0FEakIsQ0FDQ1MsTUFERDs7QUFFUEYsY0FBUUMsR0FBUixDQUFZLFVBQVosRUFBd0JDLE1BQXhCO0FBQ0EsYUFDQTtBQUFBO0FBQUE7QUFFSUEsZUFBT0MsR0FBUCxDQUFXLFVBQUNOLEtBQUQsRUFBVztBQUNwQixpQkFBTztBQUFBO0FBQUEsY0FBRyxXQUFVLFlBQWIsRUFBMEIsTUFBSyxRQUEvQjtBQUNQLHVCQUFTO0FBQUEsdUJBQUssT0FBS0gscUJBQUwsQ0FBMkJHLEtBQTNCLEVBQWtDQyxDQUFsQyxDQUFMO0FBQUEsZUFERixFQUM2QyxLQUFLRCxNQUFNTyxFQUR4RDtBQUVMO0FBQUE7QUFBQSxnQkFBSyxXQUFVLFlBQWY7QUFDRTtBQUFBO0FBQUEsa0JBQU0sV0FBVSx1Q0FBaEI7QUFBeURQLHNCQUFNUTtBQUEvRCxlQURGO0FBRUU7QUFBQTtBQUFBO0FBQU9SLHNCQUFNUztBQUFiO0FBRkY7QUFGSyxXQUFQO0FBT0QsU0FSRCxFQVFHLElBUkg7QUFGSixPQURBO0FBY0Q7Ozs7RUFyQ2tCLGdCQUFNQyxTOztBQXdDM0IsSUFBTUMscUJBQXFCLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRCxFQUFjO0FBQ3ZDLFNBQU87QUFDTGYsMkJBQXVCO0FBQUEsYUFBU2UsU0FBUyxtQ0FBb0JaLEtBQXBCLENBQVQsQ0FBVDtBQUFBO0FBRGxCLEdBQVA7QUFHRCxDQUpEOztrQkFPZSx5QkFBUSxJQUFSLEVBQWNXLGtCQUFkLEVBQWtDaEIsTUFBbEMsQyIsImZpbGUiOiIwLjIyNjRkYTNkZjJiNTkwYzViODVhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBjaGFuZ2VTZWxlY3RlZEdyb3VwIGZyb20gJy4uLy4uL2FjdGlvbnMvY2hhbmdlU2VsZWN0ZWRHcm91cCc7XG5cbmNsYXNzIEdyb3VwcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMub25DaGFuZ2VTZWxlY3RlZEdyb3VwID0gdGhpcy5vbkNoYW5nZVNlbGVjdGVkR3JvdXAuYmluZCh0aGlzKTtcbiAgICB0aGlzLmdyb3VwU2F2ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIG9uQ2hhbmdlU2VsZWN0ZWRHcm91cChncm91cCwgZSkge1xuICAgIC8vIHNhdmUgZ3JvdXAgaWRcbiAgICBpZiAoIXRoaXMuZ3JvdXBTYXZlZCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZVNlbGVjdGVkR3JvdXAoZ3JvdXApO1xuICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICB0aGlzLmdyb3VwU2F2ZWQgPSB0cnVlO1xuICAgICAgdGhpcy5vbkNoYW5nZVNlbGVjdGVkR3JvdXAoZ3JvdXAsIGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBncm91cHMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc29sZS5sb2coJ0dyb3VwczogJywgZ3JvdXBzKTtcbiAgICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7XG4gICAgICAgIGdyb3Vwcy5tYXAoKGdyb3VwKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIDxhIGNsYXNzTmFtZT1cImdyb3VwLWNhcmRcIiBocmVmPVwiI2dyb3VwXCJcbiAgICAgICAgICBvbkNsaWNrPXtlID0+IHRoaXMub25DaGFuZ2VTZWxlY3RlZEdyb3VwKGdyb3VwLCBlKX0ga2V5PXtncm91cC5pZH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3VwLW5hbWVcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmlnaHQgZ3JvdXAtdW5yZWFkLWNvdW50IGJhZGdlLWRhbmdlclwiPntncm91cC51bnJlYWR9PC9zcGFuPlxuICAgICAgICAgICAgICA8c3Bhbj57Z3JvdXAubmFtZX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2E+O1xuICAgICAgICB9LCB0aGlzKVxuICAgICAgfVxuICAgIDwvZGl2Pik7XG4gIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgb25DaGFuZ2VTZWxlY3RlZEdyb3VwOiBncm91cCA9PiBkaXNwYXRjaChjaGFuZ2VTZWxlY3RlZEdyb3VwKGdyb3VwKSksXG4gIH07XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobnVsbCwgbWFwRGlzcGF0Y2hUb1Byb3BzKShHcm91cHMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2pzL2NvbXBvbmVudHMvY29udGFpbmVycy9ncm91cHMuanMiXSwic291cmNlUm9vdCI6IiJ9