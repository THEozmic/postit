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

      console.log('SELECTED GROUP:::::::', selectedGroup);
      if (selectedGroup.name === '') {
        location.hash = '#dashboard';
        return null;
      }

      var title = ['Add users to ', _react2.default.createElement(
        'span',
        { style: { color: '#0275d8' } },
        selectedGroup.name
      ), ' group'];
      title = title.map(function (value, key) {
        return _react2.default.createElement(
          'span',
          { key: key },
          value
        );
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL3NlYXJjaC5qcz8zZDE2Il0sIm5hbWVzIjpbIlNlYXJjaCIsInByb3BzIiwib25TZWFyY2hDaGFuZ2UiLCJiaW5kIiwic3RhdGUiLCJmb3VuZFVzZXJzIiwic2VsZWN0ZWRVc2VycyIsInVzZXJzIiwiaWQiLCJ1c2VybmFtZSIsImluZ3JvdXAiLCJzZXRTdGF0ZSIsInVzZXIiLCJpbmNsdWRlcyIsImZpbHRlciIsInNVc2VyIiwiY29uY2F0IiwiT2JqZWN0IiwiYXNzaWduIiwiY29uc29sZSIsImxvZyIsIm1hcCIsImZVc2VyIiwic2VsZWN0ZWRHcm91cCIsIm5hbWUiLCJsb2NhdGlvbiIsImhhc2giLCJ0aXRsZSIsImNvbG9yIiwidmFsdWUiLCJrZXkiLCJpbnB1dCIsInRlcm0iLCJvblNlbGVjdFVzZXIiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLE07OztBQUNKLGtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsZ0hBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLGNBQUwsR0FBc0IsTUFBS0EsY0FBTCxDQUFvQkMsSUFBcEIsT0FBdEI7QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsa0JBQVksRUFERDtBQUVYQyxxQkFBZTtBQUZKLEtBQWI7QUFIaUI7QUFPbEI7Ozs7cUNBRWdCO0FBQ2YsVUFBTUMsUUFBUSxDQUNaLEVBQUVDLElBQUksQ0FBTixFQUFTQyxVQUFVLE9BQW5CLEVBQTRCQyxTQUFTLEtBQXJDLEVBRFksRUFFWixFQUFFRixJQUFJLENBQU4sRUFBU0MsVUFBVSxPQUFuQixFQUE0QkMsU0FBUyxLQUFyQyxFQUZZLEVBR1osRUFBRUYsSUFBSSxDQUFOLEVBQVNDLFVBQVUsUUFBbkIsRUFBNkJDLFNBQVMsS0FBdEMsRUFIWSxDQUFkOztBQUtB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RyxNQUFLLEtBQVIsRUFBYyxXQUFVLGFBQXhCO0FBQUE7QUFBQSxhQUExQjtBQUF3RTtBQUFBO0FBQUEsZ0JBQUcsTUFBSyxLQUFSO0FBQUE7QUFBQSxhQUF4RTtBQUEyRjtBQUFBO0FBQUEsZ0JBQUcsTUFBSyxLQUFSLEVBQWMsV0FBVSxhQUF4QjtBQUFBO0FBQUE7QUFBM0Y7QUFORixTQUxGO0FBYUU7QUFBQTtBQUFBLFlBQUcsV0FBVSx5Q0FBYjtBQUNFLGtCQUFLLFFBRFA7QUFBQTtBQUFBLFNBYkY7QUFlRTtBQUFBO0FBQUEsWUFBRyxXQUFVLG1EQUFiO0FBQ0Esa0JBQUssWUFETDtBQUFBO0FBQUE7QUFmRixPQURGO0FBbUJEOzs7O0VBM0VrQixnQkFBTXlCLFM7O0FBOEUzQixJQUFNQyxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUMvQixLQUFELEVBQVc7QUFDakMsU0FBTztBQUNMbUIsbUJBQWVuQixNQUFNbUI7QUFEaEIsR0FBUDtBQUdELENBSkQ7a0JBS2UseUJBQVFZLGVBQVIsRUFBeUIsSUFBekIsRUFBK0JuQyxNQUEvQixDIiwiZmlsZSI6IjAuMzE0OGY4YjJjNTdlODk0OTRlNTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IEZvcm0gZnJvbSAnLi4vcHJlc2VudGF0aW9uYWwvZm9ybSc7XG5cbmNsYXNzIFNlYXJjaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMub25TZWFyY2hDaGFuZ2UgPSB0aGlzLm9uU2VhcmNoQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZvdW5kVXNlcnM6IFtdLFxuICAgICAgc2VsZWN0ZWRVc2VyczogW11cbiAgICB9O1xuICB9XG5cbiAgb25TZWFyY2hDaGFuZ2UoKSB7XG4gICAgY29uc3QgdXNlcnMgPSBbXG4gICAgICB7IGlkOiAxLCB1c2VybmFtZTogJ0Brb2JpJywgaW5ncm91cDogZmFsc2UgfSxcbiAgICAgIHsgaWQ6IDIsIHVzZXJuYW1lOiAnQHNvbGEnLCBpbmdyb3VwOiBmYWxzZSB9LFxuICAgICAgeyBpZDogMywgdXNlcm5hbWU6ICdAYWtwYW4nLCBpbmdyb3VwOiBmYWxzZSB9XTtcblxuICAgIHRoaXMuc2V0U3RhdGUoeyBmb3VuZFVzZXJzOiB1c2VycyB9KTtcbiAgfVxuXG4gIG9uU2VsZWN0VXNlcih1c2VyKSB7XG4gICAgLy8gUmVtb3ZlIGZyb20gc2VsZWN0ZWRVc2VycyBsaXN0IGlmIGl0IGV4aXN0cyB0aGVyZVxuICAgIC8vIG9yIEFkZCB0byBzZWxlY3RlZFVzZXJzIGxpc3RcbiAgICBpZiAodGhpcy5zdGF0ZS5zZWxlY3RlZFVzZXJzLmluY2x1ZGVzKHVzZXIpKSB7XG4gICAgICBjb25zdCB1c2VycyA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRVc2Vycy5maWx0ZXIoc1VzZXIgPT4gc1VzZXIuaWQgIT09IHVzZXIuaWQpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkVXNlcnM6IHVzZXJzIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB1c2VycyA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRVc2Vycy5jb25jYXQodXNlcik7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRVc2VyczogdXNlcnMgfSk7XG4gICAgfVxuXG4gICAgLy8gZmxpcCB0aGUgaW5ncm91cCB2YWx1ZVxuICAgIGxldCBmb3VuZFVzZXJzID0gT2JqZWN0LmFzc2lnbihbXSwgdGhpcy5zdGF0ZS5mb3VuZFVzZXJzKTtcbiAgICBjb25zb2xlLmxvZyhmb3VuZFVzZXJzKTtcbiAgICBmb3VuZFVzZXJzID0gZm91bmRVc2Vycy5tYXAoKGZVc2VyKSA9PiB7XG4gICAgICBpZiAoZlVzZXIuaWQgPT09IHVzZXIuaWQpIHtcbiAgICAgICAgZlVzZXIuaW5ncm91cCA9ICFmVXNlci5pbmdyb3VwO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZVc2VyO1xuICAgIH0pO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBmb3VuZFVzZXJzIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc2VsZWN0ZWRHcm91cCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zb2xlLmxvZygnU0VMRUNURUQgR1JPVVA6Ojo6Ojo6Jywgc2VsZWN0ZWRHcm91cCk7XG4gICAgaWYgKHNlbGVjdGVkR3JvdXAubmFtZSA9PT0gJycpIHtcbiAgICAgIGxvY2F0aW9uLmhhc2ggPSAnI2Rhc2hib2FyZCc7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBsZXQgdGl0bGUgPSBbJ0FkZCB1c2VycyB0byAnLFxuICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6ICcjMDI3NWQ4JyB9fT57IHNlbGVjdGVkR3JvdXAubmFtZSB9PC9zcGFuPixcbiAgICAgICcgZ3JvdXAnXTtcbiAgICB0aXRsZSA9IHRpdGxlLm1hcCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgcmV0dXJuIDxzcGFuIGtleT17a2V5fT57dmFsdWV9PC9zcGFuPjtcbiAgICB9KVxuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybSB0aXRsZT17IHRpdGxlIH0gYWN0aXZlPSdzZWFyY2gnIGluZ3JvdXA9e3RydWV9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtZmllbGQnPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBpZD0nc2VhcmNoJyBvbkNoYW5nZT17IHRoaXMub25TZWFyY2hDaGFuZ2UgfSByZWY9eyhpbnB1dCkgPT4geyB0aGlzLnRlcm0gPSBpbnB1dDsgfX0vPlxuICAgICAgICAgIDxsYWJlbCBmb3I9J3NlYXJjaCc+U2VhcmNoIGJ5IHVzZXJuYW1lPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWFyY2gtcmVzdWx0cyc+XG4gICAgICAgICAge3RoaXMuc3RhdGUuZm91bmRVc2Vycy5tYXAoZlVzZXIgPT5cbiAgICAgICAgICAgIDxzcGFuIGtleT17ZlVzZXIuaWR9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLm9uU2VsZWN0VXNlcihmVXNlcil9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2ZVc2VyLmluZ3JvdXAgPyAnaW5ncm91cCcgOiAnJ30+e2ZVc2VyLnVzZXJuYW1lfTwvc3Bhbj5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWFyY2gtcGFnZXNcIj48YSBocmVmPVwiIy8xXCIgY2xhc3NOYW1lPVwic2VhcmNoLXByZXZcIj5QcmV2PC9hPjxhIGhyZWY9XCIjLzJcIj4yPC9hPjxhIGhyZWY9XCIjLzNcIiBjbGFzc05hbWU9XCJzZWFyY2gtbmV4dFwiPk5leHQ8L2E+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YSBjbGFzc05hbWU9J3dhdmVzLWVmZmVjdCB3YXZlcy1saWdodCBidG4gYWN0aW9uLWJ0bidcbiAgICAgICAgICBocmVmPScjZ3JvdXAnPkZpbmlzaDwvYT5cbiAgICAgICAgPGEgY2xhc3NOYW1lPSdyaWdodCB3YXZlcy1lZmZlY3Qgd2F2ZXMtdGVhbCBidG4tZmxhdCBhY3Rpb24tYnRuJ1xuICAgICAgICBocmVmPScjZGFzaGJvYXJkJz5DYW5jZWw8L2E+XG4gICAgICA8L0Zvcm0+KTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBzZWxlY3RlZEdyb3VwOiBzdGF0ZS5zZWxlY3RlZEdyb3VwXG4gIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG51bGwpKFNlYXJjaCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL3NlYXJjaC5qcyJdLCJzb3VyY2VSb290IjoiIn0=