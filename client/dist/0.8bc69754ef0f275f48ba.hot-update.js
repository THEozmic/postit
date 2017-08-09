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

var _api = __webpack_require__(13);

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
      originalMessages: _this.props.messages
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
          _this2.setState({ loading: '', messages: messages, originalMessages: messages });
          _this2.props.loadMessages(messages);
        });
      });
    }
  }, {
    key: 'filterMessages',
    value: function filterMessages(e) {
      console.log('OLD MESSAGES>>>>', this.state.messages);
      console.log('FILTER>>>', e.target.value);
      if (e.target.value === 'Unread') {
        var editable = this.state.originalMessages;
        var newMessages = editable.filter(function (message) {
          if (!message.readBy.split(',').includes(JSON.parse(sessionStorage.getItem('user')).data.username)) {
            if (message.from_user !== JSON.parse(sessionStorage.getItem('user')).data.username) {
              return true;
            }
          }
          return false;
        });
        console.log('NEW MESSAGES>>>>', newMessages);
        t;
        console.log('MESSAGE STATE>>>', this.state.messages);
        console.log('ORIGINAL MESSAGE STATE>>>', this.state.originalMessages);
      }
      if (e.target.value === 'Read') {
        var _editable = this.state.originalMessages;
        var _newMessages = _editable.filter(function (message) {
          if (message.readBy.split(',').includes(JSON.parse(sessionStorage.getItem('user')).data.username)) {
            return true;
          }
          return false;
        });
        console.log('NEW MESSAGES>>>>', _newMessages);
        this.setState({ messages: _newMessages });
        console.log('MESSAGE STATE>>>', this.state.messages);
        console.log('ORIGINAL MESSAGE STATE>>>', this.state.originalMessages);
      }
      if (e.target.value === 'All') {
        this.setState({ messages: this.state.originalMessages });
        console.log('MESSAGE STATE>>>', this.state.messages);
        console.log('ORIGINAL MESSAGE STATE>>>', this.state.originalMessages);
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
                { className: 'section page-content align-top pl-0 col m7 l8' },
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
                this.state.loading !== '' ? this.state.loading : _react2.default.createElement(_.Messages, { messages: this.props.messages, loadMessages: this.props.loadMessages })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL2dyb3VwLmpzPzczYWEiXSwibmFtZXMiOlsiR3JvdXAiLCJwcm9wcyIsInN0YXRlIiwibG9hZGluZyIsInNlbGVjdGVkR3JvdXAiLCJuYW1lIiwibWVzc2FnZXMiLCJmaWx0ZXIiLCJvcmlnaW5hbE1lc3NhZ2VzIiwiZmlsdGVyTWVzc2FnZXMiLCJiaW5kIiwiaWQiLCJsb2NhdGlvbiIsImhyZWYiLCJzcGxpdCIsImxlbmd0aCIsInRoZW4iLCJyZXN1bHQiLCJzZXRTdGF0ZSIsImxvYWRNZXNzYWdlcyIsImUiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwidmFsdWUiLCJlZGl0YWJsZSIsIm5ld01lc3NhZ2VzIiwibWVzc2FnZSIsInJlYWRCeSIsImluY2x1ZGVzIiwiSlNPTiIsInBhcnNlIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiZGF0YSIsInVzZXJuYW1lIiwiZnJvbV91c2VyIiwidCIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiYWxsTWVzc2FnZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxLOzs7QUFDSixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDhHQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsZUFBUyxxQkFERTtBQUVYQyxxQkFBZSxFQUFFQyxNQUFNLFlBQVIsRUFGSjtBQUdYQyxnQkFBVSxNQUFLTCxLQUFMLENBQVdLLFFBSFY7QUFJWEMsY0FBUSxFQUpHO0FBS1hDLHdCQUFrQixNQUFLUCxLQUFMLENBQVdLO0FBTGxCLEtBQWI7QUFPQSxVQUFLRyxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0JDLElBQXBCLE9BQXRCO0FB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RixpQkFERjtBQWVLLHFCQUFLUCxLQUFMLENBQVdDLE9BQVgsS0FBdUIsRUFBdkIsR0FBNEIsS0FBS0QsS0FBTCxDQUFXQyxPQUF2QyxHQUNGLDRDQUFVLFVBQVcsS0FBS0YsS0FBTCxDQUFXSyxRQUFoQyxFQUEyQyxjQUFlLEtBQUtMLEtBQUwsQ0FBV2tCLFlBQXJFO0FBaEJIO0FBRkY7QUFERjtBQURGLFNBRko7QUEyQkU7QUEzQkYsT0FERjtBQStCRDs7OztFQXRHaUIsZ0JBQU1tQixTOztBQXlHMUIsSUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDckMsS0FBRCxFQUFXO0FBQ2pDLFNBQU87QUFDTEksY0FBVUosTUFBTUk7QUFEWCxHQUFQO0FBR0QsQ0FKRDs7QUFNQSxJQUFNa0MscUJBQXFCLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRCxFQUFjO0FBQ3ZDLFNBQU87QUFDTHRCLGtCQUFjO0FBQUEsYUFBZXNCLFNBQVMsNEJBQWFDLFdBQWIsQ0FBVCxDQUFmO0FBQUE7QUFEVCxHQUFQO0FBR0QsQ0FKRDs7a0JBTWUseUJBQVFILGVBQVIsRUFBeUJDLGtCQUF6QixFQUE2Q3hDLEtBQTdDLEMiLCJmaWxlIjoiMC44YmM2OTc1NGVmMGYyNzVmNDhiYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBGb290ZXIsIEhlYWRlciwgU2lkZU1lbnUgfSBmcm9tICcuLi9wcmVzZW50YXRpb25hbCc7XG5pbXBvcnQgeyBNZXNzYWdlcyB9IGZyb20gJy4vJztcbmltcG9ydCBjaGFuZ2VTZWxlY3RlZEdyb3VwQWN0aW9uIGZyb20gJy4uLy4uL2FjdGlvbnMvY2hhbmdlU2VsZWN0ZWRHcm91cCc7XG5pbXBvcnQgbG9hZE1lc3NhZ2VzIGZyb20gJy4uLy4uL2FjdGlvbnMvbG9hZE1lc3NhZ2VzJztcbmltcG9ydCBhcGkgZnJvbSAnLi4vaGVscGVycy9hcGknO1xuXG5jbGFzcyBHcm91cCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBsb2FkaW5nOiAnTG9hZGluZyBNZXNzYWdlcy4uLicsXG4gICAgICBzZWxlY3RlZEdyb3VwOiB7IG5hbWU6ICdMb2FkaW5nLi4uJyB9LFxuICAgICAgbWVzc2FnZXM6IHRoaXMucHJvcHMubWVzc2FnZXMsXG4gICAgICBmaWx0ZXI6ICcnLFxuICAgICAgb3JpZ2luYWxNZXNzYWdlczogdGhpcy5wcm9wcy5tZXNzYWdlc1xuICAgIH07XG4gICAgdGhpcy5maWx0ZXJNZXNzYWdlcyA9IHRoaXMuZmlsdGVyTWVzc2FnZXMuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBjb25zdCBpZCA9IGxvY2F0aW9uLmhyZWYuc3BsaXQoJy8nKVtsb2NhdGlvbi5ocmVmLnNwbGl0KCcvJykubGVuZ3RoIC0gMV07XG4gICAgYXBpKG51bGwsIGAvYXBpL2dyb3Vwcy8ke2lkfWAsICdHRVQnKVxuICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZEdyb3VwOiByZXN1bHQgfSk7XG4gICAgICBhcGkobnVsbCwgYC9hcGkvZ3JvdXBzLyR7aWR9L21lc3NhZ2VzYCwgJ0dFVCcpLnRoZW4oXG4gICAgICAgIChtZXNzYWdlcykgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiAnJywgbWVzc2FnZXMsIG9yaWdpbmFsTWVzc2FnZXM6IG1lc3NhZ2VzIH0pO1xuICAgICAgICAgIHRoaXMucHJvcHMubG9hZE1lc3NhZ2VzKG1lc3NhZ2VzKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmaWx0ZXJNZXNzYWdlcyhlKSB7XG4gICAgY29uc29sZS5sb2coJ09MRCBNRVNTQUdFUz4+Pj4nLCB0aGlzLnN0YXRlLm1lc3NhZ2VzKTtcbiAgICBjb25zb2xlLmxvZygnRklMVEVSPj4+JywgZS50YXJnZXQudmFsdWUpO1xuICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PT0gJ1VucmVhZCcpIHtcbiAgICAgIGNvbnN0IGVkaXRhYmxlID0gdGhpcy5zdGF0ZS5vcmlnaW5hbE1lc3NhZ2VzO1xuICAgICAgY29uc3QgbmV3TWVzc2FnZXMgPSBlZGl0YWJsZS5maWx0ZXIoKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgaWYgKCFtZXNzYWdlLnJlYWRCeS5zcGxpdCgnLCcpXG4gICAgICAgICAgLmluY2x1ZGVzKEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKVxuICAgICAgICAgICAgLmRhdGEudXNlcm5hbWUpKSB7XG4gICAgICAgICAgaWYgKG1lc3NhZ2UuZnJvbV91c2VyICE9PSBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSlcbiAgICAgICAgICAgIC5kYXRhLnVzZXJuYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZygnTkVXIE1FU1NBR0VTPj4+PicsIG5ld01lc3NhZ2VzKTtcbiAgICAgIHRcbiAgICAgIGNvbnNvbGUubG9nKCdNRVNTQUdFIFNUQVRFPj4+JywgdGhpcy5zdGF0ZS5tZXNzYWdlcyk7XG4gICAgICBjb25zb2xlLmxvZygnT1JJR0lOQUwgTUVTU0FHRSBTVEFURT4+PicsIHRoaXMuc3RhdGUub3JpZ2luYWxNZXNzYWdlcyk7XG4gICAgfVxuICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PT0gJ1JlYWQnKSB7XG4gICAgICBjb25zdCBlZGl0YWJsZSA9IHRoaXMuc3RhdGUub3JpZ2luYWxNZXNzYWdlcztcbiAgICAgIGNvbnN0IG5ld01lc3NhZ2VzID0gZWRpdGFibGUuZmlsdGVyKChtZXNzYWdlKSA9PiB7XG4gICAgICAgIGlmIChtZXNzYWdlLnJlYWRCeS5zcGxpdCgnLCcpXG4gICAgICAgICAgLmluY2x1ZGVzKEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKVxuICAgICAgICAgICAgLmRhdGEudXNlcm5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZygnTkVXIE1FU1NBR0VTPj4+PicsIG5ld01lc3NhZ2VzKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBtZXNzYWdlczogbmV3TWVzc2FnZXMgfSk7XG4gICAgICBjb25zb2xlLmxvZygnTUVTU0FHRSBTVEFURT4+PicsIHRoaXMuc3RhdGUubWVzc2FnZXMpO1xuICAgICAgY29uc29sZS5sb2coJ09SSUdJTkFMIE1FU1NBR0UgU1RBVEU+Pj4nLCB0aGlzLnN0YXRlLm9yaWdpbmFsTWVzc2FnZXMpO1xuICAgIH1cbiAgICBpZiAoZS50YXJnZXQudmFsdWUgPT09ICdBbGwnKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgbWVzc2FnZXM6IHRoaXMuc3RhdGUub3JpZ2luYWxNZXNzYWdlcyB9KTtcbiAgICAgIGNvbnNvbGUubG9nKCdNRVNTQUdFIFNUQVRFPj4+JywgdGhpcy5zdGF0ZS5tZXNzYWdlcyk7XG4gICAgICBjb25zb2xlLmxvZygnT1JJR0lOQUwgTUVTU0FHRSBTVEFURT4+PicsIHRoaXMuc3RhdGUub3JpZ2luYWxNZXNzYWdlcyk7XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoeyBmaWx0ZXI6IGUudGFyZ2V0LnZhbHVlIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZGVyLz5cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwYWdlLWNvbnRhaW5lciBjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPFNpZGVNZW51IGluZ3JvdXA9e3RydWV9Lz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24gcGFnZS1jb250ZW50IGFsaWduLXRvcCBwbC0wIGNvbCBtNyBsOFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dyb3VwLWhlYWRlci1jb250YWluZXInPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2dyb3VwLWhlYWRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgPGg1PnsgdGhpcy5zdGF0ZS5zZWxlY3RlZEdyb3VwLm5hbWUgfTwvaDU+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdtZXNzYWdlLWZpbHRlci1jb250YWluZXInPlxuICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiYnJvd3Nlci1kZWZhdWx0IGxlZnRcIlxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmZpbHRlcn1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5maWx0ZXJNZXNzYWdlc30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdBbGwnPkFsbDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nUmVhZCc+UmVhZDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nVW5yZWFkJz5VbnJlYWQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgeyB0aGlzLnN0YXRlLmxvYWRpbmcgIT09ICcnID8gdGhpcy5zdGF0ZS5sb2FkaW5nIDpcbiAgICAgICAgICAgICAgICAgICA8TWVzc2FnZXMgbWVzc2FnZXM9eyB0aGlzLnByb3BzLm1lc3NhZ2VzIH0gbG9hZE1lc3NhZ2VzPXsgdGhpcy5wcm9wcy5sb2FkTWVzc2FnZXMgfS8+IH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxGb290ZXIvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBtZXNzYWdlczogc3RhdGUubWVzc2FnZXMsXG4gIH07XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBsb2FkTWVzc2FnZXM6IGFsbE1lc3NhZ2VzID0+IGRpc3BhdGNoKGxvYWRNZXNzYWdlcyhhbGxNZXNzYWdlcykpXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShHcm91cCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL2dyb3VwLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==