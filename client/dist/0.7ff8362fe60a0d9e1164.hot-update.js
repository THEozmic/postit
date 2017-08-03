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
        console.log('LAST MESSAGE:::', _this2.props.messages[_this2.props.messages.length - 1].id);
      });
    }
  }, {
    key: 'render',
    value: function render() {
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
                  'h5',
                  { className: 'group-header' },
                  this.state.selectedGroup.name
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL2dyb3VwLmpzPzczYWEiXSwibmFtZXMiOlsiR3JvdXAiLCJwcm9wcyIsInN0YXRlIiwibG9hZGluZyIsInNlbGVjdGVkR3JvdXAiLCJuYW1lIiwiaWQiLCJsb2NhdGlvbiIsImhyZWYiLCJzcGxpdCIsImxlbmd0aCIsInRoZW4iLCJyZXN1bHQiLCJzZXRTdGF0ZSIsIm1lc3NhZ2VzIiwibG9hZE1lc3NhZ2VzIiwiY29uc29sZSIsImxvZyIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiYWxsTWVzc2FnZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxLOzs7QUFDSixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDhHQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsZUFBUyxxQkFERTtBQUVYQyxxQkFBZSxFQUFFQyxNQUFNLFlBQVI7QUFGSixLQUFiO0FBRmlCO0FBTWxCOzs7O3lDQUVvQjtBQUFBOztBQUNuQixVQUFNQyxLQUFLQyxTQUFTQyxJQUFULENBQWNDLEtBQWQsQ0FBb0IsR0FBcEIsRUFBeUJGLFNBQVNDLElBQVQsQ0FBY0MsS0FBZCxDQUFvQixHQUFwQixFQUF5QkMsTUFBekIsR0FBa0MsQ0FBM0QsQ0FBWDtBQUNBLHlCQUFJLElBQUosbUJBQXlCSixFQUF6QixFQUErQixLQUEvQixFQUNDSyxJQURELENBQ00sVUFBQ0MsTUFBRCxFQUFZO0FBQ2hCLGVBQUtDLFFBQUwsQ0FBYyxFQUFFVCxlQUFlUSxNQUFqQixFQUFkO0FBQ0EsMkJBQUksSUFBSixtQkFBeUJOLEVBQXpCLGdCQUF3QyxLQUF4QyxFQUErQ0ssSUFBL0MsQ0FDRSxVQUFDRyxRQUFELEVBQWM7QUFDWixpQkFBS0QsUUFBTCxDQUFjLEVBQUVWLFNBQVMsRUFBWCxFQUFlVyxrQkFBZixFQUFkO0FBQ0EsaUJBQUtiLEtBQUwsQ0FBV2MsWUFBWCxDQUF3QkQsUUFBeEI7QUFDRCxTQUpIO0FBS0FFLGdCQUFRQyxHQUFSLENBQVksaUJBQVosRUFBK0IsT0FBS2hCLEtBQUwsQ0FBV2EsUUFBWCxDQUFvQixPQUFLYixLQUFMLENBQVdhLFFBQVgsQ0FBb0JKLE1BQXBCLEdBQTZCLENBQWpELEVBQW9ESixFQUFuRjtBQUNELE9BVEQ7QUFVRDs7OzZCQUVRO0FBQUEsVUFDQ1EsUUFERCxHQUNjLEtBQUtiLEtBRG5CLENBQ0NhLFFBREQ7O0FBRVAsYUFDRTtBQUFBO0FBQUE7QUFDRSxtRUFERjtBQUVJO0FBQUE7QUFBQSxZQUFTLFdBQVUsZ0NBQW5CO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxXQUFmO0FBQ0U7QUFBQTtBQUFBLGdCQUFLLFdBQVUsS0FBZjtBQUNFLHdFQUFVLFNBQVMsSUFBbkIsR0FERjtBQUVFO0FBQUE7QUFBQSxrQkFBSyxXQUFVLG1EQUFmO0FBQ0U7QUFBQTtBQUFBLG9CQUFJLFdBQVUsY0FBZDtBQUErQix1QkFBS1osS0FBTCxDQUFXRSxhQUFYLENBQXlCQztBQUF4RCxpQkFERjtBQUVLLHFCQUFLSCxLQUFMLENBQVdDLE9BQVgsS0FBdUIsRUFBdkIsR0FBNEIsS0FBS0QsS0FBTCxDQUFXQyxPQUF2QyxHQUNGLDRDQUFVLFVBQVdXLFFBQXJCO0FBSEg7QUFGRjtBQURGO0FBREYsU0FGSjtBQWNFO0FBZEYsT0FERjtBQWtCRDs7OztFQTNDaUIsZ0JBQU1JLFM7O0FBOEMxQixJQUFNQyxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNqQixLQUFELEVBQVc7QUFDakMsU0FBTztBQUNMWSxjQUFVWixNQUFNWTtBQURYLEdBQVA7QUFHRCxDQUpEOztBQU1BLElBQU1NLHFCQUFxQixTQUFyQkEsa0JBQXFCLENBQUNDLFFBQUQsRUFBYztBQUN2QyxTQUFPO0FBQ0xOLGtCQUFjO0FBQUEsYUFBZU0sU0FBUyw0QkFBYUMsV0FBYixDQUFULENBQWY7QUFBQTtBQURULEdBQVA7QUFHRCxDQUpEOztrQkFNZSx5QkFBUUgsZUFBUixFQUF5QkMsa0JBQXpCLEVBQTZDcEIsS0FBN0MsQyIsImZpbGUiOiIwLjdmZjgzNjJmZTYwYTBkOWUxMTY0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IEZvb3RlciwgSGVhZGVyLCBTaWRlTWVudSB9IGZyb20gJy4uL3ByZXNlbnRhdGlvbmFsJztcbmltcG9ydCB7IE1lc3NhZ2VzIH0gZnJvbSAnLi8nO1xuaW1wb3J0IGNoYW5nZVNlbGVjdGVkR3JvdXBBY3Rpb24gZnJvbSAnLi4vLi4vYWN0aW9ucy9jaGFuZ2VTZWxlY3RlZEdyb3VwJztcbmltcG9ydCBsb2FkTWVzc2FnZXMgZnJvbSAnLi4vLi4vYWN0aW9ucy9sb2FkTWVzc2FnZXMnO1xuaW1wb3J0IGFwaSBmcm9tICcuLi9oZWxwZXJzL2FwaSc7XG5cbmNsYXNzIEdyb3VwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxvYWRpbmc6ICdMb2FkaW5nIE1lc3NhZ2VzLi4uJyxcbiAgICAgIHNlbGVjdGVkR3JvdXA6IHsgbmFtZTogJ0xvYWRpbmcuLi4nIH1cbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIGNvbnN0IGlkID0gbG9jYXRpb24uaHJlZi5zcGxpdCgnLycpW2xvY2F0aW9uLmhyZWYuc3BsaXQoJy8nKS5sZW5ndGggLSAxXTtcbiAgICBhcGkobnVsbCwgYC9hcGkvZ3JvdXBzLyR7aWR9YCwgJ0dFVCcpXG4gICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkR3JvdXA6IHJlc3VsdCB9KTtcbiAgICAgIGFwaShudWxsLCBgL2FwaS9ncm91cHMvJHtpZH0vbWVzc2FnZXNgLCAnR0VUJykudGhlbihcbiAgICAgICAgKG1lc3NhZ2VzKSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6ICcnLCBtZXNzYWdlcyB9KTtcbiAgICAgICAgICB0aGlzLnByb3BzLmxvYWRNZXNzYWdlcyhtZXNzYWdlcyk7XG4gICAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2coJ0xBU1QgTUVTU0FHRTo6OicsIHRoaXMucHJvcHMubWVzc2FnZXNbdGhpcy5wcm9wcy5tZXNzYWdlcy5sZW5ndGggLSAxXS5pZCk7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBtZXNzYWdlcyB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWRlci8+XG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicGFnZS1jb250YWluZXIgY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxTaWRlTWVudSBpbmdyb3VwPXt0cnVlfS8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uIHBhZ2UtY29udGVudCBhbGlnbi10b3AgcGwtMCBjb2wgbTcgbDggeGw5XCI+XG4gICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZ3JvdXAtaGVhZGVyXCI+eyB0aGlzLnN0YXRlLnNlbGVjdGVkR3JvdXAubmFtZSB9PC9oNT5cbiAgICAgICAgICAgICAgICAgICB7IHRoaXMuc3RhdGUubG9hZGluZyAhPT0gJycgPyB0aGlzLnN0YXRlLmxvYWRpbmcgOlxuICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlcyBtZXNzYWdlcz17IG1lc3NhZ2VzIH0vPiB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8Rm9vdGVyLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgbWVzc2FnZXM6IHN0YXRlLm1lc3NhZ2VzLFxuICB9O1xufTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgbG9hZE1lc3NhZ2VzOiBhbGxNZXNzYWdlcyA9PiBkaXNwYXRjaChsb2FkTWVzc2FnZXMoYWxsTWVzc2FnZXMpKVxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoR3JvdXApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2pzL2NvbXBvbmVudHMvY29udGFpbmVycy9ncm91cC5qcyJdLCJzb3VyY2VSb290IjoiIn0=