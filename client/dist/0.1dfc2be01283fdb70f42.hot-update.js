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
        this.setState(page);
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

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL3NlYXJjaC5qcz8zZDE2Il0sIm5hbWVzIjpbIlNlYXJjaCIsInByb3BzIiwib25TZWFyY2hDaGFuZ2UiLCJiaW5kIiwib25GaW5pc2hDbGljayIsInN0YXRlIiwiZm91bmRVc2VycyIsInNlbGVjdGVkVXNlcnMiLCJuZXh0UGFnZSIsInByZXZQYWdlIiwicGFnZSIsInNldFN0YXRlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaGVhZGVycyIsIkhlYWRlcnMiLCJhcHBlbmQiLCJKU09OIiwicGFyc2UiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJ0b2tlbiIsInN0cmluZ2lmeSIsInNlbGVjdGVkR3JvdXAiLCJpZCIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwicmVzdWx0IiwidGVybSIsInZhbHVlIiwidHJpbSIsInVzZXJzIiwiblVzZXJzIiwiZGF0YSIsIm1hcCIsInVzZXIiLCJzVXNlciIsImluZ3JvdXAiLCJhbHJlYWR5U2VsZWN0ZWQiLCJjb25jYXQiLCJmaWx0ZXIiLCJPYmplY3QiLCJhc3NpZ24iLCJmVXNlciIsIm5hbWUiLCJ1bmRlZmluZWQiLCJsb2NhdGlvbiIsImhhc2giLCJ0aXRsZSIsImNvbG9yIiwiaW5wdXQiLCJvblNlbGVjdFVzZXIiLCJ1c2VybmFtZSIsIm9uUGFnZUNoYW5nZSIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxNOzs7QUFDSixrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGdIQUNYQSxLQURXOztBQUVqQixVQUFLQyxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0JDLElBQXBCLE9BQXRCO0FBQ0EsVUFBS0MsYUFBTCxHQUFxQixNQUFLQSxhQUFMLENBQW1CRCxJQUFuQixPQUFyQjtBQUNBLFVB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QWxCLENBQWYsRUFBMEMsV0FBVSxhQUFwRDtBQUFBO0FBQUEsYUFERjtBQUMrRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRC9FO0FBQzZGO0FBQUE7QUFBQSxnQkFBTSxTQUFTLEtBQUtBLFlBQUwsQ0FBa0IsTUFBbEIsQ0FBZixFQUEwQyxXQUFVLGFBQXBEO0FBQUE7QUFBQTtBQUQ3RjtBQU5GLFNBTkY7QUFlRTtBQUFBO0FBQUEsWUFBUSxXQUFVLHlDQUFsQjtBQUNFLHFCQUFTLEtBQUtsRCxhQURoQjtBQUFBO0FBQUEsU0FmRjtBQWlCRTtBQUFBO0FBQUEsWUFBRyxXQUFVLG1EQUFiO0FBQ0Esa0JBQUssWUFETDtBQUFBO0FBQUE7QUFqQkYsT0FERjtBQXFCRDs7OztFQXRIa0IsZ0JBQU1tRCxTOztBQXlIM0IsSUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDbkQsS0FBRCxFQUFXO0FBQ2pDLFNBQU87QUFDTGtCLG1CQUFlbEIsTUFBTWtCO0FBRGhCLEdBQVA7QUFHRCxDQUpEO2tCQUtlLHlCQUFRaUMsZUFBUixFQUF5QixJQUF6QixFQUErQnhELE1BQS9CLEMiLCJmaWxlIjoiMC4xZGZjMmJlMDEyODNmZGI3MGY0Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgRm9ybSBmcm9tICcuLi9wcmVzZW50YXRpb25hbC9mb3JtJztcbmltcG9ydCBhcGkgZnJvbSAnLi4vaGVscGVycy9hcGknO1xuXG5jbGFzcyBTZWFyY2ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLm9uU2VhcmNoQ2hhbmdlID0gdGhpcy5vblNlYXJjaENoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25GaW5pc2hDbGljayA9IHRoaXMub25GaW5pc2hDbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBmb3VuZFVzZXJzOiBbXSxcbiAgICAgIHNlbGVjdGVkVXNlcnM6IFtdLFxuICAgICAgbmV4dFBhZ2U6IDMsXG4gICAgICBwcmV2UGFnZTogMVxuICAgIH07XG4gIH1cblxuICBvblBhZ2VDaGFuZ2UocGFnZSkge1xuICAgIGlmIChwYWdlID09PSAncHJldicpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUocGFnZSlcbiAgICB9XG4gIH1cblxuICBvbkZpbmlzaENsaWNrKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcbiAgICBoZWFkZXJzLmFwcGVuZCgneC1hY2Nlc3MtdG9rZW4nLCBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSkudG9rZW4pO1xuICAgIGFwaShgdXNlcnM9JHtKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlLnNlbGVjdGVkVXNlcnMpfWAsIGAvYXBpL2dyb3Vwcy8ke3RoaXMucHJvcHMuc2VsZWN0ZWRHcm91cC5pZH0vdXNlci9gLCAnUE9TVCcsIGhlYWRlcnMpXG4gICAgLnRoZW4ocmVzdWx0ID0+IGNvbnNvbGUubG9nKCdGSU5JU0ggUkVTVUxUOjo6OjonLCByZXN1bHQpKTtcbiAgfVxuXG4gIG9uU2VhcmNoQ2hhbmdlKHBhZ2UgPSAxKSB7XG4gICAgaWYgKHRoaXMudGVybS52YWx1ZS50cmltKCkgIT09ICcnKSB7XG4gICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XG4gICAgICBoZWFkZXJzLmFwcGVuZCgneC1hY2Nlc3MtdG9rZW4nLCBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSkudG9rZW4pO1xuICAgICAgYXBpKG51bGwsIGAvYXBpL3NlYXJjaC8ke3RoaXMucHJvcHMuc2VsZWN0ZWRHcm91cC5pZH0vJHt0aGlzLnRlcm0udmFsdWUudHJpbSgpfS8ke3BhZ2V9YCwgJ0dFVCcsIGhlYWRlcnMpLnRoZW4oXG4gICAgICAgICh1c2VycykgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXJzKTtcbiAgICAgICAgICBjb25zdCBuVXNlcnMgPSB1c2Vycy5kYXRhLm1hcCgodXNlcikgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZFVzZXJzLm1hcCgoc1VzZXIpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHNVc2VyLmlkID09PSB1c2VyLmlkKSB7XG4gICAgICAgICAgICAgICAgdXNlci5pbmdyb3VwID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gdXNlcnM7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdVU0VSOjo6Pj4+PicsIHVzZXIpO1xuICAgICAgICAgICAgcmV0dXJuIHVzZXI7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvdW5kVXNlcnM6IG5Vc2VycyB9KTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBvblNlbGVjdFVzZXIodXNlcikge1xuICAgIC8vIFJlbW92ZSBmcm9tIHNlbGVjdGVkVXNlcnMgbGlzdCBpZiBpdCBleGlzdHMgdGhlcmVcbiAgICAvLyBvciBBZGQgdG8gc2VsZWN0ZWRVc2VycyBsaXN0XG4gICAgbGV0IGFscmVhZHlTZWxlY3RlZCA9IGZhbHNlO1xuICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRVc2Vycy5tYXAoKHNVc2VyKSA9PiB7XG4gICAgICBpZiAoc1VzZXIuaWQgPT09IHVzZXIuaWQpIHtcbiAgICAgICAgYWxyZWFkeVNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHNVc2VyO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKCdBTFJFQURZIFNFTEVDVEVEOjo6OjonLCBhbHJlYWR5U2VsZWN0ZWQpO1xuICAgIGlmICghYWxyZWFkeVNlbGVjdGVkKSB7XG4gICAgICBjb25zdCBzZWxlY3RlZFVzZXJzID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFVzZXJzLmNvbmNhdCh1c2VyKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZFVzZXJzIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB1c2VycyA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRVc2Vycy5maWx0ZXIoc1VzZXIgPT4gc1VzZXIuaWQgIT09IHVzZXIuaWQpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkVXNlcnM6IHVzZXJzIH0pO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZygnU0VMRUNURUQgVVNFUlM6Ojo6OicsIHRoaXMuc3RhdGUuc2VsZWN0ZWRVc2Vycy5jb25jYXQodXNlcikpO1xuXG4gICAgLy8gZmxpcCB0aGUgaW5ncm91cCB2YWx1ZVxuICAgIGxldCBmb3VuZFVzZXJzID0gT2JqZWN0LmFzc2lnbihbXSwgdGhpcy5zdGF0ZS5mb3VuZFVzZXJzKTtcbiAgICBjb25zb2xlLmxvZyhmb3VuZFVzZXJzKTtcbiAgICBmb3VuZFVzZXJzID0gZm91bmRVc2Vycy5tYXAoKGZVc2VyKSA9PiB7XG4gICAgICBpZiAoZlVzZXIuaWQgPT09IHVzZXIuaWQpIHtcbiAgICAgICAgZlVzZXIuaW5ncm91cCA9ICFmVXNlci5pbmdyb3VwO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZVc2VyO1xuICAgIH0pO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBmb3VuZFVzZXJzIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc2VsZWN0ZWRHcm91cCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zb2xlLmxvZygnU0VMRUNURUQgR1JPVVA6Ojo6Ojo6Jywgc2VsZWN0ZWRHcm91cCk7XG4gICAgaWYgKHNlbGVjdGVkR3JvdXAubmFtZSA9PT0gJycgfHwgc2VsZWN0ZWRHcm91cC5uYW1lID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGxvY2F0aW9uLmhhc2ggPSAnI2Rhc2hib2FyZCc7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCB0aXRsZSA9IFsnQWRkIHVzZXJzIHRvICcsXG4gICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogJyMwMjc1ZDgnIH19Pnsgc2VsZWN0ZWRHcm91cC5uYW1lIH08L3NwYW4+LFxuICAgICAgJyBncm91cCddO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxGb3JtIHRpdGxlPXsgdGl0bGUgfSBhY3RpdmU9J3NlYXJjaCcgaW5ncm91cD17dHJ1ZX0+XG4gICAgICAgIDxoNiBzdHlsZT17eyBjb2xvcjogJyMwMjc1ZDgnIH19PlNlbGVjdGVkIFVzZXJzOiB7IHRoaXMuc3RhdGUuc2VsZWN0ZWRVc2Vycy5tYXAodXNlciA9PiBgJHt1c2VyLmlkfSwgYCkgfTwvaDY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1maWVsZCc+XG4gICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGlkPSdzZWFyY2gnIG9uQ2hhbmdlPXsgdGhpcy5vblNlYXJjaENoYW5nZSB9IHJlZj17KGlucHV0KSA9PiB7IHRoaXMudGVybSA9IGlucHV0OyB9fS8+XG4gICAgICAgICAgPGxhYmVsIGZvcj0nc2VhcmNoJz5TZWFyY2ggYnkgdXNlcm5hbWU8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlYXJjaC1yZXN1bHRzJz5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5mb3VuZFVzZXJzLm1hcChmVXNlciA9PlxuICAgICAgICAgICAgPHNwYW4ga2V5PXtmVXNlci5pZH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMub25TZWxlY3RVc2VyKGZVc2VyKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17ZlVzZXIuaW5ncm91cCA/ICdpbmdyb3VwJyA6ICcnfT5Ae2ZVc2VyLnVzZXJuYW1lfTwvc3Bhbj5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWFyY2gtcGFnZXNcIj5cbiAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e3RoaXMub25QYWdlQ2hhbmdlKCdwcmV2Jyl9IGNsYXNzTmFtZT1cInNlYXJjaC1wcmV2XCI+UHJldjwvc3Bhbj48c3Bhbj4yPC9zcGFuPjxzcGFuIG9uQ2xpY2s9e3RoaXMub25QYWdlQ2hhbmdlKCduZXh0Jyl9IGNsYXNzTmFtZT1cInNlYXJjaC1uZXh0XCI+TmV4dDwvc3Bhbj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSd3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHQgYnRuIGFjdGlvbi1idG4nXG4gICAgICAgICAgb25DbGljaz17dGhpcy5vbkZpbmlzaENsaWNrfT5GaW5pc2g8L2J1dHRvbj5cbiAgICAgICAgPGEgY2xhc3NOYW1lPSdyaWdodCB3YXZlcy1lZmZlY3Qgd2F2ZXMtdGVhbCBidG4tZmxhdCBhY3Rpb24tYnRuJ1xuICAgICAgICBocmVmPScjZGFzaGJvYXJkJz5DYW5jZWw8L2E+XG4gICAgICA8L0Zvcm0+KTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBzZWxlY3RlZEdyb3VwOiBzdGF0ZS5zZWxlY3RlZEdyb3VwXG4gIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG51bGwpKFNlYXJjaCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL3NlYXJjaC5qcyJdLCJzb3VyY2VSb290IjoiIn0=