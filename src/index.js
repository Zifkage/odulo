import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/now-ui-kit/assets/css/bootstrap.min.css';
import App from './WrappedApp';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter as Router } from 'react-router-dom'


ReactDOM.render(<Router><App/></Router>, document.getElementById('root'));
registerServiceWorker();
