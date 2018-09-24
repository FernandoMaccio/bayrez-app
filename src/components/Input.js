import React, { Component } from 'react';
import './styles.css';

class Input extends Component {
  render() {
    const {
      type = "text",
      name = null,
      value = null,
      placeholder = null,
    } = this.props;

    return (
      <div className="App-Input">
        <input name={name} type={type} value={value} placeholder={placeholder} />
      </div>
    );
  }
}

export { Input };
