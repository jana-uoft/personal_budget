import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './config/registerServiceWorker';
import App from './containers/App';
import './assets/styles/Index.css';


ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
