import React, { Component } from 'react';
import Header from './Header';
import data from './mock-data';
import CurrentWeather from './CurrentWeather';
import SevenHour from './SevenHour';
import TenDay from './TenDay';

export default class App extends Component {
    constructor() {
      super();

      this.state = {
        city: '',
        stateUS: '',
        current_observation: data.current_observation,
        forecast: data.forecast,
        hourly: data.hourly_forecast,
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

        this.setState({city: city, stateUS: state});
        this.updateWeather(city, state);
    }


    render() {
        return (
            <main>
            <Header updateLocation={this.updateLocation} />
            <section className="container">
            <CurrentWeather
                city={this.state.city}
                stateUS={this.state.current_observation.display_location.state_name}
                images={this.state.images}
                current_observation={this.state.current_observation}
                forecast={this.state.forecast}

            />
            <SevenHour 
                images={this.state.images}
                currentCondition={this.state.current_observation.weather}
                time={this.state.forecast.txt_forecast.date} 
                hourly={this.state.hourly}
             />
             <TenDay 
                images={this.state.images}
                forecast={this.state.forecast.simpleforecast.forecastday}
             />
            </section>
            </main>
        )
    }
}