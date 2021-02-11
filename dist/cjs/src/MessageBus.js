'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var index = require('../node_modules/eventemitter3/index.js');

var Event = require('./Event.js');

var Sink = require('./Sink.js');

var utils = require('./utils.js');

function getGlobalThis() {
  if (typeof window !== 'undefined') {
    return window;
  }

  if (typeof global !== 'undefined') {
    return global;
  }

  throw new Error('unable to locate global object');
}

function getGlobalObjects() {
  var objs = getGlobalThis()['@podium'];

  if (!objs) {
    objs = {};
    objs.ee = new index();
    objs.sink = new Sink();
    getGlobalThis()['@podium'] = objs;
  }

  return objs;
}

var MessageBus = /*#__PURE__*/function () {
  function MessageBus() {
    _classCallCheck(this, MessageBus);

    var _getGlobalObjects = getGlobalObjects(),
        ee = _getGlobalObjects.ee,
        sink = _getGlobalObjects.sink;

    this.ee = ee;
    this.sink = sink;
  }
  /**
   * Get the latest events, newest first
   */


  _createClass(MessageBus, [{
    key: "log",
    value: function log(channel, topic) {
      return this.sink.log(channel, topic);
    }
    /**
     * Get the latest event
     */

  }, {
    key: "peek",
    value: function peek(channel, topic) {
      return this.sink.peek(channel, topic);
    }
  }, {
    key: "publish",
    value: function publish(channel, topic, payload) {
      var event = new Event(channel, topic, payload);
      this.ee.emit(event.toKey(), event);
      this.sink.push(event);
      return event;
    }
  }, {
    key: "subscribe",
    value: function subscribe(channel, topic, listener) {
      this.ee.on(utils.toKey(channel, topic), listener);
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(channel, topic, listener) {
      this.ee.off(utils.toKey(channel, topic), listener);
    }
  }]);

  return MessageBus;
}();

module.exports = MessageBus;
