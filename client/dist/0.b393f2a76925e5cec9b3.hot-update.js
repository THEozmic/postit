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
    key: 'render',
    value: function render() {
      var _this3 = this;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL3NlYXJjaC5qcz8zZDE2Il0sIm5hbWVzIjpbIlNlYXJjaCIsInByb3BzIiwib25TZWFyY2hDaGFuZ2UiLCJiaW5kIiwib25GaW5pc2hDbGljayIsIm9uUGFnZUNoYW5nZSIsInN0YXRlIiwiZm91bmRVc2VycyIsInNlbGVjdGVkVXNlcnMiLCJuZXh0UGFnZSIsInByZXZQYWdlIiwicGFnZSIsInRlcm0iLCJ2YWx1ZSIsInRyaW0iLCJzZXRTdGF0ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIkpTT04iLCJzdHJpbmdpZnkiLCJzZWxlY3RlZEdyb3VwIiwiaWQiLCJ0aGVuIiwicmVzdWx0IiwiZGF0YSIsIm1lc3NhZ2UiLCJoaXN0b3J5IiwiYmFjayIsInVzZXJzIiwiY29uc29sZSIsImxvZyIsIm5Vc2VycyIsIm1hcCIsInVzZXIiLCJzVXNlciIsImluZ3JvdXAiLCJhbHJlYWR5U2VsZWN0ZWQiLCJjb25jYXQiLCJmaWx0ZXIiLCJPYmplY3QiLCJhc3NpZ24iLCJmVXNlciIsIm5hbWUiLCJ1bmRlZmluZWQiLCJsb2NhdGlvbiIsImhhc2giLCJ0aXRsZSIsImNvbG9yIiwiaW5wdXQiLCJvblNlbGVjdFVzZXIiLCJ1c2VybmFtZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxNOzs7QUFDSixrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGdIQUNYQSxLQURXOztBQUVqQixVQUFLQyxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0JDLElBQXBCLE9BQXRCO0FBQ0EsVUFBS0MsYUFBTCxHQUFxQixNQUFLQSxhQUFMLENBQW1CRCxJQUFuQixPQUFyQjtBQUNBLFVBQUtFLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkYsSUFBbEIsT0FBcEI7QUFDQSxVQUFLRyxLQUFMLEdBQWE7QUFDWEMsa0JBQVksRUFERDtBQUVYQyxxQkFBZSxFQUZKO0FBR1hDLGdCQUFVLENBSEM7QUFJWEMsZ0JBQVU7QUFKQyxLQUFiO0FBTGlCO0FBV2xCOzs7O2lDQUVZQyxJLEVBQU07QUFDakIsVUFBSSxLQUFLQyxJQUFMLENBQVVDLEtBQVYsQ0FBZ0JDLElBQWhCLE9BQTJCLEVBQS9CLEVBQW1DO0FBQ2pDLFlBQUlILFNBQVMsTUFBYixFQUFxQjtBQUNuQixjQUFJLEtBQUtMLEtBQUwsQ0FBV0ksUUFBWCxHQUFzQixDQUExQixFQUE2QjtBQUMzQixpQkFBS1IsY0FBTCxDQUFvQixLQUFLSSxLQUFMLENBQVdJLFFBQS9CO0FBQ0EsaUJBQUtLLFFBQUwsQ0FBYyxFQUFFTixVQUFVLEtBQUtILEtBQUwsQ0FBV0csUUFBWCxHQUFzQixDQUFsQyxFQUFkO0FBQ0EsaUJBQUtNLFFBQUwsQ0FBYyxFQUFFTCxVQUFVLEtBQUtKLEtBQUwsQ0FBV0ksUUFBWCxHQUFzQixDQUFsQyxFQUFkO0FBQ0Q7QUFDRixTQU5ELE1BTU87QUFDTCxlQUFLUixjQUFMLENBQW9CLEtBQUtJLEtBQUwsQ0FBV0csUUFBL0I7QUFDQSxlQUFLTSxRQUFMLENBQWMsRUFBRU4sVUFBVSxLQUFLSCxLQUFMLENBQVdHLFFBQVgsR0FBc0IsQ0FBbEMsRUFBZDtBQUNBLGVBQUtNLFFBQUwsQ0FBYyxFQUFFTCxVQUFVLEtBQUtKLEtBQUwsQ0FBV0ksUUFBWCxHQUFzQixDQUFsQyxFQUFkO0FBQ0Q7QUFDRjtBQUNGOzs7a0NBRWFNLEMsRUFBRztBQUNmQSxRQUFFQyxjQUFGO0FBQ0Esb0NBQWFDLEtBQUtDLFNBQUwsQ0FBZSxLQUFLYixLQUFMLENBQVdFLGFBQTFCLENBQWIsbUJBQXdFLEtBQUtZLGFBQUwsQ0FBbUJDLEVBQTNGLGFBQXVHLE1BQXZHLEVBQ0NDLElBREQsQ0FDTSxVQUFDQyxNQUFELEVBQVk7QUFDaEIsWUFBSUEsT0FBT0MsSUFBUCxDQUFZQyxPQUFaLEtBQXdCLGNBQXhCLElBQTBDRixPQUFPQyxJQUFQLENBQVlDLE9BQVosS0FBd0IsWUFBdEUsRUFBb0Y7QUFDbEZDLGtCQUFRQyxJQUFSO0FBQ0Q7QUFDRixPQUxEO0FBTUQ7OztxQ0FFOEM7QUFBQTs7QUFBQSxVQUFoQ2hCLElBQWdDLHVFQUF6QixLQUFLTCxLQUFMLENBQVdJLFFBQVgsR0FBc0IsQ0FBRzs7QUFDN0MsV0FBS0ssUUFBTCxDQUFjLEVBQUVSLFlBQVksRUFBZCxFQUFkO0FBQ0EsVUFBSSxLQUFLSyxJQUFMLENBQVVDLEtBQVYsQ0FBZ0JDLElBQWhCLE9BQTJCLEVBQS9CLEVBQW1DO0FBQ2pDLDJCQUFJLElBQUosbUJBQXlCLEtBQUtNLGFBQUwsQ0FBbUJDLEVBQTVDLFNBQWtELEtBQUtULElBQUwsQ0FBVUMsS0FBVixDQUFnQkMsSUFBaEIsRUFBbEQsVUFBNEVILE9BQU8sQ0FBbkYsR0FBd0YsS0FBeEYsRUFBK0ZXLElBQS9GLENBQ0UsVUFBQ00sS0FBRCxFQUFXO0FBQ1RDLGtCQUFRQyxHQUFSLENBQVlGLEtBQVo7QUFDQSxjQUFNRyxTQUFTSCxNQUFNSixJQUFOLENBQVdRLEdBQVgsQ0FBZSxVQUFDQyxJQUFELEVBQVU7QUFDdEMsbUJBQUszQixLQUFMLENBQVdFLGFBQVgsQ0FBeUJ3QixHQUF6QixDQUE2QixVQUFDRSxLQUFELEVBQVc7QUFDdEMsa0JBQUlBLE1BQU1iLEVBQU4sS0FBYVksS0FBS1osRUFBdEIsRUFBMEI7QUFDeEJZLHFCQUFLRSxPQUFMLEdBQWUsSUFBZjtBQUNEO0FBQ0QscUJBQU9QLEtBQVA7QUFDRCxhQUxEO0FBTUFDLG9CQUFRQyxHQUFSLENBQVksYUFBWixFQUEyQkcsSUFBM0I7QUFDQSxtQkFBT0EsSUFBUDtBQUNELFdBVGMsQ0FBZjtBQVVBLGlCQUFLbEIsUUFBTCxDQUFjLEVBQUVSLFlBQVl3QixNQUFkLEVBQWQ7QUFDRCxTQWRIO0FBZ0JEO0FBQ0Y7OztpQ0FFWUUsSSxFQUFNO0FBQ2pCLFVBQUlHLGtCQUFrQixLQUF0QjtBQUNBLFdBQUs5QixLQUFMLENBQVdFLGFBQVgsQ0FBeUJ3QixHQUF6QixDQUE2QixVQUFDRSxLQUFELEVBQVc7QUFDdEMsWUFBSUEsTUFBTWIsRUFBTixLQUFhWSxLQUFLWixFQUF0QixFQUEwQjtBQUN4QmUsNEJBQWtCLElBQWxCO0FBQ0EsaUJBQU9GLEtBQVA7QUFDRDtBQUNELGVBQU8sS0FBUDtBQUNELE9BTkQ7QUFPQSxVQUFJLENBQUNFLGVBQUwsRUFBc0I7QUFDcEIsWUFBTTVCLGdCQUFnQixLQUFLRixLQUFMLENBQVdFLGFBQVgsQ0FBeUI2QixNQUF6QixDQUFnQ0osSUFBaEMsQ0FBdEI7QUFDQSxhQUFLbEIsUUFBTCxDQUFjLEVBQUVQLDRCQUFGLEVBQWQ7QUFDRCxPQUhELE1BR087QUFDTCxZQUFNb0IsUUFBUSxLQUFLdEIsS0FBTCxDQUFXRSxhQUFYLENBQXlCOEIsTUFBekIsQ0FBZ0M7QUFBQSxpQkFBU0osTUFBTWIsRUFBTixLQUFhWSxLQUFLWixFQUEzQjtBQUFBLFNBQWhDLENBQWQ7QUFDQSxhQUFLTixRQUFMLENBQWMsRUFBRVAsZUFBZW9CLEtBQWpCLEVBQWQ7QUFDRDs7QUFFRDtBQUNBLFVBQUlyQixhQUFhZ0MsT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0IsS0FBS2xDLEtBQUwsQ0FBV0MsVUFBN0IsQ0FBakI7QUFDQUEsbUJBQWFBLFdBQVd5QixHQUFYLENBQWUsVUFBQ1MsS0FBRCxFQUFXO0FBQ3JDLFlBQUlBLE1BQU1wQixFQUFOLEtBQWFZLEtBQUtaLEVBQXRCLEVBQTBCO0FBQ3hCb0IsZ0JBQU1OLE9BQU4sR0FBZ0IsQ0FBQ00sTUFBTU4sT0FBdkI7QUFDRDtBQUNELGVBQU9NLEtBQVA7QUFDRCxPQUxZLENBQWI7QUFNQSxXQUFLMUIsUUFBTCxDQUFjLEVBQUVSLHNCQUFGLEVBQWQ7QUFDRDs7OzZCQUVRO0FBQUE7O0FBRVAsVUFBSWEsY0FBY3NCLElBQWQsS0FBdUIsRUFBdkIsSUFBNkJ0QixjQUFjc0IsSUFBZCxLQUF1QkMsU0FBeEQsRUFBbUU7QUFDakVDLGlCQUFTQyxJQUFULEdBQWdCLFlBQWhCO0FBQ0EsZUFBTyxJQUFQO0FBQ0Q7O0FBRUQsVUFBTUMsUUFBUSxDQUFDLGVBQUQsRUFDWjtBQUFBO0FBQUEsVUFBTSxPQUFPLEVBQUVDLE9BQU8sU0FBVCxFQUFiO0FBQXFDM0Isc0JBQWNzQjtBQUFuRCxPQURZLEVBRVosUUFGWSxDQUFkOztBQUlBLGFBQ0U7QUFBQTtBQUFBLFVBQU0sT0FBUUksS0FBZCxFQUFzQixRQUFPLFFBQTdCLEVBQXNDLFNBQVMsSUFBL0M7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLGFBQWY7QUFDRSxtREFBTyxNQUFLLE1BQVosRUFBbUIsSUFBRyxRQUF0QixFQUErQixVQUFXO0FBQUEscUJBQU0sT0FBSzVDLGNBQUwsRUFBTjtBQUFBLGFBQTFDLEVBQXdFLEtBQUssYUFBQzhDLEtBQUQsRUFBVztBQUFFLHFCQUFLcEMsSUFBTCxHQUFZb0MsS0FBWjtBQUFvQixhQUE5RyxHQURGO0FBRUU7QUFBQTtBQUFBLGNBQU8sU0FBSSxRQUFYO0FBQUE7QUFBQTtBQUZGLFNBREY7QUFLRTtBQUFBO0FBQUEsWUFBSyxXQUFVLGdCQUFmO0FBQ0csZUFBSzFDLEtBQUwsQ0FBV0MsVUFBWCxDQUFzQnlCLEdBQXRCLENBQTBCO0FBQUEsbUJBQ3pCO0FBQUE7QUFBQSxnQkFBTSxLQUFLUyxNQUFNcEIsRUFBakI7QUFDQSx5QkFBUztBQUFBLHlCQUFNLE9BQUs0QixZQUFMLENBQWtCUixLQUFsQixDQUFOO0FBQUEsaUJBRFQ7QUFFQSwyQkFBV0EsTUFBTU4sT0FBTixHQUFnQixTQUFoQixHQUE0QixFQUZ2QztBQUFBO0FBRTZDTSxvQkFBTVM7QUFGbkQsYUFEeUI7QUFBQSxXQUExQixDQURIO0FBTUU7QUFBQTtBQUFBLGNBQUssV0FBTSxjQUFYO0FBQ0U7QUFBQTtBQUFBLGdCQUFNLFNBQVM7QUFBQSx5QkFBTSxPQUFLN0MsWUFBTCxDQUFrQixNQUFsQixDQUFOO0FBQUEsaUJBQWYsRUFBZ0QsV0FBVSxhQUExRDtBQUFBO0FBQUEsYUFERjtBQUNxRjtBQUFBO0FBQUE7QUFBTyxtQkFBS0MsS0FBTCxDQUFXSSxRQUFYLEdBQXNCO0FBQTdCLGFBRHJGO0FBQzJIO0FBQUE7QUFBQSxnQkFBTSxTQUFTO0FBQUEseUJBQU0sT0FBS0wsWUFBTCxDQUFrQixNQUFsQixDQUFOO0FBQUEsaUJBQWYsRUFBZ0QsV0FBVSxhQUExRDtBQUFBO0FBQUE7QUFEM0g7QUFORixTQUxGO0FBY0U7QUFBQTtBQUFBLFlBQVEsV0FBVSx5Q0FBbEI7QUFDRSxxQkFBUyxLQUFLRCxhQURoQjtBQUFBO0FBQUEsU0FkRjtBQWdCRTtBQUFBO0FBQUEsWUFBRyxXQUFVLG1EQUFiO0FBQ0Esa0JBQUssWUFETDtBQUFBO0FBQUE7QUFoQkYsT0FERjtBQW9CRDs7OztFQXpIa0IsZ0JBQU0rQyxTOztrQkE0SFpuRCxNIiwiZmlsZSI6IjAuYjM5M2YyYTc2OTI1ZTVjZWM5YjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRm9ybSBmcm9tICcuLi9wcmVzZW50YXRpb25hbC9mb3JtJztcbmltcG9ydCBhcGkgZnJvbSAnLi4vaGVscGVycy9hcGknO1xuXG5jbGFzcyBTZWFyY2ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLm9uU2VhcmNoQ2hhbmdlID0gdGhpcy5vblNlYXJjaENoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25GaW5pc2hDbGljayA9IHRoaXMub25GaW5pc2hDbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25QYWdlQ2hhbmdlID0gdGhpcy5vblBhZ2VDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZm91bmRVc2VyczogW10sXG4gICAgICBzZWxlY3RlZFVzZXJzOiBbXSxcbiAgICAgIG5leHRQYWdlOiAyLFxuICAgICAgcHJldlBhZ2U6IDBcbiAgICB9O1xuICB9XG5cbiAgb25QYWdlQ2hhbmdlKHBhZ2UpIHtcbiAgICBpZiAodGhpcy50ZXJtLnZhbHVlLnRyaW0oKSAhPT0gJycpIHtcbiAgICAgIGlmIChwYWdlID09PSAncHJldicpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUucHJldlBhZ2UgPiAwKSB7XG4gICAgICAgICAgdGhpcy5vblNlYXJjaENoYW5nZSh0aGlzLnN0YXRlLnByZXZQYWdlKTtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbmV4dFBhZ2U6IHRoaXMuc3RhdGUubmV4dFBhZ2UgLSAxIH0pO1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcmV2UGFnZTogdGhpcy5zdGF0ZS5wcmV2UGFnZSAtIDEgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMub25TZWFyY2hDaGFuZ2UodGhpcy5zdGF0ZS5uZXh0UGFnZSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBuZXh0UGFnZTogdGhpcy5zdGF0ZS5uZXh0UGFnZSArIDEgfSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcmV2UGFnZTogdGhpcy5zdGF0ZS5wcmV2UGFnZSArIDEgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25GaW5pc2hDbGljayhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGFwaShgdXNlcnM9JHtKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlLnNlbGVjdGVkVXNlcnMpfWAsIGAvYXBpL2dyb3Vwcy8ke3RoaXMuc2VsZWN0ZWRHcm91cC5pZH0vdXNlci9gLCAnUE9TVCcpXG4gICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgaWYgKHJlc3VsdC5kYXRhLm1lc3NhZ2UgPT09ICd1c2VyIHJlbW92ZWQnIHx8IHJlc3VsdC5kYXRhLm1lc3NhZ2UgPT09ICd1c2VyIGFkZGVkJykge1xuICAgICAgICBoaXN0b3J5LmJhY2soKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG9uU2VhcmNoQ2hhbmdlKHBhZ2UgPSB0aGlzLnN0YXRlLnByZXZQYWdlICsgMSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBmb3VuZFVzZXJzOiBbXSB9KTtcbiAgICBpZiAodGhpcy50ZXJtLnZhbHVlLnRyaW0oKSAhPT0gJycpIHtcbiAgICAgIGFwaShudWxsLCBgL2FwaS9zZWFyY2gvJHt0aGlzLnNlbGVjdGVkR3JvdXAuaWR9LyR7dGhpcy50ZXJtLnZhbHVlLnRyaW0oKX0vJHtwYWdlIC0gMX1gLCAnR0VUJykudGhlbihcbiAgICAgICAgKHVzZXJzKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2codXNlcnMpO1xuICAgICAgICAgIGNvbnN0IG5Vc2VycyA9IHVzZXJzLmRhdGEubWFwKCh1c2VyKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkVXNlcnMubWFwKChzVXNlcikgPT4ge1xuICAgICAgICAgICAgICBpZiAoc1VzZXIuaWQgPT09IHVzZXIuaWQpIHtcbiAgICAgICAgICAgICAgICB1c2VyLmluZ3JvdXAgPSB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiB1c2VycztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1VTRVI6Ojo+Pj4+JywgdXNlcik7XG4gICAgICAgICAgICByZXR1cm4gdXNlcjtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZm91bmRVc2VyczogblVzZXJzIH0pO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIG9uU2VsZWN0VXNlcih1c2VyKSB7XG4gICAgbGV0IGFscmVhZHlTZWxlY3RlZCA9IGZhbHNlO1xuICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRVc2Vycy5tYXAoKHNVc2VyKSA9PiB7XG4gICAgICBpZiAoc1VzZXIuaWQgPT09IHVzZXIuaWQpIHtcbiAgICAgICAgYWxyZWFkeVNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHNVc2VyO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICAgIGlmICghYWxyZWFkeVNlbGVjdGVkKSB7XG4gICAgICBjb25zdCBzZWxlY3RlZFVzZXJzID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFVzZXJzLmNvbmNhdCh1c2VyKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZFVzZXJzIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB1c2VycyA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRVc2Vycy5maWx0ZXIoc1VzZXIgPT4gc1VzZXIuaWQgIT09IHVzZXIuaWQpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkVXNlcnM6IHVzZXJzIH0pO1xuICAgIH1cblxuICAgIC8vIGZsaXAgdGhlIGluZ3JvdXAgdmFsdWVcbiAgICBsZXQgZm91bmRVc2VycyA9IE9iamVjdC5hc3NpZ24oW10sIHRoaXMuc3RhdGUuZm91bmRVc2Vycyk7XG4gICAgZm91bmRVc2VycyA9IGZvdW5kVXNlcnMubWFwKChmVXNlcikgPT4ge1xuICAgICAgaWYgKGZVc2VyLmlkID09PSB1c2VyLmlkKSB7XG4gICAgICAgIGZVc2VyLmluZ3JvdXAgPSAhZlVzZXIuaW5ncm91cDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmVXNlcjtcbiAgICB9KTtcbiAgICB0aGlzLnNldFN0YXRlKHsgZm91bmRVc2VycyB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBcbiAgICBpZiAoc2VsZWN0ZWRHcm91cC5uYW1lID09PSAnJyB8fCBzZWxlY3RlZEdyb3VwLm5hbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgbG9jYXRpb24uaGFzaCA9ICcjZGFzaGJvYXJkJztcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHRpdGxlID0gWydBZGQgdXNlcnMgdG8gJyxcbiAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiAnIzAyNzVkOCcgfX0+eyBzZWxlY3RlZEdyb3VwLm5hbWUgfTwvc3Bhbj4sXG4gICAgICAnIGdyb3VwJ107XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEZvcm0gdGl0bGU9eyB0aXRsZSB9IGFjdGl2ZT0nc2VhcmNoJyBpbmdyb3VwPXt0cnVlfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2lucHV0LWZpZWxkJz5cbiAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgaWQ9J3NlYXJjaCcgb25DaGFuZ2U9eyAoKSA9PiB0aGlzLm9uU2VhcmNoQ2hhbmdlKCkgfSByZWY9eyhpbnB1dCkgPT4geyB0aGlzLnRlcm0gPSBpbnB1dDsgfX0vPlxuICAgICAgICAgIDxsYWJlbCBmb3I9J3NlYXJjaCc+U2VhcmNoIGJ5IHVzZXJuYW1lPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWFyY2gtcmVzdWx0cyc+XG4gICAgICAgICAge3RoaXMuc3RhdGUuZm91bmRVc2Vycy5tYXAoZlVzZXIgPT5cbiAgICAgICAgICAgIDxzcGFuIGtleT17ZlVzZXIuaWR9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLm9uU2VsZWN0VXNlcihmVXNlcil9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2ZVc2VyLmluZ3JvdXAgPyAnaW5ncm91cCcgOiAnJ30+QHtmVXNlci51c2VybmFtZX08L3NwYW4+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VhcmNoLXBhZ2VzXCI+XG4gICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB0aGlzLm9uUGFnZUNoYW5nZSgncHJldicpfSBjbGFzc05hbWU9XCJzZWFyY2gtcHJldlwiPlByZXY8L3NwYW4+PHNwYW4+e3RoaXMuc3RhdGUucHJldlBhZ2UgKyAxfTwvc3Bhbj48c3BhbiBvbkNsaWNrPXsoKSA9PiB0aGlzLm9uUGFnZUNoYW5nZSgnbmV4dCcpfSBjbGFzc05hbWU9XCJzZWFyY2gtbmV4dFwiPk5leHQ8L3NwYW4+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nd2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0IGJ0biBhY3Rpb24tYnRuJ1xuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25GaW5pc2hDbGlja30+RmluaXNoPC9idXR0b24+XG4gICAgICAgIDxhIGNsYXNzTmFtZT0ncmlnaHQgd2F2ZXMtZWZmZWN0IHdhdmVzLXRlYWwgYnRuLWZsYXQgYWN0aW9uLWJ0bidcbiAgICAgICAgaHJlZj0nI2Rhc2hib2FyZCc+Q2FuY2VsPC9hPlxuICAgICAgPC9Gb3JtPik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2pzL2NvbXBvbmVudHMvY29udGFpbmVycy9zZWFyY2guanMiXSwic291cmNlUm9vdCI6IiJ9