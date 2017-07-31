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

var _reactRedux = __webpack_require__(16);

var _scrollToElement = __webpack_require__(299);

var _scrollToElement2 = _interopRequireDefault(_scrollToElement);

var _sendMessage = __webpack_require__(126);

var _sendMessage2 = _interopRequireDefault(_sendMessage);

var _api = __webpack_require__(26);

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
      message_error: ''
    };
    _this.send = _this.send.bind(_this);
    _this.scrollPane = _this.scrollPane.bind(_this);
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
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.scrollPane();
    }
  }, {
    key: 'send',
    value: function send(e) {
      var _this2 = this;

      e.preventDefault();
      var content = this.content,
          priority = this.priority;

      content = content.value.trim();
      priority = priority.value.trim();
      var readBy = [];
      if (content === '' || priority === '') {
        this.setState({ message_error: 'Error: Message has no priority, sender or content' });
        return;
      }
      console.log('PROPS_USER:::::::', this.props.user);
      var newMessage = 'message=' + content + '&from_user=' + JSON.parse(this.props.user).data.id + '\n    &priority=' + priority + '&to_group=' + this.props.selectedGroup.id;
      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      headers.append('x-access-token', JSON.parse(sessionStorage.getItem('user')).token);
      (0, _api2.default)(newMessage, '/api/groups/' + this.props.selectedGroup.id + '/message', 'POST', headers).then(function (response) {
        _this2.props.loadMessages(messages);
        console.log(response);
      });
      this.content.value = '';
      this.scrollPane();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var n = 0;
      console.log('MESSAGES::::::: ', this.props.messages);
      return _react2.default.createElement(
        'div',
        { className: 'page-content align-top pl-0 col-md-7 col-lg-9' },
        _react2.default.createElement(
          'div',
          { className: 'messages' },
          this.props.messages.map(function (message) {
            n += 1;
            var secondClass = '';
            if (_this3.props.messages.length - 1 === n) {
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
                _this3.content = input;
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
                    _this3.priority = input;
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
                { className: 'btn btn-primary', onClick: this.send },
                'Send'
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
    user: state.userData,
    selectedGroup: state.selectedGroup
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL21lc3NhZ2VzLmpzPzFiOGMiXSwibmFtZXMiOlsiTWVzc2FnZXMiLCJwcm9wcyIsInN0YXRlIiwibWVzc2FnZV9lcnJvciIsInNlbmQiLCJiaW5kIiwic2Nyb2xsUGFuZSIsIm9mZnNldCIsImVhc2UiLCJkdXJhdGlvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnRlbnQiLCJwcmlvcml0eSIsInZhbHVlIiwidHJpbSIsInJlYWRCeSIsInNldFN0YXRlIiwiY29uc29sZSIsImxvZyIsInVzZXIiLCJuZXdNZXNzYWdlIiwiSlNPTiIsInBhcnNlIiwiZGF0YSIsImlkIiwic2VsZWN0ZWRHcm91cCIsImhlYWRlcnMiLCJIZWFkZXJzIiwiYXBwZW5kIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwidG9rZW4iLCJ0aGVuIiwicmVzcG9uc2UiLCJsb2FkTWVzc2FnZXMiLCJtZXNzYWdlcyIsIm4iLCJtYXAiLCJtZXNzYWdlIiwic2Vjb25kQ2xhc3MiLCJsZW5ndGgiLCJmcm9tX3VzZXIiLCJ0b0xvd2VyQ2FzZSIsImlucHV0IiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwidXNlckRhdGEiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLFE7OztBQUNKLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsb0hBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxxQkFBZTtBQURKLEtBQWI7QUFHQSxVQUFLQyxJQUFMLEdBQVksTUFBS0EsSUFBTCxDQUFVQyxJQUFWLE9BQVo7QUFDQSxVQUFLQyxVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0JELElBQWhCLE9BQWxCO0FBTmlCO0FBT2xCOzs7O2lD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Q0w3QyxVQUFNO0FBQUEsYUFBYzZDLFNBQVMsMkJBQVk1QixVQUFaLENBQVQsQ0FBZDtBQUFBO0FBREQsR0FBUDtBQUdELENBSkQ7O2tCQU1lLHlCQUFReUIsZUFBUixFQUF5QkUsa0JBQXpCLEVBQTZDaEQsUUFBN0MsQyIsImZpbGUiOiIwLmNkYTg0ZmQ2OWFiZWNmMTZiMDhiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBzY3JvbGxUb0VsZW1lbnQgZnJvbSAnc2Nyb2xsLXRvLWVsZW1lbnQnO1xuaW1wb3J0IHNlbmRNZXNzYWdlIGZyb20gJy4uLy4uL2FjdGlvbnMvc2VuZE1lc3NhZ2UnO1xuaW1wb3J0IGFwaSBmcm9tICcuLi9oZWxwZXJzL2FwaSc7XG5cbmNsYXNzIE1lc3NhZ2VzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1lc3NhZ2VfZXJyb3I6ICcnXG4gICAgfTtcbiAgICB0aGlzLnNlbmQgPSB0aGlzLnNlbmQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNjcm9sbFBhbmUgPSB0aGlzLnNjcm9sbFBhbmUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHNjcm9sbFBhbmUoKSB7XG4gICAgc2Nyb2xsVG9FbGVtZW50KCcuc2Vjb25kJywge1xuICAgICAgb2Zmc2V0OiAtNjAsXG4gICAgICBlYXNlOiAnaW4tZXhwbycsXG4gICAgICBkdXJhdGlvbjogOTAwXG4gICAgfSk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnNjcm9sbFBhbmUoKTtcbiAgfVxuXG4gIHNlbmQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgeyBjb250ZW50LCBwcmlvcml0eSB9ID0gdGhpcztcbiAgICBjb250ZW50ID0gY29udGVudC52YWx1ZS50cmltKCk7XG4gICAgcHJpb3JpdHkgPSBwcmlvcml0eS52YWx1ZS50cmltKCk7XG4gICAgY29uc3QgcmVhZEJ5ID0gW107XG4gICAgaWYgKGNvbnRlbnQgPT09ICcnIHx8IHByaW9yaXR5ID09PSAnJykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1lc3NhZ2VfZXJyb3I6ICdFcnJvcjogTWVzc2FnZSBoYXMgbm8gcHJpb3JpdHksIHNlbmRlciBvciBjb250ZW50JyB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc29sZS5sb2coJ1BST1BTX1VTRVI6Ojo6Ojo6JywgdGhpcy5wcm9wcy51c2VyKTtcbiAgICBjb25zdCBuZXdNZXNzYWdlID1cbiAgICBgbWVzc2FnZT0ke2NvbnRlbnR9JmZyb21fdXNlcj0ke0pTT04ucGFyc2UodGhpcy5wcm9wcy51c2VyKS5kYXRhLmlkfVxuICAgICZwcmlvcml0eT0ke3ByaW9yaXR5fSZ0b19ncm91cD0ke3RoaXMucHJvcHMuc2VsZWN0ZWRHcm91cC5pZH1gO1xuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XG4gICAgaGVhZGVycy5hcHBlbmQoJ3gtYWNjZXNzLXRva2VuJywgSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpLnRva2VuKTtcbiAgICBhcGkobmV3TWVzc2FnZSwgYC9hcGkvZ3JvdXBzLyR7dGhpcy5wcm9wcy5zZWxlY3RlZEdyb3VwLmlkfS9tZXNzYWdlYCwgJ1BPU1QnLCBoZWFkZXJzKS50aGVuKFxuICAgICAgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMubG9hZE1lc3NhZ2VzKG1lc3NhZ2VzKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgfVxuICAgICk7XG4gICAgdGhpcy5jb250ZW50LnZhbHVlID0gJyc7XG4gICAgdGhpcy5zY3JvbGxQYW5lKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IG4gPSAwO1xuICAgIGNvbnNvbGUubG9nKCdNRVNTQUdFUzo6Ojo6OjogJywgdGhpcy5wcm9wcy5tZXNzYWdlcyk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1jb250ZW50IGFsaWduLXRvcCBwbC0wIGNvbC1tZC03IGNvbC1sZy05XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZXNcIj5cbiAgICAgICAgICB7IHRoaXMucHJvcHMubWVzc2FnZXMubWFwKChtZXNzYWdlKSA9PiB7XG4gICAgICAgICAgICBuICs9IDE7XG4gICAgICAgICAgICBsZXQgc2Vjb25kQ2xhc3MgPSAnJztcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLm1lc3NhZ2VzLmxlbmd0aCAtIDEgPT09IG4pIHtcbiAgICAgICAgICAgICAgc2Vjb25kQ2xhc3MgPSAnIHNlY29uZCc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzZWNvbmRDbGFzcyA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BtZXNzYWdlLWNvbnRhaW5lciR7c2Vjb25kQ2xhc3N9YH0ga2V5PXttZXNzYWdlLmlkfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2VcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZS1kZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1lc3NlbmdlclwiPnttZXNzYWdlLmZyb21fdXNlcn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YG1lc3NhZ2UtdHlwZSAke21lc3NhZ2UucHJpb3JpdHkudG9Mb3dlckNhc2UoKX1gfT5cbiAgICAgICAgICAgICAgICAgICAgICB7bWVzc2FnZS5wcmlvcml0eS50b0xvd2VyQ2FzZSgpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdj57bWVzc2FnZS5tZXNzYWdlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgey8qIHttZXNzYWdlLnJlYWRCeS5sZW5ndGggPT09IDAgPyAnJyA6XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2UtcmVhZC1saXN0XCI+UmVhZCBieTogPHNwYW4+XG4gICAgICAgICAgICAgICAgICB7bWVzc2FnZS5yZWFkQnkuam9pbignLCAnKX08L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICAgICAgICB9ICovfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj4pO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXctbWVzc2FnZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgcGwtMCBwci0wIHBiLTJcIj5cbiAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT1cIm1lc3NhZ2UtYm94XCIgcGxhY2Vob2xkZXI9XCJUeXBlIHlvdXIgbWVzc2FnZS4uLlwiXG4gICAgICAgICAgICAgIHJlZj17KGlucHV0KSA9PiB7IHRoaXMuY29udGVudCA9IGlucHV0OyB9fT48L3RleHRhcmVhPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBwbC0wIHByLTBcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByaW9yaXR5LWxldmVsXCI+XG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cImJyb3dzZXItZGVmYXVsdFwiIHJlZj17KGlucHV0KSA9PiB7IHRoaXMucHJpb3JpdHkgPSBpbnB1dDsgfX0+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTm9ybWFsXCI+Tm9ybWFsPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVXJnZW50XCI+VXJnZW50PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ3JpdGljYWxcIj5Dcml0aWNhbDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodFwiPjxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17dGhpcy5zZW5kfT5TZW5kPC9idXR0b24+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdXNlcjogc3RhdGUudXNlckRhdGEsXG4gICAgc2VsZWN0ZWRHcm91cDogc3RhdGUuc2VsZWN0ZWRHcm91cFxuICB9O1xufTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgc2VuZDogbmV3TWVzc2FnZSA9PiBkaXNwYXRjaChzZW5kTWVzc2FnZShuZXdNZXNzYWdlKSlcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKE1lc3NhZ2VzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9qcy9jb21wb25lbnRzL2NvbnRhaW5lcnMvbWVzc2FnZXMuanMiXSwic291cmNlUm9vdCI6IiJ9