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
      if (this.foundUsers) if (page === 'prev') {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL3NlYXJjaC5qcz8zZDE2Il0sIm5hbWVzIjpbIlNlYXJjaCIsInByb3BzIiwib25TZWFyY2hDaGFuZ2UiLCJiaW5kIiwib25GaW5pc2hDbGljayIsIm9uUGFnZUNoYW5nZSIsInN0YXRlIiwiZm91bmRVc2VycyIsInNlbGVjdGVkVXNlcnMiLCJuZXh0UGFnZSIsInByZXZQYWdlIiwicGFnZSIsInNldFN0YXRlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaGVhZGVycyIsIkhlYWRlcnMiLCJhcHBlbmQiLCJKU09OIiwicGFyc2UiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJ0b2tlbiIsInN0cmluZ2lmeSIsInNlbGVjdGVkR3JvdXAiLCJpZCIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwicmVzdWx0IiwidGVybSIsInZhbHVlIiwidHJpbSIsInVzZXJzIiwiblVzZXJzIiwiZGF0YSIsIm1hcCIsInVzZXIiLCJzVXNlciIsImluZ3JvdXAiLCJhbHJlYWR5U2VsZWN0ZWQiLCJjb25jYXQiLCJmaWx0ZXIiLCJPYmplY3QiLCJhc3NpZ24iLCJmVXNlciIsIm5hbWUiLCJ1bmRlZmluZWQiLCJsb2NhdGlvbiIsImhhc2giLCJ0aXRsZSIsImNvbG9yIiwiaW5wdXQiLCJvblNlbGVjdFVzZXIiLCJ1c2VybmFtZSIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxNOzs7QUFDSixrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGdIQUNYQSxLQURXOztBQUVqQixVQUFLQyxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0JDLElBQXBCLE9BQXRCO0FBQ0EsVUFBS0MsYUFBTCxHQUFxQixNQUFLQSxhQUFMLENBQW1CRCxJQUFuQixPQUFyQjtBQUNBLFVB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O0FBQUEsU0FmRjtBQWlCRTtBQUFBO0FBQUEsWUFBRyxXQUFVLG1EQUFiO0FBQ0Esa0JBQUssWUFETDtBQUFBO0FBQUE7QUFqQkYsT0FERjtBQXFCRDs7OztFQWpJa0IsZ0JBQU1tRCxTOztBQW9JM0IsSUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDbEQsS0FBRCxFQUFXO0FBQ2pDLFNBQU87QUFDTGtCLG1CQUFlbEIsTUFBTWtCO0FBRGhCLEdBQVA7QUFHRCxDQUpEO2tCQUtlLHlCQUFRZ0MsZUFBUixFQUF5QixJQUF6QixFQUErQnhELE1BQS9CLEMiLCJmaWxlIjoiMC4wYjdmYmQ1NmE5MmYwMGY3YzgzMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgRm9ybSBmcm9tICcuLi9wcmVzZW50YXRpb25hbC9mb3JtJztcbmltcG9ydCBhcGkgZnJvbSAnLi4vaGVscGVycy9hcGknO1xuXG5jbGFzcyBTZWFyY2ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLm9uU2VhcmNoQ2hhbmdlID0gdGhpcy5vblNlYXJjaENoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25GaW5pc2hDbGljayA9IHRoaXMub25GaW5pc2hDbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25QYWdlQ2hhbmdlID0gdGhpcy5vblBhZ2VDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZm91bmRVc2VyczogW10sXG4gICAgICBzZWxlY3RlZFVzZXJzOiBbXSxcbiAgICAgIG5leHRQYWdlOiAyLFxuICAgICAgcHJldlBhZ2U6IDBcbiAgICB9O1xuICB9XG5cbiAgb25QYWdlQ2hhbmdlKHBhZ2UpIHtcbiAgICBpZiAodGhpcy5mb3VuZFVzZXJzKVxuICAgIGlmIChwYWdlID09PSAncHJldicpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLnByZXZQYWdlID4gMCkge1xuICAgICAgICB0aGlzLm9uU2VhcmNoQ2hhbmdlKHRoaXMuc3RhdGUucHJldlBhZ2UpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbmV4dFBhZ2U6IHRoaXMuc3RhdGUubmV4dFBhZ2UgLSAxIH0pO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJldlBhZ2U6IHRoaXMuc3RhdGUucHJldlBhZ2UgLSAxIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9uU2VhcmNoQ2hhbmdlKHRoaXMuc3RhdGUubmV4dFBhZ2UpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG5leHRQYWdlOiB0aGlzLnN0YXRlLm5leHRQYWdlICsgMSB9KTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcmV2UGFnZTogdGhpcy5zdGF0ZS5wcmV2UGFnZSArIDEgfSk7XG4gICAgfVxuICB9XG5cbiAgb25GaW5pc2hDbGljayhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XG4gICAgaGVhZGVycy5hcHBlbmQoJ3gtYWNjZXNzLXRva2VuJywgSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpLnRva2VuKTtcbiAgICBhcGkoYHVzZXJzPSR7SlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZS5zZWxlY3RlZFVzZXJzKX1gLCBgL2FwaS9ncm91cHMvJHt0aGlzLnByb3BzLnNlbGVjdGVkR3JvdXAuaWR9L3VzZXIvYCwgJ1BPU1QnLCBoZWFkZXJzKVxuICAgIC50aGVuKHJlc3VsdCA9PiBjb25zb2xlLmxvZygnRklOSVNIIFJFU1VMVDo6Ojo6JywgcmVzdWx0KSk7XG4gIH1cblxuICBvblNlYXJjaENoYW5nZShwYWdlID0gdGhpcy5zdGF0ZS5wcmV2UGFnZSArIDEpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZm91bmRVc2VyczogW10gfSk7XG4gICAgaWYgKHRoaXMudGVybS52YWx1ZS50cmltKCkgIT09ICcnKSB7XG4gICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XG4gICAgICBoZWFkZXJzLmFwcGVuZCgneC1hY2Nlc3MtdG9rZW4nLCBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSkudG9rZW4pO1xuICAgICAgYXBpKG51bGwsIGAvYXBpL3NlYXJjaC8ke3RoaXMucHJvcHMuc2VsZWN0ZWRHcm91cC5pZH0vJHt0aGlzLnRlcm0udmFsdWUudHJpbSgpfS8ke3BhZ2UgLSAxfWAsICdHRVQnLCBoZWFkZXJzKS50aGVuKFxuICAgICAgICAodXNlcnMpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyh1c2Vycyk7XG4gICAgICAgICAgY29uc3QgblVzZXJzID0gdXNlcnMuZGF0YS5tYXAoKHVzZXIpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRVc2Vycy5tYXAoKHNVc2VyKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChzVXNlci5pZCA9PT0gdXNlci5pZCkge1xuICAgICAgICAgICAgICAgIHVzZXIuaW5ncm91cCA9IHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIHVzZXJzO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVVNFUjo6Oj4+Pj4nLCB1c2VyKTtcbiAgICAgICAgICAgIHJldHVybiB1c2VyO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb3VuZFVzZXJzOiBuVXNlcnMgfSk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgb25TZWxlY3RVc2VyKHVzZXIpIHtcbiAgICAvLyBSZW1vdmUgZnJvbSBzZWxlY3RlZFVzZXJzIGxpc3QgaWYgaXQgZXhpc3RzIHRoZXJlXG4gICAgLy8gb3IgQWRkIHRvIHNlbGVjdGVkVXNlcnMgbGlzdFxuICAgIGxldCBhbHJlYWR5U2VsZWN0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLnN0YXRlLnNlbGVjdGVkVXNlcnMubWFwKChzVXNlcikgPT4ge1xuICAgICAgaWYgKHNVc2VyLmlkID09PSB1c2VyLmlkKSB7XG4gICAgICAgIGFscmVhZHlTZWxlY3RlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiBzVXNlcjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZygnQUxSRUFEWSBTRUxFQ1RFRDo6Ojo6JywgYWxyZWFkeVNlbGVjdGVkKTtcbiAgICBpZiAoIWFscmVhZHlTZWxlY3RlZCkge1xuICAgICAgY29uc3Qgc2VsZWN0ZWRVc2VycyA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRVc2Vycy5jb25jYXQodXNlcik7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRVc2VycyB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdXNlcnMgPSB0aGlzLnN0YXRlLnNlbGVjdGVkVXNlcnMuZmlsdGVyKHNVc2VyID0+IHNVc2VyLmlkICE9PSB1c2VyLmlkKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZFVzZXJzOiB1c2VycyB9KTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coJ1NFTEVDVEVEIFVTRVJTOjo6OjonLCB0aGlzLnN0YXRlLnNlbGVjdGVkVXNlcnMuY29uY2F0KHVzZXIpKTtcblxuICAgIC8vIGZsaXAgdGhlIGluZ3JvdXAgdmFsdWVcbiAgICBsZXQgZm91bmRVc2VycyA9IE9iamVjdC5hc3NpZ24oW10sIHRoaXMuc3RhdGUuZm91bmRVc2Vycyk7XG4gICAgY29uc29sZS5sb2coZm91bmRVc2Vycyk7XG4gICAgZm91bmRVc2VycyA9IGZvdW5kVXNlcnMubWFwKChmVXNlcikgPT4ge1xuICAgICAgaWYgKGZVc2VyLmlkID09PSB1c2VyLmlkKSB7XG4gICAgICAgIGZVc2VyLmluZ3JvdXAgPSAhZlVzZXIuaW5ncm91cDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmVXNlcjtcbiAgICB9KTtcbiAgICB0aGlzLnNldFN0YXRlKHsgZm91bmRVc2VycyB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHNlbGVjdGVkR3JvdXAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc29sZS5sb2coJ1NFTEVDVEVEIEdST1VQOjo6Ojo6OicsIHNlbGVjdGVkR3JvdXApO1xuICAgIGlmIChzZWxlY3RlZEdyb3VwLm5hbWUgPT09ICcnIHx8IHNlbGVjdGVkR3JvdXAubmFtZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBsb2NhdGlvbi5oYXNoID0gJyNkYXNoYm9hcmQnO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgdGl0bGUgPSBbJ0FkZCB1c2VycyB0byAnLFxuICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6ICcjMDI3NWQ4JyB9fT57IHNlbGVjdGVkR3JvdXAubmFtZSB9PC9zcGFuPixcbiAgICAgICcgZ3JvdXAnXTtcblxuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybSB0aXRsZT17IHRpdGxlIH0gYWN0aXZlPSdzZWFyY2gnIGluZ3JvdXA9e3RydWV9PlxuICAgICAgICA8aDYgc3R5bGU9e3sgY29sb3I6ICcjMDI3NWQ4JyB9fT5TZWxlY3RlZCBVc2VyczogeyB0aGlzLnN0YXRlLnNlbGVjdGVkVXNlcnMubWFwKHVzZXIgPT4gYCR7dXNlci5pZH0sIGApIH08L2g2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtZmllbGQnPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBpZD0nc2VhcmNoJyBvbkNoYW5nZT17ICgpID0+IHRoaXMub25TZWFyY2hDaGFuZ2UoKSB9IHJlZj17KGlucHV0KSA9PiB7IHRoaXMudGVybSA9IGlucHV0OyB9fS8+XG4gICAgICAgICAgPGxhYmVsIGZvcj0nc2VhcmNoJz5TZWFyY2ggYnkgdXNlcm5hbWU8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlYXJjaC1yZXN1bHRzJz5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5mb3VuZFVzZXJzLm1hcChmVXNlciA9PlxuICAgICAgICAgICAgPHNwYW4ga2V5PXtmVXNlci5pZH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMub25TZWxlY3RVc2VyKGZVc2VyKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17ZlVzZXIuaW5ncm91cCA/ICdpbmdyb3VwJyA6ICcnfT5Ae2ZVc2VyLnVzZXJuYW1lfTwvc3Bhbj5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWFyY2gtcGFnZXNcIj5cbiAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHRoaXMub25QYWdlQ2hhbmdlKCdwcmV2Jyl9IGNsYXNzTmFtZT1cInNlYXJjaC1wcmV2XCI+UHJldjwvc3Bhbj48c3Bhbj57dGhpcy5zdGF0ZS5wcmV2UGFnZSArIDF9PC9zcGFuPjxzcGFuIG9uQ2xpY2s9eygpID0+IHRoaXMub25QYWdlQ2hhbmdlKCduZXh0Jyl9IGNsYXNzTmFtZT1cInNlYXJjaC1uZXh0XCI+TmV4dDwvc3Bhbj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSd3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHQgYnRuIGFjdGlvbi1idG4nXG4gICAgICAgICAgb25DbGljaz17dGhpcy5vbkZpbmlzaENsaWNrfT5GaW5pc2g8L2J1dHRvbj5cbiAgICAgICAgPGEgY2xhc3NOYW1lPSdyaWdodCB3YXZlcy1lZmZlY3Qgd2F2ZXMtdGVhbCBidG4tZmxhdCBhY3Rpb24tYnRuJ1xuICAgICAgICBocmVmPScjZGFzaGJvYXJkJz5DYW5jZWw8L2E+XG4gICAgICA8L0Zvcm0+KTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBzZWxlY3RlZEdyb3VwOiBzdGF0ZS5zZWxlY3RlZEdyb3VwXG4gIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG51bGwpKFNlYXJjaCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL3NlYXJjaC5qcyJdLCJzb3VyY2VSb290IjoiIn0=