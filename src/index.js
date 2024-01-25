import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, HashRouter as Router } from "react-router-dom";

import App from './App';
import 'react-loading-skeleton/dist/skeleton.css'
import "./config/fontAwesomeConfig"
import "./assets/css/index.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <App />
    </Router>
  </React.StrictMode>
);