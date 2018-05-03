import io from '../socket';

function subcribeToChatMessage(cb) {
  io.socket.on('message', cb);
}

function subscribeToChatThread(cb) {
  io.socket.on('thread', cb);
}

export default {
  subcribeToChatMessage,
  subscribeToChatThread
};