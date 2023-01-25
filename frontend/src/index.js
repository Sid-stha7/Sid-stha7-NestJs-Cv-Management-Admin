import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'reactjs-popup/dist/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Provider store={store} /> */}

    <App />
  </React.StrictMode>,
);
