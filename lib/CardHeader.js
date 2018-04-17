import React from 'react';

export default function CardHeader(props) {
  return (
    <section className="extendedForecastHeader">
        <hr></hr><h3>{props.cardName}<br /> <span>Forecast</span></h3><hr></hr>
      </section>
  );
}