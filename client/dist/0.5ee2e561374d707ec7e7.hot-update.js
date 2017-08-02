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

      var groupId = 4;
      console.log('Location:::>>>>>', this.props.location.query);
      (0, _api2.default)(null, '/api/group/' + groupId);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL2dyb3VwLmpzPzczYWEiXSwibmFtZXMiOlsiR3JvdXAiLCJwcm9wcyIsInN0YXRlIiwibG9hZGluZyIsImdyb3VwSWQiLCJjb25zb2xlIiwibG9nIiwibG9jYXRpb24iLCJxdWVyeSIsInNlbGVjdGVkR3JvdXAiLCJpZCIsInRoZW4iLCJtZXNzYWdlcyIsInNldFN0YXRlIiwibG9hZE1lc3NhZ2VzIiwibmFtZSIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwib25DaGFuZ2VTZWxlY3RlZEdyb3VwIiwiZ3JvdXAiLCJhbGxNZXNzYWdlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLEs7OztBQUNKLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxlQUFTO0FBREUsS0FBYjtBQUZpQjtBQUtsQjs7Ozt5Q0FFb0I7QUFBQTs7QUFDbkIsVUFBTUMsVUFBVSxDQUFoQjtBQUNBQyxjQUFRQyxHQUFSLENBQVksa0JBQVosRUFBZ0MsS0FBS0wsS0FBTCxDQUFXTSxRQUFYLENBQW9CQyxLQUFwRDtBQUNBLHlCQUFJLElBQUosa0JBQXdCSixPQUF4QjtBQUNBQyxjQUFRQyxHQUFSLENBQVksY0FBWixFQUE0QkcsYUFBNUI7QUFDQSx5QkFBSSxJQUFKLG1CQUF5QixLQUFLUixLQUFMLENBQVdRLGFBQVgsQ0FBeUJDLEVBQWxELGdCQUFpRSxLQUFqRSxFQUF3RUMsSUFBeEUsQ0FDRSxVQUFDQyxRQUFELEVBQWM7QUFDWixlQUFLQyxRQUFMLENBQWMsRUFBRVYsU0FBUyxFQUFYLEVBQWVTLGtCQUFmLEVBQWQ7QUFDQSxlQUFLWCxLQUFMLENBQVdhLFlBQVgsQ0FBd0JGLFFBQXhCO0FBQ0FQLGdCQUFRQyxHQUFSLENBQVkseUJBQVosRUFBdUNNLFFBQXZDO0FBQ0QsT0FMSDtBQU1EOzs7NkJBRVE7QUFBQSxVQUNDQSxRQURELEdBQ2MsS0FBS1gsS0FEbkIsQ0FDQ1csUUFERDs7QUFFUFAsY0FBUUMsR0FBUixDQUFZTSxRQUFaLEVBQXNCLGFBQXRCO0FBQ0EsYUFDRTtBQUFBO0FBQUE7QUFDRSxtRUFERjtBQUVJO0FBQUE7QUFBQSxZQUFTLFdBQVUsZ0NBQW5CO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxXQUFmO0FBQ0U7QUFBQTtBQUFBLGdCQUFLLFdBQVUsS0FBZjtBQUNFLHdFQUFVLFNBQVMsSUFBbkIsR0FERjtBQUVFO0FBQUE7QUFBQSxrQkFBSyxXQUFVLG1EQUFmO0FBQ0U7QUFBQTtBQUFBLG9CQUFJLFdBQVUsY0FBZDtBQUErQix1QkFBS0gsYUFBTCxDQUFtQk07QUFBbEQsaUJBREY7QUFFRyw0REFBVSxVQUFXSCxRQUFyQjtBQUZIO0FBRkY7QUFERjtBQURGLFNBRko7QUFhRTtBQWJGLE9BREY7QUFpQkQ7Ozs7RUF6Q2lCLGdCQUFNSSxTOztBQTRDMUIsSUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDZixLQUFELEVBQVc7QUFDakMsU0FBTztBQUNMVSxjQUFVVixNQUFNVSxRQURYO0FBRUxILG1CQUFlUCxNQUFNTztBQUZoQixHQUFQO0FBSUQsQ0FMRDs7QUFPQSxJQUFNUyxxQkFBcUIsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFELEVBQWM7QUFDdkMsU0FBTztBQUNMQywyQkFBdUI7QUFBQSxhQUFTRCxTQUFTLG1DQUEwQkUsS0FBMUIsQ0FBVCxDQUFUO0FBQUEsS0FEbEI7QUFFTFAsa0JBQWM7QUFBQSxhQUFlSyxTQUFTLDRCQUFhRyxXQUFiLENBQVQsQ0FBZjtBQUFBO0FBRlQsR0FBUDtBQUlELENBTEQ7O2tCQU9lLHlCQUFRTCxlQUFSLEVBQXlCQyxrQkFBekIsRUFBNkNsQixLQUE3QyxDIiwiZmlsZSI6IjAuNWVlMmU1NjEzNzRkNzA3ZWM3ZTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgRm9vdGVyLCBIZWFkZXIsIFNpZGVNZW51IH0gZnJvbSAnLi4vcHJlc2VudGF0aW9uYWwnO1xuaW1wb3J0IHsgTWVzc2FnZXMgfSBmcm9tICcuLyc7XG5pbXBvcnQgY2hhbmdlU2VsZWN0ZWRHcm91cEFjdGlvbiBmcm9tICcuLi8uLi9hY3Rpb25zL2NoYW5nZVNlbGVjdGVkR3JvdXAnO1xuaW1wb3J0IGxvYWRNZXNzYWdlcyBmcm9tICcuLi8uLi9hY3Rpb25zL2xvYWRNZXNzYWdlcyc7XG5pbXBvcnQgYXBpIGZyb20gJy4uL2hlbHBlcnMvYXBpJztcblxuY2xhc3MgR3JvdXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbG9hZGluZzogJ0xvYWRpbmcuLi4nXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBjb25zdCBncm91cElkID0gNDtcbiAgICBjb25zb2xlLmxvZygnTG9jYXRpb246Ojo+Pj4+PicsIHRoaXMucHJvcHMubG9jYXRpb24ucXVlcnkpO1xuICAgIGFwaShudWxsLCBgL2FwaS9ncm91cC8ke2dyb3VwSWR9YCk7XG4gICAgY29uc29sZS5sb2coJ0dST1VQOjo6Ojo6OicsIHNlbGVjdGVkR3JvdXApO1xuICAgIGFwaShudWxsLCBgL2FwaS9ncm91cHMvJHt0aGlzLnByb3BzLnNlbGVjdGVkR3JvdXAuaWR9L21lc3NhZ2VzYCwgJ0dFVCcpLnRoZW4oXG4gICAgICAobWVzc2FnZXMpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6ICcnLCBtZXNzYWdlcyB9KTtcbiAgICAgICAgdGhpcy5wcm9wcy5sb2FkTWVzc2FnZXMobWVzc2FnZXMpO1xuICAgICAgICBjb25zb2xlLmxvZygnTUVTU0FHRVM6Ojo6Ojo6Ojo6Pj4+PiAnLCBtZXNzYWdlcyk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG1lc3NhZ2VzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2VzLCAnPT09PT09PT4+Pj4nKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWRlci8+XG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicGFnZS1jb250YWluZXIgY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxTaWRlTWVudSBpbmdyb3VwPXt0cnVlfS8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uIHBhZ2UtY29udGVudCBhbGlnbi10b3AgcGwtMCBjb2wgbTcgbDggeGw5XCI+XG4gICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZ3JvdXAtaGVhZGVyXCI+eyB0aGlzLnNlbGVjdGVkR3JvdXAubmFtZSB9PC9oNT5cbiAgICAgICAgICAgICAgICAgICA8TWVzc2FnZXMgbWVzc2FnZXM9eyBtZXNzYWdlcyB9Lz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxGb290ZXIvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBtZXNzYWdlczogc3RhdGUubWVzc2FnZXMsXG4gICAgc2VsZWN0ZWRHcm91cDogc3RhdGUuc2VsZWN0ZWRHcm91cFxuICB9O1xufTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgb25DaGFuZ2VTZWxlY3RlZEdyb3VwOiBncm91cCA9PiBkaXNwYXRjaChjaGFuZ2VTZWxlY3RlZEdyb3VwQWN0aW9uKGdyb3VwKSksXG4gICAgbG9hZE1lc3NhZ2VzOiBhbGxNZXNzYWdlcyA9PiBkaXNwYXRjaChsb2FkTWVzc2FnZXMoYWxsTWVzc2FnZXMpKVxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoR3JvdXApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2pzL2NvbXBvbmVudHMvY29udGFpbmVycy9ncm91cC5qcyJdLCJzb3VyY2VSb290IjoiIn0=