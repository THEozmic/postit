webpackHotUpdate(0,{

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _presentational = __webpack_require__(27);

var _ = __webpack_require__(43);

var _api = __webpack_require__(131);

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// const groups = [
//   { name: 'Andela Bootcampers', id: 1, unread: 5 },
//   { name: 'React Devs', id: 2, unread: 7 }
// ];

var Dashboard = function (_React$Component) {
  _inherits(Dashboard, _React$Component);

  function Dashboard(props) {
    _classCallCheck(this, Dashboard);

    var _this = _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).call(this, props));

    _this.state = {
      groups: [],
      loading: 'Loading...'
    };
    return _this;
  }

  _createClass(Dashboard, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      headers.append('x-access-token', sessionStorage.getItem('user').token);
      (0, _api2.default)(null, '/api/users/me/', 'GET', headers).then(function (response) {
        _this2.setState({ groups: response.groups });
      });
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
              _react2.default.createElement(_presentational.SideMenu, null),
              _react2.default.createElement(
                'div',
                { className: 'section page-content align-top pl-0 col m7 l8 xl9' },
                _react2.default.createElement(
                  'h5',
                  null,
                  'My Groups'
                ),
                this.state.loading,
                _react2.default.createElement(_.Groups, { groups: this.state.groups })
              )
            )
          )
        ),
        _react2.default.createElement(_presentational.Footer, null)
      );
    }
  }]);

  return Dashboard;
}(_react2.default.Component);

exports.default = Dashboard;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL2Rhc2hib2FyZC5qcz81YTlkIl0sIm5hbWVzIjpbIkRhc2hib2FyZCIsInByb3BzIiwic3RhdGUiLCJncm91cHMiLCJsb2FkaW5nIiwiaGVhZGVycyIsIkhlYWRlcnMiLCJhcHBlbmQiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJ0b2tlbiIsInRoZW4iLCJzZXRTdGF0ZSIsInJlc3BvbnNlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxTOzs7QUFDSixxQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHNIQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsY0FBUSxFQURHO0FBRVhDLGVBQVM7QUFGRSxLQUFiO0FBRmlCO0FBTWxCOzs7O3lDQUVvQjtBQUFBOztBQUNuQixVQUFNQyxVQUFVLElBQUlDLE9BQUosRUFBaEI7QUFDQUQsY0FBUUUsTUFBUixDQUFlLGNBQWYsRUFBK0IsbUNBQS9CO0FBQ0FGLGNBQVFFLE1BQVIsQ0FBZSxnQkFBZixFQUFpQ0MsZUFBZUMsT0FBZixDQUF1QixNQUF2QixFQUErQkMsS0FBaEU7QUFDQSx5QkFBSSxJQUFKLEVBQVUsZ0JBQVYsRUFBNEIsS0FBNUIsRUFBbUNMLE9BQW5DLEVBQTRDTSxJQUE1QyxDQUFpRCxvQkFBWTtBQUMzRCxlQUFLQyxRQUFMLENBQWMsRUFBRVQsUUFBUVUsU0FBU1YsTUFBbkIsRUFBZDtBQUNELE9BRkQ7QUFHRDs7OzZCQUNRO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRSxtRUFERjtBQUVJO0FBQUE7QUFBQSxZQUFTLFdBQVUsZ0NBQW5CO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxXQUFmO0FBQ0U7QUFBQTtBQUFBLGdCQUFLLFdBQVUsS0FBZjtBQUNFLDJFQURGO0FBRUU7QUFBQTtBQUFBLGtCQUFLLFdBQVUsbURBQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBRUkscUJBQUtELEtBQUwsQ0FBV0UsT0FGZjtBQUdFLDBEQUFRLFFBQVEsS0FBS0YsS0FBTCxDQUFXQyxNQUEzQjtBQUhGO0FBRkY7QUFERjtBQURGLFNBRko7QUFjRTtBQWRGLE9BREY7QUFrQkQ7Ozs7RUFwQ3FCLGdCQUFNVyxTOztrQkF1Q2ZkLFMiLCJmaWxlIjoiMC41ZWUyN2NiNjg3NDJjYzcwYTVhMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZvb3RlciwgSGVhZGVyLCBTaWRlTWVudSB9IGZyb20gJy4uL3ByZXNlbnRhdGlvbmFsJztcbmltcG9ydCB7IEdyb3VwcyB9IGZyb20gJy4vJztcbmltcG9ydCBhcGkgZnJvbSAnLi4vaGVscGVycy9hcGknO1xuXG4vLyBjb25zdCBncm91cHMgPSBbXG4vLyAgIHsgbmFtZTogJ0FuZGVsYSBCb290Y2FtcGVycycsIGlkOiAxLCB1bnJlYWQ6IDUgfSxcbi8vICAgeyBuYW1lOiAnUmVhY3QgRGV2cycsIGlkOiAyLCB1bnJlYWQ6IDcgfVxuLy8gXTtcblxuY2xhc3MgRGFzaGJvYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGdyb3VwczogW10sXG4gICAgICBsb2FkaW5nOiAnTG9hZGluZy4uLidcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XG4gICAgaGVhZGVycy5hcHBlbmQoJ3gtYWNjZXNzLXRva2VuJywgc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpLnRva2VuKTtcbiAgICBhcGkobnVsbCwgJy9hcGkvdXNlcnMvbWUvJywgJ0dFVCcsIGhlYWRlcnMpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGdyb3VwczogcmVzcG9uc2UuZ3JvdXBzIH0pO1xuICAgIH0pO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWRlci8+XG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicGFnZS1jb250YWluZXIgY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxTaWRlTWVudS8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uIHBhZ2UtY29udGVudCBhbGlnbi10b3AgcGwtMCBjb2wgbTcgbDggeGw5XCI+XG4gICAgICAgICAgICAgICAgICA8aDU+TXkgR3JvdXBzPC9oNT5cbiAgICAgICAgICAgICAgICAgIHsgdGhpcy5zdGF0ZS5sb2FkaW5nIH1cbiAgICAgICAgICAgICAgICAgIDxHcm91cHMgZ3JvdXBzPXt0aGlzLnN0YXRlLmdyb3Vwc30vPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPEZvb3Rlci8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9qcy9jb21wb25lbnRzL2NvbnRhaW5lcnMvZGFzaGJvYXJkLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==