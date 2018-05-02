import React from 'react';
import { shallow } from 'enzyme';
import SevenHour from '../lib/SevenHour.js';
import cleanedData from '../lib/mock-data.js';
import { images } from '../lib/weatherIcons';

describe('Seven hour', () => {

  let renderedSevenHour = shallow(<SevenHour 
    images={images}
    currentCondition= {cleanedData.current.curentCondition}
    hourly={cleanedData.hourly}
  />);

    it('should render text inside div with class todaysWeather', () => {
      const expectation = "";

      expect(renderedSevenHour.find('.hourTemp')
      .text()).toEqual(expectation);
    });
});