import React from 'react';

export default function CurrentWeather (props) {
  //move this array to state and pass as prop
    const currentWeatherDetails = [
      {
        prop: props.current.feelsLike,
        name: 'Feels like'
      },
      {
        prop: props.current.uv,
        name: 'UV Index',
      },
      {
        prop: props.current.windSpeed,
        name: 'Wind'
      },
      {
        prop: props.current.precipitation,
        name: 'Precipitation'
      },
      {
        prop: props.current.visibility,
        name: 'Visibility'
      },
      {
        prop: props.current.dewpoint,
        name: 'Dewpoint'
      }, 
    ]

    return (
      <section className="currentWeather">
        <div className="focalConditions">
          <img src={props.images[props.current.currentCondition]} />
          <div className="focalInfo">
            <h1>{props.current.temp}<sup>o</sup></h1>
            <h4>{props.current.currentCondition}</h4>
            <div className="currentHiLow">{props.forecast.highTemp}<sup>o</sup> / {props.forecast.lowTemp}<sup>o</sup></div>
          </div>
        </div>
        <div className="conditionDetails">
          <div className="detailHeadings">
            <h6>{props.forecast.day} <br />{props.forecast.month} {props.forecast.dayInteger}, {props.forecast.year}</h6>
            <h2>{props.current.city} <br /><span>{props.current.state}</span></h2>
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
            <p>{props.forecast.weatherMessage}</p>
          </div>
        </div>
      </section>
    )
}