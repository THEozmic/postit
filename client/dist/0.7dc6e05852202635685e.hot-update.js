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

var _reactRedux = __webpack_require__(16);

var _presentational = __webpack_require__(28);

var _ = __webpack_require__(45);

var _changeSelectedGroup = __webpack_require__(75);

var _changeSelectedGroup2 = _interopRequireDefault(_changeSelectedGroup);

var _loadMessages2 = __webpack_require__(124);

var _loadMessages3 = _interopRequireDefault(_loadMessages2);

var _api = __webpack_require__(26);

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
      loading: 'Loading...'
    };
    return _this;
  }

  _createClass(Group, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      var headers = new Headers();
      console.log('', this.props.group);
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      headers.append('x-access-token', JSON.parse(sessionStorage.getItem('user')).token);
      (0, _api2.default)(null, '/api/groups/' + this.props.group.id + '/messages', 'GET', headers).then(function (messages) {
        _this2.setState({ loading: '', messages: messages });
        _this2.props.loadMessages(messages);
      });
      // const messages = [
      //   {
      //     id: 1, from: '@michael', priority: 'normal', content: 'Hello guys', readBy: ['@emeka', '@obi']
      //   },
      //   {
      //     id: 2, from: '@emeka', priority: 'normal', content: 'Hello @michael', readBy: ['@michael', '@obi'],
      //   }
      // ];
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
    group: state.selectedGroup
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL2dyb3VwLmpzPzczYWEiXSwibmFtZXMiOlsiR3JvdXAiLCJwcm9wcyIsInN0YXRlIiwibG9hZGluZyIsImhlYWRlcnMiLCJIZWFkZXJzIiwiY29uc29sZSIsImxvZyIsImdyb3VwIiwiYXBwZW5kIiwiSlNPTiIsInBhcnNlIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwidG9rZW4iLCJpZCIsInRoZW4iLCJtZXNzYWdlcyIsInNldFN0YXRlIiwibG9hZE1lc3NhZ2VzIiwib25DaGFuZ2VTZWxlY3RlZEdyb3VwIiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwic2VsZWN0ZWRHcm91cCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiYWxsTWVzc2FnZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxLOzs7QUFDSixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDhHQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsZUFBUztBQURFLEtBQWI7QUFGaUI7QUFLbEI7Ozs7eUNBRW9CO0FBQUE7O0FBQ25CLFVBQU1DLFVBQVUsSUFBSUMsT0FBSixFQUFoQjtBQUNBQyxjQUFRQyxHQUFSLENBQVksRUFBWixFQUFnQixLQUFLTixLQUFMLENBQVdPLEtBQTNCO0FBQ0FKLGNBQVFLLE1BQVIsQ0FBZSxjQUFmLEVBQStCLG1DQUEvQjtBQUNBTCxjQUFRSyxNQUFSLENBQWUsZ0JBQWYsRUFBaUNDLEtBQUtDLEtBQUwsQ0FBV0MsZUFBZUMsT0FBZixDQUF1QixNQUF2QixDQUFYLEVBQTJDQyxLQUE1RTtBQUNBLHlCQUFJLElBQUosbUJBQXlCLEtBQUtiLEtBQUwsQ0FBV08sS0FBWCxDQUFpQk8sRUFBMUMsZ0JBQXlELEtBQXpELEVBQWdFWCxPQUFoRSxFQUF5RVksSUFBekUsQ0FDRSxVQUFDQyxRQUFELEVBQWM7QUFDWixlQUFLQyxRQUFMLENBQWMsRUFBRWYsU0FBUyxFQUFYLEVBQWVjLGtCQUFmLEVBQWQ7QUFDQSxlQUFLaEIsS0FBTCxDQUFXa0IsWUFBWCxDQUF3QkYsUUFBeEI7QUFDRCxPQUpIO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVEOzs7NkJBRVE7QUFBQSxtQkFDcUMsS0FBS2hCLEtBRDFDO0FBQUEsVUFDQ21CLHFCQURELFVBQ0NBLHFCQUREO0FBQUEsVUFDd0JILFFBRHhCLFVBQ3dCQSxRQUR4Qjs7QUFFUFgsY0FBUUMsR0FBUixDQUFZVSxRQUFaLEVBQXNCLGFBQXRCO0FBQ0EsYUFDRTtBQUFBO0FBQUE7QUFDRSxtRUFERjtBQUVJO0FBQUE7QUFBQSxZQUFTLFdBQVUsZ0NBQW5CO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxXQUFmO0FBQ0U7QUFBQTtBQUFBLGdCQUFLLFdBQVUsS0FBZjtBQUNFLHdFQUFVLFNBQVMsSUFBbkIsRUFBeUIsdUJBQXdCRyxxQkFBakQsR0FERjtBQUVFO0FBQUE7QUFBQSxrQkFBSyxXQUFVLG1EQUFmO0FBQ0U7QUFBQTtBQUFBLG9CQUFJLFdBQVUsY0FBZDtBQUFBO0FBQUEsaUJBREY7QUFFRSw0REFBVSxVQUFXSCxRQUFyQjtBQUZGO0FBRkY7QUFERjtBQURGLFNBRko7QUFhRTtBQWJGLE9BREY7QUFpQkQ7Ozs7RUFqRGlCLGdCQUFNSSxTOztBQW9EMUIsSUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDcEIsS0FBRCxFQUFXO0FBQ2pDLFNBQU87QUFDTGUsY0FBVWYsTUFBTWUsUUFEWDtBQUVMVCxXQUFPTixNQUFNcUI7QUFGUixHQUFQO0FBSUQsQ0FMRDs7QUFPQSxJQUFNQyxxQkFBcUIsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFELEVBQWM7QUFDdkMsU0FBTztBQUNMTCwyQkFBdUI7QUFBQSxhQUFTSyxTQUFTLG1DQUEwQmpCLEtBQTFCLENBQVQsQ0FBVDtBQUFBLEtBRGxCO0FBRUxXLGtCQUFjO0FBQUEsYUFBZU0sU0FBUyw0QkFBYUMsV0FBYixDQUFULENBQWY7QUFBQTtBQUZULEdBQVA7QUFJRCxDQUxEOztrQkFPZSx5QkFBUUosZUFBUixFQUF5QkUsa0JBQXpCLEVBQTZDeEIsS0FBN0MsQyIsImZpbGUiOiIwLjdkYzZlMDU4NTIyMDI2MzU2ODVlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IEZvb3RlciwgSGVhZGVyLCBTaWRlTWVudSB9IGZyb20gJy4uL3ByZXNlbnRhdGlvbmFsJztcbmltcG9ydCB7IE1lc3NhZ2VzIH0gZnJvbSAnLi8nO1xuaW1wb3J0IGNoYW5nZVNlbGVjdGVkR3JvdXBBY3Rpb24gZnJvbSAnLi4vLi4vYWN0aW9ucy9jaGFuZ2VTZWxlY3RlZEdyb3VwJztcbmltcG9ydCBsb2FkTWVzc2FnZXMgZnJvbSAnLi4vLi4vYWN0aW9ucy9sb2FkTWVzc2FnZXMnO1xuaW1wb3J0IGFwaSBmcm9tICcuLi9oZWxwZXJzL2FwaSc7XG5cbmNsYXNzIEdyb3VwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxvYWRpbmc6ICdMb2FkaW5nLi4uJ1xuICAgIH07XG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgY29uc29sZS5sb2coJycsIHRoaXMucHJvcHMuZ3JvdXApO1xuICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XG4gICAgaGVhZGVycy5hcHBlbmQoJ3gtYWNjZXNzLXRva2VuJywgSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpLnRva2VuKTtcbiAgICBhcGkobnVsbCwgYC9hcGkvZ3JvdXBzLyR7dGhpcy5wcm9wcy5ncm91cC5pZH0vbWVzc2FnZXNgLCAnR0VUJywgaGVhZGVycykudGhlbihcbiAgICAgIChtZXNzYWdlcykgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogJycsIG1lc3NhZ2VzIH0pO1xuICAgICAgICB0aGlzLnByb3BzLmxvYWRNZXNzYWdlcyhtZXNzYWdlcyk7XG4gICAgICB9KTtcbiAgICAvLyBjb25zdCBtZXNzYWdlcyA9IFtcbiAgICAvLyAgIHtcbiAgICAvLyAgICAgaWQ6IDEsIGZyb206ICdAbWljaGFlbCcsIHByaW9yaXR5OiAnbm9ybWFsJywgY29udGVudDogJ0hlbGxvIGd1eXMnLCByZWFkQnk6IFsnQGVtZWthJywgJ0BvYmknXVxuICAgIC8vICAgfSxcbiAgICAvLyAgIHtcbiAgICAvLyAgICAgaWQ6IDIsIGZyb206ICdAZW1la2EnLCBwcmlvcml0eTogJ25vcm1hbCcsIGNvbnRlbnQ6ICdIZWxsbyBAbWljaGFlbCcsIHJlYWRCeTogWydAbWljaGFlbCcsICdAb2JpJ10sXG4gICAgLy8gICB9XG4gICAgLy8gXTtcbiAgICBcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG9uQ2hhbmdlU2VsZWN0ZWRHcm91cCwgbWVzc2FnZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc29sZS5sb2cobWVzc2FnZXMsICc9PT09PT09Pj4+PicpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZGVyLz5cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwYWdlLWNvbnRhaW5lciBjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPFNpZGVNZW51IGluZ3JvdXA9e3RydWV9IG9uQ2hhbmdlU2VsZWN0ZWRHcm91cD17IG9uQ2hhbmdlU2VsZWN0ZWRHcm91cCB9Lz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24gcGFnZS1jb250ZW50IGFsaWduLXRvcCBwbC0wIGNvbCBtNyBsOCB4bDlcIj5cbiAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJncm91cC1oZWFkZXJcIj5BbmRlbGEgQm9vdGNhbXBlcnM8L2g1PlxuICAgICAgICAgICAgICAgICAgPE1lc3NhZ2VzIG1lc3NhZ2VzPXsgbWVzc2FnZXMgfS8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8Rm9vdGVyLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgbWVzc2FnZXM6IHN0YXRlLm1lc3NhZ2VzLFxuICAgIGdyb3VwOiBzdGF0ZS5zZWxlY3RlZEdyb3VwXG4gIH07XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBvbkNoYW5nZVNlbGVjdGVkR3JvdXA6IGdyb3VwID0+IGRpc3BhdGNoKGNoYW5nZVNlbGVjdGVkR3JvdXBBY3Rpb24oZ3JvdXApKSxcbiAgICBsb2FkTWVzc2FnZXM6IGFsbE1lc3NhZ2VzID0+IGRpc3BhdGNoKGxvYWRNZXNzYWdlcyhhbGxNZXNzYWdlcykpXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShHcm91cCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL2dyb3VwLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==