'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var utils = require('./utils.js');

var Queue = require('./Queue.js');

var Sink = /*#__PURE__*/function () {
  function Sink() {
    _classCallCheck(this, Sink);

    this.map = new Map();
  }

  _createClass(Sink, [{
    key: "getQueue",
    value: function getQueue(channel, topic) {
      return this.map.get(utils.toKey(channel, topic)) || new Queue();
    }
  }, {
    key: "push",
    value: function push(event) {
      var queue = this.getQueue(event.channel, event.topic);
      queue.push(event);
      this.map.set(event.toKey(), queue);
    }
  }, {
    key: "peek",
    value: function peek(channel, topic) {
      return this.getQueue(channel, topic).peek();
    }
  }, {
    key: "log",
    value: function log(channel, topic) {
      return this.getQueue(channel, topic).toArray();
    }
  }]);

  return Sink;
}();

module.exports = Sink;
