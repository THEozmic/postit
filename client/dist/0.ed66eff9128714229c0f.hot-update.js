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

var _reactRedux = __webpack_require__(19);

var _presentational = __webpack_require__(28);

var _ = __webpack_require__(45);

var _changeSelectedGroup = __webpack_require__(75);

var _changeSelectedGroup2 = _interopRequireDefault(_changeSelectedGroup);

var _loadMessages2 = __webpack_require__(76);

var _loadMessages3 = _interopRequireDefault(_loadMessages2);

var _api = __webpack_require__(16);

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
      loading: 'Loading Messages...',
      selectedGroup: { name: 'Loading...' },
      messages: _this.props.messages,
      filter: '',
      originalmessages: _this.props.messages
    };
    _this.filterMessages = _this.filterMessages.bind(_this);
    return _this;
  }

  _createClass(Group, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      var id = location.href.split('/')[location.href.split('/').length - 1];
      (0, _api2.default)(null, '/api/groups/' + id, 'GET').then(function (result) {
        _this2.setState({ selectedGroup: result });
        (0, _api2.default)(null, '/api/groups/' + id + '/messages', 'GET').then(function (messages) {
          _this2.setState({ loading: '', messages: messages });
          _this2.props.loadMessages(messages);
        });
      });
    }
  }, {
    key: 'filterMessages',
    value: function filterMessages(e) {
      console.log('FILTER>>>', e.target.value);
      if (e.target.value === 'Unread') {
        var newMessages = this.state.originalmessages.filter(function (message) {
          if (!message.readBy.split(',').includes(JSON.parse(sessionStorage.getItem('user')).data.username)) {
            if (message.from_user !== JSON.parse(sessionStorage.getItem('user')).data.username) {
              return true;
            }
          }
          return false;
        });
        console.log('NEW MESSAGES>>>>', newMessages);
        this.setState({ messages: newMessages });
        console.log('MESSAGE STATE>>>', this.state.messages);
        console.log('MESSAGE STATE>>>', this.state.messages);
      }
      if (e.target.value === 'Read') {
        var _newMessages = this.state.originalmessages.filter(function (message) {
          if (message.readBy.split(',').includes(JSON.parse(sessionStorage.getItem('user')).data.username)) {
            return true;
          }
          return false;
        });
        console.log('NEW MESSAGES>>>>', _newMessages);
        this.setState({ messages: _newMessages });
        console.log('MESSAGE STATE>>>', this.state.messages);
      }
      if (e.target.value === 'All') {
        this.setState({ messages: this.state.originalmessages });
        console.log('MESSAGE STATE>>>', this.state.messages);
      }
      this.setState({ filter: e.target.value });
    }
  }, {
    key: 'render',
    value: function render() {
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
                  'div',
                  { className: 'group-header-container' },
                  _react2.default.createElement(
                    'span',
                    { className: 'group-header' },
                    _react2.default.createElement(
                      'h5',
                      null,
                      this.state.selectedGroup.name
                    )
                  ),
                  _react2.default.createElement(
                    'span',
                    { className: 'message-filter-container' },
                    _react2.default.createElement(
                      'select',
                      { className: 'browser-default left',
                        value: this.state.filter,
                        onChange: this.filterMessages },
                      _react2.default.createElement(
                        'option',
                        { value: 'All' },
                        'All'
                      ),
                      _react2.default.createElement(
                        'option',
                        { value: 'Read' },
                        'Read'
                      ),
                      _react2.default.createElement(
                        'option',
                        { value: 'Unread' },
                        'Unread'
                      )
                    )
                  )
                ),
                this.state.loading !== '' ? this.state.loading : _react2.default.createElement(_.Messages, { messages: this.state.messages })
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
    loadMessages: function loadMessages(allMessages) {
      return dispatch((0, _loadMessages3.default)(allMessages));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Group);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL2dyb3VwLmpzPzczYWEiXSwibmFtZXMiOlsiR3JvdXAiLCJwcm9wcyIsInN0YXRlIiwibG9hZGluZyIsInNlbGVjdGVkR3JvdXAiLCJuYW1lIiwibWVzc2FnZXMiLCJmaWx0ZXIiLCJvcmlnaW5hbG1lc3NhZ2VzIiwiZmlsdGVyTWVzc2FnZXMiLCJiaW5kIiwiaWQiLCJsb2NhdGlvbiIsImhyZWYiLCJzcGxpdCIsImxlbmd0aCIsInRoZW4iLCJyZXN1bHQiLCJzZXRTdGF0ZSIsImxvYWRNZXNzYWdlcyIsImUiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwidmFsdWUiLCJuZXdNZXNzYWdlcyIsIm1lc3NhZ2UiLCJyZWFkQnkiLCJpbmNsdWRlcyIsIkpTT04iLCJwYXJzZSIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsImRhdGEiLCJ1c2VybmFtZSIsImZyb21fdXNlciIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiYWxsTWVzc2FnZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxLOzs7QUFDSixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDhHQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsZUFBUyxxQkFERTtBQUVYQyxxQkFBZSxFQUFFQyxNQUFNLFlBQVIsRUFGSjtBQUdYQyxnQkFBVSxNQUFLTCxLQUFMLENBQVdLLFFBSFY7QUFJWEMsY0FBUSxFQUpHO0FBS1hDLHdCQUFrQixNQUFLUCxLQUFMLENBQVdLO0FBTGxCLEtBQWI7QUFPQSxVQUFLRyxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0JDLElBQXBCLE9BQXRCO0FBVGlCO0FBVWxCOzs7O3lD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QUFrQixDQUFDbkMsS0FBRCxFQUFXO0FBQ2pDLFNBQU87QUFDTEksY0FBVUosTUFBTUk7QUFEWCxHQUFQO0FBR0QsQ0FKRDs7QUFNQSxJQUFNZ0MscUJBQXFCLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRCxFQUFjO0FBQ3ZDLFNBQU87QUFDTHBCLGtCQUFjO0FBQUEsYUFBZW9CLFNBQVMsNEJBQWFDLFdBQWIsQ0FBVCxDQUFmO0FBQUE7QUFEVCxHQUFQO0FBR0QsQ0FKRDs7a0JBTWUseUJBQVFILGVBQVIsRUFBeUJDLGtCQUF6QixFQUE2Q3RDLEtBQTdDLEMiLCJmaWxlIjoiMC5lZDY2ZWZmOTEyODcxNDIyOWMwZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBGb290ZXIsIEhlYWRlciwgU2lkZU1lbnUgfSBmcm9tICcuLi9wcmVzZW50YXRpb25hbCc7XG5pbXBvcnQgeyBNZXNzYWdlcyB9IGZyb20gJy4vJztcbmltcG9ydCBjaGFuZ2VTZWxlY3RlZEdyb3VwQWN0aW9uIGZyb20gJy4uLy4uL2FjdGlvbnMvY2hhbmdlU2VsZWN0ZWRHcm91cCc7XG5pbXBvcnQgbG9hZE1lc3NhZ2VzIGZyb20gJy4uLy4uL2FjdGlvbnMvbG9hZE1lc3NhZ2VzJztcbmltcG9ydCBhcGkgZnJvbSAnLi4vaGVscGVycy9hcGknO1xuXG5jbGFzcyBHcm91cCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBsb2FkaW5nOiAnTG9hZGluZyBNZXNzYWdlcy4uLicsXG4gICAgICBzZWxlY3RlZEdyb3VwOiB7IG5hbWU6ICdMb2FkaW5nLi4uJyB9LFxuICAgICAgbWVzc2FnZXM6IHRoaXMucHJvcHMubWVzc2FnZXMsXG4gICAgICBmaWx0ZXI6ICcnLFxuICAgICAgb3JpZ2luYWxtZXNzYWdlczogdGhpcy5wcm9wcy5tZXNzYWdlc1xuICAgIH07XG4gICAgdGhpcy5maWx0ZXJNZXNzYWdlcyA9IHRoaXMuZmlsdGVyTWVzc2FnZXMuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBjb25zdCBpZCA9IGxvY2F0aW9uLmhyZWYuc3BsaXQoJy8nKVtsb2NhdGlvbi5ocmVmLnNwbGl0KCcvJykubGVuZ3RoIC0gMV07XG4gICAgYXBpKG51bGwsIGAvYXBpL2dyb3Vwcy8ke2lkfWAsICdHRVQnKVxuICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZEdyb3VwOiByZXN1bHQgfSk7XG4gICAgICBhcGkobnVsbCwgYC9hcGkvZ3JvdXBzLyR7aWR9L21lc3NhZ2VzYCwgJ0dFVCcpLnRoZW4oXG4gICAgICAgIChtZXNzYWdlcykgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiAnJywgbWVzc2FnZXMgfSk7XG4gICAgICAgICAgdGhpcy5wcm9wcy5sb2FkTWVzc2FnZXMobWVzc2FnZXMpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZpbHRlck1lc3NhZ2VzKGUpIHtcbiAgICBjb25zb2xlLmxvZygnRklMVEVSPj4+JywgZS50YXJnZXQudmFsdWUpO1xuICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PT0gJ1VucmVhZCcpIHtcbiAgICAgIGNvbnN0IG5ld01lc3NhZ2VzID0gdGhpcy5zdGF0ZS5vcmlnaW5hbG1lc3NhZ2VzLmZpbHRlcigobWVzc2FnZSkgPT4ge1xuICAgICAgICBpZiAoIW1lc3NhZ2UucmVhZEJ5LnNwbGl0KCcsJylcbiAgICAgICAgICAuaW5jbHVkZXMoSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpXG4gICAgICAgICAgICAuZGF0YS51c2VybmFtZSkpIHtcbiAgICAgICAgICBpZiAobWVzc2FnZS5mcm9tX3VzZXIgIT09IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKVxuICAgICAgICAgICAgLmRhdGEudXNlcm5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKCdORVcgTUVTU0FHRVM+Pj4+JywgbmV3TWVzc2FnZXMpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1lc3NhZ2VzOiBuZXdNZXNzYWdlcyB9KTtcbiAgICAgIGNvbnNvbGUubG9nKCdNRVNTQUdFIFNUQVRFPj4+JywgdGhpcy5zdGF0ZS5tZXNzYWdlcyk7XG4gICAgICBjb25zb2xlLmxvZygnTUVTU0FHRSBTVEFURT4+PicsIHRoaXMuc3RhdGUubWVzc2FnZXMpO1xuICAgIH1cbiAgICBpZiAoZS50YXJnZXQudmFsdWUgPT09ICdSZWFkJykge1xuICAgICAgY29uc3QgbmV3TWVzc2FnZXMgPSB0aGlzLnN0YXRlLm9yaWdpbmFsbWVzc2FnZXMuZmlsdGVyKChtZXNzYWdlKSA9PiB7XG4gICAgICAgIGlmIChtZXNzYWdlLnJlYWRCeS5zcGxpdCgnLCcpXG4gICAgICAgICAgLmluY2x1ZGVzKEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKVxuICAgICAgICAgICAgLmRhdGEudXNlcm5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZygnTkVXIE1FU1NBR0VTPj4+PicsIG5ld01lc3NhZ2VzKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBtZXNzYWdlczogbmV3TWVzc2FnZXMgfSk7XG4gICAgICBjb25zb2xlLmxvZygnTUVTU0FHRSBTVEFURT4+PicsIHRoaXMuc3RhdGUubWVzc2FnZXMpO1xuICAgIH1cbiAgICBpZiAoZS50YXJnZXQudmFsdWUgPT09ICdBbGwnKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgbWVzc2FnZXM6IHRoaXMuc3RhdGUub3JpZ2luYWxtZXNzYWdlcyB9KTtcbiAgICAgIGNvbnNvbGUubG9nKCdNRVNTQUdFIFNUQVRFPj4+JywgdGhpcy5zdGF0ZS5tZXNzYWdlcyk7XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoeyBmaWx0ZXI6IGUudGFyZ2V0LnZhbHVlIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZGVyLz5cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwYWdlLWNvbnRhaW5lciBjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPFNpZGVNZW51IGluZ3JvdXA9e3RydWV9Lz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24gcGFnZS1jb250ZW50IGFsaWduLXRvcCBwbC0wIGNvbCBtNyBsOCB4bDlcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncm91cC1oZWFkZXItY29udGFpbmVyJz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdncm91cC1oZWFkZXInPlxuICAgICAgICAgICAgICAgICAgICAgIDxoNT57IHRoaXMuc3RhdGUuc2VsZWN0ZWRHcm91cC5uYW1lIH08L2g1PlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nbWVzc2FnZS1maWx0ZXItY29udGFpbmVyJz5cbiAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImJyb3dzZXItZGVmYXVsdCBsZWZ0XCJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5maWx0ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuZmlsdGVyTWVzc2FnZXN9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nQWxsJz5BbGw8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J1JlYWQnPlJlYWQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J1VucmVhZCc+VW5yZWFkPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgIHsgdGhpcy5zdGF0ZS5sb2FkaW5nICE9PSAnJyA/IHRoaXMuc3RhdGUubG9hZGluZyA6XG4gICAgICAgICAgICAgICAgICAgPE1lc3NhZ2VzIG1lc3NhZ2VzPXsgdGhpcy5zdGF0ZS5tZXNzYWdlcyB9Lz4gfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPEZvb3Rlci8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIG1lc3NhZ2VzOiBzdGF0ZS5tZXNzYWdlcyxcbiAgfTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICByZXR1cm4ge1xuICAgIGxvYWRNZXNzYWdlczogYWxsTWVzc2FnZXMgPT4gZGlzcGF0Y2gobG9hZE1lc3NhZ2VzKGFsbE1lc3NhZ2VzKSlcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEdyb3VwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9qcy9jb21wb25lbnRzL2NvbnRhaW5lcnMvZ3JvdXAuanMiXSwic291cmNlUm9vdCI6IiJ9