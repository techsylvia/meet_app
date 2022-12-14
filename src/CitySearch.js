import React, { Component } from "react";
import { InfoAlert } from "./Alert";
class CitySearch extends Component {
  constructor() {
    super();

    this.state = {
      query: "",
      suggestions: [],
      showSuggestions: undefined,
    };
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ ...this.state, showSuggestions: true });
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    if (suggestions.length === 0) {
      this.setState({
        query: value,
        showSuggestions: false,
        infoText: "City not available. Please try another city",
      });
    } else {
      this.props.updateEvents(undefined);
      return this.setState({
        query: value,
        suggestions,
        infoText: "",
      });
    }
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
          <InfoAlert text={this.state.infoText} />
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
            <li onClick={() => this.handleItemClicked("all")}>
              <b>See all cities</b>
            </li>
            {this.state.suggestions.map((suggestion) => (
              <li
                className="suggestions-item"
                key={suggestion}
                onClick={() => this.handleItemClicked(suggestion)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default CitySearch;
