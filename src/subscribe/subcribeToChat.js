import io from '../socket';

function subcribeToChat(cb) {
  io.socket.on('message', cb);
}

export default subcribeToChat;