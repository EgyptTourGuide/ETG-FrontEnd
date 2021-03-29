import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
/*import fonts*/ 
import './Fonts/helvetica/Helvetica 400_0.ttf'
import './Fonts/Rhesmanisa/Rhesmanisa.otf'
import './Fonts/abeatbyKai/ABEAKRG_0.TTF'
import App from './APP/App';
import "../node_modules/bootstrap/dist/css/bootstrap.css";

import "./index.css";
ReactDOM.render(
    < BrowserRouter >
    <App/>
    </ BrowserRouter >,
    document.querySelector('#root')
);

