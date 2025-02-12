import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { favoritesCount } from './const';
import { offers } from './mocks/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const onAnswer = () => {
  console.log('testin');
}

root.render(
  <React.StrictMode>
    <App favoritesCount={favoritesCount} offers={offers} onAnswer={onAnswer}></App>
  </React.StrictMode>
);
