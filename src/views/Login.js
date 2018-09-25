import React, { Component } from 'react';
import './styles.css';
import { Input } from '../components';

class Login extends Component {
  render() {
    return (
      <div className="App-Login center">
        <form className="Login-container center column">
          <p className="info-title">Contacto</p>
          <Input label="Nombre de usuario" />
          <Input label="contraseña" type="password" />
        </form>
      </div>
    );
  }
}

export { Login };
