import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import reducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';

  
  const store = createStore(reducer,  composeWithDevTools(applyMiddleware(thunk)));

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );

