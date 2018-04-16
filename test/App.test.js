
import { shallow, mount } from 'enzyme';
import App from '../lib/App.js';
import React from 'react';
require('locus');

// comment out /Users/tylermcnamara/turing/m2/projects/weatherly/node_modules/weather-underground-icons/dist/wu-icons-style.css styles


describe('App tests', () => {
  let renderedApp;

  beforeEach(() => {
    renderedApp = shallow(<App />);
  })

  describe('App defaults', () => { 

    it('should have default welcome state of true', () => {
      const expectation = '';
      expect(renderedApp.state('city')).toEqual(expectation)
    })

    it('should have default welcome state of true', () => {
      const expectation = '';
      
      expect(renderedApp.state('stateUSA')).toEqual(expectation)
    })
    
    // it('should not start with default data', () => {
    //   const expectation = null;

    //   expect(renderedApp.state('data')).toEqual(expectation)
    // })

    it('should have default weather images', () => {
      const expectation = 'wu wu-black wu-256 wu-clear';
      
      expect(renderedApp.state('images').Clear).toEqual(expectation)
    })

    it('should have a default welcome state of true', () => {
      const expectation = true;

      expect(renderedApp.state('welcome')).toEqual(expectation)
    })
  })

  describe('Render components ', () => { 
    beforeEach(() => {
      renderedApp = shallow(<App />);
    })

    it('should render the welcome page on new visit', () => {

      expect(renderedApp.find('WelcomePage').length).toEqual(1);
    })

    it('should render all other components when welcome state is false', () => {
      renderedApp.setState({welcome: false});

      expect(renderedApp.find('Header').length).toEqual(1);
      expect(renderedApp.find('CurrentWeather').length).toEqual(1);
      expect(renderedApp.find('SevenHour').length).toEqual(1);
      expect(renderedApp.find('TenDay').length).toEqual(1); 
    })
  })

  describe('Update location', () => { 
    beforeEach(() => {
      renderedApp = shallow(<App />);
    })

    it('should set city and stateUSA state correctly', () => {
      const location = 'San Diego, CA';
      const stateExpectation = 'CA';
      const cityExpectation = 'San Diego';

      renderedApp.instance().updateLocation(location);

      expect(renderedApp.state('stateUSA')).toEqual(stateExpectation)
      expect(renderedApp.state('city')).toEqual(cityExpectation)
    })

    // it('should send data to local storage', () => {
    //   localStorage.setItem('location', {city: "delray beach", stateUSA: "fl"})
    //   renderedApp = mount(<App />)

    //   renderedApp.instance().componentDidMount();

    //   const itemsInStorage = localStorage.getItem('location')
    //   eval(locus)
    //   expect(itemsInStorage.prop('city')).to.equal('delray beach');
    // })


  })

})