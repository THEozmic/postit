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

      if (sessionStorage.getItem('user') === undefined) {
        location.hash = '#login';
      }
      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      headers.append('x-access-token', JSON.parse(sessionStorage.getItem('user')).token);
      (0, _api2.default)(null, '/api/users/me/', 'GET', headers).then(function (response) {
        console.log('Response: ', response);
        _this2.setState({ groups: response.data.groups, loading: '' });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL2Rhc2hib2FyZC5qcz81YTlkIl0sIm5hbWVzIjpbIkRhc2hib2FyZCIsInByb3BzIiwic3RhdGUiLCJncm91cHMiLCJsb2FkaW5nIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwidW5kZWZpbmVkIiwibG9jYXRpb24iLCJoYXNoIiwiaGVhZGVycyIsIkhlYWRlcnMiLCJhcHBlbmQiLCJKU09OIiwicGFyc2UiLCJ0b2tlbiIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsImRhdGEiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLFM7OztBQUNKLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsc0hBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxjQUFRLEVBREc7QUFFWEMsZUFBUztBQUZFLEtBQWI7QUFGaUI7QUFNbEI7Ozs7eUNBRW9CO0FBQUE7O0FBQ25CLFVBQUlDLGVBQWVDLE9BQWYsQ0FBdUIsTUFBdkIsTUFBbUNDLFNBQXZDLEVBQWtEO0FBQ2hEQyxpQkFBU0MsSUFBVCxHQUFnQixRQUFoQjtBQUNEO0FBQ0QsVUFBTUMsVUFBVSxJQUFJQyxPQUFKLEVBQWhCO0FBQ0FELGNBQVFFLE1BQVIsQ0FBZSxjQUFmLEVBQStCLG1DQUEvQjtBQUNBRixjQUFRRSxNQUFSLENBQWUsZ0JBQWYsRUFBaUNDLEtBQUtDLEtBQUwsQ0FBV1QsZUFBZUMsT0FBZixDQUF1QixNQUF2QixDQUFYLEVBQTJDUyxLQUE1RTtBQUNBLHlCQUFJLElBQUosRUFBVSxnQkFBVixFQUE0QixLQUE1QixFQUFtQ0wsT0FBbkMsRUFBNENNLElBQTVDLENBQWlELFVBQUNDLFFBQUQsRUFBYztBQUM3REMsZ0JBQVFDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCRixRQUExQjtBQUNBLGVBQUtHLFFBQUwsQ0FBYyxFQUFFakIsUUFBUWMsU0FBU0ksSUFBVCxDQUFjbEIsTUFBeEIsRUFBZ0NDLFNBQVMsRUFBekMsRUFBZDtBQUNELE9BSEQ7QUFJRDs7OzZCQUNRO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRSxtRUFERjtBQUVJO0FBQUE7QUFBQSxZQUFTLFdBQVUsZ0NBQW5CO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxXQUFmO0FBQ0U7QUFBQTtBQUFBLGdCQUFLLFdBQVUsS0FBZjtBQUNFLDJFQURGO0FBRUU7QUFBQTtBQUFBLGtCQUFLLFdBQVUsbURBQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBRUkscUJBQUtGLEtBQUwsQ0FBV0UsT0FGZjtBQUdFLDBEQUFRLFFBQVEsS0FBS0YsS0FBTCxDQUFXQyxNQUEzQjtBQUhGO0FBRkY7QUFERjtBQURGLFNBRko7QUFjRTtBQWRGLE9BREY7QUFrQkQ7Ozs7RUF4Q3FCLGdCQUFNbUIsUzs7a0JBMkNmdEIsUyIsImZpbGUiOiIwLjQ4NThjYTI3ZTNjZjk2YjU5MjNhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRm9vdGVyLCBIZWFkZXIsIFNpZGVNZW51IH0gZnJvbSAnLi4vcHJlc2VudGF0aW9uYWwnO1xuaW1wb3J0IHsgR3JvdXBzIH0gZnJvbSAnLi8nO1xuaW1wb3J0IGFwaSBmcm9tICcuLi9oZWxwZXJzL2FwaSc7XG5cbi8vIGNvbnN0IGdyb3VwcyA9IFtcbi8vICAgeyBuYW1lOiAnQW5kZWxhIEJvb3RjYW1wZXJzJywgaWQ6IDEsIHVucmVhZDogNSB9LFxuLy8gICB7IG5hbWU6ICdSZWFjdCBEZXZzJywgaWQ6IDIsIHVucmVhZDogNyB9XG4vLyBdO1xuXG5jbGFzcyBEYXNoYm9hcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZ3JvdXBzOiBbXSxcbiAgICAgIGxvYWRpbmc6ICdMb2FkaW5nLi4uJ1xuICAgIH07XG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgaWYgKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBsb2NhdGlvbi5oYXNoID0gJyNsb2dpbic7XG4gICAgfVxuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XG4gICAgaGVhZGVycy5hcHBlbmQoJ3gtYWNjZXNzLXRva2VuJywgSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpLnRva2VuKTtcbiAgICBhcGkobnVsbCwgJy9hcGkvdXNlcnMvbWUvJywgJ0dFVCcsIGhlYWRlcnMpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnUmVzcG9uc2U6ICcsIHJlc3BvbnNlKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBncm91cHM6IHJlc3BvbnNlLmRhdGEuZ3JvdXBzLCBsb2FkaW5nOiAnJyB9KTtcbiAgICB9KTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkZXIvPlxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInBhZ2UtY29udGFpbmVyIGNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8U2lkZU1lbnUvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbiBwYWdlLWNvbnRlbnQgYWxpZ24tdG9wIHBsLTAgY29sIG03IGw4IHhsOVwiPlxuICAgICAgICAgICAgICAgICAgPGg1Pk15IEdyb3VwczwvaDU+XG4gICAgICAgICAgICAgICAgICB7IHRoaXMuc3RhdGUubG9hZGluZyB9XG4gICAgICAgICAgICAgICAgICA8R3JvdXBzIGdyb3Vwcz17dGhpcy5zdGF0ZS5ncm91cHN9Lz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxGb290ZXIvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL2Rhc2hib2FyZC5qcyJdLCJzb3VyY2VSb290IjoiIn0=