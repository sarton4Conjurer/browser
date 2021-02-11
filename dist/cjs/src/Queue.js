'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Queue = /*#__PURE__*/function () {
  function Queue() {
    var maxLength = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;

    _classCallCheck(this, Queue);

    this.maxSize = maxLength;
    this.array = [];
  }

  _createClass(Queue, [{
    key: "push",
    value: function push(item) {
      // If we are out of room, get rid of the oldest element
      if (this.array.length >= this.maxSize) {
        this.array.pop();
      }

      this.array.unshift(item);
    }
  }, {
    key: "peek",
    value: function peek() {
      return this.array[0];
    }
  }, {
    key: "toArray",
    value: function toArray() {
      return this.array.slice();
    }
  }]);

  return Queue;
}();

module.exports = Queue;
