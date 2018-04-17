import { shallow, mount } from 'enzyme';
import App from '../lib/App.js';
import React from 'react';
import cleanData from '../lib/cleanData';
require('locus');

describe('Data cleaner', () => {
  let renderedApp;

  beforeEach(() => {
    renderedApp = shallow(<App />);
  })

  describe('Current data', () => { 

    it('should clean the API data file to the desired specs', () => {
      const location = 'San Diego, CA';
      const expectation = 'San Diego';

      renderedApp = mount(<App />)

      renderedApp.instance().updateLocation(location);

      expect(renderedApp.state('data').current.city).toEqual(expectation)
    })
  })
})

