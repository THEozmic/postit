webpackHotUpdate(0,{

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var sendMessage = function sendMessage(newMessage) {
  return {
    type: 'SEND_MESSAGE',
    newMessage: newMessage
  };
};

exports.default = sendMessage;

/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(19);

var _scrollToElement = __webpack_require__(298);

var _scrollToElement2 = _interopRequireDefault(_scrollToElement);

var _sendMessage = __webpack_require__(126);

var _sendMessage2 = _interopRequireDefault(_sendMessage);

var _loadMessages2 = __webpack_require__(76);

var _loadMessages3 = _interopRequireDefault(_loadMessages2);

var _api = __webpack_require__(16);

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Messages = function (_React$Component) {
  _inherits(Messages, _React$Component);

  function Messages(props) {
    _classCallCheck(this, Messages);

    var _this = _possibleConstructorReturn(this, (Messages.__proto__ || Object.getPrototypeOf(Messages)).call(this, props));

    _this.state = {
      message_error: '',
      selectedGroup: {},
      sendStatus: 'SEND'
    };
    _this.send = _this.send.bind(_this);
    return _this;
  }

  _createClass(Messages, [{
    key: 'scrollPane',
    value: function scrollPane() {
      (0, _scrollToElement2.default)('.second', {
        offset: -60,
        ease: 'in-expo',
        duration: 900
      });
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      var id = location.href.split('/')[location.href.split('/').length - 1];
      (0, _api2.default)(null, '/api/groups/' + id, 'GET').then(function (result) {
        _this2.setState({ selectedGroup: result });
      });
      (0, _api2.default)('', '/api/groups/' + id + '/read', 'POST').then(function (result) {
        _this2.setState({ selectedGroup: result });
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.scrollPane();
    }
  }, {
    key: 'send',
    value: function send(e) {
      var _this3 = this;

      e.preventDefault();
      var content = this.content,
          priority = this.priority;

      content = content.value.trim();
      priority = priority.value.trim();
      var readBy = '';
      readBy = readBy.split(',').map(function (id) {
        return parseInt(id, 10);
      });
      if (content === '' || priority === '') {
        this.setState({ message_error: 'Error: Message has no priority, sender or content' });
        return;
      }

      this.setState({ sendStatus: 'SEND...' });
      var newMessageBody = 'message=' + content + '&from_user=' + JSON.parse(this.props.user).data.username + '\n    &priority=' + priority + '&to_group=' + this.state.selectedGroup.id;
      (0, _api2.default)(newMessageBody, '/api/groups/' + this.state.selectedGroup.id + '/message', 'POST').then(function (response) {
        _this3.setState({ sendStatus: 'SEND' });
        var newMessage = {
          id: response.id,
          message: content,
          from_user: JSON.parse(_this3.props.user).data.username,
          priority: priority.toLowerCase(),
          readBy: readBy
        };
        _this3.props.loadMessages(_this3.props.messages.concat([newMessage]));
      });
      this.content.value = '';
      this.scrollPane();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var n = 0;
      return _react2.default.createElement(
        'div',
        { className: 'page-content align-top pl-0 col-md-7 col-lg-9' },
        _react2.default.createElement(
          'div',
          { className: 'messages' },
          this.props.messages.map(function (message) {
            n += 1;
            var secondClass = '';
            if (_this4.props.messages.length - 1 === n) {
              secondClass = ' second';
            } else {
              secondClass = '';
            }
            return _react2.default.createElement(
              'div',
              { className: 'message-container' + secondClass, key: message.id },
              _react2.default.createElement(
                'div',
                { className: 'message' },
                _react2.default.createElement(
                  'div',
                  { className: 'message-details' },
                  _react2.default.createElement(
                    'span',
                    { className: 'messenger' },
                    '@',
                    message.from_user
                  ),
                  _react2.default.createElement(
                    'span',
                    { className: 'message-type ' + message.priority.toLowerCase() },
                    message.priority.toLowerCase()
                  )
                ),
                _react2.default.createElement(
                  'div',
                  null,
                  message.message
                ),
                message.readBy === '' && message.readBy.length === 0 ? '' : _react2.default.createElement(
                  'div',
                  { className: 'message-read-list' },
                  'Read by: ',
                  _react2.default.createElement(
                    'span',
                    null,
                    message.readBy.split(',').join(', ').s.map(function (username) {
                      return '@' + username;
                    })
                  )
                )
              )
            );
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'new-message' },
          _react2.default.createElement(
            'div',
            { className: 'col-12 pl-0 pr-0 pb-2' },
            _react2.default.createElement('textarea', { className: 'message-box', placeholder: 'Type your message...',
              ref: function ref(input) {
                _this4.content = input;
              } })
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-12 pl-0 pr-0' },
            _react2.default.createElement(
              'div',
              { className: 'priority-level' },
              _react2.default.createElement(
                'select',
                { className: 'browser-default', ref: function ref(input) {
                    _this4.priority = input;
                  } },
                _react2.default.createElement(
                  'option',
                  { value: 'Normal' },
                  'Normal'
                ),
                _react2.default.createElement(
                  'option',
                  { value: 'Urgent' },
                  'Urgent'
                ),
                _react2.default.createElement(
                  'option',
                  { value: 'Critical' },
                  'Critical'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'right' },
              _react2.default.createElement(
                'button',
                { disabled: this.state.sendStatus === 'SEND...', className: 'btn btn-primary', onClick: this.send },
                this.state.sendStatus
              )
            )
          )
        )
      );
    }
  }]);

  return Messages;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.userData
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    send: function send(newMessage) {
      return dispatch((0, _sendMessage2.default)(newMessage));
    },
    loadMessages: function loadMessages(allMessages) {
      return dispatch((0, _loadMessages3.default)(allMessages));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Messages);

/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Module dependencies.
 */

var type;
try {
  type = __webpack_require__(46);
} catch (_) {
  type = __webpack_require__(46);
}

/**
 * Module exports.
 */

module.exports = clone;

/**
 * Clones objects.
 *
 * @param {Mixed} any object
 * @api public
 */

function clone(obj) {
  switch (type(obj)) {
    case 'object':
      var copy = {};
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          copy[key] = clone(obj[key]);
        }
      }
      return copy;

    case 'array':
      var copy = new Array(obj.length);
      for (var i = 0, l = obj.length; i < l; i++) {
        copy[i] = clone(obj[i]);
      }
      return copy;

    case 'regexp':
      // from millermedeiros/amd-utils - MIT
      var flags = '';
      flags += obj.multiline ? 'm' : '';
      flags += obj.global ? 'g' : '';
      flags += obj.ignoreCase ? 'i' : '';
      return new RegExp(obj.source, flags);

    case 'date':
      return new Date(obj.getTime());

    default:
      // string, number, boolean, …
      return obj;
  }
}

/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Expose `requestAnimationFrame()`.
 */

exports = module.exports = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || fallback;

/**
 * Fallback implementation.
 */

var prev = new Date().getTime();
function fallback(fn) {
  var curr = new Date().getTime();
  var ms = Math.max(0, 16 - (curr - prev));
  var req = setTimeout(fn, ms);
  prev = curr;
  return req;
}

/**
 * Cancel.
 */

var cancel = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.clearTimeout;

exports.cancel = function (id) {
  cancel.call(window, id);
};

/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Module dependencies.
 */

var Emitter = __webpack_require__(148);
var clone = __webpack_require__(145);
var type = __webpack_require__(46);
var ease = __webpack_require__(150);

/**
 * Expose `Tween`.
 */

module.exports = Tween;

/**
 * Initialize a new `Tween` with `obj`.
 *
 * @param {Object|Array} obj
 * @api public
 */

function Tween(obj) {
  if (!(this instanceof Tween)) return new Tween(obj);
  this._from = obj;
  this.ease('linear');
  this.duration(500);
}

/**
 * Mixin emitter.
 */

Emitter(Tween.prototype);

/**
 * Reset the tween.
 *
 * @api public
 */

Tween.prototype.reset = function () {
  this.isArray = 'array' === type(this._from);
  this._curr = clone(this._from);
  this._done = false;
  this._start = Date.now();
  return this;
};

/**
 * Tween to `obj` and reset internal state.
 *
 *    tween.to({ x: 50, y: 100 })
 *
 * @param {Object|Array} obj
 * @return {Tween} self
 * @api public
 */

Tween.prototype.to = function (obj) {
  this.reset();
  this._to = obj;
  return this;
};

/**
 * Set duration to `ms` [500].
 *
 * @param {Number} ms
 * @return {Tween} self
 * @api public
 */

Tween.prototype.duration = function (ms) {
  this._duration = ms;
  return this;
};

/**
 * Set easing function to `fn`.
 *
 *    tween.ease('in-out-sine')
 *
 * @param {String|Function} fn
 * @return {Tween}
 * @api public
 */

Tween.prototype.ease = function (fn) {
  fn = 'function' == typeof fn ? fn : ease[fn];
  if (!fn) throw new TypeError('invalid easing function');
  this._ease = fn;
  return this;
};

/**
 * Stop the tween and immediately emit "stop" and "end".
 *
 * @return {Tween}
 * @api public
 */

Tween.prototype.stop = function () {
  this.stopped = true;
  this._done = true;
  this.emit('stop');
  this.emit('end');
  return this;
};

/**
 * Perform a step.
 *
 * @return {Tween} self
 * @api private
 */

Tween.prototype.step = function () {
  if (this._done) return;

  // duration
  var duration = this._duration;
  var now = Date.now();
  var delta = now - this._start;
  var done = delta >= duration;

  // complete
  if (done) {
    this._from = this._to;
    this._update(this._to);
    this._done = true;
    this.emit('end');
    return this;
  }

  // tween
  var from = this._from;
  var to = this._to;
  var curr = this._curr;
  var fn = this._ease;
  var p = (now - this._start) / duration;
  var n = fn(p);

  // array
  if (this.isArray) {
    for (var i = 0; i < from.length; ++i) {
      curr[i] = from[i] + (to[i] - from[i]) * n;
    }

    this._update(curr);
    return this;
  }

  // objech
  for (var k in from) {
    curr[k] = from[k] + (to[k] - from[k]) * n;
  }

  this._update(curr);
  return this;
};

/**
 * Set update function to `fn` or
 * when no argument is given this performs
 * a "step".
 *
 * @param {Function} fn
 * @return {Tween} self
 * @api public
 */

Tween.prototype.update = function (fn) {
  if (0 == arguments.length) return this.step();
  this._update = fn;
  return this;
};

/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Expose `Emitter`.
 */

module.exports = Emitter;

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on = Emitter.prototype.addEventListener = function (event, fn) {
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || []).push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function (event, fn) {
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function (event, fn) {
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function (event) {
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1),
      callbacks = this._callbacks['$' + event];

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function (event) {
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function (event) {
  return !!this.listeners(event).length;
};

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// easing functions from "Tween.js"

exports.linear = function (n) {
  return n;
};

exports.inQuad = function (n) {
  return n * n;
};

exports.outQuad = function (n) {
  return n * (2 - n);
};

exports.inOutQuad = function (n) {
  n *= 2;
  if (n < 1) return 0.5 * n * n;
  return -0.5 * (--n * (n - 2) - 1);
};

exports.inCube = function (n) {
  return n * n * n;
};

exports.outCube = function (n) {
  return --n * n * n + 1;
};

exports.inOutCube = function (n) {
  n *= 2;
  if (n < 1) return 0.5 * n * n * n;
  return 0.5 * ((n -= 2) * n * n + 2);
};

exports.inQuart = function (n) {
  return n * n * n * n;
};

exports.outQuart = function (n) {
  return 1 - --n * n * n * n;
};

exports.inOutQuart = function (n) {
  n *= 2;
  if (n < 1) return 0.5 * n * n * n * n;
  return -0.5 * ((n -= 2) * n * n * n - 2);
};

exports.inQuint = function (n) {
  return n * n * n * n * n;
};

exports.outQuint = function (n) {
  return --n * n * n * n * n + 1;
};

exports.inOutQuint = function (n) {
  n *= 2;
  if (n < 1) return 0.5 * n * n * n * n * n;
  return 0.5 * ((n -= 2) * n * n * n * n + 2);
};

exports.inSine = function (n) {
  return 1 - Math.cos(n * Math.PI / 2);
};

exports.outSine = function (n) {
  return Math.sin(n * Math.PI / 2);
};

exports.inOutSine = function (n) {
  return .5 * (1 - Math.cos(Math.PI * n));
};

exports.inExpo = function (n) {
  return 0 == n ? 0 : Math.pow(1024, n - 1);
};

exports.outExpo = function (n) {
  return 1 == n ? n : 1 - Math.pow(2, -10 * n);
};

exports.inOutExpo = function (n) {
  if (0 == n) return 0;
  if (1 == n) return 1;
  if ((n *= 2) < 1) return .5 * Math.pow(1024, n - 1);
  return .5 * (-Math.pow(2, -10 * (n - 1)) + 2);
};

exports.inCirc = function (n) {
  return 1 - Math.sqrt(1 - n * n);
};

exports.outCirc = function (n) {
  return Math.sqrt(1 - --n * n);
};

exports.inOutCirc = function (n) {
  n *= 2;
  if (n < 1) return -0.5 * (Math.sqrt(1 - n * n) - 1);
  return 0.5 * (Math.sqrt(1 - (n -= 2) * n) + 1);
};

exports.inBack = function (n) {
  var s = 1.70158;
  return n * n * ((s + 1) * n - s);
};

exports.outBack = function (n) {
  var s = 1.70158;
  return --n * n * ((s + 1) * n + s) + 1;
};

exports.inOutBack = function (n) {
  var s = 1.70158 * 1.525;
  if ((n *= 2) < 1) return 0.5 * (n * n * ((s + 1) * n - s));
  return 0.5 * ((n -= 2) * n * ((s + 1) * n + s) + 2);
};

exports.inBounce = function (n) {
  return 1 - exports.outBounce(1 - n);
};

exports.outBounce = function (n) {
  if (n < 1 / 2.75) {
    return 7.5625 * n * n;
  } else if (n < 2 / 2.75) {
    return 7.5625 * (n -= 1.5 / 2.75) * n + 0.75;
  } else if (n < 2.5 / 2.75) {
    return 7.5625 * (n -= 2.25 / 2.75) * n + 0.9375;
  } else {
    return 7.5625 * (n -= 2.625 / 2.75) * n + 0.984375;
  }
};

exports.inOutBounce = function (n) {
  if (n < .5) return exports.inBounce(n * 2) * .5;
  return exports.outBounce(n * 2 - 1) * .5 + .5;
};

// aliases

exports['in-quad'] = exports.inQuad;
exports['out-quad'] = exports.outQuad;
exports['in-out-quad'] = exports.inOutQuad;
exports['in-cube'] = exports.inCube;
exports['out-cube'] = exports.outCube;
exports['in-out-cube'] = exports.inOutCube;
exports['in-quart'] = exports.inQuart;
exports['out-quart'] = exports.outQuart;
exports['in-out-quart'] = exports.inOutQuart;
exports['in-quint'] = exports.inQuint;
exports['out-quint'] = exports.outQuint;
exports['in-out-quint'] = exports.inOutQuint;
exports['in-sine'] = exports.inSine;
exports['out-sine'] = exports.outSine;
exports['in-out-sine'] = exports.inOutSine;
exports['in-expo'] = exports.inExpo;
exports['out-expo'] = exports.outExpo;
exports['in-out-expo'] = exports.inOutExpo;
exports['in-circ'] = exports.inCirc;
exports['out-circ'] = exports.outCirc;
exports['in-out-circ'] = exports.inOutCirc;
exports['in-back'] = exports.inBack;
exports['out-back'] = exports.outBack;
exports['in-out-back'] = exports.inOutBack;
exports['in-bounce'] = exports.inBounce;
exports['out-bounce'] = exports.outBounce;
exports['in-out-bounce'] = exports.inOutBounce;

/***/ }),

/***/ 298:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var scroll = __webpack_require__(299);

function calculateScrollOffset(elem, additionalOffset, alignment) {
  var body = document.body,
      html = document.documentElement;

  var elemRect = elem.getBoundingClientRect();
  var clientHeight = html.clientHeight;
  var documentHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

  additionalOffset = additionalOffset || 0;

  var scrollPosition;
  if (alignment === 'bottom') {
    scrollPosition = elemRect.bottom - clientHeight;
  } else if (alignment === 'middle') {
    scrollPosition = elemRect.bottom - clientHeight / 2 - elemRect.height / 2;
  } else {
    // top and default
    scrollPosition = elemRect.top;
  }

  var maxScrollPosition = documentHeight - clientHeight;
  return Math.min(scrollPosition + additionalOffset + window.pageYOffset, maxScrollPosition);
}

module.exports = function (elem, options) {
  options = options || {};
  if (typeof elem === 'string') elem = document.querySelector(elem);
  if (elem) return scroll(0, calculateScrollOffset(elem, options.offset, options.align), options);
};

/***/ }),

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Module dependencies.
 */

var Tween = __webpack_require__(147);
var raf = __webpack_require__(146);

/**
 * Expose `scrollTo`.
 */

module.exports = scrollTo;

/**
 * Scroll to `(x, y)`.
 *
 * @param {Number} x
 * @param {Number} y
 * @api public
 */

function scrollTo(x, y, options) {
  options = options || {};

  // start position
  var start = scroll();

  // setup tween
  var tween = Tween(start).ease(options.ease || 'out-circ').to({ top: y, left: x }).duration(options.duration || 1000);

  // scroll
  tween.update(function (o) {
    window.scrollTo(o.left | 0, o.top | 0);
  });

  // handle end
  tween.on('end', function () {
    animate = function animate() {};
  });

  // animate
  function animate() {
    raf(animate);
    tween.update();
  }

  animate();

  return tween;
}

/**
 * Return scroll position.
 *
 * @return {Object}
 * @api private
 */

function scroll() {
  var y = window.pageYOffset || document.documentElement.scrollTop;
  var x = window.pageXOffset || document.documentElement.scrollLeft;
  return { top: y, left: x };
}

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * toString ref.
 */

var toString = Object.prototype.toString;

/**
 * Return the type of `val`.
 *
 * @param {Mixed} val
 * @return {String}
 * @api public
 */

module.exports = function (val) {
  switch (toString.call(val)) {
    case '[object Date]':
      return 'date';
    case '[object RegExp]':
      return 'regexp';
    case '[object Arguments]':
      return 'arguments';
    case '[object Array]':
      return 'array';
    case '[object Error]':
      return 'error';
  }

  if (val === null) return 'null';
  if (val === undefined) return 'undefined';
  if (val !== val) return 'nan';
  if (val && val.nodeType === 1) return 'element';

  val = val.valueOf ? val.valueOf() : Object.prototype.valueOf.apply(val);

  return typeof val === 'undefined' ? 'undefined' : _typeof(val);
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvYWN0aW9ucy9zZW5kTWVzc2FnZS5qcz84OTZhIiwid2VicGFjazovLy8uL2NsaWVudC9qcy9jb21wb25lbnRzL2NvbnRhaW5lcnMvbWVzc2FnZXMuanM/MWI4YyIsIndlYnBhY2s6Ly8vLi9+L2NvbXBvbmVudC1jbG9uZS9pbmRleC5qcz8wZWM1Iiwid2VicGFjazovLy8uL34vY29tcG9uZW50LXJhZi9pbmRleC5qcz9hZmRhIiwid2VicGFjazovLy8uL34vY29tcG9uZW50LXR3ZWVuL2luZGV4LmpzPzU3ZjIiLCJ3ZWJwYWNrOi8vLy4vfi9jb21wb25lbnQtdHdlZW4vfi9jb21wb25lbnQtZW1pdHRlci9pbmRleC5qcz85ZjM2Iiwid2VicGFjazovLy8uL34vZWFzZS1jb21wb25lbnQvaW5kZXguanM/OTNmNCIsIndlYnBhY2s6Ly8vLi9+L3Njcm9sbC10by1lbGVtZW50L2luZGV4LmpzP2IwOWUiLCJ3ZWJwYWNrOi8vLy4vfi9zY3JvbGwtdG8vaW5kZXguanM/NDMwNCIsIndlYnBhY2s6Ly8vLi9+L2NvbXBvbmVudC10eXBlL2luZGV4LmpzPzZmNTYiXSwibmFtZXMiOlsic2VuZE1lc3NhZ2UiLCJuZXdNZXNzYWdlIiwidHlwZSIsIk1lc3NhZ2VzIiwicHJvcHMiLCJzdGF0ZSIsIm1lc3NhZ2VfZXJyb3IiLCJzZWxlY3RlZEdyb3VwIiwic2VuZFN0YXR1cyIsInNlbmQiLCJiaW5kIiwib2Zmc2V0IiwiZWFzZSIsImR1cmF0aW9uIiwiaWQiLCJsb2NhdGlvbiIsImhyZWYiLCJzcGxpdCIsImxlbmd0aCIsInRoZW4iLCJyZXN1bHQiLCJzZXRTdGF0ZSIsInNjcm9sbFBhbmUiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb250ZW50IiwicHJpb3JpdHkiLCJ2YWx1ZSIsInRyaW0iLCJyZWFkQnkiLCJtYXAiLCJwYXJzZUludCIsIm5ld01lc3NhZ2VCb2R5IiwiSlNPTiIsInBhcnNlIiwidXNlciIsImRhdGEiLCJ1c2VybmFtZSIsInJlc3BvbnNlIiwibWVzc2FnZSIsImZyb21fdXNlciIsInRvTG93ZXJDYXNlIiwibG9hZE1lc3NhZ2VzIiwibWVzc2FnZXMiLCJjb25jYXQiLCJuIiwic2Vjb25kQ2xhc3MiLCJqb2luIiwicyIsImlucHV0IiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwidXNlckRhdGEiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImFsbE1lc3NhZ2VzIiwicmVxdWlyZSIsIl8iLCJtb2R1bGUiLCJleHBvcnRzIiwiY2xvbmUiLCJvYmoiLCJjb3B5Iiwia2V5IiwiaGFzT3duUHJvcGVydHkiLCJBcnJheSIsImkiLCJsIiwiZmxhZ3MiLCJtdWx0aWxpbmUiLCJnbG9iYWwiLCJpZ25vcmVDYXNlIiwiUmVnRXhwIiwic291cmNlIiwiRGF0ZSIsImdldFRpbWUiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ3ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJmYWxsYmFjayIsInByZXYiLCJmbiIsImN1cnIiLCJtcyIsIk1hdGgiLCJtYXgiLCJyZXEiLCJzZXRUaW1lb3V0IiwiY2FuY2VsIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJ3ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZSIsIm1vekNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiY2xlYXJUaW1lb3V0IiwiY2FsbCIsIkVtaXR0ZXIiLCJUd2VlbiIsIl9mcm9tIiwicHJvdG90eXBlIiwicmVzZXQiLCJpc0FycmF5IiwiX2N1cnIiLCJfZG9uZSIsIl9zdGFydCIsIm5vdyIsInRvIiwiX3RvIiwiX2R1cmF0aW9uIiwiVHlwZUVycm9yIiwiX2Vhc2UiLCJzdG9wIiwic3RvcHBlZCIsImVtaXQiLCJzdGVwIiwiZGVsdGEiLCJkb25lIiwiX3VwZGF0ZSIsImZyb20iLCJwIiwiayIsInVwZGF0ZSIsImFyZ3VtZW50cyIsIm1peGluIiwib24iLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJfY2FsbGJhY2tzIiwicHVzaCIsIm9uY2UiLCJvZmYiLCJhcHBseSIsInJlbW92ZUxpc3RlbmVyIiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNhbGxiYWNrcyIsImNiIiwic3BsaWNlIiwiYXJncyIsInNsaWNlIiwibGVuIiwibGlzdGVuZXJzIiwiaGFzTGlzdGVuZXJzIiwibGluZWFyIiwiaW5RdWFkIiwib3V0UXVhZCIsImluT3V0UXVhZCIsImluQ3ViZSIsIm91dEN1YmUiLCJpbk91dEN1YmUiLCJpblF1YXJ0Iiwib3V0UXVhcnQiLCJpbk91dFF1YXJ0IiwiaW5RdWludCIsIm91dFF1aW50IiwiaW5PdXRRdWludCIsImluU2luZSIsImNvcyIsIlBJIiwib3V0U2luZSIsInNpbiIsImluT3V0U2luZSIsImluRXhwbyIsInBvdyIsIm91dEV4cG8iLCJpbk91dEV4cG8iLCJpbkNpcmMiLCJzcXJ0Iiwib3V0Q2lyYyIsImluT3V0Q2lyYyIsImluQmFjayIsIm91dEJhY2siLCJpbk91dEJhY2siLCJpbkJvdW5jZSIsIm91dEJvdW5jZSIsImluT3V0Qm91bmNlIiwic2Nyb2xsIiwiY2FsY3VsYXRlU2Nyb2xsT2Zmc2V0IiwiZWxlbSIsImFkZGl0aW9uYWxPZmZzZXQiLCJhbGlnbm1lbnQiLCJib2R5IiwiZG9jdW1lbnQiLCJodG1sIiwiZG9jdW1lbnRFbGVtZW50IiwiZWxlbVJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJjbGllbnRIZWlnaHQiLCJkb2N1bWVudEhlaWdodCIsInNjcm9sbEhlaWdodCIsIm9mZnNldEhlaWdodCIsInNjcm9sbFBvc2l0aW9uIiwiYm90dG9tIiwiaGVpZ2h0IiwidG9wIiwibWF4U2Nyb2xsUG9zaXRpb24iLCJtaW4iLCJwYWdlWU9mZnNldCIsIm9wdGlvbnMiLCJxdWVyeVNlbGVjdG9yIiwiYWxpZ24iLCJyYWYiLCJzY3JvbGxUbyIsIngiLCJ5Iiwic3RhcnQiLCJ0d2VlbiIsImxlZnQiLCJvIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsInBhZ2VYT2Zmc2V0Iiwic2Nyb2xsTGVmdCIsInRvU3RyaW5nIiwiT2JqZWN0IiwidmFsIiwidW5kZWZpbmVkIiwibm9kZVR5cGUiLCJ2YWx1ZU9mIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLElBQU1BLGNBQWMsU0FBZEEsV0FBYyxDQUFDQyxVQUFELEVBQWdCO0FBQ2xDLFNBQU87QUFDTEMsVUFBTSxjQUREO0FBRUxEO0FBRkssR0FBUDtBQUlELENBTEQ7O2tCQU9lRCxXOzs7Ozs7Ozs7Ozs7Ozs7O0FDUGY7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1HLFE7OztBQUNKLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsb0hBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxxQkFBZSxFQURKO0FBRVhDLHFCQUFlLEVBRko7QUFHWEMsa0JBQVk7QUFIRCxLQUFiO0FBS0EsVUFBS0MsSUFBTCxHQUFZLE1BQUtBLElBQUwsQ0FBVUMsSUFBVixPQUFaO0FBUGlCO0FBUWxCOzs7O2lDQUVZO0FBQ1gscUNBQWdCLFNBQWhCLEVBQTJCO0FBQ3pCQyxnQkFBUSxDQUFDLEVBRGdCO0FBRXpCQyxjQUFNLFNBRm1CO0FBR3pCQyxrQkFBVTtBQUhlLE9BQTNCO0FBS0Q7Ozt5Q0FFb0I7QUFBQTs7QUFDbkIsVUFBTUMsS0FBS0MsU0FBU0MsSUFBVCxDQUFjQyxLQUFkLENBQW9CLEdBQXBCLEVBQXlCRixTQUFTQyxJQUFULENBQWNDLEtBQWQsQ0FBb0IsR0FBcEIsRUFBeUJDLE1BQXpCLEdBQWtDLENBQTNELENBQVg7QUFDQSx5QkFBSSxJQUFKLG1CQUF5QkosRUFBekIsRUFBK0IsS0FBL0IsRUFDQ0ssSUFERCxDQUNNLFVBQUNDLE1BQUQsRUFBWTtBQUNoQixlQUFLQyxRQUFMLENBQWMsRUFBRWQsZUFBZWEsTUFBakIsRUFBZDtBQUNELE9BSEQ7QUFJQSx5QkFBSSxFQUFKLG1CQUF1Qk4sRUFBdkIsWUFB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QUFMO0FBQXVCLGFBQU8sT0FBUDtBQUN2QixTQUFLLGdCQUFMO0FBQXVCLGFBQU8sT0FBUDtBQUx6Qjs7QUFRQSxNQUFJQSxRQUFRLElBQVosRUFBa0IsT0FBTyxNQUFQO0FBQ2xCLE1BQUlBLFFBQVFDLFNBQVosRUFBdUIsT0FBTyxXQUFQO0FBQ3ZCLE1BQUlELFFBQVFBLEdBQVosRUFBaUIsT0FBTyxLQUFQO0FBQ2pCLE1BQUlBLE9BQU9BLElBQUlFLFFBQUosS0FBaUIsQ0FBNUIsRUFBK0IsT0FBTyxTQUFQOztBQUUvQkYsUUFBTUEsSUFBSUcsT0FBSixHQUNGSCxJQUFJRyxPQUFKLEVBREUsR0FFRkosT0FBT25ILFNBQVAsQ0FBaUJ1SCxPQUFqQixDQUF5QnZGLEtBQXpCLENBQStCb0YsR0FBL0IsQ0FGSjs7QUFJQSxnQkFBY0EsR0FBZCx5Q0FBY0EsR0FBZDtBQUNELENBbkJELEMiLCJmaWxlIjoiMC5hNzlmMjA4MTY0ODJjZDA5MjU0Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc2VuZE1lc3NhZ2UgPSAobmV3TWVzc2FnZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdTRU5EX01FU1NBR0UnLFxuICAgIG5ld01lc3NhZ2VcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNlbmRNZXNzYWdlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2pzL2FjdGlvbnMvc2VuZE1lc3NhZ2UuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBzY3JvbGxUb0VsZW1lbnQgZnJvbSAnc2Nyb2xsLXRvLWVsZW1lbnQnO1xuaW1wb3J0IHNlbmRNZXNzYWdlIGZyb20gJy4uLy4uL2FjdGlvbnMvc2VuZE1lc3NhZ2UnO1xuaW1wb3J0IGxvYWRNZXNzYWdlcyBmcm9tICcuLi8uLi9hY3Rpb25zL2xvYWRNZXNzYWdlcyc7XG5pbXBvcnQgYXBpIGZyb20gJy4uL2hlbHBlcnMvYXBpJztcblxuY2xhc3MgTWVzc2FnZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbWVzc2FnZV9lcnJvcjogJycsXG4gICAgICBzZWxlY3RlZEdyb3VwOiB7fSxcbiAgICAgIHNlbmRTdGF0dXM6ICdTRU5EJ1xuICAgIH07XG4gICAgdGhpcy5zZW5kID0gdGhpcy5zZW5kLmJpbmQodGhpcyk7XG4gIH1cblxuICBzY3JvbGxQYW5lKCkge1xuICAgIHNjcm9sbFRvRWxlbWVudCgnLnNlY29uZCcsIHtcbiAgICAgIG9mZnNldDogLTYwLFxuICAgICAgZWFzZTogJ2luLWV4cG8nLFxuICAgICAgZHVyYXRpb246IDkwMFxuICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIGNvbnN0IGlkID0gbG9jYXRpb24uaHJlZi5zcGxpdCgnLycpW2xvY2F0aW9uLmhyZWYuc3BsaXQoJy8nKS5sZW5ndGggLSAxXTtcbiAgICBhcGkobnVsbCwgYC9hcGkvZ3JvdXBzLyR7aWR9YCwgJ0dFVCcpXG4gICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkR3JvdXA6IHJlc3VsdCB9KTtcbiAgICB9KTtcbiAgICBhcGkoJycsIGAvYXBpL2dyb3Vwcy8ke2lkfS9yZWFkYCwgJ1BPU1QnKVxuICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZEdyb3VwOiByZXN1bHQgfSk7XG4gICAgfSk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnNjcm9sbFBhbmUoKTtcbiAgfVxuXG4gIHNlbmQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgeyBjb250ZW50LCBwcmlvcml0eSB9ID0gdGhpcztcbiAgICBjb250ZW50ID0gY29udGVudC52YWx1ZS50cmltKCk7XG4gICAgcHJpb3JpdHkgPSBwcmlvcml0eS52YWx1ZS50cmltKCk7XG4gICAgbGV0IHJlYWRCeSA9ICcnO1xuICAgIHJlYWRCeSA9IHJlYWRCeS5zcGxpdCgnLCcpLm1hcChpZCA9PiBwYXJzZUludChpZCwgMTApKTtcbiAgICBpZiAoY29udGVudCA9PT0gJycgfHwgcHJpb3JpdHkgPT09ICcnKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgbWVzc2FnZV9lcnJvcjogJ0Vycm9yOiBNZXNzYWdlIGhhcyBubyBwcmlvcml0eSwgc2VuZGVyIG9yIGNvbnRlbnQnIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoeyBzZW5kU3RhdHVzOiAnU0VORC4uLicgfSk7XG4gICAgY29uc3QgbmV3TWVzc2FnZUJvZHkgPVxuICAgIGBtZXNzYWdlPSR7Y29udGVudH0mZnJvbV91c2VyPSR7SlNPTi5wYXJzZSh0aGlzLnByb3BzLnVzZXIpLmRhdGEudXNlcm5hbWV9XG4gICAgJnByaW9yaXR5PSR7cHJpb3JpdHl9JnRvX2dyb3VwPSR7dGhpcy5zdGF0ZS5zZWxlY3RlZEdyb3VwLmlkfWA7XG4gICAgYXBpKG5ld01lc3NhZ2VCb2R5LCBgL2FwaS9ncm91cHMvJHt0aGlzLnN0YXRlLnNlbGVjdGVkR3JvdXAuaWR9L21lc3NhZ2VgLCAnUE9TVCcpLnRoZW4oXG4gICAgICAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbmRTdGF0dXM6ICdTRU5EJyB9KTtcbiAgICAgICAgY29uc3QgbmV3TWVzc2FnZSA9IHtcbiAgICAgICAgICBpZDogcmVzcG9uc2UuaWQsXG4gICAgICAgICAgbWVzc2FnZTogY29udGVudCxcbiAgICAgICAgICBmcm9tX3VzZXI6IEpTT04ucGFyc2UodGhpcy5wcm9wcy51c2VyKS5kYXRhLnVzZXJuYW1lLFxuICAgICAgICAgIHByaW9yaXR5OiBwcmlvcml0eS50b0xvd2VyQ2FzZSgpLFxuICAgICAgICAgIHJlYWRCeVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnByb3BzLmxvYWRNZXNzYWdlcyh0aGlzLnByb3BzLm1lc3NhZ2VzLmNvbmNhdChbbmV3TWVzc2FnZV0pKTtcbiAgICAgIH1cbiAgICApO1xuICAgIHRoaXMuY29udGVudC52YWx1ZSA9ICcnO1xuICAgIHRoaXMuc2Nyb2xsUGFuZSgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBuID0gMDtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWNvbnRlbnQgYWxpZ24tdG9wIHBsLTAgY29sLW1kLTcgY29sLWxnLTlcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlc1wiPlxuICAgICAgICAgIHsgdGhpcy5wcm9wcy5tZXNzYWdlcy5tYXAoKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgICAgIG4gKz0gMTtcbiAgICAgICAgICAgIGxldCBzZWNvbmRDbGFzcyA9ICcnO1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMubWVzc2FnZXMubGVuZ3RoIC0gMSA9PT0gbikge1xuICAgICAgICAgICAgICBzZWNvbmRDbGFzcyA9ICcgc2Vjb25kJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNlY29uZENsYXNzID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG1lc3NhZ2UtY29udGFpbmVyJHtzZWNvbmRDbGFzc31gfSBrZXk9e21lc3NhZ2UuaWR9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlLWRldGFpbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWVzc2VuZ2VyXCI+QHttZXNzYWdlLmZyb21fdXNlcn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YG1lc3NhZ2UtdHlwZSAke21lc3NhZ2UucHJpb3JpdHkudG9Mb3dlckNhc2UoKX1gfT5cbiAgICAgICAgICAgICAgICAgICAgICB7bWVzc2FnZS5wcmlvcml0eS50b0xvd2VyQ2FzZSgpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdj57bWVzc2FnZS5tZXNzYWdlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgIHsgbWVzc2FnZS5yZWFkQnkgPT09ICcnICYmIG1lc3NhZ2UucmVhZEJ5Lmxlbmd0aCA9PT0gMCA/ICcnIDpcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZS1yZWFkLWxpc3RcIj5SZWFkIGJ5OiA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgIHttZXNzYWdlLnJlYWRCeS5zcGxpdCgnLCcpLmpvaW4oJywgJykucy5tYXAodXNlcm5hbWUgPT4gYEAke3VzZXJuYW1lfWApfTwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+KTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3LW1lc3NhZ2VcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIHBsLTAgcHItMCBwYi0yXCI+XG4gICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJtZXNzYWdlLWJveFwiIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIG1lc3NhZ2UuLi5cIlxuICAgICAgICAgICAgICByZWY9eyhpbnB1dCkgPT4geyB0aGlzLmNvbnRlbnQgPSBpbnB1dDsgfX0+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgcGwtMCBwci0wXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmlvcml0eS1sZXZlbFwiPlxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJicm93c2VyLWRlZmF1bHRcIiByZWY9eyhpbnB1dCkgPT4geyB0aGlzLnByaW9yaXR5ID0gaW5wdXQ7IH19PlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk5vcm1hbFwiPk5vcm1hbDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlVyZ2VudFwiPlVyZ2VudDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkNyaXRpY2FsXCI+Q3JpdGljYWw8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRcIj48YnV0dG9uIGRpc2FibGVkPXt0aGlzLnN0YXRlLnNlbmRTdGF0dXMgPT09ICdTRU5ELi4uJ30gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17dGhpcy5zZW5kfT57dGhpcy5zdGF0ZS5zZW5kU3RhdHVzfTwvYnV0dG9uPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHVzZXI6IHN0YXRlLnVzZXJEYXRhXG4gIH07XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBzZW5kOiBuZXdNZXNzYWdlID0+IGRpc3BhdGNoKHNlbmRNZXNzYWdlKG5ld01lc3NhZ2UpKSxcbiAgICBsb2FkTWVzc2FnZXM6IGFsbE1lc3NhZ2VzID0+IGRpc3BhdGNoKGxvYWRNZXNzYWdlcyhhbGxNZXNzYWdlcykpXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShNZXNzYWdlcyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvanMvY29tcG9uZW50cy9jb250YWluZXJzL21lc3NhZ2VzLmpzIiwiLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICovXG5cbnZhciB0eXBlO1xudHJ5IHtcbiAgdHlwZSA9IHJlcXVpcmUoJ2NvbXBvbmVudC10eXBlJyk7XG59IGNhdGNoIChfKSB7XG4gIHR5cGUgPSByZXF1aXJlKCd0eXBlJyk7XG59XG5cbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZTtcblxuLyoqXG4gKiBDbG9uZXMgb2JqZWN0cy5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSBhbnkgb2JqZWN0XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGNsb25lKG9iail7XG4gIHN3aXRjaCAodHlwZShvYmopKSB7XG4gICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgIHZhciBjb3B5ID0ge307XG4gICAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIGNvcHlba2V5XSA9IGNsb25lKG9ialtrZXldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGNvcHk7XG5cbiAgICBjYXNlICdhcnJheSc6XG4gICAgICB2YXIgY29weSA9IG5ldyBBcnJheShvYmoubGVuZ3RoKTtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gb2JqLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBjb3B5W2ldID0gY2xvbmUob2JqW2ldKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb3B5O1xuXG4gICAgY2FzZSAncmVnZXhwJzpcbiAgICAgIC8vIGZyb20gbWlsbGVybWVkZWlyb3MvYW1kLXV0aWxzIC0gTUlUXG4gICAgICB2YXIgZmxhZ3MgPSAnJztcbiAgICAgIGZsYWdzICs9IG9iai5tdWx0aWxpbmUgPyAnbScgOiAnJztcbiAgICAgIGZsYWdzICs9IG9iai5nbG9iYWwgPyAnZycgOiAnJztcbiAgICAgIGZsYWdzICs9IG9iai5pZ25vcmVDYXNlID8gJ2knIDogJyc7XG4gICAgICByZXR1cm4gbmV3IFJlZ0V4cChvYmouc291cmNlLCBmbGFncyk7XG5cbiAgICBjYXNlICdkYXRlJzpcbiAgICAgIHJldHVybiBuZXcgRGF0ZShvYmouZ2V0VGltZSgpKTtcblxuICAgIGRlZmF1bHQ6IC8vIHN0cmluZywgbnVtYmVyLCBib29sZWFuLCDigKZcbiAgICAgIHJldHVybiBvYmo7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29tcG9uZW50LWNsb25lL2luZGV4LmpzIiwiLyoqXG4gKiBFeHBvc2UgYHJlcXVlc3RBbmltYXRpb25GcmFtZSgpYC5cbiAqL1xuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gIHx8IHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAgfHwgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZVxuICB8fCBmYWxsYmFjaztcblxuLyoqXG4gKiBGYWxsYmFjayBpbXBsZW1lbnRhdGlvbi5cbiAqL1xuXG52YXIgcHJldiA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuZnVuY3Rpb24gZmFsbGJhY2soZm4pIHtcbiAgdmFyIGN1cnIgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgdmFyIG1zID0gTWF0aC5tYXgoMCwgMTYgLSAoY3VyciAtIHByZXYpKTtcbiAgdmFyIHJlcSA9IHNldFRpbWVvdXQoZm4sIG1zKTtcbiAgcHJldiA9IGN1cnI7XG4gIHJldHVybiByZXE7XG59XG5cbi8qKlxuICogQ2FuY2VsLlxuICovXG5cbnZhciBjYW5jZWwgPSB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWVcbiAgfHwgd2luZG93LndlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lXG4gIHx8IHdpbmRvdy5tb3pDYW5jZWxBbmltYXRpb25GcmFtZVxuICB8fCB3aW5kb3cuY2xlYXJUaW1lb3V0O1xuXG5leHBvcnRzLmNhbmNlbCA9IGZ1bmN0aW9uKGlkKXtcbiAgY2FuY2VsLmNhbGwod2luZG93LCBpZCk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb21wb25lbnQtcmFmL2luZGV4LmpzIiwiXG4vKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxudmFyIEVtaXR0ZXIgPSByZXF1aXJlKCdlbWl0dGVyJyk7XG52YXIgY2xvbmUgPSByZXF1aXJlKCdjbG9uZScpO1xudmFyIHR5cGUgPSByZXF1aXJlKCd0eXBlJyk7XG52YXIgZWFzZSA9IHJlcXVpcmUoJ2Vhc2UnKTtcblxuLyoqXG4gKiBFeHBvc2UgYFR3ZWVuYC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IFR3ZWVuO1xuXG4vKipcbiAqIEluaXRpYWxpemUgYSBuZXcgYFR3ZWVuYCB3aXRoIGBvYmpgLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBvYmpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gVHdlZW4ob2JqKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBUd2VlbikpIHJldHVybiBuZXcgVHdlZW4ob2JqKTtcbiAgdGhpcy5fZnJvbSA9IG9iajtcbiAgdGhpcy5lYXNlKCdsaW5lYXInKTtcbiAgdGhpcy5kdXJhdGlvbig1MDApO1xufVxuXG4vKipcbiAqIE1peGluIGVtaXR0ZXIuXG4gKi9cblxuRW1pdHRlcihUd2Vlbi5wcm90b3R5cGUpO1xuXG4vKipcbiAqIFJlc2V0IHRoZSB0d2Vlbi5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblR3ZWVuLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uKCl7XG4gIHRoaXMuaXNBcnJheSA9ICdhcnJheScgPT09IHR5cGUodGhpcy5fZnJvbSk7XG4gIHRoaXMuX2N1cnIgPSBjbG9uZSh0aGlzLl9mcm9tKTtcbiAgdGhpcy5fZG9uZSA9IGZhbHNlO1xuICB0aGlzLl9zdGFydCA9IERhdGUubm93KCk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBUd2VlbiB0byBgb2JqYCBhbmQgcmVzZXQgaW50ZXJuYWwgc3RhdGUuXG4gKlxuICogICAgdHdlZW4udG8oeyB4OiA1MCwgeTogMTAwIH0pXG4gKlxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IG9ialxuICogQHJldHVybiB7VHdlZW59IHNlbGZcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuVHdlZW4ucHJvdG90eXBlLnRvID0gZnVuY3Rpb24ob2JqKXtcbiAgdGhpcy5yZXNldCgpO1xuICB0aGlzLl90byA9IG9iajtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNldCBkdXJhdGlvbiB0byBgbXNgIFs1MDBdLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBtc1xuICogQHJldHVybiB7VHdlZW59IHNlbGZcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuVHdlZW4ucHJvdG90eXBlLmR1cmF0aW9uID0gZnVuY3Rpb24obXMpe1xuICB0aGlzLl9kdXJhdGlvbiA9IG1zO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2V0IGVhc2luZyBmdW5jdGlvbiB0byBgZm5gLlxuICpcbiAqICAgIHR3ZWVuLmVhc2UoJ2luLW91dC1zaW5lJylcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge1R3ZWVufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5Ud2Vlbi5wcm90b3R5cGUuZWFzZSA9IGZ1bmN0aW9uKGZuKXtcbiAgZm4gPSAnZnVuY3Rpb24nID09IHR5cGVvZiBmbiA/IGZuIDogZWFzZVtmbl07XG4gIGlmICghZm4pIHRocm93IG5ldyBUeXBlRXJyb3IoJ2ludmFsaWQgZWFzaW5nIGZ1bmN0aW9uJyk7XG4gIHRoaXMuX2Vhc2UgPSBmbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFN0b3AgdGhlIHR3ZWVuIGFuZCBpbW1lZGlhdGVseSBlbWl0IFwic3RvcFwiIGFuZCBcImVuZFwiLlxuICpcbiAqIEByZXR1cm4ge1R3ZWVufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5Ud2Vlbi5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uKCl7XG4gIHRoaXMuc3RvcHBlZCA9IHRydWU7XG4gIHRoaXMuX2RvbmUgPSB0cnVlO1xuICB0aGlzLmVtaXQoJ3N0b3AnKTtcbiAgdGhpcy5lbWl0KCdlbmQnKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFBlcmZvcm0gYSBzdGVwLlxuICpcbiAqIEByZXR1cm4ge1R3ZWVufSBzZWxmXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Ud2Vlbi5wcm90b3R5cGUuc3RlcCA9IGZ1bmN0aW9uKCl7XG4gIGlmICh0aGlzLl9kb25lKSByZXR1cm47XG5cbiAgLy8gZHVyYXRpb25cbiAgdmFyIGR1cmF0aW9uID0gdGhpcy5fZHVyYXRpb247XG4gIHZhciBub3cgPSBEYXRlLm5vdygpO1xuICB2YXIgZGVsdGEgPSBub3cgLSB0aGlzLl9zdGFydDtcbiAgdmFyIGRvbmUgPSBkZWx0YSA+PSBkdXJhdGlvbjtcblxuICAvLyBjb21wbGV0ZVxuICBpZiAoZG9uZSkge1xuICAgIHRoaXMuX2Zyb20gPSB0aGlzLl90bztcbiAgICB0aGlzLl91cGRhdGUodGhpcy5fdG8pO1xuICAgIHRoaXMuX2RvbmUgPSB0cnVlO1xuICAgIHRoaXMuZW1pdCgnZW5kJyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyB0d2VlblxuICB2YXIgZnJvbSA9IHRoaXMuX2Zyb207XG4gIHZhciB0byA9IHRoaXMuX3RvO1xuICB2YXIgY3VyciA9IHRoaXMuX2N1cnI7XG4gIHZhciBmbiA9IHRoaXMuX2Vhc2U7XG4gIHZhciBwID0gKG5vdyAtIHRoaXMuX3N0YXJ0KSAvIGR1cmF0aW9uO1xuICB2YXIgbiA9IGZuKHApO1xuXG4gIC8vIGFycmF5XG4gIGlmICh0aGlzLmlzQXJyYXkpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZyb20ubGVuZ3RoOyArK2kpIHtcbiAgICAgIGN1cnJbaV0gPSBmcm9tW2ldICsgKHRvW2ldIC0gZnJvbVtpXSkgKiBuO1xuICAgIH1cblxuICAgIHRoaXMuX3VwZGF0ZShjdXJyKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIG9iamVjaFxuICBmb3IgKHZhciBrIGluIGZyb20pIHtcbiAgICBjdXJyW2tdID0gZnJvbVtrXSArICh0b1trXSAtIGZyb21ba10pICogbjtcbiAgfVxuXG4gIHRoaXMuX3VwZGF0ZShjdXJyKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNldCB1cGRhdGUgZnVuY3Rpb24gdG8gYGZuYCBvclxuICogd2hlbiBubyBhcmd1bWVudCBpcyBnaXZlbiB0aGlzIHBlcmZvcm1zXG4gKiBhIFwic3RlcFwiLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtUd2Vlbn0gc2VsZlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5Ud2Vlbi5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oZm4pe1xuICBpZiAoMCA9PSBhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gdGhpcy5zdGVwKCk7XG4gIHRoaXMuX3VwZGF0ZSA9IGZuO1xuICByZXR1cm4gdGhpcztcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb21wb25lbnQtdHdlZW4vaW5kZXguanMiLCJcbi8qKlxuICogRXhwb3NlIGBFbWl0dGVyYC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVtaXR0ZXI7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBhIG5ldyBgRW1pdHRlcmAuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBFbWl0dGVyKG9iaikge1xuICBpZiAob2JqKSByZXR1cm4gbWl4aW4ob2JqKTtcbn07XG5cbi8qKlxuICogTWl4aW4gdGhlIGVtaXR0ZXIgcHJvcGVydGllcy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBtaXhpbihvYmopIHtcbiAgZm9yICh2YXIga2V5IGluIEVtaXR0ZXIucHJvdG90eXBlKSB7XG4gICAgb2JqW2tleV0gPSBFbWl0dGVyLnByb3RvdHlwZVtrZXldO1xuICB9XG4gIHJldHVybiBvYmo7XG59XG5cbi8qKlxuICogTGlzdGVuIG9uIHRoZSBnaXZlbiBgZXZlbnRgIHdpdGggYGZuYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5FbWl0dGVyLnByb3RvdHlwZS5vbiA9XG5FbWl0dGVyLnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQsIGZuKXtcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xuICAodGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XSA9IHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF0gfHwgW10pXG4gICAgLnB1c2goZm4pO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQWRkcyBhbiBgZXZlbnRgIGxpc3RlbmVyIHRoYXQgd2lsbCBiZSBpbnZva2VkIGEgc2luZ2xlXG4gKiB0aW1lIHRoZW4gYXV0b21hdGljYWxseSByZW1vdmVkLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbihldmVudCwgZm4pe1xuICBmdW5jdGlvbiBvbigpIHtcbiAgICB0aGlzLm9mZihldmVudCwgb24pO1xuICAgIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBvbi5mbiA9IGZuO1xuICB0aGlzLm9uKGV2ZW50LCBvbik7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgdGhlIGdpdmVuIGNhbGxiYWNrIGZvciBgZXZlbnRgIG9yIGFsbFxuICogcmVnaXN0ZXJlZCBjYWxsYmFja3MuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7RW1pdHRlcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuRW1pdHRlci5wcm90b3R5cGUub2ZmID1cbkVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID1cbkVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9XG5FbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQsIGZuKXtcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xuXG4gIC8vIGFsbFxuICBpZiAoMCA9PSBhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgdGhpcy5fY2FsbGJhY2tzID0ge307XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBzcGVjaWZpYyBldmVudFxuICB2YXIgY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XTtcbiAgaWYgKCFjYWxsYmFja3MpIHJldHVybiB0aGlzO1xuXG4gIC8vIHJlbW92ZSBhbGwgaGFuZGxlcnNcbiAgaWYgKDEgPT0gYXJndW1lbnRzLmxlbmd0aCkge1xuICAgIGRlbGV0ZSB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gcmVtb3ZlIHNwZWNpZmljIGhhbmRsZXJcbiAgdmFyIGNiO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xuICAgIGNiID0gY2FsbGJhY2tzW2ldO1xuICAgIGlmIChjYiA9PT0gZm4gfHwgY2IuZm4gPT09IGZuKSB7XG4gICAgICBjYWxsYmFja3Muc3BsaWNlKGksIDEpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBFbWl0IGBldmVudGAgd2l0aCB0aGUgZ2l2ZW4gYXJncy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7TWl4ZWR9IC4uLlxuICogQHJldHVybiB7RW1pdHRlcn1cbiAqL1xuXG5FbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24oZXZlbnQpe1xuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XG4gIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpXG4gICAgLCBjYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdO1xuXG4gIGlmIChjYWxsYmFja3MpIHtcbiAgICBjYWxsYmFja3MgPSBjYWxsYmFja3Muc2xpY2UoMCk7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNhbGxiYWNrcy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgY2FsbGJhY2tzW2ldLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gYXJyYXkgb2YgY2FsbGJhY2tzIGZvciBgZXZlbnRgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHJldHVybiB7QXJyYXl9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xuICByZXR1cm4gdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XSB8fCBbXTtcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgdGhpcyBlbWl0dGVyIGhhcyBgZXZlbnRgIGhhbmRsZXJzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuRW1pdHRlci5wcm90b3R5cGUuaGFzTGlzdGVuZXJzID0gZnVuY3Rpb24oZXZlbnQpe1xuICByZXR1cm4gISEgdGhpcy5saXN0ZW5lcnMoZXZlbnQpLmxlbmd0aDtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvbXBvbmVudC10d2Vlbi9+L2NvbXBvbmVudC1lbWl0dGVyL2luZGV4LmpzIiwiXG4vLyBlYXNpbmcgZnVuY3Rpb25zIGZyb20gXCJUd2Vlbi5qc1wiXG5cbmV4cG9ydHMubGluZWFyID0gZnVuY3Rpb24obil7XG4gIHJldHVybiBuO1xufTtcblxuZXhwb3J0cy5pblF1YWQgPSBmdW5jdGlvbihuKXtcbiAgcmV0dXJuIG4gKiBuO1xufTtcblxuZXhwb3J0cy5vdXRRdWFkID0gZnVuY3Rpb24obil7XG4gIHJldHVybiBuICogKDIgLSBuKTtcbn07XG5cbmV4cG9ydHMuaW5PdXRRdWFkID0gZnVuY3Rpb24obil7XG4gIG4gKj0gMjtcbiAgaWYgKG4gPCAxKSByZXR1cm4gMC41ICogbiAqIG47XG4gIHJldHVybiAtIDAuNSAqICgtLW4gKiAobiAtIDIpIC0gMSk7XG59O1xuXG5leHBvcnRzLmluQ3ViZSA9IGZ1bmN0aW9uKG4pe1xuICByZXR1cm4gbiAqIG4gKiBuO1xufTtcblxuZXhwb3J0cy5vdXRDdWJlID0gZnVuY3Rpb24obil7XG4gIHJldHVybiAtLW4gKiBuICogbiArIDE7XG59O1xuXG5leHBvcnRzLmluT3V0Q3ViZSA9IGZ1bmN0aW9uKG4pe1xuICBuICo9IDI7XG4gIGlmIChuIDwgMSkgcmV0dXJuIDAuNSAqIG4gKiBuICogbjtcbiAgcmV0dXJuIDAuNSAqICgobiAtPSAyICkgKiBuICogbiArIDIpO1xufTtcblxuZXhwb3J0cy5pblF1YXJ0ID0gZnVuY3Rpb24obil7XG4gIHJldHVybiBuICogbiAqIG4gKiBuO1xufTtcblxuZXhwb3J0cy5vdXRRdWFydCA9IGZ1bmN0aW9uKG4pe1xuICByZXR1cm4gMSAtICgtLW4gKiBuICogbiAqIG4pO1xufTtcblxuZXhwb3J0cy5pbk91dFF1YXJ0ID0gZnVuY3Rpb24obil7XG4gIG4gKj0gMjtcbiAgaWYgKG4gPCAxKSByZXR1cm4gMC41ICogbiAqIG4gKiBuICogbjtcbiAgcmV0dXJuIC0wLjUgKiAoKG4gLT0gMikgKiBuICogbiAqIG4gLSAyKTtcbn07XG5cbmV4cG9ydHMuaW5RdWludCA9IGZ1bmN0aW9uKG4pe1xuICByZXR1cm4gbiAqIG4gKiBuICogbiAqIG47XG59XG5cbmV4cG9ydHMub3V0UXVpbnQgPSBmdW5jdGlvbihuKXtcbiAgcmV0dXJuIC0tbiAqIG4gKiBuICogbiAqIG4gKyAxO1xufVxuXG5leHBvcnRzLmluT3V0UXVpbnQgPSBmdW5jdGlvbihuKXtcbiAgbiAqPSAyO1xuICBpZiAobiA8IDEpIHJldHVybiAwLjUgKiBuICogbiAqIG4gKiBuICogbjtcbiAgcmV0dXJuIDAuNSAqICgobiAtPSAyKSAqIG4gKiBuICogbiAqIG4gKyAyKTtcbn07XG5cbmV4cG9ydHMuaW5TaW5lID0gZnVuY3Rpb24obil7XG4gIHJldHVybiAxIC0gTWF0aC5jb3MobiAqIE1hdGguUEkgLyAyICk7XG59O1xuXG5leHBvcnRzLm91dFNpbmUgPSBmdW5jdGlvbihuKXtcbiAgcmV0dXJuIE1hdGguc2luKG4gKiBNYXRoLlBJIC8gMik7XG59O1xuXG5leHBvcnRzLmluT3V0U2luZSA9IGZ1bmN0aW9uKG4pe1xuICByZXR1cm4gLjUgKiAoMSAtIE1hdGguY29zKE1hdGguUEkgKiBuKSk7XG59O1xuXG5leHBvcnRzLmluRXhwbyA9IGZ1bmN0aW9uKG4pe1xuICByZXR1cm4gMCA9PSBuID8gMCA6IE1hdGgucG93KDEwMjQsIG4gLSAxKTtcbn07XG5cbmV4cG9ydHMub3V0RXhwbyA9IGZ1bmN0aW9uKG4pe1xuICByZXR1cm4gMSA9PSBuID8gbiA6IDEgLSBNYXRoLnBvdygyLCAtMTAgKiBuKTtcbn07XG5cbmV4cG9ydHMuaW5PdXRFeHBvID0gZnVuY3Rpb24obil7XG4gIGlmICgwID09IG4pIHJldHVybiAwO1xuICBpZiAoMSA9PSBuKSByZXR1cm4gMTtcbiAgaWYgKChuICo9IDIpIDwgMSkgcmV0dXJuIC41ICogTWF0aC5wb3coMTAyNCwgbiAtIDEpO1xuICByZXR1cm4gLjUgKiAoLU1hdGgucG93KDIsIC0xMCAqIChuIC0gMSkpICsgMik7XG59O1xuXG5leHBvcnRzLmluQ2lyYyA9IGZ1bmN0aW9uKG4pe1xuICByZXR1cm4gMSAtIE1hdGguc3FydCgxIC0gbiAqIG4pO1xufTtcblxuZXhwb3J0cy5vdXRDaXJjID0gZnVuY3Rpb24obil7XG4gIHJldHVybiBNYXRoLnNxcnQoMSAtICgtLW4gKiBuKSk7XG59O1xuXG5leHBvcnRzLmluT3V0Q2lyYyA9IGZ1bmN0aW9uKG4pe1xuICBuICo9IDJcbiAgaWYgKG4gPCAxKSByZXR1cm4gLTAuNSAqIChNYXRoLnNxcnQoMSAtIG4gKiBuKSAtIDEpO1xuICByZXR1cm4gMC41ICogKE1hdGguc3FydCgxIC0gKG4gLT0gMikgKiBuKSArIDEpO1xufTtcblxuZXhwb3J0cy5pbkJhY2sgPSBmdW5jdGlvbihuKXtcbiAgdmFyIHMgPSAxLjcwMTU4O1xuICByZXR1cm4gbiAqIG4gKiAoKCBzICsgMSApICogbiAtIHMpO1xufTtcblxuZXhwb3J0cy5vdXRCYWNrID0gZnVuY3Rpb24obil7XG4gIHZhciBzID0gMS43MDE1ODtcbiAgcmV0dXJuIC0tbiAqIG4gKiAoKHMgKyAxKSAqIG4gKyBzKSArIDE7XG59O1xuXG5leHBvcnRzLmluT3V0QmFjayA9IGZ1bmN0aW9uKG4pe1xuICB2YXIgcyA9IDEuNzAxNTggKiAxLjUyNTtcbiAgaWYgKCAoIG4gKj0gMiApIDwgMSApIHJldHVybiAwLjUgKiAoIG4gKiBuICogKCAoIHMgKyAxICkgKiBuIC0gcyApICk7XG4gIHJldHVybiAwLjUgKiAoICggbiAtPSAyICkgKiBuICogKCAoIHMgKyAxICkgKiBuICsgcyApICsgMiApO1xufTtcblxuZXhwb3J0cy5pbkJvdW5jZSA9IGZ1bmN0aW9uKG4pe1xuICByZXR1cm4gMSAtIGV4cG9ydHMub3V0Qm91bmNlKDEgLSBuKTtcbn07XG5cbmV4cG9ydHMub3V0Qm91bmNlID0gZnVuY3Rpb24obil7XG4gIGlmICggbiA8ICggMSAvIDIuNzUgKSApIHtcbiAgICByZXR1cm4gNy41NjI1ICogbiAqIG47XG4gIH0gZWxzZSBpZiAoIG4gPCAoIDIgLyAyLjc1ICkgKSB7XG4gICAgcmV0dXJuIDcuNTYyNSAqICggbiAtPSAoIDEuNSAvIDIuNzUgKSApICogbiArIDAuNzU7XG4gIH0gZWxzZSBpZiAoIG4gPCAoIDIuNSAvIDIuNzUgKSApIHtcbiAgICByZXR1cm4gNy41NjI1ICogKCBuIC09ICggMi4yNSAvIDIuNzUgKSApICogbiArIDAuOTM3NTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gNy41NjI1ICogKCBuIC09ICggMi42MjUgLyAyLjc1ICkgKSAqIG4gKyAwLjk4NDM3NTtcbiAgfVxufTtcblxuZXhwb3J0cy5pbk91dEJvdW5jZSA9IGZ1bmN0aW9uKG4pe1xuICBpZiAobiA8IC41KSByZXR1cm4gZXhwb3J0cy5pbkJvdW5jZShuICogMikgKiAuNTtcbiAgcmV0dXJuIGV4cG9ydHMub3V0Qm91bmNlKG4gKiAyIC0gMSkgKiAuNSArIC41O1xufTtcblxuLy8gYWxpYXNlc1xuXG5leHBvcnRzWydpbi1xdWFkJ10gPSBleHBvcnRzLmluUXVhZDtcbmV4cG9ydHNbJ291dC1xdWFkJ10gPSBleHBvcnRzLm91dFF1YWQ7XG5leHBvcnRzWydpbi1vdXQtcXVhZCddID0gZXhwb3J0cy5pbk91dFF1YWQ7XG5leHBvcnRzWydpbi1jdWJlJ10gPSBleHBvcnRzLmluQ3ViZTtcbmV4cG9ydHNbJ291dC1jdWJlJ10gPSBleHBvcnRzLm91dEN1YmU7XG5leHBvcnRzWydpbi1vdXQtY3ViZSddID0gZXhwb3J0cy5pbk91dEN1YmU7XG5leHBvcnRzWydpbi1xdWFydCddID0gZXhwb3J0cy5pblF1YXJ0O1xuZXhwb3J0c1snb3V0LXF1YXJ0J10gPSBleHBvcnRzLm91dFF1YXJ0O1xuZXhwb3J0c1snaW4tb3V0LXF1YXJ0J10gPSBleHBvcnRzLmluT3V0UXVhcnQ7XG5leHBvcnRzWydpbi1xdWludCddID0gZXhwb3J0cy5pblF1aW50O1xuZXhwb3J0c1snb3V0LXF1aW50J10gPSBleHBvcnRzLm91dFF1aW50O1xuZXhwb3J0c1snaW4tb3V0LXF1aW50J10gPSBleHBvcnRzLmluT3V0UXVpbnQ7XG5leHBvcnRzWydpbi1zaW5lJ10gPSBleHBvcnRzLmluU2luZTtcbmV4cG9ydHNbJ291dC1zaW5lJ10gPSBleHBvcnRzLm91dFNpbmU7XG5leHBvcnRzWydpbi1vdXQtc2luZSddID0gZXhwb3J0cy5pbk91dFNpbmU7XG5leHBvcnRzWydpbi1leHBvJ10gPSBleHBvcnRzLmluRXhwbztcbmV4cG9ydHNbJ291dC1leHBvJ10gPSBleHBvcnRzLm91dEV4cG87XG5leHBvcnRzWydpbi1vdXQtZXhwbyddID0gZXhwb3J0cy5pbk91dEV4cG87XG5leHBvcnRzWydpbi1jaXJjJ10gPSBleHBvcnRzLmluQ2lyYztcbmV4cG9ydHNbJ291dC1jaXJjJ10gPSBleHBvcnRzLm91dENpcmM7XG5leHBvcnRzWydpbi1vdXQtY2lyYyddID0gZXhwb3J0cy5pbk91dENpcmM7XG5leHBvcnRzWydpbi1iYWNrJ10gPSBleHBvcnRzLmluQmFjaztcbmV4cG9ydHNbJ291dC1iYWNrJ10gPSBleHBvcnRzLm91dEJhY2s7XG5leHBvcnRzWydpbi1vdXQtYmFjayddID0gZXhwb3J0cy5pbk91dEJhY2s7XG5leHBvcnRzWydpbi1ib3VuY2UnXSA9IGV4cG9ydHMuaW5Cb3VuY2U7XG5leHBvcnRzWydvdXQtYm91bmNlJ10gPSBleHBvcnRzLm91dEJvdW5jZTtcbmV4cG9ydHNbJ2luLW91dC1ib3VuY2UnXSA9IGV4cG9ydHMuaW5PdXRCb3VuY2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2Vhc2UtY29tcG9uZW50L2luZGV4LmpzIiwidmFyIHNjcm9sbCA9IHJlcXVpcmUoJ3Njcm9sbC10bycpO1xuXG5mdW5jdGlvbiBjYWxjdWxhdGVTY3JvbGxPZmZzZXQoZWxlbSwgYWRkaXRpb25hbE9mZnNldCwgYWxpZ25tZW50KSB7XG4gIHZhciBib2R5ID0gZG9jdW1lbnQuYm9keSxcbiAgICAgIGh0bWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgdmFyIGVsZW1SZWN0ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgdmFyIGNsaWVudEhlaWdodCA9IGh0bWwuY2xpZW50SGVpZ2h0O1xuICB2YXIgZG9jdW1lbnRIZWlnaHQgPSBNYXRoLm1heCggYm9keS5zY3JvbGxIZWlnaHQsIGJvZHkub2Zmc2V0SGVpZ2h0LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWwuY2xpZW50SGVpZ2h0LCBodG1sLnNjcm9sbEhlaWdodCwgaHRtbC5vZmZzZXRIZWlnaHQgKTtcblxuICBhZGRpdGlvbmFsT2Zmc2V0ID0gYWRkaXRpb25hbE9mZnNldCB8fCAwO1xuXG4gIHZhciBzY3JvbGxQb3NpdGlvbjtcbiAgaWYgKGFsaWdubWVudCA9PT0gJ2JvdHRvbScpIHtcbiAgICBzY3JvbGxQb3NpdGlvbiA9IGVsZW1SZWN0LmJvdHRvbSAtIGNsaWVudEhlaWdodDtcbiAgfSBlbHNlIGlmIChhbGlnbm1lbnQgPT09ICdtaWRkbGUnKSB7XG4gICAgc2Nyb2xsUG9zaXRpb24gPSBlbGVtUmVjdC5ib3R0b20gLSBjbGllbnRIZWlnaHQgLyAyIC0gZWxlbVJlY3QuaGVpZ2h0IC8gMjtcbiAgfSBlbHNlIHsgLy8gdG9wIGFuZCBkZWZhdWx0XG4gICAgc2Nyb2xsUG9zaXRpb24gPSBlbGVtUmVjdC50b3A7XG4gIH1cblxuICB2YXIgbWF4U2Nyb2xsUG9zaXRpb24gPSBkb2N1bWVudEhlaWdodCAtIGNsaWVudEhlaWdodDtcbiAgcmV0dXJuIE1hdGgubWluKHNjcm9sbFBvc2l0aW9uICsgYWRkaXRpb25hbE9mZnNldCArIHdpbmRvdy5wYWdlWU9mZnNldCxcbiAgICAgICAgICAgICAgICAgIG1heFNjcm9sbFBvc2l0aW9uKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZWxlbSwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgaWYgKHR5cGVvZiBlbGVtID09PSAnc3RyaW5nJykgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbSk7XG4gIGlmIChlbGVtKSByZXR1cm4gc2Nyb2xsKDAsIGNhbGN1bGF0ZVNjcm9sbE9mZnNldChlbGVtLCBvcHRpb25zLm9mZnNldCwgb3B0aW9ucy5hbGlnbiksIG9wdGlvbnMpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vc2Nyb2xsLXRvLWVsZW1lbnQvaW5kZXguanMiLCIvKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxudmFyIFR3ZWVuID0gcmVxdWlyZSgndHdlZW4nKTtcbnZhciByYWYgPSByZXF1aXJlKCdyYWYnKTtcblxuLyoqXG4gKiBFeHBvc2UgYHNjcm9sbFRvYC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNjcm9sbFRvO1xuXG4vKipcbiAqIFNjcm9sbCB0byBgKHgsIHkpYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0geFxuICogQHBhcmFtIHtOdW1iZXJ9IHlcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gc2Nyb2xsVG8oeCwgeSwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAvLyBzdGFydCBwb3NpdGlvblxuICB2YXIgc3RhcnQgPSBzY3JvbGwoKTtcblxuICAvLyBzZXR1cCB0d2VlblxuICB2YXIgdHdlZW4gPSBUd2VlbihzdGFydClcbiAgICAuZWFzZShvcHRpb25zLmVhc2UgfHwgJ291dC1jaXJjJylcbiAgICAudG8oeyB0b3A6IHksIGxlZnQ6IHggfSlcbiAgICAuZHVyYXRpb24ob3B0aW9ucy5kdXJhdGlvbiB8fCAxMDAwKTtcblxuICAvLyBzY3JvbGxcbiAgdHdlZW4udXBkYXRlKGZ1bmN0aW9uKG8pe1xuICAgIHdpbmRvdy5zY3JvbGxUbyhvLmxlZnQgfCAwLCBvLnRvcCB8IDApO1xuICB9KTtcblxuICAvLyBoYW5kbGUgZW5kXG4gIHR3ZWVuLm9uKCdlbmQnLCBmdW5jdGlvbigpe1xuICAgIGFuaW1hdGUgPSBmdW5jdGlvbigpe307XG4gIH0pO1xuXG4gIC8vIGFuaW1hdGVcbiAgZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgICByYWYoYW5pbWF0ZSk7XG4gICAgdHdlZW4udXBkYXRlKCk7XG4gIH1cblxuICBhbmltYXRlKCk7XG4gIFxuICByZXR1cm4gdHdlZW47XG59XG5cbi8qKlxuICogUmV0dXJuIHNjcm9sbCBwb3NpdGlvbi5cbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBzY3JvbGwoKSB7XG4gIHZhciB5ID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gIHZhciB4ID0gd2luZG93LnBhZ2VYT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0O1xuICByZXR1cm4geyB0b3A6IHksIGxlZnQ6IHggfTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vc2Nyb2xsLXRvL2luZGV4LmpzIiwiLyoqXG4gKiB0b1N0cmluZyByZWYuXG4gKi9cblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqXG4gKiBSZXR1cm4gdGhlIHR5cGUgb2YgYHZhbGAuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odmFsKXtcbiAgc3dpdGNoICh0b1N0cmluZy5jYWxsKHZhbCkpIHtcbiAgICBjYXNlICdbb2JqZWN0IERhdGVdJzogcmV0dXJuICdkYXRlJztcbiAgICBjYXNlICdbb2JqZWN0IFJlZ0V4cF0nOiByZXR1cm4gJ3JlZ2V4cCc7XG4gICAgY2FzZSAnW29iamVjdCBBcmd1bWVudHNdJzogcmV0dXJuICdhcmd1bWVudHMnO1xuICAgIGNhc2UgJ1tvYmplY3QgQXJyYXldJzogcmV0dXJuICdhcnJheSc7XG4gICAgY2FzZSAnW29iamVjdCBFcnJvcl0nOiByZXR1cm4gJ2Vycm9yJztcbiAgfVxuXG4gIGlmICh2YWwgPT09IG51bGwpIHJldHVybiAnbnVsbCc7XG4gIGlmICh2YWwgPT09IHVuZGVmaW5lZCkgcmV0dXJuICd1bmRlZmluZWQnO1xuICBpZiAodmFsICE9PSB2YWwpIHJldHVybiAnbmFuJztcbiAgaWYgKHZhbCAmJiB2YWwubm9kZVR5cGUgPT09IDEpIHJldHVybiAnZWxlbWVudCc7XG5cbiAgdmFsID0gdmFsLnZhbHVlT2ZcbiAgICA/IHZhbC52YWx1ZU9mKClcbiAgICA6IE9iamVjdC5wcm90b3R5cGUudmFsdWVPZi5hcHBseSh2YWwpXG5cbiAgcmV0dXJuIHR5cGVvZiB2YWw7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb21wb25lbnQtdHlwZS9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=