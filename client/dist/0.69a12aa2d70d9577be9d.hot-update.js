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
        e = e.originalEvent;
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _form2.default,
        { title: 'Create a new group', active: 'create-group' },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9uZXctZ3JvdXAuanM/YzMzMiJdLCJuYW1lcyI6WyJOZXdHcm91cCIsInByb3BzIiwib25DcmVhdGVHcm91cCIsImJpbmQiLCJzdGF0ZSIsImVycm9yIiwiZSIsInByZXZlbnREZWZhdWx0IiwibmFtZSIsInZhbHVlIiwic2V0U3RhdGUiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJsb2NhdGlvbiIsImhhc2giLCJoZWFkZXJzIiwiSGVhZGVycyIsImFwcGVuZCIsIkpTT04iLCJwYXJzZSIsInRva2VuIiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsIm9yaWdpbmFsRXZlbnQiLCJpbnB1dCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxROzs7QUFDSixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLG9IQUNYQSxLQURXOztBQUVqQixVQUFLQyxhQUFMLEdBQXFCLE1BQUtBLGFBQUwsQ0FBbUJDLElBQW5CLE9BQXJCO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGFBQU87QUFESSxLQUFiO0FBSGlCO0FBTWxCOzs7O2tDQUVhQyxDLEVBQUc7QUFDZkEsUUFBRUMsY0FBRjtBQUNBLFVBQUksS0FBS0MsSUFBTCxDQUFVQyxLQUFWLEtBQW9CLEVBQXhCLEVBQTRCO0FBQzFCLGFBQUtDLFFBQUwsQ0FBYyxFQUFFTCxPQUFPLHFDQUFULEVBQWQ7QUFDQTtBQUNEO0FBQ0QsVUFBSU0sZUFBZUMsT0FBZixDQUF1QixNQUF2QixNQUFtQyxJQUF2QyxFQUE2QztBQUMzQ0MsaUJBQVNDLElBQVQsR0FBZ0IsUUFBaEI7QUFDQTtBQUNEO0FBQ0QsVUFBTUMsVUFBVSxJQUFJQyxPQUFKLEVBQWhCO0FBQ0FELGNBQVFFLE1BQVIsQ0FBZSxjQUFmLEVBQStCLG1DQUEvQjtBQUNBRixjQUFRRSxNQUFSLENBQWUsZ0JBQWYsRUFBaUNDLEtBQUtDLEtBQUwsQ0FBV1IsZUFBZUMsT0FBZixDQUF1QixNQUF2QixDQUFYLEVBQTJDUSxLQUE1RTtBQUNBLG1DQUFZLEtBQUtaLElBQUwsQ0FBVUMsS0FBdEIsRUFBK0IsYUFBL0IsRUFBOEMsTUFBOUMsRUFBc0RNLE9BQXRELEVBQStETSxJQUEvRCxDQUNFLFVBQUNDLFFBQUQsRUFBYztBQUNaQyxnQkFBUUMsR0FBUixDQUFZRixRQUFaO0FBQ0FoQixZQUFJQSxFQUFFbUIsYUFBTjtBQUNELE9BSkg7QUFNRDs7OzZCQUVRO0FBQUE7O0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBTSxPQUFNLG9CQUFaLEVBQWlDLFFBQU8sY0FBeEM7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLGFBQWY7QUFDRSxtREFBTyxNQUFLLE1BQVosRUFBbUIsSUFBRyxNQUF0QixFQUE2QixLQUFNLGFBQUNDLEtBQUQsRUFBVztBQUFFLHFCQUFLbEIsSUFBTCxHQUFZa0IsS0FBWjtBQUFvQixhQUFwRSxHQURGO0FBRUU7QUFBQTtBQUFBLGNBQU8sU0FBSSxNQUFYO0FBQUE7QUFBQTtBQUZGLFNBREY7QUFLRTtBQUFBO0FBQUEsWUFBUSxXQUFVLHlDQUFsQjtBQUNBLHFCQUFTLEtBQUt4QixhQURkO0FBQUE7QUFBQSxTQUxGO0FBT0U7QUFBQTtBQUFBLFlBQUcsV0FBVSxtREFBYjtBQUNBLGtCQUFLLFlBREw7QUFBQTtBQUFBO0FBUEYsT0FERjtBQVlEOzs7O0VBM0NvQixnQkFBTXlCLFM7O2tCQStDZDNCLFEiLCJmaWxlIjoiMC42OWExMmFhMmQ3MGQ5NTc3YmU5ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGb3JtIGZyb20gJy4vZm9ybSc7XG5pbXBvcnQgYXBpIGZyb20gJy4uL2hlbHBlcnMvYXBpJztcblxuY2xhc3MgTmV3R3JvdXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLm9uQ3JlYXRlR3JvdXAgPSB0aGlzLm9uQ3JlYXRlR3JvdXAuYmluZCh0aGlzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZXJyb3I6ICcnXG4gICAgfTtcbiAgfVxuXG4gIG9uQ3JlYXRlR3JvdXAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAodGhpcy5uYW1lLnZhbHVlID09PSAnJykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yOiAnRXJyb3I6IE9uZSBvciBtb3JlIGZpZWxkcyBhcmUgZW1wdHknIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpID09PSBudWxsKSB7XG4gICAgICBsb2NhdGlvbi5oYXNoID0gJyNsb2dpbic7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XG4gICAgaGVhZGVycy5hcHBlbmQoJ3gtYWNjZXNzLXRva2VuJywgSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpLnRva2VuKTtcbiAgICBhcGkoYG5hbWU9JHt0aGlzLm5hbWUudmFsdWV9YCwgJy9hcGkvZ3JvdXBzJywgJ1BPU1QnLCBoZWFkZXJzKS50aGVuKFxuICAgICAgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgZSA9IGUub3JpZ2luYWxFdmVudDtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybSB0aXRsZT0nQ3JlYXRlIGEgbmV3IGdyb3VwJyBhY3RpdmU9J2NyZWF0ZS1ncm91cCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1maWVsZCc+XG4gICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGlkPSduYW1lJyByZWY9eyAoaW5wdXQpID0+IHsgdGhpcy5uYW1lID0gaW5wdXQ7IH0gfS8+XG4gICAgICAgICAgPGxhYmVsIGZvcj0nbmFtZSc+TmFtZTwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nd2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0IGJ0biBhY3Rpb24tYnRuJ1xuICAgICAgICBvbkNsaWNrPXt0aGlzLm9uQ3JlYXRlR3JvdXB9PkNyZWF0ZTwvYnV0dG9uPlxuICAgICAgICA8YSBjbGFzc05hbWU9J3JpZ2h0IHdhdmVzLWVmZmVjdCB3YXZlcy10ZWFsIGJ0bi1mbGF0IGFjdGlvbi1idG4nXG4gICAgICAgIGhyZWY9JyNkYXNoYm9hcmQnPkNhbmNlbDwvYT5cbiAgICAgIDwvRm9ybT5cbiAgICApO1xuICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgTmV3R3JvdXA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9uZXctZ3JvdXAuanMiXSwic291cmNlUm9vdCI6IiJ9