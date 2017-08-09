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
        this.setState({ messages: newMessages });
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
        this.props.loadMessages(this.state.messages);
        console.log('MESSAGE STATE>>>', this.state.messages);
        console.log('ORIGINAL MESSAGE STATE>>>', this.state.originalMessages);
      }
      this.setState({ filter: e.target.value });
      this.props.loadMessages(this.state.messages);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL2dyb3VwLmpzPzczYWEiXSwibmFtZXMiOlsiR3JvdXAiLCJwcm9wcyIsInN0YXRlIiwibG9hZGluZyIsInNlbGVjdGVkR3JvdXAiLCJuYW1lIiwibWVzc2FnZXMiLCJmaWx0ZXIiLCJvcmlnaW5hbE1lc3NhZ2VzIiwiZmlsdGVyTWVzc2FnZXMiLCJiaW5kIiwiaWQiLCJsb2NhdGlvbiIsImhyZWYiLCJzcGxpdCIsImxlbmd0aCIsInRoZW4iLCJyZXN1bHQiLCJzZXRTdGF0ZSIsImxvYWRNZXNzYWdlcyIsImUiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwidmFsdWUiLCJlZGl0YWJsZSIsIm5ld01lc3NhZ2VzIiwibWVzc2FnZSIsInJlYWRCeSIsImluY2x1ZGVzIiwiSlNPTiIsInBhcnNlIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiZGF0YSIsInVzZXJuYW1lIiwiZnJvbV91c2VyIiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJhbGxNZXNzYWdlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLEs7OztBQUNKLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxlQUFTLHFCQURFO0FBRVhDLHFCQUFlLEVBQUVDLE1BQU0sWUFBUixFQUZKO0FBR1hDLGdCQUFVLE1BQUtMLEtBQUwsQ0FBV0ssUUFIVjtBQUlYQyxjQUFRLEVBSkc7QUFLWEMsd0JBQWtCLE1BQUtQLEtBQUwsQ0FBV0s7QUFMbEIsS0FBYjtBQU9BLFVBQUtHLGNBQUwsR0FBc0IsTUFBS0EsY0FBTCxDQUFvQkMsSUFBcEIsT0FBdEI7QUFUaUI7QUFVbEI7Ozs7eUNBRW9CO0FBQUE7O0FBQ25CLFVBQU1DLEtBQUtDLFNBQVNDLElBQVQsQ0FBY0MsS0FBZCxDQUFvQixHQUFwQixFQUF5QkYsU0FBU0MsSUFBVCxDQUFjQyxLQUFkLENBQW9CLEdBQXBCLEVBQXlCQyxNQUF6QixHQUFrQyxDQUEzRCxDQUFYO0FBQ0EseUJBQUksSUFBSixtQkFBeUJKLEVBQXpCLEVBQStCLEtBQS9CLEVBQ0NLLElBREQsQ0FDTSxVQUFDQyxNQUFELEVBQVk7QUFDaEIsZUFBS0MsUUFBTCxDQUFjLEVBQUVkLGVBQWVhLE1BQWpCLEVBQWQ7QUFDQSwyQkFBSSxJQUFKLG1CQUF5Qk4sRUFBekIsZ0JBQXdDLEtBQXhDLEVBQStDSyxJQUEvQyxDQUNFLFVBQUNWLFFBQUQsRUFBYztBQUNaLGlCQUFLWSxRQUFMLENBQWMsRUFBRWYsU0FBUyxFQUFYLEVBQWVHLGtCQUFmLEVBQXlCRSxrQkFBa0JGLFFBQTNDLEVBQWQ7QUFDQSxpQkFBS0wsS0FBTCxDQUFXa0IsWUFBWCxDQUF3QmIsUUFBeEI7QUFDRCxTQUpIO0FBS0QsT0FSRDtBQVNEOzs7bUNBRWNjLEMsRUFBRztBQUNoQkMsY0FBUUMsR0FBUixDQUFZLGtCQUFaLEVBQWdDLEtBQUtwQixLQUFMLENBQVdJLFFBQTNDO0FBQ0FlLGNBQVFDLEdBQVIsQ0FBWSxXQUFaLEVBQXlCRixFQUFFRyxNQUFGLENBQVNDLEtBQWxDO0FBQ0EsVUFBSUosRUFBRUcsTUFBRixDQUFTQyxLQUFULEtBQW1CLFFBQXZCLEVBQWlDO0FBQy9CLFlBQU1DLFdBQVcsS0FBS3ZCLEtBQUwsQ0FBV00sZ0JBQTVCO0FBQ0EsWUFBTWtCLGNBQWNELFNBQVNsQixNQUFULENBQWdCLFVBQUNvQixPQUFELEVBQWE7QUFDL0MsY0FBSSxDQUFDQSxRQUFRQyxNQUFSLENBQWVkLEtBQWYsQ0FBcUIsR0FBckIsRUFDRmUsUUFERSxDQUNPQyxLQUFLQyxLQUFMLENBQVdDLGVBQWVDLE9BQWYsQ0FBdUIsTUFBdkIsQ0FBWCxFQUNQQyxJQURPLENBQ0ZDLFFBRkwsQ0FBTCxFQUVxQjtBQUNuQixnQkFBSVIsUUFBUVMsU0FBUixLQUFzQk4sS0FBS0MsS0FBTCxDQUFXQyxlQUFlQyxPQUFmLENBQXVCLE1BQXZCLENBQVgsRUFDdkJDLElBRHVCLENBQ2xCQyxRQURSLEVBQ2tCO0FBQ2hCLHFCQUFPLElBQVA7QUFDRDtBQUNGO0FBQ0QsaUJBQU8sS0FBUDtBQUNELFNBVm1CLENBQXBCO0FBV0FkLGdCQUFRQyxHQUFSLENBQVksa0JBQVosRUFBZ0NJLFdBQWhDO0FBQ0EsYUFBS1IsUUFBTCxDQUFjLEVBQUVaLFVBQVVvQixXQUFaLEVBQWQ7QUFDQUwsZ0JBQVFDLEdBQVIsQ0FBWSxrQkFBWixFQUFnQyxLQUFLcEIsS0FBTCxDQUFXSSxRQUEzQztBQUNBZSxnQkFBUUMsR0FBUixDQUFZLDJCQUFaLEVBQXlDLEtBQUtwQixLQUFMLENBQVdNLGdCQUFwRDtBQUNEO0FBQ0QsVUFBSVksRUFBRUcsTUFBRixDQUFTQyxLQUFULEtBQW1CLE1BQXZCLEVBQStCO0FBQzdCLFlBQU1DLFlBQVcsS0FBS3ZCLEtBQUwsQ0FBV00sZ0JBQTVCO0FBQ0EsWUFBTWtCLGVBQWNELFVBQVNsQixNQUFULENBQWdCLFVBQUNvQixPQUFELEVBQWE7QUFDL0MsY0FBSUEsUUFBUUMsTUFBUixDQUFlZCxLQUFmLENBQXFCLEdBQXJCLEVBQ0RlLFFBREMsQ0FDUUMsS0FBS0MsS0FBTCxDQUFXQyxlQUFlQyxPQUFmLENBQXVCLE1BQXZCLENBQVgsRUFDUEMsSUFETyxDQUNGQyxRQUZOLENBQUosRUFFcUI7QUFDbkIsbUJBQU8sSUFBUDtBQUNEO0FBQ0QsaUJBQU8sS0FBUDtBQUNELFNBUG1CLENBQXBCO0FBUUFkLGdCQUFRQyxHQUFSLENBQVksa0JBQVosRUFBZ0NJLFlBQWhDO0FBQ0EsYUFBS1IsUUFBTCxDQUFjLEVBQUVaLFVBQVVvQixZQUFaLEVBQWQ7QUFDQUwsZ0JBQVFDLEdBQVIsQ0FBWSxrQkFBWixFQUFnQyxLQUFLcEIsS0FBTCxDQUFXSSxRQUEzQztBQUNBZSxnQkFBUUMsR0FBUixDQUFZLDJCQUFaLEVBQXlDLEtBQUtwQixLQUFMLENBQVdNLGdCQUFwRDtBQUNEO0FBQ0QsVUFBSVksRUFBRUcsTUFBRixDQUFTQyxLQUFULEtBQW1CLEtBQXZCLEVBQThCO0FBQzVCLGFBQUtOLFFBQUwsQ0FBYyxFQUFFWixVQUFVLEtBQUtKLEtBQUwsQ0FBV00sZ0JBQXZCLEVBQWQ7QUFDQSxhQUFLUCxLQUFMLENBQVdrQixZQUFYLENBQXdCLEtBQUtqQixLQUFMLENBQVdJLFFBQW5DO0FBQ0FlLGdCQUFRQyxHQUFSLENBQVksa0JBQVosRUFBZ0MsS0FBS3BCLEtBQUwsQ0FBV0ksUUFBM0M7QUFDQWUsZ0JBQVFDLEdBQVIsQ0FBWSwyQkFBWixFQUF5QyxLQUFLcEIsS0FBTCxDQUFXTSxnQkFBcEQ7QUFDRDtBQUNELFdBQUtVLFFBQUwsQ0FBYyxFQUFFWCxRQUFRYSxFQUFFRyxNQUFGLENBQVNDLEtBQW5CLEVBQWQ7QUFDQSxXQUFLdkIsS0FBTCxDQUFXa0IsWUFBWCxDQUF3QixLQUFLakIsS0FBTCxDQUFXSSxRQUFuQztBQUNEOzs7NkJBRVE7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUNFLG1FQURGO0FBRUk7QUFBQTtBQUFBLFlBQVMsV0FBVSxnQ0FBbkI7QUFDRTtBQUFBO0FBQUEsY0FBSyxXQUFVLFdBQWY7QUFDRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxLQUFmO0FBQ0Usd0VBQVUsU0FBUyxJQUFuQixHQURGO0FBRUU7QUFBQTtBQUFBLGtCQUFLLFdBQVUsK0NBQWY7QUFDRTtBQUFBO0FBQUEsb0JBQUssV0FBVSx3QkFBZjtBQUNFO0FBQUE7QUFBQSxzQkFBTSxXQUFVLGNBQWhCO0FBQ0U7QUFBQTtBQUFBO0FBQU0sMkJBQUtKLEtBQUwsQ0FBV0UsYUFBWCxDQUF5QkM7QUFBL0I7QUFERixtQkFERjtBQUlFO0FBQUE7QUFBQSxzQkFBTSxXQUFVLDBCQUFoQjtBQUNFO0FBQUE7QUFBQSx3QkFBUSxXQUFVLHNCQUFsQjtBQUNBLCtCQUFPLEtBQUtILEtBQUwsQ0FBV0ssTUFEbEI7QUFFQSxrQ0FBVSxLQUFLRSxjQUZmO0FBR0U7QUFBQTtBQUFBLDBCQUFRLE9BQU0sS0FBZDtBQUFBO0FBQUEsdUJBSEY7QUFJRTtBQUFBO0FBQUEsMEJBQVEsT0FBTSxNQUFkO0FBQUE7QUFBQSx1QkFKRjtBQUtFO0FBQUE7QUFBQSwwQkFBUSxPQUFNLFFBQWQ7QUFBQTtBQUFBO0FBTEY7QUFERjtBQUpGLGlCQURGO0FBZUsscUJBQUtQLEtBQUwsQ0FBV0MsT0FBWCxLQUF1QixFQUF2QixHQUE0QixLQUFLRCxLQUFMLENBQVdDLE9BQXZDLEdBQ0YsNENBQVUsVUFBVyxLQUFLRixLQUFMLENBQVdLLFFBQWhDLEVBQTJDLGNBQWUsS0FBS0wsS0FBTCxDQUFXa0IsWUFBckU7QUFoQkg7QUFGRjtBQURGO0FBREYsU0FGSjtBQTJCRTtBQTNCRixPQURGO0FBK0JEOzs7O0VBeEdpQixnQkFBTWtCLFM7O0FBMkcxQixJQUFNQyxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNwQyxLQUFELEVBQVc7QUFDakMsU0FBTztBQUNMSSxjQUFVSixNQUFNSTtBQURYLEdBQVA7QUFHRCxDQUpEOztBQU1BLElBQU1pQyxxQkFBcUIsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFELEVBQWM7QUFDdkMsU0FBTztBQUNMckIsa0JBQWM7QUFBQSxhQUFlcUIsU0FBUyw0QkFBYUMsV0FBYixDQUFULENBQWY7QUFBQTtBQURULEdBQVA7QUFHRCxDQUpEOztrQkFNZSx5QkFBUUgsZUFBUixFQUF5QkMsa0JBQXpCLEVBQTZDdkMsS0FBN0MsQyIsImZpbGUiOiIwLjBiZjEwNWI3Y2IyZTkxNzVjOGI4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IEZvb3RlciwgSGVhZGVyLCBTaWRlTWVudSB9IGZyb20gJy4uL3ByZXNlbnRhdGlvbmFsJztcbmltcG9ydCB7IE1lc3NhZ2VzIH0gZnJvbSAnLi8nO1xuaW1wb3J0IGNoYW5nZVNlbGVjdGVkR3JvdXBBY3Rpb24gZnJvbSAnLi4vLi4vYWN0aW9ucy9jaGFuZ2VTZWxlY3RlZEdyb3VwJztcbmltcG9ydCBsb2FkTWVzc2FnZXMgZnJvbSAnLi4vLi4vYWN0aW9ucy9sb2FkTWVzc2FnZXMnO1xuaW1wb3J0IGFwaSBmcm9tICcuLi9oZWxwZXJzL2FwaSc7XG5cbmNsYXNzIEdyb3VwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxvYWRpbmc6ICdMb2FkaW5nIE1lc3NhZ2VzLi4uJyxcbiAgICAgIHNlbGVjdGVkR3JvdXA6IHsgbmFtZTogJ0xvYWRpbmcuLi4nIH0sXG4gICAgICBtZXNzYWdlczogdGhpcy5wcm9wcy5tZXNzYWdlcyxcbiAgICAgIGZpbHRlcjogJycsXG4gICAgICBvcmlnaW5hbE1lc3NhZ2VzOiB0aGlzLnByb3BzLm1lc3NhZ2VzXG4gICAgfTtcbiAgICB0aGlzLmZpbHRlck1lc3NhZ2VzID0gdGhpcy5maWx0ZXJNZXNzYWdlcy5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIGNvbnN0IGlkID0gbG9jYXRpb24uaHJlZi5zcGxpdCgnLycpW2xvY2F0aW9uLmhyZWYuc3BsaXQoJy8nKS5sZW5ndGggLSAxXTtcbiAgICBhcGkobnVsbCwgYC9hcGkvZ3JvdXBzLyR7aWR9YCwgJ0dFVCcpXG4gICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkR3JvdXA6IHJlc3VsdCB9KTtcbiAgICAgIGFwaShudWxsLCBgL2FwaS9ncm91cHMvJHtpZH0vbWVzc2FnZXNgLCAnR0VUJykudGhlbihcbiAgICAgICAgKG1lc3NhZ2VzKSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6ICcnLCBtZXNzYWdlcywgb3JpZ2luYWxNZXNzYWdlczogbWVzc2FnZXMgfSk7XG4gICAgICAgICAgdGhpcy5wcm9wcy5sb2FkTWVzc2FnZXMobWVzc2FnZXMpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZpbHRlck1lc3NhZ2VzKGUpIHtcbiAgICBjb25zb2xlLmxvZygnT0xEIE1FU1NBR0VTPj4+PicsIHRoaXMuc3RhdGUubWVzc2FnZXMpO1xuICAgIGNvbnNvbGUubG9nKCdGSUxURVI+Pj4nLCBlLnRhcmdldC52YWx1ZSk7XG4gICAgaWYgKGUudGFyZ2V0LnZhbHVlID09PSAnVW5yZWFkJykge1xuICAgICAgY29uc3QgZWRpdGFibGUgPSB0aGlzLnN0YXRlLm9yaWdpbmFsTWVzc2FnZXM7XG4gICAgICBjb25zdCBuZXdNZXNzYWdlcyA9IGVkaXRhYmxlLmZpbHRlcigobWVzc2FnZSkgPT4ge1xuICAgICAgICBpZiAoIW1lc3NhZ2UucmVhZEJ5LnNwbGl0KCcsJylcbiAgICAgICAgICAuaW5jbHVkZXMoSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpXG4gICAgICAgICAgICAuZGF0YS51c2VybmFtZSkpIHtcbiAgICAgICAgICBpZiAobWVzc2FnZS5mcm9tX3VzZXIgIT09IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKVxuICAgICAgICAgICAgLmRhdGEudXNlcm5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKCdORVcgTUVTU0FHRVM+Pj4+JywgbmV3TWVzc2FnZXMpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1lc3NhZ2VzOiBuZXdNZXNzYWdlcyB9KTtcbiAgICAgIGNvbnNvbGUubG9nKCdNRVNTQUdFIFNUQVRFPj4+JywgdGhpcy5zdGF0ZS5tZXNzYWdlcyk7XG4gICAgICBjb25zb2xlLmxvZygnT1JJR0lOQUwgTUVTU0FHRSBTVEFURT4+PicsIHRoaXMuc3RhdGUub3JpZ2luYWxNZXNzYWdlcyk7XG4gICAgfVxuICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PT0gJ1JlYWQnKSB7XG4gICAgICBjb25zdCBlZGl0YWJsZSA9IHRoaXMuc3RhdGUub3JpZ2luYWxNZXNzYWdlcztcbiAgICAgIGNvbnN0IG5ld01lc3NhZ2VzID0gZWRpdGFibGUuZmlsdGVyKChtZXNzYWdlKSA9PiB7XG4gICAgICAgIGlmIChtZXNzYWdlLnJlYWRCeS5zcGxpdCgnLCcpXG4gICAgICAgICAgLmluY2x1ZGVzKEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKVxuICAgICAgICAgICAgLmRhdGEudXNlcm5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZygnTkVXIE1FU1NBR0VTPj4+PicsIG5ld01lc3NhZ2VzKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBtZXNzYWdlczogbmV3TWVzc2FnZXMgfSk7XG4gICAgICBjb25zb2xlLmxvZygnTUVTU0FHRSBTVEFURT4+PicsIHRoaXMuc3RhdGUubWVzc2FnZXMpO1xuICAgICAgY29uc29sZS5sb2coJ09SSUdJTkFMIE1FU1NBR0UgU1RBVEU+Pj4nLCB0aGlzLnN0YXRlLm9yaWdpbmFsTWVzc2FnZXMpO1xuICAgIH1cbiAgICBpZiAoZS50YXJnZXQudmFsdWUgPT09ICdBbGwnKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgbWVzc2FnZXM6IHRoaXMuc3RhdGUub3JpZ2luYWxNZXNzYWdlcyB9KTtcbiAgICAgIHRoaXMucHJvcHMubG9hZE1lc3NhZ2VzKHRoaXMuc3RhdGUubWVzc2FnZXMpO1xuICAgICAgY29uc29sZS5sb2coJ01FU1NBR0UgU1RBVEU+Pj4nLCB0aGlzLnN0YXRlLm1lc3NhZ2VzKTtcbiAgICAgIGNvbnNvbGUubG9nKCdPUklHSU5BTCBNRVNTQUdFIFNUQVRFPj4+JywgdGhpcy5zdGF0ZS5vcmlnaW5hbE1lc3NhZ2VzKTtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGZpbHRlcjogZS50YXJnZXQudmFsdWUgfSk7XG4gICAgdGhpcy5wcm9wcy5sb2FkTWVzc2FnZXModGhpcy5zdGF0ZS5tZXNzYWdlcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkZXIvPlxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInBhZ2UtY29udGFpbmVyIGNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8U2lkZU1lbnUgaW5ncm91cD17dHJ1ZX0vPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbiBwYWdlLWNvbnRlbnQgYWxpZ24tdG9wIHBsLTAgY29sIG03IGw4XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JvdXAtaGVhZGVyLWNvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZ3JvdXAtaGVhZGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICA8aDU+eyB0aGlzLnN0YXRlLnNlbGVjdGVkR3JvdXAubmFtZSB9PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J21lc3NhZ2UtZmlsdGVyLWNvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJicm93c2VyLWRlZmF1bHQgbGVmdFwiXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZmlsdGVyfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmZpbHRlck1lc3NhZ2VzfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J0FsbCc+QWxsPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdSZWFkJz5SZWFkPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdVbnJlYWQnPlVucmVhZDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICB7IHRoaXMuc3RhdGUubG9hZGluZyAhPT0gJycgPyB0aGlzLnN0YXRlLmxvYWRpbmcgOlxuICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlcyBtZXNzYWdlcz17IHRoaXMucHJvcHMubWVzc2FnZXMgfSBsb2FkTWVzc2FnZXM9eyB0aGlzLnByb3BzLmxvYWRNZXNzYWdlcyB9Lz4gfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPEZvb3Rlci8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIG1lc3NhZ2VzOiBzdGF0ZS5tZXNzYWdlcyxcbiAgfTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICByZXR1cm4ge1xuICAgIGxvYWRNZXNzYWdlczogYWxsTWVzc2FnZXMgPT4gZGlzcGF0Y2gobG9hZE1lc3NhZ2VzKGFsbE1lc3NhZ2VzKSlcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEdyb3VwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9qcy9jb21wb25lbnRzL2NvbnRhaW5lcnMvZ3JvdXAuanMiXSwic291cmNlUm9vdCI6IiJ9