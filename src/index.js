import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const main = document.getElementById('main');
  const store = configureStore();
  window.store = store;
  ReactDOM.render(<Root store={store} />, main);
});


document.addEventListener('DOMContentLoaded', () => {
  const vote = document.getElementById('vote-banner');
  HACKBIT_VOTING_WIDGET.render(vote);
});
