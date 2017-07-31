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

var _api = __webpack_require__(26);

var _api2 = _interopRequireDefault(_api);

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
      (0, _api2.default)(null, '/api/search?term=' + this.term, 'POST').then();
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
      if (selectedGroup.name === '' || selectedGroup.name === undefined) {
        location.hash = '#dashboard';
        return null;
      }

      var title = ['Add users to ', _react2.default.createElement(
        'span',
        { style: { color: '#0275d8' } },
        selectedGroup.name
      ), ' group'];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL3NlYXJjaC5qcz8zZDE2Il0sIm5hbWVzIjpbIlNlYXJjaCIsInByb3BzIiwib25TZWFyY2hDaGFuZ2UiLCJiaW5kIiwic3RhdGUiLCJmb3VuZFVzZXJzIiwic2VsZWN0ZWRVc2VycyIsInRlcm0iLCJ0aGVuIiwidXNlcnMiLCJpZCIsInVzZXJuYW1lIiwiaW5ncm91cCIsInNldFN0YXRlIiwidXNlciIsImluY2x1ZGVzIiwiZmlsdGVyIiwic1VzZXIiLCJjb25jYXQiLCJPYmplY3QiLCJhc3NpZ24iLCJjb25zb2xlIiwibG9nIiwibWFwIiwiZlVzZXIiLCJzZWxlY3RlZEdyb3VwIiwibmFtZSIsInVuZGVmaW5lZCIsImxvY2F0aW9uIiwiaGFzaCIsInRpdGxlIiwiY29sb3IiLCJpbnB1dCIsIm9uU2VsZWN0VXNlciIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxNOzs7QUFDSixrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGdIQUNYQSxLQURXOztBQUVqQixVQUFLQyxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0JDLElBQXBCLE9BQXRCO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGtCQUFZLEVBREQ7QUFFWEMscUJBQWU7QUFGSixLQUFiO0FBSGlCO0FBT2xCOzs7O3FDQUVnQjtBQUNmLHlCQUFJLElBQUosd0JBQThCLEtBQUtDLElBQW5DLEVBQTJDLE1BQTNDLEVBQW9EQyxJQUFwRDtBQUNBLFVBQU1DLFFBQVEsQ0FDWixFQUFFQyxJQUFJLENBQU4sRUFBU0MsVUFBVSxPQUFuQixFQUE0QkMsU0FBUyxLQUFyQyxFQURZLEVBRVosRUFBRUYsSUFBSSxDQUFOLEVBQVNDLFVBQVUsT0FBbkIsRUFBNEJDLFNBQVMsS0FBckMsRUFG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LFdBQVUsYUFBeEI7QUFBQTtBQUFBLGFBQTFCO0FBQXdFO0FBQUE7QUFBQSxnQkFBRyxNQUFLLEtBQVI7QUFBQTtBQUFBLGFBQXhFO0FBQTJGO0FBQUE7QUFBQSxnQkFBRyxNQUFLLEtBQVIsRUFBYyxXQUFVLGFBQXhCO0FBQUE7QUFBQTtBQUEzRjtBQU5GLFNBTEY7QUFhRTtBQUFBO0FBQUEsWUFBRyxXQUFVLHlDQUFiO0FBQ0Usa0JBQUssUUFEUDtBQUFBO0FBQUEsU0FiRjtBQWVFO0FBQUE7QUFBQSxZQUFHLFdBQVUsbURBQWI7QUFDQSxrQkFBSyxZQURMO0FBQUE7QUFBQTtBQWZGLE9BREY7QUFtQkQ7Ozs7RUExRWtCLGdCQUFNdUIsUzs7QUE2RTNCLElBQU1DLGtCQUFrQixTQUFsQkEsZUFBa0IsQ0FBQy9CLEtBQUQsRUFBVztBQUNqQyxTQUFPO0FBQ0xxQixtQkFBZXJCLE1BQU1xQjtBQURoQixHQUFQO0FBR0QsQ0FKRDtrQkFLZSx5QkFBUVUsZUFBUixFQUF5QixJQUF6QixFQUErQm5DLE1BQS9CLEMiLCJmaWxlIjoiMC45ZDRmNjc0N2I1ODFmYTU1MDk2My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgRm9ybSBmcm9tICcuLi9wcmVzZW50YXRpb25hbC9mb3JtJztcbmltcG9ydCBhcGkgZnJvbSAnLi4vaGVscGVycy9hcGknO1xuXG5jbGFzcyBTZWFyY2ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLm9uU2VhcmNoQ2hhbmdlID0gdGhpcy5vblNlYXJjaENoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBmb3VuZFVzZXJzOiBbXSxcbiAgICAgIHNlbGVjdGVkVXNlcnM6IFtdXG4gICAgfTtcbiAgfVxuXG4gIG9uU2VhcmNoQ2hhbmdlKCkge1xuICAgIGFwaShudWxsLCBgL2FwaS9zZWFyY2g/dGVybT0ke3RoaXMudGVybX1gLCAnUE9TVCcsKS50aGVuKCk7XG4gICAgY29uc3QgdXNlcnMgPSBbXG4gICAgICB7IGlkOiAxLCB1c2VybmFtZTogJ0Brb2JpJywgaW5ncm91cDogZmFsc2UgfSxcbiAgICAgIHsgaWQ6IDIsIHVzZXJuYW1lOiAnQHNvbGEnLCBpbmdyb3VwOiBmYWxzZSB9LFxuICAgICAgeyBpZDogMywgdXNlcm5hbWU6ICdAYWtwYW4nLCBpbmdyb3VwOiBmYWxzZSB9XTtcblxuICAgIHRoaXMuc2V0U3RhdGUoeyBmb3VuZFVzZXJzOiB1c2VycyB9KTtcbiAgfVxuXG4gIG9uU2VsZWN0VXNlcih1c2VyKSB7XG4gICAgLy8gUmVtb3ZlIGZyb20gc2VsZWN0ZWRVc2VycyBsaXN0IGlmIGl0IGV4aXN0cyB0aGVyZVxuICAgIC8vIG9yIEFkZCB0byBzZWxlY3RlZFVzZXJzIGxpc3RcbiAgICBpZiAodGhpcy5zdGF0ZS5zZWxlY3RlZFVzZXJzLmluY2x1ZGVzKHVzZXIpKSB7XG4gICAgICBjb25zdCB1c2VycyA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRVc2Vycy5maWx0ZXIoc1VzZXIgPT4gc1VzZXIuaWQgIT09IHVzZXIuaWQpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkVXNlcnM6IHVzZXJzIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB1c2VycyA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRVc2Vycy5jb25jYXQodXNlcik7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRVc2VyczogdXNlcnMgfSk7XG4gICAgfVxuXG4gICAgLy8gZmxpcCB0aGUgaW5ncm91cCB2YWx1ZVxuICAgIGxldCBmb3VuZFVzZXJzID0gT2JqZWN0LmFzc2lnbihbXSwgdGhpcy5zdGF0ZS5mb3VuZFVzZXJzKTtcbiAgICBjb25zb2xlLmxvZyhmb3VuZFVzZXJzKTtcbiAgICBmb3VuZFVzZXJzID0gZm91bmRVc2Vycy5tYXAoKGZVc2VyKSA9PiB7XG4gICAgICBpZiAoZlVzZXIuaWQgPT09IHVzZXIuaWQpIHtcbiAgICAgICAgZlVzZXIuaW5ncm91cCA9ICFmVXNlci5pbmdyb3VwO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZVc2VyO1xuICAgIH0pO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBmb3VuZFVzZXJzIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc2VsZWN0ZWRHcm91cCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zb2xlLmxvZygnU0VMRUNURUQgR1JPVVA6Ojo6Ojo6Jywgc2VsZWN0ZWRHcm91cCk7XG4gICAgaWYgKHNlbGVjdGVkR3JvdXAubmFtZSA9PT0gJycgfHwgc2VsZWN0ZWRHcm91cC5uYW1lID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGxvY2F0aW9uLmhhc2ggPSAnI2Rhc2hib2FyZCc7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCB0aXRsZSA9IFsnQWRkIHVzZXJzIHRvICcsXG4gICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogJyMwMjc1ZDgnIH19Pnsgc2VsZWN0ZWRHcm91cC5uYW1lIH08L3NwYW4+LFxuICAgICAgJyBncm91cCddO1xuICAgIFxuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybSB0aXRsZT17IHRpdGxlIH0gYWN0aXZlPSdzZWFyY2gnIGluZ3JvdXA9e3RydWV9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtZmllbGQnPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBpZD0nc2VhcmNoJyBvbkNoYW5nZT17IHRoaXMub25TZWFyY2hDaGFuZ2UgfSByZWY9eyhpbnB1dCkgPT4geyB0aGlzLnRlcm0gPSBpbnB1dDsgfX0vPlxuICAgICAgICAgIDxsYWJlbCBmb3I9J3NlYXJjaCc+U2VhcmNoIGJ5IHVzZXJuYW1lPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWFyY2gtcmVzdWx0cyc+XG4gICAgICAgICAge3RoaXMuc3RhdGUuZm91bmRVc2Vycy5tYXAoZlVzZXIgPT5cbiAgICAgICAgICAgIDxzcGFuIGtleT17ZlVzZXIuaWR9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLm9uU2VsZWN0VXNlcihmVXNlcil9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2ZVc2VyLmluZ3JvdXAgPyAnaW5ncm91cCcgOiAnJ30+e2ZVc2VyLnVzZXJuYW1lfTwvc3Bhbj5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWFyY2gtcGFnZXNcIj48YSBocmVmPVwiIy8xXCIgY2xhc3NOYW1lPVwic2VhcmNoLXByZXZcIj5QcmV2PC9hPjxhIGhyZWY9XCIjLzJcIj4yPC9hPjxhIGhyZWY9XCIjLzNcIiBjbGFzc05hbWU9XCJzZWFyY2gtbmV4dFwiPk5leHQ8L2E+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YSBjbGFzc05hbWU9J3dhdmVzLWVmZmVjdCB3YXZlcy1saWdodCBidG4gYWN0aW9uLWJ0bidcbiAgICAgICAgICBocmVmPScjZ3JvdXAnPkZpbmlzaDwvYT5cbiAgICAgICAgPGEgY2xhc3NOYW1lPSdyaWdodCB3YXZlcy1lZmZlY3Qgd2F2ZXMtdGVhbCBidG4tZmxhdCBhY3Rpb24tYnRuJ1xuICAgICAgICBocmVmPScjZGFzaGJvYXJkJz5DYW5jZWw8L2E+XG4gICAgICA8L0Zvcm0+KTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBzZWxlY3RlZEdyb3VwOiBzdGF0ZS5zZWxlY3RlZEdyb3VwXG4gIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG51bGwpKFNlYXJjaCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL3NlYXJjaC5qcyJdLCJzb3VyY2VSb290IjoiIn0=