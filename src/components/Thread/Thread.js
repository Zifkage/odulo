import React from 'react';
import './Thread.css';

import MessageList from "../MessageList/MessageList";
import MessageInput from "../MessageInput/MessageInput";

const Thread = (props) => (
  (props.threadId) ? (
    <div className="Thread" >
      <MessageList
        messages={props.thread.messages || []}
        onMessageSubmit={props.onMessageSubmit}
      />
      <MessageInput
        onMessageSubmit={props.onMessageSubmit}
        onThreadIdUpdate={props.onThreadIdUpdate}
        thread={props.thread}
      />
    </div>
  ) :
    null

);

export default Thread;