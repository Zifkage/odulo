import React from 'react';
import './MessageInput.css';
import io from '../../socket';
import cookie from 'react-cookies';

class MessageInput extends React.Component {

  state = {
    value: ''
  };

  onChangeHandler = (e) => {
    this.setState({
      value: e.target.value
    });
  };


  onSubmit = () => {

    this.props.onMessageSubmit(this.state.value, cookie.load('username'), this.props.thread.threadId);
    // const threadTitle = this.props.thread.title;
    // const text = this.state.value;
    // const props = this.props;
      console.log(cookie.load('token'));


      io.socket.post(
        '/message/sendMessage',
        {
          message: this.state.value,
          author: cookie.load('username'),
          receiver:  this.props.thread.title
        },
        (bodyM, JWR) => {
          console.log('and with status code: ', JWR.statusCode);
        });

    this.setState({value: ''});


  };

  render(){
    return (
      <div
        className="MessageInput"
      >
        <div className="inputp">

            <input
              onChange={this.onChangeHandler}
              value={this.state.value}
            />
            <button
              onClick={this.onSubmit}
            >
              Submit
            </button>

        </div>
      </div>
    )
  }
}

export default MessageInput;