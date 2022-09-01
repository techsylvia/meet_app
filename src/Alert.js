import React, { Component } from "react";

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
  }

  getStyle = () => {
    return {
      color: this.color,
    };
  };

  render() {
    return (
      <div className="Alert">
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}
class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "blue";
  }

  getStyle = () => {
    return {
      color: this.color,
    };
  };
  render() {
    return (
      <div className="Alert">
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}

class WarningAlert extends Component {
  constructor(props) {
    super(props);
    this.color = "orange";
  }

  getStyle = () => {
    return {
      color: this.color,
    };
  };

  render() {
    return (
      <div className="Alert">
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}

class ErrorAlert extends Component {
  constructor(props) {
    super(props);
    this.color = "red";
  }

  getStyle = () => {
    return {
      color: this.color,
    };
  };

  render() {
    return (
      <div className="Alert-Wrapper">
        <h5 style={this.getStyle()}>{this.props.text}</h5>
      </div>
    );
  }
}

export { InfoAlert, ErrorAlert, WarningAlert };
