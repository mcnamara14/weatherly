import React from 'react';

export default function CurrentWeather (props) {
    const currentWeatherDetails = [
      {
        prop: props.feelsLike,
        name: 'Feels like'
      },
      {
        prop: props.UV,
        name: 'UV Index',
      },
      {
        prop: props.windSpeed,
        name: 'Wind'
      },
      {
        prop: props.precipitation,
        name: 'Precipitation'
      },
      {
        prop: props.visibility,
        name: 'Visibility'
      },
      {
        prop: props.dewpoint,
        name: 'Dewpoint'
      }, 
    ]

    return (
      <section className="currentWeather">
        <div className="focalConditions">
          <img src={props.images[props.currentCondition]} />
          <div className="focalInfo">
            <h1>{props.currentTemperature}<sup>o</sup></h1>
            <h4>{props.currentCondition}</h4>
            <div className="currentHiLow">{props.highTemp}<sup>o</sup> / {props.lowTemp}<sup>o</sup></div>
          </div>
        </div>
        <div className="conditionDetails">
          <div className="detailHeadings">
            <h6>{props.day} <br />{props.dateMonth} {props.dateDay}, {props.dateYear}</h6>
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
            <p>{props.todaysWeather}</p>
          </div>
        </div>
      </section>
    )
}