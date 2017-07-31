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
    key: "onSelectGroup",
    value: function onSelectGroup(e, id) {
      e.preventDefault();
      this.props.onSelectGroup(id);
      e = e.originalEvent;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var groups = this.props.groups;

      return _react2.default.createElement(
        "div",
        null,
        groups.map(function (group) {
          return _react2.default.createElement(
            "a",
            { className: "group-card", href: "#group",
              onClick: function onClick() {
                return _this2.onSelectGroup(group.id);
              }, key: group.id },
            _react2.default.createElement(
              "div",
              { className: "group-name" },
              _react2.default.createElement(
                "span",
                { className: "right group-unread-count badge-danger" },
                group.unread
              ),
              _react2.default.createElement(
                "span",
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
      return dispatch(select(group));
    },
    loadMessages: function (_loadMessages) {
      function loadMessages(_x) {
        return _loadMessages.apply(this, arguments);
      }

      loadMessages.toString = function () {
        return _loadMessages.toString();
      };

      return loadMessages;
    }(function (allMessages) {
      return dispatch(loadMessages(allMessages));
    })
  };
};

exports.default = connect(null, mapDispatchToProps)(Groups);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL2dyb3Vwcy5qcz84OGFlIl0sIm5hbWVzIjpbIkdyb3VwcyIsInByb3BzIiwib25TZWxlY3RHcm91cCIsImJpbmQiLCJlIiwiaWQiLCJwcmV2ZW50RGVmYXVsdCIsIm9yaWdpbmFsRXZlbnQiLCJncm91cHMiLCJtYXAiLCJncm91cCIsInVucmVhZCIsIm5hbWUiLCJDb21wb25lbnQiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsInNlbGVjdCIsImxvYWRNZXNzYWdlcyIsImFsbE1lc3NhZ2VzIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRU1BLE07OztBQUNKLGtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsZ0hBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLGFBQUwsR0FBcUIsTUFBS0EsYUFBTCxDQUFtQkMsSUFBbkIsT0FBckI7QUFGaUI7QUFHbEI7Ozs7a0NBRWFDLEMsRUFBR0MsRSxFQUFJO0FBQ25CRCxRQUFFRSxjQUFGO0FBQ0EsV0FBS0wsS0FBTCxDQUFXQyxhQUFYLENBQXlCRyxFQUF6QjtBQUNBRCxVQUFJQSxFQUFFRyxhQUFOO0FBQ0Q7Ozs2QkFFUTtBQUFBOztBQUFBLFVBQ0NDLE1BREQsR0FDWSxLQUFLUCxLQURqQixDQUNDTyxNQUREOztBQUVQLGFBQ0E7QUFBQTtBQUFBO0FBRUlBLGVBQU9DLEdBQVAsQ0FBVyxVQUFDQyxLQUFELEVBQVc7QUFDcEIsaUJBQU87QUFBQTtBQUFBLGNBQUcsV0FBVSxZQUFiLEVBQTBCLE1BQUssUUFBL0I7QUFDUCx1QkFBUztBQUFBLHVCQUFNLE9BQUtSLGFBQUwsQ0FBbUJRLE1BQU1MLEVBQXpCLENBQU47QUFBQSxlQURGLEVBQ3NDLEtBQUtLLE1BQU1MLEVBRGpEO0FBRUw7QUFBQTtBQUFBLGdCQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQSxrQkFBTSxXQUFVLHVDQUFoQjtBQUF5REssc0JBQU1DO0FBQS9ELGVBREY7QUFFRTtBQUFBO0FBQUE7QUFBT0Qsc0JBQU1FO0FBQWI7QUFGRjtBQUZLLFdBQVA7QUFPRCxTQVJELEVBUUcsSUFSSDtBQUZKLE9BREE7QUFjRDs7OztFQTVCa0IsZ0JBQU1DLFM7O0FBK0IzQixJQUFNQyxxQkFBcUIsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFELEVBQWM7QUFDdkMsU0FBTztBQUNMYixtQkFBZTtBQUFBLGFBQU1hLFNBQVNDLE9BQU9OLEtBQVAsQ0FBVCxDQUFOO0FBQUEsS0FEVjtBQUVMTztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxNQUFjO0FBQUEsYUFBZUYsU0FBU0UsYUFBYUMsV0FBYixDQUFULENBQWY7QUFBQSxLQUFkO0FBRkssR0FBUDtBQUlELENBTEQ7O2tCQVFlQyxRQUFRLElBQVIsRUFBY0wsa0JBQWQsRUFBa0NkLE1BQWxDLEMiLCJmaWxlIjoiMC5jYjk0YTg2OWY3MDY2NDA4YjBmNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgR3JvdXBzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5vblNlbGVjdEdyb3VwID0gdGhpcy5vblNlbGVjdEdyb3VwLmJpbmQodGhpcyk7XG4gIH1cblxuICBvblNlbGVjdEdyb3VwKGUsIGlkKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucHJvcHMub25TZWxlY3RHcm91cChpZCk7XG4gICAgZSA9IGUub3JpZ2luYWxFdmVudDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGdyb3VwcyB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7XG4gICAgICAgIGdyb3Vwcy5tYXAoKGdyb3VwKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIDxhIGNsYXNzTmFtZT1cImdyb3VwLWNhcmRcIiBocmVmPVwiI2dyb3VwXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLm9uU2VsZWN0R3JvdXAoZ3JvdXAuaWQpfSBrZXk9e2dyb3VwLmlkfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXAtbmFtZVwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyaWdodCBncm91cC11bnJlYWQtY291bnQgYmFkZ2UtZGFuZ2VyXCI+e2dyb3VwLnVucmVhZH08L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuPntncm91cC5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvYT47XG4gICAgICAgIH0sIHRoaXMpXG4gICAgICB9XG4gICAgPC9kaXY+KTtcbiAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBvblNlbGVjdEdyb3VwOiBpZCA9PiBkaXNwYXRjaChzZWxlY3QoZ3JvdXApKSxcbiAgICBsb2FkTWVzc2FnZXM6IGFsbE1lc3NhZ2VzID0+IGRpc3BhdGNoKGxvYWRNZXNzYWdlcyhhbGxNZXNzYWdlcykpXG4gIH07XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobnVsbCwgbWFwRGlzcGF0Y2hUb1Byb3BzKShHcm91cHMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2pzL2NvbXBvbmVudHMvY29udGFpbmVycy9ncm91cHMuanMiXSwic291cmNlUm9vdCI6IiJ9