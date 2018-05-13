import io from '../socket';
import cookie from 'react-cookies'

function subcribeToChatMessage(cb) {
  io.socket.on(cookie.load('username') + '-message', cb);
}

function subscribeToChatThread(cb) {
  io.socket.on(cookie.load('username') + '-thread', cb);
}

export default {
  subcribeToChatMessage,
  subscribeToChatThread
};