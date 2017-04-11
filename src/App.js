import React, { Component } from 'react';
import CheckboxContainer from './containers/CheckboxContainer';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Babylon checkbox</h2>
        </div>
        <CheckboxContainer/>
      </div>
    );
  }
}

export default App;
