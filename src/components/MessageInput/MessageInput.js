import React from 'react';
import './MessageInput.css';
import cookie from 'react-cookies';
import Client from '../../Client/Client';

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

    this.props.onMessageSubmit(this.state.value, cookie.load('id'), this.props.thread.id);

    Client.postMessage(this.state.value, cookie.load('token'), this.props.thread.title, function (body, JWR) {
      console.log('[Client.postMessage] status code: ', JWR.statusCode);
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