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

var _loadMessages2 = __webpack_require__(76);

var _loadMessages3 = _interopRequireDefault(_loadMessages2);

var _api = __webpack_require__(19);

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

      var groupId = 4;
      console.log('Location:::>>>>>', this.props.location.query);
      (0, _api2.default)(null, '/api/group/' + groupId);
      (0, _api2.default)(null, '/api/groups/' + this.props.selectedGroup.id + '/messages', 'GET').then(function (messages) {
        _this2.setState({ loading: '', messages: messages });
        _this2.props.loadMessages(messages);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var messages = this.props.messages;

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
              _react2.default.createElement(_presentational.SideMenu, { ingroup: true }),
              _react2.default.createElement(
                'div',
                { className: 'section page-content align-top pl-0 col m7 l8 xl9' },
                _react2.default.createElement(
                  'h5',
                  { className: 'group-header' },
                  this.selectedGroup.name
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
    selectedGroup: state.selectedGroup
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL2dyb3VwLmpzPzczYWEiXSwibmFtZXMiOlsiR3JvdXAiLCJwcm9wcyIsInN0YXRlIiwibG9hZGluZyIsImdyb3VwSWQiLCJjb25zb2xlIiwibG9nIiwibG9jYXRpb24iLCJxdWVyeSIsInNlbGVjdGVkR3JvdXAiLCJpZCIsInRoZW4iLCJtZXNzYWdlcyIsInNldFN0YXRlIiwibG9hZE1lc3NhZ2VzIiwibmFtZSIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwib25DaGFuZ2VTZWxlY3RlZEdyb3VwIiwiZ3JvdXAiLCJhbGxNZXNzYWdlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLEs7OztBQUNKLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxlQUFTO0FBREUsS0FBYjtBQUZpQjtBQUtsQjs7Ozt5Q0FFb0I7QUFBQTs7QUFDbkIsVUFBTUMsVUFBVSxDQUFoQjtBQUNBQyxjQUFRQyxHQUFSLENBQVksa0JBQVosRUFBZ0MsS0FBS0wsS0FBTCxDQUFXTSxRQUFYLENBQW9CQyxLQUFwRDtBQUNBLHlCQUFJLElBQUosa0JBQXdCSixPQUF4QjtBQUNBLHlCQUFJLElBQUosbUJBQXlCLEtBQUtILEtBQUwsQ0FBV1EsYUFBWCxDQUF5QkMsRUFBbEQsZ0JBQWlFLEtBQWpFLEVBQXdFQyxJQUF4RSxDQUNFLFVBQUNDLFFBQUQsRUFBYztBQUNaLGVBQUtDLFFBQUwsQ0FBYyxFQUFFVixTQUFTLEVBQVgsRUFBZVMsa0JBQWYsRUFBZDtBQUNBLGVBQUtYLEtBQUwsQ0FBV2EsWUFBWCxDQUF3QkYsUUFBeEI7QUFDRCxPQUpIO0FBS0Q7Ozs2QkFFUTtBQUFBLFVBQ0NBLFFBREQsR0FDYyxLQUFLWCxLQURuQixDQUNDVyxRQUREOztBQUVQUCxjQUFRQyxHQUFSLENBQVlNLFFBQVosRUFBc0IsYUFBdEI7QUFDQSxhQUNFO0FBQUE7QUFBQTtBQUNFLG1FQURGO0FBRUk7QUFBQTtBQUFBLFlBQVMsV0FBVSxnQ0FBbkI7QUFDRTtBQUFBO0FBQUEsY0FBSyxXQUFVLFdBQWY7QUFDRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxLQUFmO0FBQ0Usd0VBQVUsU0FBUyxJQUFuQixHQURGO0FBRUU7QUFBQTtBQUFBLGtCQUFLLFdBQVUsbURBQWY7QUFDRTtBQUFBO0FBQUEsb0JBQUksV0FBVSxjQUFkO0FBQStCLHVCQUFLSCxhQUFMLENBQW1CTTtBQUFsRCxpQkFERjtBQUVHLDREQUFVLFVBQVdILFFBQXJCO0FBRkg7QUFGRjtBQURGO0FBREYsU0FGSjtBQWFFO0FBYkYsT0FERjtBQWlCRDs7OztFQXZDaUIsZ0JBQU1JLFM7O0FBMEMxQixJQUFNQyxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNmLEtBQUQsRUFBVztBQUNqQyxTQUFPO0FBQ0xVLGNBQVVWLE1BQU1VLFFBRFg7QUFFTEgsbUJBQWVQLE1BQU1PO0FBRmhCLEdBQVA7QUFJRCxDQUxEOztBQU9BLElBQU1TLHFCQUFxQixTQUFyQkEsa0JBQXFCLENBQUNDLFFBQUQsRUFBYztBQUN2QyxTQUFPO0FBQ0xDLDJCQUF1QjtBQUFBLGFBQVNELFNBQVMsbUNBQTBCRSxLQUExQixDQUFULENBQVQ7QUFBQSxLQURsQjtBQUVMUCxrQkFBYztBQUFBLGFBQWVLLFNBQVMsNEJBQWFHLFdBQWIsQ0FBVCxDQUFmO0FBQUE7QUFGVCxHQUFQO0FBSUQsQ0FMRDs7a0JBT2UseUJBQVFMLGVBQVIsRUFBeUJDLGtCQUF6QixFQUE2Q2xCLEtBQTdDLEMiLCJmaWxlIjoiMC43MmMxZmQyMTlkZmJiMzllZjIxOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBGb290ZXIsIEhlYWRlciwgU2lkZU1lbnUgfSBmcm9tICcuLi9wcmVzZW50YXRpb25hbCc7XG5pbXBvcnQgeyBNZXNzYWdlcyB9IGZyb20gJy4vJztcbmltcG9ydCBjaGFuZ2VTZWxlY3RlZEdyb3VwQWN0aW9uIGZyb20gJy4uLy4uL2FjdGlvbnMvY2hhbmdlU2VsZWN0ZWRHcm91cCc7XG5pbXBvcnQgbG9hZE1lc3NhZ2VzIGZyb20gJy4uLy4uL2FjdGlvbnMvbG9hZE1lc3NhZ2VzJztcbmltcG9ydCBhcGkgZnJvbSAnLi4vaGVscGVycy9hcGknO1xuXG5jbGFzcyBHcm91cCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBsb2FkaW5nOiAnTG9hZGluZy4uLidcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIGNvbnN0IGdyb3VwSWQgPSA0O1xuICAgIGNvbnNvbGUubG9nKCdMb2NhdGlvbjo6Oj4+Pj4+JywgdGhpcy5wcm9wcy5sb2NhdGlvbi5xdWVyeSk7XG4gICAgYXBpKG51bGwsIGAvYXBpL2dyb3VwLyR7Z3JvdXBJZH1gKTtcbiAgICBhcGkobnVsbCwgYC9hcGkvZ3JvdXBzLyR7dGhpcy5wcm9wcy5zZWxlY3RlZEdyb3VwLmlkfS9tZXNzYWdlc2AsICdHRVQnKS50aGVuKFxuICAgICAgKG1lc3NhZ2VzKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiAnJywgbWVzc2FnZXMgfSk7XG4gICAgICAgIHRoaXMucHJvcHMubG9hZE1lc3NhZ2VzKG1lc3NhZ2VzKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbWVzc2FnZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc29sZS5sb2cobWVzc2FnZXMsICc9PT09PT09Pj4+PicpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZGVyLz5cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwYWdlLWNvbnRhaW5lciBjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPFNpZGVNZW51IGluZ3JvdXA9e3RydWV9Lz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24gcGFnZS1jb250ZW50IGFsaWduLXRvcCBwbC0wIGNvbCBtNyBsOCB4bDlcIj5cbiAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJncm91cC1oZWFkZXJcIj57IHRoaXMuc2VsZWN0ZWRHcm91cC5uYW1lIH08L2g1PlxuICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlcyBtZXNzYWdlcz17IG1lc3NhZ2VzIH0vPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPEZvb3Rlci8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIG1lc3NhZ2VzOiBzdGF0ZS5tZXNzYWdlcyxcbiAgICBzZWxlY3RlZEdyb3VwOiBzdGF0ZS5zZWxlY3RlZEdyb3VwXG4gIH07XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBvbkNoYW5nZVNlbGVjdGVkR3JvdXA6IGdyb3VwID0+IGRpc3BhdGNoKGNoYW5nZVNlbGVjdGVkR3JvdXBBY3Rpb24oZ3JvdXApKSxcbiAgICBsb2FkTWVzc2FnZXM6IGFsbE1lc3NhZ2VzID0+IGRpc3BhdGNoKGxvYWRNZXNzYWdlcyhhbGxNZXNzYWdlcykpXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShHcm91cCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL2dyb3VwLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==