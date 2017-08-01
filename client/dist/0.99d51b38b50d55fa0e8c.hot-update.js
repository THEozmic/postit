webpackHotUpdate(0,{

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(_ref) {
  var user = _ref.user;

  console.log('USER::::::::::::=====>>>>', user);
  console.log('USERDATA::::::::::::=====>>>>', user.data);
  console.log('USERTOKEN::::::::::::=====>>>>', user.token);
  console.log('USERDATA::::::::::::=====>>>>', user.data);
  console.log('USERTYPE::::::::::::=====>>>>', typeof user === 'undefined' ? 'undefined' : _typeof(user));
  return _react2.default.createElement(
    'header',
    { className: 'page-header' },
    _react2.default.createElement(
      'div',
      { className: 'container' },
      _react2.default.createElement(
        'a',
        {
          className: 'page-title justify-content-center align-items-center',
          href: '#' },
        'Post',
        _react2.default.createElement(
          'span',
          null,
          'It'
        )
      ),
      user.data === undefined ? '' : _react2.default.createElement(
        'span',
        { className: 'user-greeting' },
        'Hi, ',
        user.data.username
      )
    )
  );
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.userData
  };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, null)(Header);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9oZWFkZXIuanM/MmM1MiJdLCJuYW1lcyI6WyJIZWFkZXIiLCJ1c2VyIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJ0b2tlbiIsInVuZGVmaW5lZCIsInVzZXJuYW1lIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJ1c2VyRGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUEsSUFBTUEsU0FBUyxTQUFUQSxNQUFTLE9BQWM7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQzNCQyxVQUFRQyxHQUFSLENBQVksMkJBQVosRUFBeUNGLElBQXpDO0FBQ0FDLFVBQVFDLEdBQVIsQ0FBWSwrQkFBWixFQUE2Q0YsS0FBS0csSUFBbEQ7QUFDQUYsVUFBUUMsR0FBUixDQUFZLGdDQUFaLEVBQThDRixLQUFLSSxLQUFuRDtBQUNBSCxVQUFRQyxHQUFSLENBQVksK0JBQVosRUFBNkNGLEtBQUtHLElBQWxEO0FBQ0FGLFVBQVFDLEdBQVIsQ0FBWSwrQkFBWixTQUFvREYsSUFBcEQseUNBQW9EQSxJQUFwRDtBQUNBLFNBQVE7QUFBQTtBQUFBLE1BQVEsV0FBVSxhQUFsQjtBQUNKO0FBQUE7QUFBQSxRQUFLLFdBQVUsV0FBZjtBQUNFO0FBQUE7QUFBQTtBQUNBLHFCQUFVLHNEQURWO0FBRUEsZ0JBQUssR0FGTDtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBLE9BREY7QUFPSUEsV0FBS0csSUFBTCxLQUFjRSxTQUFkLEdBQTBCLEVBQTFCLEdBQ0Y7QUFBQTtBQUFBLFVBQU0sV0FBVSxlQUFoQjtBQUFBO0FBQXNDTCxhQUFLRyxJQUFMLENBQVVHO0FBQWhEO0FBUkY7QUFESSxHQUFSO0FBYUQsQ0FuQkQ7O0FBcUJBLElBQU1DLGtCQUFrQixTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQ2pDLFNBQU87QUFDTFIsVUFBTVEsTUFBTUM7QUFEUCxHQUFQO0FBR0QsQ0FKRDtrQkFLZSx5QkFBUUYsZUFBUixFQUF5QixJQUF6QixFQUErQlIsTUFBL0IsQyIsImZpbGUiOiIwLjk5ZDUxYjM4YjUwZDU1ZmEwZThjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuY29uc3QgSGVhZGVyID0gKHsgdXNlciB9KSA9PiB7XG4gIGNvbnNvbGUubG9nKCdVU0VSOjo6Ojo6Ojo6Ojo6PT09PT0+Pj4+JywgdXNlcik7XG4gIGNvbnNvbGUubG9nKCdVU0VSREFUQTo6Ojo6Ojo6Ojo6Oj09PT09Pj4+PicsIHVzZXIuZGF0YSk7XG4gIGNvbnNvbGUubG9nKCdVU0VSVE9LRU46Ojo6Ojo6Ojo6Ojo9PT09PT4+Pj4nLCB1c2VyLnRva2VuKTtcbiAgY29uc29sZS5sb2coJ1VTRVJEQVRBOjo6Ojo6Ojo6Ojo6PT09PT0+Pj4+JywgdXNlci5kYXRhKTtcbiAgY29uc29sZS5sb2coJ1VTRVJUWVBFOjo6Ojo6Ojo6Ojo6PT09PT0+Pj4+JywgdHlwZW9mIHVzZXIpO1xuICByZXR1cm4gKDxoZWFkZXIgY2xhc3NOYW1lPVwicGFnZS1oZWFkZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICA8YVxuICAgICAgICBjbGFzc05hbWU9J3BhZ2UtdGl0bGUganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXInXG4gICAgICAgIGhyZWY9XCIjXCI+XG4gICAgICAgIFBvc3RcbiAgICAgICAgPHNwYW4+SXQ8L3NwYW4+XG4gICAgICAgIDwvYT5cbiAgICAgICAgeyB1c2VyLmRhdGEgPT09IHVuZGVmaW5lZCA/ICcnIDpcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidXNlci1ncmVldGluZ1wiPkhpLCB7IHVzZXIuZGF0YS51c2VybmFtZSB9PC9zcGFuPlxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgPC9oZWFkZXI+KTtcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHVzZXI6IHN0YXRlLnVzZXJEYXRhXG4gIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG51bGwpKEhlYWRlcik7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9qcy9jb21wb25lbnRzL3ByZXNlbnRhdGlvbmFsL2hlYWRlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=