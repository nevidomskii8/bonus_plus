import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
import './css/normalize.css';
import './css/index.css';
import Wrapper from './Wrapper/Wrapper';

ReactDOM.render(
  <Wrapper>
    <App />
  </Wrapper>,
  document.getElementById('root')
);

reportWebVitals();
