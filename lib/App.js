import React, { Component } from 'react';
import Header from './Header';
import data from './mock-data';
import CurrentWeather from './CurrentWeather';
import SevenHour from './SevenHour';

export default class App extends Component {
    constructor() {
      super();

      this.state = {
        location: 'Louisville',
        currentTemperature: data.current_observation.temp_f, 
        currentCondition: data.current_observation.weather,
        highTemp: data.forecast.simpleforecast.forecastday[3].high.fahrenheit,
        lowTemp: data.forecast.simpleforecast.forecastday[3].low.fahrenheit,
        UV: data.current_observation.UV,
        feelsLike: data.current_observation.feelslike_f,
        windSpeed: data.current_observation.wind_mph,
        precipitation: parseInt(data.current_observation.precip_today_in).toFixed(0),
        visibility: parseInt(data.current_observation.visibility_mi).toFixed(0),
        dewpoint: data.current_observation.dewpoint_f,
        todaysWeather: data.forecast.txt_forecast.forecastday[0].fcttext_metric,
        day: data.forecast.simpleforecast.forecastday[0].date.weekday,
        dateMonth: data.forecast.simpleforecast.forecastday[0].date.monthname_short,
        dateDay: data.forecast.simpleforecast.forecastday[0].date.day,
        dateYear: data.forecast.simpleforecast.forecastday[0].date.year,
        time: data.forecast.txt_forecast.date,
        images: {
            'Sunny': '/assets/sunny-icon-lg.png',
            'Mostly Cloudy': '/assets/mostly-cloudy-icon-lg.png',
          }
      }
    }
 

    render() {
        return (
            <main>
            <Header location={this.state.location} />
            <section className="container">
            <CurrentWeather
                images={this.state.images}
                currentTemperature={this.state.currentTemperature}
                currentCondition={this.state.currentCondition}
                highTemp={this.state.highTemp}
                lowTemp={this.state.lowTemp}
                UV={this.state.UV}
                feelsLike={this.state.feelsLike}
                windSpeed={this.state.windSpeed}
                precipitation={this.state.precipitation}
                visibility={this.state.visibility}
                dewpoint={this.state.dewpoint}
                todaysWeather={this.state.todaysWeather}
                day={this.state.day}
                dateMonth={this.state.dateMonth}
                dateDay={this.state.dateDay}
                dateYear={this.state.dateYear}
            />
            <SevenHour 
                images={this.state.images}
                currentCondition={this.state.currentCondition}
                time={this.state.time}
             />
            </section>
            </main>
        )
    }
}