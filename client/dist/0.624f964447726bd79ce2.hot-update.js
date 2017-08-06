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
      if (this.term.value.trim() !== '') {
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
    }
  }, {
    key: 'onFinishClick',
    value: function onFinishClick(e) {
      e.preventDefault();
      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      headers.append('x-access-token', JSON.parse(sessionStorage.getItem('user')).token);
      (0, _api2.default)('users=' + JSON.stringify(this.state.selectedUsers), '/api/groups/' + this.props.selectedGroup.id + '/user/', 'POST', headers).then(function (result) {
        if (result.data.message === 'user removed' || result.data.message === 'user added') {
          history.back();
        }
      });
    }
  }, {
    key: 'onSearchChange',
    value: function onSearchChange() {
      var _this2 = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.prevPage + 1;

      this.setState({ foundUsers: [] });
      if (this.term.value.trim() !== '') {
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
      var alreadySelected = false;
      this.state.selectedUsers.map(function (sUser) {
        if (sUser.id === user.id) {
          alreadySelected = true;
          return sUser;
        }
        return false;
      });
      if (!alreadySelected) {
        var selectedUsers = this.state.selectedUsers.concat(user);
        this.setState({ selectedUsers: selectedUsers });
      } else {
        var users = this.state.selectedUsers.filter(function (sUser) {
          return sUser.id !== user.id;
        });
        this.setState({ selectedUsers: users });
      }

      // flip the ingroup value
      var foundUsers = Object.assign([], this.state.foundUsers);
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

      var selectedGroup = { name: 'Test', id: 4 };
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

exports.default = Search;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL3NlYXJjaC5qcz8zZDE2Il0sIm5hbWVzIjpbIlNlYXJjaCIsInByb3BzIiwib25TZWFyY2hDaGFuZ2UiLCJiaW5kIiwib25GaW5pc2hDbGljayIsIm9uUGFnZUNoYW5nZSIsInN0YXRlIiwiZm91bmRVc2VycyIsInNlbGVjdGVkVXNlcnMiLCJuZXh0UGFnZSIsInByZXZQYWdlIiwicGFnZSIsInRlcm0iLCJ2YWx1ZSIsInRyaW0iLCJzZXRTdGF0ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImhlYWRlcnMiLCJIZWFkZXJzIiwiYXBwZW5kIiwiSlNPTiIsInBhcnNlIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwidG9rZW4iLCJzdHJpbmdpZnkiLCJzZWxlY3RlZEdyb3VwIiwiaWQiLCJ0aGVuIiwicmVzdWx0IiwiZGF0YSIsIm1lc3NhZ2UiLCJoaXN0b3J5IiwiYmFjayIsInVzZXJzIiwiY29uc29sZSIsImxvZyIsIm5Vc2VycyIsIm1hcCIsInVzZXIiLCJzVXNlciIsImluZ3JvdXAiLCJhbHJlYWR5U2VsZWN0ZWQiLCJjb25jYXQiLCJmaWx0ZXIiLCJPYmplY3QiLCJhc3NpZ24iLCJmVXNlciIsIm5hbWUiLCJ1bmRlZmluZWQiLCJsb2NhdGlvbiIsImhhc2giLCJ0aXRsZSIsImNvbG9yIiwiaW5wdXQiLCJvblNlbGVjdFVzZXIiLCJ1c2VybmFtZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxNOzs7QUFDSixrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGdIQUNYQSxLQURXOztBQUVqQixVQUFLQyxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0JDLElBQXBCLE9BQXRCO0FBQ0EsVUFBS0MsYUFBTCxHQUFxQixNQUFLQSxhQUFMLENBQW1CRCxJQUFuQixPQUFy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QUFLNEIsWUFBTCxDQUFrQlIsS0FBbEIsQ0FBTjtBQUFBLGlCQURUO0FBRUEsMkJBQVdBLE1BQU1OLE9BQU4sR0FBZ0IsU0FBaEIsR0FBNEIsRUFGdkM7QUFBQTtBQUU2Q00sb0JBQU1TO0FBRm5ELGFBRHlCO0FBQUEsV0FBMUIsQ0FESDtBQU1FO0FBQUE7QUFBQSxjQUFLLFdBQU0sY0FBWDtBQUNFO0FBQUE7QUFBQSxnQkFBTSxTQUFTO0FBQUEseUJBQU0sT0FBS3BELFlBQUwsQ0FBa0IsTUFBbEIsQ0FBTjtBQUFBLGlCQUFmLEVBQWdELFdBQVUsYUFBMUQ7QUFBQTtBQUFBLGFBREY7QUFDcUY7QUFBQTtBQUFBO0FBQU8sbUJBQUtDLEtBQUwsQ0FBV0ksUUFBWCxHQUFzQjtBQUE3QixhQURyRjtBQUMySDtBQUFBO0FBQUEsZ0JBQU0sU0FBUztBQUFBLHlCQUFNLE9BQUtMLFlBQUwsQ0FBa0IsTUFBbEIsQ0FBTjtBQUFBLGlCQUFmLEVBQWdELFdBQVUsYUFBMUQ7QUFBQTtBQUFBO0FBRDNIO0FBTkYsU0FMRjtBQWNFO0FBQUE7QUFBQSxZQUFRLFdBQVUseUNBQWxCO0FBQ0UscUJBQVMsS0FBS0QsYUFEaEI7QUFBQTtBQUFBLFNBZEY7QUFnQkU7QUFBQTtBQUFBLFlBQUcsV0FBVSxtREFBYjtBQUNBLGtCQUFLLFlBREw7QUFBQTtBQUFBO0FBaEJGLE9BREY7QUFvQkQ7Ozs7RUE1SGtCLGdCQUFNc0QsUzs7a0JBK0haMUQsTSIsImZpbGUiOiIwLjYyNGY5NjQ0NDc3MjZiZDc5Y2UyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBGb3JtIGZyb20gJy4uL3ByZXNlbnRhdGlvbmFsL2Zvcm0nO1xuaW1wb3J0IGFwaSBmcm9tICcuLi9oZWxwZXJzL2FwaSc7XG5cbmNsYXNzIFNlYXJjaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMub25TZWFyY2hDaGFuZ2UgPSB0aGlzLm9uU2VhcmNoQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkZpbmlzaENsaWNrID0gdGhpcy5vbkZpbmlzaENsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vblBhZ2VDaGFuZ2UgPSB0aGlzLm9uUGFnZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBmb3VuZFVzZXJzOiBbXSxcbiAgICAgIHNlbGVjdGVkVXNlcnM6IFtdLFxuICAgICAgbmV4dFBhZ2U6IDIsXG4gICAgICBwcmV2UGFnZTogMFxuICAgIH07XG4gIH1cblxuICBvblBhZ2VDaGFuZ2UocGFnZSkge1xuICAgIGlmICh0aGlzLnRlcm0udmFsdWUudHJpbSgpICE9PSAnJykge1xuICAgICAgaWYgKHBhZ2UgPT09ICdwcmV2Jykge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5wcmV2UGFnZSA+IDApIHtcbiAgICAgICAgICB0aGlzLm9uU2VhcmNoQ2hhbmdlKHRoaXMuc3RhdGUucHJldlBhZ2UpO1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBuZXh0UGFnZTogdGhpcy5zdGF0ZS5uZXh0UGFnZSAtIDEgfSk7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByZXZQYWdlOiB0aGlzLnN0YXRlLnByZXZQYWdlIC0gMSB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5vblNlYXJjaENoYW5nZSh0aGlzLnN0YXRlLm5leHRQYWdlKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG5leHRQYWdlOiB0aGlzLnN0YXRlLm5leHRQYWdlICsgMSB9KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByZXZQYWdlOiB0aGlzLnN0YXRlLnByZXZQYWdlICsgMSB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbkZpbmlzaENsaWNrKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcbiAgICBoZWFkZXJzLmFwcGVuZCgneC1hY2Nlc3MtdG9rZW4nLCBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSkudG9rZW4pO1xuICAgIGFwaShgdXNlcnM9JHtKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlLnNlbGVjdGVkVXNlcnMpfWAsIGAvYXBpL2dyb3Vwcy8ke3RoaXMucHJvcHMuc2VsZWN0ZWRHcm91cC5pZH0vdXNlci9gLCAnUE9TVCcsIGhlYWRlcnMpXG4gICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgIGlmIChyZXN1bHQuZGF0YS5tZXNzYWdlID09PSAndXNlciByZW1vdmVkJyB8fCByZXN1bHQuZGF0YS5tZXNzYWdlID09PSAndXNlciBhZGRlZCcpIHtcbiAgICAgICAgaGlzdG9yeS5iYWNrKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBvblNlYXJjaENoYW5nZShwYWdlID0gdGhpcy5zdGF0ZS5wcmV2UGFnZSArIDEpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZm91bmRVc2VyczogW10gfSk7XG4gICAgaWYgKHRoaXMudGVybS52YWx1ZS50cmltKCkgIT09ICcnKSB7XG4gICAgICBhcGkobnVsbCwgYC9hcGkvc2VhcmNoLyR7dGhpcy5wcm9wcy5zZWxlY3RlZEdyb3VwLmlkfS8ke3RoaXMudGVybS52YWx1ZS50cmltKCl9LyR7cGFnZSAtIDF9YCwgJ0dFVCcsIGhlYWRlcnMpLnRoZW4oXG4gICAgICAgICh1c2VycykgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXJzKTtcbiAgICAgICAgICBjb25zdCBuVXNlcnMgPSB1c2Vycy5kYXRhLm1hcCgodXNlcikgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZFVzZXJzLm1hcCgoc1VzZXIpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHNVc2VyLmlkID09PSB1c2VyLmlkKSB7XG4gICAgICAgICAgICAgICAgdXNlci5pbmdyb3VwID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gdXNlcnM7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdVU0VSOjo6Pj4+PicsIHVzZXIpO1xuICAgICAgICAgICAgcmV0dXJuIHVzZXI7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvdW5kVXNlcnM6IG5Vc2VycyB9KTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBvblNlbGVjdFVzZXIodXNlcikge1xuICAgIGxldCBhbHJlYWR5U2VsZWN0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLnN0YXRlLnNlbGVjdGVkVXNlcnMubWFwKChzVXNlcikgPT4ge1xuICAgICAgaWYgKHNVc2VyLmlkID09PSB1c2VyLmlkKSB7XG4gICAgICAgIGFscmVhZHlTZWxlY3RlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiBzVXNlcjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgICBpZiAoIWFscmVhZHlTZWxlY3RlZCkge1xuICAgICAgY29uc3Qgc2VsZWN0ZWRVc2VycyA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRVc2Vycy5jb25jYXQodXNlcik7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRVc2VycyB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdXNlcnMgPSB0aGlzLnN0YXRlLnNlbGVjdGVkVXNlcnMuZmlsdGVyKHNVc2VyID0+IHNVc2VyLmlkICE9PSB1c2VyLmlkKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZFVzZXJzOiB1c2VycyB9KTtcbiAgICB9XG5cbiAgICAvLyBmbGlwIHRoZSBpbmdyb3VwIHZhbHVlXG4gICAgbGV0IGZvdW5kVXNlcnMgPSBPYmplY3QuYXNzaWduKFtdLCB0aGlzLnN0YXRlLmZvdW5kVXNlcnMpO1xuICAgIGZvdW5kVXNlcnMgPSBmb3VuZFVzZXJzLm1hcCgoZlVzZXIpID0+IHtcbiAgICAgIGlmIChmVXNlci5pZCA9PT0gdXNlci5pZCkge1xuICAgICAgICBmVXNlci5pbmdyb3VwID0gIWZVc2VyLmluZ3JvdXA7XG4gICAgICB9XG4gICAgICByZXR1cm4gZlVzZXI7XG4gICAgfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGZvdW5kVXNlcnMgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRHcm91cCA9IHsgbmFtZTogJ1Rlc3QnLCBpZDogNCB9O1xuICAgIGlmIChzZWxlY3RlZEdyb3VwLm5hbWUgPT09ICcnIHx8IHNlbGVjdGVkR3JvdXAubmFtZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBsb2NhdGlvbi5oYXNoID0gJyNkYXNoYm9hcmQnO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgdGl0bGUgPSBbJ0FkZCB1c2VycyB0byAnLFxuICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6ICcjMDI3NWQ4JyB9fT57IHNlbGVjdGVkR3JvdXAubmFtZSB9PC9zcGFuPixcbiAgICAgICcgZ3JvdXAnXTtcblxuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybSB0aXRsZT17IHRpdGxlIH0gYWN0aXZlPSdzZWFyY2gnIGluZ3JvdXA9e3RydWV9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtZmllbGQnPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBpZD0nc2VhcmNoJyBvbkNoYW5nZT17ICgpID0+IHRoaXMub25TZWFyY2hDaGFuZ2UoKSB9IHJlZj17KGlucHV0KSA9PiB7IHRoaXMudGVybSA9IGlucHV0OyB9fS8+XG4gICAgICAgICAgPGxhYmVsIGZvcj0nc2VhcmNoJz5TZWFyY2ggYnkgdXNlcm5hbWU8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlYXJjaC1yZXN1bHRzJz5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5mb3VuZFVzZXJzLm1hcChmVXNlciA9PlxuICAgICAgICAgICAgPHNwYW4ga2V5PXtmVXNlci5pZH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMub25TZWxlY3RVc2VyKGZVc2VyKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17ZlVzZXIuaW5ncm91cCA/ICdpbmdyb3VwJyA6ICcnfT5Ae2ZVc2VyLnVzZXJuYW1lfTwvc3Bhbj5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWFyY2gtcGFnZXNcIj5cbiAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHRoaXMub25QYWdlQ2hhbmdlKCdwcmV2Jyl9IGNsYXNzTmFtZT1cInNlYXJjaC1wcmV2XCI+UHJldjwvc3Bhbj48c3Bhbj57dGhpcy5zdGF0ZS5wcmV2UGFnZSArIDF9PC9zcGFuPjxzcGFuIG9uQ2xpY2s9eygpID0+IHRoaXMub25QYWdlQ2hhbmdlKCduZXh0Jyl9IGNsYXNzTmFtZT1cInNlYXJjaC1uZXh0XCI+TmV4dDwvc3Bhbj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSd3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHQgYnRuIGFjdGlvbi1idG4nXG4gICAgICAgICAgb25DbGljaz17dGhpcy5vbkZpbmlzaENsaWNrfT5GaW5pc2g8L2J1dHRvbj5cbiAgICAgICAgPGEgY2xhc3NOYW1lPSdyaWdodCB3YXZlcy1lZmZlY3Qgd2F2ZXMtdGVhbCBidG4tZmxhdCBhY3Rpb24tYnRuJ1xuICAgICAgICBocmVmPScjZGFzaGJvYXJkJz5DYW5jZWw8L2E+XG4gICAgICA8L0Zvcm0+KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL3NlYXJjaC5qcyJdLCJzb3VyY2VSb290IjoiIn0=