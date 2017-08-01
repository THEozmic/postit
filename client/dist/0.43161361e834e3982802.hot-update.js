webpackHotUpdate(0,{

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(18);

var _api = __webpack_require__(131);

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Groups = function (_React$Component) {
  _inherits(Groups, _React$Component);

  function Groups(props) {
    _classCallCheck(this, Groups);

    var _this = _possibleConstructorReturn(this, (Groups.__proto__ || Object.getPrototypeOf(Groups)).call(this, props));

    _this.onSelectGroup = _this.onSelectGroup.bind(_this);
    return _this;
  }

  _createClass(Groups, [{
    key: 'onSelectGroup',
    value: function onSelectGroup(e, id) {
      e.preventDefault();
      this.props.onSelectGroup(id);
      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      headers.append('x-access-token', sessionStorage.getItem('user').token);
      (0, _api2.default)(null, '/api/group/' + id + '/messages', 'GET', headers);
      e = e.originalEvent;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var groups = this.props.groups;

      return _react2.default.createElement(
        'div',
        null,
        groups.map(function (group) {
          return _react2.default.createElement(
            'a',
            { className: 'group-card', href: '#group',
              onClick: function onClick() {
                return _this2.onSelectGroup(group.id);
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
    onSelectGroup: function onSelectGroup(id) {
      return dispatch(selectGroup(id));
    }
  };
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(Groups);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL2dyb3Vwcy5qcz84OGFlIl0sIm5hbWVzIjpbIkdyb3VwcyIsInByb3BzIiwib25TZWxlY3RHcm91cCIsImJpbmQiLCJlIiwiaWQiLCJwcmV2ZW50RGVmYXVsdCIsImhlYWRlcnMiLCJIZWFkZXJzIiwiYXBwZW5kIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwidG9rZW4iLCJvcmlnaW5hbEV2ZW50IiwiZ3JvdXBzIiwibWFwIiwiZ3JvdXAiLCJ1bnJlYWQiLCJuYW1lIiwiQ29tcG9uZW50IiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJzZWxlY3RHcm91cCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUEsTTs7O0FBQ0osa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxnSEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsYUFBTCxHQUFxQixNQUFLQSxhQUFMLENBQW1CQyxJQUFuQixPQUFyQjtBQUZpQjtBQUdsQjs7OztrQ0FFYUMsQyxFQUFHQyxFLEVBQUk7QUFDbkJELFFBQUVFLGNBQUY7QUFDQSxXQUFLTCxLQUFMLENBQVdDLGFBQVgsQ0FBeUJHLEVBQXpCO0FBQ0EsVUFBTUUsVUFBVSxJQUFJQyxPQUFKLEVBQWhCO0FBQ0FELGNBQVFFLE1BQVIsQ0FBZSxjQUFmLEVBQStCLG1DQUEvQjtBQUNBRixjQUFRRSxNQUFSLENBQWUsZ0JBQWYsRUFBaUNDLGVBQWVDLE9BQWYsQ0FBdUIsTUFBdkIsRUFBK0JDLEtBQWhFO0FBQ0EseUJBQUksSUFBSixrQkFBd0JQLEVBQXhCLGdCQUF1QyxLQUF2QyxFQUE4Q0UsT0FBOUM7QUFDQUgsVUFBSUEsRUFBRVMsYUFBTjtBQUNEOzs7NkJBRVE7QUFBQTs7QUFBQSxVQUNDQyxNQURELEdBQ1ksS0FBS2IsS0FEakIsQ0FDQ2EsTUFERDs7QUFFUCxhQUNBO0FBQUE7QUFBQTtBQUVJQSxlQUFPQyxHQUFQLENBQVcsVUFBQ0MsS0FBRCxFQUFXO0FBQ3BCLGlCQUFPO0FBQUE7QUFBQSxjQUFHLFdBQVUsWUFBYixFQUEwQixNQUFLLFFBQS9CO0FBQ1AsdUJBQVM7QUFBQSx1QkFBTSxPQUFLZCxhQUFMLENBQW1CYyxNQUFNWCxFQUF6QixDQUFOO0FBQUEsZUFERixFQUNzQyxLQUFLVyxNQUFNWCxFQURqRDtBQUVMO0FBQUE7QUFBQSxnQkFBSyxXQUFVLFlBQWY7QUFDRTtBQUFBO0FBQUEsa0JBQU0sV0FBVSx1Q0FBaEI7QUFBeURXLHNCQUFNQztBQUEvRCxlQURGO0FBRUU7QUFBQTtBQUFBO0FBQU9ELHNCQUFNRTtBQUFiO0FBRkY7QUFGSyxXQUFQO0FBT0QsU0FSRCxFQVFHLElBUkg7QUFGSixPQURBO0FBY0Q7Ozs7RUFoQ2tCLGdCQUFNQyxTOztBQW1DM0IsSUFBTUMscUJBQXFCLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRCxFQUFjO0FBQ3ZDLFNBQU87QUFDTG5CLG1CQUFlO0FBQUEsYUFBTW1CLFNBQVNDLFlBQVlqQixFQUFaLENBQVQsQ0FBTjtBQUFBO0FBRFYsR0FBUDtBQUdELENBSkQ7O2tCQU9lLHlCQUFRLElBQVIsRUFBY2Usa0JBQWQsRUFBa0NwQixNQUFsQyxDIiwiZmlsZSI6IjAuNDMxNjEzNjFlODM0ZTM5ODI4MDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IGFwaSBmcm9tICcuLi9oZWxwZXJzL2FwaSc7XG5cbmNsYXNzIEdyb3VwcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMub25TZWxlY3RHcm91cCA9IHRoaXMub25TZWxlY3RHcm91cC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgb25TZWxlY3RHcm91cChlLCBpZCkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnByb3BzLm9uU2VsZWN0R3JvdXAoaWQpO1xuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XG4gICAgaGVhZGVycy5hcHBlbmQoJ3gtYWNjZXNzLXRva2VuJywgc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpLnRva2VuKTtcbiAgICBhcGkobnVsbCwgYC9hcGkvZ3JvdXAvJHtpZH0vbWVzc2FnZXNgLCAnR0VUJywgaGVhZGVycyk7XG4gICAgZSA9IGUub3JpZ2luYWxFdmVudDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGdyb3VwcyB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7XG4gICAgICAgIGdyb3Vwcy5tYXAoKGdyb3VwKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIDxhIGNsYXNzTmFtZT1cImdyb3VwLWNhcmRcIiBocmVmPVwiI2dyb3VwXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLm9uU2VsZWN0R3JvdXAoZ3JvdXAuaWQpfSBrZXk9e2dyb3VwLmlkfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXAtbmFtZVwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyaWdodCBncm91cC11bnJlYWQtY291bnQgYmFkZ2UtZGFuZ2VyXCI+e2dyb3VwLnVucmVhZH08L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuPntncm91cC5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvYT47XG4gICAgICAgIH0sIHRoaXMpXG4gICAgICB9XG4gICAgPC9kaXY+KTtcbiAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBvblNlbGVjdEdyb3VwOiBpZCA9PiBkaXNwYXRjaChzZWxlY3RHcm91cChpZCkpLFxuICB9O1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIG1hcERpc3BhdGNoVG9Qcm9wcykoR3JvdXBzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9qcy9jb21wb25lbnRzL2NvbnRhaW5lcnMvZ3JvdXBzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==