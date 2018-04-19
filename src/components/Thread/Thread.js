import React from 'react';
import './Thread.css';

import MessageList from "../MessageList/MessageList";
import MessageInput from "../MessageInput/MessageInput";

const Thread = (props) => (
  <div className="Thread" >
    <MessageList
      thread={props.thread.messages}
      onMessageSubmit={props.onMessageSubmit}
    />
    <MessageInput
      onMessageSubmit={props.onMessageSubmit}
      threadId={props.threadId}
    />
  </div>
);

export default Thread;