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

var _reactRedux = __webpack_require__(16);

var _presentational = __webpack_require__(28);

var _ = __webpack_require__(45);

var _changeSelectedGroup = __webpack_require__(75);

var _changeSelectedGroup2 = _interopRequireDefault(_changeSelectedGroup);

var _loadMessages2 = __webpack_require__(76);

var _loadMessages3 = _interopRequireDefault(_loadMessages2);

var _api = __webpack_require__(19);

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
      loading: 'Loading...'
    };
    return _this;
  }

  _createClass(Group, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      console.log('Location:::>>>>>', this.props.location.query);
      if (selectedGroup.name === '' || selectedGroup.name === undefined || selectedGroup.name === null) {
        // location.hash = '#dashboard';
        // return null;
        // api(null, `/api/group/${}`)
      }
      console.log('GROUP:::::::', selectedGroup);
      (0, _api2.default)(null, '/api/groups/' + this.props.selectedGroup.id + '/messages', 'GET').then(function (messages) {
        _this2.setState({ loading: '', messages: messages });
        _this2.props.loadMessages(messages);
        console.log('MESSAGES::::::::::>>>> ', messages);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var messages = this.props.messages;

      console.log(messages, '=======>>>>');
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
                  this.selectedGroup.name
                ),
                _react2.default.createElement(_.Messages, { messages: messages })
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
    messages: state.messages,
    selectedGroup: state.selectedGroup
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onChangeSelectedGroup: function onChangeSelectedGroup(group) {
      return dispatch((0, _changeSelectedGroup2.default)(group));
    },
    loadMessages: function loadMessages(allMessages) {
      return dispatch((0, _loadMessages3.default)(allMessages));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Group);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL2dyb3VwLmpzPzczYWEiXSwibmFtZXMiOlsiR3JvdXAiLCJwcm9wcyIsInN0YXRlIiwibG9hZGluZyIsImNvbnNvbGUiLCJsb2ciLCJsb2NhdGlvbiIsInF1ZXJ5Iiwic2VsZWN0ZWRHcm91cCIsIm5hbWUiLCJ1bmRlZmluZWQiLCJpZCIsInRoZW4iLCJtZXNzYWdlcyIsInNldFN0YXRlIiwibG9hZE1lc3NhZ2VzIiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJvbkNoYW5nZVNlbGVjdGVkR3JvdXAiLCJncm91cCIsImFsbE1lc3NhZ2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUEsSzs7O0FBQ0osaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw4R0FDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGVBQVM7QUFERSxLQUFiO0FBRmlCO0FBS2xCOzs7O3lDQUVvQjtBQUFBOztBQUNuQkMsY0FBUUMsR0FBUixDQUFZLGtCQUFaLEVBQWdDLEtBQUtKLEtBQUwsQ0FBV0ssUUFBWCxDQUFvQkMsS0FBcEQ7QUFDQSxVQUFJQyxjQUFjQyxJQUFkLEtBQXVCLEVBQXZCLElBQTZCRCxjQUFjQyxJQUFkLEtBQXVCQyxTQUFwRCxJQUFpRUYsY0FBY0MsSUFBZCxLQUF1QixJQUE1RixFQUFrRztBQUNoRztBQUNBO0FBQ0E7QUFDRDtBQUNETCxjQUFRQyxHQUFSLENBQVksY0FBWixFQUE0QkcsYUFBNUI7QUFDQSx5QkFBSSxJQUFKLG1CQUF5QixLQUFLUCxLQUFMLENBQVdPLGFBQVgsQ0FBeUJHLEVBQWxELGdCQUFpRSxLQUFqRSxFQUF3RUMsSUFBeEUsQ0FDRSxVQUFDQyxRQUFELEVBQWM7QUFDWixlQUFLQyxRQUFMLENBQWMsRUFBRVgsU0FBUyxFQUFYLEVBQWVVLGtCQUFmLEVBQWQ7QUFDQSxlQUFLWixLQUFMLENBQVdjLFlBQVgsQ0FBd0JGLFFBQXhCO0FBQ0FULGdCQUFRQyxHQUFSLENBQVkseUJBQVosRUFBdUNRLFFBQXZDO0FBQ0QsT0FMSDtBQU1EOzs7NkJBRVE7QUFBQSxVQUNDQSxRQURELEdBQ2MsS0FBS1osS0FEbkIsQ0FDQ1ksUUFERDs7QUFFUFQsY0FBUUMsR0FBUixDQUFZUSxRQUFaLEVBQXNCLGFBQXRCO0FBQ0EsYUFDRTtBQUFBO0FBQUE7QUFDRSxtRUFERjtBQUVJO0FBQUE7QUFBQSxZQUFTLFdBQVUsZ0NBQW5CO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxXQUFmO0FBQ0U7QUFBQTtBQUFBLGdCQUFLLFdBQVUsS0FBZjtBQUNFLHdFQUFVLFNBQVMsSUFBbkIsR0FERjtBQUVFO0FBQUE7QUFBQSxrQkFBSyxXQUFVLG1EQUFmO0FBQ0U7QUFBQTtBQUFBLG9CQUFJLFdBQVUsY0FBZDtBQUErQix1QkFBS0wsYUFBTCxDQUFtQkM7QUFBbEQsaUJBREY7QUFFRyw0REFBVSxVQUFXSSxRQUFyQjtBQUZIO0FBRkY7QUFERjtBQURGLFNBRko7QUFhRTtBQWJGLE9BREY7QUFpQkQ7Ozs7RUE1Q2lCLGdCQUFNRyxTOztBQStDMUIsSUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDZixLQUFELEVBQVc7QUFDakMsU0FBTztBQUNMVyxjQUFVWCxNQUFNVyxRQURYO0FBRUxMLG1CQUFlTixNQUFNTTtBQUZoQixHQUFQO0FBSUQsQ0FMRDs7QUFPQSxJQUFNVSxxQkFBcUIsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFELEVBQWM7QUFDdkMsU0FBTztBQUNMQywyQkFBdUI7QUFBQSxhQUFTRCxTQUFTLG1DQUEwQkUsS0FBMUIsQ0FBVCxDQUFUO0FBQUEsS0FEbEI7QUFFTE4sa0JBQWM7QUFBQSxhQUFlSSxTQUFTLDRCQUFhRyxXQUFiLENBQVQsQ0FBZjtBQUFBO0FBRlQsR0FBUDtBQUlELENBTEQ7O2tCQU9lLHlCQUFRTCxlQUFSLEVBQXlCQyxrQkFBekIsRUFBNkNsQixLQUE3QyxDIiwiZmlsZSI6IjAuYjkzNDg3ZjUwZjU1NDgxNGVjZTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgRm9vdGVyLCBIZWFkZXIsIFNpZGVNZW51IH0gZnJvbSAnLi4vcHJlc2VudGF0aW9uYWwnO1xuaW1wb3J0IHsgTWVzc2FnZXMgfSBmcm9tICcuLyc7XG5pbXBvcnQgY2hhbmdlU2VsZWN0ZWRHcm91cEFjdGlvbiBmcm9tICcuLi8uLi9hY3Rpb25zL2NoYW5nZVNlbGVjdGVkR3JvdXAnO1xuaW1wb3J0IGxvYWRNZXNzYWdlcyBmcm9tICcuLi8uLi9hY3Rpb25zL2xvYWRNZXNzYWdlcyc7XG5pbXBvcnQgYXBpIGZyb20gJy4uL2hlbHBlcnMvYXBpJztcblxuY2xhc3MgR3JvdXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbG9hZGluZzogJ0xvYWRpbmcuLi4nXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBjb25zb2xlLmxvZygnTG9jYXRpb246Ojo+Pj4+PicsIHRoaXMucHJvcHMubG9jYXRpb24ucXVlcnkpO1xuICAgIGlmIChzZWxlY3RlZEdyb3VwLm5hbWUgPT09ICcnIHx8IHNlbGVjdGVkR3JvdXAubmFtZSA9PT0gdW5kZWZpbmVkIHx8IHNlbGVjdGVkR3JvdXAubmFtZSA9PT0gbnVsbCkge1xuICAgICAgLy8gbG9jYXRpb24uaGFzaCA9ICcjZGFzaGJvYXJkJztcbiAgICAgIC8vIHJldHVybiBudWxsO1xuICAgICAgLy8gYXBpKG51bGwsIGAvYXBpL2dyb3VwLyR7fWApXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCdHUk9VUDo6Ojo6OjonLCBzZWxlY3RlZEdyb3VwKTtcbiAgICBhcGkobnVsbCwgYC9hcGkvZ3JvdXBzLyR7dGhpcy5wcm9wcy5zZWxlY3RlZEdyb3VwLmlkfS9tZXNzYWdlc2AsICdHRVQnKS50aGVuKFxuICAgICAgKG1lc3NhZ2VzKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiAnJywgbWVzc2FnZXMgfSk7XG4gICAgICAgIHRoaXMucHJvcHMubG9hZE1lc3NhZ2VzKG1lc3NhZ2VzKTtcbiAgICAgICAgY29uc29sZS5sb2coJ01FU1NBR0VTOjo6Ojo6Ojo6Oj4+Pj4gJywgbWVzc2FnZXMpO1xuICAgICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBtZXNzYWdlcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlcywgJz09PT09PT0+Pj4+Jyk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkZXIvPlxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInBhZ2UtY29udGFpbmVyIGNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8U2lkZU1lbnUgaW5ncm91cD17dHJ1ZX0vPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbiBwYWdlLWNvbnRlbnQgYWxpZ24tdG9wIHBsLTAgY29sIG03IGw4IHhsOVwiPlxuICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImdyb3VwLWhlYWRlclwiPnsgdGhpcy5zZWxlY3RlZEdyb3VwLm5hbWUgfTwvaDU+XG4gICAgICAgICAgICAgICAgICAgPE1lc3NhZ2VzIG1lc3NhZ2VzPXsgbWVzc2FnZXMgfS8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8Rm9vdGVyLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgbWVzc2FnZXM6IHN0YXRlLm1lc3NhZ2VzLFxuICAgIHNlbGVjdGVkR3JvdXA6IHN0YXRlLnNlbGVjdGVkR3JvdXBcbiAgfTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICByZXR1cm4ge1xuICAgIG9uQ2hhbmdlU2VsZWN0ZWRHcm91cDogZ3JvdXAgPT4gZGlzcGF0Y2goY2hhbmdlU2VsZWN0ZWRHcm91cEFjdGlvbihncm91cCkpLFxuICAgIGxvYWRNZXNzYWdlczogYWxsTWVzc2FnZXMgPT4gZGlzcGF0Y2gobG9hZE1lc3NhZ2VzKGFsbE1lc3NhZ2VzKSlcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEdyb3VwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9qcy9jb21wb25lbnRzL2NvbnRhaW5lcnMvZ3JvdXAuanMiXSwic291cmNlUm9vdCI6IiJ9