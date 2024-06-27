// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement); 

root.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>
);