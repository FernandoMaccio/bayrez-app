import React, { Component } from 'react';
import logo from '../../logo.svg';
import './styles.css';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userActions from '../../actions/user';

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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <Link to='/about'>Home</Link>
        </p>
        <p>{this.state.name}</p>
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
