webpackHotUpdate(0,{

/***/ 136:
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
    return _this;
  }

  _createClass(NewGroup, [{
    key: 'onCreateGroup',
    value: function onCreateGroup(e) {
      e.preventDefault();
      if (this.name === '') {
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
      (0, _api2.default)('name=' + this.name, '/api/groups', 'POST', headers).then(function (response) {
        console.log(response);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _form2.default,
        { title: 'Create a new group' },
        _react2.default.createElement(
          'div',
          { className: 'input-field' },
          _react2.default.createElement('input', { type: 'text', id: 'name', ref: function ref(input) {
              _this2.name = input;
            } }),
          _react2.default.createElement(
            'label',
            { htmlFor: 'name' },
            'Name'
          )
        ),
        _react2.default.createElement(
          'button',
          { className: 'waves-effect waves-light btn action-btn'
          },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9uZXctZ3JvdXAuanM/YzMzMiJdLCJuYW1lcyI6WyJOZXdHcm91cCIsInByb3BzIiwib25DcmVhdGVHcm91cCIsImJpbmQiLCJzdGF0ZSIsImVycm9yIiwiZSIsInByZXZlbnREZWZhdWx0IiwibmFtZSIsInNldFN0YXRlIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwibG9jYXRpb24iLCJoYXNoIiwiaGVhZGVycyIsIkhlYWRlcnMiLCJhcHBlbmQiLCJKU09OIiwicGFyc2UiLCJ0b2tlbiIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJpbnB1dCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxROzs7QUFDSixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLG9IQUNYQSxLQURXOztBQUVqQixVQUFLQyxhQUFMLEdBQXFCLE1BQUtBLGFBQUwsQ0FBbUJDLElBQW5CLE9BQXJCO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGFBQU87QUFESSxLQUFiO0FBSGlCO0FBTWxCOzs7O2tDQUVhQyxDLEVBQUc7QUFDZkEsUUFBRUMsY0FBRjtBQUNBLFVBQUksS0FBS0MsSUFBTCxLQUFjLEVBQWxCLEVBQXNCO0FBQ3BCLGFBQUtDLFFBQUwsQ0FBYyxFQUFFSixPQUFPLHFDQUFULEVBQWQ7QUFDQTtBQUNEO0FBQ0QsVUFBSUssZUFBZUMsT0FBZixDQUF1QixNQUF2QixNQUFtQyxJQUF2QyxFQUE2QztBQUMzQ0MsaUJBQVNDLElBQVQsR0FBZ0IsUUFBaEI7QUFDQTtBQUNEO0FBQ0QsVUFBTUMsVUFBVSxJQUFJQyxPQUFKLEVBQWhCO0FBQ0FELGNBQVFFLE1BQVIsQ0FBZSxjQUFmLEVBQStCLG1DQUEvQjtBQUNBRixjQUFRRSxNQUFSLENBQWUsZ0JBQWYsRUFBaUNDLEtBQUtDLEtBQUwsQ0FBV1IsZUFBZUMsT0FBZixDQUF1QixNQUF2QixDQUFYLEVBQTJDUSxLQUE1RTtBQUNBLG1DQUFZLEtBQUtYLElBQWpCLEVBQXlCLGFBQXpCLEVBQXdDLE1BQXhDLEVBQWdETSxPQUFoRCxFQUF5RE0sSUFBekQsQ0FDRSxVQUFDQyxRQUFELEVBQWM7QUFDWkMsZ0JBQVFDLEdBQVIsQ0FBWUYsUUFBWjtBQUNELE9BSEg7QUFLRDs7OzZCQUVRO0FBQUE7O0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBTSxPQUFNLG9CQUFaO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSxhQUFmO0FBQ0UsbURBQU8sTUFBSyxNQUFaLEVBQW1CLElBQUcsTUFBdEIsRUFBNkIsS0FBTSxhQUFDRyxLQUFELEVBQVc7QUFBRSxxQkFBS2hCLElBQUwsR0FBWWdCLEtBQVo7QUFBb0IsYUFBcEUsR0FERjtBQUVFO0FBQUE7QUFBQSxjQUFPLFNBQUksTUFBWDtBQUFBO0FBQUE7QUFGRixTQURGO0FBS0U7QUFBQTtBQUFBLFlBQVEsV0FBVTtBQUFsQjtBQUFBO0FBQUEsU0FMRjtBQU9FO0FBQUE7QUFBQSxZQUFHLFdBQVUsbURBQWI7QUFDQSxrQkFBSyxZQURMO0FBQUE7QUFBQTtBQVBGLE9BREY7QUFZRDs7OztFQTFDb0IsZ0JBQU1DLFM7O2tCQThDZHpCLFEiLCJmaWxlIjoiMC42NjIzNGJhY2M5ODIyMjVjODRjYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGb3JtIGZyb20gJy4vZm9ybSc7XG5pbXBvcnQgYXBpIGZyb20gJy4uL2hlbHBlcnMvYXBpJztcblxuY2xhc3MgTmV3R3JvdXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLm9uQ3JlYXRlR3JvdXAgPSB0aGlzLm9uQ3JlYXRlR3JvdXAuYmluZCh0aGlzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZXJyb3I6ICcnXG4gICAgfTtcbiAgfVxuXG4gIG9uQ3JlYXRlR3JvdXAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAodGhpcy5uYW1lID09PSAnJykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yOiAnRXJyb3I6IE9uZSBvciBtb3JlIGZpZWxkcyBhcmUgZW1wdHknIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpID09PSBudWxsKSB7XG4gICAgICBsb2NhdGlvbi5oYXNoID0gJyNsb2dpbic7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XG4gICAgaGVhZGVycy5hcHBlbmQoJ3gtYWNjZXNzLXRva2VuJywgSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpLnRva2VuKTtcbiAgICBhcGkoYG5hbWU9JHt0aGlzLm5hbWV9YCwgJy9hcGkvZ3JvdXBzJywgJ1BPU1QnLCBoZWFkZXJzKS50aGVuKFxuICAgICAgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybSB0aXRsZT0nQ3JlYXRlIGEgbmV3IGdyb3VwJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2lucHV0LWZpZWxkJz5cbiAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgaWQ9J25hbWUnIHJlZj17IChpbnB1dCkgPT4geyB0aGlzLm5hbWUgPSBpbnB1dDsgfSB9Lz5cbiAgICAgICAgICA8bGFiZWwgZm9yPSduYW1lJz5OYW1lPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSd3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHQgYnRuIGFjdGlvbi1idG4nXG4gICAgICAgID5DcmVhdGU8L2J1dHRvbj5cbiAgICAgICAgPGEgY2xhc3NOYW1lPSdyaWdodCB3YXZlcy1lZmZlY3Qgd2F2ZXMtdGVhbCBidG4tZmxhdCBhY3Rpb24tYnRuJ1xuICAgICAgICBocmVmPScjZGFzaGJvYXJkJz5DYW5jZWw8L2E+XG4gICAgICA8L0Zvcm0+XG4gICAgKTtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IE5ld0dyb3VwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2pzL2NvbXBvbmVudHMvcHJlc2VudGF0aW9uYWwvbmV3LWdyb3VwLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==