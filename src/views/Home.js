import React, { Component } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userActions from '../actions/user';
import { Header, DivSeparatorBar, Input } from '../components';
import Person from '../images/person.png';
import Application from '../images/application.png';
import Door from '../images/door.png';
import Sensor from '../images/sensor.png';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
        name: 'Fernando',
        lastName: 'Maccio',
        ci: '51012563'
    }
    this.prueba()
  }

  componentWillReceiveProps(nextProps){
      if (nextProps && this.props.user !== nextProps.user) {
           this.setState({ name: nextProps.user.name })
      }
}

  prueba = () => {
    this.props.action.addCurrentUser('this.state.name', this.state.lastName, this.state.ci)
  }

  render() {
    return (
      <div className="App-home">
        <Header></Header>
        <div className="App-container padding-top">
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
        <DivSeparatorBar />
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
        <DivSeparatorBar />
        <div className="App-container">
          <p className="info-title">Contacto</p>
          <Input />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    user: state.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators(userActions, dispatch)
  }
}

const HomeScreen = connect(mapStateToProps, mapDispatchToProps)(Home);

export { HomeScreen };
