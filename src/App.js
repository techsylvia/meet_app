import React, { Component } from "react";
import { extractLocations, getEvents } from "./api";
import "./App.css";
import CitySearch from "./CitySearch";
import EventList from "./EventList";
import NumberOfEvents from "./NumberOfEvents";
import EventGenre from "./Eventgenre";
import {
  ScatterChart,
  Scatter,
  YAxis,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

class App extends Component {
  //states
  state = {
    events: [],
    locations: [],
    numOfEvents: 32,
    selectedLocation: "all",
  };

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

  updateEvents = (location, eventCount) => {
    if (eventCount === undefined) {
      eventCount = this.state.numOfEvents;
    } else this.setState({ numOfEvents: eventCount });
    if (location === undefined) {
      location = this.state.selectedLocation;
    }
    getEvents().then((events) => {
      const locationEvents =
        location === "all"
          ? events
          : events.filter((event) => event.location === location);
      if (this.mounted) {
        this.setState({
          events: locationEvents.slice(0, eventCount),
          numOfEvents: eventCount,
          selectedLocation: location,
        });
      }
    });
  };

  getData = () => {
    const { locations, events } = this.state;
    return locations.map((location) => {
      const number = events.filter(
        (event) => event.location === location
      ).length;
      const city = location.split(", ")[0];
      return { city, number };
    });
  };

  render() {
    const { events } = this.state;

    return (
      <div className="App">
        <h1>Meet App</h1>
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
        />

        <NumberOfEvents updateEvents={this.updateEvents} />

        <div className="data-vis-wrapper">
          <EventGenre events={events} />
          <ResponsiveContainer height={300}>
            <ScatterChart margin={{ top: 10, right: 10, bottom: 10, left: 10 }}>
              <CartesianGrid className="grid" />
              <XAxis
                type="category"
                dataKey="city"
                name="city"
                tickMargin="5"
                tick={{ fontSize: "13px", fill: "#2F5373" }}
                textAnchor="end"
              />
              <YAxis
                type="number"
                dataKey="number"
                tick={{ fontSize: "14px", fill: "#2F5373" }}
                name="number of events"
                allowDecimals={false}
              />
              <Tooltip cursor={{ strokeDasharray: "3 3" }} />
              <Scatter data={this.getData()} fill="black" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>

        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
