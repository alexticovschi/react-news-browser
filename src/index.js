import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

import 'tachyons';

ReactDOM.render(
    <BrowserRouter>
        <ScrollToTop>
            <App/>
        </ScrollToTop>
    </BrowserRouter> 
, document.getElementById('root'));
