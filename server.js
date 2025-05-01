const { PeerServer } = require("peer");
const PORT = process.env.PORT || 10000;
const peerServer = PeerServer({ port: 10000, path: "/" });