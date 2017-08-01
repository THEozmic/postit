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
      selectedUsers: []
    };
    return _this;
  }

  _createClass(Search, [{
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL3NlYXJjaC5qcz8zZDE2Il0sIm5hbWVzIjpbIlNlYXJjaCIsInByb3BzIiwib25TZWFyY2hDaGFuZ2UiLCJiaW5kIiwib25GaW5pc2hDbGljayIsInN0YXRlIiwiZm91bmRVc2VycyIsInNlbGVjdGVkVXNlcnMiLCJlIiwicHJldmVudERlZmF1bHQiLCJoZWFkZXJzIiwiSGVhZGVycyIsImFwcGVuZCIsIkpTT04iLCJwYXJzZSIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsInRva2VuIiwic3RyaW5naWZ5Iiwic2VsZWN0ZWRHcm91cCIsImlkIiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJyZXN1bHQiLCJ0ZXJtIiwidmFsdWUiLCJ0cmltIiwidXNlcnMiLCJuVXNlcnMiLCJkYXRhIiwibWFwIiwidXNlciIsInNVc2VyIiwiaW5ncm91cCIsInNldFN0YXRlIiwiYWxyZWFkeVNlbGVjdGVkIiwiY29uY2F0IiwiZmlsdGVyIiwiT2JqZWN0IiwiYXNzaWduIiwiZlVzZXIiLCJuYW1lIiwidW5kZWZpbmVkIiwibG9jYXRpb24iLCJoYXNoIiwidGl0bGUiLCJjb2xvciIsImlucHV0Iiwib25TZWxlY3RVc2VyIiwidXNlcm5hbWUiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUEsTTs7O0FBQ0osa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxnSEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsY0FBTCxHQUFzQixNQUFLQSxjQUFMLENBQW9CQyxJQUFwQixPQUF0QjtBQUNBLFVBQUtDLGFBQUwsR0FBcUIsTUFBS0EsYUFBTCxDQUFtQkQsSUFBbkIsT0FBckI7QUFDQSxVQUFLRSxLQUFMLEdBQWE7QUFDWEMsa0JBQVksRUFERDtBQUVYQyxxQkFBZTtB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QUEsU0FkRjtBQWdCRTtBQUFBO0FBQUEsWUFBRyxXQUFVLG1EQUFiO0FBQ0Esa0JBQUssWUFETDtBQUFBO0FBQUE7QUFoQkYsT0FERjtBQW9CRDs7OztFQTdHa0IsZ0JBQU0rQyxTOztBQWdIM0IsSUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDL0MsS0FBRCxFQUFXO0FBQ2pDLFNBQU87QUFDTGMsbUJBQWVkLE1BQU1jO0FBRGhCLEdBQVA7QUFHRCxDQUpEO2tCQUtlLHlCQUFRaUMsZUFBUixFQUF5QixJQUF6QixFQUErQnBELE1BQS9CLEMiLCJmaWxlIjoiMC5kZTYyM2U2MTg2YmY2NWI1YmM1YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgRm9ybSBmcm9tICcuLi9wcmVzZW50YXRpb25hbC9mb3JtJztcbmltcG9ydCBhcGkgZnJvbSAnLi4vaGVscGVycy9hcGknO1xuXG5jbGFzcyBTZWFyY2ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLm9uU2VhcmNoQ2hhbmdlID0gdGhpcy5vblNlYXJjaENoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25GaW5pc2hDbGljayA9IHRoaXMub25GaW5pc2hDbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBmb3VuZFVzZXJzOiBbXSxcbiAgICAgIHNlbGVjdGVkVXNlcnM6IFtdXG4gICAgfTtcbiAgfVxuXG4gIG9uRmluaXNoQ2xpY2soZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuICAgIGhlYWRlcnMuYXBwZW5kKCd4LWFjY2Vzcy10b2tlbicsIEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKS50b2tlbik7XG4gICAgYXBpKGB1c2Vycz0ke0pTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUuc2VsZWN0ZWRVc2Vycyl9YCwgYC9hcGkvZ3JvdXBzLyR7dGhpcy5wcm9wcy5zZWxlY3RlZEdyb3VwLmlkfS91c2VyL2AsICdQT1NUJywgaGVhZGVycylcbiAgICAudGhlbihyZXN1bHQgPT4gY29uc29sZS5sb2coJ0ZJTklTSCBSRVNVTFQ6Ojo6OicsIHJlc3VsdCkpO1xuICB9XG5cbiAgb25TZWFyY2hDaGFuZ2UoKSB7XG4gICAgaWYgKHRoaXMudGVybS52YWx1ZS50cmltKCkgIT09ICcnKSB7XG4gICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XG4gICAgICBoZWFkZXJzLmFwcGVuZCgneC1hY2Nlc3MtdG9rZW4nLCBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSkudG9rZW4pO1xuICAgICAgYXBpKG51bGwsIGAvYXBpL3NlYXJjaC8ke3RoaXMucHJvcHMuc2VsZWN0ZWRHcm91cC5pZH0vJHt0aGlzLnRlcm0udmFsdWUudHJpbSgpfWAsICdHRVQnLCBoZWFkZXJzKS50aGVuKFxuICAgICAgICAodXNlcnMpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyh1c2Vycyk7XG4gICAgICAgICAgY29uc3QgblVzZXJzID0gdXNlcnMuZGF0YS5tYXAoKHVzZXIpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRVc2Vycy5tYXAoKHNVc2VyKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChzVXNlci5pZCA9PT0gdXNlci5pZCkge1xuICAgICAgICAgICAgICAgIHVzZXIuaW5ncm91cCA9IHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIHVzZXJzO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVVNFUjo6Oj4+Pj4nLCB1c2VyKTtcbiAgICAgICAgICAgIHJldHVybiB1c2VyO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb3VuZFVzZXJzOiBuVXNlcnMgfSk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgb25TZWxlY3RVc2VyKHVzZXIpIHtcbiAgICAvLyBSZW1vdmUgZnJvbSBzZWxlY3RlZFVzZXJzIGxpc3QgaWYgaXQgZXhpc3RzIHRoZXJlXG4gICAgLy8gb3IgQWRkIHRvIHNlbGVjdGVkVXNlcnMgbGlzdFxuICAgIGxldCBhbHJlYWR5U2VsZWN0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLnN0YXRlLnNlbGVjdGVkVXNlcnMubWFwKChzVXNlcikgPT4ge1xuICAgICAgaWYgKHNVc2VyLmlkID09PSB1c2VyLmlkKSB7XG4gICAgICAgIGFscmVhZHlTZWxlY3RlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiBzVXNlcjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZygnQUxSRUFEWSBTRUxFQ1RFRDo6Ojo6JywgYWxyZWFkeVNlbGVjdGVkKTtcbiAgICBpZiAoIWFscmVhZHlTZWxlY3RlZCkge1xuICAgICAgY29uc3Qgc2VsZWN0ZWRVc2VycyA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRVc2Vycy5jb25jYXQodXNlcik7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRVc2VycyB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdXNlcnMgPSB0aGlzLnN0YXRlLnNlbGVjdGVkVXNlcnMuZmlsdGVyKHNVc2VyID0+IHNVc2VyLmlkICE9PSB1c2VyLmlkKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZFVzZXJzOiB1c2VycyB9KTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coJ1NFTEVDVEVEIFVTRVJTOjo6OjonLCB0aGlzLnN0YXRlLnNlbGVjdGVkVXNlcnMuY29uY2F0KHVzZXIpKTtcblxuICAgIC8vIGZsaXAgdGhlIGluZ3JvdXAgdmFsdWVcbiAgICBsZXQgZm91bmRVc2VycyA9IE9iamVjdC5hc3NpZ24oW10sIHRoaXMuc3RhdGUuZm91bmRVc2Vycyk7XG4gICAgY29uc29sZS5sb2coZm91bmRVc2Vycyk7XG4gICAgZm91bmRVc2VycyA9IGZvdW5kVXNlcnMubWFwKChmVXNlcikgPT4ge1xuICAgICAgaWYgKGZVc2VyLmlkID09PSB1c2VyLmlkKSB7XG4gICAgICAgIGZVc2VyLmluZ3JvdXAgPSAhZlVzZXIuaW5ncm91cDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmVXNlcjtcbiAgICB9KTtcbiAgICB0aGlzLnNldFN0YXRlKHsgZm91bmRVc2VycyB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHNlbGVjdGVkR3JvdXAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc29sZS5sb2coJ1NFTEVDVEVEIEdST1VQOjo6Ojo6OicsIHNlbGVjdGVkR3JvdXApO1xuICAgIGlmIChzZWxlY3RlZEdyb3VwLm5hbWUgPT09ICcnIHx8IHNlbGVjdGVkR3JvdXAubmFtZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBsb2NhdGlvbi5oYXNoID0gJyNkYXNoYm9hcmQnO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgdGl0bGUgPSBbJ0FkZCB1c2VycyB0byAnLFxuICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6ICcjMDI3NWQ4JyB9fT57IHNlbGVjdGVkR3JvdXAubmFtZSB9PC9zcGFuPixcbiAgICAgICcgZ3JvdXAnXTtcblxuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybSB0aXRsZT17IHRpdGxlIH0gYWN0aXZlPSdzZWFyY2gnIGluZ3JvdXA9e3RydWV9PlxuICAgICAgICA8aDYgc3R5bGU9e3sgY29sb3I6ICcjMDI3NWQ4JyB9fT5TZWxlY3RlZCBVc2VyczogeyB0aGlzLnN0YXRlLnNlbGVjdGVkVXNlcnMubWFwKHVzZXIgPT4gYCR7dXNlci5pZH0sIGApIH08L2g2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtZmllbGQnPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBpZD0nc2VhcmNoJyBvbkNoYW5nZT17IHRoaXMub25TZWFyY2hDaGFuZ2UgfSByZWY9eyhpbnB1dCkgPT4geyB0aGlzLnRlcm0gPSBpbnB1dDsgfX0vPlxuICAgICAgICAgIDxsYWJlbCBmb3I9J3NlYXJjaCc+U2VhcmNoIGJ5IHVzZXJuYW1lPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWFyY2gtcmVzdWx0cyc+XG4gICAgICAgICAge3RoaXMuc3RhdGUuZm91bmRVc2Vycy5tYXAoZlVzZXIgPT5cbiAgICAgICAgICAgIDxzcGFuIGtleT17ZlVzZXIuaWR9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLm9uU2VsZWN0VXNlcihmVXNlcil9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2ZVc2VyLmluZ3JvdXAgPyAnaW5ncm91cCcgOiAnJ30+QHtmVXNlci51c2VybmFtZX08L3NwYW4+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VhcmNoLXBhZ2VzXCI+PGEgaHJlZj1cIiMvMVwiIGNsYXNzTmFtZT1cInNlYXJjaC1wcmV2XCI+UHJldjwvYT48YSBocmVmPVwiIy8yXCI+MjwvYT48YSBocmVmPVwiIy8zXCIgY2xhc3NOYW1lPVwic2VhcmNoLW5leHRcIj5OZXh0PC9hPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J3dhdmVzLWVmZmVjdCB3YXZlcy1saWdodCBidG4gYWN0aW9uLWJ0bidcbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uRmluaXNoQ2xpY2t9PkZpbmlzaDwvYnV0dG9uPlxuICAgICAgICA8YSBjbGFzc05hbWU9J3JpZ2h0IHdhdmVzLWVmZmVjdCB3YXZlcy10ZWFsIGJ0bi1mbGF0IGFjdGlvbi1idG4nXG4gICAgICAgIGhyZWY9JyNkYXNoYm9hcmQnPkNhbmNlbDwvYT5cbiAgICAgIDwvRm9ybT4pO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHNlbGVjdGVkR3JvdXA6IHN0YXRlLnNlbGVjdGVkR3JvdXBcbiAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbnVsbCkoU2VhcmNoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9qcy9jb21wb25lbnRzL2NvbnRhaW5lcnMvc2VhcmNoLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==