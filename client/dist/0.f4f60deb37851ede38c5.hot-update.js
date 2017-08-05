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
      }
      if (e.target.value === 'Read') {
        var _newMessages2 = this.state.originalmessages.filter(function (message) {
          if (message.readBy.split(',').includes(JSON.parse(sessionStorage.getItem('user')).data.username)) {
            return true;
          }
          return false;
        });
        console.log('NEW MESSAGES>>>>', _newMessages2);
        this.setState({ messages: _newMessages2 });
      }
      if (e.target.value === 'All') {
        this.setState({ messages: this.state.originalmessages });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL2dyb3VwLmpzPzczYWEiXSwibmFtZXMiOlsiR3JvdXAiLCJwcm9wcyIsInN0YXRlIiwibG9hZGluZyIsInNlbGVjdGVkR3JvdXAiLCJuYW1lIiwibWVzc2FnZXMiLCJmaWx0ZXIiLCJvcmlnaW5hbG1lc3NhZ2VzIiwiZmlsdGVyTWVzc2FnZXMiLCJiaW5kIiwiaWQiLCJsb2NhdGlvbiIsImhyZWYiLCJzcGxpdCIsImxlbmd0aCIsInRoZW4iLCJyZXN1bHQiLCJzZXRTdGF0ZSIsImxvYWRNZXNzYWdlcyIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJuZXdNZXNzYWdlcyIsIm1lc3NhZ2UiLCJyZWFkQnkiLCJpbmNsdWRlcyIsIkpTT04iLCJwYXJzZSIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsImRhdGEiLCJ1c2VybmFtZSIsImZyb21fdXNlciIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiYWxsTWVzc2FnZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxLOzs7QUFDSixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDhHQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsZUFBUyxxQkFERTtBQUVYQyxxQkFBZSxFQUFFQyxNQUFNLFlBQVIsRUFGSjtBQUdYQyxnQkFBVSxNQUFLTCxLQUFMLENBQVdLLFFBSFY7QUFJWEMsY0FBUSxFQUpHO0FBS1hDLHdCQUFrQixNQUFLUCxLQUFMLENBQVdLO0FBTGxCLEtBQWI7QUFPQSxVQUFLRyxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0JDLElBQXBCLE9BQXRCO0FBVGlCO0FBVWxCOzs7O3lD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TEY7QUFERjtBQUpGLGlCQURGO0FBZUsscUJBQUtQLEtBQUwsQ0FBV0MsT0FBWCxLQUF1QixFQUF2QixHQUE0QixLQUFLRCxLQUFMLENBQVdDLE9BQXZDLEdBQ0YsNENBQVUsVUFBV0csUUFBckI7QUFoQkg7QUFGRjtBQURGO0FBREYsU0FGSjtBQTJCRTtBQTNCRixPQURGO0FBK0JEOzs7O0VBM0dpQixnQkFBTThCLFM7O0FBOEcxQixJQUFNQyxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNuQyxLQUFELEVBQVc7QUFDakMsU0FBTztBQUNMSSxjQUFVSixNQUFNSTtBQURYLEdBQVA7QUFHRCxDQUpEOztBQU1BLElBQU1nQyxxQkFBcUIsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFELEVBQWM7QUFDdkMsU0FBTztBQUNMcEIsa0JBQWM7QUFBQSxhQUFlb0IsU0FBUyw0QkFBYUMsV0FBYixDQUFULENBQWY7QUFBQTtBQURULEdBQVA7QUFHRCxDQUpEOztrQkFNZSx5QkFBUUgsZUFBUixFQUF5QkMsa0JBQXpCLEVBQTZDdEMsS0FBN0MsQyIsImZpbGUiOiIwLmY0ZjYwZGViMzc4NTFlZGUzOGM1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IEZvb3RlciwgSGVhZGVyLCBTaWRlTWVudSB9IGZyb20gJy4uL3ByZXNlbnRhdGlvbmFsJztcbmltcG9ydCB7IE1lc3NhZ2VzIH0gZnJvbSAnLi8nO1xuaW1wb3J0IGNoYW5nZVNlbGVjdGVkR3JvdXBBY3Rpb24gZnJvbSAnLi4vLi4vYWN0aW9ucy9jaGFuZ2VTZWxlY3RlZEdyb3VwJztcbmltcG9ydCBsb2FkTWVzc2FnZXMgZnJvbSAnLi4vLi4vYWN0aW9ucy9sb2FkTWVzc2FnZXMnO1xuaW1wb3J0IGFwaSBmcm9tICcuLi9oZWxwZXJzL2FwaSc7XG5cbmNsYXNzIEdyb3VwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxvYWRpbmc6ICdMb2FkaW5nIE1lc3NhZ2VzLi4uJyxcbiAgICAgIHNlbGVjdGVkR3JvdXA6IHsgbmFtZTogJ0xvYWRpbmcuLi4nIH0sXG4gICAgICBtZXNzYWdlczogdGhpcy5wcm9wcy5tZXNzYWdlcyxcbiAgICAgIGZpbHRlcjogJycsXG4gICAgICBvcmlnaW5hbG1lc3NhZ2VzOiB0aGlzLnByb3BzLm1lc3NhZ2VzXG4gICAgfTtcbiAgICB0aGlzLmZpbHRlck1lc3NhZ2VzID0gdGhpcy5maWx0ZXJNZXNzYWdlcy5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIGNvbnN0IGlkID0gbG9jYXRpb24uaHJlZi5zcGxpdCgnLycpW2xvY2F0aW9uLmhyZWYuc3BsaXQoJy8nKS5sZW5ndGggLSAxXTtcbiAgICBhcGkobnVsbCwgYC9hcGkvZ3JvdXBzLyR7aWR9YCwgJ0dFVCcpXG4gICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkR3JvdXA6IHJlc3VsdCB9KTtcbiAgICAgIGFwaShudWxsLCBgL2FwaS9ncm91cHMvJHtpZH0vbWVzc2FnZXNgLCAnR0VUJykudGhlbihcbiAgICAgICAgKG1lc3NhZ2VzKSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6ICcnLCBtZXNzYWdlcyB9KTtcbiAgICAgICAgICB0aGlzLnByb3BzLmxvYWRNZXNzYWdlcyhtZXNzYWdlcyk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZmlsdGVyTWVzc2FnZXMoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBmaWx0ZXI6IGUudGFyZ2V0LnZhbHVlIH0pO1xuICAgIGNvbnNvbGUubG9nKCdGSUxURVI+Pj4nLCB0aGlzLnN0YXRlLmZpbHRlcik7XG4gICAgaWYgKGUudGFyZ2V0LnZhbHVlID09PSAnVW5yZWFkJykge1xuICAgICAgY29uc3QgbmV3TWVzc2FnZXMgPSB0aGlzLnN0YXRlLm9yaWdpbmFsbWVzc2FnZXMuZmlsdGVyKChtZXNzYWdlKSA9PiB7XG4gICAgICAgIGlmICghbWVzc2FnZS5yZWFkQnkuc3BsaXQoJywnKVxuICAgICAgICAgIC5pbmNsdWRlcyhKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSlcbiAgICAgICAgICAgIC5kYXRhLnVzZXJuYW1lKSkge1xuICAgICAgICAgIGlmIChtZXNzYWdlLmZyb21fdXNlciAhPT0gSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpXG4gICAgICAgICAgICAuZGF0YS51c2VybmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2coJ05FVyBNRVNTQUdFUz4+Pj4nLCBuZXdNZXNzYWdlcyk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgbWVzc2FnZXM6IG5ld01lc3NhZ2VzIH0pO1xuICAgIH1cblxuICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PT0gJ1JlYWQnKSB7XG4gICAgICBjb25zdCBuZXdNZXNzYWdlcyA9IHRoaXMuc3RhdGUub3JpZ2luYWxtZXNzYWdlcy5maWx0ZXIoKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgaWYgKG1lc3NhZ2UucmVhZEJ5LnNwbGl0KCcsJylcbiAgICAgICAgICAuaW5jbHVkZXMoSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpXG4gICAgICAgICAgICAuZGF0YS51c2VybmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKCdORVcgTUVTU0FHRVM+Pj4+JywgbmV3TWVzc2FnZXMpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1lc3NhZ2VzOiBuZXdNZXNzYWdlcyB9KTtcbiAgICB9XG4gICAgaWYgKGUudGFyZ2V0LnZhbHVlID09PSAnUmVhZCcpIHtcbiAgICAgIGNvbnN0IG5ld01lc3NhZ2VzID0gdGhpcy5zdGF0ZS5vcmlnaW5hbG1lc3NhZ2VzLmZpbHRlcigobWVzc2FnZSkgPT4ge1xuICAgICAgICBpZiAobWVzc2FnZS5yZWFkQnkuc3BsaXQoJywnKVxuICAgICAgICAgIC5pbmNsdWRlcyhKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSlcbiAgICAgICAgICAgIC5kYXRhLnVzZXJuYW1lKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2coJ05FVyBNRVNTQUdFUz4+Pj4nLCBuZXdNZXNzYWdlcyk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgbWVzc2FnZXM6IG5ld01lc3NhZ2VzIH0pO1xuICAgIH1cbiAgICBpZiAoZS50YXJnZXQudmFsdWUgPT09ICdBbGwnKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgbWVzc2FnZXM6IHRoaXMuc3RhdGUub3JpZ2luYWxtZXNzYWdlcyB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBtZXNzYWdlcyB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWRlci8+XG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicGFnZS1jb250YWluZXIgY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxTaWRlTWVudSBpbmdyb3VwPXt0cnVlfS8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uIHBhZ2UtY29udGVudCBhbGlnbi10b3AgcGwtMCBjb2wgbTcgbDggeGw5XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JvdXAtaGVhZGVyLWNvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZ3JvdXAtaGVhZGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICA8aDU+eyB0aGlzLnN0YXRlLnNlbGVjdGVkR3JvdXAubmFtZSB9PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J21lc3NhZ2UtZmlsdGVyLWNvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJicm93c2VyLWRlZmF1bHQgbGVmdFwiXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZmlsdGVyfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmZpbHRlck1lc3NhZ2VzfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J0FsbCc+QWxsPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdSZWFkJz5SZWFkPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdVbnJlYWQnPlVucmVhZDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICB7IHRoaXMuc3RhdGUubG9hZGluZyAhPT0gJycgPyB0aGlzLnN0YXRlLmxvYWRpbmcgOlxuICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlcyBtZXNzYWdlcz17IG1lc3NhZ2VzIH0vPiB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8Rm9vdGVyLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgbWVzc2FnZXM6IHN0YXRlLm1lc3NhZ2VzLFxuICB9O1xufTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgbG9hZE1lc3NhZ2VzOiBhbGxNZXNzYWdlcyA9PiBkaXNwYXRjaChsb2FkTWVzc2FnZXMoYWxsTWVzc2FnZXMpKVxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoR3JvdXApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2pzL2NvbXBvbmVudHMvY29udGFpbmVycy9ncm91cC5qcyJdLCJzb3VyY2VSb290IjoiIn0=