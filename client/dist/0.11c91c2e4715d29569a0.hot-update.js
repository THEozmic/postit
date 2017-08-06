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
    _this.onPageChange = _this.onPageChange.bind(_this);
    _this.state = {
      foundUsers: [],
      selectedUsers: [],
      nextPage: 2,
      prevPage: 0
    };
    return _this;
  }

  _createClass(Search, [{
    key: 'onPageChange',
    value: function onPageChange(page) {

      if (page === 'prev') {
        if (this.state.prevPage > 0) {
          this.onSearchChange(this.state.prevPage);
          this.setState({ nextPage: this.state.nextPage - 1 });
          this.setState({ prevPage: this.state.prevPage - 1 });
        }
      } else {
        this.onSearchChange(this.state.nextPage);
        this.setState({ nextPage: this.state.nextPage + 1 });
        this.setState({ prevPage: this.state.prevPage + 1 });
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

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.prevPage + 1;

      this.setState({ foundUsers: [] });
      if (this.term.value.trim() !== '') {
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('x-access-token', JSON.parse(sessionStorage.getItem('user')).token);
        (0, _api2.default)(null, '/api/search/' + this.props.selectedGroup.id + '/' + this.term.value.trim() + '/' + (page - 1), 'GET', headers).then(function (users) {
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
          _react2.default.createElement('input', { type: 'text', id: 'search', onChange: function onChange() {
              return _this3.onSearchChange();
            }, ref: function ref(input) {
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
              { onClick: function onClick() {
                  return _this3.onPageChange('prev');
                }, className: 'search-prev' },
              'Prev'
            ),
            _react2.default.createElement(
              'span',
              null,
              this.state.prevPage + 1
            ),
            _react2.default.createElement(
              'span',
              { onClick: function onClick() {
                  return _this3.onPageChange('next');
                }, className: 'search-next' },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL3NlYXJjaC5qcz8zZDE2Il0sIm5hbWVzIjpbIlNlYXJjaCIsInByb3BzIiwib25TZWFyY2hDaGFuZ2UiLCJiaW5kIiwib25GaW5pc2hDbGljayIsIm9uUGFnZUNoYW5nZSIsInN0YXRlIiwiZm91bmRVc2VycyIsInNlbGVjdGVkVXNlcnMiLCJuZXh0UGFnZSIsInByZXZQYWdlIiwicGFnZSIsInNldFN0YXRlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaGVhZGVycyIsIkhlYWRlcnMiLCJhcHBlbmQiLCJKU09OIiwicGFyc2UiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJ0b2tlbiIsInN0cmluZ2lmeSIsInNlbGVjdGVkR3JvdXAiLCJpZCIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwicmVzdWx0IiwidGVybSIsInZhbHVlIiwidHJpbSIsInVzZXJzIiwiblVzZXJzIiwiZGF0YSIsIm1hcCIsInVzZXIiLCJzVXNlciIsImluZ3JvdXAiLCJhbHJlYWR5U2VsZWN0ZWQiLCJjb25jYXQiLCJmaWx0ZXIiLCJPYmplY3QiLCJhc3NpZ24iLCJmVXNlciIsIm5hbWUiLCJ1bmRlZmluZWQiLCJsb2NhdGlvbiIsImhhc2giLCJ0aXRsZSIsImNvbG9yIiwiaW5wdXQiLCJvblNlbGVjdFVzZXIiLCJ1c2VybmFtZSIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxNOzs7QUFDSixrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGdIQUNYQSxLQURXOztBQUVqQixVQUFLQyxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0JDLElBQXBCLE9BQXRCO0FBQ0EsVUFBS0MsYUFBTCxHQUFxQixNQUFLQSxhQUFMLENBQW1CRCxJQUFuQixPQUFyQjtBQUNBLFVB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QTtBQUFBLFlBQUcsV0FBVSxtREFBYjtBQUNBLGtCQUFLLFlBREw7QUFBQTtBQUFBO0FBakJGLE9BREY7QUFxQkQ7Ozs7RUFqSWtCLGdCQUFNbUQsUzs7QUFvSTNCLElBQU1DLGtCQUFrQixTQUFsQkEsZUFBa0IsQ0FBQ2xELEtBQUQsRUFBVztBQUNqQyxTQUFPO0FBQ0xrQixtQkFBZWxCLE1BQU1rQjtBQURoQixHQUFQO0FBR0QsQ0FKRDtrQkFLZSx5QkFBUWdDLGVBQVIsRUFBeUIsSUFBekIsRUFBK0J4RCxNQUEvQixDIiwiZmlsZSI6IjAuMTFjOTFjMmU0NzE1ZDI5NTY5YTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IEZvcm0gZnJvbSAnLi4vcHJlc2VudGF0aW9uYWwvZm9ybSc7XG5pbXBvcnQgYXBpIGZyb20gJy4uL2hlbHBlcnMvYXBpJztcblxuY2xhc3MgU2VhcmNoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5vblNlYXJjaENoYW5nZSA9IHRoaXMub25TZWFyY2hDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uRmluaXNoQ2xpY2sgPSB0aGlzLm9uRmluaXNoQ2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uUGFnZUNoYW5nZSA9IHRoaXMub25QYWdlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZvdW5kVXNlcnM6IFtdLFxuICAgICAgc2VsZWN0ZWRVc2VyczogW10sXG4gICAgICBuZXh0UGFnZTogMixcbiAgICAgIHByZXZQYWdlOiAwXG4gICAgfTtcbiAgfVxuXG4gIG9uUGFnZUNoYW5nZShwYWdlKSB7XG4gICAgXG4gICAgaWYgKHBhZ2UgPT09ICdwcmV2Jykge1xuICAgICAgaWYgKHRoaXMuc3RhdGUucHJldlBhZ2UgPiAwKSB7XG4gICAgICAgIHRoaXMub25TZWFyY2hDaGFuZ2UodGhpcy5zdGF0ZS5wcmV2UGFnZSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBuZXh0UGFnZTogdGhpcy5zdGF0ZS5uZXh0UGFnZSAtIDEgfSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcmV2UGFnZTogdGhpcy5zdGF0ZS5wcmV2UGFnZSAtIDEgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub25TZWFyY2hDaGFuZ2UodGhpcy5zdGF0ZS5uZXh0UGFnZSk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgbmV4dFBhZ2U6IHRoaXMuc3RhdGUubmV4dFBhZ2UgKyAxIH0pO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByZXZQYWdlOiB0aGlzLnN0YXRlLnByZXZQYWdlICsgMSB9KTtcbiAgICB9XG4gIH1cblxuICBvbkZpbmlzaENsaWNrKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcbiAgICBoZWFkZXJzLmFwcGVuZCgneC1hY2Nlc3MtdG9rZW4nLCBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSkudG9rZW4pO1xuICAgIGFwaShgdXNlcnM9JHtKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlLnNlbGVjdGVkVXNlcnMpfWAsIGAvYXBpL2dyb3Vwcy8ke3RoaXMucHJvcHMuc2VsZWN0ZWRHcm91cC5pZH0vdXNlci9gLCAnUE9TVCcsIGhlYWRlcnMpXG4gICAgLnRoZW4ocmVzdWx0ID0+IGNvbnNvbGUubG9nKCdGSU5JU0ggUkVTVUxUOjo6OjonLCByZXN1bHQpKTtcbiAgfVxuXG4gIG9uU2VhcmNoQ2hhbmdlKHBhZ2UgPSB0aGlzLnN0YXRlLnByZXZQYWdlICsgMSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBmb3VuZFVzZXJzOiBbXSB9KTtcbiAgICBpZiAodGhpcy50ZXJtLnZhbHVlLnRyaW0oKSAhPT0gJycpIHtcbiAgICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcbiAgICAgIGhlYWRlcnMuYXBwZW5kKCd4LWFjY2Vzcy10b2tlbicsIEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKS50b2tlbik7XG4gICAgICBhcGkobnVsbCwgYC9hcGkvc2VhcmNoLyR7dGhpcy5wcm9wcy5zZWxlY3RlZEdyb3VwLmlkfS8ke3RoaXMudGVybS52YWx1ZS50cmltKCl9LyR7cGFnZSAtIDF9YCwgJ0dFVCcsIGhlYWRlcnMpLnRoZW4oXG4gICAgICAgICh1c2VycykgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXJzKTtcbiAgICAgICAgICBjb25zdCBuVXNlcnMgPSB1c2Vycy5kYXRhLm1hcCgodXNlcikgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZFVzZXJzLm1hcCgoc1VzZXIpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHNVc2VyLmlkID09PSB1c2VyLmlkKSB7XG4gICAgICAgICAgICAgICAgdXNlci5pbmdyb3VwID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gdXNlcnM7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdVU0VSOjo6Pj4+PicsIHVzZXIpO1xuICAgICAgICAgICAgcmV0dXJuIHVzZXI7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvdW5kVXNlcnM6IG5Vc2VycyB9KTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBvblNlbGVjdFVzZXIodXNlcikge1xuICAgIC8vIFJlbW92ZSBmcm9tIHNlbGVjdGVkVXNlcnMgbGlzdCBpZiBpdCBleGlzdHMgdGhlcmVcbiAgICAvLyBvciBBZGQgdG8gc2VsZWN0ZWRVc2VycyBsaXN0XG4gICAgbGV0IGFscmVhZHlTZWxlY3RlZCA9IGZhbHNlO1xuICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRVc2Vycy5tYXAoKHNVc2VyKSA9PiB7XG4gICAgICBpZiAoc1VzZXIuaWQgPT09IHVzZXIuaWQpIHtcbiAgICAgICAgYWxyZWFkeVNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHNVc2VyO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKCdBTFJFQURZIFNFTEVDVEVEOjo6OjonLCBhbHJlYWR5U2VsZWN0ZWQpO1xuICAgIGlmICghYWxyZWFkeVNlbGVjdGVkKSB7XG4gICAgICBjb25zdCBzZWxlY3RlZFVzZXJzID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFVzZXJzLmNvbmNhdCh1c2VyKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZFVzZXJzIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB1c2VycyA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRVc2Vycy5maWx0ZXIoc1VzZXIgPT4gc1VzZXIuaWQgIT09IHVzZXIuaWQpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkVXNlcnM6IHVzZXJzIH0pO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZygnU0VMRUNURUQgVVNFUlM6Ojo6OicsIHRoaXMuc3RhdGUuc2VsZWN0ZWRVc2Vycy5jb25jYXQodXNlcikpO1xuXG4gICAgLy8gZmxpcCB0aGUgaW5ncm91cCB2YWx1ZVxuICAgIGxldCBmb3VuZFVzZXJzID0gT2JqZWN0LmFzc2lnbihbXSwgdGhpcy5zdGF0ZS5mb3VuZFVzZXJzKTtcbiAgICBjb25zb2xlLmxvZyhmb3VuZFVzZXJzKTtcbiAgICBmb3VuZFVzZXJzID0gZm91bmRVc2Vycy5tYXAoKGZVc2VyKSA9PiB7XG4gICAgICBpZiAoZlVzZXIuaWQgPT09IHVzZXIuaWQpIHtcbiAgICAgICAgZlVzZXIuaW5ncm91cCA9ICFmVXNlci5pbmdyb3VwO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZVc2VyO1xuICAgIH0pO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBmb3VuZFVzZXJzIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc2VsZWN0ZWRHcm91cCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zb2xlLmxvZygnU0VMRUNURUQgR1JPVVA6Ojo6Ojo6Jywgc2VsZWN0ZWRHcm91cCk7XG4gICAgaWYgKHNlbGVjdGVkR3JvdXAubmFtZSA9PT0gJycgfHwgc2VsZWN0ZWRHcm91cC5uYW1lID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGxvY2F0aW9uLmhhc2ggPSAnI2Rhc2hib2FyZCc7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCB0aXRsZSA9IFsnQWRkIHVzZXJzIHRvICcsXG4gICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogJyMwMjc1ZDgnIH19Pnsgc2VsZWN0ZWRHcm91cC5uYW1lIH08L3NwYW4+LFxuICAgICAgJyBncm91cCddO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxGb3JtIHRpdGxlPXsgdGl0bGUgfSBhY3RpdmU9J3NlYXJjaCcgaW5ncm91cD17dHJ1ZX0+XG4gICAgICAgIDxoNiBzdHlsZT17eyBjb2xvcjogJyMwMjc1ZDgnIH19PlNlbGVjdGVkIFVzZXJzOiB7IHRoaXMuc3RhdGUuc2VsZWN0ZWRVc2Vycy5tYXAodXNlciA9PiBgJHt1c2VyLmlkfSwgYCkgfTwvaDY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1maWVsZCc+XG4gICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGlkPSdzZWFyY2gnIG9uQ2hhbmdlPXsgKCkgPT4gdGhpcy5vblNlYXJjaENoYW5nZSgpIH0gcmVmPXsoaW5wdXQpID0+IHsgdGhpcy50ZXJtID0gaW5wdXQ7IH19Lz5cbiAgICAgICAgICA8bGFiZWwgZm9yPSdzZWFyY2gnPlNlYXJjaCBieSB1c2VybmFtZTwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VhcmNoLXJlc3VsdHMnPlxuICAgICAgICAgIHt0aGlzLnN0YXRlLmZvdW5kVXNlcnMubWFwKGZVc2VyID0+XG4gICAgICAgICAgICA8c3BhbiBrZXk9e2ZVc2VyLmlkfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5vblNlbGVjdFVzZXIoZlVzZXIpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtmVXNlci5pbmdyb3VwID8gJ2luZ3JvdXAnIDogJyd9PkB7ZlVzZXIudXNlcm5hbWV9PC9zcGFuPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNlYXJjaC1wYWdlc1wiPlxuICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4gdGhpcy5vblBhZ2VDaGFuZ2UoJ3ByZXYnKX0gY2xhc3NOYW1lPVwic2VhcmNoLXByZXZcIj5QcmV2PC9zcGFuPjxzcGFuPnt0aGlzLnN0YXRlLnByZXZQYWdlICsgMX08L3NwYW4+PHNwYW4gb25DbGljaz17KCkgPT4gdGhpcy5vblBhZ2VDaGFuZ2UoJ25leHQnKX0gY2xhc3NOYW1lPVwic2VhcmNoLW5leHRcIj5OZXh0PC9zcGFuPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J3dhdmVzLWVmZmVjdCB3YXZlcy1saWdodCBidG4gYWN0aW9uLWJ0bidcbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uRmluaXNoQ2xpY2t9PkZpbmlzaDwvYnV0dG9uPlxuICAgICAgICA8YSBjbGFzc05hbWU9J3JpZ2h0IHdhdmVzLWVmZmVjdCB3YXZlcy10ZWFsIGJ0bi1mbGF0IGFjdGlvbi1idG4nXG4gICAgICAgIGhyZWY9JyNkYXNoYm9hcmQnPkNhbmNlbDwvYT5cbiAgICAgIDwvRm9ybT4pO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHNlbGVjdGVkR3JvdXA6IHN0YXRlLnNlbGVjdGVkR3JvdXBcbiAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbnVsbCkoU2VhcmNoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9qcy9jb21wb25lbnRzL2NvbnRhaW5lcnMvc2VhcmNoLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==