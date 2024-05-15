import React from 'react';
import { HashRouter } from 'react-router-dom';

import ReactDOM from 'react-dom/client';

import App from './App';

import './assets/css/index.scss';

import 'normalize.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
);
