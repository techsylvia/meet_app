import React, { Component } from "react";

class CitySearch extends Component {
  constructor() {
    super();

    this.state = {
      query: " search for a city ",
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
      showSuggestions: true,
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
      <div>
        <div className="CitySearch">
          <p>Type a City 👇🏼 </p>
          <input
            type="text"
            id="city"
            placeholder="Select city:"
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
                className="suggestions-item"
                key={suggestion}
                onClick={() => this.handleItemClicked(suggestion)}
              >
                {suggestion}
              </li>
            ))}
            <li onClick={() => this.handleItemClicked("all")}>
              <b>See all cities</b>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default CitySearch;
