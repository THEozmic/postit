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
      origin: origin
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
        var _newMessages = this.state.messages.filter(function (message) {
          if (message.readBy.split(',').includes(JSON.parse(sessionStorage.getItem('user')).data.username)) {
            return true;
          }
          return false;
        });
        console.log('NEW MESSAGES>>>>', _newMessages);
        this.setState({ Originalmessages: this.state.messages });
        this.setState({ messages: _newMessages });
      }
      if (this.state.filter === 'Read') {
        var _newMessages2 = this.state.messages.filter(function (message) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL2dyb3VwLmpzPzczYWEiXSwibmFtZXMiOlsiR3JvdXAiLCJwcm9wcyIsInN0YXRlIiwibG9hZGluZyIsInNlbGVjdGVkR3JvdXAiLCJuYW1lIiwibWVzc2FnZXMiLCJmaWx0ZXIiLCJvcmlnaW4iLCJmaWx0ZXJNZXNzYWdlcyIsImJpbmQiLCJpZCIsImxvY2F0aW9uIiwiaHJlZiIsInNwbGl0IiwibGVuZ3RoIiwidGhlbiIsInJlc3VsdCIsInNldFN0YXRlIiwibG9hZE1lc3NhZ2VzIiwiZSIsInRhcmdldCIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsIm5ld01lc3NhZ2VzIiwibWVzc2FnZSIsInJlYWRCeSIsImluY2x1ZGVzIiwiSlNPTiIsInBhcnNlIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiZGF0YSIsInVzZXJuYW1lIiwiZnJvbV91c2VyIiwiT3JpZ2luYWxtZXNzYWdlcyIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiYWxsTWVzc2FnZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxLOzs7QUFDSixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDhHQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsZUFBUyxxQkFERTtBQUVYQyxxQkFBZSxFQUFFQyxNQUFNLFlBQVIsRUFGSjtBQUdYQyxnQkFBVSxNQUFLTCxLQUFMLENBQVdLLFFBSFY7QUFJWEMsY0FBUSxFQUpHO0FBS1hDO0FBTFcsS0FBYjtBQU9BLFVBQUtDLGNBQUwsR0FBc0IsTUFBS0EsY0FBTCxDQUFvQkMsSUFBcEIsT0FBdEI7QUFUaUI7QUFVbEI7Ozs7eUNBRW9CO0FBQUE7O0FBQ25C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LEtBQUwsQ0FBV0MsT0FBdkMsR0FDRiw0Q0FBVSxVQUFXRyxRQUFyQjtBQWhCSDtBQUZGO0FBREY7QUFERixTQUZKO0FBMkJFO0FBM0JGLE9BREY7QUErQkQ7Ozs7RUF6R2lCLGdCQUFNK0IsUzs7QUE0RzFCLElBQU1DLGtCQUFrQixTQUFsQkEsZUFBa0IsQ0FBQ3BDLEtBQUQsRUFBVztBQUNqQyxTQUFPO0FBQ0xJLGNBQVVKLE1BQU1JO0FBRFgsR0FBUDtBQUdELENBSkQ7O0FBTUEsSUFBTWlDLHFCQUFxQixTQUFyQkEsa0JBQXFCLENBQUNDLFFBQUQsRUFBYztBQUN2QyxTQUFPO0FBQ0xyQixrQkFBYztBQUFBLGFBQWVxQixTQUFTLDRCQUFhQyxXQUFiLENBQVQsQ0FBZjtBQUFBO0FBRFQsR0FBUDtBQUdELENBSkQ7O2tCQU1lLHlCQUFRSCxlQUFSLEVBQXlCQyxrQkFBekIsRUFBNkN2QyxLQUE3QyxDIiwiZmlsZSI6IjAuNWFjMzMxNDFmMzNhOTZmMGMzNjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgRm9vdGVyLCBIZWFkZXIsIFNpZGVNZW51IH0gZnJvbSAnLi4vcHJlc2VudGF0aW9uYWwnO1xuaW1wb3J0IHsgTWVzc2FnZXMgfSBmcm9tICcuLyc7XG5pbXBvcnQgY2hhbmdlU2VsZWN0ZWRHcm91cEFjdGlvbiBmcm9tICcuLi8uLi9hY3Rpb25zL2NoYW5nZVNlbGVjdGVkR3JvdXAnO1xuaW1wb3J0IGxvYWRNZXNzYWdlcyBmcm9tICcuLi8uLi9hY3Rpb25zL2xvYWRNZXNzYWdlcyc7XG5pbXBvcnQgYXBpIGZyb20gJy4uL2hlbHBlcnMvYXBpJztcblxuY2xhc3MgR3JvdXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbG9hZGluZzogJ0xvYWRpbmcgTWVzc2FnZXMuLi4nLFxuICAgICAgc2VsZWN0ZWRHcm91cDogeyBuYW1lOiAnTG9hZGluZy4uLicgfSxcbiAgICAgIG1lc3NhZ2VzOiB0aGlzLnByb3BzLm1lc3NhZ2VzLFxuICAgICAgZmlsdGVyOiAnJyxcbiAgICAgIG9yaWdpblxuICAgIH07XG4gICAgdGhpcy5maWx0ZXJNZXNzYWdlcyA9IHRoaXMuZmlsdGVyTWVzc2FnZXMuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBjb25zdCBpZCA9IGxvY2F0aW9uLmhyZWYuc3BsaXQoJy8nKVtsb2NhdGlvbi5ocmVmLnNwbGl0KCcvJykubGVuZ3RoIC0gMV07XG4gICAgYXBpKG51bGwsIGAvYXBpL2dyb3Vwcy8ke2lkfWAsICdHRVQnKVxuICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZEdyb3VwOiByZXN1bHQgfSk7XG4gICAgICBhcGkobnVsbCwgYC9hcGkvZ3JvdXBzLyR7aWR9L21lc3NhZ2VzYCwgJ0dFVCcpLnRoZW4oXG4gICAgICAgIChtZXNzYWdlcykgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiAnJywgbWVzc2FnZXMgfSk7XG4gICAgICAgICAgdGhpcy5wcm9wcy5sb2FkTWVzc2FnZXMobWVzc2FnZXMpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZpbHRlck1lc3NhZ2VzKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZmlsdGVyOiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgICBjb25zb2xlLmxvZygnRklMVEVSPj4+JywgdGhpcy5zdGF0ZS5maWx0ZXIpO1xuICAgIGlmICh0aGlzLnN0YXRlLmZpbHRlciA9PT0gJ1VucmVhZCcpIHtcbiAgICAgIGNvbnN0IG5ld01lc3NhZ2VzID0gdGhpcy5zdGF0ZS5tZXNzYWdlcy5maWx0ZXIoKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgaWYgKCFtZXNzYWdlLnJlYWRCeS5zcGxpdCgnLCcpXG4gICAgICAgICAgLmluY2x1ZGVzKEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKVxuICAgICAgICAgICAgLmRhdGEudXNlcm5hbWUpKSB7XG4gICAgICAgICAgaWYgKG1lc3NhZ2UuZnJvbV91c2VyICE9PSBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSlcbiAgICAgICAgICAgIC5kYXRhLnVzZXJuYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZygnTkVXIE1FU1NBR0VTPj4+PicsIG5ld01lc3NhZ2VzKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBtZXNzYWdlczogbmV3TWVzc2FnZXMgfSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RhdGUuZmlsdGVyID09PSAnUmVhZCcpIHtcbiAgICAgIGNvbnN0IG5ld01lc3NhZ2VzID0gdGhpcy5zdGF0ZS5tZXNzYWdlcy5maWx0ZXIoKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgaWYgKG1lc3NhZ2UucmVhZEJ5LnNwbGl0KCcsJylcbiAgICAgICAgICAuaW5jbHVkZXMoSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpXG4gICAgICAgICAgICAuZGF0YS51c2VybmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKCdORVcgTUVTU0FHRVM+Pj4+JywgbmV3TWVzc2FnZXMpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IE9yaWdpbmFsbWVzc2FnZXM6IHRoaXMuc3RhdGUubWVzc2FnZXMgfSk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgbWVzc2FnZXM6IG5ld01lc3NhZ2VzIH0pO1xuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5maWx0ZXIgPT09ICdSZWFkJykge1xuICAgICAgY29uc3QgbmV3TWVzc2FnZXMgPSB0aGlzLnN0YXRlLm1lc3NhZ2VzLmZpbHRlcigobWVzc2FnZSkgPT4ge1xuICAgICAgICBpZiAobWVzc2FnZS5yZWFkQnkuc3BsaXQoJywnKVxuICAgICAgICAgIC5pbmNsdWRlcyhKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSlcbiAgICAgICAgICAgIC5kYXRhLnVzZXJuYW1lKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2coJ05FVyBNRVNTQUdFUz4+Pj4nLCBuZXdNZXNzYWdlcyk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgbWVzc2FnZXM6IG5ld01lc3NhZ2VzIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG1lc3NhZ2VzIH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZGVyLz5cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwYWdlLWNvbnRhaW5lciBjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPFNpZGVNZW51IGluZ3JvdXA9e3RydWV9Lz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24gcGFnZS1jb250ZW50IGFsaWduLXRvcCBwbC0wIGNvbCBtNyBsOCB4bDlcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncm91cC1oZWFkZXItY29udGFpbmVyJz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdncm91cC1oZWFkZXInPlxuICAgICAgICAgICAgICAgICAgICAgIDxoNT57IHRoaXMuc3RhdGUuc2VsZWN0ZWRHcm91cC5uYW1lIH08L2g1PlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nbWVzc2FnZS1maWx0ZXItY29udGFpbmVyJz5cbiAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImJyb3dzZXItZGVmYXVsdCBsZWZ0XCJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5maWx0ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuZmlsdGVyTWVzc2FnZXN9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nQWxsJz5BbGw8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J1JlYWQnPlJlYWQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J1VucmVhZCc+VW5yZWFkPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgIHsgdGhpcy5zdGF0ZS5sb2FkaW5nICE9PSAnJyA/IHRoaXMuc3RhdGUubG9hZGluZyA6XG4gICAgICAgICAgICAgICAgICAgPE1lc3NhZ2VzIG1lc3NhZ2VzPXsgbWVzc2FnZXMgfS8+IH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxGb290ZXIvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBtZXNzYWdlczogc3RhdGUubWVzc2FnZXMsXG4gIH07XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBsb2FkTWVzc2FnZXM6IGFsbE1lc3NhZ2VzID0+IGRpc3BhdGNoKGxvYWRNZXNzYWdlcyhhbGxNZXNzYWdlcykpXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShHcm91cCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL2dyb3VwLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==