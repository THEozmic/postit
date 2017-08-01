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
      selectedUsers: []
    };
    return _this;
  }

  _createClass(Search, [{
    key: 'onFinishClick',
    value: function onFinishClick(e) {
      e.preventDefault();
      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      headers.append('x-access-token', JSON.parse(sessionStorage.getItem('user')).token);
      (0, _api2.default)('users=' + this.state.selectedUsers, '/api/groups/' + this.props.selectedGroup.id + '/user/', 'POST', headers).then();
    }
  }, {
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
            onClick: function onClick(e) {
              return _this3.onFinishClick;
            } },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL3NlYXJjaC5qcz8zZDE2Il0sIm5hbWVzIjpbIlNlYXJjaCIsInByb3BzIiwib25TZWFyY2hDaGFuZ2UiLCJiaW5kIiwib25GaW5pc2hDbGljayIsInN0YXRlIiwiZm91bmRVc2VycyIsInNlbGVjdGVkVXNlcnMiLCJlIiwicHJldmVudERlZmF1bHQiLCJoZWFkZXJzIiwiSGVhZGVycyIsImFwcGVuZCIsIkpTT04iLCJwYXJzZSIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsInRva2VuIiwic2VsZWN0ZWRHcm91cCIsImlkIiwidGhlbiIsInRlcm0iLCJ2YWx1ZSIsInRyaW0iLCJ1c2VycyIsImNvbnNvbGUiLCJsb2ciLCJuVXNlcnMiLCJkYXRhIiwibWFwIiwidXNlciIsInNVc2VyIiwiaW5ncm91cCIsInNldFN0YXRlIiwiYWxyZWFkeVNlbGVjdGVkIiwiY29uY2F0IiwiZmlsdGVyIiwiT2JqZWN0IiwiYXNzaWduIiwiZlVzZXIiLCJuYW1lIiwidW5kZWZpbmVkIiwibG9jYXRpb24iLCJoYXNoIiwidGl0bGUiLCJjb2xvciIsImlucHV0Iiwib25TZWxlY3RVc2VyIiwidXNlcm5hbWUiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUEsTTs7O0FBQ0osa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxnSEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsY0FBTCxHQUFzQixNQUFLQSxjQUFMLENBQW9CQyxJQUFwQixPQUF0QjtBQUNBLFVBQUtDLGFBQUwsR0FBcUIsTUFBS0EsYUFBTCxDQUFtQkQsSUFBbkIsT0FBckI7QUFDQSxVQUFLRSxLQUFMLEdBQWE7QUFDWEMsa0JBQVksRUFERDtBQUVYQyxxQkFBZTtBQUZKLEtBQWI7QUFKaUI7QUFRbEI7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QkQ7Ozs7RUE3R2tCLGdCQUFNNkMsUzs7QUFnSDNCLElBQU1DLGtCQUFrQixTQUFsQkEsZUFBa0IsQ0FBQzdDLEtBQUQsRUFBVztBQUNqQyxTQUFPO0FBQ0xhLG1CQUFlYixNQUFNYTtBQURoQixHQUFQO0FBR0QsQ0FKRDtrQkFLZSx5QkFBUWdDLGVBQVIsRUFBeUIsSUFBekIsRUFBK0JsRCxNQUEvQixDIiwiZmlsZSI6IjAuYjEwOGM3ODEyYWRlZTNjYzYyMTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IEZvcm0gZnJvbSAnLi4vcHJlc2VudGF0aW9uYWwvZm9ybSc7XG5pbXBvcnQgYXBpIGZyb20gJy4uL2hlbHBlcnMvYXBpJztcblxuY2xhc3MgU2VhcmNoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5vblNlYXJjaENoYW5nZSA9IHRoaXMub25TZWFyY2hDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uRmluaXNoQ2xpY2sgPSB0aGlzLm9uRmluaXNoQ2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZm91bmRVc2VyczogW10sXG4gICAgICBzZWxlY3RlZFVzZXJzOiBbXVxuICAgIH07XG4gIH1cblxuICBvbkZpbmlzaENsaWNrKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcbiAgICBoZWFkZXJzLmFwcGVuZCgneC1hY2Nlc3MtdG9rZW4nLCBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSkudG9rZW4pO1xuICAgIGFwaShgdXNlcnM9JHt0aGlzLnN0YXRlLnNlbGVjdGVkVXNlcnN9YCwgYC9hcGkvZ3JvdXBzLyR7dGhpcy5wcm9wcy5zZWxlY3RlZEdyb3VwLmlkfS91c2VyL2AsICdQT1NUJywgaGVhZGVycylcbiAgICAudGhlbigpO1xuICB9XG5cbiAgb25TZWFyY2hDaGFuZ2UoKSB7XG4gICAgaWYgKHRoaXMudGVybS52YWx1ZS50cmltKCkgIT09ICcnKSB7XG4gICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XG4gICAgICBoZWFkZXJzLmFwcGVuZCgneC1hY2Nlc3MtdG9rZW4nLCBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSkudG9rZW4pO1xuICAgICAgYXBpKG51bGwsIGAvYXBpL3NlYXJjaC8ke3RoaXMucHJvcHMuc2VsZWN0ZWRHcm91cC5pZH0vJHt0aGlzLnRlcm0udmFsdWUudHJpbSgpfWAsICdHRVQnLCBoZWFkZXJzKS50aGVuKFxuICAgICAgICAodXNlcnMpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyh1c2Vycyk7XG4gICAgICAgICAgY29uc3QgblVzZXJzID0gdXNlcnMuZGF0YS5tYXAoKHVzZXIpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRVc2Vycy5tYXAoKHNVc2VyKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChzVXNlci5pZCA9PT0gdXNlci5pZCkge1xuICAgICAgICAgICAgICAgIHVzZXIuaW5ncm91cCA9IHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIHVzZXJzO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVVNFUjo6Oj4+Pj4nLCB1c2VyKTtcbiAgICAgICAgICAgIHJldHVybiB1c2VyO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb3VuZFVzZXJzOiBuVXNlcnMgfSk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgb25TZWxlY3RVc2VyKHVzZXIpIHtcbiAgICAvLyBSZW1vdmUgZnJvbSBzZWxlY3RlZFVzZXJzIGxpc3QgaWYgaXQgZXhpc3RzIHRoZXJlXG4gICAgLy8gb3IgQWRkIHRvIHNlbGVjdGVkVXNlcnMgbGlzdFxuICAgIGxldCBhbHJlYWR5U2VsZWN0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLnN0YXRlLnNlbGVjdGVkVXNlcnMubWFwKChzVXNlcikgPT4ge1xuICAgICAgaWYgKHNVc2VyLmlkID09PSB1c2VyLmlkKSB7XG4gICAgICAgIGFscmVhZHlTZWxlY3RlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiBzVXNlcjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZygnQUxSRUFEWSBTRUxFQ1RFRDo6Ojo6JywgYWxyZWFkeVNlbGVjdGVkKTtcbiAgICBpZiAoIWFscmVhZHlTZWxlY3RlZCkge1xuICAgICAgY29uc3Qgc2VsZWN0ZWRVc2VycyA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRVc2Vycy5jb25jYXQodXNlcik7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRVc2VycyB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdXNlcnMgPSB0aGlzLnN0YXRlLnNlbGVjdGVkVXNlcnMuZmlsdGVyKHNVc2VyID0+IHNVc2VyLmlkICE9PSB1c2VyLmlkKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZFVzZXJzOiB1c2VycyB9KTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coJ1NFTEVDVEVEIFVTRVJTOjo6OjonLCB0aGlzLnN0YXRlLnNlbGVjdGVkVXNlcnMuY29uY2F0KHVzZXIpKTtcblxuICAgIC8vIGZsaXAgdGhlIGluZ3JvdXAgdmFsdWVcbiAgICBsZXQgZm91bmRVc2VycyA9IE9iamVjdC5hc3NpZ24oW10sIHRoaXMuc3RhdGUuZm91bmRVc2Vycyk7XG4gICAgY29uc29sZS5sb2coZm91bmRVc2Vycyk7XG4gICAgZm91bmRVc2VycyA9IGZvdW5kVXNlcnMubWFwKChmVXNlcikgPT4ge1xuICAgICAgaWYgKGZVc2VyLmlkID09PSB1c2VyLmlkKSB7XG4gICAgICAgIGZVc2VyLmluZ3JvdXAgPSAhZlVzZXIuaW5ncm91cDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmVXNlcjtcbiAgICB9KTtcbiAgICB0aGlzLnNldFN0YXRlKHsgZm91bmRVc2VycyB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHNlbGVjdGVkR3JvdXAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc29sZS5sb2coJ1NFTEVDVEVEIEdST1VQOjo6Ojo6OicsIHNlbGVjdGVkR3JvdXApO1xuICAgIGlmIChzZWxlY3RlZEdyb3VwLm5hbWUgPT09ICcnIHx8IHNlbGVjdGVkR3JvdXAubmFtZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBsb2NhdGlvbi5oYXNoID0gJyNkYXNoYm9hcmQnO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgdGl0bGUgPSBbJ0FkZCB1c2VycyB0byAnLFxuICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6ICcjMDI3NWQ4JyB9fT57IHNlbGVjdGVkR3JvdXAubmFtZSB9PC9zcGFuPixcbiAgICAgICcgZ3JvdXAnXTtcblxuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybSB0aXRsZT17IHRpdGxlIH0gYWN0aXZlPSdzZWFyY2gnIGluZ3JvdXA9e3RydWV9PlxuICAgICAgICA8aDYgc3R5bGU9e3sgY29sb3I6ICcjMDI3NWQ4JyB9fT5TZWxlY3RlZCBVc2VyczogeyB0aGlzLnN0YXRlLnNlbGVjdGVkVXNlcnMubWFwKHVzZXIgPT4gYCR7dXNlci5pZH0sIGApIH08L2g2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtZmllbGQnPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBpZD0nc2VhcmNoJyBvbkNoYW5nZT17IHRoaXMub25TZWFyY2hDaGFuZ2UgfSByZWY9eyhpbnB1dCkgPT4geyB0aGlzLnRlcm0gPSBpbnB1dDsgfX0vPlxuICAgICAgICAgIDxsYWJlbCBmb3I9J3NlYXJjaCc+U2VhcmNoIGJ5IHVzZXJuYW1lPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWFyY2gtcmVzdWx0cyc+XG4gICAgICAgICAge3RoaXMuc3RhdGUuZm91bmRVc2Vycy5tYXAoZlVzZXIgPT5cbiAgICAgICAgICAgIDxzcGFuIGtleT17ZlVzZXIuaWR9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLm9uU2VsZWN0VXNlcihmVXNlcil9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2ZVc2VyLmluZ3JvdXAgPyAnaW5ncm91cCcgOiAnJ30+QHtmVXNlci51c2VybmFtZX08L3NwYW4+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VhcmNoLXBhZ2VzXCI+PGEgaHJlZj1cIiMvMVwiIGNsYXNzTmFtZT1cInNlYXJjaC1wcmV2XCI+UHJldjwvYT48YSBocmVmPVwiIy8yXCI+MjwvYT48YSBocmVmPVwiIy8zXCIgY2xhc3NOYW1lPVwic2VhcmNoLW5leHRcIj5OZXh0PC9hPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J3dhdmVzLWVmZmVjdCB3YXZlcy1saWdodCBidG4gYWN0aW9uLWJ0bidcbiAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gdGhpcy5vbkZpbmlzaENsaWNrfT5GaW5pc2g8L2J1dHRvbj5cbiAgICAgICAgPGEgY2xhc3NOYW1lPSdyaWdodCB3YXZlcy1lZmZlY3Qgd2F2ZXMtdGVhbCBidG4tZmxhdCBhY3Rpb24tYnRuJ1xuICAgICAgICBocmVmPScjZGFzaGJvYXJkJz5DYW5jZWw8L2E+XG4gICAgICA8L0Zvcm0+KTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBzZWxlY3RlZEdyb3VwOiBzdGF0ZS5zZWxlY3RlZEdyb3VwXG4gIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG51bGwpKFNlYXJjaCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL3NlYXJjaC5qcyJdLCJzb3VyY2VSb290IjoiIn0=