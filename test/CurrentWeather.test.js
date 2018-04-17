import { shallow, mount } from 'enzyme';
import CurrentWeather from '../lib/CurrentWeather.js';
import React from 'react';

require('locus');

describe('Current Weather tests', () => {

  let renderedCurrentWeather = 
  shallow(<CurrentWeather currentCondition={'Clear'} />);

  it('should include one section with currentWeather class', () => {

    expect(renderedCurrentWeather.find('section.currentWeather')
    .length).toEqual(1);
  });

  it('should include nine divs', () => {

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
    const expectation = 'Today\'s Weather';

    expect(renderedCurrentWeather.find('div.todaysWeather')
    .text()).toEqual(expectation);
  });
});
