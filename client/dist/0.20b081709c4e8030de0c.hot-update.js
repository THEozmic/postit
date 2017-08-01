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
          _this2.setState({ foundUsers: users.data });
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
        'Selected Users: ',
        this.state.selectedUsers.join(),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL3NlYXJjaC5qcz8zZDE2Il0sIm5hbWVzIjpbIlNlYXJjaCIsInByb3BzIiwib25TZWFyY2hDaGFuZ2UiLCJiaW5kIiwic3RhdGUiLCJmb3VuZFVzZXJzIiwic2VsZWN0ZWRVc2VycyIsInRlcm0iLCJ2YWx1ZSIsInRyaW0iLCJoZWFkZXJzIiwiSGVhZGVycyIsImFwcGVuZCIsIkpTT04iLCJwYXJzZSIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsInRva2VuIiwic2VsZWN0ZWRHcm91cCIsImlkIiwidGhlbiIsInVzZXJzIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwiZGF0YSIsInVzZXIiLCJpbmNsdWRlcyIsImZpbHRlciIsInNVc2VyIiwiY29uY2F0IiwiT2JqZWN0IiwiYXNzaWduIiwibWFwIiwiZlVzZXIiLCJpbmdyb3VwIiwibmFtZSIsInVuZGVmaW5lZCIsImxvY2F0aW9uIiwiaGFzaCIsInRpdGxlIiwiY29sb3IiLCJqb2luIiwiaW5wdXQiLCJvblNlbGVjdFVzZXIiLCJ1c2VybmFtZSIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxNOzs7QUFDSixrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGdIQUNYQSxLQURXOztBQUVqQixVQUFLQyxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0JDLElBQXBCLE9BQXRCO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGtCQUFZLEVBREQ7QUFFWEMscUJBQWU7QUFGSixLQUFiO0FBSGlCO0FBT2xCOzs7O3FDQUVnQjtBQUFBOztBQUNmLFVBQUksS0FBS0MsSUFBTCxDQUFVQyxLQUFWLENBQWdCQyxJQUFoQixPQUEyQixFQUEvQixFQUFtQztBQUNqQyxZQUFNQyxVQUFVLElB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b3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBGb3JtIGZyb20gJy4uL3ByZXNlbnRhdGlvbmFsL2Zvcm0nO1xuaW1wb3J0IGFwaSBmcm9tICcuLi9oZWxwZXJzL2FwaSc7XG5cbmNsYXNzIFNlYXJjaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMub25TZWFyY2hDaGFuZ2UgPSB0aGlzLm9uU2VhcmNoQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZvdW5kVXNlcnM6IFtdLFxuICAgICAgc2VsZWN0ZWRVc2VyczogW11cbiAgICB9O1xuICB9XG5cbiAgb25TZWFyY2hDaGFuZ2UoKSB7XG4gICAgaWYgKHRoaXMudGVybS52YWx1ZS50cmltKCkgIT09ICcnKSB7XG4gICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XG4gICAgICBoZWFkZXJzLmFwcGVuZCgneC1hY2Nlc3MtdG9rZW4nLCBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSkudG9rZW4pO1xuICAgICAgYXBpKG51bGwsIGAvYXBpL3NlYXJjaC8ke3RoaXMucHJvcHMuc2VsZWN0ZWRHcm91cC5pZH0vJHt0aGlzLnRlcm0udmFsdWUudHJpbSgpfWAsICdHRVQnLCBoZWFkZXJzKS50aGVuKFxuICAgICAgICAodXNlcnMpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyh1c2Vycyk7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvdW5kVXNlcnM6IHVzZXJzLmRhdGEgfSk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuICAgIFxuICAgIC8vIGNvbnN0IHVzZXJzID0gW1xuICAgIC8vICAgeyBpZDogMSwgdXNlcm5hbWU6ICdAa29iaScsIGluZ3JvdXA6IGZhbHNlIH0sXG4gICAgLy8gICB7IGlkOiAyLCB1c2VybmFtZTogJ0Bzb2xhJywgaW5ncm91cDogZmFsc2UgfSxcbiAgICAvLyAgIHsgaWQ6IDMsIHVzZXJuYW1lOiAnQGFrcGFuJywgaW5ncm91cDogZmFsc2UgfV07XG4gIH1cblxuICBvblNlbGVjdFVzZXIodXNlcikge1xuICAgIC8vIFJlbW92ZSBmcm9tIHNlbGVjdGVkVXNlcnMgbGlzdCBpZiBpdCBleGlzdHMgdGhlcmVcbiAgICAvLyBvciBBZGQgdG8gc2VsZWN0ZWRVc2VycyBsaXN0XG4gICAgaWYgKHRoaXMuc3RhdGUuc2VsZWN0ZWRVc2Vycy5pbmNsdWRlcyh1c2VyKSkge1xuICAgICAgY29uc3QgdXNlcnMgPSB0aGlzLnN0YXRlLnNlbGVjdGVkVXNlcnMuZmlsdGVyKHNVc2VyID0+IHNVc2VyLmlkICE9PSB1c2VyLmlkKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZFVzZXJzOiB1c2VycyB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdXNlcnMgPSB0aGlzLnN0YXRlLnNlbGVjdGVkVXNlcnMuY29uY2F0KHVzZXIpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkVXNlcnM6IHVzZXJzIH0pO1xuICAgIH1cblxuICAgIC8vIGZsaXAgdGhlIGluZ3JvdXAgdmFsdWVcbiAgICBsZXQgZm91bmRVc2VycyA9IE9iamVjdC5hc3NpZ24oW10sIHRoaXMuc3RhdGUuZm91bmRVc2Vycyk7XG4gICAgY29uc29sZS5sb2coZm91bmRVc2Vycyk7XG4gICAgZm91bmRVc2VycyA9IGZvdW5kVXNlcnMubWFwKChmVXNlcikgPT4ge1xuICAgICAgaWYgKGZVc2VyLmlkID09PSB1c2VyLmlkKSB7XG4gICAgICAgIGZVc2VyLmluZ3JvdXAgPSAhZlVzZXIuaW5ncm91cDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmVXNlcjtcbiAgICB9KTtcbiAgICB0aGlzLnNldFN0YXRlKHsgZm91bmRVc2VycyB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHNlbGVjdGVkR3JvdXAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc29sZS5sb2coJ1NFTEVDVEVEIEdST1VQOjo6Ojo6OicsIHNlbGVjdGVkR3JvdXApO1xuICAgIGlmIChzZWxlY3RlZEdyb3VwLm5hbWUgPT09ICcnIHx8IHNlbGVjdGVkR3JvdXAubmFtZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBsb2NhdGlvbi5oYXNoID0gJyNkYXNoYm9hcmQnO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgdGl0bGUgPSBbJ0FkZCB1c2VycyB0byAnLFxuICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6ICcjMDI3NWQ4JyB9fT57IHNlbGVjdGVkR3JvdXAubmFtZSB9PC9zcGFuPixcbiAgICAgICcgZ3JvdXAnXTtcblxuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybSB0aXRsZT17IHRpdGxlIH0gYWN0aXZlPSdzZWFyY2gnIGluZ3JvdXA9e3RydWV9PlxuICAgICAgICBTZWxlY3RlZCBVc2VyczogeyB0aGlzLnN0YXRlLnNlbGVjdGVkVXNlcnMuam9pbigpIH1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2lucHV0LWZpZWxkJz5cbiAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgaWQ9J3NlYXJjaCcgb25DaGFuZ2U9eyB0aGlzLm9uU2VhcmNoQ2hhbmdlIH0gcmVmPXsoaW5wdXQpID0+IHsgdGhpcy50ZXJtID0gaW5wdXQ7IH19Lz5cbiAgICAgICAgICA8bGFiZWwgZm9yPSdzZWFyY2gnPlNlYXJjaCBieSB1c2VybmFtZTwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VhcmNoLXJlc3VsdHMnPlxuICAgICAgICAgIHt0aGlzLnN0YXRlLmZvdW5kVXNlcnMubWFwKGZVc2VyID0+XG4gICAgICAgICAgICA8c3BhbiBrZXk9e2ZVc2VyLmlkfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5vblNlbGVjdFVzZXIoZlVzZXIpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtmVXNlci5pbmdyb3VwID8gJ2luZ3JvdXAnIDogJyd9PkB7ZlVzZXIudXNlcm5hbWV9PC9zcGFuPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNlYXJjaC1wYWdlc1wiPjxhIGhyZWY9XCIjLzFcIiBjbGFzc05hbWU9XCJzZWFyY2gtcHJldlwiPlByZXY8L2E+PGEgaHJlZj1cIiMvMlwiPjI8L2E+PGEgaHJlZj1cIiMvM1wiIGNsYXNzTmFtZT1cInNlYXJjaC1uZXh0XCI+TmV4dDwvYT48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxhIGNsYXNzTmFtZT0nd2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0IGJ0biBhY3Rpb24tYnRuJ1xuICAgICAgICAgIGhyZWY9JyNncm91cCc+RmluaXNoPC9hPlxuICAgICAgICA8YSBjbGFzc05hbWU9J3JpZ2h0IHdhdmVzLWVmZmVjdCB3YXZlcy10ZWFsIGJ0bi1mbGF0IGFjdGlvbi1idG4nXG4gICAgICAgIGhyZWY9JyNkYXNoYm9hcmQnPkNhbmNlbDwvYT5cbiAgICAgIDwvRm9ybT4pO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHNlbGVjdGVkR3JvdXA6IHN0YXRlLnNlbGVjdGVkR3JvdXBcbiAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbnVsbCkoU2VhcmNoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9qcy9jb21wb25lbnRzL2NvbnRhaW5lcnMvc2VhcmNoLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==