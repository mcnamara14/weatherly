import React from 'react';

export default function SevenHour (props) {
  const hourlyForecast = props.hourly.slice(0,7);
  const hours = hourlyForecast.map(hour => {
    if (hour.FCTTIME.hour < 12) {
        return {
                hour: hour.FCTTIME.hour,
                ampm: 'AM'
                }
    } else if (hour.FCTTIME.hour > 12) {
        hour.FCTTIME.hour -= 12;
        return {
          hour: hour.FCTTIME.hour,
          ampm: 'PM'
          }
    } else {
        return {
          hour: hour.FCTTIME.hour,
          ampm: 'PM'
          }
    }
  });

  const hourlyTemps = hourlyForecast.map(hour => {
    return hour.temp.english
  })

  return (
    <div>
      
      <section className="extendedForecastHeader">
      <hr></hr><h3>7-Hour <br /> <span>Forecast</span></h3><hr></hr>
      </section>

      <section className="sevenHourForecast">
      { hours.map(hour => {
          return  <section className="hourForecast">
                    <article className="extendedTimeDay">{hour.hour}<span>{hour.ampm}</span></article>
                    <div>
                      <article className="hourTemp">90<sup>o</sup></article>
                      <img src={props.images[props.currentCondition]} />
                    </div>
                  </section>
        }) 
      }
      </section> 
    </div>    
  );
}