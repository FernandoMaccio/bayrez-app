import React, { Component } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { Input, Button } from '../components';

class Login extends Component {
  render() {
    return (
      <div className="App-Login center">
        <form className="Login-container center column">
          <p className="info-title">Iniciar sesión</p>
          <Input label="Nombre de usuario" />
          <Input label="Contraseña" type="password" />
          <Link to="/" className="forgot-password-text half-width">¿Olvidaste tu contraseña?</Link>
          <Button text="Ingresar" />
          <Link to="/register" className="forgot-password-text">¿Aún no tienes cuenta?</Link>
        </form>
      </div>
    );
  }
}

export { Login };
