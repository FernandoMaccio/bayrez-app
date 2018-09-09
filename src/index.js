import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Router from './router';
import { Provider } from 'react-redux';
import Store from './store';

const storeInstance = Store();

ReactDOM.render(
  <Provider store={storeInstance}>
    <Router />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
