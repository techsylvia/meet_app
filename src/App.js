import React, { Component } from "react";
import { extractLocations, getEvents } from "./api";
import "./App.css";
import CitySearch from "./CitySearch";
import EventList from "./EventList";
import NumberOfEvents from "./NumberOfEvents";

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

  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents =
        location === "all"
          ? events
          : events.filter((event) => event.location.includes(location));
      this.setState({
        events: locationEvents,
        numOfEvents: locationEvents.length,
      });
    });
  };

  //states
  state = {
    events: [],
    locations: [],
    numOfEvents: 32,
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

export default App;
