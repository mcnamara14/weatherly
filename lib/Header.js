import React, { Component } from 'react';
import Location from './Location';

export default class Header extends Component {
  constructor() {
    super();
  
  }

    render() {
        return (
            <header>
                <div>
                <img className="logo" src="./assets/weatherly-logo.png"/>
                <Location
                  updateLocation={this.props.updateLocation}
                  updateWeather={this.props.updateWeather}
                  welcomeStatus={this.props.welcome}/>
                 </div>
            </header>
        )
    }
}