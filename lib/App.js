import React, { Component } from 'react';
import Header from './Header';
import cleanedData from './mock-data';
import CurrentWeather from './CurrentWeather';
import SevenHour from './SevenHour';
import TenDay from './TenDay';
import Clean from './cleanData';

export default class App extends Component {
    constructor() {
      super();

      this.state = {
        city: '',
        stateUSA: '',
        current: cleanedData.current,
        forecast: cleanedData.forecast,
        hourly: cleanedData.hourly,
        images: {
            'Clear': '/assets/sunny-icon-lg.png',
            'Mostly Cloudy': '/assets/mostly-cloudy-icon-lg.png',
          }
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
        fetch('URL')
        .then(data => data.json())
        .then(data => {
            let cleanedData = Clean(data);

            this.setState({
                current: cleanedData.current,
                forecast: cleanedData.forecast,
                hourly: cleanedData.hourly,y: data.hourly_forecast
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
                current={this.state.current}
                forecast={this.state.forecast}
            />
            <SevenHour 
                images={this.state.images}
                currentCondition={this.state.current.currentCondition}
                hourly={this.state.hourly}
             />
             <TenDay 
                images={this.state.images}
                forecast={this.state.forecast.tenDayArray}
             />
            </section>
            </main>
        )
    }
}