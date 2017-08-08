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
        _this3.props.loadMessages();
        console.log('NEW MESSAGE:::::', newMessage);
        console.log('ALL MESSAGES:::::', _this3.props.messages);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL21lc3NhZ2VzLmpzPzFiOGMiXSwibmFtZXMiOlsiTWVzc2FnZXMiLCJwcm9wcyIsInN0YXRlIiwibWVzc2FnZV9lcnJvciIsInNlbGVjdGVkR3JvdXAiLCJzZW5kU3RhdHVzIiwic2VuZCIsImJpbmQiLCJvZmZzZXQiLCJlYXNlIiwiZHVyYXRpb24iLCJpZCIsImxvY2F0aW9uIiwiaHJlZiIsInNwbGl0IiwibGVuZ3RoIiwidGhlbiIsInJlc3VsdCIsInNldFN0YXRlIiwic2Nyb2xsUGFuZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnRlbnQiLCJwcmlvcml0eSIsInZhbHVlIiwidHJpbSIsInJlYWRCeSIsIm5ld01lc3NhZ2VCb2R5IiwicmVzcG9uc2UiLCJuZXdNZXNzYWdlIiwibWVzc2FnZSIsImZyb21fdXNlciIsIkpTT04iLCJwYXJzZSIsInVzZXIiLCJkYXRhIiwidXNlcm5hbWUiLCJ0b0xvd2VyQ2FzZSIsImxvYWRNZXNzYWdlcyIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlcyIsIm4iLCJtYXAiLCJzZWNvbmRDbGFzcyIsImpvaW4iLCJpbnB1dCIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsInVzZXJEYXRhIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJhbGxNZXNzYWdlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUEsUTs7O0FBQ0osb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxvSEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLHFCQUFlLEVBREo7QUFFWEMscUJBQWUsRUFGSjtBQUdYQyxrQkFBWTtBQUhELEtBQWI7QUFLQSxVQUFLQyxJQUFMLEdBQVksTUFBS0EsSUFBTCxDQUFVQyxJQUFW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QkFBS3ZCLFFBQUwsR0FBZ0J1QixLQUFoQjtBQUF3QixtQkFBOUU7QUFDRTtBQUFBO0FBQUEsb0JBQVEsT0FBTSxRQUFkO0FBQUE7QUFBQSxpQkFERjtBQUVFO0FBQUE7QUFBQSxvQkFBUSxPQUFNLFFBQWQ7QUFBQTtBQUFBLGlCQUZGO0FBR0U7QUFBQTtBQUFBLG9CQUFRLE9BQU0sVUFBZDtBQUFBO0FBQUE7QUFIRjtBQURGLGFBREY7QUFRRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxPQUFmO0FBQXVCO0FBQUE7QUFBQSxrQkFBUSxVQUFVLEtBQUs1QyxLQUFMLENBQVdHLFVBQVgsS0FBMEIsU0FBNUMsRUFBdUQsV0FBVSxpQkFBakUsRUFBbUYsU0FBUyxLQUFLQyxJQUFqRztBQUF3RyxxQkFBS0osS0FBTCxDQUFXRztBQUFuSDtBQUF2QjtBQVJGO0FBTEo7QUE1QkYsT0FERjtBQStDRDs7OztFQW5Ib0IsZ0JBQU0wQyxTOztBQXNIN0IsSUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDOUMsS0FBRCxFQUFXO0FBQ2pDLFNBQU87QUFDTGdDLFVBQU1oQyxNQUFNK0M7QUFEUCxHQUFQO0FBR0QsQ0FKRDs7QUFNQSxJQUFNQyxxQkFBcUIsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFELEVBQWM7QUFDdkMsU0FBTztBQUNMN0MsVUFBTTtBQUFBLGFBQWM2QyxTQUFTLDJCQUFZdEIsVUFBWixDQUFULENBQWQ7QUFBQSxLQUREO0FBRUxTLGtCQUFjO0FBQUEsYUFBZWEsU0FBUyw0QkFBYUMsV0FBYixDQUFULENBQWY7QUFBQTtBQUZULEdBQVA7QUFJRCxDQUxEOztrQkFPZSx5QkFBUUosZUFBUixFQUF5QkUsa0JBQXpCLEVBQTZDbEQsUUFBN0MsQyIsImZpbGUiOiIwLmQzYTdlNjNkMzU2N2RmNTI4MmQ4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBzY3JvbGxUb0VsZW1lbnQgZnJvbSAnc2Nyb2xsLXRvLWVsZW1lbnQnO1xuaW1wb3J0IHNlbmRNZXNzYWdlIGZyb20gJy4uLy4uL2FjdGlvbnMvc2VuZE1lc3NhZ2UnO1xuaW1wb3J0IGxvYWRNZXNzYWdlcyBmcm9tICcuLi8uLi9hY3Rpb25zL2xvYWRNZXNzYWdlcyc7XG5pbXBvcnQgYXBpIGZyb20gJy4uL2hlbHBlcnMvYXBpJztcblxuY2xhc3MgTWVzc2FnZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbWVzc2FnZV9lcnJvcjogJycsXG4gICAgICBzZWxlY3RlZEdyb3VwOiB7fSxcbiAgICAgIHNlbmRTdGF0dXM6ICdTRU5EJ1xuICAgIH07XG4gICAgdGhpcy5zZW5kID0gdGhpcy5zZW5kLmJpbmQodGhpcyk7XG4gIH1cblxuICBzY3JvbGxQYW5lKCkge1xuICAgIHNjcm9sbFRvRWxlbWVudCgnLnNlY29uZCcsIHtcbiAgICAgIG9mZnNldDogLTYwLFxuICAgICAgZWFzZTogJ2luLWV4cG8nLFxuICAgICAgZHVyYXRpb246IDkwMFxuICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIGNvbnN0IGlkID0gbG9jYXRpb24uaHJlZi5zcGxpdCgnLycpW2xvY2F0aW9uLmhyZWYuc3BsaXQoJy8nKS5sZW5ndGggLSAxXTtcbiAgICBhcGkobnVsbCwgYC9hcGkvZ3JvdXBzLyR7aWR9YCwgJ0dFVCcpXG4gICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkR3JvdXA6IHJlc3VsdCB9KTtcbiAgICB9KTtcbiAgICBhcGkoJycsIGAvYXBpL2dyb3Vwcy8ke2lkfS9yZWFkYCwgJ1BPU1QnKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuc2Nyb2xsUGFuZSgpO1xuICB9XG5cbiAgc2VuZChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCB7IGNvbnRlbnQsIHByaW9yaXR5IH0gPSB0aGlzO1xuICAgIGNvbnRlbnQgPSBjb250ZW50LnZhbHVlLnRyaW0oKTtcbiAgICBwcmlvcml0eSA9IHByaW9yaXR5LnZhbHVlLnRyaW0oKTtcbiAgICBjb25zdCByZWFkQnkgPSAnJztcbiAgICBpZiAoY29udGVudCA9PT0gJycgfHwgcHJpb3JpdHkgPT09ICcnKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgbWVzc2FnZV9lcnJvcjogJ0Vycm9yOiBNZXNzYWdlIGhhcyBubyBwcmlvcml0eSwgc2VuZGVyIG9yIGNvbnRlbnQnIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoeyBzZW5kU3RhdHVzOiAnU0VORC4uLicgfSk7XG4gICAgY29uc3QgbmV3TWVzc2FnZUJvZHkgPVxuICAgIGBtZXNzYWdlPSR7Y29udGVudH0mcHJpb3JpdHk9JHtwcmlvcml0eX0mdG9fZ3JvdXA9JHt0aGlzLnN0YXRlLnNlbGVjdGVkR3JvdXAuaWR9YDtcbiAgICBhcGkobmV3TWVzc2FnZUJvZHksIGAvYXBpL2dyb3Vwcy8ke3RoaXMuc3RhdGUuc2VsZWN0ZWRHcm91cC5pZH0vbWVzc2FnZWAsXG4gICAgJ1BPU1QnKS50aGVuKFxuICAgICAgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZW5kU3RhdHVzOiAnU0VORCcgfSk7XG4gICAgICAgIGNvbnN0IG5ld01lc3NhZ2UgPSB7XG4gICAgICAgICAgaWQ6IHJlc3BvbnNlLmlkLFxuICAgICAgICAgIG1lc3NhZ2U6IGNvbnRlbnQsXG4gICAgICAgICAgZnJvbV91c2VyOiBKU09OLnBhcnNlKHRoaXMucHJvcHMudXNlcikuZGF0YS51c2VybmFtZSxcbiAgICAgICAgICBwcmlvcml0eTogcHJpb3JpdHkudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICByZWFkQnlcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5wcm9wcy5sb2FkTWVzc2FnZXMoKTtcbiAgICAgICAgY29uc29sZS5sb2coJ05FVyBNRVNTQUdFOjo6OjonLCBuZXdNZXNzYWdlKTtcbiAgICAgICAgY29uc29sZS5sb2coJ0FMTCBNRVNTQUdFUzo6Ojo6JywgdGhpcy5wcm9wcy5tZXNzYWdlcyk7XG4gICAgICB9XG4gICAgKTtcbiAgICB0aGlzLmNvbnRlbnQudmFsdWUgPSAnJztcbiAgICB0aGlzLnNjcm9sbFBhbmUoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgbiA9IDA7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1jb250ZW50IGFsaWduLXRvcCBwbC0wIGNvbC1tZC03IGNvbC1sZy05XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZXNcIj5cbiAgICAgICAgICB7IHRoaXMucHJvcHMubWVzc2FnZXMubWFwKChtZXNzYWdlKSA9PiB7XG4gICAgICAgICAgICBuICs9IDE7XG4gICAgICAgICAgICBsZXQgc2Vjb25kQ2xhc3MgPSAnJztcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLm1lc3NhZ2VzLmxlbmd0aCAtIDEgPT09IG4pIHtcbiAgICAgICAgICAgICAgc2Vjb25kQ2xhc3MgPSAnIHNlY29uZCc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzZWNvbmRDbGFzcyA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BtZXNzYWdlLWNvbnRhaW5lciR7c2Vjb25kQ2xhc3N9YH0ga2V5PXttZXNzYWdlLmlkfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2VcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZS1kZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1lc3NlbmdlclwiPkB7bWVzc2FnZS5mcm9tX3VzZXJ9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BtZXNzYWdlLXR5cGUgJHttZXNzYWdlLnByaW9yaXR5LnRvTG93ZXJDYXNlKCl9YH0+XG4gICAgICAgICAgICAgICAgICAgICAge21lc3NhZ2UucHJpb3JpdHkudG9Mb3dlckNhc2UoKX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+e21lc3NhZ2UubWVzc2FnZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICB7IG1lc3NhZ2UucmVhZEJ5ID09PSAnJyAmJiBtZXNzYWdlLnJlYWRCeS5sZW5ndGggPT09IDAgPyAnJyA6XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2UtcmVhZC1saXN0XCI+UmVhZCBieTogPHNwYW4+QFxuICAgICAgICAgICAgICAgICAge21lc3NhZ2UucmVhZEJ5LnNwbGl0KCcsJykuam9pbignLCBAJyl9PC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj4pO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXctbWVzc2FnZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgcGwtMCBwci0wIHBiLTJcIj5cbiAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT1cIm1lc3NhZ2UtYm94XCIgcGxhY2Vob2xkZXI9XCJUeXBlIHlvdXIgbWVzc2FnZS4uLlwiXG4gICAgICAgICAgICAgIHJlZj17KGlucHV0KSA9PiB7IHRoaXMuY29udGVudCA9IGlucHV0OyB9fT48L3RleHRhcmVhPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBwbC0wIHByLTBcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmlvcml0eS1sZXZlbFwiPlxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiYnJvd3Nlci1kZWZhdWx0XCIgcmVmPXsoaW5wdXQpID0+IHsgdGhpcy5wcmlvcml0eSA9IGlucHV0OyB9fT5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJOb3JtYWxcIj5Ob3JtYWw8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJVcmdlbnRcIj5VcmdlbnQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJDcml0aWNhbFwiPkNyaXRpY2FsPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0XCI+PGJ1dHRvbiBkaXNhYmxlZD17dGhpcy5zdGF0ZS5zZW5kU3RhdHVzID09PSAnU0VORC4uLid9IGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9e3RoaXMuc2VuZH0+e3RoaXMuc3RhdGUuc2VuZFN0YXR1c308L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB1c2VyOiBzdGF0ZS51c2VyRGF0YVxuICB9O1xufTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgc2VuZDogbmV3TWVzc2FnZSA9PiBkaXNwYXRjaChzZW5kTWVzc2FnZShuZXdNZXNzYWdlKSksXG4gICAgbG9hZE1lc3NhZ2VzOiBhbGxNZXNzYWdlcyA9PiBkaXNwYXRjaChsb2FkTWVzc2FnZXMoYWxsTWVzc2FnZXMpKVxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoTWVzc2FnZXMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2pzL2NvbXBvbmVudHMvY29udGFpbmVycy9tZXNzYWdlcy5qcyJdLCJzb3VyY2VSb290IjoiIn0=