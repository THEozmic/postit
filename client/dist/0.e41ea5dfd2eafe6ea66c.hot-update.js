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

var _scrollToElement = __webpack_require__(298);

var _scrollToElement2 = _interopRequireDefault(_scrollToElement);

var _sendMessage = __webpack_require__(126);

var _sendMessage2 = _interopRequireDefault(_sendMessage);

var _loadMessages2 = __webpack_require__(76);

var _loadMessages3 = _interopRequireDefault(_loadMessages2);

var _api = __webpack_require__(16);

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
      (0, _api2.default)('', '/api/groups/' + id + '/read', 'POST').then(function (result) {});
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
      var newMessageBody = 'message=' + content + '&from_user=' + JSON.parse(this.props.user).data.username + '\n    &priority=' + priority + '&to_group=' + this.state.selectedGroup.id;
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
                    message.readBy.split(',').map(function (username) {
                      return '@' + username + ', ';
                    })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL21lc3NhZ2VzLmpzPzFiOGMiXSwibmFtZXMiOlsiTWVzc2FnZXMiLCJwcm9wcyIsInN0YXRlIiwibWVzc2FnZV9lcnJvciIsInNlbGVjdGVkR3JvdXAiLCJzZW5kU3RhdHVzIiwic2VuZCIsImJpbmQiLCJvZmZzZXQiLCJlYXNlIiwiZHVyYXRpb24iLCJpZCIsImxvY2F0aW9uIiwiaHJlZiIsInNwbGl0IiwibGVuZ3RoIiwidGhlbiIsInJlc3VsdCIsInNldFN0YXRlIiwic2Nyb2xsUGFuZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnRlbnQiLCJwcmlvcml0eSIsInZhbHVlIiwidHJpbSIsInJlYWRCeSIsIm5ld01lc3NhZ2VCb2R5IiwiSlNPTiIsInBhcnNlIiwidXNlciIsImRhdGEiLCJ1c2VybmFtZSIsInJlc3BvbnNlIiwibmV3TWVzc2FnZSIsIm1lc3NhZ2UiLCJmcm9tX3VzZXIiLCJ0b0xvd2VyQ2FzZSIsImxvYWRNZXNzYWdlcyIsIm1lc3NhZ2VzIiwiY29uY2F0IiwibiIsIm1hcCIsInNlY29uZENsYXNzIiwiaW5wdXQiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJ1c2VyRGF0YSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiYWxsTWVzc2FnZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLFE7OztBQUNKLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsb0hBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxxQkFBZSxFQURKO0FBRVhDLHFCQUFlLEVBRko7QUFHWEMsa0JBQVk7QUFIRCxLQUFiO0FBS0EsVUFBS0MsSUFBTCxHQUFZLE1BQUtBLElBQUwsQ0FBVUMsSUFBVixPQUFaO0FBUGlCO0FB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cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgc2Nyb2xsVG9FbGVtZW50IGZyb20gJ3Njcm9sbC10by1lbGVtZW50JztcbmltcG9ydCBzZW5kTWVzc2FnZSBmcm9tICcuLi8uLi9hY3Rpb25zL3NlbmRNZXNzYWdlJztcbmltcG9ydCBsb2FkTWVzc2FnZXMgZnJvbSAnLi4vLi4vYWN0aW9ucy9sb2FkTWVzc2FnZXMnO1xuaW1wb3J0IGFwaSBmcm9tICcuLi9oZWxwZXJzL2FwaSc7XG5cbmNsYXNzIE1lc3NhZ2VzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1lc3NhZ2VfZXJyb3I6ICcnLFxuICAgICAgc2VsZWN0ZWRHcm91cDoge30sXG4gICAgICBzZW5kU3RhdHVzOiAnU0VORCdcbiAgICB9O1xuICAgIHRoaXMuc2VuZCA9IHRoaXMuc2VuZC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgc2Nyb2xsUGFuZSgpIHtcbiAgICBzY3JvbGxUb0VsZW1lbnQoJy5zZWNvbmQnLCB7XG4gICAgICBvZmZzZXQ6IC02MCxcbiAgICAgIGVhc2U6ICdpbi1leHBvJyxcbiAgICAgIGR1cmF0aW9uOiA5MDBcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBjb25zdCBpZCA9IGxvY2F0aW9uLmhyZWYuc3BsaXQoJy8nKVtsb2NhdGlvbi5ocmVmLnNwbGl0KCcvJykubGVuZ3RoIC0gMV07XG4gICAgYXBpKG51bGwsIGAvYXBpL2dyb3Vwcy8ke2lkfWAsICdHRVQnKVxuICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZEdyb3VwOiByZXN1bHQgfSk7XG4gICAgfSk7XG4gICAgYXBpKCcnLCBgL2FwaS9ncm91cHMvJHtpZH0vcmVhZGAsICdQT1NUJylcbiAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgXG4gICAgfSk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnNjcm9sbFBhbmUoKTtcbiAgfVxuXG4gIHNlbmQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgeyBjb250ZW50LCBwcmlvcml0eSB9ID0gdGhpcztcbiAgICBjb250ZW50ID0gY29udGVudC52YWx1ZS50cmltKCk7XG4gICAgcHJpb3JpdHkgPSBwcmlvcml0eS52YWx1ZS50cmltKCk7XG4gICAgY29uc3QgcmVhZEJ5ID0gJyc7XG4gICAgaWYgKGNvbnRlbnQgPT09ICcnIHx8IHByaW9yaXR5ID09PSAnJykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1lc3NhZ2VfZXJyb3I6ICdFcnJvcjogTWVzc2FnZSBoYXMgbm8gcHJpb3JpdHksIHNlbmRlciBvciBjb250ZW50JyB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgc2VuZFN0YXR1czogJ1NFTkQuLi4nIH0pO1xuICAgIGNvbnN0IG5ld01lc3NhZ2VCb2R5ID1cbiAgICBgbWVzc2FnZT0ke2NvbnRlbnR9JmZyb21fdXNlcj0ke0pTT04ucGFyc2UodGhpcy5wcm9wcy51c2VyKS5kYXRhLnVzZXJuYW1lfVxuICAgICZwcmlvcml0eT0ke3ByaW9yaXR5fSZ0b19ncm91cD0ke3RoaXMuc3RhdGUuc2VsZWN0ZWRHcm91cC5pZH1gO1xuICAgIGFwaShuZXdNZXNzYWdlQm9keSwgYC9hcGkvZ3JvdXBzLyR7dGhpcy5zdGF0ZS5zZWxlY3RlZEdyb3VwLmlkfS9tZXNzYWdlYCwgJ1BPU1QnKS50aGVuKFxuICAgICAgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZW5kU3RhdHVzOiAnU0VORCcgfSk7XG4gICAgICAgIGNvbnN0IG5ld01lc3NhZ2UgPSB7XG4gICAgICAgICAgaWQ6IHJlc3BvbnNlLmlkLFxuICAgICAgICAgIG1lc3NhZ2U6IGNvbnRlbnQsXG4gICAgICAgICAgZnJvbV91c2VyOiBKU09OLnBhcnNlKHRoaXMucHJvcHMudXNlcikuZGF0YS51c2VybmFtZSxcbiAgICAgICAgICBwcmlvcml0eTogcHJpb3JpdHkudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICByZWFkQnlcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5wcm9wcy5sb2FkTWVzc2FnZXModGhpcy5wcm9wcy5tZXNzYWdlcy5jb25jYXQoW25ld01lc3NhZ2VdKSk7XG4gICAgICB9XG4gICAgKTtcbiAgICB0aGlzLmNvbnRlbnQudmFsdWUgPSAnJztcbiAgICB0aGlzLnNjcm9sbFBhbmUoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgbiA9IDA7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1jb250ZW50IGFsaWduLXRvcCBwbC0wIGNvbC1tZC03IGNvbC1sZy05XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZXNcIj5cbiAgICAgICAgICB7IHRoaXMucHJvcHMubWVzc2FnZXMubWFwKChtZXNzYWdlKSA9PiB7XG4gICAgICAgICAgICBuICs9IDE7XG4gICAgICAgICAgICBsZXQgc2Vjb25kQ2xhc3MgPSAnJztcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLm1lc3NhZ2VzLmxlbmd0aCAtIDEgPT09IG4pIHtcbiAgICAgICAgICAgICAgc2Vjb25kQ2xhc3MgPSAnIHNlY29uZCc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzZWNvbmRDbGFzcyA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BtZXNzYWdlLWNvbnRhaW5lciR7c2Vjb25kQ2xhc3N9YH0ga2V5PXttZXNzYWdlLmlkfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2VcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZS1kZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1lc3NlbmdlclwiPkB7bWVzc2FnZS5mcm9tX3VzZXJ9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BtZXNzYWdlLXR5cGUgJHttZXNzYWdlLnByaW9yaXR5LnRvTG93ZXJDYXNlKCl9YH0+XG4gICAgICAgICAgICAgICAgICAgICAge21lc3NhZ2UucHJpb3JpdHkudG9Mb3dlckNhc2UoKX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+e21lc3NhZ2UubWVzc2FnZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICB7IG1lc3NhZ2UucmVhZEJ5ID09PSAnJyAmJiBtZXNzYWdlLnJlYWRCeS5sZW5ndGggPT09IDAgPyAnJyA6XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2UtcmVhZC1saXN0XCI+UmVhZCBieTogPHNwYW4+XG4gICAgICAgICAgICAgICAgICB7bWVzc2FnZS5yZWFkQnkuc3BsaXQoJywnKS5tYXAodXNlcm5hbWUgPT4gYEAke3VzZXJuYW1lfSwgYCl9PC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj4pO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXctbWVzc2FnZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgcGwtMCBwci0wIHBiLTJcIj5cbiAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT1cIm1lc3NhZ2UtYm94XCIgcGxhY2Vob2xkZXI9XCJUeXBlIHlvdXIgbWVzc2FnZS4uLlwiXG4gICAgICAgICAgICAgIHJlZj17KGlucHV0KSA9PiB7IHRoaXMuY29udGVudCA9IGlucHV0OyB9fT48L3RleHRhcmVhPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBwbC0wIHByLTBcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByaW9yaXR5LWxldmVsXCI+XG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cImJyb3dzZXItZGVmYXVsdFwiIHJlZj17KGlucHV0KSA9PiB7IHRoaXMucHJpb3JpdHkgPSBpbnB1dDsgfX0+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTm9ybWFsXCI+Tm9ybWFsPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVXJnZW50XCI+VXJnZW50PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ3JpdGljYWxcIj5Dcml0aWNhbDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodFwiPjxidXR0b24gZGlzYWJsZWQ9e3RoaXMuc3RhdGUuc2VuZFN0YXR1cyA9PT0gJ1NFTkQuLi4nfSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPXt0aGlzLnNlbmR9Pnt0aGlzLnN0YXRlLnNlbmRTdGF0dXN9PC9idXR0b24+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdXNlcjogc3RhdGUudXNlckRhdGFcbiAgfTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHNlbmQ6IG5ld01lc3NhZ2UgPT4gZGlzcGF0Y2goc2VuZE1lc3NhZ2UobmV3TWVzc2FnZSkpLFxuICAgIGxvYWRNZXNzYWdlczogYWxsTWVzc2FnZXMgPT4gZGlzcGF0Y2gobG9hZE1lc3NhZ2VzKGFsbE1lc3NhZ2VzKSlcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKE1lc3NhZ2VzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9qcy9jb21wb25lbnRzL2NvbnRhaW5lcnMvbWVzc2FnZXMuanMiXSwic291cmNlUm9vdCI6IiJ9