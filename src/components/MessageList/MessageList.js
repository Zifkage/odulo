import React from 'react';
import './MessageList.css';
import * as Scroll from 'react-scroll';
import subcribeToChat from '../../subscribe/subcribeToChat';

// let scroll = Scroll.animateScroll;
// let scrollSpy = Scroll.scrollSpy;
let Element = Scroll.Element;

class MessageList extends React.Component {


  componentDidMount(){
    subcribeToChat((e) => {
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
          this.props.thread.map((m, index) => (
            <Element name={'el' + index} key={index}>
              <div >

                <span className={(m.author === window.localStorage.getItem('username')) ? 'right' : ''}>{m.text}</span>
              </div>
            </Element>
          ))
        }

      </div>
    );
  }
}

export default MessageList;