'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var utils = require('./utils.js');

var Event = /*#__PURE__*/function () {
  function Event(channel, topic, payload) {
    _classCallCheck(this, Event);

    this.channel = channel;
    this.topic = topic;
    this.payload = payload;
  }

  _createClass(Event, [{
    key: "toKey",
    value: function toKey() {
      return utils.toKey(this.channel, this.topic);
    }
  }]);

  return Event;
}();

module.exports = Event;
