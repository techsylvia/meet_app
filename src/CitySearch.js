import React, { Component } from "react";

class CitySearch extends Component {
  constructor() {
    super();

    this.state = {
      query: " search for a city",
      suggestions: [],
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
    });
    this.props.updateEvents(suggestion);
  };

  render() {
    return (
      <div className="CitySearch">
        <b></b>
        <input
          type="text"
          className="city"
          value={this.state.query}
          onChange={this.handleInputChanged}
        />
        <ul className="suggestions">
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
      </div>
    );
  }
}

export default CitySearch;
