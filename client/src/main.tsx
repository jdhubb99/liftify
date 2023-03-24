import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ExerciseContextProvider } from './context/ExerciseContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ExerciseContextProvider>
        <App />
      </ExerciseContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
