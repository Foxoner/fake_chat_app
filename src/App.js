import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Home />
      </div>
    );
  }
}

export default App;
