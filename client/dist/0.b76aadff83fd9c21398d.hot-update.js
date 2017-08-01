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
      ingroup = _ref.ingroup;
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
          _react2.default.createElement(_.SideMenu, { active: active }),
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
                  { className: 'col s12 m6' },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9mb3JtLmpzP2NiNmMiXSwibmFtZXMiOlsiRm9ybSIsInRpdGxlIiwiY2hpbGRyZW4iLCJhY3RpdmUiLCJpbmdyb3VwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUEsSUFBTUEsT0FBTyxTQUFQQSxJQUFPO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsUUFBVixRQUFVQSxRQUFWO0FBQUEsTUFBb0JDLE1BQXBCLFFBQW9CQSxNQUFwQjtBQUFBLE1BQTRCQyxPQUE1QixRQUE0QkEsT0FBNUI7QUFBQSxTQUNiO0FBQUE7QUFBQTtBQUNFLGlEQURGO0FBRUk7QUFBQTtBQUFBLFFBQVMsV0FBVSxnQ0FBbkI7QUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLFdBQWY7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLEtBQWY7QUFDRSxzREFBVSxRQUFTRCxNQUFuQixHQURGO0FBRUU7QUFBQTtBQUFBLGNBQUssV0FBVSxtREFBZjtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFNRjtBQUFOLGVBREY7QUFFRTtBQUFBO0FBQUEsa0JBQUssV0FBVSxLQUFmO0FBQ0U7QUFBQTtBQUFBLG9CQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQSxzQkFBTSxXQUFVLE1BQWhCO0FBQ0lDO0FBREo7QUFERjtBQURGO0FBRkY7QUFERjtBQUZGO0FBREY7QUFERixLQUZKO0FBcUJFO0FBckJGLEdBRGE7QUFBQSxDQUFiOztrQkF5QmVGLEkiLCJmaWxlIjoiMC5iNzZhYWRmZjgzZmQ5YzIxMzk4ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZvb3RlciwgSGVhZGVyLCBTaWRlTWVudSB9IGZyb20gJy4vJztcblxuY29uc3QgRm9ybSA9ICh7IHRpdGxlLCBjaGlsZHJlbiwgYWN0aXZlLCBpbmdyb3VwIH0pID0+XG48ZGl2PlxuICA8SGVhZGVyLz5cbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwYWdlLWNvbnRhaW5lciBjb250YWluZXItZmx1aWRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgPFNpZGVNZW51IGFjdGl2ZT17IGFjdGl2ZSB9Lz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24gcGFnZS1jb250ZW50IGFsaWduLXRvcCBwbC0wIGNvbCBtNyBsOCB4bDlcIj5cbiAgICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgICA8aDU+eyB0aXRsZSB9PC9oNT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbCBzMTIgbTYnPlxuICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPSdmb3JtJz5cbiAgICAgICAgICAgICAgICAgICAgeyBjaGlsZHJlbiB9XG4gICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgPEZvb3Rlci8+XG48L2Rpdj47XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9mb3JtLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==