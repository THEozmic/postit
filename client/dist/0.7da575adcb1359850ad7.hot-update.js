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

var _loadMessages2 = __webpack_require__(124);

var _loadMessages3 = _interopRequireDefault(_loadMessages2);

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
      var newMessageBody = 'message=' + content + '&from_user=' + JSON.parse(this.props.user).data.id + '\n    &priority=' + priority + '&to_group=' + this.props.selectedGroup.id;
      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      headers.append('x-access-token', JSON.parse(sessionStorage.getItem('user')).token);
      (0, _api2.default)(newMessageBody, '/api/groups/' + this.props.selectedGroup.id + '/message', 'POST', headers).then(function (response) {
        var newMessage = {
          id: response.id,
          message: content,
          from_user: JSON.parse(_this2.props.user).data.username,
          priority: priority.toLowerCase()
        };
        console.log('NEW MESSAGE CONCAT:::::', _this2.props.messages.concat([newMessage]));
        _this2.props.loadMessages(_this2.props.messages.concat([newMessage]));

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
    },
    loadMessages: function loadMessages(allMessages) {
      return dispatch((0, _loadMessages3.default)(allMessages));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Messages);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL21lc3NhZ2VzLmpzPzFiOGMiXSwibmFtZXMiOlsiTWVzc2FnZXMiLCJwcm9wcyIsInN0YXRlIiwibWVzc2FnZV9lcnJvciIsInNlbmQiLCJiaW5kIiwic2Nyb2xsUGFuZSIsIm9mZnNldCIsImVhc2UiLCJkdXJhdGlvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnRlbnQiLCJwcmlvcml0eSIsInZhbHVlIiwidHJpbSIsInJlYWRCeSIsInNldFN0YXRlIiwiY29uc29sZSIsImxvZyIsInVzZXIiLCJuZXdNZXNzYWdlQm9keSIsIkpTT04iLCJwYXJzZSIsImRhdGEiLCJpZCIsInNlbGVjdGVkR3JvdXAiLCJoZWFkZXJzIiwiSGVhZGVycyIsImFwcGVuZCIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsInRva2VuIiwidGhlbiIsInJlc3BvbnNlIiwibmV3TWVzc2FnZSIsIm1lc3NhZ2UiLCJmcm9tX3VzZXIiLCJ1c2VybmFtZSIsInRvTG93ZXJDYXNlIiwibWVzc2FnZXMiLCJjb25jYXQiLCJsb2FkTWVzc2FnZXMiLCJuIiwibWFwIiwic2Vjb25kQ2xhc3MiLCJsZW5ndGgiLCJpbnB1dCIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsInVzZXJEYXRhIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJhbGxNZXNzYWdlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUEsUTs7O0FBQ0osb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxvSEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLHFCQUFlO0FBREosS0FBYjtBQUdBLFVBQUtDLElBQUwsR0FBWSxNQUFLQSxJQUFMLENBQVVDLElBQVYsT0FBWjtBQUNBLFVBQUtD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QUdFO0FBQUE7QUFBQSxvQkFBUSxPQUFNLFVBQWQ7QUFBQTtBQUFBO0FBSEY7QUFERixhQURGO0FBUUU7QUFBQTtBQUFBLGdCQUFLLFdBQVUsT0FBZjtBQUF1QjtBQUFBO0FBQUEsa0JBQVEsV0FBVSxpQkFBbEIsRUFBb0MsU0FBUyxLQUFLM0MsSUFBbEQ7QUFBQTtBQUFBO0FBQXZCO0FBUkY7QUFMSjtBQTVCRixPQURGO0FBK0NEOzs7O0VBM0dvQixnQkFBTTRDLFM7O0FBOEc3QixJQUFNQyxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUMvQyxLQUFELEVBQVc7QUFDakMsU0FBTztBQUNMa0IsVUFBTWxCLE1BQU1nRCxRQURQO0FBRUx4QixtQkFBZXhCLE1BQU13QjtBQUZoQixHQUFQO0FBSUQsQ0FMRDs7QUFPQSxJQUFNeUIscUJBQXFCLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRCxFQUFjO0FBQ3ZDLFNBQU87QUFDTGhELFVBQU07QUFBQSxhQUFjZ0QsU0FBUywyQkFBWWpCLFVBQVosQ0FBVCxDQUFkO0FBQUEsS0FERDtBQUVMTyxrQkFBYztBQUFBLGFBQWVVLFNBQVMsNEJBQWFDLFdBQWIsQ0FBVCxDQUFmO0FBQUE7QUFGVCxHQUFQO0FBSUQsQ0FMRDs7a0JBT2UseUJBQVFKLGVBQVIsRUFBeUJFLGtCQUF6QixFQUE2Q25ELFFBQTdDLEMiLCJmaWxlIjoiMC43ZGE1NzVhZGNiMTM1OTg1MGFkNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgc2Nyb2xsVG9FbGVtZW50IGZyb20gJ3Njcm9sbC10by1lbGVtZW50JztcbmltcG9ydCBzZW5kTWVzc2FnZSBmcm9tICcuLi8uLi9hY3Rpb25zL3NlbmRNZXNzYWdlJztcbmltcG9ydCBsb2FkTWVzc2FnZXMgZnJvbSAnLi4vLi4vYWN0aW9ucy9sb2FkTWVzc2FnZXMnO1xuaW1wb3J0IGFwaSBmcm9tICcuLi9oZWxwZXJzL2FwaSc7XG5cbmNsYXNzIE1lc3NhZ2VzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1lc3NhZ2VfZXJyb3I6ICcnXG4gICAgfTtcbiAgICB0aGlzLnNlbmQgPSB0aGlzLnNlbmQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNjcm9sbFBhbmUgPSB0aGlzLnNjcm9sbFBhbmUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHNjcm9sbFBhbmUoKSB7XG4gICAgc2Nyb2xsVG9FbGVtZW50KCcuc2Vjb25kJywge1xuICAgICAgb2Zmc2V0OiAtNjAsXG4gICAgICBlYXNlOiAnaW4tZXhwbycsXG4gICAgICBkdXJhdGlvbjogOTAwXG4gICAgfSk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnNjcm9sbFBhbmUoKTtcbiAgfVxuXG4gIHNlbmQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgeyBjb250ZW50LCBwcmlvcml0eSB9ID0gdGhpcztcbiAgICBjb250ZW50ID0gY29udGVudC52YWx1ZS50cmltKCk7XG4gICAgcHJpb3JpdHkgPSBwcmlvcml0eS52YWx1ZS50cmltKCk7XG4gICAgY29uc3QgcmVhZEJ5ID0gW107XG4gICAgaWYgKGNvbnRlbnQgPT09ICcnIHx8IHByaW9yaXR5ID09PSAnJykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1lc3NhZ2VfZXJyb3I6ICdFcnJvcjogTWVzc2FnZSBoYXMgbm8gcHJpb3JpdHksIHNlbmRlciBvciBjb250ZW50JyB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc29sZS5sb2coJ1BST1BTX1VTRVI6Ojo6Ojo6JywgdGhpcy5wcm9wcy51c2VyKTtcbiAgICBjb25zdCBuZXdNZXNzYWdlQm9keSA9XG4gICAgYG1lc3NhZ2U9JHtjb250ZW50fSZmcm9tX3VzZXI9JHtKU09OLnBhcnNlKHRoaXMucHJvcHMudXNlcikuZGF0YS5pZH1cbiAgICAmcHJpb3JpdHk9JHtwcmlvcml0eX0mdG9fZ3JvdXA9JHt0aGlzLnByb3BzLnNlbGVjdGVkR3JvdXAuaWR9YDtcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuICAgIGhlYWRlcnMuYXBwZW5kKCd4LWFjY2Vzcy10b2tlbicsIEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKS50b2tlbik7XG4gICAgYXBpKG5ld01lc3NhZ2VCb2R5LCBgL2FwaS9ncm91cHMvJHt0aGlzLnByb3BzLnNlbGVjdGVkR3JvdXAuaWR9L21lc3NhZ2VgLCAnUE9TVCcsIGhlYWRlcnMpLnRoZW4oXG4gICAgICAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgY29uc3QgbmV3TWVzc2FnZSA9IHtcbiAgICAgICAgICBpZDogcmVzcG9uc2UuaWQsXG4gICAgICAgICAgbWVzc2FnZTogY29udGVudCxcbiAgICAgICAgICBmcm9tX3VzZXI6IEpTT04ucGFyc2UodGhpcy5wcm9wcy51c2VyKS5kYXRhLnVzZXJuYW1lLFxuICAgICAgICAgIHByaW9yaXR5OiBwcmlvcml0eS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIH07XG4gICAgICAgIGNvbnNvbGUubG9nKCdORVcgTUVTU0FHRSBDT05DQVQ6Ojo6OicsIHRoaXMucHJvcHMubWVzc2FnZXMuY29uY2F0KFtuZXdNZXNzYWdlXSkpO1xuICAgICAgICB0aGlzLnByb3BzLmxvYWRNZXNzYWdlcyh0aGlzLnByb3BzLm1lc3NhZ2VzLmNvbmNhdChbbmV3TWVzc2FnZV0pKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICB9XG4gICAgKTtcbiAgICB0aGlzLmNvbnRlbnQudmFsdWUgPSAnJztcbiAgICB0aGlzLnNjcm9sbFBhbmUoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgbiA9IDA7XG4gICAgY29uc29sZS5sb2coJ01FU1NBR0VTOjo6Ojo6OiAnLCB0aGlzLnByb3BzLm1lc3NhZ2VzKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWNvbnRlbnQgYWxpZ24tdG9wIHBsLTAgY29sLW1kLTcgY29sLWxnLTlcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlc1wiPlxuICAgICAgICAgIHsgdGhpcy5wcm9wcy5tZXNzYWdlcy5tYXAoKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgICAgIG4gKz0gMTtcbiAgICAgICAgICAgIGxldCBzZWNvbmRDbGFzcyA9ICcnO1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMubWVzc2FnZXMubGVuZ3RoIC0gMSA9PT0gbikge1xuICAgICAgICAgICAgICBzZWNvbmRDbGFzcyA9ICcgc2Vjb25kJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNlY29uZENsYXNzID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG1lc3NhZ2UtY29udGFpbmVyJHtzZWNvbmRDbGFzc31gfSBrZXk9e21lc3NhZ2UuaWR9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlLWRldGFpbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWVzc2VuZ2VyXCI+e21lc3NhZ2UuZnJvbV91c2VyfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgbWVzc2FnZS10eXBlICR7bWVzc2FnZS5wcmlvcml0eS50b0xvd2VyQ2FzZSgpfWB9PlxuICAgICAgICAgICAgICAgICAgICAgIHttZXNzYWdlLnByaW9yaXR5LnRvTG93ZXJDYXNlKCl9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2PnttZXNzYWdlLm1lc3NhZ2V9PC9kaXY+XG4gICAgICAgICAgICAgICAgICB7Lyoge21lc3NhZ2UucmVhZEJ5Lmxlbmd0aCA9PT0gMCA/ICcnIDpcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZS1yZWFkLWxpc3RcIj5SZWFkIGJ5OiA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgIHttZXNzYWdlLnJlYWRCeS5qb2luKCcsICcpfTwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIH0gKi99XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2Pik7XG4gICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ldy1tZXNzYWdlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBwbC0wIHByLTAgcGItMlwiPlxuICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwibWVzc2FnZS1ib3hcIiBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciBtZXNzYWdlLi4uXCJcbiAgICAgICAgICAgICAgcmVmPXsoaW5wdXQpID0+IHsgdGhpcy5jb250ZW50ID0gaW5wdXQ7IH19PjwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIHBsLTAgcHItMFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJpb3JpdHktbGV2ZWxcIj5cbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwiYnJvd3Nlci1kZWZhdWx0XCIgcmVmPXsoaW5wdXQpID0+IHsgdGhpcy5wcmlvcml0eSA9IGlucHV0OyB9fT5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJOb3JtYWxcIj5Ob3JtYWw8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJVcmdlbnRcIj5VcmdlbnQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJDcml0aWNhbFwiPkNyaXRpY2FsPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0XCI+PGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPXt0aGlzLnNlbmR9PlNlbmQ8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB1c2VyOiBzdGF0ZS51c2VyRGF0YSxcbiAgICBzZWxlY3RlZEdyb3VwOiBzdGF0ZS5zZWxlY3RlZEdyb3VwXG4gIH07XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBzZW5kOiBuZXdNZXNzYWdlID0+IGRpc3BhdGNoKHNlbmRNZXNzYWdlKG5ld01lc3NhZ2UpKSxcbiAgICBsb2FkTWVzc2FnZXM6IGFsbE1lc3NhZ2VzID0+IGRpc3BhdGNoKGxvYWRNZXNzYWdlcyhhbGxNZXNzYWdlcykpXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShNZXNzYWdlcyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL21lc3NhZ2VzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==