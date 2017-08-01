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
      children = _ref.children;
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
          _react2.default.createElement(_.SideMenu, null),
          _react2.default.createElement(
            'div',
            { className: 'section page-content align-top pl-0 col m7 l8 xl9' },
            _react2.default.createElement(
              'section',
              { className: 'container' },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9mb3JtLmpzP2NiNmMiXSwibmFtZXMiOlsiRm9ybSIsInRpdGxlIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxPQUFPLFNBQVBBLElBQU87QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxRQUFWLFFBQVVBLFFBQVY7QUFBQSxTQUNiO0FBQUE7QUFBQTtBQUNFLGlEQURGO0FBRUk7QUFBQTtBQUFBLFFBQVMsV0FBVSxnQ0FBbkI7QUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLFdBQWY7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLEtBQWY7QUFDRSx5REFERjtBQUVFO0FBQUE7QUFBQSxjQUFLLFdBQVUsbURBQWY7QUFDRTtBQUFBO0FBQUEsZ0JBQVMsV0FBVSxXQUFuQjtBQUNFO0FBQUE7QUFBQTtBQUFNRDtBQUFOLGVBREY7QUFFRTtBQUFBO0FBQUEsa0JBQUssV0FBVSxLQUFmO0FBQ0U7QUFBQTtBQUFBLG9CQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQSxzQkFBTSxXQUFVLE1BQWhCO0FBQ0lDO0FBREo7QUFERjtBQURGO0FBRkY7QUFERjtBQUZGO0FBREY7QUFERixLQUZKO0FBcUJFO0FBckJGLEdBRGE7QUFBQSxDQUFiOztrQkF5QmVGLEkiLCJmaWxlIjoiMC4yNjJiNTg2NDViMjFjNTZiNTc5Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZvb3RlciwgSGVhZGVyLCBTaWRlTWVudSB9IGZyb20gJy4vJztcblxuY29uc3QgRm9ybSA9ICh7IHRpdGxlLCBjaGlsZHJlbiB9KSA9PlxuPGRpdj5cbiAgPEhlYWRlci8+XG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicGFnZS1jb250YWluZXIgY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIDxTaWRlTWVudS8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uIHBhZ2UtY29udGVudCBhbGlnbi10b3AgcGwtMCBjb2wgbTcgbDggeGw5XCI+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGg1PnsgdGl0bGUgfTwvaDU+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wgczEyIG02Jz5cbiAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT0nZm9ybSc+XG4gICAgICAgICAgICAgICAgICAgIHsgY2hpbGRyZW4gfVxuICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gIDxGb290ZXIvPlxuPC9kaXY+O1xuXG5leHBvcnQgZGVmYXVsdCBGb3JtO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2pzL2NvbXBvbmVudHMvcHJlc2VudGF0aW9uYWwvZm9ybS5qcyJdLCJzb3VyY2VSb290IjoiIn0=