import React, { Component } from 'react';
import Header from './Header';
import cleanedData from './mock-data';
import WelcomePage from './WelcomePage'
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
        images: images, 
        welcome: true
      }
      this.toggleWelcome = this.toggleWelcome.bind(this);
      this.updateLocation = this.updateLocation.bind(this);
      this.updateWeather = this.updateWeather.bind(this);
    }

    componentDidMount() {
        this.getLocalStorage();
    }

    getLocalStorage() {
        if (window.localStorage.location) {
            this.toggleWelcome();
            var retrievedLocation = JSON.parse(localStorage.getItem('location'));
            this.updateWeather(retrievedLocation.city, retrievedLocation.stateUSA)
        }
    }

    updateLocation(location){
        let city = location.slice(0, location.length-4);
        let state = location.slice(location.length-2, location.length);
        let inputtedLocation = {
            city: city,
            stateUSA: state
        }
        let stringifiedLocation = JSON.stringify(inputtedLocation)
        localStorage.setItem('location', stringifiedLocation)
        this.setState({city: city, stateUSA: state});
    }

    toggleWelcome() {
        console.log('asdf')
        this.setState({
            welcome: false
        })
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
        if (this.state.welcome === true) {
            return (
                <WelcomePage updateLocation={this.updateLocation} toggleWelcome={this.toggleWelcome}/>
            )    
        } else {
            return (
            <main>
            <Header updateLocation={this.updateLocation}
                updateWeather={this.updateWeather}
                 welcomeStatus={this.state.welcome}/>
                }
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
            )}
    }
}