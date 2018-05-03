import React from 'react';
import { CookiesProvider } from 'react-cookie';
import Login from './Login';

const LoginWrapped = () => (
  <CookiesProvider>
    <Login/>
  </CookiesProvider>
);

export default LoginWrapped;

