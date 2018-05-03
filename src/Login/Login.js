import React from 'react';
import client from '../Client/Client';
import { Redirect } from 'react-router-dom';
import cookie from 'react-cookies';

class Login extends React.Component{

  state = {
    username: '',
    password: '',
    loginInProgress: false,
    shouldRedirect: false
  };

  onChange = (e, fieldName) => {
    if(fieldName === 'username'){
      this.setState({username: e.target.value});
    }else {
      this.setState({password: e.target.value});
    }


  };

  redirectPath = () => {
    const locationState = this.props.location.state;
    const pathname = (
      locationState && locationState.from && locationState.from.pathname
    );
    return pathname || '/app';
  };

  performLogin = (e) => {
    e.preventDefault();

    this.setState({loginInProgress: true});

    client.login({
      email: this.state.username,
      password: this.state.password
    }, (response, error) => {
      if(error){
        console.log(error);
        this.setState({loginInProgress: false});
      }

      const username = response.username;
      const token = response.token;

      // window.localStorage.setItem('username', username);
      // window.localStorage.setItem('token', token);

      cookie.save('username', username, { path: '/'});
      cookie.save('token', token, { path: '/'});

      this.setState({loginInProgress: false});
      this.setState({shouldRedirect: true});


    })
  };

  render(){

    if(this.state.shouldRedirect){
      return (
        <Redirect to={this.redirectPath()}/>
      )
    }else if(this.state.loginInProgress){
      return (
        <span>LOADING....</span>
      )
    }else {
      return(
        <form onSubmit={this.performLogin}>
          <input value={this.state.username} onChange={(e) => this.onChange(e, 'username')} placeholder="email"/>
          <input value={this.state.password} onChange={(e) => this.onChange(e, 'password')} placeholder="password" type="password"/>
          <button>Submit</button>
        </form>
      )
    }

  }
}

export default (

  Login
);