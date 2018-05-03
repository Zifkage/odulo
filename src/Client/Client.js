// import axios from '../axios';

import io from '../socket';

const login = (user, cb) => {

  io.socket.put('/user/login', {
    username: user.email,
    password: user.password
  }, function (body, JWR) {
    cb(body, JWR);
  });
};

const fetchUser = (q, cb) => {
  io.socket.get('/user/fetch', {
    q
  }, function (body, JWR) {
    cb(body, JWR);
  })
};

export default {
  login,
  fetchUser
};