import React from 'react';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';
import { Route, Redirect } from 'react-router-dom';
import './App.css';

//components
import Login from './Login/Login';
import Logout from './Logout/Logout';
import Auxi from './Auxi';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const WrappedApp = () => (
  <Provider store={store} >
    <Auxi>
      <Route exact path="/" render={() => (<Redirect to="/app" />) } />
      <Route path="/login" component={Login} />
      <Route path="/logout" component={Logout} />
      <PrivateRoute path='/app' component={App} />
    </Auxi>
  </Provider>
);


export default WrappedApp;