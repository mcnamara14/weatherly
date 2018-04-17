import React, { Component } from 'react';
import Header from './Header';
import WelcomePage from './WelcomePage'
import CurrentWeather from './CurrentWeather';
import SevenHour from './SevenHour';
import TenDay from './TenDay';
import Clean from './cleanData';
import key from './key.js';
import "isomorphic-fetch";
import weatherUndergroundIcons from 'weather-underground-icons';
import { images } from './weatherIcons';

export default class App extends Component {
    constructor() {
      super();

      this.state = {
        city: '',
        stateUSA: '',
        data: {},
        welcome: true
      }

      this.images = images;
      this.toggleWelcome = this.toggleWelcome.bind(this);
      this.updateLocation = this.updateLocation.bind(this);
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
        this.updateWeather(city, state);
    }

    toggleWelcome() {
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
        }).catch(() => {
            const errorContainer = document.querySelector('.errorContainer');
            const errorBox = document.querySelector('.errorBox');
            errorContainer.classList.toggle('hide');
            errorBox.classList.toggle('hide');
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
                <Header updateLocation={this.updateLocation} />
                <section className="container">
                    <CurrentWeather
                        images={this.images}
                        current={this.state.data.current}
                        forecast={this.state.data.forecast}
                    />
                    <SevenHour 
                        images={this.images}
                        currentCondition={this.state.data.current.currentCondition}
                        hourly={this.state.data.hourly}
                    />
                    <TenDay 
                        images={this.images}
                        forecast={this.state.data.forecast.tenDayArray}
                    />
                </section>
                </main>
            )}
    }
}