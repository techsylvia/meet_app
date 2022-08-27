import React, { Component } from "react";
import Form from "react-bootstrap/Form";

class CitySearch extends Component {
  constructor() {
    super();

    this.state = {
      query: " search for a city",
      suggestions: [],
      showSuggestions: undefined,
    };
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    this.setState({
      query: value,
      suggestions,
    });
  };

  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion,
      showSuggestions: false,
    });
    this.props.updateEvents(suggestion);
  };

  render() {
    return (
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Search for a City</Form.Label>
          <Form.Control
            type="text"
            className="city"
            value={this.state.query}
            onChange={this.handleInputChanged}
          />
          <ul
            className="suggestions"
            style={this.state.showSuggestions ? {} : { display: "none" }}
          >
            {this.state.suggestions.map((suggestion) => (
              <li
                key={suggestion}
                onClick={() => this.handleItemClicked(suggestion)}
              >
                {suggestion}
              </li>
            ))}
            <li onClick={() => this.handleItemClicked("all")}></li>
          </ul>
        </Form.Group>
      </Form>
    );
  }
}

export default CitySearch;
