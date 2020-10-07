import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import http from './utils/http';


http.get('/posts/1')
http.get('https://viacep.com.br/ws/02281236/json/')


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

