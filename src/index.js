import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MainStyle } from './styles/main/index.styled';

ReactDOM.render(
  <React.StrictMode>
    <MainStyle>
      <App />
    </MainStyle> 
  </React.StrictMode>,
  document.getElementById('root')
);
