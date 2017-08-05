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
      if (this.state.filter === 'Unread') {
        this.state.messages.filter(function (message) {
          if (!message.readBy.split(',').includes(sessionStorage.getItem('user').data.username)) {
            if (message.from_user !== sessionStorage.getItem('user').data.username) {
              return true;
            }
          }
          return false;
        });
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
                        null,
                        'All'
                      ),
                      _react2.default.createElement(
                        'option',
                        null,
                        'Read'
                      ),
                      _react2.default.createElement(
                        'option',
                        null,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL2dyb3VwLmpzPzczYWEiXSwibmFtZXMiOlsiR3JvdXAiLCJwcm9wcyIsInN0YXRlIiwibG9hZGluZyIsInNlbGVjdGVkR3JvdXAiLCJuYW1lIiwibWVzc2FnZXMiLCJmaWx0ZXIiLCJmaWx0ZXJNZXNzYWdlcyIsImJpbmQiLCJpZCIsImxvY2F0aW9uIiwiaHJlZiIsInNwbGl0IiwibGVuZ3RoIiwidGhlbiIsInJlc3VsdCIsInNldFN0YXRlIiwibG9hZE1lc3NhZ2VzIiwiZSIsInRhcmdldCIsInZhbHVlIiwibWVzc2FnZSIsInJlYWRCeSIsImluY2x1ZGVzIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiZGF0YSIsInVzZXJuYW1lIiwiZnJvbV91c2VyIiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJhbGxNZXNzYWdlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLEs7OztBQUNKLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxlQUFTLHFCQURFO0FBRVhDLHFCQUFlLEVBQUVDLE1BQU0sWUFBUixFQUZKO0FBR1hDLGdCQUFVLE1BQUtMLEtBQUwsQ0FBV0ssUUFIVjtBQUlYQyxjQUFRO0FBSkcsS0FBYjtBQU1BLFVBQUtDLGNBQUwsR0FBc0IsTUFBS0EsY0FBTCxDQUFvQkMsSUFBcEIsT0FBdEI7QUFSaUI7QUFTbEI7Ozs7eUNBRW9CO0FBQUE7O0FBQ25CLFVBQU1DLEtBQUtDLFNBQVNDLElBQVQsQ0FBY0MsS0FBZCxDQUFvQixHQUFwQixFQUF5QkYsU0FBU0MsSUFBVCxDQUFjQyxLQUFkLENBQW9CLEdB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LEdBQVA7QUFHRCxDQUpEOztrQkFNZSx5QkFBUUgsZUFBUixFQUF5QkMsa0JBQXpCLEVBQTZDaEMsS0FBN0MsQyIsImZpbGUiOiIwLmJlZjk4YTAxMWFjMWQwMDZkODBmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IEZvb3RlciwgSGVhZGVyLCBTaWRlTWVudSB9IGZyb20gJy4uL3ByZXNlbnRhdGlvbmFsJztcbmltcG9ydCB7IE1lc3NhZ2VzIH0gZnJvbSAnLi8nO1xuaW1wb3J0IGNoYW5nZVNlbGVjdGVkR3JvdXBBY3Rpb24gZnJvbSAnLi4vLi4vYWN0aW9ucy9jaGFuZ2VTZWxlY3RlZEdyb3VwJztcbmltcG9ydCBsb2FkTWVzc2FnZXMgZnJvbSAnLi4vLi4vYWN0aW9ucy9sb2FkTWVzc2FnZXMnO1xuaW1wb3J0IGFwaSBmcm9tICcuLi9oZWxwZXJzL2FwaSc7XG5cbmNsYXNzIEdyb3VwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxvYWRpbmc6ICdMb2FkaW5nIE1lc3NhZ2VzLi4uJyxcbiAgICAgIHNlbGVjdGVkR3JvdXA6IHsgbmFtZTogJ0xvYWRpbmcuLi4nIH0sXG4gICAgICBtZXNzYWdlczogdGhpcy5wcm9wcy5tZXNzYWdlcyxcbiAgICAgIGZpbHRlcjogJydcbiAgICB9O1xuICAgIHRoaXMuZmlsdGVyTWVzc2FnZXMgPSB0aGlzLmZpbHRlck1lc3NhZ2VzLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgY29uc3QgaWQgPSBsb2NhdGlvbi5ocmVmLnNwbGl0KCcvJylbbG9jYXRpb24uaHJlZi5zcGxpdCgnLycpLmxlbmd0aCAtIDFdO1xuICAgIGFwaShudWxsLCBgL2FwaS9ncm91cHMvJHtpZH1gLCAnR0VUJylcbiAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRHcm91cDogcmVzdWx0IH0pO1xuICAgICAgYXBpKG51bGwsIGAvYXBpL2dyb3Vwcy8ke2lkfS9tZXNzYWdlc2AsICdHRVQnKS50aGVuKFxuICAgICAgICAobWVzc2FnZXMpID0+IHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogJycsIG1lc3NhZ2VzIH0pO1xuICAgICAgICAgIHRoaXMucHJvcHMubG9hZE1lc3NhZ2VzKG1lc3NhZ2VzKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmaWx0ZXJNZXNzYWdlcyhlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGZpbHRlcjogZS50YXJnZXQudmFsdWUgfSk7XG4gICAgaWYgKHRoaXMuc3RhdGUuZmlsdGVyID09PSAnVW5yZWFkJykge1xuICAgICAgdGhpcy5zdGF0ZS5tZXNzYWdlcy5maWx0ZXIoKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgaWYgKCFtZXNzYWdlLnJlYWRCeS5zcGxpdCgnLCcpXG4gICAgICAgICAgLmluY2x1ZGVzKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXInKS5kYXRhLnVzZXJuYW1lKSkge1xuICAgICAgICAgIGlmIChtZXNzYWdlLmZyb21fdXNlciAhPT0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpLmRhdGEudXNlcm5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBtZXNzYWdlcyB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWRlci8+XG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicGFnZS1jb250YWluZXIgY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxTaWRlTWVudSBpbmdyb3VwPXt0cnVlfS8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uIHBhZ2UtY29udGVudCBhbGlnbi10b3AgcGwtMCBjb2wgbTcgbDggeGw5XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JvdXAtaGVhZGVyLWNvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZ3JvdXAtaGVhZGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICA8aDU+eyB0aGlzLnN0YXRlLnNlbGVjdGVkR3JvdXAubmFtZSB9PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J21lc3NhZ2UtZmlsdGVyLWNvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJicm93c2VyLWRlZmF1bHQgbGVmdFwiXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZmlsdGVyfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmZpbHRlck1lc3NhZ2VzfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+QWxsPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPlJlYWQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+VW5yZWFkPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgIHsgdGhpcy5zdGF0ZS5sb2FkaW5nICE9PSAnJyA/IHRoaXMuc3RhdGUubG9hZGluZyA6XG4gICAgICAgICAgICAgICAgICAgPE1lc3NhZ2VzIG1lc3NhZ2VzPXsgbWVzc2FnZXMgfS8+IH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxGb290ZXIvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBtZXNzYWdlczogc3RhdGUubWVzc2FnZXMsXG4gIH07XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBsb2FkTWVzc2FnZXM6IGFsbE1lc3NhZ2VzID0+IGRpc3BhdGNoKGxvYWRNZXNzYWdlcyhhbGxNZXNzYWdlcykpXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShHcm91cCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL2dyb3VwLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==