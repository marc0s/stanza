"use strict";

module.exports = function (client) {
    client.use(require('./roster'));
    client.use(require('./disco'));
    client.use(require('./chatstates'));
    client.use(require('./delayed'));
    client.use(require('./forwarding'));
    client.use(require('./carbons'));
    client.use(require('./time'));
    client.use(require('./mam'));
    client.use(require('./receipts'));
    client.use(require('./idle'));
    client.use(require('./correction'));
    client.use(require('./attention'));
    client.use(require('./version'));
    client.use(require('./invisible'));
    client.use(require('./muc'));
    client.use(require('./pubsub'));
    client.use(require('./avatar'));
    client.use(require('./private'));
    client.use(require('./bookmarks'));
    client.use(require('./json'));
    client.use(require('./hashes'));
    client.use(require('./extdisco'));
    client.use(require('./geoloc'));
    client.use(require('./vcard'));
    client.use(require('./oob'));
    client.use(require('./ping'));
    client.use(require('./keepalive'));
    client.use(require('./command'));

    // For now, we can't import jingle stuff in node
    //client.use(require('./jingle'));
};