import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import './index.css';

const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(thunk)
    )
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
