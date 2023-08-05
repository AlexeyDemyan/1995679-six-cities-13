import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const favoritesCount = 9;

root.render(
  <React.StrictMode>
    <App favoritesCount={favoritesCount}></App>
  </React.StrictMode>
);
