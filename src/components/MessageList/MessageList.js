import React from 'react';
import './MessageList.css';
import * as Scroll from 'react-scroll';
import socketSubscriber from '../../subscribe/subcribeToChat';
import cookie from 'react-cookies';

// let scroll = Scroll.animateScroll;
// let scrollSpy = Scroll.scrollSpy;
let Element = Scroll.Element;

class MessageList extends React.Component {


  componentDidMount(){
    socketSubscriber.subcribeToChatMessage((e) => {
      console.log(e.threadId);
      this.props.onMessageSubmit(e.message, e.author, e.threadId);
    });
    
    window.addEventListener('scroll', function () {
      console.log(window.pageYOffset);
    });
  }


  render(){
    return (
      <div   className="MessageListContent">
        {
          this.props.messages.map((m, index) => (
            <Element name={'el' + index} key={index}>
              <div >

                <span className={(m.author === parseInt(cookie.load('id'), 0)) ? 'right' : ''}>{m.text}</span>
              </div>
            </Element>
          ))
        }

      </div>
    );
  }
}

export default MessageList;