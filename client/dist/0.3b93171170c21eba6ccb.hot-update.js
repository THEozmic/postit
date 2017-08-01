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
      var title = 'Add users to <span style={{color: $primary-color}}>' + selectedGroup.name + '</span> group';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL3NlYXJjaC5qcz8zZDE2Il0sIm5hbWVzIjpbIlNlYXJjaCIsInByb3BzIiwib25TZWFyY2hDaGFuZ2UiLCJiaW5kIiwic3RhdGUiLCJmb3VuZFVzZXJzIiwic2VsZWN0ZWRVc2VycyIsInVzZXJzIiwiaWQiLCJ1c2VybmFtZSIsImluZ3JvdXAiLCJzZXRTdGF0ZSIsInVzZXIiLCJpbmNsdWRlcyIsImZpbHRlciIsInNVc2VyIiwiY29uY2F0IiwiT2JqZWN0IiwiYXNzaWduIiwiY29uc29sZSIsImxvZyIsIm1hcCIsImZVc2VyIiwic2VsZWN0ZWRHcm91cCIsIm5hbWUiLCJsb2NhdGlvbiIsImhhc2giLCJ0aXRsZSIsImlucHV0IiwidGVybSIsIm9uU2VsZWN0VXNlciIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUEsTTs7O0FBQ0osa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxnSEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsY0FBTCxHQUFzQixNQUFLQSxjQUFMLENBQW9CQyxJQUFwQixPQUF0QjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxrQkFBWSxFQUREO0FBRVhDLHFCQUFlO0FBRkosS0FBYjtBQUhpQjtBQU9sQjs7OztxQ0FFZ0I7QUFDZixVQUFNQyxRQUFRLENBQ1osRUFBRUMsSUFBSSxDQUFOLEVBQVNDLFVBQVUsT0FBbkIsRUFBNEJDLFNBQVMsS0FBckMsRUFEWSxFQUVaLEVBQUVGLElBQUksQ0FBTixFQUFTQyxVQUFVLE9BQW5CLEVBQTRCQyxTQUFTLEtBQXJDLEVBRlksRUFHWixFQUFFRixJQUFJLENBQU4sRUFBU0MsVUFBVSxRQUFuQixFQUE2QkMsU0FBUyxLQUF0QyxFQUhZLENBQWQ7O0FBS0EsV0FBS0MsUUFBTCxDQUFjLEVBQUVO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QUFBQTtBQWZGLE9BREY7QUFtQkQ7Ozs7RUFuRWtCLGdCQUFNc0IsUzs7QUFzRTNCLElBQU1DLGtCQUFrQixTQUFsQkEsZUFBa0IsQ0FBQzVCLEtBQUQsRUFBVztBQUNqQyxTQUFPO0FBQ0xtQixtQkFBZW5CLE1BQU1tQjtBQURoQixHQUFQO0FBR0QsQ0FKRDtrQkFLZSx5QkFBUVMsZUFBUixFQUF5QixJQUF6QixFQUErQmhDLE1BQS9CLEMiLCJmaWxlIjoiMC4zYjkzMTcxMTcwYzIxZWJhNmNjYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgRm9ybSBmcm9tICcuLi9wcmVzZW50YXRpb25hbC9mb3JtJztcblxuY2xhc3MgU2VhcmNoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5vblNlYXJjaENoYW5nZSA9IHRoaXMub25TZWFyY2hDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZm91bmRVc2VyczogW10sXG4gICAgICBzZWxlY3RlZFVzZXJzOiBbXVxuICAgIH07XG4gIH1cblxuICBvblNlYXJjaENoYW5nZSgpIHtcbiAgICBjb25zdCB1c2VycyA9IFtcbiAgICAgIHsgaWQ6IDEsIHVzZXJuYW1lOiAnQGtvYmknLCBpbmdyb3VwOiBmYWxzZSB9LFxuICAgICAgeyBpZDogMiwgdXNlcm5hbWU6ICdAc29sYScsIGluZ3JvdXA6IGZhbHNlIH0sXG4gICAgICB7IGlkOiAzLCB1c2VybmFtZTogJ0Bha3BhbicsIGluZ3JvdXA6IGZhbHNlIH1dO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGZvdW5kVXNlcnM6IHVzZXJzIH0pO1xuICB9XG5cbiAgb25TZWxlY3RVc2VyKHVzZXIpIHtcbiAgICAvLyBSZW1vdmUgZnJvbSBzZWxlY3RlZFVzZXJzIGxpc3QgaWYgaXQgZXhpc3RzIHRoZXJlXG4gICAgLy8gb3IgQWRkIHRvIHNlbGVjdGVkVXNlcnMgbGlzdFxuICAgIGlmICh0aGlzLnN0YXRlLnNlbGVjdGVkVXNlcnMuaW5jbHVkZXModXNlcikpIHtcbiAgICAgIGNvbnN0IHVzZXJzID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFVzZXJzLmZpbHRlcihzVXNlciA9PiBzVXNlci5pZCAhPT0gdXNlci5pZCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRVc2VyczogdXNlcnMgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHVzZXJzID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFVzZXJzLmNvbmNhdCh1c2VyKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZFVzZXJzOiB1c2VycyB9KTtcbiAgICB9XG5cbiAgICAvLyBmbGlwIHRoZSBpbmdyb3VwIHZhbHVlXG4gICAgbGV0IGZvdW5kVXNlcnMgPSBPYmplY3QuYXNzaWduKFtdLCB0aGlzLnN0YXRlLmZvdW5kVXNlcnMpO1xuICAgIGNvbnNvbGUubG9nKGZvdW5kVXNlcnMpO1xuICAgIGZvdW5kVXNlcnMgPSBmb3VuZFVzZXJzLm1hcCgoZlVzZXIpID0+IHtcbiAgICAgIGlmIChmVXNlci5pZCA9PT0gdXNlci5pZCkge1xuICAgICAgICBmVXNlci5pbmdyb3VwID0gIWZVc2VyLmluZ3JvdXA7XG4gICAgICB9XG4gICAgICByZXR1cm4gZlVzZXI7XG4gICAgfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGZvdW5kVXNlcnMgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzZWxlY3RlZEdyb3VwIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChzZWxlY3RlZEdyb3VwLm5hbWUgPT09ICcnKSB7XG4gICAgICBsb2NhdGlvbi5oYXNoID0gJ2Rhc2hib2FyZCc7XG4gICAgfVxuICAgIGNvbnN0IHRpdGxlID0gYEFkZCB1c2VycyB0byA8c3BhbiBzdHlsZT17e2NvbG9yOiAkcHJpbWFyeS1jb2xvcn19PiR7c2VsZWN0ZWRHcm91cC5uYW1lfTwvc3Bhbj4gZ3JvdXBgO1xuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybSB0aXRsZT17IHRpdGxlIH0gYWN0aXZlPSdzZWFyY2gnIGluZ3JvdXA9e3RydWV9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtZmllbGQnPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBpZD0nc2VhcmNoJyBvbkNoYW5nZT17IHRoaXMub25TZWFyY2hDaGFuZ2UgfSByZWY9eyhpbnB1dCkgPT4geyB0aGlzLnRlcm0gPSBpbnB1dDsgfX0vPlxuICAgICAgICAgIDxsYWJlbCBmb3I9J3NlYXJjaCc+U2VhcmNoIGJ5IHVzZXJuYW1lPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWFyY2gtcmVzdWx0cyc+XG4gICAgICAgICAge3RoaXMuc3RhdGUuZm91bmRVc2Vycy5tYXAoZlVzZXIgPT5cbiAgICAgICAgICAgIDxzcGFuIGtleT17ZlVzZXIuaWR9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLm9uU2VsZWN0VXNlcihmVXNlcil9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2ZVc2VyLmluZ3JvdXAgPyAnaW5ncm91cCcgOiAnJ30+e2ZVc2VyLnVzZXJuYW1lfTwvc3Bhbj5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWFyY2gtcGFnZXNcIj48YSBocmVmPVwiIy8xXCIgY2xhc3NOYW1lPVwic2VhcmNoLXByZXZcIj5QcmV2PC9hPjxhIGhyZWY9XCIjLzJcIj4yPC9hPjxhIGhyZWY9XCIjLzNcIiBjbGFzc05hbWU9XCJzZWFyY2gtbmV4dFwiPk5leHQ8L2E+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YSBjbGFzc05hbWU9J3dhdmVzLWVmZmVjdCB3YXZlcy1saWdodCBidG4gYWN0aW9uLWJ0bidcbiAgICAgICAgICBocmVmPScjZ3JvdXAnPkZpbmlzaDwvYT5cbiAgICAgICAgPGEgY2xhc3NOYW1lPSdyaWdodCB3YXZlcy1lZmZlY3Qgd2F2ZXMtdGVhbCBidG4tZmxhdCBhY3Rpb24tYnRuJ1xuICAgICAgICBocmVmPScjZGFzaGJvYXJkJz5DYW5jZWw8L2E+XG4gICAgICA8L0Zvcm0+KTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBzZWxlY3RlZEdyb3VwOiBzdGF0ZS5zZWxlY3RlZEdyb3VwXG4gIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG51bGwpKFNlYXJjaCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL3NlYXJjaC5qcyJdLCJzb3VyY2VSb290IjoiIn0=