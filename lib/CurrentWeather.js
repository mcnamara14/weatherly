import React from 'react';

export default function CurrentWeather (props) {
    const currentWeatherDetails = [
      {
        prop: props.current_observation.feelslike_f,
        name: 'Feels like'
      },
      {
        prop: props.current_observation.UV,
        name: 'UV Index',
      },
      {
        prop: props.current_observation.wind_mph,
        name: 'Wind'
      },
      {
        prop: props.current_observation.precip_today_in,
        name: 'Precipitation'
      },
      {
        prop: props.current_observation.visibility_mi,
        name: 'Visibility'
      },
      {
        prop: props.current_observation.dewpoint_f,
        name: 'Dewpoint'
      }, 
    ]

    return (
      <section className="currentWeather">
        <div className="focalConditions">
          <img src={props.images[props.current_observation.weather]} />
          <div className="focalInfo">
            <h1>{props.current_observation.temp_f}<sup>o</sup></h1>
            <h4>{props.current_observation.weather}</h4>
            <div className="currentHiLow">{props.forecast.simpleforecast.forecastday[3].high.fahrenheit}<sup>o</sup> / {props.forecast.simpleforecast.forecastday[3].low.fahrenheit}<sup>o</sup></div>
          </div>
        </div>
        <div className="conditionDetails">
          <div className="detailHeadings">
            <h6>{props.forecast.simpleforecast.forecastday[0].date.weekday} <br />{props.forecast.simpleforecast.forecastday[0].date.monthname_short} {props.forecast.simpleforecast.forecastday[0].date.day}, {props.forecast.simpleforecast.forecastday[0].date.year}</h6>
            <h2>{props.city} <br /><span>{props.stateUS}</span></h2>
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
            <p>{props.forecast.txt_forecast.forecastday[0].fcttext_metric}</p>
          </div>
        </div>
      </section>
    )
}