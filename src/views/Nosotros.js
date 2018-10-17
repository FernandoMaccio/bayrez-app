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

class Nosotros extends Component {
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
        <div className="App-container space-between">
          <div className="info-section-container">
            <div className="info-container">
              <p className="info-title">¿Quiénes somos?</p>
              <p className="info-text">La organización Bayrez está formada por un equipo de cinco personas egresadas de Anima Bachillerato Tecnológico, Augusto Estefan, Javier Sanchez, Franco Chiribao, Brian Silva Y Fernando Maccio.</p>
            </div>
            <div className="info-container">
              <p className="info-title">¿Por que Nosotros?</p>
              <p className="info-text">Somos un equipo que todos tenemos un perfil tecnológico con experiencia en dogmática ya que hemos trabajado en ello en otros proyectos y hemos estudiado la profesión en la ingeniería en Electrónica en la Universidad Católica, la cual aprobamos todos con un promedio estimado alto. También creemos que en este rubro la innovación es muy importante y por eso apostamos mucho a ello.</p>
              <p className="info-text">Algo que nos destaca es la seriedad y confiabilidad que les transmitimos a nuestros clientes, esto lo hacemos con el fin de que se sientan seguros trabajando con nosotros ya que nos otorgan la responsabilidad de la seguridad de sus hogares. Además, brindamos personalización del sistema según cliente.</p>
            </div>
            <div className="info-container">
              <p className="info-title">Nuestro plan</p>
              <p className="info-text">Nuestra idea es innovadora, se trata de un funcionamiento con un sistema de puertas seguras, alarma y cámaras las cuales garantizan protección a su hogar. Nosotros ofrecemos un innovador sistema de seguridad que asegura la protección del hogar. Este producto le va a permitir la apertura y cierre de cada una de las aberturas. Además de un sistema de alarmas el cual notificara tanto al usuario como a la empresa acerca de acciones ilícitas dentro del hogar. Además, se podrá tener conocimiento de los movimientos realizados dentro de su hogar con un sistema de sensores.</p>
            </div>
          </div>
          <div className="info-section-container column space-between">
            <div className="info-container">
              <p className="info-title">Nosotros</p>
            </div>
            <div className="info-image-container">
              <img src={Person} className="person-image"></img>
              <div className="info-container">
                <p className="info-title">Augusto Estefan</p>
                <p className="info-text">Encargado de la configuración e instalación del sistema.</p>
              </div>
            </div>
            <div className="info-image-container">
              <img src={Person} className="person-image"></img>
              <div className="info-container">
                <p className="info-title">Javier Sanchez</p>
                <p className="info-text">En las oficinas gestionando las alertas.</p>
              </div>
            </div>
            <div className="info-image-container">
              <img src={Person} className="person-image"></img>
              <div className="info-container">
                <p className="info-title">Franco Chiribao</p>
                <p className="info-text">Reparación y atención al cliente.</p>
              </div>
            </div>
            <div className="info-image-container">
              <img src={Person} className="person-image"></img>
              <div className="info-container">
                <p className="info-title">Brian Silva</p>
                <p className="info-text">Encargado de la configuración e instalación del sistema.</p>
              </div>
            </div>
            <div className="info-image-container">
              <img src={Person} className="person-image"></img>
              <div className="info-container">
                <p className="info-title">Fernando Maccio</p>
                <p className="info-text">Encargado de gestionar.</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export { Nosotros };
