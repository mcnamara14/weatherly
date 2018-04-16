import React, { Component } from 'react';
import Location from './Location';

export default class WelcomePage extends Component {
  constructor() {
    super();
  }

    render() {
        return (
          <main>
            <section className="welcomeBox">
                <div>
                  <h1>Weathrly</h1>
                  <p>Enter a location to view the forecast</p>
                  <Location updateLocation={this.props.updateLocation} 
                  updateWeather={this.props.updateWeather}
                  toggleWelcome={this.props.toggleWelcome}/>
                 </div>
            </section>
          </main>
        )
    }
}