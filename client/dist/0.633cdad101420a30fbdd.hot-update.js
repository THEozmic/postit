webpackHotUpdate(0,{

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(18);

var _presentational = __webpack_require__(27);

var _ = __webpack_require__(43);

var _changeSelectedGroup = __webpack_require__(122);

var _changeSelectedGroup2 = _interopRequireDefault(_changeSelectedGroup);

var _loadMessages2 = __webpack_require__(123);

var _loadMessages3 = _interopRequireDefault(_loadMessages2);

var _api = __webpack_require__(131);

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Group = function (_React$Component) {
  _inherits(Group, _React$Component);

  function Group(props) {
    _classCallCheck(this, Group);

    return _possibleConstructorReturn(this, (Group.__proto__ || Object.getPrototypeOf(Group)).call(this, props));
  }

  _createClass(Group, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      (0, _api2.default)();
      var messages = [{
        id: 1, from: '@michael', priority: 'normal', content: 'Hello guys', readBy: ['@emeka', '@obi']
      }, {
        id: 2, from: '@emeka', priority: 'normal', content: 'Hello @michael', readBy: ['@michael', '@obi']
      }];
      this.props.loadMessages(messages);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          onChangeSelectedGroup = _props.onChangeSelectedGroup,
          messages = _props.messages;

      console.log(messages, '=======>>>>');
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_presentational.Header, null),
        _react2.default.createElement(
          'section',
          { className: 'page-container container-fluid' },
          _react2.default.createElement(
            'div',
            { className: 'container' },
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(_presentational.SideMenu, { ingroup: true, onChangeSelectedGroup: onChangeSelectedGroup }),
              _react2.default.createElement(
                'div',
                { className: 'section page-content align-top pl-0 col m7 l8 xl9' },
                _react2.default.createElement(
                  'h5',
                  { className: 'group-header' },
                  'Andela Bootcampers'
                ),
                _react2.default.createElement(_.Messages, { messages: messages })
              )
            )
          )
        ),
        _react2.default.createElement(_presentational.Footer, null)
      );
    }
  }]);

  return Group;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    messages: state.messages
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onChangeSelectedGroup: function onChangeSelectedGroup(group) {
      return dispatch((0, _changeSelectedGroup2.default)(group));
    },
    loadMessages: function loadMessages(allMessages) {
      return dispatch((0, _loadMessages3.default)(allMessages));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Group);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL2dyb3VwLmpzPzczYWEiXSwibmFtZXMiOlsiR3JvdXAiLCJwcm9wcyIsIm1lc3NhZ2VzIiwiaWQiLCJmcm9tIiwicHJpb3JpdHkiLCJjb250ZW50IiwicmVhZEJ5IiwibG9hZE1lc3NhZ2VzIiwib25DaGFuZ2VTZWxlY3RlZEdyb3VwIiwiY29uc29sZSIsImxvZyIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJncm91cCIsImFsbE1lc3NhZ2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUEsSzs7O0FBQ0osaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx5R0FDWEEsS0FEVztBQUVsQjs7Ozt5Q0FFb0I7QUFDbkI7QUFDQSxVQUFNQyxXQUFXLENBQ2Y7QUFDRUMsWUFBSSxDQUROLEVBQ1NDLE1BQU0sVUFEZixFQUMyQkMsVUFBVSxRQURyQyxFQUMrQ0MsU0FBUyxZQUR4RCxFQUNzRUMsUUFBUSxDQUFDLFFBQUQsRUFBVyxNQUFYO0FBRDlFLE9BRGUsRUFJZjtBQUNFSixZQUFJLENBRE4sRUFDU0MsTUFBTSxRQURmLEVBQ3lCQyxVQUFVLFFBRG5DLEVBQzZDQyxTQUFTLGdCQUR0RCxFQUN3RUMsUUFBUSxDQUFDLFVBQUQsRUFBYSxNQUFiO0FBRGhGLE9BSmUsQ0FBakI7QUFRQSxXQUFLTixLQUFMLENBQVdPLFlBQVgsQ0FBd0JOLFFBQXhCO0FBQ0Q7Ozs2QkFFUTtBQUFBLG1CQUNxQyxLQUFLRCxLQUQxQztBQUFBLFVBQ0NRLHFCQURELFVBQ0NBLHFCQUREO0FBQUEsVUFDd0JQLFFBRHhCLFVBQ3dCQSxRQUR4Qjs7QUFFUFEsY0FBUUMsR0FBUixDQUFZVCxRQUFaLEVBQXNCLGFBQXRCO0FBQ0EsYUFDRTtBQUFBO0FBQUE7QUFDRSxtRUFERjtBQUVJO0FBQUE7QUFBQSxZQUFTLFdBQVUsZ0NBQW5CO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxXQUFmO0FBQ0U7QUFBQTtBQUFBLGdCQUFLLFdBQVUsS0FBZjtBQUNFLHdFQUFVLFNBQVMsSUFBbkIsRUFBeUIsdUJBQXdCTyxxQkFBakQsR0FERjtBQUVFO0FBQUE7QUFBQSxrQkFBSyxXQUFVLG1EQUFmO0FBQ0U7QUFBQTtBQUFBLG9CQUFJLFdBQVUsY0FBZDtBQUFBO0FBQUEsaUJBREY7QUFFRSw0REFBVSxVQUFXUCxRQUFyQjtBQUZGO0FBRkY7QUFERjtBQURGLFNBRko7QUFhRTtBQWJGLE9BREY7QUFpQkQ7Ozs7RUF0Q2lCLGdCQUFNVSxTOztBQXlDMUIsSUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFELEVBQVc7QUFDakMsU0FBTztBQUNMWixjQUFVWSxNQUFNWjtBQURYLEdBQVA7QUFHRCxDQUpEOztBQU1BLElBQU1hLHFCQUFxQixTQUFyQkEsa0JBQXFCLENBQUNDLFFBQUQsRUFBYztBQUN2QyxTQUFPO0FBQ0xQLDJCQUF1QjtBQUFBLGFBQVNPLFNBQVMsbUNBQTBCQyxLQUExQixDQUFULENBQVQ7QUFBQSxLQURsQjtBQUVMVCxrQkFBYztBQUFBLGFBQWVRLFNBQVMsNEJBQWFFLFdBQWIsQ0FBVCxDQUFmO0FBQUE7QUFGVCxHQUFQO0FBSUQsQ0FMRDs7a0JBT2UseUJBQVFMLGVBQVIsRUFBeUJFLGtCQUF6QixFQUE2Q2YsS0FBN0MsQyIsImZpbGUiOiIwLjYzM2NkYWQxMDE0MjBhMzBmYmRkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IEZvb3RlciwgSGVhZGVyLCBTaWRlTWVudSB9IGZyb20gJy4uL3ByZXNlbnRhdGlvbmFsJztcbmltcG9ydCB7IE1lc3NhZ2VzIH0gZnJvbSAnLi8nO1xuaW1wb3J0IGNoYW5nZVNlbGVjdGVkR3JvdXBBY3Rpb24gZnJvbSAnLi4vLi4vYWN0aW9ucy9jaGFuZ2VTZWxlY3RlZEdyb3VwJztcbmltcG9ydCBsb2FkTWVzc2FnZXMgZnJvbSAnLi4vLi4vYWN0aW9ucy9sb2FkTWVzc2FnZXMnO1xuaW1wb3J0IGFwaSBmcm9tICcuLi9oZWxwZXJzL2FwaSc7XG5cbmNsYXNzIEdyb3VwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgYXBpKCk7XG4gICAgY29uc3QgbWVzc2FnZXMgPSBbXG4gICAgICB7XG4gICAgICAgIGlkOiAxLCBmcm9tOiAnQG1pY2hhZWwnLCBwcmlvcml0eTogJ25vcm1hbCcsIGNvbnRlbnQ6ICdIZWxsbyBndXlzJywgcmVhZEJ5OiBbJ0BlbWVrYScsICdAb2JpJ11cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAyLCBmcm9tOiAnQGVtZWthJywgcHJpb3JpdHk6ICdub3JtYWwnLCBjb250ZW50OiAnSGVsbG8gQG1pY2hhZWwnLCByZWFkQnk6IFsnQG1pY2hhZWwnLCAnQG9iaSddLFxuICAgICAgfVxuICAgIF07XG4gICAgdGhpcy5wcm9wcy5sb2FkTWVzc2FnZXMobWVzc2FnZXMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgb25DaGFuZ2VTZWxlY3RlZEdyb3VwLCBtZXNzYWdlcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlcywgJz09PT09PT0+Pj4+Jyk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkZXIvPlxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInBhZ2UtY29udGFpbmVyIGNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8U2lkZU1lbnUgaW5ncm91cD17dHJ1ZX0gb25DaGFuZ2VTZWxlY3RlZEdyb3VwPXsgb25DaGFuZ2VTZWxlY3RlZEdyb3VwIH0vPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbiBwYWdlLWNvbnRlbnQgYWxpZ24tdG9wIHBsLTAgY29sIG03IGw4IHhsOVwiPlxuICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImdyb3VwLWhlYWRlclwiPkFuZGVsYSBCb290Y2FtcGVyczwvaDU+XG4gICAgICAgICAgICAgICAgICA8TWVzc2FnZXMgbWVzc2FnZXM9eyBtZXNzYWdlcyB9Lz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxGb290ZXIvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBtZXNzYWdlczogc3RhdGUubWVzc2FnZXNcbiAgfTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICByZXR1cm4ge1xuICAgIG9uQ2hhbmdlU2VsZWN0ZWRHcm91cDogZ3JvdXAgPT4gZGlzcGF0Y2goY2hhbmdlU2VsZWN0ZWRHcm91cEFjdGlvbihncm91cCkpLFxuICAgIGxvYWRNZXNzYWdlczogYWxsTWVzc2FnZXMgPT4gZGlzcGF0Y2gobG9hZE1lc3NhZ2VzKGFsbE1lc3NhZ2VzKSlcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEdyb3VwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9qcy9jb21wb25lbnRzL2NvbnRhaW5lcnMvZ3JvdXAuanMiXSwic291cmNlUm9vdCI6IiJ9