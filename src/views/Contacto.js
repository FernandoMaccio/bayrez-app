import React, { Component } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userActions from '../actions/user';
import { Header, DivSeparatorBar, Input, Footer, Button } from '../components';
import Person from '../images/person.png';
import Application from '../images/application.png';
import Door from '../images/door.png';
import Sensor from '../images/sensor.png';

class Contacto extends Component {
  constructor(props) {
    super(props)
    this.state = {
        name: 'Fernando',
        lastName: 'Maccio',
        ci: '51012563'
    }
  }

  componentWillReceiveProps(nextProps){
      if (nextProps && this.props.user !== nextProps.user) {
           this.setState({ name: nextProps.user.name })
      }
}

  render() {
    return (
      <div className="App-home">
        <Header></Header>
        <div className="App-container column">
          <p className="info-title">Contacto</p>
          <form className="contact-form">
            <Input label="Nombre" />
            <Input label="Apellido" />
            <Input label="Correo electrónico" width="full-width" />
            <Input label="Mensaje" type="text-area" width="full-width" />
            <Button text="Enviar" height="50" margin_left="0" />
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}
export { Contacto };
