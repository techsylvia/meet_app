import React, { Component } from "react";
import { extractLocations, getEvents } from "./api";
import "./App.css";
import CitySearch from "./CitySearch";
import EventList from "./EventList";
import NumberOfEvents from "./NumberOfEvents";
import updateEvents from "./updateEvents";
class App extends Component {
  // componentDidMount
  componentDidMount() {
    getEvents().then((events) => {
      this.setState({ events, locations: extractLocations(events) });
    });
  }

  //states
  state = {
    events: [],
    locations: [],
  };

  render() {
    return (
      <div className="App">
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
        />

        <NumberOfEvents />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

updateEvents = (location) => {
  getEvents().then((events) => {
    const locationEvents = events.filter(
      (event) => event.location === location
    );
    this.setState({
      events: locationEvents,
    });
  });
};

export default App;
