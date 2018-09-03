import React, { Component } from 'react';
import logo from '../../logo.svg';
import './styles.css';
import { Link } from 'react-router-dom';

class About extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <Link to='/'>About</Link>
        </p>
      </div>
    );
  }
}

export { About };
