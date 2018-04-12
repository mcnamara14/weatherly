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

    updateWeather(city, state) {
        fetch(`http://api.wunderground.com/api/0f1aa13fe5ed9a5d/forecast/geolookup/conditions/q/${state}/${city}.json`)
            .then(data => data.json())
            .then(data => this.setState({
                current_observation: data.current_observation,
                forecast: data.forecast,
                hourly: data.hourly_forecast
            }));
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

                currentTemperature={this.state.current_observation.temp_f}
                currentCondition={this.state.current_observation.weather}
                UV={this.state.current_observation.UV}
                feelsLike={this.state.current_observation.feelslike_f}
                windSpeed={this.state.current_observation.wind_mph}
                precipitation={this.state.current_observation.precip_today_in} 
                visibility={this.state.current_observation.visibility_mi}
                dewpoint={this.state.current_observation.dewpoint_f}

                highTemp={this.state.forecast.simpleforecast.forecastday[3].high.fahrenheit}
                lowTemp={this.state.forecast.simpleforecast.forecastday[3].low.fahrenheit}
                todaysWeather={this.state.forecast.txt_forecast.forecastday[0].fcttext_metric}
                day={this.state.forecast.simpleforecast.forecastday[0].date.weekday}
                dateMonth={this.state.forecast.simpleforecast.forecastday[0].date.monthname_short}
                dateDay={this.state.forecast.simpleforecast.forecastday[0].date.day}
                dateYear={this.state.forecast.simpleforecast.forecastday[0].date.year}
            />
            <SevenHour 
                images={this.state.images}
                currentCondition={this.state.current_observation.weather}
                time={this.state.forecast.txt_forecast.date} 
                hourly={this.state.hourly}
             />
             <TenDay 
                images={this.state.images}
             />
            </section>
            </main>
        )
    }
}