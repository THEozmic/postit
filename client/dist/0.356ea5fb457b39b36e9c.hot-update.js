webpackHotUpdate(0,{

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _form = __webpack_require__(27);

var _form2 = _interopRequireDefault(_form);

var _api = __webpack_require__(26);

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewGroup = function (_React$Component) {
  _inherits(NewGroup, _React$Component);

  function NewGroup(props) {
    _classCallCheck(this, NewGroup);

    var _this = _possibleConstructorReturn(this, (NewGroup.__proto__ || Object.getPrototypeOf(NewGroup)).call(this, props));

    _this.onCreateGroup = _this.onCreateGroup.bind(_this);
    _this.state = {
      error: ''
    };
    _this.newGroupCreated = false;
    return _this;
  }

  _createClass(NewGroup, [{
    key: 'onCreateGroup',
    value: function onCreateGroup(e) {
      var _this2 = this;

      if (!this.newGroupCreated) {
        e.preventDefault();
        this.newGroupCreated = true;
      }
      if (this.name.value === '') {
        this.setState({ error: 'Error: One or more fields are empty' });
        return;
      }
      if (sessionStorage.getItem('user') === null) {
        location.hash = '#login';
        return;
      }
      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      headers.append('x-access-token', JSON.parse(sessionStorage.getItem('user')).token);
      (0, _api2.default)('name=' + this.name.value, '/api/groups', 'POST', headers).then(function (response) {
        console.log(response);
        _this2.onCreateGroup();
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        _form2.default,
        { title: 'Create a new group', active: 'create-group' },
        _react2.default.createElement(
          'div',
          { className: 'input-field' },
          _react2.default.createElement('input', { type: 'text', id: 'name', ref: function ref(input) {
              _this3.name = input;
            } }),
          _react2.default.createElement(
            'label',
            { htmlFor: 'name' },
            'Name'
          )
        ),
        _react2.default.createElement(
          'button',
          { className: 'waves-effect waves-light btn action-btn',
            onClick: this.onCreateGroup },
          'Create'
        ),
        _react2.default.createElement(
          'a',
          { className: 'right waves-effect waves-teal btn-flat action-btn',
            href: '#dashboard' },
          'Cancel'
        )
      );
    }
  }]);

  return NewGroup;
}(_react2.default.Component);

exports.default = NewGroup;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9uZXctZ3JvdXAuanM/YzMzMiJdLCJuYW1lcyI6WyJOZXdHcm91cCIsInByb3BzIiwib25DcmVhdGVHcm91cCIsImJpbmQiLCJzdGF0ZSIsImVycm9yIiwibmV3R3JvdXBDcmVhdGVkIiwiZSIsInByZXZlbnREZWZhdWx0IiwibmFtZSIsInZhbHVlIiwic2V0U3RhdGUiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJsb2NhdGlvbiIsImhhc2giLCJoZWFkZXJzIiwiSGVhZGVycyIsImFwcGVuZCIsIkpTT04iLCJwYXJzZSIsInRva2VuIiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImlucHV0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLFE7OztBQUNKLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsb0hBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLGFBQUwsR0FBcUIsTUFBS0EsYUFBTCxDQUFtQkMsSUFBbkIsT0FBckI7QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsYUFBTztBQURJLEtBQWI7QUFHQSxVQUFLQyxlQUFMLEdBQXVCLEtBQXZCO0FBTmlCO0FBT2xCOzs7O2tDQUVhQyxDLEVBQUc7QUFBQTs7QUFDZixVQUFJLENBQUMsS0FBS0QsZUFBVixFQUEyQjtBQUN6QkMsVUFBRUMsY0FBRjtBQUNBLGFBQUtGLGVBQUwsR0FBdUIsSUFBdkI7QUFDRDtBQUNELFVBQUksS0FBS0csSUFBTCxDQUFVQyxLQUFWLEtBQW9CLEVBQXhCLEVBQTRCO0FBQzFCLGFBQUtDLFFBQUwsQ0FBYyxFQUFFTixPQUFPLHFDQUFULEVBQWQ7QUFDQTtBQUNEO0FBQ0QsVUFBSU8sZUFBZUMsT0FBZixDQUF1QixNQUF2QixNQUFtQyxJQUF2QyxFQUE2QztBQUMzQ0MsaUJBQVNDLElBQVQsR0FBZ0IsUUFBaEI7QUFDQTtBQUNEO0FBQ0QsVUFBTUMsVUFBVSxJQUFJQyxPQUFKLEVBQWhCO0FBQ0FELGNBQVFFLE1BQVIsQ0FBZSxjQUFmLEVBQStCLG1DQUEvQjtBQUNBRixjQUFRRSxNQUFSLENBQWUsZ0JBQWYsRUFBaUNDLEtBQUtDLEtBQUwsQ0FBV1IsZUFBZUMsT0FBZixDQUF1QixNQUF2QixDQUFYLEVBQTJDUSxLQUE1RTtBQUNBLG1DQUFZLEtBQUtaLElBQUwsQ0FBVUMsS0FBdEIsRUFBK0IsYUFBL0IsRUFBOEMsTUFBOUMsRUFBc0RNLE9BQXRELEVBQStETSxJQUEvRCxDQUNFLFVBQUNDLFFBQUQsRUFBYztBQUNaQyxnQkFBUUMsR0FBUixDQUFZRixRQUFaO0FBQ0EsZUFBS3JCLGFBQUw7QUFDRCxPQUpIO0FBTUQ7Ozs2QkFFUTtBQUFBOztBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQU0sT0FBTSxvQkFBWixFQUFpQyxRQUFPLGNBQXhDO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSxhQUFmO0FBQ0UsbURBQU8sTUFBSyxNQUFaLEVBQW1CLElBQUcsTUFBdEIsRUFBNkIsS0FBTSxhQUFDd0IsS0FBRCxFQUFXO0FBQUUscUJBQUtqQixJQUFMLEdBQVlpQixLQUFaO0FBQW9CLGFBQXBFLEdBREY7QUFFRTtBQUFBO0FBQUEsY0FBTyxTQUFJLE1BQVg7QUFBQTtBQUFBO0FBRkYsU0FERjtBQUtFO0FBQUE7QUFBQSxZQUFRLFdBQVUseUNBQWxCO0FBQ0EscUJBQVMsS0FBS3hCLGFBRGQ7QUFBQTtBQUFBLFNBTEY7QUFPRTtBQUFBO0FBQUEsWUFBRyxXQUFVLG1EQUFiO0FBQ0Esa0JBQUssWUFETDtBQUFBO0FBQUE7QUFQRixPQURGO0FBWUQ7Ozs7RUEvQ29CLGdCQUFNeUIsUzs7a0JBbURkM0IsUSIsImZpbGUiOiIwLjM1NmVhNWZiNDU3YjM5YjM2ZTljLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZvcm0gZnJvbSAnLi9mb3JtJztcbmltcG9ydCBhcGkgZnJvbSAnLi4vaGVscGVycy9hcGknO1xuXG5jbGFzcyBOZXdHcm91cCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMub25DcmVhdGVHcm91cCA9IHRoaXMub25DcmVhdGVHcm91cC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBlcnJvcjogJydcbiAgICB9O1xuICAgIHRoaXMubmV3R3JvdXBDcmVhdGVkID0gZmFsc2U7XG4gIH1cblxuICBvbkNyZWF0ZUdyb3VwKGUpIHtcbiAgICBpZiAoIXRoaXMubmV3R3JvdXBDcmVhdGVkKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLm5ld0dyb3VwQ3JlYXRlZCA9IHRydWU7XG4gICAgfVxuICAgIGlmICh0aGlzLm5hbWUudmFsdWUgPT09ICcnKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3I6ICdFcnJvcjogT25lIG9yIG1vcmUgZmllbGRzIGFyZSBlbXB0eScgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykgPT09IG51bGwpIHtcbiAgICAgIGxvY2F0aW9uLmhhc2ggPSAnI2xvZ2luJztcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcbiAgICBoZWFkZXJzLmFwcGVuZCgneC1hY2Nlc3MtdG9rZW4nLCBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSkudG9rZW4pO1xuICAgIGFwaShgbmFtZT0ke3RoaXMubmFtZS52YWx1ZX1gLCAnL2FwaS9ncm91cHMnLCAnUE9TVCcsIGhlYWRlcnMpLnRoZW4oXG4gICAgICAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICB0aGlzLm9uQ3JlYXRlR3JvdXAoKVxuICAgICAgfVxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxGb3JtIHRpdGxlPSdDcmVhdGUgYSBuZXcgZ3JvdXAnIGFjdGl2ZT0nY3JlYXRlLWdyb3VwJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2lucHV0LWZpZWxkJz5cbiAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgaWQ9J25hbWUnIHJlZj17IChpbnB1dCkgPT4geyB0aGlzLm5hbWUgPSBpbnB1dDsgfSB9Lz5cbiAgICAgICAgICA8bGFiZWwgZm9yPSduYW1lJz5OYW1lPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSd3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHQgYnRuIGFjdGlvbi1idG4nXG4gICAgICAgIG9uQ2xpY2s9e3RoaXMub25DcmVhdGVHcm91cH0+Q3JlYXRlPC9idXR0b24+XG4gICAgICAgIDxhIGNsYXNzTmFtZT0ncmlnaHQgd2F2ZXMtZWZmZWN0IHdhdmVzLXRlYWwgYnRuLWZsYXQgYWN0aW9uLWJ0bidcbiAgICAgICAgaHJlZj0nI2Rhc2hib2FyZCc+Q2FuY2VsPC9hPlxuICAgICAgPC9Gb3JtPlxuICAgICk7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBOZXdHcm91cDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9qcy9jb21wb25lbnRzL3ByZXNlbnRhdGlvbmFsL25ldy1ncm91cC5qcyJdLCJzb3VyY2VSb290IjoiIn0=