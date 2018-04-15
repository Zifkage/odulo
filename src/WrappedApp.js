import React from 'react';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';


const WrappedApp = () => (
  <Provider store={store} >
    <App/>
  </Provider>
);



export default WrappedApp;