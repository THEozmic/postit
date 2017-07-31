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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9uZXctZ3JvdXAuanM/YzMzMiJdLCJuYW1lcyI6WyJOZXdHcm91cCIsInByb3BzIiwib25DcmVhdGVHcm91cCIsImJpbmQiLCJzdGF0ZSIsImVycm9yIiwiZSIsInByZXZlbnREZWZhdWx0IiwibmFtZSIsInNldFN0YXRlIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwibG9jYXRpb24iLCJoYXNoIiwiaGVhZGVycyIsIkhlYWRlcnMiLCJhcHBlbmQiLCJKU09OIiwicGFyc2UiLCJ0b2tlbiIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJpbnB1dCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxROzs7QUFDSixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLG9IQUNYQSxLQURXOztBQUVqQixVQUFLQyxhQUFMLEdBQXFCLE1BQUtBLGFBQUwsQ0FBbUJDLElBQW5CLE9BQXJCO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGFBQU87QUFESSxLQUFiO0FBSGlCO0FBTWxCOzs7O2tDQUVhQyxDLEVBQUc7QUFDZkEsUUFBRUMsY0FBRjtBQUNBLFVBQUksS0FBS0MsSUFBTCxLQUFjLEVBQWxCLEVBQXNCO0FBQ3BCLGFBQUtDLFFBQUwsQ0FBYyxFQUFFSixPQUFPLHFDQUFULEVBQWQ7QUFDQTtBQUNEO0FBQ0QsVUFBSUssZUFBZUMsT0FBZixDQUF1QixNQUF2QixNQUFtQyxJQUF2QyxFQUE2QztBQUMzQ0MsaUJBQVNDLElBQVQsR0FBZ0IsUUFBaEI7QUFDQTtBQUNEO0FBQ0QsVUFBTUMsVUFBVSxJQUFJQyxPQUFKLEVBQWhCO0FBQ0FELGNBQVFFLE1BQVIsQ0FBZSxjQUFmLEVBQStCLG1DQUEvQjtBQUNBRixjQUFRRSxNQUFSLENBQWUsZ0JBQWYsRUFBaUNDLEtBQUtDLEtBQUwsQ0FBV1IsZUFBZUMsT0FBZixDQUF1QixNQUF2QixDQUFYLEVBQTJDUSxLQUE1RTtBQUNBLG1DQUFZLEtBQUtYLElBQWpCLEVBQXlCLGFBQXpCLEVBQXdDLE1BQXhDLEVBQWdETSxPQUFoRCxFQUF5RE0sSUFBekQsQ0FDRSxVQUFDQyxRQUFELEVBQWM7QUFDWkMsZ0JBQVFDLEdBQVIsQ0FBWUYsUUFBWjtBQUNELE9BSEg7QUFLRDs7OzZCQUVRO0FBQUE7O0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBTSxPQUFNLG9CQUFaO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSxhQUFmO0FBQ0UsbURBQU8sTUFBSyxNQUFaLEVBQW1CLElBQUcsTUFBdEIsRUFBNkIsS0FBTSxhQUFDRyxLQUFELEVBQVc7QUFBRSxxQkFBS2hCLElBQUwsR0FBWWdCLEtBQVo7QUFBb0IsYUFBcEUsR0FERjtBQUVFO0FBQUE7QUFBQSxjQUFPLFNBQUksTUFBWDtBQUFBO0FBQUE7QUFGRixTQURGO0FBS0U7QUFBQTtBQUFBLFlBQVEsV0FBVSx5Q0FBbEI7QUFDQSxxQkFBUyxLQUFLdEIsYUFEZDtBQUFBO0FBQUEsU0FMRjtBQU9FO0FBQUE7QUFBQSxZQUFHLFdBQVUsbURBQWI7QUFDQSxrQkFBSyxZQURMO0FBQUE7QUFBQTtBQVBGLE9BREY7QUFZRDs7OztFQTFDb0IsZ0JBQU11QixTOztrQkE4Q2R6QixRIiwiZmlsZSI6IjAuNmI5ZTkxOWViNGMxMTViZTJhYjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRm9ybSBmcm9tICcuL2Zvcm0nO1xuaW1wb3J0IGFwaSBmcm9tICcuLi9oZWxwZXJzL2FwaSc7XG5cbmNsYXNzIE5ld0dyb3VwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5vbkNyZWF0ZUdyb3VwID0gdGhpcy5vbkNyZWF0ZUdyb3VwLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGVycm9yOiAnJ1xuICAgIH07XG4gIH1cblxuICBvbkNyZWF0ZUdyb3VwKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKHRoaXMubmFtZSA9PT0gJycpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcjogJ0Vycm9yOiBPbmUgb3IgbW9yZSBmaWVsZHMgYXJlIGVtcHR5JyB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSA9PT0gbnVsbCkge1xuICAgICAgbG9jYXRpb24uaGFzaCA9ICcjbG9naW4nO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuICAgIGhlYWRlcnMuYXBwZW5kKCd4LWFjY2Vzcy10b2tlbicsIEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKS50b2tlbik7XG4gICAgYXBpKGBuYW1lPSR7dGhpcy5uYW1lfWAsICcvYXBpL2dyb3VwcycsICdQT1NUJywgaGVhZGVycykudGhlbihcbiAgICAgIChyZXNwb25zZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEZvcm0gdGl0bGU9J0NyZWF0ZSBhIG5ldyBncm91cCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1maWVsZCc+XG4gICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGlkPSduYW1lJyByZWY9eyAoaW5wdXQpID0+IHsgdGhpcy5uYW1lID0gaW5wdXQ7IH0gfS8+XG4gICAgICAgICAgPGxhYmVsIGZvcj0nbmFtZSc+TmFtZTwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nd2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0IGJ0biBhY3Rpb24tYnRuJ1xuICAgICAgICBvbkNsaWNrPXt0aGlzLm9uQ3JlYXRlR3JvdXB9PkNyZWF0ZTwvYnV0dG9uPlxuICAgICAgICA8YSBjbGFzc05hbWU9J3JpZ2h0IHdhdmVzLWVmZmVjdCB3YXZlcy10ZWFsIGJ0bi1mbGF0IGFjdGlvbi1idG4nXG4gICAgICAgIGhyZWY9JyNkYXNoYm9hcmQnPkNhbmNlbDwvYT5cbiAgICAgIDwvRm9ybT5cbiAgICApO1xuICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgTmV3R3JvdXA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9uZXctZ3JvdXAuanMiXSwic291cmNlUm9vdCI6IiJ9