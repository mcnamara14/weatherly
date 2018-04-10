import React, { Component } from 'react';
import Header from './Header';
import data from './mock-data';
import CurrentWeather from './CurrentWeather';

export default class App extends Component {
    constructor() {
      super();

      this.state = {
        location: 'Louisville',
        currentTemperature: data.current_observation.temp_f
      }

    }



    render() {
        return (
            <main>
            <Header location={this.state.location} />
            <section className="container">
            <CurrentWeather currentTemperature={this.state.currentTemperature}/>
            </section>
            </main>
        )
    }
}