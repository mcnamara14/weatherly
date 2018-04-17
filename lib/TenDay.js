import React from 'react';
import CardHeader from './CardHeader';

export default function TenDay(props) {
  
  return (
    <div>
      <CardHeader cardName="10-Day" />

      <section className="tenDayForecast">
        { props.forecast.map((day, index) => {
          let condition = day.conditions;
          
          return ( 
            <article className="day" key={index}>
              <article className="extendedTimeDay">{day.date.weekday_short} 
                <span>{day.date.monthname_short}{day.date.day}</span></article>
              <article className="extendedHiLow"><strong>{day.high.fahrenheit}
              </strong><sup>o</sup> / {day.low.fahrenheit}<sup>o</sup></article>
              <i className={props.images[condition]} />
              <p>{condition}</p>
              <p className="precipitation">{day.qpf_allday.in} in</p>
            </article>
            );
          })
        }
      </section>
    </div>
  );
}