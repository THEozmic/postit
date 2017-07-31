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

var _scrollToElement = __webpack_require__(298);

var _scrollToElement2 = _interopRequireDefault(_scrollToElement);

var _sendMessage = __webpack_require__(126);

var _sendMessage2 = _interopRequireDefault(_sendMessage);

var _helpers = __webpack_require__(321);

var _helpers2 = _interopRequireDefault(_helpers);

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
      e.preventDefault();
      var content = this.content,
          from = this.from,
          priority = this.priority;

      content = content.value.trim();
      from = '@michael';
      priority = priority.value.trim().toLowerCase();
      var readBy = [];
      if (content === '' || from === '' || priority === '') {
        this.setState({ message_error: 'Error: Message has no priority, sender or content' });
        return;
      }
      var newMessage = 'content=' + content + '&from=' + this.state.user.data.id + '&priority=' + priority;
      (0, _helpers2.default)(newMessage, '/api/groups/1/message', 'POST', headers);
      this.content.value = '';
      this.scrollPane();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

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
            if (_this2.props.messages.length - 1 === n) {
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
                    message.from
                  ),
                  _react2.default.createElement(
                    'span',
                    { className: 'message-type ' + message.priority },
                    message.priority
                  )
                ),
                _react2.default.createElement(
                  'div',
                  null,
                  message.content
                ),
                message.readBy.length === 0 ? '' : _react2.default.createElement(
                  'div',
                  { className: 'message-read-list' },
                  'Read by: ',
                  _react2.default.createElement(
                    'span',
                    null,
                    message.readBy.join(', ')
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
                _this2.content = input;
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
                    _this2.priority = input;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL21lc3NhZ2VzLmpzPzFiOGMiXSwibmFtZXMiOlsiTWVzc2FnZXMiLCJwcm9wcyIsInN0YXRlIiwibWVzc2FnZV9lcnJvciIsInNlbmQiLCJiaW5kIiwic2Nyb2xsUGFuZSIsIm9mZnNldCIsImVhc2UiLCJkdXJhdGlvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnRlbnQiLCJmcm9tIiwicHJpb3JpdHkiLCJ2YWx1ZSIsInRyaW0iLCJ0b0xvd2VyQ2FzZSIsInJlYWRCeSIsInNldFN0YXRlIiwibmV3TWVzc2FnZSIsInVzZXIiLCJkYXRhIiwiaWQiLCJoZWFkZXJzIiwibiIsIm1lc3NhZ2VzIiwibWFwIiwibWVzc2FnZSIsInNlY29uZENsYXNzIiwibGVuZ3RoIiwiam9pbiIsImlucHV0IiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwidXNlckRhdGEiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLFE7OztBQUNKLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsb0hBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxxQkFBZTtBQURKLEtBQWI7QUFHQSxVQUFLQyxJQUFMLEdBQVksTUFBS0EsSUFBTCxDQUFVQyxJQUFWLE9BQVo7QUFDQSxVQUFLQyxVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0JELElBQWhCLE9BQWxCO0FBTmlCO0FBT2xCOzs7O2lDQUVZO0FBQ1gscUNBQWdCLFNBQWhCLEVBQTJCO0FBQ3pCRSxnQkFBUSxDQUFDLEVBRGdCO0FBRXpCQyxjQUFNLFNBRm1CO0FBR3pCQyxrQkFBVTtBQUhlLE9BQTNCO0FBS0Q7Ozt3Q0FFbUI7QUFDbEIsV0FBS0gsVUFBTDtBQUNEOzs7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QTtBQUFBLG9CQUFRLE9BQU0sUUFBZDtBQUFBO0FBQUEsaUJBREY7QUFFRTtBQUFBO0FBQUEsb0JBQVEsT0FBTSxRQUFkO0FBQUE7QUFBQSxpQkFGRjtBQUdFO0FBQUE7QUFBQSxvQkFBUSxPQUFNLFVBQWQ7QUFBQTtBQUFBO0FBSEY7QUFERixhQURGO0FBUUU7QUFBQTtBQUFBLGdCQUFLLFdBQVUsT0FBZjtBQUF1QjtBQUFBO0FBQUEsa0JBQVEsV0FBVSxpQkFBbEIsRUFBb0MsU0FBUyxLQUFLNUIsSUFBbEQ7QUFBQTtBQUFBO0FBQXZCO0FBUkY7QUFMSjtBQTNCRixPQURGO0FBOENEOzs7O0VBdkZvQixnQkFBTTZCLFM7O0FBMEY3QixJQUFNQyxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNoQyxLQUFELEVBQVc7QUFDakMsU0FBTztBQUNMbUIsVUFBTW5CLE1BQU1pQztBQURQLEdBQVA7QUFHRCxDQUpEOztBQU1BLElBQU1DLHFCQUFxQixTQUFyQkEsa0JBQXFCLENBQUNDLFFBQUQsRUFBYztBQUN2QyxTQUFPO0FBQ0xqQyxVQUFNO0FBQUEsYUFBY2lDLFNBQVMsMkJBQVlqQixVQUFaLENBQVQsQ0FBZDtBQUFBO0FBREQsR0FBUDtBQUdELENBSkQ7O2tCQU1lLHlCQUFRYyxlQUFSLEVBQXlCRSxrQkFBekIsRUFBNkNwQyxRQUE3QyxDIiwiZmlsZSI6IjAuMzlmOTFiMmVmZTQxZWE2MGNjNzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHNjcm9sbFRvRWxlbWVudCBmcm9tICdzY3JvbGwtdG8tZWxlbWVudCc7XG5pbXBvcnQgc2VuZE1lc3NhZ2UgZnJvbSAnLi4vLi4vYWN0aW9ucy9zZW5kTWVzc2FnZSc7XG5pbXBvcnQgYXBpIGZyb20gJy4uL2hlbHBlcnMnO1xuXG5jbGFzcyBNZXNzYWdlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtZXNzYWdlX2Vycm9yOiAnJ1xuICAgIH07XG4gICAgdGhpcy5zZW5kID0gdGhpcy5zZW5kLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zY3JvbGxQYW5lID0gdGhpcy5zY3JvbGxQYW5lLmJpbmQodGhpcyk7XG4gIH1cblxuICBzY3JvbGxQYW5lKCkge1xuICAgIHNjcm9sbFRvRWxlbWVudCgnLnNlY29uZCcsIHtcbiAgICAgIG9mZnNldDogLTYwLFxuICAgICAgZWFzZTogJ2luLWV4cG8nLFxuICAgICAgZHVyYXRpb246IDkwMFxuICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5zY3JvbGxQYW5lKCk7XG4gIH1cblxuICBzZW5kKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IHsgY29udGVudCwgZnJvbSwgcHJpb3JpdHkgfSA9IHRoaXM7XG4gICAgY29udGVudCA9IGNvbnRlbnQudmFsdWUudHJpbSgpO1xuICAgIGZyb20gPSAnQG1pY2hhZWwnO1xuICAgIHByaW9yaXR5ID0gcHJpb3JpdHkudmFsdWUudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG4gICAgY29uc3QgcmVhZEJ5ID0gW107XG4gICAgaWYgKGNvbnRlbnQgPT09ICcnIHx8IGZyb20gPT09ICcnIHx8IHByaW9yaXR5ID09PSAnJykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1lc3NhZ2VfZXJyb3I6ICdFcnJvcjogTWVzc2FnZSBoYXMgbm8gcHJpb3JpdHksIHNlbmRlciBvciBjb250ZW50JyB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbmV3TWVzc2FnZSA9IGBjb250ZW50PSR7Y29udGVudH0mZnJvbT0ke3RoaXMuc3RhdGUudXNlci5kYXRhLmlkfSZwcmlvcml0eT0ke3ByaW9yaXR5fWA7XG4gICAgYXBpKG5ld01lc3NhZ2UsICcvYXBpL2dyb3Vwcy8xL21lc3NhZ2UnLCAnUE9TVCcsIGhlYWRlcnMpXG4gICAgdGhpcy5jb250ZW50LnZhbHVlID0gJyc7XG4gICAgdGhpcy5zY3JvbGxQYW5lKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IG4gPSAwO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtY29udGVudCBhbGlnbi10b3AgcGwtMCBjb2wtbWQtNyBjb2wtbGctOVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2VzXCI+XG4gICAgICAgICAgeyB0aGlzLnByb3BzLm1lc3NhZ2VzLm1hcCgobWVzc2FnZSkgPT4ge1xuICAgICAgICAgICAgbiArPSAxO1xuICAgICAgICAgICAgbGV0IHNlY29uZENsYXNzID0gJyc7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5tZXNzYWdlcy5sZW5ndGggLSAxID09PSBuKSB7XG4gICAgICAgICAgICAgIHNlY29uZENsYXNzID0gJyBzZWNvbmQnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc2Vjb25kQ2xhc3MgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbWVzc2FnZS1jb250YWluZXIke3NlY29uZENsYXNzfWB9IGtleT17bWVzc2FnZS5pZH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2UtZGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtZXNzZW5nZXJcIj57bWVzc2FnZS5mcm9tfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgbWVzc2FnZS10eXBlICR7bWVzc2FnZS5wcmlvcml0eX1gfT57bWVzc2FnZS5wcmlvcml0eX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+e21lc3NhZ2UuY29udGVudH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgIHttZXNzYWdlLnJlYWRCeS5sZW5ndGggPT09IDAgPyAnJyA6XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2UtcmVhZC1saXN0XCI+UmVhZCBieTogPHNwYW4+XG4gICAgICAgICAgICAgICAgICB7bWVzc2FnZS5yZWFkQnkuam9pbignLCAnKX08L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2Pik7XG4gICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ldy1tZXNzYWdlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBwbC0wIHByLTAgcGItMlwiPlxuICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwibWVzc2FnZS1ib3hcIiBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciBtZXNzYWdlLi4uXCJcbiAgICAgICAgICAgICAgcmVmPXsoaW5wdXQpID0+IHsgdGhpcy5jb250ZW50ID0gaW5wdXQ7IH19PjwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIHBsLTAgcHItMFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJpb3JpdHktbGV2ZWxcIj5cbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwiYnJvd3Nlci1kZWZhdWx0XCIgcmVmPXsoaW5wdXQpID0+IHsgdGhpcy5wcmlvcml0eSA9IGlucHV0OyB9fT5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJOb3JtYWxcIj5Ob3JtYWw8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJVcmdlbnRcIj5VcmdlbnQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJDcml0aWNhbFwiPkNyaXRpY2FsPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0XCI+PGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPXt0aGlzLnNlbmR9PlNlbmQ8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB1c2VyOiBzdGF0ZS51c2VyRGF0YVxuICB9O1xufTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgc2VuZDogbmV3TWVzc2FnZSA9PiBkaXNwYXRjaChzZW5kTWVzc2FnZShuZXdNZXNzYWdlKSlcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKE1lc3NhZ2VzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9qcy9jb21wb25lbnRzL2NvbnRhaW5lcnMvbWVzc2FnZXMuanMiXSwic291cmNlUm9vdCI6IiJ9