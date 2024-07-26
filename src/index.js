import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Import the Tailwind CSS
import Routes from './routes';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
