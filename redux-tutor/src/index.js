import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/App.container';

import { Provider } from 'react-redux';
import store from './data/store/store';

// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// serviceWorker.unregister();
