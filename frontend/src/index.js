import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RecordsContextProvider } from './context/RecordsContext';
import { AuthContextProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <RecordsContextProvider>
        <App />
      </RecordsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
