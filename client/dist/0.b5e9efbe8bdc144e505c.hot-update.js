webpackHotUpdate(0,{

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _form = __webpack_require__(26);

var _form2 = _interopRequireDefault(_form);

var _api = __webpack_require__(131);

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewGroup = function (_React$Component) {
  _inherits(NewGroup, _React$Component);

  function NewGroup(props) {
    _classCallCheck(this, NewGroup);

    var _this = _possibleConstructorReturn(this, (NewGroup.__proto__ || Object.getPrototypeOf(NewGroup)).call(this, props));

    _this.onCreateGroup = _this.onCreateGroup.bind(_this);
    _this.state = {
      error: ''
    };
    return _this;
  }

  _createClass(NewGroup, [{
    key: 'onCreateGroup',
    value: function onCreateGroup() {
      if (this.name === '') {}
      (0, _api2.default)('name:');
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _form2.default,
        { title: 'Create a new group' },
        _react2.default.createElement(
          'div',
          { className: 'input-field' },
          _react2.default.createElement('input', { type: 'text', id: 'name', ref: function ref(input) {
              _this2.name = input;
            } }),
          _react2.default.createElement(
            'label',
            { htmlFor: 'name' },
            'Name'
          )
        ),
        _react2.default.createElement(
          'a',
          { className: 'waves-effect waves-light btn action-btn',
            href: '#group' },
          'Create'
        ),
        _react2.default.createElement(
          'a',
          { className: 'right waves-effect waves-teal btn-flat action-btn',
            href: '#dashboard' },
          'Cancel'
        )
      );
    }
  }]);

  return NewGroup;
}(_react2.default.Component);

exports.default = NewGroup;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9uZXctZ3JvdXAuanM/YzMzMiJdLCJuYW1lcyI6WyJOZXdHcm91cCIsInByb3BzIiwib25DcmVhdGVHcm91cCIsImJpbmQiLCJzdGF0ZSIsImVycm9yIiwibmFtZSIsImlucHV0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLFE7OztBQUNKLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsb0hBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLGFBQUwsR0FBcUIsTUFBS0EsYUFBTCxDQUFtQkMsSUFBbkIsT0FBckI7QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsYUFBTztBQURJLEtBQWI7QUFIaUI7QUFNbEI7Ozs7b0NBRWU7QUFDZCxVQUFJLEtBQUtDLElBQUwsS0FBYyxFQUFsQixFQUFzQixDQUVyQjtBQUNELHlCQUFJLE9BQUo7QUFDRDs7OzZCQUNPO0FBQUE7O0FBQ04sYUFDRTtBQUFBO0FBQUEsVUFBTSxPQUFNLG9CQUFaO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSxhQUFmO0FBQ0UsbURBQU8sTUFBSyxNQUFaLEVBQW1CLElBQUcsTUFBdEIsRUFBNkIsS0FBTSxhQUFDQyxLQUFELEVBQVc7QUFBRSxxQkFBS0QsSUFBTCxHQUFZQyxLQUFaO0FBQW9CLGFBQXBFLEdBREY7QUFFRTtBQUFBO0FBQUEsY0FBTyxTQUFJLE1BQVg7QUFBQTtBQUFBO0FBRkYsU0FERjtBQUtFO0FBQUE7QUFBQSxZQUFHLFdBQVUseUNBQWI7QUFDQSxrQkFBSyxRQURMO0FBQUE7QUFBQSxTQUxGO0FBT0U7QUFBQTtBQUFBLFlBQUcsV0FBVSxtREFBYjtBQUNBLGtCQUFLLFlBREw7QUFBQTtBQUFBO0FBUEYsT0FERjtBQVlEOzs7O0VBNUJvQixnQkFBTUMsUzs7a0JBZ0NkUixRIiwiZmlsZSI6IjAuYjVlOWVmYmU4YmRjMTQ0ZTUwNWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRm9ybSBmcm9tICcuL2Zvcm0nO1xuaW1wb3J0IGFwaSBmcm9tICcuLi9oZWxwZXJzL2FwaSc7XG5cbmNsYXNzIE5ld0dyb3VwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5vbkNyZWF0ZUdyb3VwID0gdGhpcy5vbkNyZWF0ZUdyb3VwLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGVycm9yOiAnJ1xuICAgIH07XG4gIH1cblxuICBvbkNyZWF0ZUdyb3VwKCkge1xuICAgIGlmICh0aGlzLm5hbWUgPT09ICcnKSB7XG4gICAgICBcbiAgICB9XG4gICAgYXBpKCduYW1lOicpXG4gIH1cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxGb3JtIHRpdGxlPSdDcmVhdGUgYSBuZXcgZ3JvdXAnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtZmllbGQnPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBpZD0nbmFtZScgcmVmPXsgKGlucHV0KSA9PiB7IHRoaXMubmFtZSA9IGlucHV0OyB9IH0vPlxuICAgICAgICAgIDxsYWJlbCBmb3I9J25hbWUnPk5hbWU8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGEgY2xhc3NOYW1lPSd3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHQgYnRuIGFjdGlvbi1idG4nXG4gICAgICAgIGhyZWY9JyNncm91cCc+Q3JlYXRlPC9hPlxuICAgICAgICA8YSBjbGFzc05hbWU9J3JpZ2h0IHdhdmVzLWVmZmVjdCB3YXZlcy10ZWFsIGJ0bi1mbGF0IGFjdGlvbi1idG4nXG4gICAgICAgIGhyZWY9JyNkYXNoYm9hcmQnPkNhbmNlbDwvYT5cbiAgICAgIDwvRm9ybT5cbiAgICApO1xuICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgTmV3R3JvdXA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9uZXctZ3JvdXAuanMiXSwic291cmNlUm9vdCI6IiJ9