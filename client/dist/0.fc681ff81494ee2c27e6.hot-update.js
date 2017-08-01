webpackHotUpdate(0,{

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _ = __webpack_require__(28);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Form = function Form(_ref) {
  var title = _ref.title,
      children = _ref.children,
      active = _ref.active,
      ingroup = _ref.ingroup,
      _ref$sidemenu = _ref.sidemenu,
      sidemenu = _ref$sidemenu === undefined ? true : _ref$sidemenu;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_.Header, null),
    _react2.default.createElement(
      'section',
      { className: 'page-container container-fluid' },
      _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          sidemenu ? _react2.default.createElement(_.SideMenu, { active: active, ingroup: ingroup }) : '',
          _react2.default.createElement(
            'div',
            { className: 'section page-content align-top pl-0 col m7 l8 xl9' },
            _react2.default.createElement(
              'section',
              null,
              _react2.default.createElement(
                'h5',
                null,
                title
              ),
              _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                  'div',
                  { className: 'col s12 m8' },
                  _react2.default.createElement(
                    'form',
                    { className: 'form' },
                    children
                  )
                )
              )
            )
          )
        )
      )
    ),
    _react2.default.createElement(_.Footer, null)
  );
};

exports.default = Form;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9mb3JtLmpzP2NiNmMiXSwibmFtZXMiOlsiRm9ybSIsInRpdGxlIiwiY2hpbGRyZW4iLCJhY3RpdmUiLCJpbmdyb3VwIiwic2lkZW1lbnUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxPQUFPLFNBQVBBLElBQU87QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxRQUFWLFFBQVVBLFFBQVY7QUFBQSxNQUFvQkMsTUFBcEIsUUFBb0JBLE1BQXBCO0FBQUEsTUFBNEJDLE9BQTVCLFFBQTRCQSxPQUE1QjtBQUFBLDJCQUFxQ0MsUUFBckM7QUFBQSxNQUFxQ0EsUUFBckMsaUNBQWdELElBQWhEO0FBQUEsU0FDYjtBQUFBO0FBQUE7QUFDRSxpREFERjtBQUVJO0FBQUE7QUFBQSxRQUFTLFdBQVUsZ0NBQW5CO0FBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxXQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSxLQUFmO0FBQ0lBLHFCQUFXLDRDQUFVLFFBQVNGLE1BQW5CLEVBQTRCLFNBQVNDLE9BQXJDLEdBQVgsR0FBNkQsRUFEakU7QUFFRTtBQUFBO0FBQUEsY0FBSyxXQUFVLG1EQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQU1IO0FBQU4sZUFERjtBQUVFO0FBQUE7QUFBQSxrQkFBSyxXQUFVLEtBQWY7QUFDRTtBQUFBO0FBQUEsb0JBQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBLHNCQUFNLFdBQVUsTUFBaEI7QUFDSUM7QUFESjtBQURGO0FBREY7QUFGRjtBQURGO0FBRkY7QUFERjtBQURGLEtBRko7QUFxQkU7QUFyQkYsR0FEYTtBQUFBLENBQWI7O2tCQXlCZUYsSSIsImZpbGUiOiIwLmZjNjgxZmY4MTQ5NGVlMmMyN2U2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRm9vdGVyLCBIZWFkZXIsIFNpZGVNZW51IH0gZnJvbSAnLi8nO1xuXG5jb25zdCBGb3JtID0gKHsgdGl0bGUsIGNoaWxkcmVuLCBhY3RpdmUsIGluZ3JvdXAsIHNpZGVtZW51ID0gdHJ1ZSB9KSA9PlxuPGRpdj5cbiAgPEhlYWRlci8+XG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicGFnZS1jb250YWluZXIgY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIHsgc2lkZW1lbnUgPyA8U2lkZU1lbnUgYWN0aXZlPXsgYWN0aXZlIH0gaW5ncm91cD17aW5ncm91cH0vPiA6ICcnIH1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24gcGFnZS1jb250ZW50IGFsaWduLXRvcCBwbC0wIGNvbCBtNyBsOCB4bDlcIj5cbiAgICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgICA8aDU+eyB0aXRsZSB9PC9oNT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbCBzMTIgbTgnPlxuICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPSdmb3JtJz5cbiAgICAgICAgICAgICAgICAgICAgeyBjaGlsZHJlbiB9XG4gICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgPEZvb3Rlci8+XG48L2Rpdj47XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9mb3JtLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==