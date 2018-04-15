import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/now-ui-kit/assets/css/now-ui-kit.css';
import './index.css';
import App from './WrappedApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
