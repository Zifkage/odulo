import React from 'react';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';
import './App.css'


const WrappedApp = () => (
  <Provider store={store} >
    <div className="content">
      <App/>
    </div>
  </Provider>
);



export default WrappedApp;