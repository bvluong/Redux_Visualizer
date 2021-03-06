import React from 'react';
import { Provider } from 'react-redux';
import App from './app';
import '../../style/index';

export default ({store}) => (
  <Provider store = {store}>
    <App />
  </Provider>
);
