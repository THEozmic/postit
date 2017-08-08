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

var _loadMessages = __webpack_require__(76);

var _loadMessages2 = _interopRequireDefault(_loadMessages);

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
      sendStatus: 'SEND',
      messages: []
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
      this.setState({ messages: this.props.messages });
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
        var newMessages = _this3.props.messages.concat([newMessage]);
        _this3.props.loadMessages(newMessages);
        // this.setState({ messages: newMessages });
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
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Messages);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL21lc3NhZ2VzLmpzPzFiOGMiXSwibmFtZXMiOlsiTWVzc2FnZXMiLCJwcm9wcyIsInN0YXRlIiwibWVzc2FnZV9lcnJvciIsInNlbGVjdGVkR3JvdXAiLCJzZW5kU3RhdHVzIiwibWVzc2FnZXMiLCJzZW5kIiwiYmluZCIsIm9mZnNldCIsImVhc2UiLCJkdXJhdGlvbiIsImlkIiwibG9jYXRpb24iLCJocmVmIiwic3BsaXQiLCJsZW5ndGgiLCJzZXRTdGF0ZSIsInRoZW4iLCJyZXN1bHQiLCJzY3JvbGxQYW5lIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29udGVudCIsInByaW9yaXR5IiwidmFsdWUiLCJ0cmltIiwicmVhZEJ5IiwibmV3TWVzc2FnZUJvZHkiLCJyZXNwb25zZSIsIm5ld01lc3NhZ2UiLCJtZXNzYWdlIiwiZnJvbV91c2VyIiwiSlNPTiIsInBhcnNlIiwidXNlciIsImRhdGEiLCJ1c2VybmFtZSIsInRvTG93ZXJDYXNlIiwibmV3TWVzc2FnZXMiLCJjb25jYXQiLCJsb2FkTWVzc2FnZXMiLCJuIiwibWFwIiwic2Vjb25kQ2xhc3MiLCJqb2luIiwiaW5wdXQiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJ1c2VyRGF0YSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxROzs7QUFDSixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLG9IQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMscUJBQWUsRUFESjtBQUVYQyxxQkFBZSxFQUZKO0FBR1hDLGtCQUFZLE1BSEQ7QUFJWEMsZ0JBQVU7QUFKQyxLQUFiO0FBTUEsVUFBS0MsSUFBTCxHQUFZLE1BQUtBLElBQUwsQ0FBVUMsSUFBVixPQUFaO0FBUmlCO0FBU2xCOzs7O2lDQUVZO0FBQ1gscUNBQWdCLFNBQWhCLEVBQTJCO0FBQ3pCQyxnQkFBUSxDQUFDLEVBRGdCO0FBRXpCQyxjQUFNLFNBRm1CO0FBR3pCQyxrQkFBVTtBQUhlLE9BQTNCO0FBS0Q7Ozt5Q0FFb0I7QUFBQTs7QUFDbkIsVUFBTUMsS0FBS0MsU0FBU0MsSUFBVCxDQUFjQyxLQUFkLENBQW9CLEdBQXBCLEVBQXlCRixTQUFTQyxJQUFULENBQWNDLEtBQWQsQ0FBb0IsR0FBcEIsRUFBeUJDLE1BQXpCLEdBQWtDLENBQTNELENBQVg7QUFDQSxXQUFLQyxRQUFMLENBQWMsRUFBRVgsVUFBVSxLQUFLTCxLQUFMLENBQVdLLFFBQXZCLEVBQWQ7QUFDQSx5QkFBSSxJQUFKLG1CQUF5Qk0sRUFBekIsRUFBK0IsS0FBL0IsRUFDQ00sSUFERCxDQUNNLFVBQUNDLE1BQUQsRUFBWTtBQUNoQixlQUFLRixRQUFMLENBQWMsRUFBRWIsZUFBZWUsTUFBakIsRUFBZDtBQUNELE9BSEQ7QUFJQSx5QkFBSSxFQUFKLG1CQUF1QlAsRUFBdkIsWUFBa0MsTUFBbEM7QUFDRDs7O3dDQUVtQjtBQUNsQixXQUFLUSxVQUFMO0FBQ0Q7Ozt5QkFFSUMsQyxFQUFHO0FBQUE7O0FBQ05BLFFBQUVDLGNBQUY7QUFETSxVQUVBQyxPQUZBLEdBRXNCLElBRnRCLENBRUFBLE9BRkE7QUFBQSxVQUVTQyxRQUZULEdBRXNCLElBRnRCLENBRVNBLFFBRlQ7O0FBR05ELGdCQUFVQSxRQUFRRSxLQUFSLENBQWNDLElBQWQsRUFBVjtBQUNBRixpQkFBV0EsU0FBU0MsS0FBVCxDQUFlQyxJQUFmLEVBQVg7QUFDQSxVQUFNQyxTQUFTLEVBQWY7QUFDQSxVQUFJSixZQUFZLEVBQVosSUFBa0JDLGFBQWEsRUFBbkMsRUFBdUM7QUFDckMsYUFBS1AsUUFBTCxDQUFjLEVBQUVkLGVBQWUsbURBQWpCLEVBQWQ7QUFDQTtBQUNEOztBQUVELFdBQUtjLFFBQUwsQ0FBYyxFQUFFWixZQUFZLFNBQWQsRUFBZDtBQUNBLFVBQU11Qiw4QkFDS0wsT0FETCxrQkFDeUJDLFFBRHpCLGtCQUM4QyxLQUFLdEIsS0FBTCxDQUFXRSxhQUFYLENBQXlCUSxFQUQ3RTtBQUVBLHlCQUFJZ0IsY0FBSixtQkFBbUMsS0FBSzFCLEtBQUwsQ0FBV0UsYUFBWCxDQUF5QlEsRUFBNUQsZUFDQSxNQURBLEVBQ1FNLElBRFIsQ0FFRSxVQUFDVyxRQUFELEVBQWM7QUFDWixlQUFLWixRQUFMLENBQWMsRUFBRVosWUFBWSxNQUFkLEVBQWQ7QUFDQSxZQUFNeUIsYUFBYTtBQUNqQmxCLGNBQUlpQixTQUFTakIsRUFESTtBQUVqQm1CLG1CQUFTUixPQUZRO0FBR2pCUyxxQkFBV0MsS0FBS0MsS0FBTCxDQUFXLE9BQUtqQyxLQUFMLENBQVdrQyxJQUF0QixFQUE0QkMsSUFBNUIsQ0FBaUNDLFFBSDNCO0FBSWpCYixvQkFBVUEsU0FBU2MsV0FBVCxFQUpPO0FBS2pCWDtBQUxpQixTQUFuQjtBQU9BLFlBQU1ZLGNBQWMsT0FBS3RDLEtBQUwsQ0FBV0ssUUFBWCxDQUFvQmtDLE1BQXBCLENBQTJCLENBQUNWLFVBQUQsQ0FBM0IsQ0FBcEI7QUFDQSxlQUFLN0IsS0FBTCxDQUFXd0MsWUFBWCxDQUF3QkYsV0FBeEI7QUFDQTtBQUNELE9BZEg7QUFnQkEsV0FBS2hCLE9BQUwsQ0FBYUUsS0FBYixHQUFxQixFQUFyQjtBQUNBLFdBQUtMLFVBQUw7QUFDRDs7OzZCQUVRO0FBQUE7O0FBQ1AsVUFBSXNCLElBQUksQ0FBUjtBQUNBLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSwrQ0FBZjtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsVUFBZjtBQUNJLGVBQUt6QyxLQUFMLENBQVdLLFFBQVgsQ0FBb0JxQyxHQUFwQixDQUF3QixVQUFDWixPQUFELEVBQWE7QUFDckNXLGlCQUFLLENBQUw7QUFDQSxnQkFBSUUsY0FBYyxFQUFsQjtBQUNBLGdCQUFJLE9BQUszQyxLQUFMLENBQVdLLFFBQVgsQ0FBb0JVLE1BQXBCLEdBQTZCLENBQTdCLEtBQW1DMEIsQ0FBdkMsRUFBMEM7QUFDeENFLDRCQUFjLFNBQWQ7QUFDRCxhQUZELE1BRU87QUFDTEEsNEJBQWMsRUFBZDtBQUNEO0FBQ0QsbUJBQ0U7QUFBQTtBQUFBLGdCQUFLLGlDQUErQkEsV0FBcEMsRUFBbUQsS0FBS2IsUUFBUW5CLEVBQWhFO0FBQ0U7QUFBQTtBQUFBLGtCQUFLLFdBQVUsU0FBZjtBQUNFO0FBQUE7QUFBQSxvQkFBSyxXQUFVLGlCQUFmO0FBQ0U7QUFBQTtBQUFBLHNCQUFNLFdBQVUsV0FBaEI7QUFBQTtBQUE4Qm1CLDRCQUFRQztBQUF0QyxtQkFERjtBQUVFO0FBQUE7QUFBQSxzQkFBTSw2QkFBMkJELFFBQVFQLFFBQVIsQ0FBaUJjLFdBQWpCLEVBQWpDO0FBQ0dQLDRCQUFRUCxRQUFSLENBQWlCYyxXQUFqQjtBQURIO0FBRkYsaUJBREY7QUFNRTtBQUFBO0FBQUE7QUFBTVAsMEJBQVFBO0FBQWQsaUJBTkY7QUFPS0Esd0JBQVFKLE1BQVIsS0FBbUIsRUFBbkIsSUFBeUJJLFFBQVFKLE1BQVIsQ0FBZVgsTUFBZixLQUEwQixDQUFuRCxHQUF1RCxFQUF2RCxHQUNIO0FBQUE7QUFBQSxvQkFBSyxXQUFVLG1CQUFmO0FBQUE7QUFBNEM7QUFBQTtBQUFBO0FBQUE7QUFDM0NlLDRCQUFRSixNQUFSLENBQWVaLEtBQWYsQ0FBcUIsR0FBckIsRUFBMEI4QixJQUExQixDQUErQixLQUEvQjtBQUQyQztBQUE1QztBQVJGO0FBREYsYUFERjtBQWVELFdBdkJDO0FBREosU0FERjtBQTRCRTtBQUFBO0FBQUEsWUFBSyxXQUFVLGFBQWY7QUFDSTtBQUFBO0FBQUEsY0FBSyxXQUFVLHVCQUFmO0FBQ0Usd0RBQVUsV0FBVSxhQUFwQixFQUFrQyxhQUFZLHNCQUE5QztBQUNBLG1CQUFLLGFBQUNDLEtBQUQsRUFBVztBQUFFLHVCQUFLdkIsT0FBTCxHQUFldUIsS0FBZjtBQUF1QixlQUR6QztBQURGLFdBREo7QUFLSTtBQUFBO0FBQUEsY0FBSyxXQUFVLGtCQUFmO0FBQ0U7QUFBQTtBQUFBLGdCQUFLLFdBQVUsZ0JBQWY7QUFDRTtBQUFBO0FBQUEsa0JBQVEsV0FBVSxpQkFBbEIsRUFBb0MsS0FBSyxhQUFDQSxLQUFELEVBQVc7QUFBRSwyQkFBS3RCLFFBQUwsR0FBZ0JzQixLQUFoQjtBQUF3QixtQkFBOUU7QUFDRTtBQUFBO0FBQUEsb0JBQVEsT0FBTSxRQUFkO0FBQUE7QUFBQSxpQkFERjtBQUVFO0FBQUE7QUFBQSxvQkFBUSxPQUFNLFFBQWQ7QUFBQTtBQUFBLGlCQUZGO0FBR0U7QUFBQTtBQUFBLG9CQUFRLE9BQU0sVUFBZDtBQUFBO0FBQUE7QUFIRjtBQURGLGFBREY7QUFRRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxPQUFmO0FBQXVCO0FBQUE7QUFBQSxrQkFBUSxVQUFVLEtBQUs1QyxLQUFMLENBQVdHLFVBQVgsS0FBMEIsU0FBNUMsRUFBdUQsV0FBVSxpQkFBakUsRUFBbUYsU0FBUyxLQUFLRSxJQUFqRztBQUF3RyxxQkFBS0wsS0FBTCxDQUFXRztBQUFuSDtBQUF2QjtBQVJGO0FBTEo7QUE1QkYsT0FERjtBQStDRDs7OztFQXJIb0IsZ0JBQU0wQyxTOztBQXdIN0IsSUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDOUMsS0FBRCxFQUFXO0FBQ2pDLFNBQU87QUFDTGlDLFVBQU1qQyxNQUFNK0M7QUFEUCxHQUFQO0FBR0QsQ0FKRDs7QUFNQSxJQUFNQyxxQkFBcUIsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFELEVBQWM7QUFDdkMsU0FBTztBQUNMNUMsVUFBTTtBQUFBLGFBQWM0QyxTQUFTLDJCQUFZckIsVUFBWixDQUFULENBQWQ7QUFBQTtBQURELEdBQVA7QUFHRCxDQUpEOztrQkFNZSx5QkFBUWtCLGVBQVIsRUFBeUJFLGtCQUF6QixFQUE2Q2xELFFBQTdDLEMiLCJmaWxlIjoiMC5mMTE3ZWZlYTQ5MTNjMjEzYmZlNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgc2Nyb2xsVG9FbGVtZW50IGZyb20gJ3Njcm9sbC10by1lbGVtZW50JztcbmltcG9ydCBzZW5kTWVzc2FnZSBmcm9tICcuLi8uLi9hY3Rpb25zL3NlbmRNZXNzYWdlJztcbmltcG9ydCBsb2FkTWVzc2FnZXMgZnJvbSAnLi4vLi4vYWN0aW9ucy9sb2FkTWVzc2FnZXMnO1xuaW1wb3J0IGFwaSBmcm9tICcuLi9oZWxwZXJzL2FwaSc7XG5cbmNsYXNzIE1lc3NhZ2VzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1lc3NhZ2VfZXJyb3I6ICcnLFxuICAgICAgc2VsZWN0ZWRHcm91cDoge30sXG4gICAgICBzZW5kU3RhdHVzOiAnU0VORCcsXG4gICAgICBtZXNzYWdlczogW11cbiAgICB9O1xuICAgIHRoaXMuc2VuZCA9IHRoaXMuc2VuZC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgc2Nyb2xsUGFuZSgpIHtcbiAgICBzY3JvbGxUb0VsZW1lbnQoJy5zZWNvbmQnLCB7XG4gICAgICBvZmZzZXQ6IC02MCxcbiAgICAgIGVhc2U6ICdpbi1leHBvJyxcbiAgICAgIGR1cmF0aW9uOiA5MDBcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBjb25zdCBpZCA9IGxvY2F0aW9uLmhyZWYuc3BsaXQoJy8nKVtsb2NhdGlvbi5ocmVmLnNwbGl0KCcvJykubGVuZ3RoIC0gMV07XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1lc3NhZ2VzOiB0aGlzLnByb3BzLm1lc3NhZ2VzIH0pO1xuICAgIGFwaShudWxsLCBgL2FwaS9ncm91cHMvJHtpZH1gLCAnR0VUJylcbiAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRHcm91cDogcmVzdWx0IH0pO1xuICAgIH0pO1xuICAgIGFwaSgnJywgYC9hcGkvZ3JvdXBzLyR7aWR9L3JlYWRgLCAnUE9TVCcpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5zY3JvbGxQYW5lKCk7XG4gIH1cblxuICBzZW5kKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IHsgY29udGVudCwgcHJpb3JpdHkgfSA9IHRoaXM7XG4gICAgY29udGVudCA9IGNvbnRlbnQudmFsdWUudHJpbSgpO1xuICAgIHByaW9yaXR5ID0gcHJpb3JpdHkudmFsdWUudHJpbSgpO1xuICAgIGNvbnN0IHJlYWRCeSA9ICcnO1xuICAgIGlmIChjb250ZW50ID09PSAnJyB8fCBwcmlvcml0eSA9PT0gJycpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBtZXNzYWdlX2Vycm9yOiAnRXJyb3I6IE1lc3NhZ2UgaGFzIG5vIHByaW9yaXR5LCBzZW5kZXIgb3IgY29udGVudCcgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbmRTdGF0dXM6ICdTRU5ELi4uJyB9KTtcbiAgICBjb25zdCBuZXdNZXNzYWdlQm9keSA9XG4gICAgYG1lc3NhZ2U9JHtjb250ZW50fSZwcmlvcml0eT0ke3ByaW9yaXR5fSZ0b19ncm91cD0ke3RoaXMuc3RhdGUuc2VsZWN0ZWRHcm91cC5pZH1gO1xuICAgIGFwaShuZXdNZXNzYWdlQm9keSwgYC9hcGkvZ3JvdXBzLyR7dGhpcy5zdGF0ZS5zZWxlY3RlZEdyb3VwLmlkfS9tZXNzYWdlYCxcbiAgICAnUE9TVCcpLnRoZW4oXG4gICAgICAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbmRTdGF0dXM6ICdTRU5EJyB9KTtcbiAgICAgICAgY29uc3QgbmV3TWVzc2FnZSA9IHtcbiAgICAgICAgICBpZDogcmVzcG9uc2UuaWQsXG4gICAgICAgICAgbWVzc2FnZTogY29udGVudCxcbiAgICAgICAgICBmcm9tX3VzZXI6IEpTT04ucGFyc2UodGhpcy5wcm9wcy51c2VyKS5kYXRhLnVzZXJuYW1lLFxuICAgICAgICAgIHByaW9yaXR5OiBwcmlvcml0eS50b0xvd2VyQ2FzZSgpLFxuICAgICAgICAgIHJlYWRCeVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBuZXdNZXNzYWdlcyA9IHRoaXMucHJvcHMubWVzc2FnZXMuY29uY2F0KFtuZXdNZXNzYWdlXSk7XG4gICAgICAgIHRoaXMucHJvcHMubG9hZE1lc3NhZ2VzKG5ld01lc3NhZ2VzKTtcbiAgICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7IG1lc3NhZ2VzOiBuZXdNZXNzYWdlcyB9KTtcbiAgICAgIH1cbiAgICApO1xuICAgIHRoaXMuY29udGVudC52YWx1ZSA9ICcnO1xuICAgIHRoaXMuc2Nyb2xsUGFuZSgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBuID0gMDtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWNvbnRlbnQgYWxpZ24tdG9wIHBsLTAgY29sLW1kLTcgY29sLWxnLTlcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlc1wiPlxuICAgICAgICAgIHsgdGhpcy5wcm9wcy5tZXNzYWdlcy5tYXAoKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgICAgIG4gKz0gMTtcbiAgICAgICAgICAgIGxldCBzZWNvbmRDbGFzcyA9ICcnO1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMubWVzc2FnZXMubGVuZ3RoIC0gMSA9PT0gbikge1xuICAgICAgICAgICAgICBzZWNvbmRDbGFzcyA9ICcgc2Vjb25kJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNlY29uZENsYXNzID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG1lc3NhZ2UtY29udGFpbmVyJHtzZWNvbmRDbGFzc31gfSBrZXk9e21lc3NhZ2UuaWR9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlLWRldGFpbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWVzc2VuZ2VyXCI+QHttZXNzYWdlLmZyb21fdXNlcn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YG1lc3NhZ2UtdHlwZSAke21lc3NhZ2UucHJpb3JpdHkudG9Mb3dlckNhc2UoKX1gfT5cbiAgICAgICAgICAgICAgICAgICAgICB7bWVzc2FnZS5wcmlvcml0eS50b0xvd2VyQ2FzZSgpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdj57bWVzc2FnZS5tZXNzYWdlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgIHsgbWVzc2FnZS5yZWFkQnkgPT09ICcnICYmIG1lc3NhZ2UucmVhZEJ5Lmxlbmd0aCA9PT0gMCA/ICcnIDpcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZS1yZWFkLWxpc3RcIj5SZWFkIGJ5OiA8c3Bhbj5AXG4gICAgICAgICAgICAgICAgICB7bWVzc2FnZS5yZWFkQnkuc3BsaXQoJywnKS5qb2luKCcsIEAnKX08L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2Pik7XG4gICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ldy1tZXNzYWdlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBwbC0wIHByLTAgcGItMlwiPlxuICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwibWVzc2FnZS1ib3hcIiBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciBtZXNzYWdlLi4uXCJcbiAgICAgICAgICAgICAgcmVmPXsoaW5wdXQpID0+IHsgdGhpcy5jb250ZW50ID0gaW5wdXQ7IH19PjwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIHBsLTAgcHItMFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaW9yaXR5LWxldmVsXCI+XG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJicm93c2VyLWRlZmF1bHRcIiByZWY9eyhpbnB1dCkgPT4geyB0aGlzLnByaW9yaXR5ID0gaW5wdXQ7IH19PlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk5vcm1hbFwiPk5vcm1hbDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlVyZ2VudFwiPlVyZ2VudDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkNyaXRpY2FsXCI+Q3JpdGljYWw8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRcIj48YnV0dG9uIGRpc2FibGVkPXt0aGlzLnN0YXRlLnNlbmRTdGF0dXMgPT09ICdTRU5ELi4uJ30gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17dGhpcy5zZW5kfT57dGhpcy5zdGF0ZS5zZW5kU3RhdHVzfTwvYnV0dG9uPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHVzZXI6IHN0YXRlLnVzZXJEYXRhXG4gIH07XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBzZW5kOiBuZXdNZXNzYWdlID0+IGRpc3BhdGNoKHNlbmRNZXNzYWdlKG5ld01lc3NhZ2UpKSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKE1lc3NhZ2VzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9qcy9jb21wb25lbnRzL2NvbnRhaW5lcnMvbWVzc2FnZXMuanMiXSwic291cmNlUm9vdCI6IiJ9