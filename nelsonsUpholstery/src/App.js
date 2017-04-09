import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header/Header.js';
import Body from './components/Body/Body.js';
import Footer from './components/Footer/Footer.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Header />
          <Body />
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
