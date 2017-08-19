import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Body from 'Body';
import './style.global.css';

ReactDOM.render(
    <Router>
        <Body />
    </Router>,
    document.getElementById('root'),
);
