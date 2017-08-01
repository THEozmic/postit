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
    t;
    _this.state = {
      foundUsers: [],
      selectedUsers: []
    };
    return _this;
  }

  _createClass(Search, [{
    key: 'onSearchChange',
    value: function onSearchChange() {
      var _this2 = this;

      if (this.term.value.trim() !== '') {
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('x-access-token', JSON.parse(sessionStorage.getItem('user')).token);
        (0, _api2.default)(null, '/api/search/' + this.props.selectedGroup.id + '/' + this.term.value.trim(), 'GET', headers).then(function (users) {
          console.log(users);
          var nUsers = users.data.map(function (user) {
            _this2.state.selectedUsers.map(function (sUser) {
              if (sUser.id === user.id) {
                user.ingroup = true;
              }
              return users;
            });
            console.log('USER:::>>>>', user);
            return user;
          });
          _this2.setState({ foundUsers: nUsers });
        });
      }

      // const users = [
      //   { id: 1, username: '@kobi', ingroup: false },
      //   { id: 2, username: '@sola', ingroup: false },
      //   { id: 3, username: '@akpan', ingroup: false }];
    }
  }, {
    key: 'onSelectUser',
    value: function onSelectUser(user) {
      // Remove from selectedUsers list if it exists there
      // or Add to selectedUsers list
      var alreadySelected = false;
      this.state.selectedUsers.map(function (sUser) {
        if (sUser.id === user.id) {
          alreadySelected = true;
          return sUser;
        }
        return false;
      });
      console.log('ALREADY SELECTED:::::', alreadySelected);
      if (!alreadySelected) {
        var selectedUsers = this.state.selectedUsers.concat(user);
        this.setState({ selectedUsers: selectedUsers });
      } else {
        var users = this.state.selectedUsers.filter(function (sUser) {
          return sUser.id !== user.id;
        });
        this.setState({ selectedUsers: users });
      }
      console.log('SELECTED USERS:::::', this.state.selectedUsers.concat(user));

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
      var _this3 = this;

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
          'h6',
          { style: { color: '#0275d8' } },
          'Selected Users: ',
          this.state.selectedUsers.map(function (user) {
            return user.id + ', ';
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'input-field' },
          _react2.default.createElement('input', { type: 'text', id: 'search', onChange: this.onSearchChange, ref: function ref(input) {
              _this3.term = input;
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
                  return _this3.onSelectUser(fUser);
                },
                className: fUser.ingroup ? 'ingroup' : '' },
              '@',
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
          'button',
          { className: 'waves-effect waves-light btn action-btn',
            onClick: this.onFinishClick },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL3NlYXJjaC5qcz8zZDE2Il0sIm5hbWVzIjpbIlNlYXJjaCIsInByb3BzIiwib25TZWFyY2hDaGFuZ2UiLCJiaW5kIiwidCIsInN0YXRlIiwiZm91bmRVc2VycyIsInNlbGVjdGVkVXNlcnMiLCJ0ZXJtIiwidmFsdWUiLCJ0cmltIiwiaGVhZGVycyIsIkhlYWRlcnMiLCJhcHBlbmQiLCJKU09OIiwicGFyc2UiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJ0b2tlbiIsInNlbGVjdGVkR3JvdXAiLCJpZCIsInRoZW4iLCJ1c2VycyIsImNvbnNvbGUiLCJsb2ciLCJuVXNlcnMiLCJkYXRhIiwibWFwIiwidXNlciIsInNVc2VyIiwiaW5ncm91cCIsInNldFN0YXRlIiwiYWxyZWFkeVNlbGVjdGVkIiwiY29uY2F0IiwiZmlsdGVyIiwiT2JqZWN0IiwiYXNzaWduIiwiZlVzZXIiLCJuYW1lIiwidW5kZWZpbmVkIiwibG9jYXRpb24iLCJoYXNoIiwidGl0bGUiLCJjb2xvciIsImlucHV0Iiwib25TZWxlY3RVc2VyIiwidXNlcm5hbWUiLCJvbkZpbmlzaENsaWNrIiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLE07OztBQUNKLGtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsZ0hBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLGNBQUwsR0FBc0IsTUFBS0EsY0FBTCxDQUFvQkMsSUFBcEIsT0FBdEI7QUFDQUM7QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsa0JBQVksRUFERDtBQUVYQyxxQkFBZTtBQUZKLEtBQWI7QUFKaUI7QUFRbEI7Ozs7cUNBRWdCO0FBQUE7O0FBQ2YsVUFBSSxLQUFLQyxJQUFMLENBQVVDLEtBQVYsQ0FBZ0JDLElBQWhCLE9B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UztBQUFBLHlCQUFNLE9BQUt5QixZQUFMLENBQWtCUixLQUFsQixDQUFOO0FBQUEsaUJBRFQ7QUFFQSwyQkFBV0EsTUFBTVAsT0FBTixHQUFnQixTQUFoQixHQUE0QixFQUZ2QztBQUFBO0FBRTZDTyxvQkFBTVM7QUFGbkQsYUFEeUI7QUFBQSxXQUExQixDQURIO0FBTUU7QUFBQTtBQUFBLGNBQUssV0FBTSxjQUFYO0FBQTBCO0FBQUE7QUFBQSxnQkFBRyxNQUFLLEtBQVIsRUFBYyxXQUFVLGFBQXhCO0FBQUE7QUFBQSxhQUExQjtBQUF3RTtBQUFBO0FBQUEsZ0JBQUcsTUFBSyxLQUFSO0FBQUE7QUFBQSxhQUF4RTtBQUEyRjtBQUFBO0FBQUEsZ0JBQUcsTUFBSyxLQUFSLEVBQWMsV0FBVSxhQUF4QjtBQUFBO0FBQUE7QUFBM0Y7QUFORixTQU5GO0FBY0U7QUFBQTtBQUFBLFlBQVEsV0FBVSx5Q0FBbEI7QUFDRSxxQkFBUyxLQUFLQyxhQURoQjtBQUFBO0FBQUEsU0FkRjtBQWdCRTtBQUFBO0FBQUEsWUFBRyxXQUFVLG1EQUFiO0FBQ0Esa0JBQUssWUFETDtBQUFBO0FBQUE7QUFoQkYsT0FERjtBQW9CRDs7OztFQXpHa0IsZ0JBQU1DLFM7O0FBNEczQixJQUFNQyxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUM1QyxLQUFELEVBQVc7QUFDakMsU0FBTztBQUNMYyxtQkFBZWQsTUFBTWM7QUFEaEIsR0FBUDtBQUdELENBSkQ7a0JBS2UseUJBQVE4QixlQUFSLEVBQXlCLElBQXpCLEVBQStCakQsTUFBL0IsQyIsImZpbGUiOiIwLmFhYTkzOTM2ZDBmZWE0YzI3NDhmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBGb3JtIGZyb20gJy4uL3ByZXNlbnRhdGlvbmFsL2Zvcm0nO1xuaW1wb3J0IGFwaSBmcm9tICcuLi9oZWxwZXJzL2FwaSc7XG5cbmNsYXNzIFNlYXJjaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMub25TZWFyY2hDaGFuZ2UgPSB0aGlzLm9uU2VhcmNoQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdFxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBmb3VuZFVzZXJzOiBbXSxcbiAgICAgIHNlbGVjdGVkVXNlcnM6IFtdXG4gICAgfTtcbiAgfVxuXG4gIG9uU2VhcmNoQ2hhbmdlKCkge1xuICAgIGlmICh0aGlzLnRlcm0udmFsdWUudHJpbSgpICE9PSAnJykge1xuICAgICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuICAgICAgaGVhZGVycy5hcHBlbmQoJ3gtYWNjZXNzLXRva2VuJywgSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpLnRva2VuKTtcbiAgICAgIGFwaShudWxsLCBgL2FwaS9zZWFyY2gvJHt0aGlzLnByb3BzLnNlbGVjdGVkR3JvdXAuaWR9LyR7dGhpcy50ZXJtLnZhbHVlLnRyaW0oKX1gLCAnR0VUJywgaGVhZGVycykudGhlbihcbiAgICAgICAgKHVzZXJzKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2codXNlcnMpO1xuICAgICAgICAgIGNvbnN0IG5Vc2VycyA9IHVzZXJzLmRhdGEubWFwKCh1c2VyKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkVXNlcnMubWFwKChzVXNlcikgPT4ge1xuICAgICAgICAgICAgICBpZiAoc1VzZXIuaWQgPT09IHVzZXIuaWQpIHtcbiAgICAgICAgICAgICAgICB1c2VyLmluZ3JvdXAgPSB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiB1c2VycztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1VTRVI6Ojo+Pj4+JywgdXNlcik7XG4gICAgICAgICAgICByZXR1cm4gdXNlcjtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZm91bmRVc2VyczogblVzZXJzIH0pO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIGNvbnN0IHVzZXJzID0gW1xuICAgIC8vICAgeyBpZDogMSwgdXNlcm5hbWU6ICdAa29iaScsIGluZ3JvdXA6IGZhbHNlIH0sXG4gICAgLy8gICB7IGlkOiAyLCB1c2VybmFtZTogJ0Bzb2xhJywgaW5ncm91cDogZmFsc2UgfSxcbiAgICAvLyAgIHsgaWQ6IDMsIHVzZXJuYW1lOiAnQGFrcGFuJywgaW5ncm91cDogZmFsc2UgfV07XG4gIH1cblxuICBvblNlbGVjdFVzZXIodXNlcikge1xuICAgIC8vIFJlbW92ZSBmcm9tIHNlbGVjdGVkVXNlcnMgbGlzdCBpZiBpdCBleGlzdHMgdGhlcmVcbiAgICAvLyBvciBBZGQgdG8gc2VsZWN0ZWRVc2VycyBsaXN0XG4gICAgbGV0IGFscmVhZHlTZWxlY3RlZCA9IGZhbHNlO1xuICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRVc2Vycy5tYXAoKHNVc2VyKSA9PiB7XG4gICAgICBpZiAoc1VzZXIuaWQgPT09IHVzZXIuaWQpIHtcbiAgICAgICAgYWxyZWFkeVNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHNVc2VyO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKCdBTFJFQURZIFNFTEVDVEVEOjo6OjonLCBhbHJlYWR5U2VsZWN0ZWQpO1xuICAgIGlmICghYWxyZWFkeVNlbGVjdGVkKSB7XG4gICAgICBjb25zdCBzZWxlY3RlZFVzZXJzID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFVzZXJzLmNvbmNhdCh1c2VyKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZFVzZXJzIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB1c2VycyA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRVc2Vycy5maWx0ZXIoc1VzZXIgPT4gc1VzZXIuaWQgIT09IHVzZXIuaWQpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkVXNlcnM6IHVzZXJzIH0pO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZygnU0VMRUNURUQgVVNFUlM6Ojo6OicsIHRoaXMuc3RhdGUuc2VsZWN0ZWRVc2Vycy5jb25jYXQodXNlcikpO1xuXG4gICAgLy8gZmxpcCB0aGUgaW5ncm91cCB2YWx1ZVxuICAgIGxldCBmb3VuZFVzZXJzID0gT2JqZWN0LmFzc2lnbihbXSwgdGhpcy5zdGF0ZS5mb3VuZFVzZXJzKTtcbiAgICBjb25zb2xlLmxvZyhmb3VuZFVzZXJzKTtcbiAgICBmb3VuZFVzZXJzID0gZm91bmRVc2Vycy5tYXAoKGZVc2VyKSA9PiB7XG4gICAgICBpZiAoZlVzZXIuaWQgPT09IHVzZXIuaWQpIHtcbiAgICAgICAgZlVzZXIuaW5ncm91cCA9ICFmVXNlci5pbmdyb3VwO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZVc2VyO1xuICAgIH0pO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBmb3VuZFVzZXJzIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc2VsZWN0ZWRHcm91cCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zb2xlLmxvZygnU0VMRUNURUQgR1JPVVA6Ojo6Ojo6Jywgc2VsZWN0ZWRHcm91cCk7XG4gICAgaWYgKHNlbGVjdGVkR3JvdXAubmFtZSA9PT0gJycgfHwgc2VsZWN0ZWRHcm91cC5uYW1lID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGxvY2F0aW9uLmhhc2ggPSAnI2Rhc2hib2FyZCc7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCB0aXRsZSA9IFsnQWRkIHVzZXJzIHRvICcsXG4gICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogJyMwMjc1ZDgnIH19Pnsgc2VsZWN0ZWRHcm91cC5uYW1lIH08L3NwYW4+LFxuICAgICAgJyBncm91cCddO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxGb3JtIHRpdGxlPXsgdGl0bGUgfSBhY3RpdmU9J3NlYXJjaCcgaW5ncm91cD17dHJ1ZX0+XG4gICAgICAgIDxoNiBzdHlsZT17eyBjb2xvcjogJyMwMjc1ZDgnIH19PlNlbGVjdGVkIFVzZXJzOiB7IHRoaXMuc3RhdGUuc2VsZWN0ZWRVc2Vycy5tYXAodXNlciA9PiBgJHt1c2VyLmlkfSwgYCkgfTwvaDY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1maWVsZCc+XG4gICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGlkPSdzZWFyY2gnIG9uQ2hhbmdlPXsgdGhpcy5vblNlYXJjaENoYW5nZSB9IHJlZj17KGlucHV0KSA9PiB7IHRoaXMudGVybSA9IGlucHV0OyB9fS8+XG4gICAgICAgICAgPGxhYmVsIGZvcj0nc2VhcmNoJz5TZWFyY2ggYnkgdXNlcm5hbWU8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlYXJjaC1yZXN1bHRzJz5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5mb3VuZFVzZXJzLm1hcChmVXNlciA9PlxuICAgICAgICAgICAgPHNwYW4ga2V5PXtmVXNlci5pZH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMub25TZWxlY3RVc2VyKGZVc2VyKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17ZlVzZXIuaW5ncm91cCA/ICdpbmdyb3VwJyA6ICcnfT5Ae2ZVc2VyLnVzZXJuYW1lfTwvc3Bhbj5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWFyY2gtcGFnZXNcIj48YSBocmVmPVwiIy8xXCIgY2xhc3NOYW1lPVwic2VhcmNoLXByZXZcIj5QcmV2PC9hPjxhIGhyZWY9XCIjLzJcIj4yPC9hPjxhIGhyZWY9XCIjLzNcIiBjbGFzc05hbWU9XCJzZWFyY2gtbmV4dFwiPk5leHQ8L2E+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nd2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0IGJ0biBhY3Rpb24tYnRuJ1xuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25GaW5pc2hDbGlja30+RmluaXNoPC9idXR0b24+XG4gICAgICAgIDxhIGNsYXNzTmFtZT0ncmlnaHQgd2F2ZXMtZWZmZWN0IHdhdmVzLXRlYWwgYnRuLWZsYXQgYWN0aW9uLWJ0bidcbiAgICAgICAgaHJlZj0nI2Rhc2hib2FyZCc+Q2FuY2VsPC9hPlxuICAgICAgPC9Gb3JtPik7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgc2VsZWN0ZWRHcm91cDogc3RhdGUuc2VsZWN0ZWRHcm91cFxuICB9O1xufTtcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBudWxsKShTZWFyY2gpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2pzL2NvbXBvbmVudHMvY29udGFpbmVycy9zZWFyY2guanMiXSwic291cmNlUm9vdCI6IiJ9