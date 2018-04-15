import React, { Component } from 'react';
import Header from './Header';
import cleanedData from './mock-data';
import CurrentWeather from './CurrentWeather';
import SevenHour from './SevenHour';
import TenDay from './TenDay';
import Clean from './cleanData';
import key from './key.js';
const weatherUndergroundIcons = require('weather-underground-icons');
import { images } from './weatherIcons';

export default class App extends Component {
    constructor() {
      super();

      this.state = {
        city: '',
        stateUSA: '',
        data: cleanedData,
        images: images
      }
      this.updateLocation = this.updateLocation.bind(this);
    }

    updateLocation(location){
        let city = location.slice(0, location.length-4);
        let state = location.slice(location.length-2, location.length);

        this.setState({city: city, stateUSA: state});
        this.updateWeather(city, state);
    }

    updateWeather(city, state) {
        fetch(`http://api.wunderground.com/api/${key}/forecast/hourly/forecast10day/conditions/q/${state}/${city}.json`)
        .then(data => data.json())
        .then(data => {
            let cleanedData = Clean(data);

            this.setState({
                data: cleanedData
            });
        });
    }

    render() {
        return (
            <main>
            <Header updateLocation={this.updateLocation} />
            <section className="container">
            <CurrentWeather
                images={this.state.images}
                current={this.state.data.current}
                forecast={this.state.data.forecast}
            />
            <SevenHour 
                images={this.state.images}
                currentCondition={this.state.data.current.currentCondition}
                hourly={this.state.data.hourly}
             />
             <TenDay 
                images={this.state.images}
                forecast={this.state.data.forecast.tenDayArray}
             />
            </section>
            </main>
        )
    }
}