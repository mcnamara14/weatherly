import { shallow } from 'enzyme';
import App from '../lib/App.js';
import React from 'react';
// comment out /Users/tylermcnamara/turing/m2/projects/weatherly/node_modules/weather-underground-icons/dist/wu-icons-style.css styles


describe('App tests', () => {
  describe('App defaults', () => { 

    it('should have default welcome state of true', () => {
      const renderedApp = shallow(<App />);
      const expectation = '';
      
      expect(renderedApp.state('city')).toEqual(expectation)
    })

    it('should have default welcome state of true', () => {
      const renderedApp = shallow(<App />);
      const expectation = '';
      
      expect(renderedApp.state('stateUSA')).toEqual(expectation)
    })

    it('should not start with default data', () => {
      const renderedApp = shallow(<App />);
      global.localStorage = {}
      const expectation = null;

      expect(renderedApp.state('data')).toEqual(expectation)
    })

    it('should have default welcome state of true', () => {
      const renderedApp = shallow(<App />);
      const expectation = true;
      
      expect(renderedApp.state('welcome')).toEqual(expectation)
    })
  })
})