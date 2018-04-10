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
            <h4>{this.props.currentCondition}</h4>
            <h6>{this.props.highTemp}<sup>o</sup> / {this.props.lowTemp}<sup>o</sup></h6>
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
              <h5>{this.props.feelsLike}<sup>o</sup></h5>
              <p>Feels like</p>
            </div>
            <div className="stat center">
              <h5>{this.props.UV}</h5>
              <p>UV Index</p>
            </div>
            <div className="stat last">
              <h5>{this.props.windSpeed} MPH</h5>
              <p>Wind</p>
            </div>
            <div className="stat">
              <h5>{this.props.precipitation} IN</h5>
              <p>Precipitation</p>
            </div>
            <div className="stat center">
              <h5>{this.props.visibility} MI</h5>
              <p>Visibility</p>
            </div>
            <div className="stat last">
              <h5>{this.props.dewpoint}<sup>o</sup></h5>
              <p>Dewpoint</p>
            </div>
          </div>
          <div className="todaysWeather">
          Today's Weather
          <p>{this.props.todaysWeather}</p>
          </div>
        </div>
      </section>
    )
  }
}