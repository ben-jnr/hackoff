import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Game from './Game';
import { BrowserRouter,Route } from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
      <Route exact path="/" component={App}/>
      <Route exact path='/game' component = {Game} />
    </BrowserRouter>,
  document.getElementById('root')
);
