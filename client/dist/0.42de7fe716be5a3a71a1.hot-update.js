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

var _api = __webpack_require__(19);

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
    _this.onFinishClick = _this.onFinishClick.bind(_this);
    _this.state = {
      foundUsers: [],
      selectedUsers: [],
      page: 1
    };
    return _this;
  }

  _createClass(Search, [{
    key: 'onPageChange',
    value: function onPageChange(page) {}
  }, {
    key: 'onFinishClick',
    value: function onFinishClick(e) {
      e.preventDefault();
      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      headers.append('x-access-token', JSON.parse(sessionStorage.getItem('user')).token);
      (0, _api2.default)('users=' + JSON.stringify(this.state.selectedUsers), '/api/groups/' + this.props.selectedGroup.id + '/user/', 'POST', headers).then(function (result) {
        return console.log('FINISH RESULT:::::', result);
      });
    }
  }, {
    key: 'onSearchChange',
    value: function onSearchChange() {
      var _this2 = this;

      if (this.term.value.trim() !== '') {
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('x-access-token', JSON.parse(sessionStorage.getItem('user')).token);
        (0, _api2.default)(null, '/api/search/' + this.props.selectedGroup.id + '/' + this.term.value.trim() + '/' + this.state.page, 'GET', headers).then(function (users) {
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
              'span',
              { onClick: this.onPageChange('prev'), className: 'search-prev' },
              'Prev'
            ),
            _react2.default.createElement(
              'span',
              null,
              '2'
            ),
            _react2.default.createElement(
              'span',
              { onClick: this.onPageChange('next'), className: 'search-next' },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL3NlYXJjaC5qcz8zZDE2Il0sIm5hbWVzIjpbIlNlYXJjaCIsInByb3BzIiwib25TZWFyY2hDaGFuZ2UiLCJiaW5kIiwib25GaW5pc2hDbGljayIsInN0YXRlIiwiZm91bmRVc2VycyIsInNlbGVjdGVkVXNlcnMiLCJwYWdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaGVhZGVycyIsIkhlYWRlcnMiLCJhcHBlbmQiLCJKU09OIiwicGFyc2UiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJ0b2tlbiIsInN0cmluZ2lmeSIsInNlbGVjdGVkR3JvdXAiLCJpZCIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwicmVzdWx0IiwidGVybSIsInZhbHVlIiwidHJpbSIsInVzZXJzIiwiblVzZXJzIiwiZGF0YSIsIm1hcCIsInVzZXIiLCJzVXNlciIsImluZ3JvdXAiLCJzZXRTdGF0ZSIsImFscmVhZHlTZWxlY3RlZCIsImNvbmNhdCIsImZpbHRlciIsIk9iamVjdCIsImFzc2lnbiIsImZVc2VyIiwibmFtZSIsInVuZGVmaW5lZCIsImxvY2F0aW9uIiwiaGFzaCIsInRpdGxlIiwiY29sb3IiLCJpbnB1dCIsIm9uU2VsZWN0VXNlciIsInVzZXJuYW1lIiwib25QYWdlQ2hhbmdlIiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLE07OztBQUNKLGtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsZ0hBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLGNBQUwsR0FBc0IsTUFBS0EsY0FBTCxDQUFvQkMsSUFBcEIsT0FBdEI7QUFDQSxVQUFLQyxhQUFMLEdBQXFCLE1BQUtBLGFBQUwsQ0FBbUJELElBQW5CLE9BQXJCO0FBQ0EsVUFBS0UsS0FBTCxHQUFhO0FBQ1hDLGtC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QixNQUFsQixDQUFmLEVBQTBDLFdBQVUsYUFBcEQ7QUFBQTtBQUFBO0FBRDdGO0FBTkYsU0FORjtBQWVFO0FBQUE7QUFBQSxZQUFRLFdBQVUseUNBQWxCO0FBQ0UscUJBQVMsS0FBS2hELGFBRGhCO0FBQUE7QUFBQSxTQWZGO0FBaUJFO0FBQUE7QUFBQSxZQUFHLFdBQVUsbURBQWI7QUFDQSxrQkFBSyxZQURMO0FBQUE7QUFBQTtBQWpCRixPQURGO0FBcUJEOzs7O0VBbkhrQixnQkFBTWlELFM7O0FBc0gzQixJQUFNQyxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNqRCxLQUFELEVBQVc7QUFDakMsU0FBTztBQUNMZSxtQkFBZWYsTUFBTWU7QUFEaEIsR0FBUDtBQUdELENBSkQ7a0JBS2UseUJBQVFrQyxlQUFSLEVBQXlCLElBQXpCLEVBQStCdEQsTUFBL0IsQyIsImZpbGUiOiIwLjQyZGU3ZmU3MTZiZTVhM2E3MWExLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBGb3JtIGZyb20gJy4uL3ByZXNlbnRhdGlvbmFsL2Zvcm0nO1xuaW1wb3J0IGFwaSBmcm9tICcuLi9oZWxwZXJzL2FwaSc7XG5cbmNsYXNzIFNlYXJjaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMub25TZWFyY2hDaGFuZ2UgPSB0aGlzLm9uU2VhcmNoQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkZpbmlzaENsaWNrID0gdGhpcy5vbkZpbmlzaENsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZvdW5kVXNlcnM6IFtdLFxuICAgICAgc2VsZWN0ZWRVc2VyczogW10sXG4gICAgICBwYWdlOiAxXG4gICAgfTtcbiAgfVxuXG4gIG9uUGFnZUNoYW5nZShwYWdlKSB7XG4gICAgXG4gIH1cblxuICBvbkZpbmlzaENsaWNrKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcbiAgICBoZWFkZXJzLmFwcGVuZCgneC1hY2Nlc3MtdG9rZW4nLCBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSkudG9rZW4pO1xuICAgIGFwaShgdXNlcnM9JHtKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlLnNlbGVjdGVkVXNlcnMpfWAsIGAvYXBpL2dyb3Vwcy8ke3RoaXMucHJvcHMuc2VsZWN0ZWRHcm91cC5pZH0vdXNlci9gLCAnUE9TVCcsIGhlYWRlcnMpXG4gICAgLnRoZW4ocmVzdWx0ID0+IGNvbnNvbGUubG9nKCdGSU5JU0ggUkVTVUxUOjo6OjonLCByZXN1bHQpKTtcbiAgfVxuXG4gIG9uU2VhcmNoQ2hhbmdlKCkge1xuICAgIGlmICh0aGlzLnRlcm0udmFsdWUudHJpbSgpICE9PSAnJykge1xuICAgICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuICAgICAgaGVhZGVycy5hcHBlbmQoJ3gtYWNjZXNzLXRva2VuJywgSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpLnRva2VuKTtcbiAgICAgIGFwaShudWxsLCBgL2FwaS9zZWFyY2gvJHt0aGlzLnByb3BzLnNlbGVjdGVkR3JvdXAuaWR9LyR7dGhpcy50ZXJtLnZhbHVlLnRyaW0oKX0vJHt0aGlzLnN0YXRlLnBhZ2V9YCwgJ0dFVCcsIGhlYWRlcnMpLnRoZW4oXG4gICAgICAgICh1c2VycykgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXJzKTtcbiAgICAgICAgICBjb25zdCBuVXNlcnMgPSB1c2Vycy5kYXRhLm1hcCgodXNlcikgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZFVzZXJzLm1hcCgoc1VzZXIpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHNVc2VyLmlkID09PSB1c2VyLmlkKSB7XG4gICAgICAgICAgICAgICAgdXNlci5pbmdyb3VwID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gdXNlcnM7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdVU0VSOjo6Pj4+PicsIHVzZXIpO1xuICAgICAgICAgICAgcmV0dXJuIHVzZXI7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvdW5kVXNlcnM6IG5Vc2VycyB9KTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBvblNlbGVjdFVzZXIodXNlcikge1xuICAgIC8vIFJlbW92ZSBmcm9tIHNlbGVjdGVkVXNlcnMgbGlzdCBpZiBpdCBleGlzdHMgdGhlcmVcbiAgICAvLyBvciBBZGQgdG8gc2VsZWN0ZWRVc2VycyBsaXN0XG4gICAgbGV0IGFscmVhZHlTZWxlY3RlZCA9IGZhbHNlO1xuICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRVc2Vycy5tYXAoKHNVc2VyKSA9PiB7XG4gICAgICBpZiAoc1VzZXIuaWQgPT09IHVzZXIuaWQpIHtcbiAgICAgICAgYWxyZWFkeVNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHNVc2VyO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKCdBTFJFQURZIFNFTEVDVEVEOjo6OjonLCBhbHJlYWR5U2VsZWN0ZWQpO1xuICAgIGlmICghYWxyZWFkeVNlbGVjdGVkKSB7XG4gICAgICBjb25zdCBzZWxlY3RlZFVzZXJzID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFVzZXJzLmNvbmNhdCh1c2VyKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZFVzZXJzIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB1c2VycyA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRVc2Vycy5maWx0ZXIoc1VzZXIgPT4gc1VzZXIuaWQgIT09IHVzZXIuaWQpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkVXNlcnM6IHVzZXJzIH0pO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZygnU0VMRUNURUQgVVNFUlM6Ojo6OicsIHRoaXMuc3RhdGUuc2VsZWN0ZWRVc2Vycy5jb25jYXQodXNlcikpO1xuXG4gICAgLy8gZmxpcCB0aGUgaW5ncm91cCB2YWx1ZVxuICAgIGxldCBmb3VuZFVzZXJzID0gT2JqZWN0LmFzc2lnbihbXSwgdGhpcy5zdGF0ZS5mb3VuZFVzZXJzKTtcbiAgICBjb25zb2xlLmxvZyhmb3VuZFVzZXJzKTtcbiAgICBmb3VuZFVzZXJzID0gZm91bmRVc2Vycy5tYXAoKGZVc2VyKSA9PiB7XG4gICAgICBpZiAoZlVzZXIuaWQgPT09IHVzZXIuaWQpIHtcbiAgICAgICAgZlVzZXIuaW5ncm91cCA9ICFmVXNlci5pbmdyb3VwO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZVc2VyO1xuICAgIH0pO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBmb3VuZFVzZXJzIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc2VsZWN0ZWRHcm91cCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zb2xlLmxvZygnU0VMRUNURUQgR1JPVVA6Ojo6Ojo6Jywgc2VsZWN0ZWRHcm91cCk7XG4gICAgaWYgKHNlbGVjdGVkR3JvdXAubmFtZSA9PT0gJycgfHwgc2VsZWN0ZWRHcm91cC5uYW1lID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGxvY2F0aW9uLmhhc2ggPSAnI2Rhc2hib2FyZCc7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCB0aXRsZSA9IFsnQWRkIHVzZXJzIHRvICcsXG4gICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogJyMwMjc1ZDgnIH19Pnsgc2VsZWN0ZWRHcm91cC5uYW1lIH08L3NwYW4+LFxuICAgICAgJyBncm91cCddO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxGb3JtIHRpdGxlPXsgdGl0bGUgfSBhY3RpdmU9J3NlYXJjaCcgaW5ncm91cD17dHJ1ZX0+XG4gICAgICAgIDxoNiBzdHlsZT17eyBjb2xvcjogJyMwMjc1ZDgnIH19PlNlbGVjdGVkIFVzZXJzOiB7IHRoaXMuc3RhdGUuc2VsZWN0ZWRVc2Vycy5tYXAodXNlciA9PiBgJHt1c2VyLmlkfSwgYCkgfTwvaDY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1maWVsZCc+XG4gICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGlkPSdzZWFyY2gnIG9uQ2hhbmdlPXsgdGhpcy5vblNlYXJjaENoYW5nZSB9IHJlZj17KGlucHV0KSA9PiB7IHRoaXMudGVybSA9IGlucHV0OyB9fS8+XG4gICAgICAgICAgPGxhYmVsIGZvcj0nc2VhcmNoJz5TZWFyY2ggYnkgdXNlcm5hbWU8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlYXJjaC1yZXN1bHRzJz5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5mb3VuZFVzZXJzLm1hcChmVXNlciA9PlxuICAgICAgICAgICAgPHNwYW4ga2V5PXtmVXNlci5pZH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMub25TZWxlY3RVc2VyKGZVc2VyKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17ZlVzZXIuaW5ncm91cCA/ICdpbmdyb3VwJyA6ICcnfT5Ae2ZVc2VyLnVzZXJuYW1lfTwvc3Bhbj5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWFyY2gtcGFnZXNcIj5cbiAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e3RoaXMub25QYWdlQ2hhbmdlKCdwcmV2Jyl9IGNsYXNzTmFtZT1cInNlYXJjaC1wcmV2XCI+UHJldjwvc3Bhbj48c3Bhbj4yPC9zcGFuPjxzcGFuIG9uQ2xpY2s9e3RoaXMub25QYWdlQ2hhbmdlKCduZXh0Jyl9IGNsYXNzTmFtZT1cInNlYXJjaC1uZXh0XCI+TmV4dDwvc3Bhbj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSd3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHQgYnRuIGFjdGlvbi1idG4nXG4gICAgICAgICAgb25DbGljaz17dGhpcy5vbkZpbmlzaENsaWNrfT5GaW5pc2g8L2J1dHRvbj5cbiAgICAgICAgPGEgY2xhc3NOYW1lPSdyaWdodCB3YXZlcy1lZmZlY3Qgd2F2ZXMtdGVhbCBidG4tZmxhdCBhY3Rpb24tYnRuJ1xuICAgICAgICBocmVmPScjZGFzaGJvYXJkJz5DYW5jZWw8L2E+XG4gICAgICA8L0Zvcm0+KTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBzZWxlY3RlZEdyb3VwOiBzdGF0ZS5zZWxlY3RlZEdyb3VwXG4gIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG51bGwpKFNlYXJjaCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL3NlYXJjaC5qcyJdLCJzb3VyY2VSb290IjoiIn0=