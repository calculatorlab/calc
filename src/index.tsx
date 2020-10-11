import React from 'react';
import ReactDOM from 'react-dom';
import './build/css/main.css';
import * as serviceWorker from './serviceWorker';
import Homepage from './pages/Homepage';

ReactDOM.render(
  <React.StrictMode>
    <Homepage />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
