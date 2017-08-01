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

        this.props.onChangeSelectedGroup(group);
        console.log(e);
        this.groupSaved = true;
        this.onChangeSelectedGroup(group, e);
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL2dyb3Vwcy5qcz84OGFlIl0sIm5hbWVzIjpbIkdyb3VwcyIsInByb3BzIiwib25DaGFuZ2VTZWxlY3RlZEdyb3VwIiwiYmluZCIsImdyb3VwU2F2ZWQiLCJncm91cCIsImUiLCJjb25zb2xlIiwibG9nIiwiZ3JvdXBzIiwibWFwIiwiaWQiLCJ1bnJlYWQiLCJuYW1lIiwiQ29tcG9uZW50IiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLE07OztBQUNKLGtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsZ0hBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLHFCQUFMLEdBQTZCLE1BQUtBLHFCQUFMLENBQTJCQyxJQUEzQixPQUE3QjtBQUNBLFVBQUtDLFVBQUwsR0FBa0IsS0FBbEI7QUFIaUI7QUFJbEI7Ozs7MENBRXFCQyxLLEVBQU9DLEMsRUFBRztBQUM5QjtBQUNBLFVBQUksQ0FBQyxLQUFLRixVQUFWLEVBQXNCOztBQUVwQixhQUFLSCxLQUFMLENBQVdDLHFCQUFYLENBQWlDRyxLQUFqQztBQUNBRSxnQkFBUUMsR0FBUixDQUFZRixDQUFaO0FBQ0EsYUFBS0YsVUFBTCxHQUFrQixJQUFsQjtBQUNBLGFBQUtGLHFCQUFMLENBQTJCRyxLQUEzQixFQUFrQ0MsQ0FBbEM7QUFDRDtBQUNGOzs7NkJBRVE7QUFBQTs7QUFBQSxVQUNDRyxNQURELEdBQ1ksS0FBS1IsS0FEakIsQ0FDQ1EsTUFERDs7QUFFUEYsY0FBUUMsR0FBUixDQUFZLFVBQVosRUFBd0JDLE1BQXhCO0FBQ0EsYUFDQTtBQUFBO0FBQUE7QUFFSUEsZUFBT0MsR0FBUCxDQUFXLFVBQUNMLEtBQUQsRUFBVztBQUNwQixpQkFBTztBQUFBO0FBQUEsY0FBRyxXQUFVLFlBQWIsRUFBMEIsTUFBSyxRQUEvQjtBQUNQLHVCQUFTO0FBQUEsdUJBQUssT0FBS0gscUJBQUwsQ0FBMkJHLEtBQTNCLEVBQWtDQyxDQUFsQyxDQUFMO0FBQUEsZUFERixFQUM2QyxLQUFLRCxNQUFNTSxFQUR4RDtBQUVMO0FBQUE7QUFBQSxnQkFBSyxXQUFVLFlBQWY7QUFDRTtBQUFBO0FBQUEsa0JBQU0sV0FBVSx1Q0FBaEI7QUFBeUROLHNCQUFNTztBQUEvRCxlQURGO0FBRUU7QUFBQTtBQUFBO0FBQU9QLHNCQUFNUTtBQUFiO0FBRkY7QUFGSyxXQUFQO0FBT0QsU0FSRCxFQVFHLElBUkg7QUFGSixPQURBO0FBY0Q7Ozs7RUFuQ2tCLGdCQUFNQyxTOztBQXNDM0IsSUFBTUMscUJBQXFCLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRCxFQUFjO0FBQ3ZDLFNBQU87QUFDTGQsMkJBQXVCO0FBQUEsYUFBU2MsU0FBUyxtQ0FBb0JYLEtBQXBCLENBQVQsQ0FBVDtBQUFBO0FBRGxCLEdBQVA7QUFHRCxDQUpEOztrQkFPZSx5QkFBUSxJQUFSLEVBQWNVLGtCQUFkLEVBQWtDZixNQUFsQyxDIiwiZmlsZSI6IjAuNDg3MDY0MTNkZWZmYTE5ZGUyN2EuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IGNoYW5nZVNlbGVjdGVkR3JvdXAgZnJvbSAnLi4vLi4vYWN0aW9ucy9jaGFuZ2VTZWxlY3RlZEdyb3VwJztcblxuY2xhc3MgR3JvdXBzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5vbkNoYW5nZVNlbGVjdGVkR3JvdXAgPSB0aGlzLm9uQ2hhbmdlU2VsZWN0ZWRHcm91cC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ3JvdXBTYXZlZCA9IGZhbHNlO1xuICB9XG5cbiAgb25DaGFuZ2VTZWxlY3RlZEdyb3VwKGdyb3VwLCBlKSB7XG4gICAgLy8gc2F2ZSBncm91cCBpZFxuICAgIGlmICghdGhpcy5ncm91cFNhdmVkKSB7XG5cbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2VTZWxlY3RlZEdyb3VwKGdyb3VwKTtcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgdGhpcy5ncm91cFNhdmVkID0gdHJ1ZTtcbiAgICAgIHRoaXMub25DaGFuZ2VTZWxlY3RlZEdyb3VwKGdyb3VwLCBlKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBncm91cHMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc29sZS5sb2coJ0dyb3VwczogJywgZ3JvdXBzKTtcbiAgICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7XG4gICAgICAgIGdyb3Vwcy5tYXAoKGdyb3VwKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIDxhIGNsYXNzTmFtZT1cImdyb3VwLWNhcmRcIiBocmVmPVwiI2dyb3VwXCJcbiAgICAgICAgICBvbkNsaWNrPXtlID0+IHRoaXMub25DaGFuZ2VTZWxlY3RlZEdyb3VwKGdyb3VwLCBlKX0ga2V5PXtncm91cC5pZH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3VwLW5hbWVcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmlnaHQgZ3JvdXAtdW5yZWFkLWNvdW50IGJhZGdlLWRhbmdlclwiPntncm91cC51bnJlYWR9PC9zcGFuPlxuICAgICAgICAgICAgICA8c3Bhbj57Z3JvdXAubmFtZX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2E+O1xuICAgICAgICB9LCB0aGlzKVxuICAgICAgfVxuICAgIDwvZGl2Pik7XG4gIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgb25DaGFuZ2VTZWxlY3RlZEdyb3VwOiBncm91cCA9PiBkaXNwYXRjaChjaGFuZ2VTZWxlY3RlZEdyb3VwKGdyb3VwKSksXG4gIH07XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobnVsbCwgbWFwRGlzcGF0Y2hUb1Byb3BzKShHcm91cHMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2pzL2NvbXBvbmVudHMvY29udGFpbmVycy9ncm91cHMuanMiXSwic291cmNlUm9vdCI6IiJ9