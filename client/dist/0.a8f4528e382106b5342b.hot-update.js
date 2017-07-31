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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL2dyb3Vwcy5qcz84OGFlIl0sIm5hbWVzIjpbIkdyb3VwcyIsInByb3BzIiwib25DaGFuZ2VTZWxlY3RlZEdyb3VwIiwiYmluZCIsImdyb3VwU2F2ZWQiLCJncm91cCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJncm91cHMiLCJtYXAiLCJpZCIsInVucmVhZCIsIm5hbWUiLCJDb21wb25lbnQiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUEsTTs7O0FBQ0osa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxnSEFDWEEsS0FEVzs7QUFFakIsVUFBS0MscUJBQUwsR0FBNkIsTUFBS0EscUJBQUwsQ0FBMkJDLElBQTNCLE9BQTdCO0FBQ0EsVUFBS0MsVUFBTCxHQUFrQixLQUFsQjtBQUhpQjtBQUlsQjs7OzswQ0FFcUJDLEssRUFBT0MsQyxFQUFHO0FBQzlCO0FBQ0EsVUFBSSxDQUFDLEtBQUtGLFVBQVYsRUFBc0I7QUFDcEJFLFVBQUVDLGNBQUY7QUFDQSxhQUFLTixLQUFMLENBQVdDLHFCQUFYLENBQWlDRyxLQUFqQztBQUNBRyxnQkFBUUMsR0FBUixDQUFZSCxDQUFaO0FBQ0EsYUFBS0YsVUFBTCxHQUFrQixJQUFsQjtBQUNELE9BTEQsTUFLTyxDQUVOO0FBQ0Y7Ozs2QkFFUTtBQUFBOztBQUFBLFVBQ0NNLE1BREQsR0FDWSxLQUFLVCxLQURqQixDQUNDUyxNQUREOztBQUVQRixjQUFRQyxHQUFSLENBQVksVUFBWixFQUF3QkMsTUFBeEI7QUFDQSxhQUNBO0FBQUE7QUFBQTtBQUVJQSxlQUFPQyxHQUFQLENBQVcsVUFBQ04sS0FBRCxFQUFXO0FBQ3BCLGlCQUFPO0FBQUE7QUFBQSxjQUFHLFdBQVUsWUFBYixFQUEwQixNQUFLLFFBQS9CO0FBQ1AsdUJBQVM7QUFBQSx1QkFBSyxPQUFLSCxxQkFBTCxDQUEyQkcsS0FBM0IsRUFBa0NDLENBQWxDLENBQUw7QUFBQSxlQURGLEVBQzZDLEtBQUtELE1BQU1PLEVBRHhEO0FBRUw7QUFBQTtBQUFBLGdCQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQSxrQkFBTSxXQUFVLHVDQUFoQjtBQUF5RFAsc0JBQU1RO0FBQS9ELGVBREY7QUFFRTtBQUFBO0FBQUE7QUFBT1Isc0JBQU1TO0FBQWI7QUFGRjtBQUZLLFdBQVA7QUFPRCxTQVJELEVBUUcsSUFSSDtBQUZKLE9BREE7QUFjRDs7OztFQXBDa0IsZ0JBQU1DLFM7O0FBdUMzQixJQUFNQyxxQkFBcUIsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFELEVBQWM7QUFDdkMsU0FBTztBQUNMZiwyQkFBdUI7QUFBQSxhQUFTZSxTQUFTLG1DQUFvQlosS0FBcEIsQ0FBVCxDQUFUO0FBQUE7QUFEbEIsR0FBUDtBQUdELENBSkQ7O2tCQU9lLHlCQUFRLElBQVIsRUFBY1csa0JBQWQsRUFBa0NoQixNQUFsQyxDIiwiZmlsZSI6IjAuYThmNDUyOGUzODIxMDZiNTM0MmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IGNoYW5nZVNlbGVjdGVkR3JvdXAgZnJvbSAnLi4vLi4vYWN0aW9ucy9jaGFuZ2VTZWxlY3RlZEdyb3VwJztcblxuY2xhc3MgR3JvdXBzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5vbkNoYW5nZVNlbGVjdGVkR3JvdXAgPSB0aGlzLm9uQ2hhbmdlU2VsZWN0ZWRHcm91cC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ3JvdXBTYXZlZCA9IGZhbHNlO1xuICB9XG5cbiAgb25DaGFuZ2VTZWxlY3RlZEdyb3VwKGdyb3VwLCBlKSB7XG4gICAgLy8gc2F2ZSBncm91cCBpZFxuICAgIGlmICghdGhpcy5ncm91cFNhdmVkKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlU2VsZWN0ZWRHcm91cChncm91cCk7XG4gICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgIHRoaXMuZ3JvdXBTYXZlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIFxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGdyb3VwcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zb2xlLmxvZygnR3JvdXBzOiAnLCBncm91cHMpO1xuICAgIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtcbiAgICAgICAgZ3JvdXBzLm1hcCgoZ3JvdXApID0+IHtcbiAgICAgICAgICByZXR1cm4gPGEgY2xhc3NOYW1lPVwiZ3JvdXAtY2FyZFwiIGhyZWY9XCIjZ3JvdXBcIlxuICAgICAgICAgIG9uQ2xpY2s9e2UgPT4gdGhpcy5vbkNoYW5nZVNlbGVjdGVkR3JvdXAoZ3JvdXAsIGUpfSBrZXk9e2dyb3VwLmlkfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXAtbmFtZVwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyaWdodCBncm91cC11bnJlYWQtY291bnQgYmFkZ2UtZGFuZ2VyXCI+e2dyb3VwLnVucmVhZH08L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuPntncm91cC5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvYT47XG4gICAgICAgIH0sIHRoaXMpXG4gICAgICB9XG4gICAgPC9kaXY+KTtcbiAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBvbkNoYW5nZVNlbGVjdGVkR3JvdXA6IGdyb3VwID0+IGRpc3BhdGNoKGNoYW5nZVNlbGVjdGVkR3JvdXAoZ3JvdXApKSxcbiAgfTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEdyb3Vwcyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL2dyb3Vwcy5qcyJdLCJzb3VyY2VSb290IjoiIn0=