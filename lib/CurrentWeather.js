import React, { Component } from 'react';

export default class CurrentWeather extends Component {
    constructor() {
    super();
  }

  render() {
    const weatherImages = {
      'Mostly Cloudy': '/assets/mostly-cloudy-icon-lg.png'
    }


    return (
      <section className="currentWeather">
        <div className="focalConditions">
          <img src={weatherImages['Mostly Cloudy']} />
          <div className="focalInfo">
            <h1>{this.props.currentTemperature}<sup>o</sup></h1>
            <h4>Clear</h4>
            <h6>96<sup>o</sup> / 79<sup>o</sup></h6>
          </div>
        </div>
        <div className="conditionDetails">
          <div className="detailHeadings">
            <h3>Wednesday <br />Dec, 20 2017</h3>
            <h2>Louisville <br /><span>Kentucky</span></h2>
          </div>
          <hr />
          <div className="detailStats">
            <div className="stat">
              <h5>86<sup>o</sup></h5>
              <p>Feels like</p>
            </div>
            <div className="stat center">
              <h5>2</h5>
              <p>UV Index</p>
            </div>
            <div className="stat last">
              <h5>1 MPH</h5>
              <p>Wind</p>
            </div>
            <div className="stat">
              <h5>0 IN</h5>
              <p>Percipitation</p>
            </div>
            <div className="stat center">
              <h5>10 MI</h5>
              <p>Visibility</p>
            </div>
            <div className="stat last">
              <h5>35<sup>o</sup></h5>
              <p>Dewpoint</p>
            </div>
          </div>
          <div className="todaysWeather">
          Today's Weather
          <p>Mostly cloudy skies this morning will become partly cloudy this afternoon. High 11C. Winds NE at 15 to 25 km/h.</p>
          </div>
        </div>
      </section>
    )
  }
}