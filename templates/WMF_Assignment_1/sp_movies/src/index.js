/* Compulsory Imports */
import React from 'react';
import ReactDOM from 'react-dom';

/* Stylesheets Imports */
import '../src/styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


/* Components Imports */
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

