import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import './App.css';
import { NavBar } from './components/NavBar';
import Home from './components/Home';
import BuyFlower from './components/BuyFlower';
import Admin from './components/Admin';

class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <div>
        <NavBar/>
          <Route path = "/" exact component = {Home}/>
          <Route path = "/flower/:id" component = {BuyFlower}/>
          <Route path = "/admin" component = {Admin}/>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
