import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {App} from "./components/App/App";

require('./components/Registration/Registration.module.css');

ReactDom.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    , document.getElementById('root')
);
