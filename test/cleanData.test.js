import { shallow, mount } from 'enzyme';
import App from '../lib/App.js';
import React from 'react';
import cleanedData from '../lib/mock-data';
require('locus');

describe('Data cleaner', () => {
  let renderedApp;

  beforeEach(() => {
    renderedApp = shallow(<App />);
    renderedApp.setState({data: cleanedData});
  });

  describe('Current data', () => { 

    it('should set the current city to the inputted city name', () => {
      const expectation = 'San Diego';

      expect(renderedApp.state('data').current.city).toEqual(expectation);
    });

    it('should set the current state to the inputted state name', () => {
      const expectation = 'California';

      expect(renderedApp.state('data').current.state).toEqual(expectation);
    });

    it('should set the current temperature', () => {
      const expectation = 60.8;

      expect(renderedApp.state('data').current.temp).toEqual(expectation);
    });

    it('should set the current condition', () => {
      const expectation = 'Mostly Cloudy';

      expect(renderedApp.state('data').current.currentCondition).toEqual(expectation);
    });

    it('should return current weather details', () => {
      const expectation = 'Mostly Cloudy';

      expect(renderedApp.state('data').current.currentWeatherDetails.length).toEqual(6);
    });

    it('should return the high temp for the day', () => {
      const expectation = '62';

      expect(renderedApp.state('data').forecast.highTemp).toEqual(expectation);
    });

    it('should return the low temp for the day', () => {
      const expectation = '54';

      expect(renderedApp.state('data').forecast.lowTemp).toEqual(expectation);
    });

    it('should return the current day', () => {
      const expectation = 'Monday';

      expect(renderedApp.state('data').forecast.day).toEqual(expectation);
    });

    it('should return current day number', () => {
      const expectation = 16;

      expect(renderedApp.state('data').forecast.dayInteger).toEqual(expectation);
    });

  });

  describe('Ten day forecast data', () => { 

    it('should return an array with objects containing the next 10 days of weather data', () => {

      expect(renderedApp.state('data').forecast.tenDayArray.length).toEqual(10);    
    });

  });

  describe('Hourly forecast data', () => { 

    it('should return an array with objects containing the next 7 hours of weather data', () => {
      renderedApp.setState({data: cleanedData});

      expect(renderedApp.state('data').hourly.length).toEqual(7);   
    });

    it('should return data in the right format for each hour', () => {
      renderedApp.setState({data: cleanedData});
      const expected = {
        "ampm": "AM", 
        "condition": "Mostly Cloudy", 
        "hour": "11", 
        "temp": "64"
      };
      
      expect(renderedApp.state('data').hourly[0]).toEqual(expected);   
    });

  });

});

