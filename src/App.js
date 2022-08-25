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
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
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
    const locationEvents =
      location === "all"
        ? events
        : events.filter((event) => event.location === location);
    this.setState({
      events: locationEvents,
    });
  });
};

export default App;
