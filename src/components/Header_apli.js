import React, { Component } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import locked from '../images/locked.png';
import unlocked from '../images/unlocked.png';
import power from '../images/power.png';
import eye from '../images/eye.png';

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
        <button className="menu-item-web menu-item-apli" type="button"><img src={locked} className="Menu-apli"></img></button>
        <button className="menu-item-web menu-item-apli" type="button"><img src={unlocked} className="Menu-apli"></img></button>
        <button className="menu-item-web menu-item-apli" type="button"><img src={power} className="Menu-apli"></img></button>
        <button className="menu-item-web menu-item-apli" type="button"><img src={eye} className="Menu-apli"></img></button>
      </div>
      <div className="menu-section">
        <Link to="/" className="menu-item">Salir</Link>
      </div>
      </header>
    );
  }
}

export { Header_apli };
