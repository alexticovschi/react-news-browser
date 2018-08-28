import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import { BrowserRouter, Route, } from 'react-router-dom';

import 'tachyons';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter> 
, document.getElementById('root'));
