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
      (0, _api2.default)('users=' + JSON.stringify(this.state.selectedUsers), '/api/groups/' + this.selectedGroup.id + '/user/', 'POST').then(function (result) {
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
        (0, _api2.default)(null, '/api/search/' + this.selectedGroup.id + '/' + this.term.value.trim() + '/' + (page - 1), 'GET').then(function (users) {
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
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.selectedGroup = { name: 'Test', id: 4 };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      if (this.selectedGroup.name === '' || this.selectedGroup.name === undefined) {
        location.hash = '#dashboard';
        return null;
      }

      var title = ['Add users to ', _react2.default.createElement(
        'span',
        { style: { color: '#0275d8' } },
        this.selectedGroup.name
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL3NlYXJjaC5qcz8zZDE2Il0sIm5hbWVzIjpbIlNlYXJjaCIsInByb3BzIiwib25TZWFyY2hDaGFuZ2UiLCJiaW5kIiwib25GaW5pc2hDbGljayIsIm9uUGFnZUNoYW5nZSIsInN0YXRlIiwiZm91bmRVc2VycyIsInNlbGVjdGVkVXNlcnMiLCJuZXh0UGFnZSIsInByZXZQYWdlIiwicGFnZSIsInRlcm0iLCJ2YWx1ZSIsInRyaW0iLCJzZXRTdGF0ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIkpTT04iLCJzdHJpbmdpZnkiLCJzZWxlY3RlZEdyb3VwIiwiaWQiLCJ0aGVuIiwicmVzdWx0IiwiZGF0YSIsIm1lc3NhZ2UiLCJoaXN0b3J5IiwiYmFjayIsInVzZXJzIiwiY29uc29sZSIsImxvZyIsIm5Vc2VycyIsIm1hcCIsInVzZXIiLCJzVXNlciIsImluZ3JvdXAiLCJhbHJlYWR5U2VsZWN0ZWQiLCJjb25jYXQiLCJmaWx0ZXIiLCJPYmplY3QiLCJhc3NpZ24iLCJmVXNlciIsIm5hbWUiLCJ1bmRlZmluZWQiLCJsb2NhdGlvbiIsImhhc2giLCJ0aXRsZSIsImNvbG9yIiwiaW5wdXQiLCJvblNlbGVjdFVzZXIiLCJ1c2VybmFtZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxNOzs7QUFDSixrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGdIQUNYQSxLQURXOztBQUVqQixVQUFLQyxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0JDLElBQXBCLE9BQXRCO0FBQ0EsVUFBS0MsYUFBTCxHQUFxQixNQUFLQSxhQUFMLENBQW1CRCxJQUFuQixPQUFyQjtBQUNBLFVBQUtFLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkYsSUFBbEIsT0FBcEI7QUFDQSxVQUFLRyxLQUFMLEdBQWE7QUFD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QSxpQkFBZixFQUFnRCxXQUFVLGFBQTFEO0FBQUE7QUFBQSxhQURGO0FBQ3FGO0FBQUE7QUFBQTtBQUFPLG1CQUFLQyxLQUFMLENBQVdJLFFBQVgsR0FBc0I7QUFBN0IsYUFEckY7QUFDMkg7QUFBQTtBQUFBLGdCQUFNLFNBQVM7QUFBQSx5QkFBTSxPQUFLTCxZQUFMLENBQWtCLE1BQWxCLENBQU47QUFBQSxpQkFBZixFQUFnRCxXQUFVLGFBQTFEO0FBQUE7QUFBQTtBQUQzSDtBQU5GLFNBTEY7QUFjRTtBQUFBO0FBQUEsWUFBUSxXQUFVLHlDQUFsQjtBQUNFLHFCQUFTLEtBQUtELGFBRGhCO0FBQUE7QUFBQSxTQWRGO0FBZ0JFO0FBQUE7QUFBQSxZQUFHLFdBQVUsbURBQWI7QUFDQSxrQkFBSyxZQURMO0FBQUE7QUFBQTtBQWhCRixPQURGO0FBb0JEOzs7O0VBNUhrQixnQkFBTStDLFM7O2tCQStIWm5ELE0iLCJmaWxlIjoiMC40ZjE0NjkwM2JmMzIxMzViY2E4ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGb3JtIGZyb20gJy4uL3ByZXNlbnRhdGlvbmFsL2Zvcm0nO1xuaW1wb3J0IGFwaSBmcm9tICcuLi9oZWxwZXJzL2FwaSc7XG5cbmNsYXNzIFNlYXJjaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMub25TZWFyY2hDaGFuZ2UgPSB0aGlzLm9uU2VhcmNoQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkZpbmlzaENsaWNrID0gdGhpcy5vbkZpbmlzaENsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vblBhZ2VDaGFuZ2UgPSB0aGlzLm9uUGFnZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBmb3VuZFVzZXJzOiBbXSxcbiAgICAgIHNlbGVjdGVkVXNlcnM6IFtdLFxuICAgICAgbmV4dFBhZ2U6IDIsXG4gICAgICBwcmV2UGFnZTogMFxuICAgIH07XG4gIH1cblxuICBvblBhZ2VDaGFuZ2UocGFnZSkge1xuICAgIGlmICh0aGlzLnRlcm0udmFsdWUudHJpbSgpICE9PSAnJykge1xuICAgICAgaWYgKHBhZ2UgPT09ICdwcmV2Jykge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5wcmV2UGFnZSA+IDApIHtcbiAgICAgICAgICB0aGlzLm9uU2VhcmNoQ2hhbmdlKHRoaXMuc3RhdGUucHJldlBhZ2UpO1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBuZXh0UGFnZTogdGhpcy5zdGF0ZS5uZXh0UGFnZSAtIDEgfSk7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByZXZQYWdlOiB0aGlzLnN0YXRlLnByZXZQYWdlIC0gMSB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5vblNlYXJjaENoYW5nZSh0aGlzLnN0YXRlLm5leHRQYWdlKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG5leHRQYWdlOiB0aGlzLnN0YXRlLm5leHRQYWdlICsgMSB9KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByZXZQYWdlOiB0aGlzLnN0YXRlLnByZXZQYWdlICsgMSB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbkZpbmlzaENsaWNrKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgYXBpKGB1c2Vycz0ke0pTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUuc2VsZWN0ZWRVc2Vycyl9YCwgYC9hcGkvZ3JvdXBzLyR7dGhpcy5zZWxlY3RlZEdyb3VwLmlkfS91c2VyL2AsICdQT1NUJylcbiAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICBpZiAocmVzdWx0LmRhdGEubWVzc2FnZSA9PT0gJ3VzZXIgcmVtb3ZlZCcgfHwgcmVzdWx0LmRhdGEubWVzc2FnZSA9PT0gJ3VzZXIgYWRkZWQnKSB7XG4gICAgICAgIGhpc3RvcnkuYmFjaygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgb25TZWFyY2hDaGFuZ2UocGFnZSA9IHRoaXMuc3RhdGUucHJldlBhZ2UgKyAxKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGZvdW5kVXNlcnM6IFtdIH0pO1xuICAgIGlmICh0aGlzLnRlcm0udmFsdWUudHJpbSgpICE9PSAnJykge1xuICAgICAgYXBpKG51bGwsIGAvYXBpL3NlYXJjaC8ke3RoaXMuc2VsZWN0ZWRHcm91cC5pZH0vJHt0aGlzLnRlcm0udmFsdWUudHJpbSgpfS8ke3BhZ2UgLSAxfWAsICdHRVQnKS50aGVuKFxuICAgICAgICAodXNlcnMpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyh1c2Vycyk7XG4gICAgICAgICAgY29uc3QgblVzZXJzID0gdXNlcnMuZGF0YS5tYXAoKHVzZXIpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRVc2Vycy5tYXAoKHNVc2VyKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChzVXNlci5pZCA9PT0gdXNlci5pZCkge1xuICAgICAgICAgICAgICAgIHVzZXIuaW5ncm91cCA9IHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIHVzZXJzO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVVNFUjo6Oj4+Pj4nLCB1c2VyKTtcbiAgICAgICAgICAgIHJldHVybiB1c2VyO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb3VuZFVzZXJzOiBuVXNlcnMgfSk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgb25TZWxlY3RVc2VyKHVzZXIpIHtcbiAgICBsZXQgYWxyZWFkeVNlbGVjdGVkID0gZmFsc2U7XG4gICAgdGhpcy5zdGF0ZS5zZWxlY3RlZFVzZXJzLm1hcCgoc1VzZXIpID0+IHtcbiAgICAgIGlmIChzVXNlci5pZCA9PT0gdXNlci5pZCkge1xuICAgICAgICBhbHJlYWR5U2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gc1VzZXI7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gICAgaWYgKCFhbHJlYWR5U2VsZWN0ZWQpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkVXNlcnMgPSB0aGlzLnN0YXRlLnNlbGVjdGVkVXNlcnMuY29uY2F0KHVzZXIpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkVXNlcnMgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHVzZXJzID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFVzZXJzLmZpbHRlcihzVXNlciA9PiBzVXNlci5pZCAhPT0gdXNlci5pZCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRVc2VyczogdXNlcnMgfSk7XG4gICAgfVxuXG4gICAgLy8gZmxpcCB0aGUgaW5ncm91cCB2YWx1ZVxuICAgIGxldCBmb3VuZFVzZXJzID0gT2JqZWN0LmFzc2lnbihbXSwgdGhpcy5zdGF0ZS5mb3VuZFVzZXJzKTtcbiAgICBmb3VuZFVzZXJzID0gZm91bmRVc2Vycy5tYXAoKGZVc2VyKSA9PiB7XG4gICAgICBpZiAoZlVzZXIuaWQgPT09IHVzZXIuaWQpIHtcbiAgICAgICAgZlVzZXIuaW5ncm91cCA9ICFmVXNlci5pbmdyb3VwO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZVc2VyO1xuICAgIH0pO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBmb3VuZFVzZXJzIH0pO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHRoaXMuc2VsZWN0ZWRHcm91cCA9IHsgbmFtZTogJ1Rlc3QnLCBpZDogNCB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLnNlbGVjdGVkR3JvdXAubmFtZSA9PT0gJycgfHwgdGhpcy5zZWxlY3RlZEdyb3VwLm5hbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgbG9jYXRpb24uaGFzaCA9ICcjZGFzaGJvYXJkJztcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHRpdGxlID0gWydBZGQgdXNlcnMgdG8gJyxcbiAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiAnIzAyNzVkOCcgfX0+eyB0aGlzLnNlbGVjdGVkR3JvdXAubmFtZSB9PC9zcGFuPixcbiAgICAgICcgZ3JvdXAnXTtcblxuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybSB0aXRsZT17IHRpdGxlIH0gYWN0aXZlPSdzZWFyY2gnIGluZ3JvdXA9e3RydWV9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtZmllbGQnPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBpZD0nc2VhcmNoJyBvbkNoYW5nZT17ICgpID0+IHRoaXMub25TZWFyY2hDaGFuZ2UoKSB9IHJlZj17KGlucHV0KSA9PiB7IHRoaXMudGVybSA9IGlucHV0OyB9fS8+XG4gICAgICAgICAgPGxhYmVsIGZvcj0nc2VhcmNoJz5TZWFyY2ggYnkgdXNlcm5hbWU8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlYXJjaC1yZXN1bHRzJz5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5mb3VuZFVzZXJzLm1hcChmVXNlciA9PlxuICAgICAgICAgICAgPHNwYW4ga2V5PXtmVXNlci5pZH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMub25TZWxlY3RVc2VyKGZVc2VyKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17ZlVzZXIuaW5ncm91cCA/ICdpbmdyb3VwJyA6ICcnfT5Ae2ZVc2VyLnVzZXJuYW1lfTwvc3Bhbj5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWFyY2gtcGFnZXNcIj5cbiAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHRoaXMub25QYWdlQ2hhbmdlKCdwcmV2Jyl9IGNsYXNzTmFtZT1cInNlYXJjaC1wcmV2XCI+UHJldjwvc3Bhbj48c3Bhbj57dGhpcy5zdGF0ZS5wcmV2UGFnZSArIDF9PC9zcGFuPjxzcGFuIG9uQ2xpY2s9eygpID0+IHRoaXMub25QYWdlQ2hhbmdlKCduZXh0Jyl9IGNsYXNzTmFtZT1cInNlYXJjaC1uZXh0XCI+TmV4dDwvc3Bhbj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSd3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHQgYnRuIGFjdGlvbi1idG4nXG4gICAgICAgICAgb25DbGljaz17dGhpcy5vbkZpbmlzaENsaWNrfT5GaW5pc2g8L2J1dHRvbj5cbiAgICAgICAgPGEgY2xhc3NOYW1lPSdyaWdodCB3YXZlcy1lZmZlY3Qgd2F2ZXMtdGVhbCBidG4tZmxhdCBhY3Rpb24tYnRuJ1xuICAgICAgICBocmVmPScjZGFzaGJvYXJkJz5DYW5jZWw8L2E+XG4gICAgICA8L0Zvcm0+KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL3NlYXJjaC5qcyJdLCJzb3VyY2VSb290IjoiIn0=