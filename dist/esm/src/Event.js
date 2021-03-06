import { toKey } from './utils.js';

class Event {
    constructor(channel, topic, payload) {
        this.channel = channel;
        this.topic = topic;
        this.payload = payload;
    }

    toKey() {
        return toKey(this.channel, this.topic);
    }
}

export default Event;
