import React, { Component } from 'react';

export default class SevenHour extends Component {
  constructor() {
    super();
    
  }

  nextSevenHours() {
    const currentTime = this.props.time;
    const time = currentTime.slice(0,2);
    const amPm = currentTime.slice(6,9);
    const nextSevenHours = [];

    for (let i = 0; i < 7; i++) {
      if (time <= 11 && time >= 0) {
        nextSevenHours.push(time + 'AM')
      } else {
        nextSevenHours.push(time + 'PM')
      }
    }
  }

  render() {

    return (
      <div>
        <section className="extendedForecastHeader">
        <hr></hr><h3>7-Hour <br /> <span>Forecast</span></h3><hr></hr>
        </section>
        <section className="sevenHourForecast">
          <section className="hourForecast">
            <article className="hourHeader">1<span>PM</span></article>
            <div>
              <article className="hourTemp">91<sup>o</sup></article>
              <img src={this.props.images[this.props.currentCondition]} />
            </div>
          </section>
          <section className="hourForecast">
            <article className="hourHeader">2<span>PM</span></article>
            <div>
              <article className="hourTemp">91<sup>o</sup></article>
              <img src={this.props.images[this.props.currentCondition]} />
            </div>
          </section>
          <section className="hourForecast">
            <article className="hourHeader">3<span>PM</span></article>
            <div>
              <article className="hourTemp">91<sup>o</sup></article>
              <img src={this.props.images[this.props.currentCondition]} />
            </div>
          </section>
          <section className="hourForecast">
            <article className="hourHeader">4<span>PM</span></article>
            <div>
              <article className="hourTemp">91<sup>o</sup></article>
              <img src={this.props.images[this.props.currentCondition]} />
            </div>
          </section>
          <section className="hourForecast">
            <article className="hourHeader">5<span>PM</span></article>
            <div>
              <article className="hourTemp">91<sup>o</sup></article>
              <img src={this.props.images[this.props.currentCondition]} />
            </div>
          </section>
          <section className="hourForecast">
            <article className="hourHeader">6<span>PM</span></article>
            <div>
              <article className="hourTemp">91<sup>o</sup></article>
              <img src={this.props.images[this.props.currentCondition]} />
            </div>
          </section>
          <section className="hourForecast">
            <article className="hourHeader">7<span>PM</span></article>
            <div>
              <article className="hourTemp">91<sup>o</sup></article>
              <img src={this.props.images[this.props.currentCondition]} />
            </div>
          </section>
        </section> 
      </div>    
    )
  }
}