import React from 'react';

export default function TenDay (props) {
  return (
    <div>
      <section className="extendedForecastHeader">
        <hr></hr><h3>10-Day <br /> <span>Forecast</span></h3><hr></hr>
      </section>
      <section className="tenDayForecast">

      {props.forecast.map(day => {
        let conditions = day.conditions;
        return(
          <article className="day">
            <article className="extendedTimeDay">{day.date.weekday_short} <span>{day.date.monthname_short}{day.date.  day}</span></article>
            <article className="extendedHiLow"><strong>{day.high.fahrenheit}</strong><sup>o</sup> / {day.low. fahrenheit}<sup>o</sup></article>
            <img src={props.images[{conditions}]} />
            <p>{conditions}</p>
            <p className="precipitation">{day.qpf_allday.in} in</p>
          </article>
          )
        })
      }

      </section>
    </div>
  )
}