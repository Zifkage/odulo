const socketIOClient = require('socket.io-client');
const sailsIOClient  = require('sails.io.js');

const io = sailsIOClient(socketIOClient);

io.sails.url = 'http://localhost:3030';

export default io;

