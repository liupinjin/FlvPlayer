(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.FlvPlayer = factory());
}(this, function () { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var classCallCheck = _classCallCheck;

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var createClass = _createClass;

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var _typeof_1 = createCommonjsModule(function (module) {
  function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

  function _typeof(obj) {
    if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
      module.exports = _typeof = function _typeof(obj) {
        return _typeof2(obj);
      };
    } else {
      module.exports = _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
      };
    }

    return _typeof(obj);
  }

  module.exports = _typeof;
  });

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  var assertThisInitialized = _assertThisInitialized;

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof_1(call) === "object" || typeof call === "function")) {
      return call;
    }

    return assertThisInitialized(self);
  }

  var possibleConstructorReturn = _possibleConstructorReturn;

  var getPrototypeOf = createCommonjsModule(function (module) {
  function _getPrototypeOf(o) {
    module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  module.exports = _getPrototypeOf;
  });

  var setPrototypeOf = createCommonjsModule(function (module) {
  function _setPrototypeOf(o, p) {
    module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  module.exports = _setPrototypeOf;
  });

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) setPrototypeOf(subClass, superClass);
  }

  var inherits = _inherits;

  function E () {
    // Keep this empty so it's easier to inherit from
    // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
  }

  E.prototype = {
    on: function (name, callback, ctx) {
      var e = this.e || (this.e = {});

      (e[name] || (e[name] = [])).push({
        fn: callback,
        ctx: ctx
      });

      return this;
    },

    once: function (name, callback, ctx) {
      var self = this;
      function listener () {
        self.off(name, listener);
        callback.apply(ctx, arguments);
      }
      listener._ = callback;
      return this.on(name, listener, ctx);
    },

    emit: function (name) {
      var data = [].slice.call(arguments, 1);
      var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
      var i = 0;
      var len = evtArr.length;

      for (i; i < len; i++) {
        evtArr[i].fn.apply(evtArr[i].ctx, data);
      }

      return this;
    },

    off: function (name, callback) {
      var e = this.e || (this.e = {});
      var evts = e[name];
      var liveEvents = [];

      if (evts && callback) {
        for (var i = 0, len = evts.length; i < len; i++) {
          if (evts[i].fn !== callback && evts[i].fn._ !== callback)
            liveEvents.push(evts[i]);
        }
      }

      // Remove event from queue to prevent memory leak
      // Suggested by https://github.com/lazd
      // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

      (liveEvents.length)
        ? e[name] = liveEvents
        : delete e[name];

      return this;
    }
  };

  var tinyEmitter = E;
  var TinyEmitter = E;
  tinyEmitter.TinyEmitter = TinyEmitter;

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    }
  }

  var arrayWithoutHoles = _arrayWithoutHoles;

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  var iterableToArray = _iterableToArray;

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  var nonIterableSpread = _nonIterableSpread;

  function _toConsumableArray(arr) {
    return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
  }

  var toConsumableArray = _toConsumableArray;

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  var isNativeFunction = _isNativeFunction;

  var construct = createCommonjsModule(function (module) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
      module.exports = _construct = Reflect.construct;
    } else {
      module.exports = _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  module.exports = _construct;
  });

  var wrapNativeSuper = createCommonjsModule(function (module) {
  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return construct(Class, arguments, getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  module.exports = _wrapNativeSuper;
  });

  var FlvPlayerError =
  /*#__PURE__*/
  function (_Error) {
    inherits(FlvPlayerError, _Error);

    function FlvPlayerError(message, context) {
      var _this;

      classCallCheck(this, FlvPlayerError);

      _this = possibleConstructorReturn(this, getPrototypeOf(FlvPlayerError).call(this, message));

      if (typeof Error.captureStackTrace === 'function') {
        Error.captureStackTrace(assertThisInitialized(_this), context || _this.constructor);
      }

      _this.name = 'FlvPlayerError';
      return _this;
    }

    return FlvPlayerError;
  }(wrapNativeSuper(Error));
  function errorHandle(condition, msg) {
    if (!condition) {
      throw new FlvPlayerError(msg);
    }

    return condition;
  }
  function readBuffer(buffer) {
    var index = 0;

    function read(length) {
      var tempUint8 = new Uint8Array(length);

      for (var i = 0; i < length; i += 1) {
        tempUint8[i] = buffer[index];
        index += 1;
      }

      read.index = index;
      return tempUint8;
    }

    read.index = 0;
    return read;
  }
  function mergeBuffer() {
    for (var _len = arguments.length, buffers = new Array(_len), _key = 0; _key < _len; _key++) {
      buffers[_key] = arguments[_key];
    }

    var Cons = buffers[0].constructor;
    return buffers.reduce(function (pre, val) {
      var merge = new Cons((pre.byteLength | 0) + (val.byteLength | 0));
      merge.set(pre, 0);
      merge.set(val, pre.byteLength | 0);
      return merge;
    }, new Cons());
  }
  function readDouble(array) {
    var view = new DataView(new ArrayBuffer(array.length));
    array.forEach(function (b, i) {
      view.setUint8(i, b);
    });
    return view.getFloat64(0);
  }
  function readBoolean(array) {
    return array[0] !== 0;
  }
  function readString(array) {
    var _String$fromCharCode;

    return (_String$fromCharCode = String.fromCharCode).call.apply(_String$fromCharCode, [String].concat(toConsumableArray(array)));
  }
  function readBufferSum(array) {
    var uint = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    return array.reduce(function (totle, num, index) {
      return totle + (uint ? num : num - 128) * Math.pow(256, array.length - index - 1);
    }, 0);
  }
  function createWorker(workerString) {
    return new Worker(URL.createObjectURL(new Blob([workerString], {
      type: 'application/javascript'
    })));
  }
  function secondToTime(second) {
    var add0 = function add0(num) {
      return num < 10 ? "0".concat(num) : String(num);
    };

    var hour = Math.floor(second / 3600);
    var min = Math.floor((second - hour * 3600) / 60);
    var sec = Math.floor(second - hour * 3600 - min * 60);
    return (hour > 0 ? [hour, min, sec] : [min, sec]).map(add0).join(':');
  }

  function optionValidator (flv) {
    var _flv$options = flv.options,
        container = _flv$options.container,
        url = _flv$options.url;
    errorHandle(container instanceof HTMLDivElement, 'The \'container\' option is not a \'HTMLDivElement\'');
    errorHandle(flv.constructor.instances.every(function (item) {
      return item.options.container !== container;
    }), 'Cannot mount multiple instances on the same div element, please destroy the instance first');
    errorHandle(typeof url === 'string' || url instanceof File, 'The \'url\' option is not a string or file');
  }

  var Debug = function Debug(flv) {
    classCallCheck(this, Debug);

    var debug = flv.options.debug;

    this.log = function (name) {
      if (debug) {
        var _console;

        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        (_console = console).log.apply(_console, ["FlvPlayer: [".concat(name, "]")].concat(args));
      }
    };

    this.warn = function (condition) {
      if (!condition && debug) {
        var _console2;

        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }

        (_console2 = console).warn.apply(_console2, args);
      }
    };

    this.error = function (condition, msg) {
      if (!condition) {
        throw new FlvPlayerError(msg);
      }
    };
  };

  var Events =
  /*#__PURE__*/
  function () {
    function Events() {
      classCallCheck(this, Events);

      this.destroyEvents = [];
      this.proxy = this.proxy.bind(this);
    }

    createClass(Events, [{
      key: "proxy",
      value: function proxy(target, name, callback) {
        var option = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
        target.addEventListener(name, callback, option);
        this.destroyEvents.push(function () {
          target.removeEventListener(name, callback, option);
        });
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.destroyEvents.forEach(function (event) {
          return event();
        });
      }
    }]);

    return Events;
  }();

  var play = "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"22\" width=\"22\" viewBox=\"0 0 22 22\">\n  <path d=\"M17.982 9.275L8.06 3.27A2.013 2.013 0 0 0 5 4.994v12.011a2.017 2.017 0 0 0 3.06 1.725l9.922-6.005a2.017 2.017 0 0 0 0-3.45z\"></path>\n</svg>";

  var pause = "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"22\" width=\"22\" viewBox=\"0 0 22 22\">\n    <path d=\"M7 3a2 2 0 0 0-2 2v12a2 2 0 1 0 4 0V5a2 2 0 0 0-2-2zM15 3a2 2 0 0 0-2 2v12a2 2 0 1 0 4 0V5a2 2 0 0 0-2-2z\"></path>\n</svg>";

  var volume = "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"22\" width=\"22\" viewBox=\"0 0 22 22\">\n    <path d=\"M10.188 4.65L6 8H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1l4.188 3.35a.5.5 0 0 0 .812-.39V5.04a.498.498 0 0 0-.812-.39zM14.446 3.778a1 1 0 0 0-.862 1.804 6.002 6.002 0 0 1-.007 10.838 1 1 0 0 0 .86 1.806A8.001 8.001 0 0 0 19 11a8.001 8.001 0 0 0-4.554-7.222z\"></path>\n    <path d=\"M15 11a3.998 3.998 0 0 0-2-3.465v6.93A3.998 3.998 0 0 0 15 11z\"></path>\n</svg>";

  var volumeClose = "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"22\" width=\"22\" viewBox=\"0 0 22 22\">\n    <path d=\"M15 11a3.998 3.998 0 0 0-2-3.465v2.636l1.865 1.865A4.02 4.02 0 0 0 15 11z\"></path>\n    <path d=\"M13.583 5.583A5.998 5.998 0 0 1 17 11a6 6 0 0 1-.585 2.587l1.477 1.477a8.001 8.001 0 0 0-3.446-11.286 1 1 0 0 0-.863 1.805zM18.778 18.778l-2.121-2.121-1.414-1.414-1.415-1.415L13 13l-2-2-3.889-3.889-3.889-3.889a.999.999 0 1 0-1.414 1.414L5.172 8H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1l4.188 3.35a.5.5 0 0 0 .812-.39v-3.131l2.587 2.587-.01.005a1 1 0 0 0 .86 1.806c.215-.102.424-.214.627-.333l2.3 2.3a1.001 1.001 0 0 0 1.414-1.416zM11 5.04a.5.5 0 0 0-.813-.39L8.682 5.854 11 8.172V5.04z\"></path>\n</svg>";

  var fullscreen = "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"36\" width=\"36\" viewBox=\"0 0 36 36\">\n\t<path d=\"m 10,16 2,0 0,-4 4,0 0,-2 L 10,10 l 0,6 0,0 z\"></path>\n\t<path d=\"m 20,10 0,2 4,0 0,4 2,0 L 26,10 l -6,0 0,0 z\"></path>\n\t<path d=\"m 24,24 -4,0 0,2 L 26,26 l 0,-6 -2,0 0,4 0,0 z\"></path>\n\t<path d=\"M 12,20 10,20 10,26 l 6,0 0,-2 -4,0 0,-4 0,0 z\"></path>\n</svg>";

  var Icons = function Icons() {
    var _this = this;

    classCallCheck(this, Icons);

    var icons = {
      play: play,
      pause: pause,
      volume: volume,
      volumeClose: volumeClose,
      fullscreen: fullscreen
    };
    Object.keys(icons).forEach(function (key) {
      _this[key] = "<i class=\"flv-player-icon flv-player-icon-".concat(key, "\">").concat(icons[key], "</i>");
    });
  };

  function templateInit(flv, player) {
    var options = flv.options;
    options.container.classList.add('flv-player-container');
    options.container.innerHTML = "\n        <div class=\"flv-player-inner\">\n            <canvas class=\"flv-player-canvas\" width=\"".concat(options.width, "\" height=\"").concat(options.height, "\"></canvas>\n            <div class=\"flv-player-controls\">\n                <div class=\"flv-player-controls-top\">\n                    <div class=\"flv-player-controls-left\">\n                        <div class=\"flv-player-controls-item flv-player-state\">\n                            <div class=\"flv-player-play\">").concat(flv.icons.play, "</div>\n                            <div class=\"flv-player-pause\">").concat(flv.icons.pause, "</div>\n                        </div>\n                        <div class=\"flv-player-controls-item flv-player-time\">\n                            <span class=\"flv-player-current\">00:00</span> / <span class=\"flv-player-duration\">00:00</span>\n                        </div>\n                    </div>\n                    <div class=\"flv-player-controls-right\">\n                        <div class=\"flv-player-controls-item flv-player-volume\">").concat(flv.icons.volume, "</div>\n                        <div class=\"flv-player-controls-item flv-player-fullscreen\">").concat(flv.icons.fullscreen, "</div>\n                    </div>\n                </div>\n                <div class=\"flv-player-controls-progress\">\n                    <div class=\"flv-player-loaded\"></div>\n                    <div class=\"flv-player-played\">\n                        <div class=\"flv-player-indicator\"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    ");
    Object.defineProperty(player, '$container', {
      value: options.container
    });
    Object.defineProperty(player, '$inner', {
      value: options.container.querySelector('.flv-player-inner')
    });
    Object.defineProperty(player, '$canvas', {
      value: options.container.querySelector('.flv-player-canvas')
    });
    Object.defineProperty(player, '$controls', {
      value: options.container.querySelector('.flv-player-controls')
    });
    Object.defineProperty(player, '$state', {
      value: options.container.querySelector('.flv-player-state')
    });
    Object.defineProperty(player, '$play', {
      value: options.container.querySelector('.flv-player-play')
    });
    Object.defineProperty(player, '$pause', {
      value: options.container.querySelector('.flv-player-pause')
    });
    Object.defineProperty(player, '$current', {
      value: options.container.querySelector('.flv-player-current')
    });
    Object.defineProperty(player, '$duration', {
      value: options.container.querySelector('.flv-player-duration')
    });
    Object.defineProperty(player, '$volume', {
      value: options.container.querySelector('.flv-player-volume')
    });
    Object.defineProperty(player, '$fullscreen', {
      value: options.container.querySelector('.flv-player-fullscreen')
    });
    Object.defineProperty(player, '$played', {
      value: options.container.querySelector('.flv-player-played')
    });
    Object.defineProperty(player, '$indicator', {
      value: options.container.querySelector('.flv-player-indicator')
    });
  }

  function videoMix(flv, player) {
    Object.defineProperty(player, 'currentTime', {
      get: function get() {
        return true;
      },
      set: function set(value) {
        return value;
      }
    });
    Object.defineProperty(player, 'duration', {
      get: function get() {
        return true;
      }
    });
    Object.defineProperty(player, 'volume', {
      get: function get() {
        return true;
      },
      set: function set(value) {
        return value;
      }
    });
    Object.defineProperty(player, 'ended', {
      value: function value() {
        return true;
      }
    });
    Object.defineProperty(player, 'playing', {
      value: function value() {
        return true;
      }
    });
    Object.defineProperty(player, 'play', {
      value: function value() {
        return true;
      }
    });
    Object.defineProperty(player, 'pause', {
      value: function value() {
        return true;
      }
    });
  }

  function propertysMix(flv, player) {
    Object.defineProperty(player, 'rect', {
      get: function get() {
        return flv.options.container.getBoundingClientRect();
      }
    });
    ['bottom', 'height', 'left', 'right', 'top', 'width'].forEach(function (key) {
      Object.defineProperty(player, key, {
        get: function get() {
          return player.rect[key];
        }
      });
    });
    Object.defineProperty(player, 'x', {
      get: function get() {
        return player.left + window.pageXOffset;
      }
    });
    Object.defineProperty(player, 'y', {
      get: function get() {
        return player.top + window.pageYOffset;
      }
    });
  }

  function autoSize(flv, player) {
    Object.defineProperty(player, 'autoSize', {
      value: function value() {
        var playerWidth = player.width;
        var playerHeight = player.height;
        var playerRatio = playerWidth / playerHeight;
        var canvasWidth = player.$canvas.width;
        var canvasHeight = player.$canvas.height;
        var canvasRatio = canvasWidth / canvasHeight;

        if (playerRatio > canvasRatio) {
          var padding = (playerWidth - playerHeight * canvasRatio) / 2;
          player.$container.style.paddingLeft = "".concat(padding, "px");
          player.$container.style.paddingRight = "".concat(padding, "px");
        } else {
          var _padding = (playerHeight - playerWidth * canvasRatio) / 2;

          player.$container.style.paddingTop = "".concat(_padding, "px");
          player.$container.style.paddingBottom = "".concat(_padding, "px");
        }
      }
    });
  }

  var Player = function Player(flv) {
    var _this = this;

    classCallCheck(this, Player);

    templateInit(flv, this);
    videoMix(flv, this);
    propertysMix(flv, this);
    autoSize(flv, this);
    flv.on('scripMeta', function (scripMeta) {
      var metaData = scripMeta.amf2.metaData;

      if (metaData.width && metaData.height) {
        _this.$canvas.width = metaData.width;
        _this.$canvas.height = metaData.height;

        _this.autoSize();
      }

      if (metaData.duration && !flv.options.live) {
        _this.$duration.innerText = secondToTime(metaData.duration);
      }
    });
  };

  var nalStart = new Uint8Array([0x00, 0x00, 0x00, 0x01]);

  var Demuxer =
  /*#__PURE__*/
  function () {
    function Demuxer(flv) {
      var _this = this;

      classCallCheck(this, Demuxer);

      this.flv = flv;
      var options = flv.options,
          debug = flv.debug;
      this.scripMeta = null;
      this.AVCDecoderConfigurationRecord = null;
      this.AudioSpecificConfig = null;
      this.uint8 = new Uint8Array(0);
      this.index = 0;
      this.header = null;
      flv.on('streamStart', function () {
        debug.log('stream-start', options.url);
      });
      flv.on('streaming', function (uint8) {
        _this.uint8 = mergeBuffer(_this.uint8, uint8);

        _this.parse();
      });
      flv.on('streamEnd', function (uint8) {
        debug.log('stream-end');

        if (uint8) {
          _this.uint8 = uint8;
          _this.index = 0;
          _this.header = null;

          _this.parse();
        }

        flv.isLoaded = true;
        flv.emit('parseDone');
        debug.log('parse-done');
      });
    }

    createClass(Demuxer, [{
      key: "parse",
      value: function parse() {
        var debug = this.flv.debug;

        if (!this.header && this.readable(13)) {
          var header = Object.create(null);
          header.signature = readString(this.read(3));
          header.version = this.read(1)[0];
          debug.error(header.signature === 'FLV' && header.version === 1, 'FLV header not found');
          header.flags = this.read(1)[0];
          header.headersize = readBufferSum(this.read(4));
          this.header = header;
          var prevTagSize = readBufferSum(this.read(4));
          debug.error(prevTagSize === 0, "PrevTagSize0 should be equal to 0, but got ".concat(prevTagSize));
          this.flv.emit('parseHeader', this.header);
          debug.log('parse-header', this.header);
        }

        while (this.index < this.uint8.length) {
          var restIndex = this.index;
          var tag = Object.create(null);

          if (this.readable(11)) {
            tag.tagType = this.read(1)[0];
            tag.dataSize = readBufferSum(this.read(3));
            var ts2 = this.read(1);
            var ts1 = this.read(1);
            var ts0 = this.read(1);
            var ts3 = this.read(1);
            tag.timestamp = ts0 | ts1 << 8 | ts2 << 16 | ts3 << 24;
            tag.streamID = readBufferSum(this.read(3));
            debug.error(tag.streamID === 0, "streamID should be equal to 0, but got ".concat(tag.streamID));
          } else {
            this.index = restIndex;
            break;
          }

          if (this.readable(tag.dataSize + 4)) {
            tag.body = this.read(tag.dataSize);

            var _prevTagSize = readBufferSum(this.read(4));

            debug.error(_prevTagSize === tag.dataSize + 11, "Invalid PrevTagSize: ".concat(_prevTagSize));
          } else {
            this.index = restIndex;
            break;
          }

          switch (tag.tagType) {
            case 18:
              this.demuxerScripTag(tag);
              break;

            case 9:
              this.demuxerVideoTag(tag);
              break;

            case 8:
              this.demuxerAudioTag(tag);
              break;

            default:
              debug.error(false, "unknown tag type: ".concat(tag.tagType));
              break;
          }
        }
      }
    }, {
      key: "readable",
      value: function readable(length) {
        return this.uint8.length - this.index >= length;
      }
    }, {
      key: "read",
      value: function read(length) {
        var tempUint8 = new Uint8Array(length);

        for (var i = 0; i < length; i += 1) {
          tempUint8[i] = this.uint8[this.index];
          this.index += 1;
        }

        return tempUint8;
      }
    }, {
      key: "demuxerScripTag",
      value: function demuxerScripTag(tag) {
        var debug = this.flv.debug;
        var readScripTag = readBuffer(tag.body);
        var amf1 = Object.create(null);
        var amf2 = Object.create(null);
        amf1.type = readScripTag(1)[0];
        debug.error(amf1.type === 2, "AMF: [amf1] type expect 2, but got ".concat(amf1.type));
        amf1.size = readBufferSum(readScripTag(2));
        amf1.string = readString(readScripTag(amf1.size));
        amf2.type = readScripTag(1)[0];
        debug.error(amf2.type === 8, "AMF: [amf2] type expect 8, but got ".concat(amf2.type));
        amf2.size = readBufferSum(readScripTag(4));
        amf2.metaData = Object.create(null);

        function getValue(type) {
          var value = null;

          if (type !== undefined) {
            switch (type) {
              case 0:
                value = readDouble(readScripTag(8));
                break;

              case 1:
                value = readBoolean(readScripTag(1));
                break;

              case 2:
                {
                  var valueLength = readBufferSum(readScripTag(2));
                  value = readString(readScripTag(valueLength));
                  break;
                }

              case 3:
                {
                  value = Object.create(null);
                  var lastType = -1;

                  while (lastType !== 9) {
                    var nameLength = readBufferSum(readScripTag(2));
                    var name = readString(readScripTag(nameLength));
                    var itemType = readScripTag(1)[0];

                    if (name) {
                      value[name] = getValue(itemType);
                    }

                    lastType = itemType;
                  }

                  break;
                }

              case 5:
                value = null;
                break;

              case 6:
                value = undefined;
                break;

              case 7:
                value = "Reference #".concat(readScripTag.index);
                readScripTag(2);
                break;

              case 8:
                {
                  value = Object.create(null);

                  var _lastType = -1;

                  while (_lastType !== 9) {
                    var _nameLength = readBufferSum(readScripTag(2));

                    var _name = readString(readScripTag(_nameLength));

                    var _itemType = readScripTag(1)[0];

                    if (_name) {
                      value[_name] = getValue(_itemType);
                    }

                    _lastType = _itemType;
                  }

                  break;
                }

              case 10:
                {
                  var _valueLength = readBufferSum(readScripTag(4));

                  value = [];

                  for (var index = 0; index < _valueLength; index += 1) {
                    var _itemType2 = readScripTag(1)[0];
                    value.push(getValue(_itemType2));
                  }

                  break;
                }

              case 11:
                value = readDouble(readScripTag(2));
                break;

              case 12:
                {
                  var _valueLength2 = readBufferSum(readScripTag(4));

                  value = readString(readScripTag(_valueLength2));
                  break;
                }

              default:
                debug.error(false, "AMF: Unknown metaData type: ".concat(type));
                break;
            }
          }

          return value;
        }

        while (readScripTag.index < tag.body.length) {
          var nameLength = readBufferSum(readScripTag(2));
          var name = readString(readScripTag(nameLength));
          var type = readScripTag(1)[0];

          if (name) {
            amf2.metaData[name] = getValue(type);
          }
        }

        debug.error(readScripTag.index === tag.body.length, 'AMF: Seems to be incompletely parsed');
        debug.error(amf2.size === Object.keys(amf2.metaData).length, 'AMF: [amf2] length does not match');
        this.scripMeta = {
          amf1: amf1,
          amf2: amf2
        };
        this.flv.emit('scripMeta', this.scripMeta);
        debug.log('scrip-meta', this.scripMeta);
      }
    }, {
      key: "demuxerVideoTag",
      value: function demuxerVideoTag(tag) {
        var debug = this.flv.debug;
        debug.error(tag.body.length > 1, 'Invalid video packet');
        var header = {
          frameType: (tag.body[0] & 0xf0) >> 4,
          codecID: tag.body[0] & 0x0f
        };
        debug.error(header.codecID === 7, "[videoTrack] Unsupported codec in video frame: ".concat(header.codecID));
        var packet = tag.body.slice(1, 5);
        debug.error(packet.length >= 4, '[H264] Invalid AVC packet, missing AVCPacketType or/and CompositionTime');
        var view = new DataView(packet.buffer);
        var AVCPacketType = view.getUint8(0);
        var CompositionTime = (view.getUint32(0) & 0x00ffffff) << 8 >> 8;
        var pts = CompositionTime + tag.timestamp;
        var packetData = tag.body.subarray(5);

        if (AVCPacketType === 0) {
          debug.warn(!this.AVCDecoderConfigurationRecord, '[h264] Find another one AVCDecoderConfigurationRecord');
          debug.error(packetData.length >= 7, '[H264] AVCDecoderConfigurationRecord parse length is not enough');
          var readDcr = readBuffer(packetData);
          var result = {};
          result.configurationVersion = readDcr(1)[0];
          debug.error(result.configurationVersion === 1, "[H264] Invalid configurationVersion: ".concat(result.configurationVersion));
          result.AVCProfileIndication = readDcr(1)[0];
          debug.error(result.AVCProfileIndication !== 0, "[H264] Invalid AVCProfileIndication: ".concat(result.AVCProfileIndication));
          result.profile_compatibility = readDcr(1)[0];
          result.AVCLevelIndication = readDcr(1)[0];
          result.lengthSizeMinusOne = (readDcr(1)[0] & 3) + 1;
          debug.error(result.lengthSizeMinusOne === 4 || result.lengthSizeMinusOne !== 3, "[H264] Invalid lengthSizeMinusOne: ".concat(result.lengthSizeMinusOne));
          result.numOfSequenceParameterSets = readDcr(1)[0] & 31;
          debug.error(result.numOfSequenceParameterSets !== 0, "[H264] Invalid numOfSequenceParameterSets: ".concat(result.numOfSequenceParameterSets));
          debug.warn(result.numOfSequenceParameterSets === 1, "[H264] Strange numOfSequenceParameterSets: ".concat(result.numOfSequenceParameterSets));

          for (var index = 0; index < result.numOfSequenceParameterSets; index += 1) {
            result.sequenceParameterSetLength = readBufferSum(readDcr(2));

            if (result.sequenceParameterSetLength > 0) {
              var SPS = readDcr(result.sequenceParameterSetLength);
              this.flv.emit('videoData', mergeBuffer(nalStart, SPS));
            }
          }

          result.numOfPictureParameterSets = readDcr(1)[0];
          debug.error(result.numOfPictureParameterSets !== 0, "[H264] Invalid numOfPictureParameterSets: ".concat(result.numOfPictureParameterSets));
          debug.warn(result.numOfPictureParameterSets === 1, "[H264] Strange numOfPictureParameterSets: ".concat(result.numOfPictureParameterSets));

          for (var _index = 0; _index < result.numOfPictureParameterSets; _index += 1) {
            result.pictureParameterSetLength = readBufferSum(readDcr(2));

            if (result.pictureParameterSetLength > 0) {
              var PPS = readDcr(result.pictureParameterSetLength);
              this.flv.emit('videoData', mergeBuffer(nalStart, PPS), pts);
            }
          }

          this.AVCDecoderConfigurationRecord = result;
          this.flv.emit('AVCDecoderConfigurationRecord', result);
          debug.log('avc-decoder-configuration-record', result);
        } else if (AVCPacketType === 1) {
          var lengthSizeMinusOne = this.AVCDecoderConfigurationRecord.lengthSizeMinusOne;
          var readVideo = readBuffer(packetData);

          while (readVideo.index < packetData.length) {
            var length = readBufferSum(readVideo(lengthSizeMinusOne));
            this.flv.emit('videoData', mergeBuffer(nalStart, readVideo(length)), pts);
          }
        } else {
          debug.error(AVCPacketType === 2, "[H264] Invalid video packet type ".concat(AVCPacketType));
        }
      }
    }, {
      key: "demuxerAudioTag",
      value: function demuxerAudioTag(tag) {
        var debug = this.flv.debug;
        debug.error(tag.body.length > 1, 'Invalid audio packet');
        var header = {
          soundFormat: (tag.body[0] & 0xf0) >> 4,
          soundRate: (tag.body[0] & 0x0c) >> 2,
          soundSize: (tag.body[0] & 0x02) >> 1,
          soundType: (tag.body[0] & 0x01) >> 0
        };
        debug.error(header.soundFormat === 10, "[audioTrack] unsupported audio format: ".concat(header.soundFormat));
        var packet = tag.body.subarray(1);
        var packetType = packet[0];

        if (packetType === 0) {
          var packetData = packet.subarray(1);
          debug.warn(!this.AudioSpecificConfig, '[aac] Find another one AudioSpecificConfig');
          debug.error(packetData.length >= 2, '[aac] AudioSpecificConfig parse length is not enough');
          var result = {};
          result.audioObjectType = (packetData[0] & 0xf8) >> 3;
          result.samplingFrequencyIndex = ((packetData[0] & 7) << 1) + ((packetData[1] & 0x80) >> 7 & 1);
          result.channelConfiguration = (packetData[1] & 0x7f) >> 3;
          this.AudioSpecificConfig = result;
          this.flv.emit('AudioSpecificConfig', result);
          debug.log('audio-specific-config', result);
        } else {
          var _this$AudioSpecificCo = this.AudioSpecificConfig,
              audioObjectType = _this$AudioSpecificCo.audioObjectType,
              samplingFrequencyIndex = _this$AudioSpecificCo.samplingFrequencyIndex,
              channelConfiguration = _this$AudioSpecificCo.channelConfiguration;
          var ADTSLen = tag.dataSize - 2 + 7;
          var ADTSHeader = new Uint8Array(7);
          ADTSHeader[0] = 0xff;
          ADTSHeader[1] = 0xf0;
          ADTSHeader[1] |= 0 << 3;
          ADTSHeader[1] |= 0 << 1;
          ADTSHeader[1] |= 1;
          ADTSHeader[2] = audioObjectType - 1 << 6;
          ADTSHeader[2] |= (samplingFrequencyIndex & 0x0f) << 2;
          ADTSHeader[2] |= 0 << 1;
          ADTSHeader[2] |= (channelConfiguration & 0x04) >> 2;
          ADTSHeader[3] = (channelConfiguration & 0x03) << 6;
          ADTSHeader[3] |= 0 << 5;
          ADTSHeader[3] |= 0 << 4;
          ADTSHeader[3] |= 0 << 3;
          ADTSHeader[3] |= 0 << 2;
          ADTSHeader[3] |= (ADTSLen & 0x1800) >> 11;
          ADTSHeader[4] = (ADTSLen & 0x7f8) >> 3;
          ADTSHeader[5] = (ADTSLen & 0x7) << 5;
          ADTSHeader[5] |= 0x1f;
          ADTSHeader[6] = 0xfc;
          var ADTSBody = tag.body.subarray(2);
          var data = mergeBuffer(ADTSHeader, ADTSBody);
          this.flv.emit('audioData', data, tag.timestamp);
        }
      }
    }]);

    return Demuxer;
  }();

  //
  //  Copyright (c) 2014 Sam Leitch. All rights reserved.
  //
  //  Permission is hereby granted, free of charge, to any person obtaining a copy
  //  of this software and associated documentation files (the "Software"), to
  //  deal in the Software without restriction, including without limitation the
  //  rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
  //  sell copies of the Software, and to permit persons to whom the Software is
  //  furnished to do so, subject to the following conditions:
  //
  //  The above copyright notice and this permission notice shall be included in
  //  all copies or substantial portions of the Software.
  //
  //  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  //  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  //  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  //  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  //  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
  //  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
  //  IN THE SOFTWARE.
  //

  /**
   * This class can be used to render output pictures from an H264bsdDecoder to a canvas element.
   * If available the content is rendered using WebGL.
   */
  function H264bsdCanvas(canvas, forceNoGL) {
    this.canvasElement = canvas;
    if (!forceNoGL) this.initContextGL();

    if (this.contextGL) {
      this.initProgram();
      this.initBuffers();
      this.initTextures();
    }
  }
  /**
   * Returns true if the canvas supports WebGL
   */

  H264bsdCanvas.prototype.isWebGL = function () {
    return this.contextGL;
  };
  /**
   * Create the GL context from the canvas element
   */


  H264bsdCanvas.prototype.initContextGL = function () {
    var canvas = this.canvasElement;
    var gl = null;
    var validContextNames = ["webgl", "experimental-webgl", "moz-webgl", "webkit-3d"];
    var nameIndex = 0;

    while (!gl && nameIndex < validContextNames.length) {
      var contextName = validContextNames[nameIndex];

      try {
        gl = canvas.getContext(contextName);
      } catch (e) {
        gl = null;
      }

      if (!gl || typeof gl.getParameter !== "function") {
        gl = null;
      }

      ++nameIndex;
    }

    this.contextGL = gl;
  };
  /**
   * Initialize GL shader program
   */


  H264bsdCanvas.prototype.initProgram = function () {
    var gl = this.contextGL;
    var vertexShaderScript = ['attribute vec4 vertexPos;', 'attribute vec4 texturePos;', 'varying vec2 textureCoord;', 'void main()', '{', 'gl_Position = vertexPos;', 'textureCoord = texturePos.xy;', '}'].join('\n');
    var fragmentShaderScript = ['precision highp float;', 'varying highp vec2 textureCoord;', 'uniform sampler2D ySampler;', 'uniform sampler2D uSampler;', 'uniform sampler2D vSampler;', 'const mat4 YUV2RGB = mat4', '(', '1.1643828125, 0, 1.59602734375, -.87078515625,', '1.1643828125, -.39176171875, -.81296875, .52959375,', '1.1643828125, 2.017234375, 0, -1.081390625,', '0, 0, 0, 1', ');', 'void main(void) {', 'highp float y = texture2D(ySampler,  textureCoord).r;', 'highp float u = texture2D(uSampler,  textureCoord).r;', 'highp float v = texture2D(vSampler,  textureCoord).r;', 'gl_FragColor = vec4(y, u, v, 1) * YUV2RGB;', '}'].join('\n');
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderScript);
    gl.compileShader(vertexShader);

    if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
      console.log('Vertex shader failed to compile: ' + gl.getShaderInfoLog(vertexShader));
    }

    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderScript);
    gl.compileShader(fragmentShader);

    if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
      console.log('Fragment shader failed to compile: ' + gl.getShaderInfoLog(fragmentShader));
    }

    var program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.log('Program failed to compile: ' + gl.getProgramInfoLog(program));
    }

    gl.useProgram(program);
    this.shaderProgram = program;
  };
  /**
   * Initialize vertex buffers and attach to shader program
   */


  H264bsdCanvas.prototype.initBuffers = function () {
    var gl = this.contextGL;
    var program = this.shaderProgram;
    var vertexPosBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexPosBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([1, 1, -1, 1, 1, -1, -1, -1]), gl.STATIC_DRAW);
    var vertexPosRef = gl.getAttribLocation(program, 'vertexPos');
    gl.enableVertexAttribArray(vertexPosRef);
    gl.vertexAttribPointer(vertexPosRef, 2, gl.FLOAT, false, 0, 0);
    var texturePosBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, texturePosBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([1, 0, 0, 0, 1, 1, 0, 1]), gl.STATIC_DRAW);
    var texturePosRef = gl.getAttribLocation(program, 'texturePos');
    gl.enableVertexAttribArray(texturePosRef);
    gl.vertexAttribPointer(texturePosRef, 2, gl.FLOAT, false, 0, 0);
    this.texturePosBuffer = texturePosBuffer;
  };
  /**
   * Initialize GL textures and attach to shader program
   */


  H264bsdCanvas.prototype.initTextures = function () {
    var gl = this.contextGL;
    var program = this.shaderProgram;
    var yTextureRef = this.initTexture();
    var ySamplerRef = gl.getUniformLocation(program, 'ySampler');
    gl.uniform1i(ySamplerRef, 0);
    this.yTextureRef = yTextureRef;
    var uTextureRef = this.initTexture();
    var uSamplerRef = gl.getUniformLocation(program, 'uSampler');
    gl.uniform1i(uSamplerRef, 1);
    this.uTextureRef = uTextureRef;
    var vTextureRef = this.initTexture();
    var vSamplerRef = gl.getUniformLocation(program, 'vSampler');
    gl.uniform1i(vSamplerRef, 2);
    this.vTextureRef = vTextureRef;
  };
  /**
   * Create and configure a single texture
   */


  H264bsdCanvas.prototype.initTexture = function () {
    var gl = this.contextGL;
    var textureRef = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, textureRef);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.bindTexture(gl.TEXTURE_2D, null);
    return textureRef;
  };
  /**
   * Draw picture data to the canvas.
   * If this object is using WebGL, the data must be an I420 formatted ArrayBuffer,
   * Otherwise, data must be an RGBA formatted ArrayBuffer.
   */


  H264bsdCanvas.prototype.drawNextOutputPicture = function (width, height, croppingParams, data) {
    var gl = this.contextGL;

    if (gl) {
      this.drawNextOuptutPictureGL(width, height, croppingParams, data);
    } else {
      this.drawNextOuptutPictureRGBA(width, height, croppingParams, data);
    }
  };
  /**
   * Draw the next output picture using WebGL
   */


  H264bsdCanvas.prototype.drawNextOuptutPictureGL = function (width, height, croppingParams, data) {
    var gl = this.contextGL;
    var texturePosBuffer = this.texturePosBuffer;
    var yTextureRef = this.yTextureRef;
    var uTextureRef = this.uTextureRef;
    var vTextureRef = this.vTextureRef;

    if (croppingParams === null) {
      gl.viewport(0, 0, width, height);
    } else {
      gl.viewport(0, 0, croppingParams.width, croppingParams.height);
      var tTop = croppingParams.top / height;
      var tLeft = croppingParams.left / width;
      var tBottom = croppingParams.height / height;
      var tRight = croppingParams.width / width;
      var texturePosValues = new Float32Array([tRight, tTop, tLeft, tTop, tRight, tBottom, tLeft, tBottom]);
      gl.bindBuffer(gl.ARRAY_BUFFER, texturePosBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, texturePosValues, gl.DYNAMIC_DRAW);
    }

    var i420Data = data;
    var yDataLength = width * height;
    var yData = i420Data.subarray(0, yDataLength);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, yTextureRef);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.LUMINANCE, width, height, 0, gl.LUMINANCE, gl.UNSIGNED_BYTE, yData);
    var cbDataLength = width / 2 * height / 2;
    var cbData = i420Data.subarray(yDataLength, yDataLength + cbDataLength);
    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, uTextureRef);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.LUMINANCE, width / 2, height / 2, 0, gl.LUMINANCE, gl.UNSIGNED_BYTE, cbData);
    var crDataLength = cbDataLength;
    var crData = i420Data.subarray(yDataLength + cbDataLength, yDataLength + cbDataLength + crDataLength);
    gl.activeTexture(gl.TEXTURE2);
    gl.bindTexture(gl.TEXTURE_2D, vTextureRef);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.LUMINANCE, width / 2, height / 2, 0, gl.LUMINANCE, gl.UNSIGNED_BYTE, crData);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  };
  /**
   * Draw next output picture using ARGB data on a 2d canvas.
   */


  H264bsdCanvas.prototype.drawNextOuptutPictureRGBA = function (width, height, croppingParams, data) {
    var canvas = this.canvasElement;
    var croppingParams = null;
    var argbData = data;
    var ctx = canvas.getContext('2d');
    var imageData = ctx.getImageData(0, 0, width, height);
    imageData.data.set(argbData);

    if (croppingParams === null) {
      ctx.putImageData(imageData, 0, 0);
    } else {
      ctx.putImageData(imageData, -croppingParams.left, -croppingParams.top, 0, 0, croppingParams.width, croppingParams.height);
    }
  };


  var Decoder = function Decoder(flv) {
    var _this = this;

    classCallCheck(this, Decoder);

    var $canvas = flv.player.$canvas,
        proxy = flv.events.proxy;
    this.decoder = createWorker(workerString);
    this.renderer = new H264bsdCanvas($canvas);
    proxy(this.decoder, 'message', function (event) {
      var message = event.data;
      if (!message.hasOwnProperty('type')) return;

      switch (message.type) {
        case 'pictureReady':
          _this.renderer.drawNextOutputPicture(message.width, message.height, message.croppingParams, new Uint8Array(message.data));

          break;

        default:
          break;
      }
    });
    var sps = null;
    var pps = null;
    flv.on('videoData', function (nalu) {
      var readNalu = readBuffer(nalu);
      readNalu(4);
      var nalHeader = readNalu(1)[0];
      var naluType = nalHeader & 31;

      switch (naluType) {
        case 1:
        case 5:
          {
            var frame = mergeBuffer(sps, pps, nalu);

            _this.decoder.postMessage({
              type: 'queueInput',
              data: frame.buffer
            }, [frame.buffer]);

            break;
          }

        case 7:
          sps = nalu;
          break;

        case 8:
          pps = nalu;
          break;

        default:
          break;
      }
    });
  };

  function fetchRequest(flv, url) {
    flv.emit('streamStart');
    fetch(url, {
      headers: flv.options.headers
    }).then(function (response) {
      var reader = response.body.getReader();
      flv.on('destroy', function () {
        reader.cancel();
      });
      flv.on('streamCancel', function () {
        reader.cancel();
        flv.debug.log('stream-cancel');
      });

      (function read() {
        reader.read().then(function (_ref) {
          var done = _ref.done,
              value = _ref.value;

          if (done) {
            flv.emit('streamEnd');
            return;
          }

          flv.emit('streaming', new Uint8Array(value));
          read();
        })["catch"](function (error) {
          throw error;
        });
      })();
    });
  }

  function mozXhrRequest(flv, url) {
    flv.emit('streamStart');
    var proxy = flv.events.proxy,
        headers = flv.options.headers;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'moz-chunked-arraybuffer';
    Object.keys(headers).forEach(function (key) {
      xhr.setRequestHeader(key, headers[key]);
    });
    proxy(xhr, 'readystatechange', function () {
      flv.emit('readystatechange', xhr);
    });
    proxy(xhr, 'progress', function () {
      flv.emit('streaming', new Uint8Array(xhr.response));
    });
    proxy(xhr, 'loadend', function () {
      flv.emit('streamEnd');
    });
    proxy(xhr, 'error', function (error) {
      throw error;
    });
    flv.on('destroy', function () {
      xhr.abort();
    });
    flv.on('streamCancel', function () {
      xhr.abort();
      flv.debug.log('stream-cancel');
    });
    xhr.send();
  }

  function xhrRequest(flv, url) {
    flv.emit('streamStart');
    var proxy = flv.events.proxy,
        headers = flv.options.headers;
    var textEncoder = new TextEncoder();
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'text';
    Object.keys(headers).forEach(function (key) {
      xhr.setRequestHeader(key, headers[key]);
    });
    var index = 0;
    proxy(xhr, 'readystatechange', function () {
      flv.emit('readystatechange', xhr);
    });
    proxy(xhr, 'progress', function () {
      var rawText = xhr.responseText.substr(index);
      index = xhr.responseText.length;
      flv.emit('streaming', textEncoder.encode(rawText, {
        stream: true
      }));
    });
    proxy(xhr, 'loadend', function () {
      flv.emit('streaming', textEncoder.encode('', {
        stream: false
      }));
      flv.emit('streamEnd');
    });
    proxy(xhr, 'error', function (error) {
      throw error;
    });
    flv.on('destroy', function () {
      xhr.abort();
    });
    flv.on('streamCancel', function () {
      xhr.abort();
      flv.debug.log('stream-cancel');
    });
    xhr.send();
  }

  function readFile(flv, file) {
    flv.emit('streamStart');
    var proxy = flv.events.proxy;
    var reader = new FileReader();
    proxy(reader, 'load', function (e) {
      var buffer = e.target.result;
      flv.emit('streamEnd', new Uint8Array(buffer));
    });
    reader.readAsArrayBuffer(file);
  }

  function supportsXhrResponseType(type) {
    try {
      var tmpXhr = new XMLHttpRequest();
      tmpXhr.responseType = type;
      return tmpXhr.responseType === type;
    } catch (e) {
      return false;
    }
  }

  var Stream =
  /*#__PURE__*/
  function () {
    function Stream(flv) {
      classCallCheck(this, Stream);

      var url = flv.options.url;
      this.transportFactory = Stream.getStreamFactory(url);
      this.transportFactory(flv, url);
    }

    createClass(Stream, null, [{
      key: "getStreamFactory",
      value: function getStreamFactory(url) {
        if (url instanceof File) {
          return readFile;
        }

        if (typeof Response !== 'undefined' && Object.prototype.hasOwnProperty.call(Response.prototype, 'body') && typeof Headers === 'function') {
          return fetchRequest;
        }

        var mozChunked = 'moz-chunked-arraybuffer';

        if (supportsXhrResponseType(mozChunked)) {
          return mozXhrRequest;
        }

        return xhrRequest;
      }
    }]);

    return Stream;
  }();

  var id = 0;

  var FlvPlayer =
  /*#__PURE__*/
  function (_Emitter) {
    inherits(FlvPlayer, _Emitter);

    function FlvPlayer(options) {
      var _this;

      classCallCheck(this, FlvPlayer);

      _this = possibleConstructorReturn(this, getPrototypeOf(FlvPlayer).call(this));
      _this.options = Object.assign({}, FlvPlayer.options, options);
      optionValidator(assertThisInitialized(_this));
      _this.debug = new Debug(assertThisInitialized(_this));
      _this.events = new Events(assertThisInitialized(_this));
      _this.icons = new Icons(assertThisInitialized(_this));
      _this.player = new Player(assertThisInitialized(_this));
      _this.decoder = new Decoder(assertThisInitialized(_this));
      _this.demuxer = new Demuxer(assertThisInitialized(_this));
      _this.stream = new Stream(assertThisInitialized(_this));
      id += 1;
      _this.id = id;
      _this.isDestroy = false;
      _this.isLoaded = false;
      FlvPlayer.instances.push(assertThisInitialized(_this));
      return _this;
    }

    createClass(FlvPlayer, [{
      key: "destroy",
      value: function destroy() {
        this.events.destroy();
        this.decoder.destroy();
        this.demuxer.destroy();
        this.stream.destroy();
        this.options.container.innerHTML = '';
        this.isDestroy = true;
        FlvPlayer.instances.splice(FlvPlayer.instances.indexOf(this), 1);
        this.emit('destroy');
      }
    }], [{
      key: "options",
      get: function get() {
        return {
          url: '',
          container: null,
          debug: false,
          live: false,
          muted: false,
          loop: false,
          autoplay: false,
          headers: {},
          width: 400,
          height: 300
        };
      }
    }, {
      key: "version",
      get: function get() {
        return '1.0.0';
      }
    }, {
      key: "env",
      get: function get() {
        return '"development"';
      }
    }]);

    return FlvPlayer;
  }(tinyEmitter);

  Object.defineProperty(FlvPlayer, 'instances', {
    value: []
  });

  return FlvPlayer;

}));
//# sourceMappingURL=flvplayer.js.map