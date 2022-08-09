import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RecordsContextProvider } from './context/RecordsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RecordsContextProvider>
      <App />
    </RecordsContextProvider>
  </React.StrictMode>
);
