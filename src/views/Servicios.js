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

class Servicios extends Component {
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
        <div className="App-container">
          <div className="info-section-container full-width">
            <div className="info-container">
              <p className="info-title">Servicios</p>
              <p className="info-text">Bayrez ofrece un innovador sistema de seguridad que asegura la protección de su hogar y el control del mismo. Este producto le va a permitir la apertura y cierre de cada una de las aberturas.</p>
            </div>
          </div>
        </div>
        <DivSeparatorBar />
        <div className="App-container">
          <div className="info-section-container column space-between full-width">
            <div className="info-image-container">
              <img src={Application} className="person-image"></img>
              <div className="info-container">
                <p className="info-title">Aplicación</p>
                <p className="info-text">Esta realizara lo antes mencionado con el agregado de notificar si nuestra alarma se activó y mostrándonos un acceso rápido a un tablero con números de emergencia correspondiente a su región, país o ciudad, la empresa será notificada de esta emergencia y se corroborara con el usuario el procedimiento de contacto con los servicios de emergencia. Se podrán contar con multiusuarios (distintas personas manipulando un hogar en común). Esta aplicación se encontrará en la web correspondiente y su versión móvil.</p>
              </div>
            </div>
            <div className="info-image-container">
              <img src={Door} className="person-image"></img>
              <div className="info-container">
                <p className="info-title">Sistema para puertas</p>
                <p className="info-text">Estas funcionaran con una cerradura electrónica la cual van a interactuar con la aplicación.</p>
              </div>
            </div>
            <div className="info-image-container">
              <img src={Sensor} className="person-image"></img>
              <div className="info-container">
                <p className="info-title">Sensor</p>
                <p className="info-text">Estos sensores nos permitirán mantener en nuestro conocimiento la cantidad de personas en nuestro hogar o en una habitación, estos también serán usados para la alarma del hogar. El usuario no interactúa directamente con estos.</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export { Servicios };
