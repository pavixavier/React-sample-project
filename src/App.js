import React, { Component, PropTypes } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';

class App extends Component {
  constructor(){
    super()


  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Please click on the link</h1>
        <Home />
      </div>
    );
  }
}

export default App;
