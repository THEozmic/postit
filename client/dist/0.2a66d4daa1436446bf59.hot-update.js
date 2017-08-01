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

var _changeSelectedGroup = __webpack_require__(122);

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

    _this.onSelectGroup = _this.onSelectGroup.bind(_this);
    return _this;
  }

  _createClass(Groups, [{
    key: 'onSelectGroup',
    value: function onSelectGroup(e, id) {
      // save group id
      e.preventDefault();
      this.props.onSelectGroup(id);
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
      return dispatch((0, _changeSelectedGroup2.default)(id));
    }
  };
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(Groups);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL2dyb3Vwcy5qcz84OGFlIl0sIm5hbWVzIjpbIkdyb3VwcyIsInByb3BzIiwib25TZWxlY3RHcm91cCIsImJpbmQiLCJlIiwiaWQiLCJwcmV2ZW50RGVmYXVsdCIsIm9yaWdpbmFsRXZlbnQiLCJncm91cHMiLCJtYXAiLCJncm91cCIsInVucmVhZCIsIm5hbWUiLCJDb21wb25lbnQiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUEsTTs7O0FBQ0osa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxnSEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsYUFBTCxHQUFxQixNQUFLQSxhQUFMLENBQW1CQyxJQUFuQixPQUFyQjtBQUZpQjtBQUdsQjs7OztrQ0FFYUMsQyxFQUFHQyxFLEVBQUk7QUFDbkI7QUFDQUQsUUFBRUUsY0FBRjtBQUNBLFdBQUtMLEtBQUwsQ0FBV0MsYUFBWCxDQUF5QkcsRUFBekI7QUFDQUQsVUFBSUEsRUFBRUcsYUFBTjtBQUNEOzs7NkJBRVE7QUFBQTs7QUFBQSxVQUNDQyxNQURELEdBQ1ksS0FBS1AsS0FEakIsQ0FDQ08sTUFERDs7QUFFUCxhQUNBO0FBQUE7QUFBQTtBQUVJQSxlQUFPQyxHQUFQLENBQVcsVUFBQ0MsS0FBRCxFQUFXO0FBQ3BCLGlCQUFPO0FBQUE7QUFBQSxjQUFHLFdBQVUsWUFBYixFQUEwQixNQUFLLFFBQS9CO0FBQ1AsdUJBQVM7QUFBQSx1QkFBTSxPQUFLUixhQUFMLENBQW1CUSxNQUFNTCxFQUF6QixDQUFOO0FBQUEsZUFERixFQUNzQyxLQUFLSyxNQUFNTCxFQURqRDtBQUVMO0FBQUE7QUFBQSxnQkFBSyxXQUFVLFlBQWY7QUFDRTtBQUFBO0FBQUEsa0JBQU0sV0FBVSx1Q0FBaEI7QUFBeURLLHNCQUFNQztBQUEvRCxlQURGO0FBRUU7QUFBQTtBQUFBO0FBQU9ELHNCQUFNRTtBQUFiO0FBRkY7QUFGSyxXQUFQO0FBT0QsU0FSRCxFQVFHLElBUkg7QUFGSixPQURBO0FBY0Q7Ozs7RUE3QmtCLGdCQUFNQyxTOztBQWdDM0IsSUFBTUMscUJBQXFCLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRCxFQUFjO0FBQ3ZDLFNBQU87QUFDTGIsbUJBQWU7QUFBQSxhQUFNYSxTQUFTLG1DQUFZVixFQUFaLENBQVQsQ0FBTjtBQUFBO0FBRFYsR0FBUDtBQUdELENBSkQ7O2tCQU9lLHlCQUFRLElBQVIsRUFBY1Msa0JBQWQsRUFBa0NkLE1BQWxDLEMiLCJmaWxlIjoiMC4yYTY2ZDRkYWExNDM2NDQ2YmY1OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgc2VsZWN0R3JvdXAgZnJvbSAnLi4vLi4vYWN0aW9ucy9jaGFuZ2VTZWxlY3RlZEdyb3VwJztcblxuY2xhc3MgR3JvdXBzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5vblNlbGVjdEdyb3VwID0gdGhpcy5vblNlbGVjdEdyb3VwLmJpbmQodGhpcyk7XG4gIH1cblxuICBvblNlbGVjdEdyb3VwKGUsIGlkKSB7XG4gICAgLy8gc2F2ZSBncm91cCBpZFxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnByb3BzLm9uU2VsZWN0R3JvdXAoaWQpO1xuICAgIGUgPSBlLm9yaWdpbmFsRXZlbnQ7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBncm91cHMgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAge1xuICAgICAgICBncm91cHMubWFwKChncm91cCkgPT4ge1xuICAgICAgICAgIHJldHVybiA8YSBjbGFzc05hbWU9XCJncm91cC1jYXJkXCIgaHJlZj1cIiNncm91cFwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5vblNlbGVjdEdyb3VwKGdyb3VwLmlkKX0ga2V5PXtncm91cC5pZH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3VwLW5hbWVcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmlnaHQgZ3JvdXAtdW5yZWFkLWNvdW50IGJhZGdlLWRhbmdlclwiPntncm91cC51bnJlYWR9PC9zcGFuPlxuICAgICAgICAgICAgICA8c3Bhbj57Z3JvdXAubmFtZX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2E+O1xuICAgICAgICB9LCB0aGlzKVxuICAgICAgfVxuICAgIDwvZGl2Pik7XG4gIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgb25TZWxlY3RHcm91cDogaWQgPT4gZGlzcGF0Y2goc2VsZWN0R3JvdXAoaWQpKSxcbiAgfTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEdyb3Vwcyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL2dyb3Vwcy5qcyJdLCJzb3VyY2VSb290IjoiIn0=