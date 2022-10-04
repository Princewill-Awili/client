import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import {BrowserRouter as Router} from  'react-router-dom'
import { StateContextProvider } from './context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateContextProvider>
      <Router>
        <App />
      </Router>
    </StateContextProvider>
  </React.StrictMode>
);


