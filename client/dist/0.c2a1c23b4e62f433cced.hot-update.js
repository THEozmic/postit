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
      var users = [{ id: 1, username: '@kobi', ingroup: false }, { id: 2, username: '@sola', ingroup: false }, { id: 3, username: '@akpan', ingroup: false }];

      this.setState({ foundUsers: users });
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
      var _this2 = this;

      var selectedGroup = this.props.selectedGroup;

      if (selectedGroup.name === '') {
        location.hash = 'dashboard';
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
          _react2.default.createElement('input', { type: 'text', id: 'search', onChange: this.onSearchChange, ref: function ref(input) {
              _this2.term = input;
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
                  return _this2.onSelectUser(fUser);
                },
                className: fUser.ingroup ? 'ingroup' : '' },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL3NlYXJjaC5qcz8zZDE2Il0sIm5hbWVzIjpbIlNlYXJjaCIsInByb3BzIiwib25TZWFyY2hDaGFuZ2UiLCJiaW5kIiwic3RhdGUiLCJmb3VuZFVzZXJzIiwic2VsZWN0ZWRVc2VycyIsInVzZXJzIiwiaWQiLCJ1c2VybmFtZSIsImluZ3JvdXAiLCJzZXRTdGF0ZSIsInVzZXIiLCJpbmNsdWRlcyIsImZpbHRlciIsInNVc2VyIiwiY29uY2F0IiwiT2JqZWN0IiwiYXNzaWduIiwiY29uc29sZSIsImxvZyIsIm1hcCIsImZVc2VyIiwic2VsZWN0ZWRHcm91cCIsIm5hbWUiLCJsb2NhdGlvbiIsImhhc2giLCJ0aXRsZSIsImNvbG9yIiwiaW5wdXQiLCJ0ZXJtIiwib25TZWxlY3RVc2VyIiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxNOzs7QUFDSixrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGdIQUNYQSxLQURXOztBQUVqQixVQUFLQyxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0JDLElBQXBCLE9BQXRCO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGtCQUFZLEVBREQ7QUFFWEMscUJBQWU7QUFGSixLQUFiO0FBSGlCO0FBT2xCOzs7O3FDQUVnQjtBQUNmLFVBQU1DLFFBQVEsQ0FDWixFQUFFQyxJQUFJLENBQU4sRUFBU0MsVUFBVSxPQUFuQixFQUE0QkMsU0FBUyxLQUFyQyxFQURZLEVBRVosRUFBRUYsSUFBSSxDQUFOLEVBQVNDLFVBQVUsT0FBbkIsRUFBNEJDLFNBQVMsS0FBckMsRUFGWSxFQUdaLEVBQUVGLElBQUksQ0FBTixFQUFTQyxVQUFVLFFBQW5CLEVBQTZCQyxTQUFTLEtBQXRDLEVBSFksQ0FBZDs7QUFLQSxXQUFLQyxRQUFMLENB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QWI7QUFDRSxrQkFBSyxRQURQO0FBQUE7QUFBQSxTQWJGO0FBZUU7QUFBQTtBQUFBLFlBQUcsV0FBVSxtREFBYjtBQUNBLGtCQUFLLFlBREw7QUFBQTtBQUFBO0FBZkYsT0FERjtBQW1CRDs7OztFQXJFa0IsZ0JBQU11QixTOztBQXdFM0IsSUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDN0IsS0FBRCxFQUFXO0FBQ2pDLFNBQU87QUFDTG1CLG1CQUFlbkIsTUFBTW1CO0FBRGhCLEdBQVA7QUFHRCxDQUpEO2tCQUtlLHlCQUFRVSxlQUFSLEVBQXlCLElBQXpCLEVBQStCakMsTUFBL0IsQyIsImZpbGUiOiIwLmMyYTFjMjNiNGU2MmY0MzNjY2VkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBGb3JtIGZyb20gJy4uL3ByZXNlbnRhdGlvbmFsL2Zvcm0nO1xuXG5jbGFzcyBTZWFyY2ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLm9uU2VhcmNoQ2hhbmdlID0gdGhpcy5vblNlYXJjaENoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBmb3VuZFVzZXJzOiBbXSxcbiAgICAgIHNlbGVjdGVkVXNlcnM6IFtdXG4gICAgfTtcbiAgfVxuXG4gIG9uU2VhcmNoQ2hhbmdlKCkge1xuICAgIGNvbnN0IHVzZXJzID0gW1xuICAgICAgeyBpZDogMSwgdXNlcm5hbWU6ICdAa29iaScsIGluZ3JvdXA6IGZhbHNlIH0sXG4gICAgICB7IGlkOiAyLCB1c2VybmFtZTogJ0Bzb2xhJywgaW5ncm91cDogZmFsc2UgfSxcbiAgICAgIHsgaWQ6IDMsIHVzZXJuYW1lOiAnQGFrcGFuJywgaW5ncm91cDogZmFsc2UgfV07XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgZm91bmRVc2VyczogdXNlcnMgfSk7XG4gIH1cblxuICBvblNlbGVjdFVzZXIodXNlcikge1xuICAgIC8vIFJlbW92ZSBmcm9tIHNlbGVjdGVkVXNlcnMgbGlzdCBpZiBpdCBleGlzdHMgdGhlcmVcbiAgICAvLyBvciBBZGQgdG8gc2VsZWN0ZWRVc2VycyBsaXN0XG4gICAgaWYgKHRoaXMuc3RhdGUuc2VsZWN0ZWRVc2Vycy5pbmNsdWRlcyh1c2VyKSkge1xuICAgICAgY29uc3QgdXNlcnMgPSB0aGlzLnN0YXRlLnNlbGVjdGVkVXNlcnMuZmlsdGVyKHNVc2VyID0+IHNVc2VyLmlkICE9PSB1c2VyLmlkKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZFVzZXJzOiB1c2VycyB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdXNlcnMgPSB0aGlzLnN0YXRlLnNlbGVjdGVkVXNlcnMuY29uY2F0KHVzZXIpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkVXNlcnM6IHVzZXJzIH0pO1xuICAgIH1cblxuICAgIC8vIGZsaXAgdGhlIGluZ3JvdXAgdmFsdWVcbiAgICBsZXQgZm91bmRVc2VycyA9IE9iamVjdC5hc3NpZ24oW10sIHRoaXMuc3RhdGUuZm91bmRVc2Vycyk7XG4gICAgY29uc29sZS5sb2coZm91bmRVc2Vycyk7XG4gICAgZm91bmRVc2VycyA9IGZvdW5kVXNlcnMubWFwKChmVXNlcikgPT4ge1xuICAgICAgaWYgKGZVc2VyLmlkID09PSB1c2VyLmlkKSB7XG4gICAgICAgIGZVc2VyLmluZ3JvdXAgPSAhZlVzZXIuaW5ncm91cDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmVXNlcjtcbiAgICB9KTtcbiAgICB0aGlzLnNldFN0YXRlKHsgZm91bmRVc2VycyB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHNlbGVjdGVkR3JvdXAgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKHNlbGVjdGVkR3JvdXAubmFtZSA9PT0gJycpIHtcbiAgICAgIGxvY2F0aW9uLmhhc2ggPSAnZGFzaGJvYXJkJztcbiAgICB9XG5cbiAgICBjb25zdCB0aXRsZSA9IFsnQWRkIHVzZXJzIHRvICcsXG4gICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogJyMwMjc1ZDgnIH19Pnsgc2VsZWN0ZWRHcm91cC5uYW1lIH08L3NwYW4+LCAnIGdyb3VwJ107XG4gICAgcmV0dXJuIChcbiAgICAgIDxGb3JtIHRpdGxlPXsgdGl0bGUgfSBhY3RpdmU9J3NlYXJjaCcgaW5ncm91cD17dHJ1ZX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1maWVsZCc+XG4gICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGlkPSdzZWFyY2gnIG9uQ2hhbmdlPXsgdGhpcy5vblNlYXJjaENoYW5nZSB9IHJlZj17KGlucHV0KSA9PiB7IHRoaXMudGVybSA9IGlucHV0OyB9fS8+XG4gICAgICAgICAgPGxhYmVsIGZvcj0nc2VhcmNoJz5TZWFyY2ggYnkgdXNlcm5hbWU8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlYXJjaC1yZXN1bHRzJz5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5mb3VuZFVzZXJzLm1hcChmVXNlciA9PlxuICAgICAgICAgICAgPHNwYW4ga2V5PXtmVXNlci5pZH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMub25TZWxlY3RVc2VyKGZVc2VyKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17ZlVzZXIuaW5ncm91cCA/ICdpbmdyb3VwJyA6ICcnfT57ZlVzZXIudXNlcm5hbWV9PC9zcGFuPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNlYXJjaC1wYWdlc1wiPjxhIGhyZWY9XCIjLzFcIiBjbGFzc05hbWU9XCJzZWFyY2gtcHJldlwiPlByZXY8L2E+PGEgaHJlZj1cIiMvMlwiPjI8L2E+PGEgaHJlZj1cIiMvM1wiIGNsYXNzTmFtZT1cInNlYXJjaC1uZXh0XCI+TmV4dDwvYT48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxhIGNsYXNzTmFtZT0nd2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0IGJ0biBhY3Rpb24tYnRuJ1xuICAgICAgICAgIGhyZWY9JyNncm91cCc+RmluaXNoPC9hPlxuICAgICAgICA8YSBjbGFzc05hbWU9J3JpZ2h0IHdhdmVzLWVmZmVjdCB3YXZlcy10ZWFsIGJ0bi1mbGF0IGFjdGlvbi1idG4nXG4gICAgICAgIGhyZWY9JyNkYXNoYm9hcmQnPkNhbmNlbDwvYT5cbiAgICAgIDwvRm9ybT4pO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHNlbGVjdGVkR3JvdXA6IHN0YXRlLnNlbGVjdGVkR3JvdXBcbiAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbnVsbCkoU2VhcmNoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9qcy9jb21wb25lbnRzL2NvbnRhaW5lcnMvc2VhcmNoLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==