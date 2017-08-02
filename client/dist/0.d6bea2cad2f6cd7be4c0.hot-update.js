webpackHotUpdate(0,{

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(71);

var _selectedGroup = __webpack_require__(142);

var _selectedGroup2 = _interopRequireDefault(_selectedGroup);

var _user = __webpack_require__(143);

var _user2 = _interopRequireDefault(_user);

var _messages = __webpack_require__(141);

var _messages2 = _interopRequireDefault(_messages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
  selectedGroup: _selectedGroup2.default,
  userData: _user2.default,
  messages: _messages2.default
});

exports.default = rootReducer;

/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var messages = function messages() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];
  var type = action.type,
      newMessage = action.newMessage;

  switch (type) {
    case 'SEND_MESSAGE':
      return [].concat(_toConsumableArray(state), [newMessage]);
    case 'LOAD_MESSAGES':
      return action.messages;
    default:
      return state;
  }
};

exports.default = messages;

/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var selectedGroup = function selectedGroup() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];
  var type = action.type,
      group = action.group;

  switch (type) {
    case 'CHANGE_SELECTED_GROUP':
      return group;
    default:
      return state;
  }
};

exports.default = selectedGroup;

/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var userData = function userData() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '{}';
  var action = arguments[1];
  var type = action.type,
      user = action.user;

  switch (type) {
    case 'LOGIN_USER':
      return user;
    case 'LOGOUT_USER':
      return '{}';
    default:
      return state;
  }
};

exports.default = userData;

/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(71);

var _reduxThunk = __webpack_require__(293);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(140);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var configureStore = function configureStore(initialState) {
  return (0, _redux.createStore)(_reducers2.default, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), (0, _redux.applyMiddleware)(_reduxThunk2.default));
};

exports.default = configureStore;

/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
function createThunkMiddleware(extraArgument) {
  return function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        if (typeof action === 'function') {
          return action(dispatch, getState, extraArgument);
        }

        return next(action);
      };
    };
  };
}

var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

exports['default'] = thunk;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvcmVkdWNlcnMvaW5kZXguanM/ZmI3OCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvcmVkdWNlcnMvbWVzc2FnZXMuanM/ZjY3YSIsIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvcmVkdWNlcnMvc2VsZWN0ZWRHcm91cC5qcz83YWQ4Iiwid2VicGFjazovLy8uL2NsaWVudC9qcy9yZWR1Y2Vycy91c2VyLmpzPzI2N2IiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2pzL3N0b3Jlcy9jb25maWd1cmVTdG9yZS5qcz82MzU5Iiwid2VicGFjazovLy8uL34vcmVkdXgtdGh1bmsvbGliL2luZGV4LmpzP2YyNDgiXSwibmFtZXMiOlsicm9vdFJlZHVjZXIiLCJzZWxlY3RlZEdyb3VwIiwidXNlckRhdGEiLCJtZXNzYWdlcyIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIm5ld01lc3NhZ2UiLCJncm91cCIsInVzZXIiLCJjb25maWd1cmVTdG9yZSIsImluaXRpYWxTdGF0ZSIsIndpbmRvdyIsIl9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX18iLCJleHBvcnRzIiwiX19lc01vZHVsZSIsImNyZWF0ZVRodW5rTWlkZGxld2FyZSIsImV4dHJhQXJndW1lbnQiLCJfcmVmIiwiZGlzcGF0Y2giLCJnZXRTdGF0ZSIsIm5leHQiLCJ0aHVuayIsIndpdGhFeHRyYUFyZ3VtZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLGNBQWMsNEJBQWdCO0FBQ2xDQyx3Q0FEa0M7QUFFbENDLDBCQUZrQztBQUdsQ0M7QUFIa0MsQ0FBaEIsQ0FBcEI7O2tCQU1lSCxXOzs7Ozs7Ozs7Ozs7Ozs7O0FDWGYsSUFBTUcsV0FBVyxTQUFYQSxRQUFXLEdBQXdCO0FBQUEsTUFBdkJDLEtBQXVCLHVFQUFmLEVBQWU7QUFBQSxNQUFYQyxNQUFXO0FBQUEsTUFDL0JDLElBRCtCLEdBQ1ZELE1BRFUsQ0FDL0JDLElBRCtCO0FBQUEsTUFDekJDLFVBRHlCLEdBQ1ZGLE1BRFUsQ0FDekJFLFVBRHlCOztBQUV2QyxVQUFRRCxJQUFSO0FBQ0UsU0FBSyxjQUFMO0FBQ0UsMENBQVdGLEtBQVgsSUFBa0JHLFVBQWxCO0FBQ0YsU0FBSyxlQUFMO0FBQ0UsYUFBT0YsT0FBT0YsUUFBZDtBQUNGO0FBQ0UsYUFBT0MsS0FBUDtBQU5KO0FBUUQsQ0FWRDs7a0JBWWVELFE7Ozs7Ozs7Ozs7Ozs7QUNaZixJQUFNRixnQkFBZ0IsU0FBaEJBLGFBQWdCLEdBQXdCO0FBQUEsTUFBdkJHLEtBQXVCLHVFQUFmLEVBQWU7QUFBQSxNQUFYQyxNQUFXO0FBQUEsTUFDcENDLElBRG9DLEdBQ3BCRCxNQURvQixDQUNwQ0MsSUFEb0M7QUFBQSxNQUM5QkUsS0FEOEIsR0FDcEJILE1BRG9CLENBQzlCRyxLQUQ4Qjs7QUFFNUMsVUFBUUYsSUFBUjtBQUNFLFNBQUssdUJBQUw7QUFDRSxhQUFPRSxLQUFQO0FBQ0Y7QUFDRSxhQUFPSixLQUFQO0FBSko7QUFNRCxDQVJEOztrQkFVZUgsYTs7Ozs7Ozs7Ozs7OztBQ1ZmLElBQU1DLFdBQVcsU0FBWEEsUUFBVyxHQUEwQjtBQUFBLE1BQXpCRSxLQUF5Qix1RUFBakIsSUFBaUI7QUFBQSxNQUFYQyxNQUFXO0FBQUEsTUFDakNDLElBRGlDLEdBQ2xCRCxNQURrQixDQUNqQ0MsSUFEaUM7QUFBQSxNQUMzQkcsSUFEMkIsR0FDbEJKLE1BRGtCLENBQzNCSSxJQUQyQjs7QUFFekMsVUFBUUgsSUFBUjtBQUNFLFNBQUssWUFBTDtBQUNFLGFBQU9HLElBQVA7QUFDRixTQUFLLGFBQUw7QUFDRSxhQUFPLElBQVA7QUFDRjtBQUNFLGFBQU9MLEtBQVA7QUFOSjtBQVFELENBVkQ7O2tCQVllRixROzs7Ozs7Ozs7Ozs7OztBQ1pmOztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1RLGlCQUFrQixTQUFsQkEsY0FBa0I7QUFBQSxTQUN0Qiw0Q0FFRUMsWUFGRixFQUdFQyxPQUFPQyw0QkFBUCxJQUF1Q0QsT0FBT0MsNEJBQVAsRUFIekMsRUFJRSxpREFKRixDQURzQjtBQUFBLENBQXhCOztrQkFRZUgsYzs7Ozs7Ozs7QUNaZjs7QUFFQUksUUFBUUMsVUFBUixHQUFxQixJQUFyQjtBQUNBLFNBQVNDLHFCQUFULENBQStCQyxhQUEvQixFQUE4QztBQUM1QyxTQUFPLFVBQVVDLElBQVYsRUFBZ0I7QUFDckIsUUFBSUMsV0FBV0QsS0FBS0MsUUFBcEI7QUFBQSxRQUNJQyxXQUFXRixLQUFLRSxRQURwQjtBQUVBLFdBQU8sVUFBVUMsSUFBVixFQUFnQjtBQUNyQixhQUFPLFVBQVVoQixNQUFWLEVBQWtCO0FBQ3ZCLFlBQUksT0FBT0EsTUFBUCxLQUFrQixVQUF0QixFQUFrQztBQUNoQyxpQkFBT0EsT0FBT2MsUUFBUCxFQUFpQkMsUUFBakIsRUFBMkJILGFBQTNCLENBQVA7QUFDRDs7QUFFRCxlQUFPSSxLQUFLaEIsTUFBTCxDQUFQO0FBQ0QsT0FORDtBQU9ELEtBUkQ7QUFTRCxHQVpEO0FBYUQ7O0FBRUQsSUFBSWlCLFFBQVFOLHVCQUFaO0FBQ0FNLE1BQU1DLGlCQUFOLEdBQTBCUCxxQkFBMUI7O0FBRUFGLFFBQVEsU0FBUixJQUFxQlEsS0FBckIsQyIsImZpbGUiOiIwLmQ2YmVhMmNhZDJmNmNkN2JlNGMwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgc2VsZWN0ZWRHcm91cCBmcm9tICcuL3NlbGVjdGVkR3JvdXAnO1xuaW1wb3J0IHVzZXJEYXRhIGZyb20gJy4vdXNlcic7XG5pbXBvcnQgbWVzc2FnZXMgZnJvbSAnLi9tZXNzYWdlcyc7XG5cbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgc2VsZWN0ZWRHcm91cCxcbiAgdXNlckRhdGEsXG4gIG1lc3NhZ2VzXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvanMvcmVkdWNlcnMvaW5kZXguanMiLCJjb25zdCBtZXNzYWdlcyA9IChzdGF0ZSA9IFtdLCBhY3Rpb24pID0+IHtcbiAgY29uc3QgeyB0eXBlLCBuZXdNZXNzYWdlIH0gPSBhY3Rpb247XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ1NFTkRfTUVTU0FHRSc6XG4gICAgICByZXR1cm4gWy4uLnN0YXRlLCBuZXdNZXNzYWdlXTtcbiAgICBjYXNlICdMT0FEX01FU1NBR0VTJzpcbiAgICAgIHJldHVybiBhY3Rpb24ubWVzc2FnZXM7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbWVzc2FnZXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvanMvcmVkdWNlcnMvbWVzc2FnZXMuanMiLCJjb25zdCBzZWxlY3RlZEdyb3VwID0gKHN0YXRlID0ge30sIGFjdGlvbikgPT4ge1xuICBjb25zdCB7IHR5cGUsIGdyb3VwIH0gPSBhY3Rpb247XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ0NIQU5HRV9TRUxFQ1RFRF9HUk9VUCc6XG4gICAgICByZXR1cm4gZ3JvdXA7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgc2VsZWN0ZWRHcm91cDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9qcy9yZWR1Y2Vycy9zZWxlY3RlZEdyb3VwLmpzIiwiY29uc3QgdXNlckRhdGEgPSAoc3RhdGUgPSAne30nLCBhY3Rpb24pID0+IHtcbiAgY29uc3QgeyB0eXBlLCB1c2VyIH0gPSBhY3Rpb247XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ0xPR0lOX1VTRVInOlxuICAgICAgcmV0dXJuIHVzZXI7XG4gICAgY2FzZSAnTE9HT1VUX1VTRVInOlxuICAgICAgcmV0dXJuICd7fSc7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlckRhdGE7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvanMvcmVkdWNlcnMvdXNlci5qcyIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gJy4uL3JlZHVjZXJzJztcblxuY29uc3QgY29uZmlndXJlU3RvcmUgPSAoaW5pdGlhbFN0YXRlID0+XG4gIGNyZWF0ZVN0b3JlKFxuICAgIHJvb3RSZWR1Y2VyLFxuICAgIGluaXRpYWxTdGF0ZSxcbiAgICB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXyAmJiB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXygpLFxuICAgIGFwcGx5TWlkZGxld2FyZSh0aHVuaylcbikpO1xuXG5leHBvcnQgZGVmYXVsdCBjb25maWd1cmVTdG9yZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9qcy9zdG9yZXMvY29uZmlndXJlU3RvcmUuanMiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5mdW5jdGlvbiBjcmVhdGVUaHVua01pZGRsZXdhcmUoZXh0cmFBcmd1bWVudCkge1xuICByZXR1cm4gZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgZGlzcGF0Y2ggPSBfcmVmLmRpc3BhdGNoLFxuICAgICAgICBnZXRTdGF0ZSA9IF9yZWYuZ2V0U3RhdGU7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChuZXh0KSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICBpZiAodHlwZW9mIGFjdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHJldHVybiBhY3Rpb24oZGlzcGF0Y2gsIGdldFN0YXRlLCBleHRyYUFyZ3VtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXh0KGFjdGlvbik7XG4gICAgICB9O1xuICAgIH07XG4gIH07XG59XG5cbnZhciB0aHVuayA9IGNyZWF0ZVRodW5rTWlkZGxld2FyZSgpO1xudGh1bmsud2l0aEV4dHJhQXJndW1lbnQgPSBjcmVhdGVUaHVua01pZGRsZXdhcmU7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHRodW5rO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vcmVkdXgtdGh1bmsvbGliL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==