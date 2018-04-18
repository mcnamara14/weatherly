import { shallow, mount } from 'enzyme';
import CurrentWeather from '../lib/CurrentWeather.js';
import React from 'react';
import cleanedData from '../lib/mock-data.js';
import { images } from '../lib/weatherIcons';

require('locus');

describe('Current Weather tests', () => {
 
          //jest docs for method test for deeper texts

  let renderedCurrentWeather = shallow(<CurrentWeather 
    images={images}
    current={cleanedData.current}
    forecast={cleanedData.forecast}
    />);

  it('should include one section with currentWeather class', () => {

    expect(renderedCurrentWeather.find('section.currentWeather')
    .length).toEqual(1);
  });

  it('should include fourteen divs', () => {

    expect(renderedCurrentWeather.find('div').length).toEqual(14);
  });

  it('should include one icon inside div with class currentConditionImg', () => {

    expect(renderedCurrentWeather.find('div.currentConditionImg i')
    .length).toEqual(1);
  });

  it('should include one each of h1, h2, h4, h6, and six h5', () => {

    expect(renderedCurrentWeather.find('h1').length).toEqual(1);
    expect(renderedCurrentWeather.find('h2').length).toEqual(1);
    expect(renderedCurrentWeather.find('h4').length).toEqual(1);
    expect(renderedCurrentWeather.find('h5').length).toEqual(6);
    expect(renderedCurrentWeather.find('h6').length).toEqual(1);
  });

  it('should include seven p elements', () => {

    expect(renderedCurrentWeather.find('p').length).toEqual(7);
  });

  it('should render text inside div with class todaysWeather', () => {
    const expectation = "Today\'s WeatherDecreasing cloudiness and becoming windy. High 18C. WNW winds at 15 to 25 km/h, increasing to 30 to 50 km/h. Winds could occasionally gust over 65 km/h.";

    expect(renderedCurrentWeather.find('div.todaysWeather')
    .text()).toEqual(expectation);
  });
});
