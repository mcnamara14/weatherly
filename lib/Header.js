import React, { Component } from 'react';
import Location from './Location';
import ErrorHandler from './ErrorHandler';

export default class Header extends Component {
  constructor() {
    super();
  
  }

    render() {
        return (
            <header>
                <ErrorHandler />
                <div>
                <img className="logo" src="./assets/weatherly-logo.png"/>
                <Location updateLocation={this.props.updateLocation} welcomeStatus={this.props.welcome}/>
                 </div>
            </header>
        )
    }
}