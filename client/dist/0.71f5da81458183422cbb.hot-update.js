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
      this.setState({ filter: e.target.value });
      console.log('FILTER>>>', this.state.filter);
      if (this.state.filter === 'Unread') {
        var newMessages = this.state.messages.filter(function (message) {
          if (!message.readBy.split(',').includes(JSON.parse(sessionStorage.getItem('user')).data.username)) {
            if (message.from_user !== JSON.parse(sessionStorage.getItem('user')).data.username) {
              return true;
            }
          }
          return false;
        });
        console.log('NEW MESSAGES>>>>', newMessages);
        this.setState({ messages: newMessages });
      }

      if (this.state.filter === 'Read') {
        var _newMessages = this.state.originalmessages.filter(function (message) {
          if (message.readBy.split(',').includes(JSON.parse(sessionStorage.getItem('user')).data.username)) {
            return true;
          }
          return false;
        });
        console.log('NEW MESSAGES>>>>', _newMessages);
        this.setState({ messages: _newMessages });
      }
      if (this.state.filter === 'Read') {
        var _newMessages2 = this.state.originalmessages.filter(function (message) {
          if (message.readBy.split(',').includes(JSON.parse(sessionStorage.getItem('user')).data.username)) {
            return true;
          }
          return false;
        });
        console.log('NEW MESSAGES>>>>', _newMessages2);
        this.setState({ messages: _newMessages2 });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var messages = this.state.messages;

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
                this.state.loading !== '' ? this.state.loading : _react2.default.createElement(_.Messages, { messages: messages })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL2dyb3VwLmpzPzczYWEiXSwibmFtZXMiOlsiR3JvdXAiLCJwcm9wcyIsInN0YXRlIiwibG9hZGluZyIsInNlbGVjdGVkR3JvdXAiLCJuYW1lIiwibWVzc2FnZXMiLCJmaWx0ZXIiLCJvcmlnaW5hbG1lc3NhZ2VzIiwiZmlsdGVyTWVzc2FnZXMiLCJiaW5kIiwiaWQiLCJsb2NhdGlvbiIsImhyZWYiLCJzcGxpdCIsImxlbmd0aCIsInRoZW4iLCJyZXN1bHQiLCJzZXRTdGF0ZSIsImxvYWRNZXNzYWdlcyIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJuZXdNZXNzYWdlcyIsIm1lc3NhZ2UiLCJyZWFkQnkiLCJpbmNsdWRlcyIsIkpTT04iLCJwYXJzZSIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsImRhdGEiLCJ1c2VybmFtZSIsImZyb21fdXNlciIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiYWxsTWVzc2FnZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxLOzs7QUFDSixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDhHQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsZUFBUyxxQkFERTtBQUVYQyxxQkFBZSxFQUFFQyxNQUFNLFlBQVIsRUFGSjtBQUdYQyxnQkFBVSxNQUFLTCxLQUFMLENBQVdLLFFBSFY7QUFJWEMsY0FBUSxFQUpHO0FBS1hDLHdCQUFrQixNQUFLUCxLQUFMLENBQVdLO0FBTGxCLEtBQWI7QUFPQSxVQUFLRyxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0JDLElBQXBCLE9BQXRCO0FBVGlCO0FBVWxCOzs7O3lD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O0FBRkY7QUFERjtBQURGLFNBRko7QUEyQkU7QUEzQkYsT0FERjtBQStCRDs7OztFQXhHaUIsZ0JBQU04QixTOztBQTJHMUIsSUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDbkMsS0FBRCxFQUFXO0FBQ2pDLFNBQU87QUFDTEksY0FBVUosTUFBTUk7QUFEWCxHQUFQO0FBR0QsQ0FKRDs7QUFNQSxJQUFNZ0MscUJBQXFCLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRCxFQUFjO0FBQ3ZDLFNBQU87QUFDTHBCLGtCQUFjO0FBQUEsYUFBZW9CLFNBQVMsNEJBQWFDLFdBQWIsQ0FBVCxDQUFmO0FBQUE7QUFEVCxHQUFQO0FBR0QsQ0FKRDs7a0JBTWUseUJBQVFILGVBQVIsRUFBeUJDLGtCQUF6QixFQUE2Q3RDLEtBQTdDLEMiLCJmaWxlIjoiMC43MWY1ZGE4MTQ1ODE4MzQyMmNiYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBGb290ZXIsIEhlYWRlciwgU2lkZU1lbnUgfSBmcm9tICcuLi9wcmVzZW50YXRpb25hbCc7XG5pbXBvcnQgeyBNZXNzYWdlcyB9IGZyb20gJy4vJztcbmltcG9ydCBjaGFuZ2VTZWxlY3RlZEdyb3VwQWN0aW9uIGZyb20gJy4uLy4uL2FjdGlvbnMvY2hhbmdlU2VsZWN0ZWRHcm91cCc7XG5pbXBvcnQgbG9hZE1lc3NhZ2VzIGZyb20gJy4uLy4uL2FjdGlvbnMvbG9hZE1lc3NhZ2VzJztcbmltcG9ydCBhcGkgZnJvbSAnLi4vaGVscGVycy9hcGknO1xuXG5jbGFzcyBHcm91cCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBsb2FkaW5nOiAnTG9hZGluZyBNZXNzYWdlcy4uLicsXG4gICAgICBzZWxlY3RlZEdyb3VwOiB7IG5hbWU6ICdMb2FkaW5nLi4uJyB9LFxuICAgICAgbWVzc2FnZXM6IHRoaXMucHJvcHMubWVzc2FnZXMsXG4gICAgICBmaWx0ZXI6ICcnLFxuICAgICAgb3JpZ2luYWxtZXNzYWdlczogdGhpcy5wcm9wcy5tZXNzYWdlc1xuICAgIH07XG4gICAgdGhpcy5maWx0ZXJNZXNzYWdlcyA9IHRoaXMuZmlsdGVyTWVzc2FnZXMuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBjb25zdCBpZCA9IGxvY2F0aW9uLmhyZWYuc3BsaXQoJy8nKVtsb2NhdGlvbi5ocmVmLnNwbGl0KCcvJykubGVuZ3RoIC0gMV07XG4gICAgYXBpKG51bGwsIGAvYXBpL2dyb3Vwcy8ke2lkfWAsICdHRVQnKVxuICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZEdyb3VwOiByZXN1bHQgfSk7XG4gICAgICBhcGkobnVsbCwgYC9hcGkvZ3JvdXBzLyR7aWR9L21lc3NhZ2VzYCwgJ0dFVCcpLnRoZW4oXG4gICAgICAgIChtZXNzYWdlcykgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiAnJywgbWVzc2FnZXMgfSk7XG4gICAgICAgICAgdGhpcy5wcm9wcy5sb2FkTWVzc2FnZXMobWVzc2FnZXMpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZpbHRlck1lc3NhZ2VzKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZmlsdGVyOiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgICBjb25zb2xlLmxvZygnRklMVEVSPj4+JywgdGhpcy5zdGF0ZS5maWx0ZXIpO1xuICAgIGlmICh0aGlzLnN0YXRlLmZpbHRlciA9PT0gJ1VucmVhZCcpIHtcbiAgICAgIGNvbnN0IG5ld01lc3NhZ2VzID0gdGhpcy5zdGF0ZS5tZXNzYWdlcy5maWx0ZXIoKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgaWYgKCFtZXNzYWdlLnJlYWRCeS5zcGxpdCgnLCcpXG4gICAgICAgICAgLmluY2x1ZGVzKEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKVxuICAgICAgICAgICAgLmRhdGEudXNlcm5hbWUpKSB7XG4gICAgICAgICAgaWYgKG1lc3NhZ2UuZnJvbV91c2VyICE9PSBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSlcbiAgICAgICAgICAgIC5kYXRhLnVzZXJuYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZygnTkVXIE1FU1NBR0VTPj4+PicsIG5ld01lc3NhZ2VzKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBtZXNzYWdlczogbmV3TWVzc2FnZXMgfSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RhdGUuZmlsdGVyID09PSAnUmVhZCcpIHtcbiAgICAgIGNvbnN0IG5ld01lc3NhZ2VzID0gdGhpcy5zdGF0ZS5vcmlnaW5hbG1lc3NhZ2VzLmZpbHRlcigobWVzc2FnZSkgPT4ge1xuICAgICAgICBpZiAobWVzc2FnZS5yZWFkQnkuc3BsaXQoJywnKVxuICAgICAgICAgIC5pbmNsdWRlcyhKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSlcbiAgICAgICAgICAgIC5kYXRhLnVzZXJuYW1lKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2coJ05FVyBNRVNTQUdFUz4+Pj4nLCBuZXdNZXNzYWdlcyk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgbWVzc2FnZXM6IG5ld01lc3NhZ2VzIH0pO1xuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5maWx0ZXIgPT09ICdSZWFkJykge1xuICAgICAgY29uc3QgbmV3TWVzc2FnZXMgPSB0aGlzLnN0YXRlLm9yaWdpbmFsbWVzc2FnZXMuZmlsdGVyKChtZXNzYWdlKSA9PiB7XG4gICAgICAgIGlmIChtZXNzYWdlLnJlYWRCeS5zcGxpdCgnLCcpXG4gICAgICAgICAgLmluY2x1ZGVzKEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKVxuICAgICAgICAgICAgLmRhdGEudXNlcm5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZygnTkVXIE1FU1NBR0VTPj4+PicsIG5ld01lc3NhZ2VzKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBtZXNzYWdlczogbmV3TWVzc2FnZXMgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbWVzc2FnZXMgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkZXIvPlxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInBhZ2UtY29udGFpbmVyIGNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8U2lkZU1lbnUgaW5ncm91cD17dHJ1ZX0vPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbiBwYWdlLWNvbnRlbnQgYWxpZ24tdG9wIHBsLTAgY29sIG03IGw4IHhsOVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dyb3VwLWhlYWRlci1jb250YWluZXInPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2dyb3VwLWhlYWRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgPGg1PnsgdGhpcy5zdGF0ZS5zZWxlY3RlZEdyb3VwLm5hbWUgfTwvaDU+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdtZXNzYWdlLWZpbHRlci1jb250YWluZXInPlxuICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiYnJvd3Nlci1kZWZhdWx0IGxlZnRcIlxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmZpbHRlcn1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5maWx0ZXJNZXNzYWdlc30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdBbGwnPkFsbDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nUmVhZCc+UmVhZDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nVW5yZWFkJz5VbnJlYWQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgeyB0aGlzLnN0YXRlLmxvYWRpbmcgIT09ICcnID8gdGhpcy5zdGF0ZS5sb2FkaW5nIDpcbiAgICAgICAgICAgICAgICAgICA8TWVzc2FnZXMgbWVzc2FnZXM9eyBtZXNzYWdlcyB9Lz4gfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPEZvb3Rlci8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIG1lc3NhZ2VzOiBzdGF0ZS5tZXNzYWdlcyxcbiAgfTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICByZXR1cm4ge1xuICAgIGxvYWRNZXNzYWdlczogYWxsTWVzc2FnZXMgPT4gZGlzcGF0Y2gobG9hZE1lc3NhZ2VzKGFsbE1lc3NhZ2VzKSlcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEdyb3VwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9qcy9jb21wb25lbnRzL2NvbnRhaW5lcnMvZ3JvdXAuanMiXSwic291cmNlUm9vdCI6IiJ9