import React from 'react';
import './MessageInput.css';
import uuid from 'uuid';
import io from '../../socket';

class MessageInput extends React.Component {

  state = {
    value: '',
    l: undefined
  };

  l;

  componentDidMount(){
    window.localStorage.setItem('username', 'user'+uuid.v4());
    io.socket.get('/user/join', (body, JWR) => {

      console.log('[did] and with status code: ', JWR.statusCode);
    });

  }





  onChangeHandler = (e) => {
    this.setState({
      value: e.target.value
    });
  };


  onSubmit = () => {

    this.props.onMessageSubmit(this.state.value, window.localStorage.getItem('username'), this.props.threadId);

    io.socket.post(
      '/user/message',
      {
        message: this.state.value,
        author: window.localStorage.getItem('username'),
        threadId:  this.props.threadId
      },
      (body, JWR) => {
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