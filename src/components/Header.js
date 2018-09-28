import React, { Component } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
        isLogged: false
    }
  }

  render() {
    return (
      <header className="App-header">
        <div className="logo-title-container">
          <span className="logo-title">Bayrez</span>
        </div>
        <div className="menu-container">
          {this.state.isLogged
          ? (<div className="menu-section">
              <span className="menu-item">this.state.name</span>
              <span className="menu-item">|</span>
              <span className="menu-item">Cerrar sesion</span>
            </div>)
          : (<div className="menu-section">
              <Link to="/login" className="menu-item">Iniciar sesion</Link>
              <span className="menu-item">|</span>
              <Link to="/register" className="menu-item">Registrarse</Link>
            </div>)}
        </div>
      </header>
    );
  }
}

export { Header };
