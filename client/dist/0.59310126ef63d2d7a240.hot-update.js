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
      selectedGroup: { name: 'Loading...' }
    };
    _this.filter = _this.filter.bind();
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
    key: 'render',
    value: function render() {
      var _this3 = this;

      var messages = this.props.messages;

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
                        ref: function ref(input) {
                          _this3.filter = input;
                        },
                        onChange: this.onFilter },
                      _react2.default.createElement(
                        'option',
                        null,
                        'Unread'
                      ),
                      _react2.default.createElement(
                        'option',
                        null,
                        'Read'
                      ),
                      _react2.default.createElement(
                        'option',
                        null,
                        'All'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL2dyb3VwLmpzPzczYWEiXSwibmFtZXMiOlsiR3JvdXAiLCJwcm9wcyIsInN0YXRlIiwibG9hZGluZyIsInNlbGVjdGVkR3JvdXAiLCJuYW1lIiwiZmlsdGVyIiwiYmluZCIsImlkIiwibG9jYXRpb24iLCJocmVmIiwic3BsaXQiLCJsZW5ndGgiLCJ0aGVuIiwicmVzdWx0Iiwic2V0U3RhdGUiLCJtZXNzYWdlcyIsImxvYWRNZXNzYWdlcyIsImlucHV0Iiwib25GaWx0ZXIiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImFsbE1lc3NhZ2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUEsSzs7O0FBQ0osaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw4R0FDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGVBQVMscUJBREU7QUFFWEMscUJBQWUsRUFBRUMsTUFBTSxZQUFSO0FBRkosS0FBYjtBQUlBLFVBQUtDLE1BQUwsR0FBYyxNQUFLQSxNQUFMLENBQVlDLElBQVosRUFBZDtBQU5pQjtBQU9sQjs7Ozt5Q0FFb0I7QUFBQTs7QUFDbkIsVUFBTUMsS0FBS0MsU0FBU0MsSUFBVCxDQUFjQyxLQUFkLENBQW9CLEdBQXBCLEVBQXlCRixTQUFTQyxJQUFULENBQWNDLEtBQWQsQ0FBb0IsR0FBcEIsRUFBeUJDLE1BQXpCLEdBQWtDLENBQTNELENBQVg7QUFDQSx5QkFBSSxJQUFKLG1CQUF5QkosRUFBekIsRUFBK0IsS0FBL0IsRUFDQ0ssSUFERCxDQUNNLFVBQUNDLE1BQUQsRUFBWTtBQUNoQixlQUFLQyxRQUFMLENBQWMsRUFBRVgsZUFBZVUsTUFBakIsRUFBZDtBQUNBLDJCQUFJLElBQUosbUJBQXlCTixFQUF6QixnQkFBd0MsS0FBeEMsRUFBK0NLLElBQS9DLENBQ0UsVUFBQ0csUUFBRCxFQUFjO0FBQ1osaUJBQUtELFFBQUwsQ0FBYyxFQUFFWixTQUFTLEVBQVgsRUFBZWEsa0JBQWYsRUFBZDtBQUNBLGlCQUFLZixLQUFMLENBQVdnQixZQUFYLENBQXdCRCxRQUF4QjtBQUNELFNBSkg7QUFLRCxPQVJEO0FBU0Q7Ozs2QkFFUTtBQUFBOztBQUFBLFVBQ0NBLFFBREQsR0FDYyxLQUFLZixLQURuQixDQUNDZSxRQUREOztBQUVQLGFBQ0U7QUFBQTtBQUFBO0FBQ0UsbUVBREY7QUFFSTtBQUFBO0FBQUEsWUFBUyxXQUFVLGdDQUFuQjtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsV0FBZjtBQUNFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLEtBQWY7QUFDRSx3RUFBVSxTQUFTLElBQW5CLEdBREY7QUFFRTtBQUFBO0FBQUEsa0JBQUssV0FBVSxtREFBZjtBQUNFO0FBQUE7QUFBQSxvQkFBSyxXQUFVLHdCQUFmO0FBQ0U7QUFBQTtBQUFBLHNCQUFNLFdBQVUsY0FBaEI7QUFDRTtBQUFBO0FBQUE7QUFBTSwyQkFBS2QsS0FBTCxDQUFXRSxhQUFYLENBQXlCQztBQUEvQjtBQURGLG1CQURGO0FBSUU7QUFBQTtBQUFBLHNCQUFNLFdBQVUsMEJBQWhCO0FBQ0U7QUFBQTtBQUFBLHdCQUFRLFdBQVUsc0JBQWxCO0FBQ0EsNkJBQUssYUFBQ2EsS0FBRCxFQUFXO0FBQUUsaUNBQUtaLE1BQUwsR0FBY1ksS0FBZDtBQUFzQix5QkFEeEM7QUFFQSxrQ0FBVSxLQUFLQyxRQUZmO0FBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFIRjtBQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSkY7QUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEY7QUFERjtBQUpGLGlCQURGO0FBZUsscUJBQUtqQixLQUFMLENBQVdDLE9BQVgsS0FBdUIsRUFBdkIsR0FBNEIsS0FBS0QsS0FBTCxDQUFXQyxPQUF2QyxHQUNGLDRDQUFVLFVBQVdhLFFBQXJCO0FBaEJIO0FBRkY7QUFERjtBQURGLFNBRko7QUEyQkU7QUEzQkYsT0FERjtBQStCRDs7OztFQXhEaUIsZ0JBQU1JLFM7O0FBMkQxQixJQUFNQyxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNuQixLQUFELEVBQVc7QUFDakMsU0FBTztBQUNMYyxjQUFVZCxNQUFNYztBQURYLEdBQVA7QUFHRCxDQUpEOztBQU1BLElBQU1NLHFCQUFxQixTQUFyQkEsa0JBQXFCLENBQUNDLFFBQUQsRUFBYztBQUN2QyxTQUFPO0FBQ0xOLGtCQUFjO0FBQUEsYUFBZU0sU0FBUyw0QkFBYUMsV0FBYixDQUFULENBQWY7QUFBQTtBQURULEdBQVA7QUFHRCxDQUpEOztrQkFNZSx5QkFBUUgsZUFBUixFQUF5QkMsa0JBQXpCLEVBQTZDdEIsS0FBN0MsQyIsImZpbGUiOiIwLjU5MzEwMTI2ZWY2M2QyZDdhMjQwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IEZvb3RlciwgSGVhZGVyLCBTaWRlTWVudSB9IGZyb20gJy4uL3ByZXNlbnRhdGlvbmFsJztcbmltcG9ydCB7IE1lc3NhZ2VzIH0gZnJvbSAnLi8nO1xuaW1wb3J0IGNoYW5nZVNlbGVjdGVkR3JvdXBBY3Rpb24gZnJvbSAnLi4vLi4vYWN0aW9ucy9jaGFuZ2VTZWxlY3RlZEdyb3VwJztcbmltcG9ydCBsb2FkTWVzc2FnZXMgZnJvbSAnLi4vLi4vYWN0aW9ucy9sb2FkTWVzc2FnZXMnO1xuaW1wb3J0IGFwaSBmcm9tICcuLi9oZWxwZXJzL2FwaSc7XG5cbmNsYXNzIEdyb3VwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxvYWRpbmc6ICdMb2FkaW5nIE1lc3NhZ2VzLi4uJyxcbiAgICAgIHNlbGVjdGVkR3JvdXA6IHsgbmFtZTogJ0xvYWRpbmcuLi4nIH1cbiAgICB9O1xuICAgIHRoaXMuZmlsdGVyID0gdGhpcy5maWx0ZXIuYmluZCgpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIGNvbnN0IGlkID0gbG9jYXRpb24uaHJlZi5zcGxpdCgnLycpW2xvY2F0aW9uLmhyZWYuc3BsaXQoJy8nKS5sZW5ndGggLSAxXTtcbiAgICBhcGkobnVsbCwgYC9hcGkvZ3JvdXBzLyR7aWR9YCwgJ0dFVCcpXG4gICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkR3JvdXA6IHJlc3VsdCB9KTtcbiAgICAgIGFwaShudWxsLCBgL2FwaS9ncm91cHMvJHtpZH0vbWVzc2FnZXNgLCAnR0VUJykudGhlbihcbiAgICAgICAgKG1lc3NhZ2VzKSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6ICcnLCBtZXNzYWdlcyB9KTtcbiAgICAgICAgICB0aGlzLnByb3BzLmxvYWRNZXNzYWdlcyhtZXNzYWdlcyk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbWVzc2FnZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkZXIvPlxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInBhZ2UtY29udGFpbmVyIGNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8U2lkZU1lbnUgaW5ncm91cD17dHJ1ZX0vPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbiBwYWdlLWNvbnRlbnQgYWxpZ24tdG9wIHBsLTAgY29sIG03IGw4IHhsOVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dyb3VwLWhlYWRlci1jb250YWluZXInPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2dyb3VwLWhlYWRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgPGg1PnsgdGhpcy5zdGF0ZS5zZWxlY3RlZEdyb3VwLm5hbWUgfTwvaDU+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdtZXNzYWdlLWZpbHRlci1jb250YWluZXInPlxuICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiYnJvd3Nlci1kZWZhdWx0IGxlZnRcIlxuICAgICAgICAgICAgICAgICAgICAgIHJlZj17KGlucHV0KSA9PiB7IHRoaXMuZmlsdGVyID0gaW5wdXQ7IH19XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25GaWx0ZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5VbnJlYWQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+UmVhZDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5BbGw8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgeyB0aGlzLnN0YXRlLmxvYWRpbmcgIT09ICcnID8gdGhpcy5zdGF0ZS5sb2FkaW5nIDpcbiAgICAgICAgICAgICAgICAgICA8TWVzc2FnZXMgbWVzc2FnZXM9eyBtZXNzYWdlcyB9Lz4gfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPEZvb3Rlci8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIG1lc3NhZ2VzOiBzdGF0ZS5tZXNzYWdlcyxcbiAgfTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICByZXR1cm4ge1xuICAgIGxvYWRNZXNzYWdlczogYWxsTWVzc2FnZXMgPT4gZGlzcGF0Y2gobG9hZE1lc3NhZ2VzKGFsbE1lc3NhZ2VzKSlcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEdyb3VwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9qcy9jb21wb25lbnRzL2NvbnRhaW5lcnMvZ3JvdXAuanMiXSwic291cmNlUm9vdCI6IiJ9