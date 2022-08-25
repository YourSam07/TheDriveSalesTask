import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ActiveProvider } from './context/actievContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ActiveProvider>
    <App />
  </ActiveProvider>   

);

