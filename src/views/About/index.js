import React, { Component } from 'react';
import logo from '../../logo.svg';
import './styles.css';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userActions from '../../actions/user';

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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <Link to='/'>About</Link>
        </p>
        <p>{this.state.user.name}</p>
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
