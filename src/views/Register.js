import React, { Component } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { Header ,Input, Button } from '../components';

class Register extends Component {
  render() {
    return (
      <div className="App-Register">
        <Header />
        <div className="App-container padding-top">
          <form className="Register-container column">
            <p className="info-title login-title">Iniciar sesión</p>
            <Input label="Nombre de usuario" />
            <Input label="contraseña" type="password" />
            <Link to="/" className="forgot-password-text half-width">¿Olvidaste tu contraseña?</Link>
            <Button text="Ingresar" />
          </form>
        </div>
      </div>
    );
  }
}

export { Register };
