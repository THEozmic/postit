webpackHotUpdate(0,{

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(16);

var _form = __webpack_require__(27);

var _form2 = _interopRequireDefault(_form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = function (_React$Component) {
  _inherits(Search, _React$Component);

  function Search(props) {
    _classCallCheck(this, Search);

    var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props));

    _this.onSearchChange = _this.onSearchChange.bind(_this);
    _this.state = {
      foundUsers: [],
      selectedUsers: []
    };
    return _this;
  }

  _createClass(Search, [{
    key: 'onSearchChange',
    value: function onSearchChange() {
      var users = [{ id: 1, username: '@kobi', ingroup: false }, { id: 2, username: '@sola', ingroup: false }, { id: 3, username: '@akpan', ingroup: false }];

      this.setState({ foundUsers: users });
    }
  }, {
    key: 'onSelectUser',
    value: function onSelectUser(user) {
      // Remove from selectedUsers list if it exists there
      // or Add to selectedUsers list
      if (this.state.selectedUsers.includes(user)) {
        var users = this.state.selectedUsers.filter(function (sUser) {
          return sUser.id !== user.id;
        });
        this.setState({ selectedUsers: users });
      } else {
        var _users = this.state.selectedUsers.concat(user);
        this.setState({ selectedUsers: _users });
      }

      // flip the ingroup value
      var foundUsers = Object.assign([], this.state.foundUsers);
      console.log(foundUsers);
      foundUsers = foundUsers.map(function (fUser) {
        if (fUser.id === user.id) {
          fUser.ingroup = !fUser.ingroup;
        }
        return fUser;
      });
      this.setState({ foundUsers: foundUsers });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var selectedGroup = this.props.selectedGroup;

      if (selectedGroup.name === '') {
        location.hash = 'dashboard';
      }
      var selectedGroupSpan = _react2.default.createElement(
        'span',
        { style: { color: '#0275d8' } },
        selectedGroup.name
      );
      var title = ['Add users to ', selectedGroupSpan, ' group'];
      return _react2.default.createElement(
        _form2.default,
        { title: title, active: 'search', ingroup: true },
        _react2.default.createElement(
          'div',
          { className: 'input-field' },
          _react2.default.createElement('input', { type: 'text', id: 'search', onChange: this.onSearchChange, ref: function ref(input) {
              _this2.term = input;
            } }),
          _react2.default.createElement(
            'label',
            { htmlFor: 'search' },
            'Search by username'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'search-results' },
          this.state.foundUsers.map(function (fUser) {
            return _react2.default.createElement(
              'span',
              { key: fUser.id,
                onClick: function onClick() {
                  return _this2.onSelectUser(fUser);
                },
                className: fUser.ingroup ? 'ingroup' : '' },
              fUser.username
            );
          }),
          _react2.default.createElement(
            'div',
            { className: 'search-pages' },
            _react2.default.createElement(
              'a',
              { href: '#/1', className: 'search-prev' },
              'Prev'
            ),
            _react2.default.createElement(
              'a',
              { href: '#/2' },
              '2'
            ),
            _react2.default.createElement(
              'a',
              { href: '#/3', className: 'search-next' },
              'Next'
            )
          )
        ),
        _react2.default.createElement(
          'a',
          { className: 'waves-effect waves-light btn action-btn',
            href: '#group' },
          'Finish'
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

  return Search;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    selectedGroup: state.selectedGroup
  };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, null)(Search);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL3NlYXJjaC5qcz8zZDE2Il0sIm5hbWVzIjpbIlNlYXJjaCIsInByb3BzIiwib25TZWFyY2hDaGFuZ2UiLCJiaW5kIiwic3RhdGUiLCJmb3VuZFVzZXJzIiwic2VsZWN0ZWRVc2VycyIsInVzZXJzIiwiaWQiLCJ1c2VybmFtZSIsImluZ3JvdXAiLCJzZXRTdGF0ZSIsInVzZXIiLCJpbmNsdWRlcyIsImZpbHRlciIsInNVc2VyIiwiY29uY2F0IiwiT2JqZWN0IiwiYXNzaWduIiwiY29uc29sZSIsImxvZyIsIm1hcCIsImZVc2VyIiwic2VsZWN0ZWRHcm91cCIsIm5hbWUiLCJsb2NhdGlvbiIsImhhc2giLCJzZWxlY3RlZEdyb3VwU3BhbiIsImNvbG9yIiwidGl0bGUiLCJpbnB1dCIsInRlcm0iLCJvblNlbGVjdFVzZXIiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLE07OztBQUNKLGtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsZ0hBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLGNBQUwsR0FBc0IsTUFBS0EsY0FBTCxDQUFvQkMsSUFBcEIsT0FBdEI7QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsa0JBQVksRUFERDtBQUVYQyxxQkFBZTtBQUZKLEtBQWI7QUFIaUI7QUFPbEI7Ozs7cUNBRWdCO0FBQ2YsVUFBTUMsUUFBUSxDQUNaLEVBQUVDLElBQUksQ0FBTixFQUFTQyxVQUFVLE9BQW5CLEVBQTRCQyxTQUFTLEtBQXJDLEVBRFksRUFFWixFQUFFRixJQUFJLENBQU4sRUFBU0MsVUFBVSxPQUFuQixFQUE0QkMsU0FBUyxLQUFyQyxFQUZZLEVBR1osRUFBRUYsSUFBSSxDQUFOLEVBQVNDLFVBQVUsUUFBbkIsRUFBNkJDLFNBQVMsS0FBdEMsRUFIWSxDQUFk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QUE7QUFBM0Y7QUFORixTQUxGO0FBYUU7QUFBQTtBQUFBLFlBQUcsV0FBVSx5Q0FBYjtBQUNFLGtCQUFLLFFBRFA7QUFBQTtBQUFBLFNBYkY7QUFlRTtBQUFBO0FBQUEsWUFBRyxXQUFVLG1EQUFiO0FBQ0Esa0JBQUssWUFETDtBQUFBO0FBQUE7QUFmRixPQURGO0FBbUJEOzs7O0VBcEVrQixnQkFBTXdCLFM7O0FBdUUzQixJQUFNQyxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUM5QixLQUFELEVBQVc7QUFDakMsU0FBTztBQUNMbUIsbUJBQWVuQixNQUFNbUI7QUFEaEIsR0FBUDtBQUdELENBSkQ7a0JBS2UseUJBQVFXLGVBQVIsRUFBeUIsSUFBekIsRUFBK0JsQyxNQUEvQixDIiwiZmlsZSI6IjAuN2UwN2E5NmFmNjAxOGIwNTBhMzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IEZvcm0gZnJvbSAnLi4vcHJlc2VudGF0aW9uYWwvZm9ybSc7XG5cbmNsYXNzIFNlYXJjaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMub25TZWFyY2hDaGFuZ2UgPSB0aGlzLm9uU2VhcmNoQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZvdW5kVXNlcnM6IFtdLFxuICAgICAgc2VsZWN0ZWRVc2VyczogW11cbiAgICB9O1xuICB9XG5cbiAgb25TZWFyY2hDaGFuZ2UoKSB7XG4gICAgY29uc3QgdXNlcnMgPSBbXG4gICAgICB7IGlkOiAxLCB1c2VybmFtZTogJ0Brb2JpJywgaW5ncm91cDogZmFsc2UgfSxcbiAgICAgIHsgaWQ6IDIsIHVzZXJuYW1lOiAnQHNvbGEnLCBpbmdyb3VwOiBmYWxzZSB9LFxuICAgICAgeyBpZDogMywgdXNlcm5hbWU6ICdAYWtwYW4nLCBpbmdyb3VwOiBmYWxzZSB9XTtcblxuICAgIHRoaXMuc2V0U3RhdGUoeyBmb3VuZFVzZXJzOiB1c2VycyB9KTtcbiAgfVxuXG4gIG9uU2VsZWN0VXNlcih1c2VyKSB7XG4gICAgLy8gUmVtb3ZlIGZyb20gc2VsZWN0ZWRVc2VycyBsaXN0IGlmIGl0IGV4aXN0cyB0aGVyZVxuICAgIC8vIG9yIEFkZCB0byBzZWxlY3RlZFVzZXJzIGxpc3RcbiAgICBpZiAodGhpcy5zdGF0ZS5zZWxlY3RlZFVzZXJzLmluY2x1ZGVzKHVzZXIpKSB7XG4gICAgICBjb25zdCB1c2VycyA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRVc2Vycy5maWx0ZXIoc1VzZXIgPT4gc1VzZXIuaWQgIT09IHVzZXIuaWQpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkVXNlcnM6IHVzZXJzIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB1c2VycyA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRVc2Vycy5jb25jYXQodXNlcik7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRVc2VyczogdXNlcnMgfSk7XG4gICAgfVxuXG4gICAgLy8gZmxpcCB0aGUgaW5ncm91cCB2YWx1ZVxuICAgIGxldCBmb3VuZFVzZXJzID0gT2JqZWN0LmFzc2lnbihbXSwgdGhpcy5zdGF0ZS5mb3VuZFVzZXJzKTtcbiAgICBjb25zb2xlLmxvZyhmb3VuZFVzZXJzKTtcbiAgICBmb3VuZFVzZXJzID0gZm91bmRVc2Vycy5tYXAoKGZVc2VyKSA9PiB7XG4gICAgICBpZiAoZlVzZXIuaWQgPT09IHVzZXIuaWQpIHtcbiAgICAgICAgZlVzZXIuaW5ncm91cCA9ICFmVXNlci5pbmdyb3VwO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZVc2VyO1xuICAgIH0pO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBmb3VuZFVzZXJzIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc2VsZWN0ZWRHcm91cCB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoc2VsZWN0ZWRHcm91cC5uYW1lID09PSAnJykge1xuICAgICAgbG9jYXRpb24uaGFzaCA9ICdkYXNoYm9hcmQnO1xuICAgIH1cbiAgICBjb25zdCBzZWxlY3RlZEdyb3VwU3BhbiA9IDxzcGFuIHN0eWxlPXt7IGNvbG9yOiAnIzAyNzVkOCcgfX0+eyBzZWxlY3RlZEdyb3VwLm5hbWV9PC9zcGFuPjtcbiAgICBjb25zdCB0aXRsZSA9IFsnQWRkIHVzZXJzIHRvICcsIHNlbGVjdGVkR3JvdXBTcGFuLCAnIGdyb3VwJ107XG4gICAgcmV0dXJuIChcbiAgICAgIDxGb3JtIHRpdGxlPXsgdGl0bGUgfSBhY3RpdmU9J3NlYXJjaCcgaW5ncm91cD17dHJ1ZX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1maWVsZCc+XG4gICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGlkPSdzZWFyY2gnIG9uQ2hhbmdlPXsgdGhpcy5vblNlYXJjaENoYW5nZSB9IHJlZj17KGlucHV0KSA9PiB7IHRoaXMudGVybSA9IGlucHV0OyB9fS8+XG4gICAgICAgICAgPGxhYmVsIGZvcj0nc2VhcmNoJz5TZWFyY2ggYnkgdXNlcm5hbWU8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlYXJjaC1yZXN1bHRzJz5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5mb3VuZFVzZXJzLm1hcChmVXNlciA9PlxuICAgICAgICAgICAgPHNwYW4ga2V5PXtmVXNlci5pZH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMub25TZWxlY3RVc2VyKGZVc2VyKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17ZlVzZXIuaW5ncm91cCA/ICdpbmdyb3VwJyA6ICcnfT57ZlVzZXIudXNlcm5hbWV9PC9zcGFuPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNlYXJjaC1wYWdlc1wiPjxhIGhyZWY9XCIjLzFcIiBjbGFzc05hbWU9XCJzZWFyY2gtcHJldlwiPlByZXY8L2E+PGEgaHJlZj1cIiMvMlwiPjI8L2E+PGEgaHJlZj1cIiMvM1wiIGNsYXNzTmFtZT1cInNlYXJjaC1uZXh0XCI+TmV4dDwvYT48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxhIGNsYXNzTmFtZT0nd2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0IGJ0biBhY3Rpb24tYnRuJ1xuICAgICAgICAgIGhyZWY9JyNncm91cCc+RmluaXNoPC9hPlxuICAgICAgICA8YSBjbGFzc05hbWU9J3JpZ2h0IHdhdmVzLWVmZmVjdCB3YXZlcy10ZWFsIGJ0bi1mbGF0IGFjdGlvbi1idG4nXG4gICAgICAgIGhyZWY9JyNkYXNoYm9hcmQnPkNhbmNlbDwvYT5cbiAgICAgIDwvRm9ybT4pO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHNlbGVjdGVkR3JvdXA6IHN0YXRlLnNlbGVjdGVkR3JvdXBcbiAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbnVsbCkoU2VhcmNoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9qcy9jb21wb25lbnRzL2NvbnRhaW5lcnMvc2VhcmNoLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==