import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom'

import './index.css';
import App from './App';

import {BrowserRouter as Router} from 'react-router-dom'

// You'll need to wrap <App /> for routing to work
render(
    <Router>
        ReactDOM.render(<App />
    </Router>
        , document.getElementById('root')
)
