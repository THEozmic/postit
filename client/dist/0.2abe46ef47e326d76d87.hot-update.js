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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL3NlYXJjaC5qcz8zZDE2Il0sIm5hbWVzIjpbIlNlYXJjaCIsInByb3BzIiwib25TZWFyY2hDaGFuZ2UiLCJiaW5kIiwic3RhdGUiLCJmb3VuZFVzZXJzIiwic2VsZWN0ZWRVc2VycyIsInRlcm0iLCJ2YWx1ZSIsInRyaW0iLCJoZWFkZXJzIiwiSGVhZGVycyIsImFwcGVuZCIsIkpTT04iLCJwYXJzZSIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsInRva2VuIiwic2VsZWN0ZWRHcm91cCIsImlkIiwidGhlbiIsInVzZXJzIiwiY29uc29sZSIsImxvZyIsIm5Vc2VycyIsImRhdGEiLCJtYXAiLCJ1c2VyIiwic1VzZXIiLCJpbmdyb3VwIiwic2V0U3RhdGUiLCJhbHJlYWR5U2VsZWN0ZWQiLCJjb25jYXQiLCJmaWx0ZXIiLCJPYmplY3QiLCJhc3NpZ24iLCJmVXNlciIsIm5hbWUiLCJ1bmRlZmluZWQiLCJsb2NhdGlvbiIsImhhc2giLCJ0aXRsZSIsImNvbG9yIiwiaW5wdXQiLCJvblNlbGVjdFVzZXIiLCJ1c2VybmFtZSIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxNOzs7QUFDSixrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGdIQUNYQSxLQURXOztBQUVqQixVQUFLQyxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0JDLElBQXBCLE9BQXRCO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGtCQUFZLEVBREQ7QUFFWEMscUJBQWU7QUFGSixLQUFiO0FBSGlCO0FBT2xCOzs7O3FDQUVnQjtBQUFBOztBQUNmLFVBQUksS0FBS0MsSUFBTCxDQUFVQyxLQUFWLENBQWdCQyxJQUFoQixPQUEyQixFQUEvQixFQUFtQztBQUNqQyxZQUFN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QUFrQlIsS0FBbEIsQ0FBTjtBQUFBLGlCQURUO0FBRUEsMkJBQVdBLE1BQU1QLE9BQU4sR0FBZ0IsU0FBaEIsR0FBNEIsRUFGdkM7QUFBQTtBQUU2Q08sb0JBQU1TO0FBRm5ELGFBRHlCO0FBQUEsV0FBMUIsQ0FESDtBQU1FO0FBQUE7QUFBQSxjQUFLLFdBQU0sY0FBWDtBQUEwQjtBQUFBO0FBQUEsZ0JBQUcsTUFBSyxLQUFSLEVBQWMsV0FBVSxhQUF4QjtBQUFBO0FBQUEsYUFBMUI7QUFBd0U7QUFBQTtBQUFBLGdCQUFHLE1BQUssS0FBUjtBQUFBO0FBQUEsYUFBeEU7QUFBMkY7QUFBQTtBQUFBLGdCQUFHLE1BQUssS0FBUixFQUFjLFdBQVUsYUFBeEI7QUFBQTtBQUFBO0FBQTNGO0FBTkYsU0FORjtBQWNFO0FBQUE7QUFBQSxZQUFRLFdBQVUseUNBQWxCO0FBQ0Usa0JBQUssUUFEUDtBQUFBO0FBQUEsU0FkRjtBQWdCRTtBQUFBO0FBQUEsWUFBRyxXQUFVLG1EQUFiO0FBQ0Esa0JBQUssWUFETDtBQUFBO0FBQUE7QUFoQkYsT0FERjtBQW9CRDs7OztFQXhHa0IsZ0JBQU1DLFM7O0FBMkczQixJQUFNQyxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUMzQyxLQUFELEVBQVc7QUFDakMsU0FBTztBQUNMYyxtQkFBZWQsTUFBTWM7QUFEaEIsR0FBUDtBQUdELENBSkQ7a0JBS2UseUJBQVE2QixlQUFSLEVBQXlCLElBQXpCLEVBQStCL0MsTUFBL0IsQyIsImZpbGUiOiIwLjJhYmU0NmVmNDdlMzI2ZDc2ZDg3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBGb3JtIGZyb20gJy4uL3ByZXNlbnRhdGlvbmFsL2Zvcm0nO1xuaW1wb3J0IGFwaSBmcm9tICcuLi9oZWxwZXJzL2FwaSc7XG5cbmNsYXNzIFNlYXJjaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMub25TZWFyY2hDaGFuZ2UgPSB0aGlzLm9uU2VhcmNoQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZvdW5kVXNlcnM6IFtdLFxuICAgICAgc2VsZWN0ZWRVc2VyczogW11cbiAgICB9O1xuICB9XG5cbiAgb25TZWFyY2hDaGFuZ2UoKSB7XG4gICAgaWYgKHRoaXMudGVybS52YWx1ZS50cmltKCkgIT09ICcnKSB7XG4gICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XG4gICAgICBoZWFkZXJzLmFwcGVuZCgneC1hY2Nlc3MtdG9rZW4nLCBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSkudG9rZW4pO1xuICAgICAgYXBpKG51bGwsIGAvYXBpL3NlYXJjaC8ke3RoaXMucHJvcHMuc2VsZWN0ZWRHcm91cC5pZH0vJHt0aGlzLnRlcm0udmFsdWUudHJpbSgpfWAsICdHRVQnLCBoZWFkZXJzKS50aGVuKFxuICAgICAgICAodXNlcnMpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyh1c2Vycyk7XG4gICAgICAgICAgY29uc3QgblVzZXJzID0gdXNlcnMuZGF0YS5tYXAoKHVzZXIpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRVc2Vycy5tYXAoKHNVc2VyKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChzVXNlci5pZCA9PT0gdXNlci5pZCkge1xuICAgICAgICAgICAgICAgIHVzZXIuaW5ncm91cCA9IHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIHVzZXJzO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVVNFUjo6Oj4+Pj4nLCB1c2VyKTtcbiAgICAgICAgICAgIHJldHVybiB1c2VyO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb3VuZFVzZXJzOiBuVXNlcnMgfSk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gY29uc3QgdXNlcnMgPSBbXG4gICAgLy8gICB7IGlkOiAxLCB1c2VybmFtZTogJ0Brb2JpJywgaW5ncm91cDogZmFsc2UgfSxcbiAgICAvLyAgIHsgaWQ6IDIsIHVzZXJuYW1lOiAnQHNvbGEnLCBpbmdyb3VwOiBmYWxzZSB9LFxuICAgIC8vICAgeyBpZDogMywgdXNlcm5hbWU6ICdAYWtwYW4nLCBpbmdyb3VwOiBmYWxzZSB9XTtcbiAgfVxuXG4gIG9uU2VsZWN0VXNlcih1c2VyKSB7XG4gICAgLy8gUmVtb3ZlIGZyb20gc2VsZWN0ZWRVc2VycyBsaXN0IGlmIGl0IGV4aXN0cyB0aGVyZVxuICAgIC8vIG9yIEFkZCB0byBzZWxlY3RlZFVzZXJzIGxpc3RcbiAgICBsZXQgYWxyZWFkeVNlbGVjdGVkID0gZmFsc2U7XG4gICAgdGhpcy5zdGF0ZS5zZWxlY3RlZFVzZXJzLm1hcCgoc1VzZXIpID0+IHtcbiAgICAgIGlmIChzVXNlci5pZCA9PT0gdXNlci5pZCkge1xuICAgICAgICBhbHJlYWR5U2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gc1VzZXI7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coJ0FMUkVBRFkgU0VMRUNURUQ6Ojo6OicsIGFscmVhZHlTZWxlY3RlZCk7XG4gICAgaWYgKCFhbHJlYWR5U2VsZWN0ZWQpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkVXNlcnMgPSB0aGlzLnN0YXRlLnNlbGVjdGVkVXNlcnMuY29uY2F0KHVzZXIpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkVXNlcnMgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHVzZXJzID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFVzZXJzLmZpbHRlcihzVXNlciA9PiBzVXNlci5pZCAhPT0gdXNlci5pZCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRVc2VyczogdXNlcnMgfSk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCdTRUxFQ1RFRCBVU0VSUzo6Ojo6JywgdGhpcy5zdGF0ZS5zZWxlY3RlZFVzZXJzLmNvbmNhdCh1c2VyKSk7XG5cbiAgICAvLyBmbGlwIHRoZSBpbmdyb3VwIHZhbHVlXG4gICAgbGV0IGZvdW5kVXNlcnMgPSBPYmplY3QuYXNzaWduKFtdLCB0aGlzLnN0YXRlLmZvdW5kVXNlcnMpO1xuICAgIGNvbnNvbGUubG9nKGZvdW5kVXNlcnMpO1xuICAgIGZvdW5kVXNlcnMgPSBmb3VuZFVzZXJzLm1hcCgoZlVzZXIpID0+IHtcbiAgICAgIGlmIChmVXNlci5pZCA9PT0gdXNlci5pZCkge1xuICAgICAgICBmVXNlci5pbmdyb3VwID0gIWZVc2VyLmluZ3JvdXA7XG4gICAgICB9XG4gICAgICByZXR1cm4gZlVzZXI7XG4gICAgfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGZvdW5kVXNlcnMgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzZWxlY3RlZEdyb3VwIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnNvbGUubG9nKCdTRUxFQ1RFRCBHUk9VUDo6Ojo6OjonLCBzZWxlY3RlZEdyb3VwKTtcbiAgICBpZiAoc2VsZWN0ZWRHcm91cC5uYW1lID09PSAnJyB8fCBzZWxlY3RlZEdyb3VwLm5hbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgbG9jYXRpb24uaGFzaCA9ICcjZGFzaGJvYXJkJztcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHRpdGxlID0gWydBZGQgdXNlcnMgdG8gJyxcbiAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiAnIzAyNzVkOCcgfX0+eyBzZWxlY3RlZEdyb3VwLm5hbWUgfTwvc3Bhbj4sXG4gICAgICAnIGdyb3VwJ107XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEZvcm0gdGl0bGU9eyB0aXRsZSB9IGFjdGl2ZT0nc2VhcmNoJyBpbmdyb3VwPXt0cnVlfT5cbiAgICAgICAgPGg2IHN0eWxlPXt7IGNvbG9yOiAnIzAyNzVkOCcgfX0+U2VsZWN0ZWQgVXNlcnM6IHsgdGhpcy5zdGF0ZS5zZWxlY3RlZFVzZXJzLm1hcCh1c2VyID0+IGAke3VzZXIuaWR9LCBgKSB9PC9oNj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2lucHV0LWZpZWxkJz5cbiAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgaWQ9J3NlYXJjaCcgb25DaGFuZ2U9eyB0aGlzLm9uU2VhcmNoQ2hhbmdlIH0gcmVmPXsoaW5wdXQpID0+IHsgdGhpcy50ZXJtID0gaW5wdXQ7IH19Lz5cbiAgICAgICAgICA8bGFiZWwgZm9yPSdzZWFyY2gnPlNlYXJjaCBieSB1c2VybmFtZTwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VhcmNoLXJlc3VsdHMnPlxuICAgICAgICAgIHt0aGlzLnN0YXRlLmZvdW5kVXNlcnMubWFwKGZVc2VyID0+XG4gICAgICAgICAgICA8c3BhbiBrZXk9e2ZVc2VyLmlkfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5vblNlbGVjdFVzZXIoZlVzZXIpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtmVXNlci5pbmdyb3VwID8gJ2luZ3JvdXAnIDogJyd9PkB7ZlVzZXIudXNlcm5hbWV9PC9zcGFuPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNlYXJjaC1wYWdlc1wiPjxhIGhyZWY9XCIjLzFcIiBjbGFzc05hbWU9XCJzZWFyY2gtcHJldlwiPlByZXY8L2E+PGEgaHJlZj1cIiMvMlwiPjI8L2E+PGEgaHJlZj1cIiMvM1wiIGNsYXNzTmFtZT1cInNlYXJjaC1uZXh0XCI+TmV4dDwvYT48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSd3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHQgYnRuIGFjdGlvbi1idG4nXG4gICAgICAgICAgaHJlZj0nI2dyb3VwJz5GaW5pc2g8L2J1dHRvbj5cbiAgICAgICAgPGEgY2xhc3NOYW1lPSdyaWdodCB3YXZlcy1lZmZlY3Qgd2F2ZXMtdGVhbCBidG4tZmxhdCBhY3Rpb24tYnRuJ1xuICAgICAgICBocmVmPScjZGFzaGJvYXJkJz5DYW5jZWw8L2E+XG4gICAgICA8L0Zvcm0+KTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBzZWxlY3RlZEdyb3VwOiBzdGF0ZS5zZWxlY3RlZEdyb3VwXG4gIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG51bGwpKFNlYXJjaCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL3NlYXJjaC5qcyJdLCJzb3VyY2VSb290IjoiIn0=