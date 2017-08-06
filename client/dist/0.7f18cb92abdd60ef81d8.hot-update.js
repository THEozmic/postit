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
          this.onSearchChange();
          this.setState({ nextPage: this.state.nextPage - 1 });
          this.setState({ prevPage: this.state.prevPage - 1 });
        }
      } else {
        this.setState({ nextPage: this.state.nextPage + 1 });
        this.setState({ prevPage: this.state.prevPage + 1 });
        this.onSearchChange();
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

      this.setState({ foundUsers: [] });
      if (this.term.value.trim() !== '') {
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('x-access-token', JSON.parse(sessionStorage.getItem('user')).token);
        (0, _api2.default)(null, '/api/search/' + this.props.selectedGroup.id + '/' + this.term.value.trim() + '/' + (this.state.prevPage + 1), 'GET', headers).then(function (users) {
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
              { onClick: function onClick() {
                  return _this3.onPageChange('prev');
                }, className: 'search-prev' },
              'Prev'
            ),
            _react2.default.createElement(
              'span',
              null,
              this.state.nextPage
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL3NlYXJjaC5qcz8zZDE2Il0sIm5hbWVzIjpbIlNlYXJjaCIsInByb3BzIiwib25TZWFyY2hDaGFuZ2UiLCJiaW5kIiwib25GaW5pc2hDbGljayIsIm9uUGFnZUNoYW5nZSIsInN0YXRlIiwiZm91bmRVc2VycyIsInNlbGVjdGVkVXNlcnMiLCJuZXh0UGFnZSIsInByZXZQYWdlIiwicGFnZSIsInNldFN0YXRlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaGVhZGVycyIsIkhlYWRlcnMiLCJhcHBlbmQiLCJKU09OIiwicGFyc2UiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJ0b2tlbiIsInN0cmluZ2lmeSIsInNlbGVjdGVkR3JvdXAiLCJpZCIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwicmVzdWx0IiwidGVybSIsInZhbHVlIiwidHJpbSIsInVzZXJzIiwiblVzZXJzIiwiZGF0YSIsIm1hcCIsInVzZXIiLCJzVXNlciIsImluZ3JvdXAiLCJhbHJlYWR5U2VsZWN0ZWQiLCJjb25jYXQiLCJmaWx0ZXIiLCJPYmplY3QiLCJhc3NpZ24iLCJmVXNlciIsIm5hbWUiLCJ1bmRlZmluZWQiLCJsb2NhdGlvbiIsImhhc2giLCJ0aXRsZSIsImNvbG9yIiwiaW5wdXQiLCJvblNlbGVjdFVzZXIiLCJ1c2VybmFtZSIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxNOzs7QUFDSixrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGdIQUNYQSxLQURXOztBQUVqQixVQUFLQyxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0JDLElBQXBCLE9BQXRCO0FBQ0EsVUFBS0MsYUFBTCxHQUFxQixNQUFLQSxhQUFMLENBQW1CRCxJQUFuQixPQUFyQjtBQUNBLFVB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QVc7QUFDakMsU0FBTztBQUNMa0IsbUJBQWVsQixNQUFNa0I7QUFEaEIsR0FBUDtBQUdELENBSkQ7a0JBS2UseUJBQVFnQyxlQUFSLEVBQXlCLElBQXpCLEVBQStCeEQsTUFBL0IsQyIsImZpbGUiOiIwLjdmMThjYjkyYWJkZDYwZWY4MWQ4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBGb3JtIGZyb20gJy4uL3ByZXNlbnRhdGlvbmFsL2Zvcm0nO1xuaW1wb3J0IGFwaSBmcm9tICcuLi9oZWxwZXJzL2FwaSc7XG5cbmNsYXNzIFNlYXJjaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMub25TZWFyY2hDaGFuZ2UgPSB0aGlzLm9uU2VhcmNoQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkZpbmlzaENsaWNrID0gdGhpcy5vbkZpbmlzaENsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vblBhZ2VDaGFuZ2UgPSB0aGlzLm9uUGFnZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBmb3VuZFVzZXJzOiBbXSxcbiAgICAgIHNlbGVjdGVkVXNlcnM6IFtdLFxuICAgICAgbmV4dFBhZ2U6IDIsXG4gICAgICBwcmV2UGFnZTogMFxuICAgIH07XG4gIH1cblxuICBvblBhZ2VDaGFuZ2UocGFnZSkge1xuICAgIGlmIChwYWdlID09PSAncHJldicpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLnByZXZQYWdlID4gMCkge1xuICAgICAgICB0aGlzLm9uU2VhcmNoQ2hhbmdlKCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBuZXh0UGFnZTogdGhpcy5zdGF0ZS5uZXh0UGFnZSAtIDEgfSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcmV2UGFnZTogdGhpcy5zdGF0ZS5wcmV2UGFnZSAtIDEgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBuZXh0UGFnZTogdGhpcy5zdGF0ZS5uZXh0UGFnZSArIDEgfSk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgcHJldlBhZ2U6IHRoaXMuc3RhdGUucHJldlBhZ2UgKyAxIH0pO1xuICAgICAgdGhpcy5vblNlYXJjaENoYW5nZSgpO1xuICAgIH1cbiAgfVxuXG4gIG9uRmluaXNoQ2xpY2soZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuICAgIGhlYWRlcnMuYXBwZW5kKCd4LWFjY2Vzcy10b2tlbicsIEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKS50b2tlbik7XG4gICAgYXBpKGB1c2Vycz0ke0pTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUuc2VsZWN0ZWRVc2Vycyl9YCwgYC9hcGkvZ3JvdXBzLyR7dGhpcy5wcm9wcy5zZWxlY3RlZEdyb3VwLmlkfS91c2VyL2AsICdQT1NUJywgaGVhZGVycylcbiAgICAudGhlbihyZXN1bHQgPT4gY29uc29sZS5sb2coJ0ZJTklTSCBSRVNVTFQ6Ojo6OicsIHJlc3VsdCkpO1xuICB9XG5cbiAgb25TZWFyY2hDaGFuZ2UoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGZvdW5kVXNlcnM6IFtdIH0pO1xuICAgIGlmICh0aGlzLnRlcm0udmFsdWUudHJpbSgpICE9PSAnJykge1xuICAgICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuICAgICAgaGVhZGVycy5hcHBlbmQoJ3gtYWNjZXNzLXRva2VuJywgSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpLnRva2VuKTtcbiAgICAgIGFwaShudWxsLCBgL2FwaS9zZWFyY2gvJHt0aGlzLnByb3BzLnNlbGVjdGVkR3JvdXAuaWR9LyR7dGhpcy50ZXJtLnZhbHVlLnRyaW0oKX0vJHt0aGlzLnN0YXRlLnByZXZQYWdlICsgMX1gLCAnR0VUJywgaGVhZGVycykudGhlbihcbiAgICAgICAgKHVzZXJzKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2codXNlcnMpO1xuICAgICAgICAgIGNvbnN0IG5Vc2VycyA9IHVzZXJzLmRhdGEubWFwKCh1c2VyKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkVXNlcnMubWFwKChzVXNlcikgPT4ge1xuICAgICAgICAgICAgICBpZiAoc1VzZXIuaWQgPT09IHVzZXIuaWQpIHtcbiAgICAgICAgICAgICAgICB1c2VyLmluZ3JvdXAgPSB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiB1c2VycztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1VTRVI6Ojo+Pj4+JywgdXNlcik7XG4gICAgICAgICAgICByZXR1cm4gdXNlcjtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZm91bmRVc2VyczogblVzZXJzIH0pO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIG9uU2VsZWN0VXNlcih1c2VyKSB7XG4gICAgLy8gUmVtb3ZlIGZyb20gc2VsZWN0ZWRVc2VycyBsaXN0IGlmIGl0IGV4aXN0cyB0aGVyZVxuICAgIC8vIG9yIEFkZCB0byBzZWxlY3RlZFVzZXJzIGxpc3RcbiAgICBsZXQgYWxyZWFkeVNlbGVjdGVkID0gZmFsc2U7XG4gICAgdGhpcy5zdGF0ZS5zZWxlY3RlZFVzZXJzLm1hcCgoc1VzZXIpID0+IHtcbiAgICAgIGlmIChzVXNlci5pZCA9PT0gdXNlci5pZCkge1xuICAgICAgICBhbHJlYWR5U2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gc1VzZXI7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coJ0FMUkVBRFkgU0VMRUNURUQ6Ojo6OicsIGFscmVhZHlTZWxlY3RlZCk7XG4gICAgaWYgKCFhbHJlYWR5U2VsZWN0ZWQpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkVXNlcnMgPSB0aGlzLnN0YXRlLnNlbGVjdGVkVXNlcnMuY29uY2F0KHVzZXIpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkVXNlcnMgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHVzZXJzID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFVzZXJzLmZpbHRlcihzVXNlciA9PiBzVXNlci5pZCAhPT0gdXNlci5pZCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRVc2VyczogdXNlcnMgfSk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCdTRUxFQ1RFRCBVU0VSUzo6Ojo6JywgdGhpcy5zdGF0ZS5zZWxlY3RlZFVzZXJzLmNvbmNhdCh1c2VyKSk7XG5cbiAgICAvLyBmbGlwIHRoZSBpbmdyb3VwIHZhbHVlXG4gICAgbGV0IGZvdW5kVXNlcnMgPSBPYmplY3QuYXNzaWduKFtdLCB0aGlzLnN0YXRlLmZvdW5kVXNlcnMpO1xuICAgIGNvbnNvbGUubG9nKGZvdW5kVXNlcnMpO1xuICAgIGZvdW5kVXNlcnMgPSBmb3VuZFVzZXJzLm1hcCgoZlVzZXIpID0+IHtcbiAgICAgIGlmIChmVXNlci5pZCA9PT0gdXNlci5pZCkge1xuICAgICAgICBmVXNlci5pbmdyb3VwID0gIWZVc2VyLmluZ3JvdXA7XG4gICAgICB9XG4gICAgICByZXR1cm4gZlVzZXI7XG4gICAgfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGZvdW5kVXNlcnMgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzZWxlY3RlZEdyb3VwIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnNvbGUubG9nKCdTRUxFQ1RFRCBHUk9VUDo6Ojo6OjonLCBzZWxlY3RlZEdyb3VwKTtcbiAgICBpZiAoc2VsZWN0ZWRHcm91cC5uYW1lID09PSAnJyB8fCBzZWxlY3RlZEdyb3VwLm5hbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgbG9jYXRpb24uaGFzaCA9ICcjZGFzaGJvYXJkJztcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHRpdGxlID0gWydBZGQgdXNlcnMgdG8gJyxcbiAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiAnIzAyNzVkOCcgfX0+eyBzZWxlY3RlZEdyb3VwLm5hbWUgfTwvc3Bhbj4sXG4gICAgICAnIGdyb3VwJ107XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEZvcm0gdGl0bGU9eyB0aXRsZSB9IGFjdGl2ZT0nc2VhcmNoJyBpbmdyb3VwPXt0cnVlfT5cbiAgICAgICAgPGg2IHN0eWxlPXt7IGNvbG9yOiAnIzAyNzVkOCcgfX0+U2VsZWN0ZWQgVXNlcnM6IHsgdGhpcy5zdGF0ZS5zZWxlY3RlZFVzZXJzLm1hcCh1c2VyID0+IGAke3VzZXIuaWR9LCBgKSB9PC9oNj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2lucHV0LWZpZWxkJz5cbiAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgaWQ9J3NlYXJjaCcgb25DaGFuZ2U9eyB0aGlzLm9uU2VhcmNoQ2hhbmdlIH0gcmVmPXsoaW5wdXQpID0+IHsgdGhpcy50ZXJtID0gaW5wdXQ7IH19Lz5cbiAgICAgICAgICA8bGFiZWwgZm9yPSdzZWFyY2gnPlNlYXJjaCBieSB1c2VybmFtZTwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VhcmNoLXJlc3VsdHMnPlxuICAgICAgICAgIHt0aGlzLnN0YXRlLmZvdW5kVXNlcnMubWFwKGZVc2VyID0+XG4gICAgICAgICAgICA8c3BhbiBrZXk9e2ZVc2VyLmlkfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5vblNlbGVjdFVzZXIoZlVzZXIpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtmVXNlci5pbmdyb3VwID8gJ2luZ3JvdXAnIDogJyd9PkB7ZlVzZXIudXNlcm5hbWV9PC9zcGFuPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNlYXJjaC1wYWdlc1wiPlxuICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4gdGhpcy5vblBhZ2VDaGFuZ2UoJ3ByZXYnKX0gY2xhc3NOYW1lPVwic2VhcmNoLXByZXZcIj5QcmV2PC9zcGFuPjxzcGFuPnt0aGlzLnN0YXRlLm5leHRQYWdlfTwvc3Bhbj48c3BhbiBvbkNsaWNrPXsoKSA9PiB0aGlzLm9uUGFnZUNoYW5nZSgnbmV4dCcpfSBjbGFzc05hbWU9XCJzZWFyY2gtbmV4dFwiPk5leHQ8L3NwYW4+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nd2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0IGJ0biBhY3Rpb24tYnRuJ1xuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25GaW5pc2hDbGlja30+RmluaXNoPC9idXR0b24+XG4gICAgICAgIDxhIGNsYXNzTmFtZT0ncmlnaHQgd2F2ZXMtZWZmZWN0IHdhdmVzLXRlYWwgYnRuLWZsYXQgYWN0aW9uLWJ0bidcbiAgICAgICAgaHJlZj0nI2Rhc2hib2FyZCc+Q2FuY2VsPC9hPlxuICAgICAgPC9Gb3JtPik7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgc2VsZWN0ZWRHcm91cDogc3RhdGUuc2VsZWN0ZWRHcm91cFxuICB9O1xufTtcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBudWxsKShTZWFyY2gpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2pzL2NvbXBvbmVudHMvY29udGFpbmVycy9zZWFyY2guanMiXSwic291cmNlUm9vdCI6IiJ9