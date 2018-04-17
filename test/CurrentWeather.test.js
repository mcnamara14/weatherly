import { shallow, mount } from 'enzyme';
import CurrentWeather from '../lib/CurrentWeather.js';
import React from 'react';

require('locus');

// describe('Current Weather tests', () => {
//   let renderedCurrWeather;

//   beforeEach(() => {
//     renderedCurrWeather = shallow(<CurrentWeather />);
//   });

//   it('renders', () => {
    
//   })

  
// });

//EXAMPLES
  //**CHECKING THAT THE COMPONENTS HTML RENDERS THE PROPER TEXT
// it('renders', () => {
//   const wrapper = shallow(<Hello name="Jack" />);
//   expect(wrapper.find('p').text()).toEqual('Hello, Jack!');

// it('renders the name given', () => {...})

// it('uses "Unknown" if no name is passed in', () => {
//   const wrapper = shallow(<Hello />);
//   expect(wrapper.find('p').text()).toEqual('Hello, Unknown!');
// });
// expect(received).toEqual(expected)

// Expected value to equal:
//   "Hello, Unknown!"
// Received:
//   "Hello, !"