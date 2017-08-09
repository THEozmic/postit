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
      console.log('OLD MESSAGES>>>>', this.props.messages);
      console.log('FILTER>>>', e.target.value);
      if (e.target.value === 'Unread') {
        var editable = this.props.messages;
        var newMessages = editable.filter(function (message) {
          if (!message.readBy.split(',').includes(JSON.parse(sessionStorage.getItem('user')).data.username)) {
            if (message.from_user !== JSON.parse(sessionStorage.getItem('user')).data.username) {
              return true;
            }
          }
          return false;
        });
        console.log('NEW MESSAGES>>>>', newMessages);
        this.props.loadMessages(newMessages);
        console.log('MESSAGE STATE>>>', this.props.messages);
      }
      if (e.target.value === 'Read') {
        var _editable = this.props.messages;
        var _newMessages = _editable.filter(function (message) {
          if (message.readBy.split(',').includes(JSON.parse(sessionStorage.getItem('user')).data.username)) {
            return true;
          }
          return false;
        });
        console.log('NEW MESSAGES>>>>', _newMessages);
        this.props.loadMessages(_newMessages);
        console.log('MESSAGE STATE>>>', this.props.messages);
      }
      if (e.target.value === 'All') {
        this.props({ messages: this.state.originalMessages });
        console.log('MESSAGE STATE>>>', this.props.messages);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL2dyb3VwLmpzPzczYWEiXSwibmFtZXMiOlsiR3JvdXAiLCJwcm9wcyIsInN0YXRlIiwibG9hZGluZyIsInNlbGVjdGVkR3JvdXAiLCJuYW1lIiwibWVzc2FnZXMiLCJmaWx0ZXIiLCJvcmlnaW5hbE1lc3NhZ2VzIiwiZmlsdGVyTWVzc2FnZXMiLCJiaW5kIiwiaWQiLCJsb2NhdGlvbiIsImhyZWYiLCJzcGxpdCIsImxlbmd0aCIsInRoZW4iLCJyZXN1bHQiLCJzZXRTdGF0ZSIsImxvYWRNZXNzYWdlcyIsImUiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwidmFsdWUiLCJlZGl0YWJsZSIsIm5ld01lc3NhZ2VzIiwibWVzc2FnZSIsInJlYWRCeSIsImluY2x1ZGVzIiwiSlNPTiIsInBhcnNlIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiZGF0YSIsInVzZXJuYW1lIiwiZnJvbV91c2VyIiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJhbGxNZXNzYWdlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLEs7OztBQUNKLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxlQUFTLHFCQURFO0FBRVhDLHFCQUFlLEVBQUVDLE1BQU0sWUFBUixFQUZKO0FBR1hDLGdCQUFVLE1BQUtMLEtBQUwsQ0FBV0ssUUFIVjtBQUlYQyxjQUFRLEVBSkc7QUFLWEMsd0JBQWtCLE1BQUtQLEtBQUwsQ0FBV0s7QUFMbEIsS0FBYjtBQU9BLFVBQUtHLGNBQUwsR0FBc0IsTUFBS0EsY0FBTCxDQUFvQkMsSUFBcEIsT0FBdEI7QUFUaUI7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LEtBQUtGLEtBQUwsQ0FBV0ssUUFBaEMsRUFBMkMsY0FBZSxLQUFLTCxLQUFMLENBQVdrQixZQUFyRTtBQWhCSDtBQUZGO0FBREY7QUFERixTQUZKO0FBMkJFO0FBM0JGLE9BREY7QUErQkQ7Ozs7RUFwR2lCLGdCQUFNa0IsUzs7QUF1RzFCLElBQU1DLGtCQUFrQixTQUFsQkEsZUFBa0IsQ0FBQ3BDLEtBQUQsRUFBVztBQUNqQyxTQUFPO0FBQ0xJLGNBQVVKLE1BQU1JO0FBRFgsR0FBUDtBQUdELENBSkQ7O0FBTUEsSUFBTWlDLHFCQUFxQixTQUFyQkEsa0JBQXFCLENBQUNDLFFBQUQsRUFBYztBQUN2QyxTQUFPO0FBQ0xyQixrQkFBYztBQUFBLGFBQWVxQixTQUFTLDRCQUFhQyxXQUFiLENBQVQsQ0FBZjtBQUFBO0FBRFQsR0FBUDtBQUdELENBSkQ7O2tCQU1lLHlCQUFRSCxlQUFSLEVBQXlCQyxrQkFBekIsRUFBNkN2QyxLQUE3QyxDIiwiZmlsZSI6IjAuMDQxYzgwYmU0OTVjOTg1NGNhMDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgRm9vdGVyLCBIZWFkZXIsIFNpZGVNZW51IH0gZnJvbSAnLi4vcHJlc2VudGF0aW9uYWwnO1xuaW1wb3J0IHsgTWVzc2FnZXMgfSBmcm9tICcuLyc7XG5pbXBvcnQgY2hhbmdlU2VsZWN0ZWRHcm91cEFjdGlvbiBmcm9tICcuLi8uLi9hY3Rpb25zL2NoYW5nZVNlbGVjdGVkR3JvdXAnO1xuaW1wb3J0IGxvYWRNZXNzYWdlcyBmcm9tICcuLi8uLi9hY3Rpb25zL2xvYWRNZXNzYWdlcyc7XG5pbXBvcnQgYXBpIGZyb20gJy4uL2hlbHBlcnMvYXBpJztcblxuY2xhc3MgR3JvdXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbG9hZGluZzogJ0xvYWRpbmcgTWVzc2FnZXMuLi4nLFxuICAgICAgc2VsZWN0ZWRHcm91cDogeyBuYW1lOiAnTG9hZGluZy4uLicgfSxcbiAgICAgIG1lc3NhZ2VzOiB0aGlzLnByb3BzLm1lc3NhZ2VzLFxuICAgICAgZmlsdGVyOiAnJyxcbiAgICAgIG9yaWdpbmFsTWVzc2FnZXM6IHRoaXMucHJvcHMubWVzc2FnZXNcbiAgICB9O1xuICAgIHRoaXMuZmlsdGVyTWVzc2FnZXMgPSB0aGlzLmZpbHRlck1lc3NhZ2VzLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgY29uc3QgaWQgPSBsb2NhdGlvbi5ocmVmLnNwbGl0KCcvJylbbG9jYXRpb24uaHJlZi5zcGxpdCgnLycpLmxlbmd0aCAtIDFdO1xuICAgIGFwaShudWxsLCBgL2FwaS9ncm91cHMvJHtpZH1gLCAnR0VUJylcbiAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRHcm91cDogcmVzdWx0IH0pO1xuICAgICAgYXBpKG51bGwsIGAvYXBpL2dyb3Vwcy8ke2lkfS9tZXNzYWdlc2AsICdHRVQnKS50aGVuKFxuICAgICAgICAobWVzc2FnZXMpID0+IHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogJycsIG1lc3NhZ2VzLCBvcmlnaW5hbE1lc3NhZ2VzOiBtZXNzYWdlcyB9KTtcbiAgICAgICAgICB0aGlzLnByb3BzLmxvYWRNZXNzYWdlcyhtZXNzYWdlcyk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZmlsdGVyTWVzc2FnZXMoZSkge1xuICAgIGNvbnNvbGUubG9nKCdPTEQgTUVTU0FHRVM+Pj4+JywgdGhpcy5wcm9wcy5tZXNzYWdlcyk7XG4gICAgY29uc29sZS5sb2coJ0ZJTFRFUj4+PicsIGUudGFyZ2V0LnZhbHVlKTtcbiAgICBpZiAoZS50YXJnZXQudmFsdWUgPT09ICdVbnJlYWQnKSB7XG4gICAgICBjb25zdCBlZGl0YWJsZSA9IHRoaXMucHJvcHMubWVzc2FnZXM7XG4gICAgICBjb25zdCBuZXdNZXNzYWdlcyA9IGVkaXRhYmxlLmZpbHRlcigobWVzc2FnZSkgPT4ge1xuICAgICAgICBpZiAoIW1lc3NhZ2UucmVhZEJ5LnNwbGl0KCcsJylcbiAgICAgICAgICAuaW5jbHVkZXMoSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpXG4gICAgICAgICAgICAuZGF0YS51c2VybmFtZSkpIHtcbiAgICAgICAgICBpZiAobWVzc2FnZS5mcm9tX3VzZXIgIT09IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKVxuICAgICAgICAgICAgLmRhdGEudXNlcm5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKCdORVcgTUVTU0FHRVM+Pj4+JywgbmV3TWVzc2FnZXMpO1xuICAgICAgdGhpcy5wcm9wcy5sb2FkTWVzc2FnZXMobmV3TWVzc2FnZXMpO1xuICAgICAgY29uc29sZS5sb2coJ01FU1NBR0UgU1RBVEU+Pj4nLCB0aGlzLnByb3BzLm1lc3NhZ2VzKTtcbiAgICB9XG4gICAgaWYgKGUudGFyZ2V0LnZhbHVlID09PSAnUmVhZCcpIHtcbiAgICAgIGNvbnN0IGVkaXRhYmxlID0gdGhpcy5wcm9wcy5tZXNzYWdlcztcbiAgICAgIGNvbnN0IG5ld01lc3NhZ2VzID0gZWRpdGFibGUuZmlsdGVyKChtZXNzYWdlKSA9PiB7XG4gICAgICAgIGlmIChtZXNzYWdlLnJlYWRCeS5zcGxpdCgnLCcpXG4gICAgICAgICAgLmluY2x1ZGVzKEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKVxuICAgICAgICAgICAgLmRhdGEudXNlcm5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZygnTkVXIE1FU1NBR0VTPj4+PicsIG5ld01lc3NhZ2VzKTtcbiAgICAgIHRoaXMucHJvcHMubG9hZE1lc3NhZ2VzKG5ld01lc3NhZ2VzKTtcbiAgICAgIGNvbnNvbGUubG9nKCdNRVNTQUdFIFNUQVRFPj4+JywgdGhpcy5wcm9wcy5tZXNzYWdlcyk7XG4gICAgfVxuICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PT0gJ0FsbCcpIHtcbiAgICAgIHRoaXMucHJvcHMoeyBtZXNzYWdlczogdGhpcy5zdGF0ZS5vcmlnaW5hbE1lc3NhZ2VzIH0pO1xuICAgICAgY29uc29sZS5sb2coJ01FU1NBR0UgU1RBVEU+Pj4nLCB0aGlzLnByb3BzLm1lc3NhZ2VzKTtcbiAgICAgIGNvbnNvbGUubG9nKCdPUklHSU5BTCBNRVNTQUdFIFNUQVRFPj4+JywgdGhpcy5zdGF0ZS5vcmlnaW5hbE1lc3NhZ2VzKTtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGZpbHRlcjogZS50YXJnZXQudmFsdWUgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkZXIvPlxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInBhZ2UtY29udGFpbmVyIGNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8U2lkZU1lbnUgaW5ncm91cD17dHJ1ZX0vPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbiBwYWdlLWNvbnRlbnQgYWxpZ24tdG9wIHBsLTAgY29sIG03IGw4XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JvdXAtaGVhZGVyLWNvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZ3JvdXAtaGVhZGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICA8aDU+eyB0aGlzLnN0YXRlLnNlbGVjdGVkR3JvdXAubmFtZSB9PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J21lc3NhZ2UtZmlsdGVyLWNvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJicm93c2VyLWRlZmF1bHQgbGVmdFwiXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZmlsdGVyfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmZpbHRlck1lc3NhZ2VzfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J0FsbCc+QWxsPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdSZWFkJz5SZWFkPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdVbnJlYWQnPlVucmVhZDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICB7IHRoaXMuc3RhdGUubG9hZGluZyAhPT0gJycgPyB0aGlzLnN0YXRlLmxvYWRpbmcgOlxuICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlcyBtZXNzYWdlcz17IHRoaXMucHJvcHMubWVzc2FnZXMgfSBsb2FkTWVzc2FnZXM9eyB0aGlzLnByb3BzLmxvYWRNZXNzYWdlcyB9Lz4gfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPEZvb3Rlci8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIG1lc3NhZ2VzOiBzdGF0ZS5tZXNzYWdlcyxcbiAgfTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICByZXR1cm4ge1xuICAgIGxvYWRNZXNzYWdlczogYWxsTWVzc2FnZXMgPT4gZGlzcGF0Y2gobG9hZE1lc3NhZ2VzKGFsbE1lc3NhZ2VzKSlcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEdyb3VwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9qcy9jb21wb25lbnRzL2NvbnRhaW5lcnMvZ3JvdXAuanMiXSwic291cmNlUm9vdCI6IiJ9