webpackHotUpdate(0,{

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

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
  console.log('USERDATA::::::::::::=====>>>>', user.data);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9oZWFkZXIuanM/MmM1MiJdLCJuYW1lcyI6WyJIZWFkZXIiLCJ1c2VyIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJ0b2tlbiIsInVuZGVmaW5lZCIsInVzZXJuYW1lIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJ1c2VyRGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBLElBQU1BLFNBQVMsU0FBVEEsTUFBUyxPQUFjO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXOztBQUMzQkMsVUFBUUMsR0FBUixDQUFZLDJCQUFaLEVBQXlDRixJQUF6QztBQUNBQyxVQUFRQyxHQUFSLENBQVksK0JBQVosRUFBNkNGLEtBQUtHLElBQWxEO0FBQ0FGLFVBQVFDLEdBQVIsQ0FBWSxnQ0FBWixFQUE4Q0YsS0FBS0ksS0FBbkQ7QUFDQUgsVUFBUUMsR0FBUixDQUFZLCtCQUFaLEVBQTZDRixLQUFLRyxJQUFsRDtBQUNBRixVQUFRQyxHQUFSLENBQVksK0JBQVosRUFBNkNGLEtBQUtHLElBQWxEO0FBQ0EsU0FBUTtBQUFBO0FBQUEsTUFBUSxXQUFVLGFBQWxCO0FBQ0o7QUFBQTtBQUFBLFFBQUssV0FBVSxXQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQ0EscUJBQVUsc0RBRFY7QUFFQSxnQkFBSyxHQUZMO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkEsT0FERjtBQU9JSCxXQUFLRyxJQUFMLEtBQWNFLFNBQWQsR0FBMEIsRUFBMUIsR0FDRjtBQUFBO0FBQUEsVUFBTSxXQUFVLGVBQWhCO0FBQUE7QUFBc0NMLGFBQUtHLElBQUwsQ0FBVUc7QUFBaEQ7QUFSRjtBQURJLEdBQVI7QUFhRCxDQW5CRDs7QUFxQkEsSUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFELEVBQVc7QUFDakMsU0FBTztBQUNMUixVQUFNUSxNQUFNQztBQURQLEdBQVA7QUFHRCxDQUpEO2tCQUtlLHlCQUFRRixlQUFSLEVBQXlCLElBQXpCLEVBQStCUixNQUEvQixDIiwiZmlsZSI6IjAuYjcwMTFmMzdlZDk3ZTc2MDliNTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5jb25zdCBIZWFkZXIgPSAoeyB1c2VyIH0pID0+IHtcbiAgY29uc29sZS5sb2coJ1VTRVI6Ojo6Ojo6Ojo6Ojo9PT09PT4+Pj4nLCB1c2VyKTtcbiAgY29uc29sZS5sb2coJ1VTRVJEQVRBOjo6Ojo6Ojo6Ojo6PT09PT0+Pj4+JywgdXNlci5kYXRhKTtcbiAgY29uc29sZS5sb2coJ1VTRVJUT0tFTjo6Ojo6Ojo6Ojo6Oj09PT09Pj4+PicsIHVzZXIudG9rZW4pO1xuICBjb25zb2xlLmxvZygnVVNFUkRBVEE6Ojo6Ojo6Ojo6Ojo9PT09PT4+Pj4nLCB1c2VyLmRhdGEpO1xuICBjb25zb2xlLmxvZygnVVNFUkRBVEE6Ojo6Ojo6Ojo6Ojo9PT09PT4+Pj4nLCB1c2VyLmRhdGEpO1xuICByZXR1cm4gKDxoZWFkZXIgY2xhc3NOYW1lPVwicGFnZS1oZWFkZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICA8YVxuICAgICAgICBjbGFzc05hbWU9J3BhZ2UtdGl0bGUganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXInXG4gICAgICAgIGhyZWY9XCIjXCI+XG4gICAgICAgIFBvc3RcbiAgICAgICAgPHNwYW4+SXQ8L3NwYW4+XG4gICAgICAgIDwvYT5cbiAgICAgICAgeyB1c2VyLmRhdGEgPT09IHVuZGVmaW5lZCA/ICcnIDpcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidXNlci1ncmVldGluZ1wiPkhpLCB7IHVzZXIuZGF0YS51c2VybmFtZSB9PC9zcGFuPlxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgPC9oZWFkZXI+KTtcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHVzZXI6IHN0YXRlLnVzZXJEYXRhXG4gIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG51bGwpKEhlYWRlcik7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9qcy9jb21wb25lbnRzL3ByZXNlbnRhdGlvbmFsL2hlYWRlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=