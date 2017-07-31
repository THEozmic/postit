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
      active = _ref.active;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9mb3JtLmpzP2NiNmMiXSwibmFtZXMiOlsiRm9ybSIsInRpdGxlIiwiY2hpbGRyZW4iLCJhY3RpdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxPQUFPLFNBQVBBLElBQU87QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxRQUFWLFFBQVVBLFFBQVY7QUFBQSxNQUFvQkMsTUFBcEIsUUFBb0JBLE1BQXBCO0FBQUEsU0FDYjtBQUFBO0FBQUE7QUFDRSxpREFERjtBQUVJO0FBQUE7QUFBQSxRQUFTLFdBQVUsZ0NBQW5CO0FBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxXQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSxLQUFmO0FBQ0Usc0RBQVUsUUFBU0EsTUFBbkIsR0FERjtBQUVFO0FBQUE7QUFBQSxjQUFLLFdBQVUsbURBQWY7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBTUY7QUFBTixlQURGO0FBRUU7QUFBQTtBQUFBLGtCQUFLLFdBQVUsS0FBZjtBQUNFO0FBQUE7QUFBQSxvQkFBSyxXQUFVLFlBQWY7QUFDRTtBQUFBO0FBQUEsc0JBQU0sV0FBVSxNQUFoQjtBQUNJQztBQURKO0FBREY7QUFERjtBQUZGO0FBREY7QUFGRjtBQURGO0FBREYsS0FGSjtBQXFCRTtBQXJCRixHQURhO0FBQUEsQ0FBYjs7a0JBeUJlRixJIiwiZmlsZSI6IjAuODIyMjFiYTBiZGQ4ZWEzMDI3OGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGb290ZXIsIEhlYWRlciwgU2lkZU1lbnUgfSBmcm9tICcuLyc7XG5cbmNvbnN0IEZvcm0gPSAoeyB0aXRsZSwgY2hpbGRyZW4sIGFjdGl2ZSB9KSA9PlxuPGRpdj5cbiAgPEhlYWRlci8+XG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicGFnZS1jb250YWluZXIgY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIDxTaWRlTWVudSBhY3RpdmU9eyBhY3RpdmUgfS8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uIHBhZ2UtY29udGVudCBhbGlnbi10b3AgcGwtMCBjb2wgbTcgbDggeGw5XCI+XG4gICAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgICAgPGg1PnsgdGl0bGUgfTwvaDU+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wgczEyIG02Jz5cbiAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT0nZm9ybSc+XG4gICAgICAgICAgICAgICAgICAgIHsgY2hpbGRyZW4gfVxuICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gIDxGb290ZXIvPlxuPC9kaXY+O1xuXG5leHBvcnQgZGVmYXVsdCBGb3JtO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2pzL2NvbXBvbmVudHMvcHJlc2VudGF0aW9uYWwvZm9ybS5qcyJdLCJzb3VyY2VSb290IjoiIn0=