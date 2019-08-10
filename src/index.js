import React from 'react';
import ReactDOM from 'react-dom';
import { Normalize } from 'styled-normalize';
import App from './components/app';

const Root = () => (
  <>
    <Normalize />
    <App />
  </>
);

ReactDOM.render(<Root />, document.getElementById('app'));
