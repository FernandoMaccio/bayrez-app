import React, { Component } from 'react';
import './styles.css';

class Input extends Component {
  render() {
    const {
      type = "text",
      name = null,
      value = "",
      placeholder = "",
      label = "",
      width = "half-width"
    } = this.props;

    return (
      <div className={"App-Input " + width}>
        {
          label && <label>{label}</label>
        }
        {
        type == "text-area" ? (<textarea className="input textarea"></textarea>) : (<input className="input" name={name} type={type} value={value} placeholder={placeholder} />)
        }
      </div>
    );
  }
}

export { Input };
