import { shallow, mount } from 'enzyme';
import CardHeader from '../lib/CardHeader.js';
import React from 'react';

require('locus');

describe('CardHeader test', () => {

  let renderedCardHeader = shallow(<CardHeader />);

  it('includes 1 section with class of extendedForecastHeader', () => {
    const expectation = 1;

    expect(renderedCardHeader.find('section.extendedForecastHeader').length).toEqual(expectation);
  });

  it('includes a span with text of Forecast', () => {
    const expectation = 'Forecast';

    expect(renderedCardHeader.find('span').text()).toEqual(expectation)
  });
})