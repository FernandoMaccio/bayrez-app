import React, { Component } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userActions from '../actions/user';
import { Header_apli, DivSeparatorBar, Input, Footer, Button } from '../components';
import Person from '../images/person.png';
import Application from '../images/application.png';
import Door from '../images/door.png';
import Sensor from '../images/sensor.png';

class Aplicacion extends Component {
  constructor(props) {
    super(props)
    this.state = {
        name: 'Fernando',
        lastName: 'Maccio',
        ci: '51012563'
    }
  }
  render() {
    return (
      <div className="App-home">
        <Header_apli></Header_apli>

        <Footer />
      </div>
    );
  }
}
export { Aplicacion };
