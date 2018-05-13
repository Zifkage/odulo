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
  });
};

const fetchMessagesThreads = (t, cb) => {
  io.socket.get('/messageThread/getThreads', {
    t
  }, function(body, JWR){
    for (let i = 0; i < body.length; i++){
      delete body[i].createdAt;
      delete body[i].updatedAt;
      delete body[i].user;
      console.log(body);
    }
    cb(body, JWR);
  });
};

const postMessage = (message, token, receiver, cb) => {
  io.socket.post(
    '/message/sendMessage',
    {
      message: message,
      token: token,
      receiver:  receiver
    },
    (body, JWR) => {
      cb(body, JWR)
    });
};

const postThread = (token, username, cb) => {

  io.socket.post(
    '/messageThread/newThread',
    {
      token: token,
      title: username
    },
    (body, JWR) => {
      cb(body, JWR);
    }
  );
};

export default {
  login,
  fetchUser,
  fetchMessagesThreads,
  postMessage,
  postThread
};