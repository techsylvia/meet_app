import React, { Component } from "react";
import { extractLocations, getEvents } from "./api";
import "./App.css";
import CitySearch from "./CitySearch";
import EventList from "./EventList";
import NumberOfEvents from "./NumberOfEvents";
import {
  ScatterChart,
  Scatter,
  YAxis,
  XAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

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
        <h1>Meet App</h1>
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
        />

        <NumberOfEvents />
        <ScatterChart
          width={400}
          height={400}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="category" dataKey="city" name="city" unit="cm" />
          <YAxis
            type="number"
            dataKey="number"
            name="number of eventst"
            unit="kg"
          />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <Scatter name="A school" data={this.getData()} fill="#8884d8" />
        </ScatterChart>

        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
