webpackHotUpdate(0,{

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(19);

var _scrollToElement = __webpack_require__(299);

var _scrollToElement2 = _interopRequireDefault(_scrollToElement);

var _sendMessage = __webpack_require__(126);

var _sendMessage2 = _interopRequireDefault(_sendMessage);

var _loadMessages2 = __webpack_require__(76);

var _loadMessages3 = _interopRequireDefault(_loadMessages2);

var _api = __webpack_require__(13);

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Messages = function (_React$Component) {
  _inherits(Messages, _React$Component);

  function Messages(props) {
    _classCallCheck(this, Messages);

    var _this = _possibleConstructorReturn(this, (Messages.__proto__ || Object.getPrototypeOf(Messages)).call(this, props));

    _this.state = {
      message_error: '',
      selectedGroup: {},
      sendStatus: 'SEND'
    };
    _this.send = _this.send.bind(_this);
    return _this;
  }

  _createClass(Messages, [{
    key: 'scrollPane',
    value: function scrollPane() {
      (0, _scrollToElement2.default)('.second', {
        offset: -60,
        ease: 'in-expo',
        duration: 900
      });
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      var id = location.href.split('/')[location.href.split('/').length - 1];
      (0, _api2.default)(null, '/api/groups/' + id, 'GET').then(function (result) {
        _this2.setState({ selectedGroup: result });
      });
      (0, _api2.default)('', '/api/groups/' + id + '/read', 'POST');
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.scrollPane();
    }
  }, {
    key: 'send',
    value: function send(e) {
      var _this3 = this;

      e.preventDefault();
      var content = this.content,
          priority = this.priority;

      content = content.value.trim();
      priority = priority.value.trim();
      var readBy = '';
      if (content === '' || priority === '') {
        this.setState({ message_error: 'Error: Message has no priority, sender or content' });
        return;
      }

      this.setState({ sendStatus: 'SEND...' });
      var newMessageBody = 'message=' + content + '&priority=' + priority + '&to_group=' + this.state.selectedGroup.id;
      (0, _api2.default)(newMessageBody, '/api/groups/' + this.state.selectedGroup.id + '/message', 'POST').then(function (response) {
        _this3.setState({ sendStatus: 'SEND' });
        var newMessage = {
          id: response.id,
          message: content,
          from_user: JSON.parse(_this3.props.user).data.username,
          priority: priority.toLowerCase(),
          readBy: readBy
        };
        _this3.props.loadMessages(_this3.props.messages.concat([newMessage]));
      });
      this.content.value = '';
      this.scrollPane();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var n = 0;
      return _react2.default.createElement(
        'div',
        { className: 'page-content align-top pl-0 col-md-7 col-lg-9' },
        _react2.default.createElement(
          'div',
          { className: 'messages' },
          this.props.messages.map(function (message) {
            n += 1;
            var secondClass = '';
            if (_this4.props.messages.length - 1 === n) {
              secondClass = ' second';
            } else {
              secondClass = '';
            }
            return _react2.default.createElement(
              'div',
              { className: 'message-container' + secondClass, key: message.id },
              _react2.default.createElement(
                'div',
                { className: 'message' },
                _react2.default.createElement(
                  'div',
                  { className: 'message-details' },
                  _react2.default.createElement(
                    'span',
                    { className: 'messenger' },
                    '@',
                    message.from_user
                  ),
                  _react2.default.createElement(
                    'span',
                    { className: 'message-type ' + message.priority.toLowerCase() },
                    message.priority.toLowerCase()
                  )
                ),
                _react2.default.createElement(
                  'div',
                  null,
                  message.message
                ),
                message.readBy === '' && message.readBy.length === 0 ? '' : _react2.default.createElement(
                  'div',
                  { className: 'message-read-list' },
                  'Read by: ',
                  _react2.default.createElement(
                    'span',
                    null,
                    '@',
                    message.readBy.split(',').join(', @')
                  )
                )
              )
            );
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'new-message' },
          _react2.default.createElement(
            'div',
            { className: 'col-12 pl-0 pr-0 pb-2' },
            _react2.default.createElement('textarea', { className: 'message-box', placeholder: 'Type your message...',
              ref: function ref(input) {
                _this4.content = input;
              } })
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-12 pl-0 pr-0' },
            _react2.default.createElement(
              'div',
              { className: 'priority-level' },
              _react2.default.createElement(
                'select',
                { className: 'browser-default', ref: function ref(input) {
                    _this4.priority = input;
                  } },
                _react2.default.createElement(
                  'option',
                  { value: 'Normal' },
                  'Normal'
                ),
                _react2.default.createElement(
                  'option',
                  { value: 'Urgent' },
                  'Urgent'
                ),
                _react2.default.createElement(
                  'option',
                  { value: 'Critical' },
                  'Critical'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'right' },
              _react2.default.createElement(
                'button',
                { disabled: this.state.sendStatus === 'SEND...', className: 'btn btn-primary', onClick: this.send },
                this.state.sendStatus
              )
            )
          )
        )
      );
    }
  }]);

  return Messages;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.userData
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    send: function send(newMessage) {
      return dispatch((0, _sendMessage2.default)(newMessage));
    },
    loadMessages: function loadMessages(allMessages) {
      return dispatch((0, _loadMessages3.default)(allMessages));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Messages);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL21lc3NhZ2VzLmpzPzFiOGMiXSwibmFtZXMiOlsiTWVzc2FnZXMiLCJwcm9wcyIsInN0YXRlIiwibWVzc2FnZV9lcnJvciIsInNlbGVjdGVkR3JvdXAiLCJzZW5kU3RhdHVzIiwic2VuZCIsImJpbmQiLCJvZmZzZXQiLCJlYXNlIiwiZHVyYXRpb24iLCJpZCIsImxvY2F0aW9uIiwiaHJlZiIsInNwbGl0IiwibGVuZ3RoIiwidGhlbiIsInJlc3VsdCIsInNldFN0YXRlIiwic2Nyb2xsUGFuZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnRlbnQiLCJwcmlvcml0eSIsInZhbHVlIiwidHJpbSIsInJlYWRCeSIsIm5ld01lc3NhZ2VCb2R5IiwicmVzcG9uc2UiLCJuZXdNZXNzYWdlIiwibWVzc2FnZSIsImZyb21fdXNlciIsIkpTT04iLCJwYXJzZSIsInVzZXIiLCJkYXRhIiwidXNlcm5hbWUiLCJ0b0xvd2VyQ2FzZSIsImxvYWRNZXNzYWdlcyIsIm1lc3NhZ2VzIiwiY29uY2F0IiwibiIsIm1hcCIsInNlY29uZENsYXNzIiwiam9pbiIsImlucHV0IiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwidXNlckRhdGEiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImFsbE1lc3NhZ2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxROzs7QUFDSixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLG9IQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMscUJBQWUsRUFESjtBQUVYQyxxQkFBZSxFQUZKO0FBR1hDLGtCQUFZO0FBSEQsS0FBYjtBQUtBLFVBQUtDLElBQUwsR0FBWSxNQUFLQSxJQUFMLENBQVVDLElBQVYsT0FBWjtB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QUFDRTtBQUFBO0FBQUEsb0JBQVEsT0FBTSxRQUFkO0FBQUE7QUFBQSxpQkFERjtBQUVFO0FBQUE7QUFBQSxvQkFBUSxPQUFNLFFBQWQ7QUFBQTtBQUFBLGlCQUZGO0FBR0U7QUFBQTtBQUFBLG9CQUFRLE9BQU0sVUFBZDtBQUFBO0FBQUE7QUFIRjtBQURGLGFBREY7QUFRRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxPQUFmO0FBQXVCO0FBQUE7QUFBQSxrQkFBUSxVQUFVLEtBQUszQyxLQUFMLENBQVdHLFVBQVgsS0FBMEIsU0FBNUMsRUFBdUQsV0FBVSxpQkFBakUsRUFBbUYsU0FBUyxLQUFLQyxJQUFqRztBQUF3RyxxQkFBS0osS0FBTCxDQUFXRztBQUFuSDtBQUF2QjtBQVJGO0FBTEo7QUE1QkYsT0FERjtBQStDRDs7OztFQWpIb0IsZ0JBQU15QyxTOztBQW9IN0IsSUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDN0MsS0FBRCxFQUFXO0FBQ2pDLFNBQU87QUFDTGdDLFVBQU1oQyxNQUFNOEM7QUFEUCxHQUFQO0FBR0QsQ0FKRDs7QUFNQSxJQUFNQyxxQkFBcUIsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFELEVBQWM7QUFDdkMsU0FBTztBQUNMNUMsVUFBTTtBQUFBLGFBQWM0QyxTQUFTLDJCQUFZckIsVUFBWixDQUFULENBQWQ7QUFBQSxLQUREO0FBRUxTLGtCQUFjO0FBQUEsYUFBZVksU0FBUyw0QkFBYUMsV0FBYixDQUFULENBQWY7QUFBQTtBQUZULEdBQVA7QUFJRCxDQUxEOztrQkFPZSx5QkFBUUosZUFBUixFQUF5QkUsa0JBQXpCLEVBQTZDakQsUUFBN0MsQyIsImZpbGUiOiIwLmJhYmI3YTg5NTczNDFlZmI4NDdlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBzY3JvbGxUb0VsZW1lbnQgZnJvbSAnc2Nyb2xsLXRvLWVsZW1lbnQnO1xuaW1wb3J0IHNlbmRNZXNzYWdlIGZyb20gJy4uLy4uL2FjdGlvbnMvc2VuZE1lc3NhZ2UnO1xuaW1wb3J0IGxvYWRNZXNzYWdlcyBmcm9tICcuLi8uLi9hY3Rpb25zL2xvYWRNZXNzYWdlcyc7XG5pbXBvcnQgYXBpIGZyb20gJy4uL2hlbHBlcnMvYXBpJztcblxuY2xhc3MgTWVzc2FnZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbWVzc2FnZV9lcnJvcjogJycsXG4gICAgICBzZWxlY3RlZEdyb3VwOiB7fSxcbiAgICAgIHNlbmRTdGF0dXM6ICdTRU5EJ1xuICAgIH07XG4gICAgdGhpcy5zZW5kID0gdGhpcy5zZW5kLmJpbmQodGhpcyk7XG4gIH1cblxuICBzY3JvbGxQYW5lKCkge1xuICAgIHNjcm9sbFRvRWxlbWVudCgnLnNlY29uZCcsIHtcbiAgICAgIG9mZnNldDogLTYwLFxuICAgICAgZWFzZTogJ2luLWV4cG8nLFxuICAgICAgZHVyYXRpb246IDkwMFxuICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIGNvbnN0IGlkID0gbG9jYXRpb24uaHJlZi5zcGxpdCgnLycpW2xvY2F0aW9uLmhyZWYuc3BsaXQoJy8nKS5sZW5ndGggLSAxXTtcbiAgICBhcGkobnVsbCwgYC9hcGkvZ3JvdXBzLyR7aWR9YCwgJ0dFVCcpXG4gICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkR3JvdXA6IHJlc3VsdCB9KTtcbiAgICB9KTtcbiAgICBhcGkoJycsIGAvYXBpL2dyb3Vwcy8ke2lkfS9yZWFkYCwgJ1BPU1QnKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuc2Nyb2xsUGFuZSgpO1xuICB9XG5cbiAgc2VuZChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCB7IGNvbnRlbnQsIHByaW9yaXR5IH0gPSB0aGlzO1xuICAgIGNvbnRlbnQgPSBjb250ZW50LnZhbHVlLnRyaW0oKTtcbiAgICBwcmlvcml0eSA9IHByaW9yaXR5LnZhbHVlLnRyaW0oKTtcbiAgICBjb25zdCByZWFkQnkgPSAnJztcbiAgICBpZiAoY29udGVudCA9PT0gJycgfHwgcHJpb3JpdHkgPT09ICcnKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgbWVzc2FnZV9lcnJvcjogJ0Vycm9yOiBNZXNzYWdlIGhhcyBubyBwcmlvcml0eSwgc2VuZGVyIG9yIGNvbnRlbnQnIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoeyBzZW5kU3RhdHVzOiAnU0VORC4uLicgfSk7XG4gICAgY29uc3QgbmV3TWVzc2FnZUJvZHkgPVxuICAgIGBtZXNzYWdlPSR7Y29udGVudH0mcHJpb3JpdHk9JHtwcmlvcml0eX1cXCZ0b19ncm91cD0ke3RoaXMuc3RhdGUuc2VsZWN0ZWRHcm91cC5pZH1gO1xuICAgIGFwaShuZXdNZXNzYWdlQm9keSwgYC9hcGkvZ3JvdXBzLyR7dGhpcy5zdGF0ZS5zZWxlY3RlZEdyb3VwLmlkfS9tZXNzYWdlYCxcbiAgICAnUE9TVCcpLnRoZW4oXG4gICAgICAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbmRTdGF0dXM6ICdTRU5EJyB9KTtcbiAgICAgICAgY29uc3QgbmV3TWVzc2FnZSA9IHtcbiAgICAgICAgICBpZDogcmVzcG9uc2UuaWQsXG4gICAgICAgICAgbWVzc2FnZTogY29udGVudCxcbiAgICAgICAgICBmcm9tX3VzZXI6IEpTT04ucGFyc2UodGhpcy5wcm9wcy51c2VyKS5kYXRhLnVzZXJuYW1lLFxuICAgICAgICAgIHByaW9yaXR5OiBwcmlvcml0eS50b0xvd2VyQ2FzZSgpLFxuICAgICAgICAgIHJlYWRCeVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnByb3BzLmxvYWRNZXNzYWdlcyh0aGlzLnByb3BzLm1lc3NhZ2VzLmNvbmNhdChbbmV3TWVzc2FnZV0pKTtcbiAgICAgIH1cbiAgICApO1xuICAgIHRoaXMuY29udGVudC52YWx1ZSA9ICcnO1xuICAgIHRoaXMuc2Nyb2xsUGFuZSgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBuID0gMDtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWNvbnRlbnQgYWxpZ24tdG9wIHBsLTAgY29sLW1kLTcgY29sLWxnLTlcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlc1wiPlxuICAgICAgICAgIHsgdGhpcy5wcm9wcy5tZXNzYWdlcy5tYXAoKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgICAgIG4gKz0gMTtcbiAgICAgICAgICAgIGxldCBzZWNvbmRDbGFzcyA9ICcnO1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMubWVzc2FnZXMubGVuZ3RoIC0gMSA9PT0gbikge1xuICAgICAgICAgICAgICBzZWNvbmRDbGFzcyA9ICcgc2Vjb25kJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNlY29uZENsYXNzID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG1lc3NhZ2UtY29udGFpbmVyJHtzZWNvbmRDbGFzc31gfSBrZXk9e21lc3NhZ2UuaWR9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlLWRldGFpbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWVzc2VuZ2VyXCI+QHttZXNzYWdlLmZyb21fdXNlcn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YG1lc3NhZ2UtdHlwZSAke21lc3NhZ2UucHJpb3JpdHkudG9Mb3dlckNhc2UoKX1gfT5cbiAgICAgICAgICAgICAgICAgICAgICB7bWVzc2FnZS5wcmlvcml0eS50b0xvd2VyQ2FzZSgpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdj57bWVzc2FnZS5tZXNzYWdlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgIHsgbWVzc2FnZS5yZWFkQnkgPT09ICcnICYmIG1lc3NhZ2UucmVhZEJ5Lmxlbmd0aCA9PT0gMCA/ICcnIDpcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZS1yZWFkLWxpc3RcIj5SZWFkIGJ5OiA8c3Bhbj5AXG4gICAgICAgICAgICAgICAgICB7bWVzc2FnZS5yZWFkQnkuc3BsaXQoJywnKS5qb2luKCcsIEAnKX08L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2Pik7XG4gICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ldy1tZXNzYWdlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBwbC0wIHByLTAgcGItMlwiPlxuICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwibWVzc2FnZS1ib3hcIiBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciBtZXNzYWdlLi4uXCJcbiAgICAgICAgICAgICAgcmVmPXsoaW5wdXQpID0+IHsgdGhpcy5jb250ZW50ID0gaW5wdXQ7IH19PjwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIHBsLTAgcHItMFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaW9yaXR5LWxldmVsXCI+XG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJicm93c2VyLWRlZmF1bHRcIiByZWY9eyhpbnB1dCkgPT4geyB0aGlzLnByaW9yaXR5ID0gaW5wdXQ7IH19PlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk5vcm1hbFwiPk5vcm1hbDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlVyZ2VudFwiPlVyZ2VudDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkNyaXRpY2FsXCI+Q3JpdGljYWw8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRcIj48YnV0dG9uIGRpc2FibGVkPXt0aGlzLnN0YXRlLnNlbmRTdGF0dXMgPT09ICdTRU5ELi4uJ30gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17dGhpcy5zZW5kfT57dGhpcy5zdGF0ZS5zZW5kU3RhdHVzfTwvYnV0dG9uPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHVzZXI6IHN0YXRlLnVzZXJEYXRhXG4gIH07XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBzZW5kOiBuZXdNZXNzYWdlID0+IGRpc3BhdGNoKHNlbmRNZXNzYWdlKG5ld01lc3NhZ2UpKSxcbiAgICBsb2FkTWVzc2FnZXM6IGFsbE1lc3NhZ2VzID0+IGRpc3BhdGNoKGxvYWRNZXNzYWdlcyhhbGxNZXNzYWdlcykpXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShNZXNzYWdlcyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL21lc3NhZ2VzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==