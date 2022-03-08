import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/routes/App';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';
import ToggleProvider from './components/context/toggle'


ReactDOM.render(
  <React.StrictMode>
    <ToggleProvider>
      <App />
    </ToggleProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
