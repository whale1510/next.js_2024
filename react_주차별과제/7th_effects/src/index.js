import React from 'react';
import ReactDOM from 'react-dom/client';
import {App, App2} from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <App2 />
  </React.StrictMode>
);
