import React, { Component } from "react";
import Form from "react-bootstrap/Form";

export class NumberOfEvents extends Component {
  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ numOfEvents: value });
  };
  state = { numOfEvents: 32 };
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
        </Form.Group>
      </Form>
    );
  }
}

export default NumberOfEvents;
