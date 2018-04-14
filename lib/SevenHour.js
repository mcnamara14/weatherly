import React from 'react';
import CardHeader from './CardHeader';

export default function SevenHour (props) {

  const hourlyForecast = props.hourly.slice(0,7);

  return (
    <div>
      <CardHeader cardName="7-Hour"/>
      
      <section className="sevenHourForecast">
        { hourlyForecast.map(hour => {
            let digitsHour = hour.FCTTIME.civil;
            let displayHour;

            digitsHour.length < 8? displayHour = digitsHour.slice(0, 1) : displayHour = digitsHour.slice(0, 2);

            return  <section className="hourForecast">
                      <article className="extendedTimeDay">{displayHour}<span>{hour.FCTTIME.ampm}</span></article>
                      <div>
                        <article className="hourTemp">{hour.temp.english}<sup>o</sup></article>
                        <img src={props.images[props.currentCondition]} />
                      </div>
                    </section>
          })
        }

      </section> 
    </div>    
  );
}








