import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { ErrorAlert } from "./Alert";
import "./App.css";

export class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
    infoText: "",
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    if (value >= 33 || value <= 0) {
      this.setState({
        numOfEvents: value,
        infoText: "Please choose a number between 1 and 32",
      });
    } else {
      this.setState({
        numberOfEvents: event.target.value,
        infoText: " ",
      });
    }
    this.props.updateEvents(undefined, value);
  };

  render() {
    return (
      <Form>
        <Form.Group className="mb-3">
          <p>How many Events ❓ </p>
          <Form.Control
            type="number"
            className="number-input"
            value={this.state.numOfEvents}
            onChange={this.handleInputChanged}
          />
          <div>
            <ErrorAlert text={this.state.infoText} />
          </div>
        </Form.Group>
      </Form>
    );
  }
}

export default NumberOfEvents;
