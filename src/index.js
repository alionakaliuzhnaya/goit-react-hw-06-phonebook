import React from 'react';
import ReactDOM from 'react-dom';
import {store}from './redux/store';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import {GlobalStyle} from  './index.styled.js';
import App from './App';
import {persistor} from "./redux/store"

console.log(store)
ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
   <Provider store={store}>
     <PersistGate loading={null} persistor={persistor}>
    <App />
    </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

