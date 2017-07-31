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

var _loadMessages2 = __webpack_require__(124);

var _loadMessages3 = _interopRequireDefault(_loadMessages2);

var _api = __webpack_require__(26);

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

      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      headers.append('x-access-token', sessionStorage.getItem('user').token);
      (0, _api2.default)(null, '/api/group/' + this.props.group_id + '/messages', 'GET', headers).then(function (messages) {
        _this2.setState({ loading: '', messages: messages });
        _this2.props.loadMessages(messages);
      });
      // const messages = [
      //   {
      //     id: 1, from: '@michael', priority: 'normal', content: 'Hello guys', readBy: ['@emeka', '@obi']
      //   },
      //   {
      //     id: 2, from: '@emeka', priority: 'normal', content: 'Hello @michael', readBy: ['@michael', '@obi'],
      //   }
      // ];
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          onChangeSelectedGroup = _props.onChangeSelectedGroup,
          messages = _props.messages;

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
              _react2.default.createElement(_presentational.SideMenu, { ingroup: true, onChangeSelectedGroup: onChangeSelectedGroup }),
              _react2.default.createElement(
                'div',
                { className: 'section page-content align-top pl-0 col m7 l8 xl9' },
                _react2.default.createElement(
                  'h5',
                  { className: 'group-header' },
                  'Andela Bootcampers'
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
    group_id: state.group_id
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL2dyb3VwLmpzPzczYWEiXSwibmFtZXMiOlsiR3JvdXAiLCJwcm9wcyIsInN0YXRlIiwibG9hZGluZyIsImhlYWRlcnMiLCJIZWFkZXJzIiwiYXBwZW5kIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwidG9rZW4iLCJncm91cF9pZCIsInRoZW4iLCJtZXNzYWdlcyIsInNldFN0YXRlIiwibG9hZE1lc3NhZ2VzIiwib25DaGFuZ2VTZWxlY3RlZEdyb3VwIiwiY29uc29sZSIsImxvZyIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiZ3JvdXAiLCJhbGxNZXNzYWdlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLEs7OztBQUNKLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxlQUFTO0FBREUsS0FBYjtBQUZpQjtBQUtsQjs7Ozt5Q0FFb0I7QUFBQTs7QUFDbkIsVUFBTUMsVUFBVSxJQUFJQyxPQUFKLEVBQWhCO0FBQ0FELGNBQVFFLE1BQVIsQ0FBZSxjQUFmLEVBQStCLG1DQUEvQjtBQUNBRixjQUFRRSxNQUFSLENBQWUsZ0JBQWYsRUFBaUNDLGVBQWVDLE9BQWYsQ0FBdUIsTUFBdkIsRUFBK0JDLEtBQWhFO0FBQ0EseUJBQUksSUFBSixrQkFBd0IsS0FBS1IsS0FBTCxDQUFXUyxRQUFuQyxnQkFBd0QsS0FBeEQsRUFBK0ROLE9BQS9ELEVBQXdFTyxJQUF4RSxDQUNFLFVBQUNDLFFBQUQsRUFBYztBQUFFLGVBQUtDLFFBQUwsQ0FBYyxFQUFFVixTQUFTLEVBQVgsRUFBZVMsa0JBQWYsRUFBZDtBQUNkLGVBQUtYLEtBQUwsQ0FBV2EsWUFBWCxDQUF3QkYsUUFBeEI7QUFDRCxPQUhIO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVEOzs7NkJBRVE7QUFBQSxtQkFDcUMsS0FBS1gsS0FEMUM7QUFBQSxVQUNDYyxxQkFERCxVQUNDQSxxQkFERDtBQUFBLFVBQ3dCSCxRQUR4QixVQUN3QkEsUUFEeEI7O0FBRVBJLGNBQVFDLEdBQVIsQ0FBWUwsUUFBWixFQUFzQixhQUF0QjtBQUNBLGFBQ0U7QUFBQTtBQUFBO0FBQ0UsbUVBREY7QUFFSTtBQUFBO0FBQUEsWUFBUyxXQUFVLGdDQUFuQjtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsV0FBZjtBQUNFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLEtBQWY7QUFDRSx3RUFBVSxTQUFTLElBQW5CLEVBQXlCLHVCQUF3QkcscUJBQWpELEdBREY7QUFFRTtBQUFBO0FBQUEsa0JBQUssV0FBVSxtREFBZjtBQUNFO0FBQUE7QUFBQSxvQkFBSSxXQUFVLGNBQWQ7QUFBQTtBQUFBLGlCQURGO0FBRUUsNERBQVUsVUFBV0gsUUFBckI7QUFGRjtBQUZGO0FBREY7QUFERixTQUZKO0FBYUU7QUFiRixPQURGO0FBaUJEOzs7O0VBL0NpQixnQkFBTU0sUzs7QUFrRDFCLElBQU1DLGtCQUFrQixTQUFsQkEsZUFBa0IsQ0FBQ2pCLEtBQUQsRUFBVztBQUNqQyxTQUFPO0FBQ0xVLGNBQVVWLE1BQU1VLFFBRFg7QUFFTEYsY0FBVVIsTUFBTVE7QUFGWCxHQUFQO0FBSUQsQ0FMRDs7QUFPQSxJQUFNVSxxQkFBcUIsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFELEVBQWM7QUFDdkMsU0FBTztBQUNMTiwyQkFBdUI7QUFBQSxhQUFTTSxTQUFTLG1DQUEwQkMsS0FBMUIsQ0FBVCxDQUFUO0FBQUEsS0FEbEI7QUFFTFIsa0JBQWM7QUFBQSxhQUFlTyxTQUFTLDRCQUFhRSxXQUFiLENBQVQsQ0FBZjtBQUFBO0FBRlQsR0FBUDtBQUlELENBTEQ7O2tCQU9lLHlCQUFRSixlQUFSLEVBQXlCQyxrQkFBekIsRUFBNkNwQixLQUE3QyxDIiwiZmlsZSI6IjAuZGJlMTM2ZDBiNmM4ODEyYThjMDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgRm9vdGVyLCBIZWFkZXIsIFNpZGVNZW51IH0gZnJvbSAnLi4vcHJlc2VudGF0aW9uYWwnO1xuaW1wb3J0IHsgTWVzc2FnZXMgfSBmcm9tICcuLyc7XG5pbXBvcnQgY2hhbmdlU2VsZWN0ZWRHcm91cEFjdGlvbiBmcm9tICcuLi8uLi9hY3Rpb25zL2NoYW5nZVNlbGVjdGVkR3JvdXAnO1xuaW1wb3J0IGxvYWRNZXNzYWdlcyBmcm9tICcuLi8uLi9hY3Rpb25zL2xvYWRNZXNzYWdlcyc7XG5pbXBvcnQgYXBpIGZyb20gJy4uL2hlbHBlcnMvYXBpJztcblxuY2xhc3MgR3JvdXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbG9hZGluZzogJ0xvYWRpbmcuLi4nXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuICAgIGhlYWRlcnMuYXBwZW5kKCd4LWFjY2Vzcy10b2tlbicsIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXInKS50b2tlbik7XG4gICAgYXBpKG51bGwsIGAvYXBpL2dyb3VwLyR7dGhpcy5wcm9wcy5ncm91cF9pZH0vbWVzc2FnZXNgLCAnR0VUJywgaGVhZGVycykudGhlbihcbiAgICAgIChtZXNzYWdlcykgPT4geyB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogJycsIG1lc3NhZ2VzIH0pO1xuICAgICAgICB0aGlzLnByb3BzLmxvYWRNZXNzYWdlcyhtZXNzYWdlcyk7XG4gICAgICB9KTtcbiAgICAvLyBjb25zdCBtZXNzYWdlcyA9IFtcbiAgICAvLyAgIHtcbiAgICAvLyAgICAgaWQ6IDEsIGZyb206ICdAbWljaGFlbCcsIHByaW9yaXR5OiAnbm9ybWFsJywgY29udGVudDogJ0hlbGxvIGd1eXMnLCByZWFkQnk6IFsnQGVtZWthJywgJ0BvYmknXVxuICAgIC8vICAgfSxcbiAgICAvLyAgIHtcbiAgICAvLyAgICAgaWQ6IDIsIGZyb206ICdAZW1la2EnLCBwcmlvcml0eTogJ25vcm1hbCcsIGNvbnRlbnQ6ICdIZWxsbyBAbWljaGFlbCcsIHJlYWRCeTogWydAbWljaGFlbCcsICdAb2JpJ10sXG4gICAgLy8gICB9XG4gICAgLy8gXTtcbiAgICBcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG9uQ2hhbmdlU2VsZWN0ZWRHcm91cCwgbWVzc2FnZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc29sZS5sb2cobWVzc2FnZXMsICc9PT09PT09Pj4+PicpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZGVyLz5cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwYWdlLWNvbnRhaW5lciBjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPFNpZGVNZW51IGluZ3JvdXA9e3RydWV9IG9uQ2hhbmdlU2VsZWN0ZWRHcm91cD17IG9uQ2hhbmdlU2VsZWN0ZWRHcm91cCB9Lz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24gcGFnZS1jb250ZW50IGFsaWduLXRvcCBwbC0wIGNvbCBtNyBsOCB4bDlcIj5cbiAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJncm91cC1oZWFkZXJcIj5BbmRlbGEgQm9vdGNhbXBlcnM8L2g1PlxuICAgICAgICAgICAgICAgICAgPE1lc3NhZ2VzIG1lc3NhZ2VzPXsgbWVzc2FnZXMgfS8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8Rm9vdGVyLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgbWVzc2FnZXM6IHN0YXRlLm1lc3NhZ2VzLFxuICAgIGdyb3VwX2lkOiBzdGF0ZS5ncm91cF9pZFxuICB9O1xufTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgb25DaGFuZ2VTZWxlY3RlZEdyb3VwOiBncm91cCA9PiBkaXNwYXRjaChjaGFuZ2VTZWxlY3RlZEdyb3VwQWN0aW9uKGdyb3VwKSksXG4gICAgbG9hZE1lc3NhZ2VzOiBhbGxNZXNzYWdlcyA9PiBkaXNwYXRjaChsb2FkTWVzc2FnZXMoYWxsTWVzc2FnZXMpKVxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoR3JvdXApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2pzL2NvbXBvbmVudHMvY29udGFpbmVycy9ncm91cC5qcyJdLCJzb3VyY2VSb290IjoiIn0=