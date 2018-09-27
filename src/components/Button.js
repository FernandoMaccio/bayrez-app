import React, { Component } from 'react';
import './styles.css';

class Button extends Component {
  render() {
    const {
      type = "button",
      text = "Guardar",
      width = "half-width",
      height = 25,
      margin_left = 20
    } = this.props;

    return (
      <div className={"App-Button " + width} style={{"margin-left": margin_left + "px"}}>
        <button className="button" style={{"height": height + "px"}} type={type}>{text}</button>
      </div>
    );
  }
}

export { Button };
