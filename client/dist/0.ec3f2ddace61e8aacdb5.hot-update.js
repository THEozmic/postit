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
      filter: ''
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

      if (this.state.filter === 'Unread') {
        var _newMessages = this.state.messages.filter(function (message) {
          if (!message.readBy.split(',').includes(JSON.parse(sessionStorage.getItem('user')).data.username)) {
            if (message.from_user !== JSON.parse(sessionStorage.getItem('user')).data.username) {
              return true;
            }
          }
          return false;
        });
        console.log('NEW MESSAGES>>>>', _newMessages);
        this.setState({ messages: _newMessages });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL2dyb3VwLmpzPzczYWEiXSwibmFtZXMiOlsiR3JvdXAiLCJwcm9wcyIsInN0YXRlIiwibG9hZGluZyIsInNlbGVjdGVkR3JvdXAiLCJuYW1lIiwibWVzc2FnZXMiLCJmaWx0ZXIiLCJmaWx0ZXJNZXNzYWdlcyIsImJpbmQiLCJpZCIsImxvY2F0aW9uIiwiaHJlZiIsInNwbGl0IiwibGVuZ3RoIiwidGhlbiIsInJlc3VsdCIsInNldFN0YXRlIiwibG9hZE1lc3NhZ2VzIiwiZSIsInRhcmdldCIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsIm5ld01lc3NhZ2VzIiwibWVzc2FnZSIsInJlYWRCeSIsImluY2x1ZGVzIiwiSlNPTiIsInBhcnNlIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiZGF0YSIsInVzZXJuYW1lIiwiZnJvbV91c2VyIiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJhbGxNZXNzYWdlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLEs7OztBQUNKLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxlQUFTLHFCQURFO0FBRVhDLHFCQUFlLEVBQUVDLE1BQU0sWUFBUixFQUZKO0FBR1hDLGdCQUFVLE1BQUtMLEtBQUwsQ0FBV0ssUUFIVjtBQUlYQyxjQUFRO0FBSkcsS0FBYjtBQU1BLFVBQUtDLGNBQUwsR0FBc0IsTUFBS0EsY0FBTCxDQUFvQkMsSUFBcEIsT0FBdEI7QUFSaUI7QUFTbEI7Ozs7eUNBRW9CO0FBQUE7O0FBQ25CLFVBQU1DLEtBQUtDLFNBQVNDLElBQVQsQ0FBY0MsS0FBZCxDQUFv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ZSI6IjAuZWMzZjJkZGFjZTYxZThhYWNkYjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgRm9vdGVyLCBIZWFkZXIsIFNpZGVNZW51IH0gZnJvbSAnLi4vcHJlc2VudGF0aW9uYWwnO1xuaW1wb3J0IHsgTWVzc2FnZXMgfSBmcm9tICcuLyc7XG5pbXBvcnQgY2hhbmdlU2VsZWN0ZWRHcm91cEFjdGlvbiBmcm9tICcuLi8uLi9hY3Rpb25zL2NoYW5nZVNlbGVjdGVkR3JvdXAnO1xuaW1wb3J0IGxvYWRNZXNzYWdlcyBmcm9tICcuLi8uLi9hY3Rpb25zL2xvYWRNZXNzYWdlcyc7XG5pbXBvcnQgYXBpIGZyb20gJy4uL2hlbHBlcnMvYXBpJztcblxuY2xhc3MgR3JvdXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbG9hZGluZzogJ0xvYWRpbmcgTWVzc2FnZXMuLi4nLFxuICAgICAgc2VsZWN0ZWRHcm91cDogeyBuYW1lOiAnTG9hZGluZy4uLicgfSxcbiAgICAgIG1lc3NhZ2VzOiB0aGlzLnByb3BzLm1lc3NhZ2VzLFxuICAgICAgZmlsdGVyOiAnJ1xuICAgIH07XG4gICAgdGhpcy5maWx0ZXJNZXNzYWdlcyA9IHRoaXMuZmlsdGVyTWVzc2FnZXMuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBjb25zdCBpZCA9IGxvY2F0aW9uLmhyZWYuc3BsaXQoJy8nKVtsb2NhdGlvbi5ocmVmLnNwbGl0KCcvJykubGVuZ3RoIC0gMV07XG4gICAgYXBpKG51bGwsIGAvYXBpL2dyb3Vwcy8ke2lkfWAsICdHRVQnKVxuICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZEdyb3VwOiByZXN1bHQgfSk7XG4gICAgICBhcGkobnVsbCwgYC9hcGkvZ3JvdXBzLyR7aWR9L21lc3NhZ2VzYCwgJ0dFVCcpLnRoZW4oXG4gICAgICAgIChtZXNzYWdlcykgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiAnJywgbWVzc2FnZXMgfSk7XG4gICAgICAgICAgdGhpcy5wcm9wcy5sb2FkTWVzc2FnZXMobWVzc2FnZXMpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZpbHRlck1lc3NhZ2VzKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZmlsdGVyOiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgICBjb25zb2xlLmxvZygnRklMVEVSPj4+JywgdGhpcy5zdGF0ZS5maWx0ZXIpO1xuICAgIGlmICh0aGlzLnN0YXRlLmZpbHRlciA9PT0gJ1VucmVhZCcpIHtcbiAgICAgIGNvbnN0IG5ld01lc3NhZ2VzID0gdGhpcy5zdGF0ZS5tZXNzYWdlcy5maWx0ZXIoKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgaWYgKCFtZXNzYWdlLnJlYWRCeS5zcGxpdCgnLCcpXG4gICAgICAgICAgLmluY2x1ZGVzKEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKVxuICAgICAgICAgICAgLmRhdGEudXNlcm5hbWUpKSB7XG4gICAgICAgICAgaWYgKG1lc3NhZ2UuZnJvbV91c2VyICE9PSBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSlcbiAgICAgICAgICAgIC5kYXRhLnVzZXJuYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZygnTkVXIE1FU1NBR0VTPj4+PicsIG5ld01lc3NhZ2VzKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBtZXNzYWdlczogbmV3TWVzc2FnZXMgfSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RhdGUuZmlsdGVyID09PSAnVW5yZWFkJykge1xuICAgICAgY29uc3QgbmV3TWVzc2FnZXMgPSB0aGlzLnN0YXRlLm1lc3NhZ2VzLmZpbHRlcigobWVzc2FnZSkgPT4ge1xuICAgICAgICBpZiAoIW1lc3NhZ2UucmVhZEJ5LnNwbGl0KCcsJylcbiAgICAgICAgICAuaW5jbHVkZXMoSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpXG4gICAgICAgICAgICAuZGF0YS51c2VybmFtZSkpIHtcbiAgICAgICAgICBpZiAobWVzc2FnZS5mcm9tX3VzZXIgIT09IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKVxuICAgICAgICAgICAgLmRhdGEudXNlcm5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKCdORVcgTUVTU0FHRVM+Pj4+JywgbmV3TWVzc2FnZXMpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1lc3NhZ2VzOiBuZXdNZXNzYWdlcyB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBtZXNzYWdlcyB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWRlci8+XG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicGFnZS1jb250YWluZXIgY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxTaWRlTWVudSBpbmdyb3VwPXt0cnVlfS8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uIHBhZ2UtY29udGVudCBhbGlnbi10b3AgcGwtMCBjb2wgbTcgbDggeGw5XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JvdXAtaGVhZGVyLWNvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZ3JvdXAtaGVhZGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICA8aDU+eyB0aGlzLnN0YXRlLnNlbGVjdGVkR3JvdXAubmFtZSB9PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J21lc3NhZ2UtZmlsdGVyLWNvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJicm93c2VyLWRlZmF1bHQgbGVmdFwiXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZmlsdGVyfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmZpbHRlck1lc3NhZ2VzfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J0FsbCc+QWxsPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdSZWFkJz5SZWFkPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdVbnJlYWQnPlVucmVhZDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICB7IHRoaXMuc3RhdGUubG9hZGluZyAhPT0gJycgPyB0aGlzLnN0YXRlLmxvYWRpbmcgOlxuICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlcyBtZXNzYWdlcz17IG1lc3NhZ2VzIH0vPiB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8Rm9vdGVyLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgbWVzc2FnZXM6IHN0YXRlLm1lc3NhZ2VzLFxuICB9O1xufTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgbG9hZE1lc3NhZ2VzOiBhbGxNZXNzYWdlcyA9PiBkaXNwYXRjaChsb2FkTWVzc2FnZXMoYWxsTWVzc2FnZXMpKVxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoR3JvdXApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2pzL2NvbXBvbmVudHMvY29udGFpbmVycy9ncm91cC5qcyJdLCJzb3VyY2VSb290IjoiIn0=