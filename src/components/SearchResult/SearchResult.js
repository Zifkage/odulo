import React from 'react';
import cookie from 'react-cookies';
import io from '../../socket';


const onClick = (username, props) => {
  io.socket.post(
    '/messageThread/newThread',
    {
      token: cookie.load('token'),
      title: username
    },
    (body, JWR) => {
      props.closeModal();
      props.onNewThread(body.threadId, username);
    }
  )
};

const SearchBar = (props) => (
  props.result.map((u,i) => u.username !== cookie.load('username') ?
      (<p onClick={() => onClick(u.username, props)} key={'su'+i} >{u.username}</p>)
      : null)
);

export default SearchBar;