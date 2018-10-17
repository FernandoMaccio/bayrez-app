import React, { Component } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

class Header_apli extends Component {
  constructor(props) {
    super(props)
    this.state = {
        isLogged: false,
        name: "fernando"
    }
  }
  render() {
    return (
      <header className="App-header">
      <div className="logo-title-container">
        <Link to="/" className="logo-title">Bayrez</Link>
      </div>
      <div className="menu-section-1">
        <Link to="" className="menu-item-web">.</Link>
        <Link to="" className="menu-item-web">.</Link>
        <Link to="" className="menu-item-web">.</Link>
        <Link to="" className="menu-item-web">.</Link>
        <Link to="" className="menu-item-web">.</Link>
      </div>
      <div className="menu-section">
        <Link to="/" className="menu-item">Salir</Link>
      </div>
      </header>
    );
  }
}

export { Header_apli };
