import React from 'react';
import cookie from 'react-cookies';


import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component, cookies, ...rest}) => (
  <Route {...rest} render={(props) => (
    cookie.load('username') ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}
      />
    )
  )} />
);

export default PrivateRoute;