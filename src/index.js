import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';   // ← Add this line
import App from './App';
import './index.css';   // ← Keep this if you have it

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/Personal_web">        {/* ← Add this */}
      <App />
    </BrowserRouter>       {/* ← Add this */}
  </React.StrictMode>
);