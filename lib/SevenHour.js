import React from 'react';
import CardHeader from './CardHeader';

export default function SevenHour (props) {

  return (
    <div>
      <CardHeader cardName="7-Hour"/>
      
      <section className="sevenHourForecast">
        { props.hourly.map(hour => {

            return  <section className="hourForecast">
                      <article className="extendedTimeDay">{hour.hour}<span>{hour.ampm}</span></article>
                      <div>
                        <article className="hourTemp">{hour.temp}<sup>o</sup></article>
                        <i className={props.images[props.currentCondition]} />
                      </div>
                    </section>
          })
        }

      </section> 
    </div>    
  );
}








