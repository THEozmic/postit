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
      var _this3 = this;

      // Remove from selectedUsers list if it exists there
      // or Add to selectedUsers list
      this.state.selectedUsers.map(function (sUser) {
        if (sUser.id !== user.id) {
          _this3.setState({ selectedUsers: _this3.state.selectedUsers.concat(user) });
        }
        return sUser;
      });
      var users = this.state.selectedUsers.filter(function (sUser) {
        return sUser.id !== user.id;
      });
      this.setState({ selectedUsers: users });
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
      var _this4 = this;

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
              _this4.term = input;
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
                  return _this4.onSelectUser(fUser);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL3NlYXJjaC5qcz8zZDE2Il0sIm5hbWVzIjpbIlNlYXJjaCIsInByb3BzIiwib25TZWFyY2hDaGFuZ2UiLCJiaW5kIiwic3RhdGUiLCJmb3VuZFVzZXJzIiwic2VsZWN0ZWRVc2VycyIsInRlcm0iLCJ2YWx1ZSIsInRyaW0iLCJoZWFkZXJzIiwiSGVhZGVycyIsImFwcGVuZCIsIkpTT04iLCJwYXJzZSIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsInRva2VuIiwic2VsZWN0ZWRHcm91cCIsImlkIiwidGhlbiIsInVzZXJzIiwiY29uc29sZSIsImxvZyIsIm5Vc2VycyIsImRhdGEiLCJtYXAiLCJ1c2VyIiwic1VzZXIiLCJpbmdyb3VwIiwic2V0U3RhdGUiLCJjb25jYXQiLCJmaWx0ZXIiLCJPYmplY3QiLCJhc3NpZ24iLCJmVXNlciIsIm5hbWUiLCJ1bmRlZmluZWQiLCJsb2NhdGlvbiIsImhhc2giLCJ0aXRsZSIsImNvbG9yIiwiaW5wdXQiLCJvblNlbGVjdFVzZXIiLCJ1c2VybmFtZSIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxNOzs7QUFDSixrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGdIQUNYQSxLQURXOztBQUVqQixVQUFLQyxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0JDLElBQXBCLE9BQXRCO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGtCQUFZLEVBREQ7QUFFWEMscUJBQWU7QUFGSixLQUFiO0FBSGlCO0FBT2xCOzs7O3FDQUVnQjtBQUFBOztBQUNmLFVBQUksS0FBS0MsSUFBTCxDQUFVQyxLQUFWLENBQWdCQyxJQUFoQixPQUEyQixFQUEvQixFQUFtQztBQUNqQyxZQUFNQyxVQUFVLElBQUlDLE9BQUos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QUFBO0FBQUEsZ0JBQUcsTUFBSyxLQUFSLEVBQWMsV0FBVSxhQUF4QjtBQUFBO0FBQUE7QUFBM0Y7QUFORixTQU5GO0FBY0U7QUFBQTtBQUFBLFlBQUcsV0FBVSx5Q0FBYjtBQUNFLGtCQUFLLFFBRFA7QUFBQTtBQUFBLFNBZEY7QUFnQkU7QUFBQTtBQUFBLFlBQUcsV0FBVSxtREFBYjtBQUNBLGtCQUFLLFlBREw7QUFBQTtBQUFBO0FBaEJGLE9BREY7QUFvQkQ7Ozs7RUE5RmtCLGdCQUFNQyxTOztBQWlHM0IsSUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDMUMsS0FBRCxFQUFXO0FBQ2pDLFNBQU87QUFDTGMsbUJBQWVkLE1BQU1jO0FBRGhCLEdBQVA7QUFHRCxDQUpEO2tCQUtlLHlCQUFRNEIsZUFBUixFQUF5QixJQUF6QixFQUErQjlDLE1BQS9CLEMiLCJmaWxlIjoiMC4wMjA2ZTVlNDkzNWI4YTZiYTUwNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgRm9ybSBmcm9tICcuLi9wcmVzZW50YXRpb25hbC9mb3JtJztcbmltcG9ydCBhcGkgZnJvbSAnLi4vaGVscGVycy9hcGknO1xuXG5jbGFzcyBTZWFyY2ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLm9uU2VhcmNoQ2hhbmdlID0gdGhpcy5vblNlYXJjaENoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBmb3VuZFVzZXJzOiBbXSxcbiAgICAgIHNlbGVjdGVkVXNlcnM6IFtdXG4gICAgfTtcbiAgfVxuXG4gIG9uU2VhcmNoQ2hhbmdlKCkge1xuICAgIGlmICh0aGlzLnRlcm0udmFsdWUudHJpbSgpICE9PSAnJykge1xuICAgICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuICAgICAgaGVhZGVycy5hcHBlbmQoJ3gtYWNjZXNzLXRva2VuJywgSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpLnRva2VuKTtcbiAgICAgIGFwaShudWxsLCBgL2FwaS9zZWFyY2gvJHt0aGlzLnByb3BzLnNlbGVjdGVkR3JvdXAuaWR9LyR7dGhpcy50ZXJtLnZhbHVlLnRyaW0oKX1gLCAnR0VUJywgaGVhZGVycykudGhlbihcbiAgICAgICAgKHVzZXJzKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2codXNlcnMpO1xuICAgICAgICAgIGNvbnN0IG5Vc2VycyA9IHVzZXJzLmRhdGEubWFwKCh1c2VyKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkVXNlcnMubWFwKChzVXNlcikgPT4ge1xuICAgICAgICAgICAgICBpZiAoc1VzZXIuaWQgPT09IHVzZXIuaWQpIHtcbiAgICAgICAgICAgICAgICB1c2VyLmluZ3JvdXAgPSB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiB1c2VycztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1VTRVI6Ojo+Pj4+JywgdXNlcik7XG4gICAgICAgICAgICByZXR1cm4gdXNlcjtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZm91bmRVc2VyczogblVzZXJzIH0pO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIGNvbnN0IHVzZXJzID0gW1xuICAgIC8vICAgeyBpZDogMSwgdXNlcm5hbWU6ICdAa29iaScsIGluZ3JvdXA6IGZhbHNlIH0sXG4gICAgLy8gICB7IGlkOiAyLCB1c2VybmFtZTogJ0Bzb2xhJywgaW5ncm91cDogZmFsc2UgfSxcbiAgICAvLyAgIHsgaWQ6IDMsIHVzZXJuYW1lOiAnQGFrcGFuJywgaW5ncm91cDogZmFsc2UgfV07XG4gIH1cblxuICBvblNlbGVjdFVzZXIodXNlcikge1xuICAgIC8vIFJlbW92ZSBmcm9tIHNlbGVjdGVkVXNlcnMgbGlzdCBpZiBpdCBleGlzdHMgdGhlcmVcbiAgICAvLyBvciBBZGQgdG8gc2VsZWN0ZWRVc2VycyBsaXN0XG4gICAgdGhpcy5zdGF0ZS5zZWxlY3RlZFVzZXJzLm1hcCgoc1VzZXIpID0+IHtcbiAgICAgIGlmIChzVXNlci5pZCAhPT0gdXNlci5pZCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRVc2VyczogdGhpcy5zdGF0ZS5zZWxlY3RlZFVzZXJzLmNvbmNhdCh1c2VyKSB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzVXNlcjtcbiAgICB9KTtcbiAgICBjb25zdCB1c2VycyA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRVc2Vycy5maWx0ZXIoc1VzZXIgPT4gc1VzZXIuaWQgIT09IHVzZXIuaWQpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZFVzZXJzOiB1c2VycyB9KTtcbiAgICAvLyBmbGlwIHRoZSBpbmdyb3VwIHZhbHVlXG4gICAgbGV0IGZvdW5kVXNlcnMgPSBPYmplY3QuYXNzaWduKFtdLCB0aGlzLnN0YXRlLmZvdW5kVXNlcnMpO1xuICAgIGNvbnNvbGUubG9nKGZvdW5kVXNlcnMpO1xuICAgIGZvdW5kVXNlcnMgPSBmb3VuZFVzZXJzLm1hcCgoZlVzZXIpID0+IHtcbiAgICAgIGlmIChmVXNlci5pZCA9PT0gdXNlci5pZCkge1xuICAgICAgICBmVXNlci5pbmdyb3VwID0gIWZVc2VyLmluZ3JvdXA7XG4gICAgICB9XG4gICAgICByZXR1cm4gZlVzZXI7XG4gICAgfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGZvdW5kVXNlcnMgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzZWxlY3RlZEdyb3VwIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnNvbGUubG9nKCdTRUxFQ1RFRCBHUk9VUDo6Ojo6OjonLCBzZWxlY3RlZEdyb3VwKTtcbiAgICBpZiAoc2VsZWN0ZWRHcm91cC5uYW1lID09PSAnJyB8fCBzZWxlY3RlZEdyb3VwLm5hbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgbG9jYXRpb24uaGFzaCA9ICcjZGFzaGJvYXJkJztcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHRpdGxlID0gWydBZGQgdXNlcnMgdG8gJyxcbiAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiAnIzAyNzVkOCcgfX0+eyBzZWxlY3RlZEdyb3VwLm5hbWUgfTwvc3Bhbj4sXG4gICAgICAnIGdyb3VwJ107XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEZvcm0gdGl0bGU9eyB0aXRsZSB9IGFjdGl2ZT0nc2VhcmNoJyBpbmdyb3VwPXt0cnVlfT5cbiAgICAgICAgPGg2IHN0eWxlPXt7IGNvbG9yOiAnIzAyNzVkOCcgfX0+U2VsZWN0ZWQgVXNlcnM6IHsgdGhpcy5zdGF0ZS5zZWxlY3RlZFVzZXJzLm1hcCh1c2VyID0+IGAke3VzZXIuaWR9LCBgKSB9PC9oNj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2lucHV0LWZpZWxkJz5cbiAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgaWQ9J3NlYXJjaCcgb25DaGFuZ2U9eyB0aGlzLm9uU2VhcmNoQ2hhbmdlIH0gcmVmPXsoaW5wdXQpID0+IHsgdGhpcy50ZXJtID0gaW5wdXQ7IH19Lz5cbiAgICAgICAgICA8bGFiZWwgZm9yPSdzZWFyY2gnPlNlYXJjaCBieSB1c2VybmFtZTwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VhcmNoLXJlc3VsdHMnPlxuICAgICAgICAgIHt0aGlzLnN0YXRlLmZvdW5kVXNlcnMubWFwKGZVc2VyID0+XG4gICAgICAgICAgICA8c3BhbiBrZXk9e2ZVc2VyLmlkfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5vblNlbGVjdFVzZXIoZlVzZXIpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtmVXNlci5pbmdyb3VwID8gJ2luZ3JvdXAnIDogJyd9PkB7ZlVzZXIudXNlcm5hbWV9PC9zcGFuPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNlYXJjaC1wYWdlc1wiPjxhIGhyZWY9XCIjLzFcIiBjbGFzc05hbWU9XCJzZWFyY2gtcHJldlwiPlByZXY8L2E+PGEgaHJlZj1cIiMvMlwiPjI8L2E+PGEgaHJlZj1cIiMvM1wiIGNsYXNzTmFtZT1cInNlYXJjaC1uZXh0XCI+TmV4dDwvYT48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxhIGNsYXNzTmFtZT0nd2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0IGJ0biBhY3Rpb24tYnRuJ1xuICAgICAgICAgIGhyZWY9JyNncm91cCc+RmluaXNoPC9hPlxuICAgICAgICA8YSBjbGFzc05hbWU9J3JpZ2h0IHdhdmVzLWVmZmVjdCB3YXZlcy10ZWFsIGJ0bi1mbGF0IGFjdGlvbi1idG4nXG4gICAgICAgIGhyZWY9JyNkYXNoYm9hcmQnPkNhbmNlbDwvYT5cbiAgICAgIDwvRm9ybT4pO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHNlbGVjdGVkR3JvdXA6IHN0YXRlLnNlbGVjdGVkR3JvdXBcbiAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbnVsbCkoU2VhcmNoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9qcy9jb21wb25lbnRzL2NvbnRhaW5lcnMvc2VhcmNoLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==