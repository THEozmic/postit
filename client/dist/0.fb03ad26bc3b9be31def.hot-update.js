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
      nextPage: 3,
      prevPage: 1
    };
    return _this;
  }

  _createClass(Search, [{
    key: 'onPageChange',
    value: function onPageChange(page) {
      if (page === 'prev') {
        if (this.state.prevPage !== 0) {
          this.setState({ nextPage: this.state.nextPage - 1 });
        }
        this.setState({ pre: this.state.nextPage - 1 });
      } else {

        this.onSearchChange(this.state.nextPage);
      }
    }
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

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.nextPage - this.state.prevPage;

      if (this.term.value.trim() !== '') {
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('x-access-token', JSON.parse(sessionStorage.getItem('user')).token);
        (0, _api2.default)(null, '/api/search/' + this.props.selectedGroup.id + '/' + this.term.value.trim() + '/' + page, 'GET', headers).then(function (users) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL3NlYXJjaC5qcz8zZDE2Il0sIm5hbWVzIjpbIlNlYXJjaCIsInByb3BzIiwib25TZWFyY2hDaGFuZ2UiLCJiaW5kIiwib25GaW5pc2hDbGljayIsInN0YXRlIiwiZm91bmRVc2VycyIsInNlbGVjdGVkVXNlcnMiLCJuZXh0UGFnZSIsInByZXZQYWdlIiwicGFnZSIsInNldFN0YXRlIiwicHJlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaGVhZGVycyIsIkhlYWRlcnMiLCJhcHBlbmQiLCJKU09OIiwicGFyc2UiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJ0b2tlbiIsInN0cmluZ2lmeSIsInNlbGVjdGVkR3JvdXAiLCJpZCIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwicmVzdWx0IiwidGVybSIsInZhbHVlIiwidHJpbSIsInVzZXJzIiwiblVzZXJzIiwiZGF0YSIsIm1hcCIsInVzZXIiLCJzVXNlciIsImluZ3JvdXAiLCJhbHJlYWR5U2VsZWN0ZWQiLCJjb25jYXQiLCJmaWx0ZXIiLCJPYmplY3QiLCJhc3NpZ24iLCJmVXNlciIsIm5hbWUiLCJ1bmRlZmluZWQiLCJsb2NhdGlvbiIsImhhc2giLCJ0aXRsZSIsImNvbG9yIiwiaW5wdXQiLCJvblNlbGVjdFVzZXIiLCJ1c2VybmFtZSIsIm9uUGFnZUNoYW5nZSIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxNOzs7QUFDSixrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGdIQUNYQSxLQURXOztBQUVqQixVQUFLQyxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0JDLElBQXBCLE9BQXRCO0FBQ0EsVUFBS0MsYUFBTCxHQUFxQixNQUFLQSxhQUFMLENBQW1CRCxJQUFuQixPQUFyQjtB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LENBQTBCO0FBQUEsbUJBQ3pCO0FBQUE7QUFBQSxnQkFBTSxLQUFLUyxNQUFNcEIsRUFBakI7QUFDQSx5QkFBUztBQUFBLHlCQUFNLE9BQUs0QixZQUFMLENBQWtCUixLQUFsQixDQUFOO0FBQUEsaUJBRFQ7QUFFQSwyQkFBV0EsTUFBTU4sT0FBTixHQUFnQixTQUFoQixHQUE0QixFQUZ2QztBQUFBO0FBRTZDTSxvQkFBTVM7QUFGbkQsYUFEeUI7QUFBQSxXQUExQixDQURIO0FBTUU7QUFBQTtBQUFBLGNBQUssV0FBTSxjQUFYO0FBQ0U7QUFBQTtBQUFBLGdCQUFNLFNBQVMsS0FBS0MsWUFBTCxDQUFrQixNQUFsQixDQUFmLEVBQTBDLFdBQVUsYUFBcEQ7QUFBQTtBQUFBLGFBREY7QUFDK0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUQvRTtBQUM2RjtBQUFBO0FBQUEsZ0JBQU0sU0FBUyxLQUFLQSxZQUFMLENBQWtCLE1BQWxCLENBQWYsRUFBMEMsV0FBVSxhQUFwRDtBQUFBO0FBQUE7QUFEN0Y7QUFORixTQU5GO0FBZUU7QUFBQTtBQUFBLFlBQVEsV0FBVSx5Q0FBbEI7QUFDRSxxQkFBUyxLQUFLbkQsYUFEaEI7QUFBQTtBQUFBLFNBZkY7QUFpQkU7QUFBQTtBQUFBLFlBQUcsV0FBVSxtREFBYjtBQUNBLGtCQUFLLFlBREw7QUFBQTtBQUFBO0FBakJGLE9BREY7QUFxQkQ7Ozs7RUE1SGtCLGdCQUFNb0QsUzs7QUErSDNCLElBQU1DLGtCQUFrQixTQUFsQkEsZUFBa0IsQ0FBQ3BELEtBQUQsRUFBVztBQUNqQyxTQUFPO0FBQ0xtQixtQkFBZW5CLE1BQU1tQjtBQURoQixHQUFQO0FBR0QsQ0FKRDtrQkFLZSx5QkFBUWlDLGVBQVIsRUFBeUIsSUFBekIsRUFBK0J6RCxNQUEvQixDIiwiZmlsZSI6IjAuZmIwM2FkMjZiYzNiOWJlMzFkZWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IEZvcm0gZnJvbSAnLi4vcHJlc2VudGF0aW9uYWwvZm9ybSc7XG5pbXBvcnQgYXBpIGZyb20gJy4uL2hlbHBlcnMvYXBpJztcblxuY2xhc3MgU2VhcmNoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5vblNlYXJjaENoYW5nZSA9IHRoaXMub25TZWFyY2hDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uRmluaXNoQ2xpY2sgPSB0aGlzLm9uRmluaXNoQ2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZm91bmRVc2VyczogW10sXG4gICAgICBzZWxlY3RlZFVzZXJzOiBbXSxcbiAgICAgIG5leHRQYWdlOiAzLFxuICAgICAgcHJldlBhZ2U6IDFcbiAgICB9O1xuICB9XG5cbiAgb25QYWdlQ2hhbmdlKHBhZ2UpIHtcbiAgICBpZiAocGFnZSA9PT0gJ3ByZXYnKSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5wcmV2UGFnZSAhPT0gMCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbmV4dFBhZ2U6IHRoaXMuc3RhdGUubmV4dFBhZ2UgLSAxIH0pO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByZTogdGhpcy5zdGF0ZS5uZXh0UGFnZSAtIDEgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFxuICAgICAgdGhpcy5vblNlYXJjaENoYW5nZSh0aGlzLnN0YXRlLm5leHRQYWdlKTtcbiAgICB9XG4gIH1cblxuICBvbkZpbmlzaENsaWNrKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcbiAgICBoZWFkZXJzLmFwcGVuZCgneC1hY2Nlc3MtdG9rZW4nLCBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSkudG9rZW4pO1xuICAgIGFwaShgdXNlcnM9JHtKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlLnNlbGVjdGVkVXNlcnMpfWAsIGAvYXBpL2dyb3Vwcy8ke3RoaXMucHJvcHMuc2VsZWN0ZWRHcm91cC5pZH0vdXNlci9gLCAnUE9TVCcsIGhlYWRlcnMpXG4gICAgLnRoZW4ocmVzdWx0ID0+IGNvbnNvbGUubG9nKCdGSU5JU0ggUkVTVUxUOjo6OjonLCByZXN1bHQpKTtcbiAgfVxuXG4gIG9uU2VhcmNoQ2hhbmdlKHBhZ2UgPSB0aGlzLnN0YXRlLm5leHRQYWdlIC0gdGhpcy5zdGF0ZS5wcmV2UGFnZSkge1xuICAgIGlmICh0aGlzLnRlcm0udmFsdWUudHJpbSgpICE9PSAnJykge1xuICAgICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuICAgICAgaGVhZGVycy5hcHBlbmQoJ3gtYWNjZXNzLXRva2VuJywgSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpLnRva2VuKTtcbiAgICAgIGFwaShudWxsLCBgL2FwaS9zZWFyY2gvJHt0aGlzLnByb3BzLnNlbGVjdGVkR3JvdXAuaWR9LyR7dGhpcy50ZXJtLnZhbHVlLnRyaW0oKX0vJHtwYWdlfWAsICdHRVQnLCBoZWFkZXJzKS50aGVuKFxuICAgICAgICAodXNlcnMpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyh1c2Vycyk7XG4gICAgICAgICAgY29uc3QgblVzZXJzID0gdXNlcnMuZGF0YS5tYXAoKHVzZXIpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRVc2Vycy5tYXAoKHNVc2VyKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChzVXNlci5pZCA9PT0gdXNlci5pZCkge1xuICAgICAgICAgICAgICAgIHVzZXIuaW5ncm91cCA9IHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIHVzZXJzO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVVNFUjo6Oj4+Pj4nLCB1c2VyKTtcbiAgICAgICAgICAgIHJldHVybiB1c2VyO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb3VuZFVzZXJzOiBuVXNlcnMgfSk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgb25TZWxlY3RVc2VyKHVzZXIpIHtcbiAgICAvLyBSZW1vdmUgZnJvbSBzZWxlY3RlZFVzZXJzIGxpc3QgaWYgaXQgZXhpc3RzIHRoZXJlXG4gICAgLy8gb3IgQWRkIHRvIHNlbGVjdGVkVXNlcnMgbGlzdFxuICAgIGxldCBhbHJlYWR5U2VsZWN0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLnN0YXRlLnNlbGVjdGVkVXNlcnMubWFwKChzVXNlcikgPT4ge1xuICAgICAgaWYgKHNVc2VyLmlkID09PSB1c2VyLmlkKSB7XG4gICAgICAgIGFscmVhZHlTZWxlY3RlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiBzVXNlcjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZygnQUxSRUFEWSBTRUxFQ1RFRDo6Ojo6JywgYWxyZWFkeVNlbGVjdGVkKTtcbiAgICBpZiAoIWFscmVhZHlTZWxlY3RlZCkge1xuICAgICAgY29uc3Qgc2VsZWN0ZWRVc2VycyA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRVc2Vycy5jb25jYXQodXNlcik7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRVc2VycyB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdXNlcnMgPSB0aGlzLnN0YXRlLnNlbGVjdGVkVXNlcnMuZmlsdGVyKHNVc2VyID0+IHNVc2VyLmlkICE9PSB1c2VyLmlkKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZFVzZXJzOiB1c2VycyB9KTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coJ1NFTEVDVEVEIFVTRVJTOjo6OjonLCB0aGlzLnN0YXRlLnNlbGVjdGVkVXNlcnMuY29uY2F0KHVzZXIpKTtcblxuICAgIC8vIGZsaXAgdGhlIGluZ3JvdXAgdmFsdWVcbiAgICBsZXQgZm91bmRVc2VycyA9IE9iamVjdC5hc3NpZ24oW10sIHRoaXMuc3RhdGUuZm91bmRVc2Vycyk7XG4gICAgY29uc29sZS5sb2coZm91bmRVc2Vycyk7XG4gICAgZm91bmRVc2VycyA9IGZvdW5kVXNlcnMubWFwKChmVXNlcikgPT4ge1xuICAgICAgaWYgKGZVc2VyLmlkID09PSB1c2VyLmlkKSB7XG4gICAgICAgIGZVc2VyLmluZ3JvdXAgPSAhZlVzZXIuaW5ncm91cDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmVXNlcjtcbiAgICB9KTtcbiAgICB0aGlzLnNldFN0YXRlKHsgZm91bmRVc2VycyB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHNlbGVjdGVkR3JvdXAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc29sZS5sb2coJ1NFTEVDVEVEIEdST1VQOjo6Ojo6OicsIHNlbGVjdGVkR3JvdXApO1xuICAgIGlmIChzZWxlY3RlZEdyb3VwLm5hbWUgPT09ICcnIHx8IHNlbGVjdGVkR3JvdXAubmFtZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBsb2NhdGlvbi5oYXNoID0gJyNkYXNoYm9hcmQnO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgdGl0bGUgPSBbJ0FkZCB1c2VycyB0byAnLFxuICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6ICcjMDI3NWQ4JyB9fT57IHNlbGVjdGVkR3JvdXAubmFtZSB9PC9zcGFuPixcbiAgICAgICcgZ3JvdXAnXTtcblxuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybSB0aXRsZT17IHRpdGxlIH0gYWN0aXZlPSdzZWFyY2gnIGluZ3JvdXA9e3RydWV9PlxuICAgICAgICA8aDYgc3R5bGU9e3sgY29sb3I6ICcjMDI3NWQ4JyB9fT5TZWxlY3RlZCBVc2VyczogeyB0aGlzLnN0YXRlLnNlbGVjdGVkVXNlcnMubWFwKHVzZXIgPT4gYCR7dXNlci5pZH0sIGApIH08L2g2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtZmllbGQnPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBpZD0nc2VhcmNoJyBvbkNoYW5nZT17IHRoaXMub25TZWFyY2hDaGFuZ2UgfSByZWY9eyhpbnB1dCkgPT4geyB0aGlzLnRlcm0gPSBpbnB1dDsgfX0vPlxuICAgICAgICAgIDxsYWJlbCBmb3I9J3NlYXJjaCc+U2VhcmNoIGJ5IHVzZXJuYW1lPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWFyY2gtcmVzdWx0cyc+XG4gICAgICAgICAge3RoaXMuc3RhdGUuZm91bmRVc2Vycy5tYXAoZlVzZXIgPT5cbiAgICAgICAgICAgIDxzcGFuIGtleT17ZlVzZXIuaWR9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLm9uU2VsZWN0VXNlcihmVXNlcil9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2ZVc2VyLmluZ3JvdXAgPyAnaW5ncm91cCcgOiAnJ30+QHtmVXNlci51c2VybmFtZX08L3NwYW4+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VhcmNoLXBhZ2VzXCI+XG4gICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXt0aGlzLm9uUGFnZUNoYW5nZSgncHJldicpfSBjbGFzc05hbWU9XCJzZWFyY2gtcHJldlwiPlByZXY8L3NwYW4+PHNwYW4+Mjwvc3Bhbj48c3BhbiBvbkNsaWNrPXt0aGlzLm9uUGFnZUNoYW5nZSgnbmV4dCcpfSBjbGFzc05hbWU9XCJzZWFyY2gtbmV4dFwiPk5leHQ8L3NwYW4+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nd2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0IGJ0biBhY3Rpb24tYnRuJ1xuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25GaW5pc2hDbGlja30+RmluaXNoPC9idXR0b24+XG4gICAgICAgIDxhIGNsYXNzTmFtZT0ncmlnaHQgd2F2ZXMtZWZmZWN0IHdhdmVzLXRlYWwgYnRuLWZsYXQgYWN0aW9uLWJ0bidcbiAgICAgICAgaHJlZj0nI2Rhc2hib2FyZCc+Q2FuY2VsPC9hPlxuICAgICAgPC9Gb3JtPik7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgc2VsZWN0ZWRHcm91cDogc3RhdGUuc2VsZWN0ZWRHcm91cFxuICB9O1xufTtcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBudWxsKShTZWFyY2gpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2pzL2NvbXBvbmVudHMvY29udGFpbmVycy9zZWFyY2guanMiXSwic291cmNlUm9vdCI6IiJ9