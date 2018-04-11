import React, { Component } from 'react';

export default class CurrentWeather extends Component {
    constructor(props) {
    super();
  }

  render() {
    const weatherImages = {
      'Sunny': '/assets/sunny-icon-lg.png',
      'Mostly Cloudy': '/assets/mostly-cloudy-icon-lg.png',
    }

    const currentWeatherDetails = [
      {
        prop: this.props.feelsLike,
        name: 'Feels like'
      },
      {
        prop: this.props.UV,
        name: 'UV Index',
      },
      {
        prop: this.props.windSpeed,
        name: 'Wind'
      },
      {
        prop: this.props.precipitation,
        name: 'Precipitation'
      },
      {
        prop: this.props.visibility,
        name: 'Visibility'
      },
      {
        prop: this.props.dewpoint,
        name: 'Dewpoint'
      },
    ]

    return (
      <section className="currentWeather">
        <div className="focalConditions">
          <img src={weatherImages[this.props.currentCondition]} />
          <div className="focalInfo">
            <h1>{this.props.currentTemperature}<sup>o</sup></h1>
            <h4>{this.props.currentCondition}</h4>
            <h6>{this.props.highTemp}<sup>o</sup> / {this.props.lowTemp}<sup>o</sup></h6>
          </div>
        </div>
        <div className="conditionDetails">
          <div className="detailHeadings">
            <h3>{this.props.day} <br />{this.props.dateMonth} {this.props.dateDay}, {this.props.dateYear}</h3>
            <h2>Louisville <br /><span>Kentucky</span></h2>
          </div>
          <hr />
          <div className="detailStats">
            { currentWeatherDetails.map((detail) => {
                return <div className="stat">
                          <h5>{detail.prop}</h5>
                          <p>{detail.name}</p>
                        </div>
            }) }
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