import React, { Component } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userActions from '../actions/user';
import { Header } from '../components'
import Person from '../images/person.png'

class About extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        name: this.props.user.name,
        lastName: this.props.user.lastName,
        ci: this.props.user.ci
      }
    }
    console.log(this.props)
  }

  render() {
    return (
      <div className="App">
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
          <div className="info-section-container column">
            <p className="info-title">Nosotros</p>
            <img src={Person} className="about-person-image"></img>
            <img src={Person} className="about-person-image"></img>
            <img src={Person} className="about-person-image"></img>
            <img src={Person} className="about-person-image"></img>
          </div>
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

const AboutScreen = connect(mapStateToProps, mapDispatchToProps)(About);

export { AboutScreen };
