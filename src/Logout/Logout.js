import React from 'react';
import { Redirect } from 'react-router-dom';
import cookie from 'react-cookies';

class Logout extends React.Component{

  componentDidMount(){
    // window.localStorage.removeItem('username');
    // window.localStorage.removeItem('token');

    cookie.remove('username', { path: '/' });
    cookie.remove('username', { path: '/' });
  }

  render(){
    return ( <Redirect to="/login"/> )
  }
}

export default (

  Logout
);