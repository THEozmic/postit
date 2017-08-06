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
        if (result.data.message === 'members list updated') {
          location.history.back();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL3NlYXJjaC5qcz8zZDE2Il0sIm5hbWVzIjpbIlNlYXJjaCIsInByb3BzIiwib25TZWFyY2hDaGFuZ2UiLCJiaW5kIiwib25GaW5pc2hDbGljayIsIm9uUGFnZUNoYW5nZSIsInN0YXRlIiwiZm91bmRVc2VycyIsInNlbGVjdGVkVXNlcnMiLCJuZXh0UGFnZSIsInByZXZQYWdlIiwicGFnZSIsInRlcm0iLCJ2YWx1ZSIsInRyaW0iLCJzZXRTdGF0ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImhlYWRlcnMiLCJIZWFkZXJzIiwiYXBwZW5kIiwiSlNPTiIsInBhcnNlIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwidG9rZW4iLCJzdHJpbmdpZnkiLCJzZWxlY3RlZEdyb3VwIiwiaWQiLCJ0aGVuIiwicmVzdWx0IiwiZGF0YSIsIm1lc3NhZ2UiLCJsb2NhdGlvbiIsImhpc3RvcnkiLCJiYWNrIiwidXNlcnMiLCJjb25zb2xlIiwibG9nIiwiblVzZXJzIiwibWFwIiwidXNlciIsInNVc2VyIiwiaW5ncm91cCIsImFscmVhZHlTZWxlY3RlZCIsImNvbmNhdCIsImZpbHRlciIsIk9iamVjdCIsImFzc2lnbiIsImZVc2VyIiwibmFtZSIsInVuZGVmaW5lZCIsImhhc2giLCJ0aXRsZSIsImNvbG9yIiwiaW5wdXQiLCJvblNlbGVjdFVzZXIiLCJ1c2VybmFtZSIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxNOzs7QUFDSixrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGdIQUNYQSxLQURXOztBQUVqQixVQUFLQyxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0JDLElBQXBCLE9BQXRCO0FBQ0EsVUFBS0MsYUFBTCxHQUFxQixNQUFLQSxhQUFMLENBQW1CRCxJQUFuQixPQUFyQjtBQUNBLFVBQUtFLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkYsSUFBbEIsT0FBcEI7QUFDQSxVQUFLRyxLQUFMLEdBQWE7QUFDWEMsa0JBQVksRUFERDtBQUVYQyxxQkFBZSxFQUZKO0FBR1hDLGdCQUFVLENBSEM7QUFJWEMsZ0JBQVU7QUFKQyxLQUFiO0FBTGlCO0FBV2xCOzs7O2lDQUVZQyxJLEVBQU07QUFDakIsVUFBSSxLQUFLQyxJQUFMLENBQVVDLEtBQVYsQ0FBZ0JDLElBQWhCLE9BQTJCLEVBQS9CLEVBQW1DO0FBQ2pDLFlBQUlILFNBQVMsTUFBYixFQUFxQjtBQUNuQixjQUFJLEtBQUtMLEtBQUwsQ0FBV0ksUUFBWCxHQUFzQixDQUExQixFQUE2QjtBQUMzQixpQkFBS1IsY0FBTCxDQUFvQixLQUFLSSxLQUFMLENBQVdJLFFBQS9CO0FBQ0EsaUJBQUtLLFFBQUwsQ0FBYyxFQUFFTixVQUFVLEtBQUtILEtBQUwsQ0FBV0csUUFBWCxHQUFzQixDQUFsQyxFQUFkO0FBQ0EsaUJBQUtNLFFBQUwsQ0FBYyxFQUFFTCxVQUFVLEtBQUtKLEtBQUwsQ0FBV0ksUUFBWCxHQUFzQixDQUFsQyxFQUFkO0FBQ0Q7QUFDRixTQU5ELE1BTU87QUFDTCxlQUFLUixjQUFMLENBQW9CLEtBQUtJLEtBQUwsQ0FBV0csUUFBL0I7QUFDQSxlQUFLTSxRQUFMLENBQWMsRUFBRU4sVUFBVSxLQUFLSCxLQUFMLENBQVdHLFFBQVgsR0FBc0IsQ0FBbEMsRUFBZDtBQUNBLGVBQUtNLFFBQUwsQ0FBYyxFQUFFTCxVQUFVLEtBQUtKLEtBQUwsQ0FBV0ksUUFBWCxHQUFzQixDQUFsQyxFQUFkO0FBQ0Q7QUFDRjtBQUNGOzs7a0NBRWFNLEMsRUFBRztBQUNmQSxRQUFFQyxjQUFGO0FBQ0EsVUFBTUMsVUFBVSxJQUFJQyxPQUFKLEVBQWhCO0FBQ0FELGNBQVFFLE1BQVIsQ0FBZSxjQUFmLEVBQStCLG1DQUEvQjtBQUNBRixjQUFRRSxNQUFSLENBQWUsZ0JBQWYsRUFBaUNDLEtBQUtDLEtBQUwsQ0FBV0MsZUFBZUMsT0FBZixDQUF1QixNQUF2QixDQUFYLEVBQTJDQyxLQUE1RTtBQUNBLG9DQUFhSixLQUFLSyxTQUFMLENBQWUsS0FBS3BCLEtBQUwsQ0FBV0UsYUFBMUIsQ0FBYixtQkFBd0UsS0FBS1AsS0FBTCxDQUFXMEIsYUFBWCxDQUF5QkMsRUFBakcsYUFBNkcsTUFBN0csRUFBcUhWLE9BQXJILEVBQ0NXLElBREQsQ0FDTSxrQkFBVTtBQUNkLFlBQUlDLE9BQU9DLElBQVAsQ0FBWUMsT0FBWixLQUF3QixzQkFBNUIsRUFBb0Q7QUFDbERDLG1CQUFTQyxPQUFULENBQWlCQyxJQUFqQjtBQUNEO0FBQ0YsT0FMRDtBQU1EOzs7cUNBRThDO0FBQUE7O0FBQUEsVUFBaEN4QixJQUFnQyx1RUFBekIsS0FBS0wsS0FBTCxDQUFXSSxRQUFYLEdBQXNCLENBQUc7O0FBQzdDLFdBQUtLLFFBQUwsQ0FBYyxFQUFFUixZQUFZLEVBQWQsRUFBZDtBQUNBLFVBQUksS0FBS0ssSUFBTCxDQUFVQyxLQUFWLENBQWdCQyxJQUFoQixPQUEyQixFQUEvQixFQUFtQztBQUNqQyxZQUFNSSxVQUFVLElBQUlDLE9BQUosRUFBaEI7QUFDQUQsZ0JBQVFFLE1BQVIsQ0FBZSxjQUFmLEVBQStCLG1DQUEvQjtBQUNBRixnQkFBUUUsTUFBUixDQUFlLGdCQUFmLEVBQWlDQyxLQUFLQyxLQUFMLENBQVdDLGVBQWVDLE9BQWYsQ0FBdUIsTUFBdkIsQ0FBWCxFQUEyQ0MsS0FBNUU7QUFDQSwyQkFBSSxJQUFKLG1CQUF5QixLQUFLeEIsS0FBTCxDQUFXMEIsYUFBWCxDQUF5QkMsRUFBbEQsU0FBd0QsS0FBS2hCLElBQUwsQ0FBVUMsS0FBVixDQUFnQkMsSUFBaEIsRUFBeEQsVUFBa0ZILE9BQU8sQ0FBekYsR0FBOEYsS0FBOUYsRUFBcUdPLE9BQXJHLEVBQThHVyxJQUE5RyxDQUNFLFVBQUNPLEtBQUQsRUFBVztBQUNUQyxrQkFBUUMsR0FBUixDQUFZRixLQUFaO0FBQ0EsY0FBTUcsU0FBU0gsTUFBTUwsSUFBTixDQUFXUyxHQUFYLENBQWUsVUFBQ0MsSUFBRCxFQUFVO0FBQ3RDLG1CQUFLbkMsS0FBTCxDQUFXRSxhQUFYLENBQXlCZ0MsR0FBekIsQ0FBNkIsVUFBQ0UsS0FBRCxFQUFXO0FBQ3RDLGtCQUFJQSxNQUFNZCxFQUFOLEtBQWFhLEtBQUtiLEVBQXRCLEVBQTBCO0FBQ3hCYSxxQkFBS0UsT0FBTCxHQUFlLElBQWY7QUFDRDtBQUNELHFCQUFPUCxLQUFQO0FBQ0QsYUFMRDtBQU1BQyxvQkFBUUMsR0FBUixDQUFZLGFBQVosRUFBMkJHLElBQTNCO0FBQ0EsbUJBQU9BLElBQVA7QUFDRCxXQVRjLENBQWY7QUFVQSxpQkFBSzFCLFFBQUwsQ0FBYyxFQUFFUixZQUFZZ0MsTUFBZCxFQUFkO0FBQ0QsU0FkSDtBQWdCRDtBQUNGOzs7aUNBRVlFLEksRUFBTTtBQUNqQjtBQUNBO0FBQ0EsVUFBSUcsa0JBQWtCLEtBQXRCO0FBQ0EsV0FBS3RDLEtBQUwsQ0FBV0UsYUFBWCxDQUF5QmdDLEdBQXpCLENBQTZCLFVBQUNFLEtBQUQsRUFBVztBQUN0QyxZQUFJQSxNQUFNZCxFQUFOLEtBQWFhLEtBQUtiLEVBQXRCLEVBQTBCO0FBQ3hCZ0IsNEJBQWtCLElBQWxCO0FBQ0EsaUJBQU9GLEtBQVA7QUFDRDtBQUNELGVBQU8sS0FBUDtBQUNELE9BTkQ7QUFPQUwsY0FBUUMsR0FBUixDQUFZLHVCQUFaLEVBQXFDTSxlQUFyQztBQUNBLFVBQUksQ0FBQ0EsZUFBTCxFQUFzQjtBQUNwQixZQUFNcEMsZ0JBQWdCLEtBQUtGLEtBQUwsQ0FBV0UsYUFBWCxDQUF5QnFDLE1BQXpCLENBQWdDSixJQUFoQyxDQUF0QjtBQUNBLGFBQUsxQixRQUFMLENBQWMsRUFBRVAsNEJBQUYsRUFBZDtBQUNELE9BSEQsTUFHTztBQUNMLFlBQU00QixRQUFRLEtBQUs5QixLQUFMLENBQVdFLGFBQVgsQ0FBeUJzQyxNQUF6QixDQUFnQztBQUFBLGlCQUFTSixNQUFNZCxFQUFOLEtBQWFhLEtBQUtiLEVBQTNCO0FBQUEsU0FBaEMsQ0FBZDtBQUNBLGFBQUtiLFFBQUwsQ0FBYyxFQUFFUCxlQUFlNEIsS0FBakIsRUFBZDtBQUNEO0FBQ0RDLGNBQVFDLEdBQVIsQ0FBWSxxQkFBWixFQUFtQyxLQUFLaEMsS0FBTCxDQUFXRSxhQUFYLENBQXlCcUMsTUFBekIsQ0FBZ0NKLElBQWhDLENBQW5DOztBQUVBO0FBQ0EsVUFBSWxDLGFBQWF3QyxPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQixLQUFLMUMsS0FBTCxDQUFXQyxVQUE3QixDQUFqQjtBQUNBOEIsY0FBUUMsR0FBUixDQUFZL0IsVUFBWjtBQUNBQSxtQkFBYUEsV0FBV2lDLEdBQVgsQ0FBZSxVQUFDUyxLQUFELEVBQVc7QUFDckMsWUFBSUEsTUFBTXJCLEVBQU4sS0FBYWEsS0FBS2IsRUFBdEIsRUFBMEI7QUFDeEJxQixnQkFBTU4sT0FBTixHQUFnQixDQUFDTSxNQUFNTixPQUF2QjtBQUNEO0FBQ0QsZUFBT00sS0FBUDtBQUNELE9BTFksQ0FBYjtBQU1BLFdBQUtsQyxRQUFMLENBQWMsRUFBRVIsc0JBQUYsRUFBZDtBQUNEOzs7NkJBRVE7QUFBQTs7QUFBQSxVQUNDb0IsYUFERCxHQUNtQixLQUFLMUIsS0FEeEIsQ0FDQzBCLGFBREQ7O0FBRVBVLGNBQVFDLEdBQVIsQ0FBWSx1QkFBWixFQUFxQ1gsYUFBckM7QUFDQSxVQUFJQSxjQUFjdUIsSUFBZCxLQUF1QixFQUF2QixJQUE2QnZCLGNBQWN1QixJQUFkLEtBQXVCQyxTQUF4RCxFQUFtRTtBQUNqRWxCLGlCQUFTbUIsSUFBVCxHQUFnQixZQUFoQjtBQUNBLGVBQU8sSUFBUDtBQUNEOztBQUVELFVBQU1DLFFBQVEsQ0FBQyxlQUFELEVBQ1o7QUFBQTtBQUFBLFVBQU0sT0FBTyxFQUFFQyxPQUFPLFNBQVQsRUFBYjtBQUFxQzNCLHNCQUFjdUI7QUFBbkQsT0FEWSxFQUVaLFFBRlksQ0FBZDs7QUFJQSxhQUNFO0FBQUE7QUFBQSxVQUFNLE9BQVFHLEtBQWQsRUFBc0IsUUFBTyxRQUE3QixFQUFzQyxTQUFTLElBQS9DO0FBQ0U7QUFBQTtBQUFBLFlBQUksT0FBTyxFQUFFQyxPQUFPLFNBQVQsRUFBWDtBQUFBO0FBQW1ELGVBQUtoRCxLQUFMLENBQVdFLGFBQVgsQ0FBeUJnQyxHQUF6QixDQUE2QjtBQUFBLG1CQUFXQyxLQUFLYixFQUFoQjtBQUFBLFdBQTdCO0FBQW5ELFNBREY7QUFFRTtBQUFBO0FBQUEsWUFBSyxXQUFVLGFBQWY7QUFDRSxtREFBTyxNQUFLLE1BQVosRUFBbUIsSUFBRyxRQUF0QixFQUErQixVQUFXO0FBQUEscUJBQU0sT0FBSzFCLGNBQUwsRUFBTjtBQUFBLGFBQTFDLEVBQXdFLEtBQUssYUFBQ3FELEtBQUQsRUFBVztBQUFFLHFCQUFLM0MsSUFBTCxHQUFZMkMsS0FBWjtBQUFvQixhQUE5RyxHQURGO0FBRUU7QUFBQTtBQUFBLGNBQU8sU0FBSSxRQUFYO0FBQUE7QUFBQTtBQUZGLFNBRkY7QUFNRTtBQUFBO0FBQUEsWUFBSyxXQUFVLGdCQUFmO0FBQ0csZUFBS2pELEtBQUwsQ0FBV0MsVUFBWCxDQUFzQmlDLEdBQXRCLENBQTBCO0FBQUEsbUJBQ3pCO0FBQUE7QUFBQSxnQkFBTSxLQUFLUyxNQUFNckIsRUFBakI7QUFDQSx5QkFBUztBQUFBLHlCQUFNLE9BQUs0QixZQUFMLENBQWtCUCxLQUFsQixDQUFOO0FBQUEsaUJBRFQ7QUFFQSwyQkFBV0EsTUFBTU4sT0FBTixHQUFnQixTQUFoQixHQUE0QixFQUZ2QztBQUFBO0FBRTZDTSxvQkFBTVE7QUFGbkQsYUFEeUI7QUFBQSxXQUExQixDQURIO0FBTUU7QUFBQTtBQUFBLGNBQUssV0FBTSxjQUFYO0FBQ0U7QUFBQTtBQUFBLGdCQUFNLFNBQVM7QUFBQSx5QkFBTSxPQUFLcEQsWUFBTCxDQUFrQixNQUFsQixDQUFOO0FBQUEsaUJBQWYsRUFBZ0QsV0FBVSxhQUExRDtBQUFBO0FBQUEsYUFERjtBQUNxRjtBQUFBO0FBQUE7QUFBTyxtQkFBS0MsS0FBTCxDQUFXSSxRQUFYLEdBQXNCO0FBQTdCLGFBRHJGO0FBQzJIO0FBQUE7QUFBQSxnQkFBTSxTQUFTO0FBQUEseUJBQU0sT0FBS0wsWUFBTCxDQUFrQixNQUFsQixDQUFOO0FBQUEsaUJBQWYsRUFBZ0QsV0FBVSxhQUExRDtBQUFBO0FBQUE7QUFEM0g7QUFORixTQU5GO0FBZUU7QUFBQTtBQUFBLFlBQVEsV0FBVSx5Q0FBbEI7QUFDRSxxQkFBUyxLQUFLRCxhQURoQjtBQUFBO0FBQUEsU0FmRjtBQWlCRTtBQUFBO0FBQUEsWUFBRyxXQUFVLG1EQUFiO0FBQ0Esa0JBQUssWUFETDtBQUFBO0FBQUE7QUFqQkYsT0FERjtBQXFCRDs7OztFQXRJa0IsZ0JBQU1zRCxTOztBQXlJM0IsSUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDckQsS0FBRCxFQUFXO0FBQ2pDLFNBQU87QUFDTHFCLG1CQUFlckIsTUFBTXFCO0FBRGhCLEdBQVA7QUFHRCxDQUpEO2tCQUtlLHlCQUFRZ0MsZUFBUixFQUF5QixJQUF6QixFQUErQjNELE1BQS9CLEMiLCJmaWxlIjoiMC44ODk1ODM1YWNiYjI1YmI3MjBjNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgRm9ybSBmcm9tICcuLi9wcmVzZW50YXRpb25hbC9mb3JtJztcbmltcG9ydCBhcGkgZnJvbSAnLi4vaGVscGVycy9hcGknO1xuXG5jbGFzcyBTZWFyY2ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLm9uU2VhcmNoQ2hhbmdlID0gdGhpcy5vblNlYXJjaENoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25GaW5pc2hDbGljayA9IHRoaXMub25GaW5pc2hDbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25QYWdlQ2hhbmdlID0gdGhpcy5vblBhZ2VDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZm91bmRVc2VyczogW10sXG4gICAgICBzZWxlY3RlZFVzZXJzOiBbXSxcbiAgICAgIG5leHRQYWdlOiAyLFxuICAgICAgcHJldlBhZ2U6IDBcbiAgICB9O1xuICB9XG5cbiAgb25QYWdlQ2hhbmdlKHBhZ2UpIHtcbiAgICBpZiAodGhpcy50ZXJtLnZhbHVlLnRyaW0oKSAhPT0gJycpIHtcbiAgICAgIGlmIChwYWdlID09PSAncHJldicpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUucHJldlBhZ2UgPiAwKSB7XG4gICAgICAgICAgdGhpcy5vblNlYXJjaENoYW5nZSh0aGlzLnN0YXRlLnByZXZQYWdlKTtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbmV4dFBhZ2U6IHRoaXMuc3RhdGUubmV4dFBhZ2UgLSAxIH0pO1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcmV2UGFnZTogdGhpcy5zdGF0ZS5wcmV2UGFnZSAtIDEgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMub25TZWFyY2hDaGFuZ2UodGhpcy5zdGF0ZS5uZXh0UGFnZSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBuZXh0UGFnZTogdGhpcy5zdGF0ZS5uZXh0UGFnZSArIDEgfSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcmV2UGFnZTogdGhpcy5zdGF0ZS5wcmV2UGFnZSArIDEgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25GaW5pc2hDbGljayhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XG4gICAgaGVhZGVycy5hcHBlbmQoJ3gtYWNjZXNzLXRva2VuJywgSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpLnRva2VuKTtcbiAgICBhcGkoYHVzZXJzPSR7SlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZS5zZWxlY3RlZFVzZXJzKX1gLCBgL2FwaS9ncm91cHMvJHt0aGlzLnByb3BzLnNlbGVjdGVkR3JvdXAuaWR9L3VzZXIvYCwgJ1BPU1QnLCBoZWFkZXJzKVxuICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICBpZiAocmVzdWx0LmRhdGEubWVzc2FnZSA9PT0gJ21lbWJlcnMgbGlzdCB1cGRhdGVkJykge1xuICAgICAgICBsb2NhdGlvbi5oaXN0b3J5LmJhY2soKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG9uU2VhcmNoQ2hhbmdlKHBhZ2UgPSB0aGlzLnN0YXRlLnByZXZQYWdlICsgMSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBmb3VuZFVzZXJzOiBbXSB9KTtcbiAgICBpZiAodGhpcy50ZXJtLnZhbHVlLnRyaW0oKSAhPT0gJycpIHtcbiAgICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcbiAgICAgIGhlYWRlcnMuYXBwZW5kKCd4LWFjY2Vzcy10b2tlbicsIEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKS50b2tlbik7XG4gICAgICBhcGkobnVsbCwgYC9hcGkvc2VhcmNoLyR7dGhpcy5wcm9wcy5zZWxlY3RlZEdyb3VwLmlkfS8ke3RoaXMudGVybS52YWx1ZS50cmltKCl9LyR7cGFnZSAtIDF9YCwgJ0dFVCcsIGhlYWRlcnMpLnRoZW4oXG4gICAgICAgICh1c2VycykgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXJzKTtcbiAgICAgICAgICBjb25zdCBuVXNlcnMgPSB1c2Vycy5kYXRhLm1hcCgodXNlcikgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZFVzZXJzLm1hcCgoc1VzZXIpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHNVc2VyLmlkID09PSB1c2VyLmlkKSB7XG4gICAgICAgICAgICAgICAgdXNlci5pbmdyb3VwID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gdXNlcnM7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdVU0VSOjo6Pj4+PicsIHVzZXIpO1xuICAgICAgICAgICAgcmV0dXJuIHVzZXI7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvdW5kVXNlcnM6IG5Vc2VycyB9KTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBvblNlbGVjdFVzZXIodXNlcikge1xuICAgIC8vIFJlbW92ZSBmcm9tIHNlbGVjdGVkVXNlcnMgbGlzdCBpZiBpdCBleGlzdHMgdGhlcmVcbiAgICAvLyBvciBBZGQgdG8gc2VsZWN0ZWRVc2VycyBsaXN0XG4gICAgbGV0IGFscmVhZHlTZWxlY3RlZCA9IGZhbHNlO1xuICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRVc2Vycy5tYXAoKHNVc2VyKSA9PiB7XG4gICAgICBpZiAoc1VzZXIuaWQgPT09IHVzZXIuaWQpIHtcbiAgICAgICAgYWxyZWFkeVNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHNVc2VyO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKCdBTFJFQURZIFNFTEVDVEVEOjo6OjonLCBhbHJlYWR5U2VsZWN0ZWQpO1xuICAgIGlmICghYWxyZWFkeVNlbGVjdGVkKSB7XG4gICAgICBjb25zdCBzZWxlY3RlZFVzZXJzID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFVzZXJzLmNvbmNhdCh1c2VyKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZFVzZXJzIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB1c2VycyA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRVc2Vycy5maWx0ZXIoc1VzZXIgPT4gc1VzZXIuaWQgIT09IHVzZXIuaWQpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkVXNlcnM6IHVzZXJzIH0pO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZygnU0VMRUNURUQgVVNFUlM6Ojo6OicsIHRoaXMuc3RhdGUuc2VsZWN0ZWRVc2Vycy5jb25jYXQodXNlcikpO1xuXG4gICAgLy8gZmxpcCB0aGUgaW5ncm91cCB2YWx1ZVxuICAgIGxldCBmb3VuZFVzZXJzID0gT2JqZWN0LmFzc2lnbihbXSwgdGhpcy5zdGF0ZS5mb3VuZFVzZXJzKTtcbiAgICBjb25zb2xlLmxvZyhmb3VuZFVzZXJzKTtcbiAgICBmb3VuZFVzZXJzID0gZm91bmRVc2Vycy5tYXAoKGZVc2VyKSA9PiB7XG4gICAgICBpZiAoZlVzZXIuaWQgPT09IHVzZXIuaWQpIHtcbiAgICAgICAgZlVzZXIuaW5ncm91cCA9ICFmVXNlci5pbmdyb3VwO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZVc2VyO1xuICAgIH0pO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBmb3VuZFVzZXJzIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc2VsZWN0ZWRHcm91cCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zb2xlLmxvZygnU0VMRUNURUQgR1JPVVA6Ojo6Ojo6Jywgc2VsZWN0ZWRHcm91cCk7XG4gICAgaWYgKHNlbGVjdGVkR3JvdXAubmFtZSA9PT0gJycgfHwgc2VsZWN0ZWRHcm91cC5uYW1lID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGxvY2F0aW9uLmhhc2ggPSAnI2Rhc2hib2FyZCc7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCB0aXRsZSA9IFsnQWRkIHVzZXJzIHRvICcsXG4gICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogJyMwMjc1ZDgnIH19Pnsgc2VsZWN0ZWRHcm91cC5uYW1lIH08L3NwYW4+LFxuICAgICAgJyBncm91cCddO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxGb3JtIHRpdGxlPXsgdGl0bGUgfSBhY3RpdmU9J3NlYXJjaCcgaW5ncm91cD17dHJ1ZX0+XG4gICAgICAgIDxoNiBzdHlsZT17eyBjb2xvcjogJyMwMjc1ZDgnIH19PlNlbGVjdGVkIFVzZXJzOiB7IHRoaXMuc3RhdGUuc2VsZWN0ZWRVc2Vycy5tYXAodXNlciA9PiBgJHt1c2VyLmlkfSwgYCkgfTwvaDY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1maWVsZCc+XG4gICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGlkPSdzZWFyY2gnIG9uQ2hhbmdlPXsgKCkgPT4gdGhpcy5vblNlYXJjaENoYW5nZSgpIH0gcmVmPXsoaW5wdXQpID0+IHsgdGhpcy50ZXJtID0gaW5wdXQ7IH19Lz5cbiAgICAgICAgICA8bGFiZWwgZm9yPSdzZWFyY2gnPlNlYXJjaCBieSB1c2VybmFtZTwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VhcmNoLXJlc3VsdHMnPlxuICAgICAgICAgIHt0aGlzLnN0YXRlLmZvdW5kVXNlcnMubWFwKGZVc2VyID0+XG4gICAgICAgICAgICA8c3BhbiBrZXk9e2ZVc2VyLmlkfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5vblNlbGVjdFVzZXIoZlVzZXIpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtmVXNlci5pbmdyb3VwID8gJ2luZ3JvdXAnIDogJyd9PkB7ZlVzZXIudXNlcm5hbWV9PC9zcGFuPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNlYXJjaC1wYWdlc1wiPlxuICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4gdGhpcy5vblBhZ2VDaGFuZ2UoJ3ByZXYnKX0gY2xhc3NOYW1lPVwic2VhcmNoLXByZXZcIj5QcmV2PC9zcGFuPjxzcGFuPnt0aGlzLnN0YXRlLnByZXZQYWdlICsgMX08L3NwYW4+PHNwYW4gb25DbGljaz17KCkgPT4gdGhpcy5vblBhZ2VDaGFuZ2UoJ25leHQnKX0gY2xhc3NOYW1lPVwic2VhcmNoLW5leHRcIj5OZXh0PC9zcGFuPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J3dhdmVzLWVmZmVjdCB3YXZlcy1saWdodCBidG4gYWN0aW9uLWJ0bidcbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uRmluaXNoQ2xpY2t9PkZpbmlzaDwvYnV0dG9uPlxuICAgICAgICA8YSBjbGFzc05hbWU9J3JpZ2h0IHdhdmVzLWVmZmVjdCB3YXZlcy10ZWFsIGJ0bi1mbGF0IGFjdGlvbi1idG4nXG4gICAgICAgIGhyZWY9JyNkYXNoYm9hcmQnPkNhbmNlbDwvYT5cbiAgICAgIDwvRm9ybT4pO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHNlbGVjdGVkR3JvdXA6IHN0YXRlLnNlbGVjdGVkR3JvdXBcbiAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbnVsbCkoU2VhcmNoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9qcy9jb21wb25lbnRzL2NvbnRhaW5lcnMvc2VhcmNoLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==