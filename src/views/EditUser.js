import React, { Component } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { Header ,Input, Button } from '../components';

class EditUser extends Component {
  render() {
    return (
      <div className="App-Register">
        <Header />
        <div className="App-container padding-top">
          <form className="Register-container column center full-width">
            <p className="info-title">Editar Información</p>
            <Input label="Nombre completo" />
            <Input label="Correo electronico" />
            <Input label="Nombre de usuario" />
            <Input label="Número de telefono" />
            <p className="info-text half-width">Direccion</p>
            <div className="half-width space-between">
              <Input width="small-width" label="Departamento" />
              <Input width="small-width" label="Ciudad" />
            </div>
            <div className="half-width space-between">
              <Input width="small-width" label="Calle" />
              <Input width="small-width" label="Número" />
            </div>
            <Button text="Guardar" height="50" />
          </form>
        </div>
      </div>
    );
  }
}

export { EditUser };
