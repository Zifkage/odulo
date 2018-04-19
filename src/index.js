import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/now-ui-kit/assets/css/bootstrap.min.css';
import App from './WrappedApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
