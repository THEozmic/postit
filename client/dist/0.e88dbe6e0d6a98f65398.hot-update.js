webpackHotUpdate(0,{

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var loadMessages = function loadMessages(messages) {
  return {
    type: 'LOAD_MESSAGES',
    messages: messages
  };
};

exports.default = loadMessages;

/***/ }),

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

    var _this = _possibleConstructorReturn(this, (Group.__proto__ || Object.getPrototypeOf(Group)).call(this, props));

    _this.state = {
      messages: []
    };
    return _this;
  }

  _createClass(Group, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      var headers = new Headers();
      var messages = [];
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      headers.append('x-access-token', sessionStorage.getItem('user').token);
      (0, _api2.default)(null, '/api/group/' + this.props.group_id + '/messages', 'GET', headers).then(function (response) {
        _this2.setState({ messages: response });
      });
      // const messages = [
      //   {
      //     id: 1, from: '@michael', priority: 'normal', content: 'Hello guys', readBy: ['@emeka', '@obi']
      //   },
      //   {
      //     id: 2, from: '@emeka', priority: 'normal', content: 'Hello @michael', readBy: ['@michael', '@obi'],
      //   }
      // ];
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
    messages: state.messages,
    group_id: state.group_id
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvYWN0aW9ucy9sb2FkTWVzc2FnZXMuanM/ZTk0MCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL2dyb3VwLmpzPzczYWEiXSwibmFtZXMiOlsibG9hZE1lc3NhZ2VzIiwibWVzc2FnZXMiLCJ0eXBlIiwiR3JvdXAiLCJwcm9wcyIsInN0YXRlIiwiaGVhZGVycyIsIkhlYWRlcnMiLCJhcHBlbmQiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJ0b2tlbiIsImdyb3VwX2lkIiwidGhlbiIsInJlc3BvbnNlIiwic2V0U3RhdGUiLCJvbkNoYW5nZVNlbGVjdGVkR3JvdXAiLCJjb25zb2xlIiwibG9nIiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJncm91cCIsImFsbE1lc3NhZ2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLElBQU1BLGVBQWUsU0FBZkEsWUFBZSxDQUFDQyxRQUFELEVBQWM7QUFDakMsU0FBTztBQUNMQyxVQUFNLGVBREQ7QUFFTEQ7QUFGSyxHQUFQO0FBSUQsQ0FMRDs7a0JBT2VELFk7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQZjs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1HLEs7OztBQUNKLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYSixnQkFBVTtBQURDLEtBQWI7QUFGaUI7QUFLbEI7Ozs7eUNBRW9CO0FBQUE7O0FBQ25CLFVBQU1LLFVBQVUsSUFBSUMsT0FBSixFQUFoQjtBQUNBLFVBQUlOLFdBQVcsRUFBZjtBQUNBSyxjQUFRRSxNQUFSLENBQWUsY0FBZixFQUErQixtQ0FBL0I7QUFDQUYsY0FBUUUsTUFBUixDQUFlLGdCQUFmLEVBQWlDQyxlQUFlQyxPQUFmLENBQXVCLE1BQXZCLEVBQStCQyxLQUFoRTtBQUNBLHlCQUFJLElBQUosa0JBQXdCLEtBQUtQLEtBQUwsQ0FBV1EsUUFBbkMsZ0JBQXdELEtBQXhELEVBQStETixPQUEvRCxFQUF3RU8sSUFBeEUsQ0FDRSxVQUFDQyxRQUFELEVBQWM7QUFBRSxlQUFLQyxRQUFMLENBQWMsRUFBRWQsVUFBVWEsUUFBWixFQUFkO0FBQXdDLE9BRDFEO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQUtWLEtBQUwsQ0FBV0osWUFBWCxDQUF3QkMsUUFBeEI7QUFDRDs7OzZCQUVRO0FBQUEsbUJBQ3FDLEtBQUtHLEtBRDFDO0FBQUEsVUFDQ1kscUJBREQsVUFDQ0EscUJBREQ7QUFBQSxVQUN3QmYsUUFEeEIsVUFDd0JBLFFBRHhCOztBQUVQZ0IsY0FBUUMsR0FBUixDQUFZakIsUUFBWixFQUFzQixhQUF0QjtBQUNBLGFBQ0U7QUFBQTtBQUFBO0FBQ0UsbUVBREY7QUFFSTtBQUFBO0FBQUEsWUFBUyxXQUFVLGdDQUFuQjtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsV0FBZjtBQUNFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLEtBQWY7QUFDRSx3RUFBVSxTQUFTLElBQW5CLEVBQXlCLHVCQUF3QmUscUJBQWpELEdBREY7QUFFRTtBQUFBO0FBQUEsa0JBQUssV0FBVSxtREFBZjtBQUNFO0FBQUE7QUFBQSxvQkFBSSxXQUFVLGNBQWQ7QUFBQTtBQUFBLGlCQURGO0FBRUUsNERBQVUsVUFBV2YsUUFBckI7QUFGRjtBQUZGO0FBREY7QUFERixTQUZKO0FBYUU7QUFiRixPQURGO0FBaUJEOzs7O0VBOUNpQixnQkFBTWtCLFM7O0FBaUQxQixJQUFNQyxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNmLEtBQUQsRUFBVztBQUNqQyxTQUFPO0FBQ0xKLGNBQVVJLE1BQU1KLFFBRFg7QUFFTFcsY0FBVVAsTUFBTU87QUFGWCxHQUFQO0FBSUQsQ0FMRDs7QUFPQSxJQUFNUyxxQkFBcUIsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFELEVBQWM7QUFDdkMsU0FBTztBQUNMTiwyQkFBdUI7QUFBQSxhQUFTTSxTQUFTLG1DQUEwQkMsS0FBMUIsQ0FBVCxDQUFUO0FBQUEsS0FEbEI7QUFFTHZCLGtCQUFjO0FBQUEsYUFBZXNCLFNBQVMsNEJBQWFFLFdBQWIsQ0FBVCxDQUFmO0FBQUE7QUFGVCxHQUFQO0FBSUQsQ0FMRDs7a0JBT2UseUJBQVFKLGVBQVIsRUFBeUJDLGtCQUF6QixFQUE2Q2xCLEtBQTdDLEMiLCJmaWxlIjoiMC5lODhkYmU2ZTBkNmE5OGY2NTM5OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbG9hZE1lc3NhZ2VzID0gKG1lc3NhZ2VzKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0xPQURfTUVTU0FHRVMnLFxuICAgIG1lc3NhZ2VzXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkTWVzc2FnZXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvanMvYWN0aW9ucy9sb2FkTWVzc2FnZXMuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IEZvb3RlciwgSGVhZGVyLCBTaWRlTWVudSB9IGZyb20gJy4uL3ByZXNlbnRhdGlvbmFsJztcbmltcG9ydCB7IE1lc3NhZ2VzIH0gZnJvbSAnLi8nO1xuaW1wb3J0IGNoYW5nZVNlbGVjdGVkR3JvdXBBY3Rpb24gZnJvbSAnLi4vLi4vYWN0aW9ucy9jaGFuZ2VTZWxlY3RlZEdyb3VwJztcbmltcG9ydCBsb2FkTWVzc2FnZXMgZnJvbSAnLi4vLi4vYWN0aW9ucy9sb2FkTWVzc2FnZXMnO1xuaW1wb3J0IGFwaSBmcm9tICcuLi9oZWxwZXJzL2FwaSc7XG5cbmNsYXNzIEdyb3VwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1lc3NhZ2VzOiBbXVxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgbGV0IG1lc3NhZ2VzID0gW107XG4gICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcbiAgICBoZWFkZXJzLmFwcGVuZCgneC1hY2Nlc3MtdG9rZW4nLCBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykudG9rZW4pO1xuICAgIGFwaShudWxsLCBgL2FwaS9ncm91cC8ke3RoaXMucHJvcHMuZ3JvdXBfaWR9L21lc3NhZ2VzYCwgJ0dFVCcsIGhlYWRlcnMpLnRoZW4oXG4gICAgICAocmVzcG9uc2UpID0+IHsgdGhpcy5zZXRTdGF0ZSh7IG1lc3NhZ2VzOiByZXNwb25zZSB9KTsgfSk7XG4gICAgLy8gY29uc3QgbWVzc2FnZXMgPSBbXG4gICAgLy8gICB7XG4gICAgLy8gICAgIGlkOiAxLCBmcm9tOiAnQG1pY2hhZWwnLCBwcmlvcml0eTogJ25vcm1hbCcsIGNvbnRlbnQ6ICdIZWxsbyBndXlzJywgcmVhZEJ5OiBbJ0BlbWVrYScsICdAb2JpJ11cbiAgICAvLyAgIH0sXG4gICAgLy8gICB7XG4gICAgLy8gICAgIGlkOiAyLCBmcm9tOiAnQGVtZWthJywgcHJpb3JpdHk6ICdub3JtYWwnLCBjb250ZW50OiAnSGVsbG8gQG1pY2hhZWwnLCByZWFkQnk6IFsnQG1pY2hhZWwnLCAnQG9iaSddLFxuICAgIC8vICAgfVxuICAgIC8vIF07XG4gICAgdGhpcy5wcm9wcy5sb2FkTWVzc2FnZXMobWVzc2FnZXMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgb25DaGFuZ2VTZWxlY3RlZEdyb3VwLCBtZXNzYWdlcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlcywgJz09PT09PT0+Pj4+Jyk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkZXIvPlxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInBhZ2UtY29udGFpbmVyIGNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8U2lkZU1lbnUgaW5ncm91cD17dHJ1ZX0gb25DaGFuZ2VTZWxlY3RlZEdyb3VwPXsgb25DaGFuZ2VTZWxlY3RlZEdyb3VwIH0vPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbiBwYWdlLWNvbnRlbnQgYWxpZ24tdG9wIHBsLTAgY29sIG03IGw4IHhsOVwiPlxuICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImdyb3VwLWhlYWRlclwiPkFuZGVsYSBCb290Y2FtcGVyczwvaDU+XG4gICAgICAgICAgICAgICAgICA8TWVzc2FnZXMgbWVzc2FnZXM9eyBtZXNzYWdlcyB9Lz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxGb290ZXIvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBtZXNzYWdlczogc3RhdGUubWVzc2FnZXMsXG4gICAgZ3JvdXBfaWQ6IHN0YXRlLmdyb3VwX2lkXG4gIH07XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBvbkNoYW5nZVNlbGVjdGVkR3JvdXA6IGdyb3VwID0+IGRpc3BhdGNoKGNoYW5nZVNlbGVjdGVkR3JvdXBBY3Rpb24oZ3JvdXApKSxcbiAgICBsb2FkTWVzc2FnZXM6IGFsbE1lc3NhZ2VzID0+IGRpc3BhdGNoKGxvYWRNZXNzYWdlcyhhbGxNZXNzYWdlcykpXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShHcm91cCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL2dyb3VwLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==