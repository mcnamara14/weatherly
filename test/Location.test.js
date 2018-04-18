import { shallow, mount } from 'enzyme';
import Location from '../lib/Location.js';
import React from 'react';

//.simulate jest
//input enter 

require('locus');

describe('Location tests', () => {
  let renderedLocation = shallow(<Location />);

  it('should update suggestion based on search', () => {

    renderedLocation.find('input').simulate('change', {target: {value: ''}});

    expect(renderedLocation.state('userInputLocation')).toEqual(''); 


    renderedLocation.find('input').simulate('change', {target: {value: 'Bou'}});
    
    expect(renderedLocation.state('suggestions')).toEqual([ "boulder, co", "bountiful, ut"]);
    expect(renderedLocation.state('userInputLocation')).toEqual('Bou'); 
  });

  it('should change state value', () => {
    const expectation = 'Denver, CO';

    renderedLocation.instance().setLocation('Denver, CO');

    expect(renderedLocation.state('userInputLocation')).toEqual(expectation);
  });

  it('should render one section with locationInput class', () => {

    expect(renderedLocation.find('section.locationInput').length).toEqual(1);
  });

  it('should render one span', () => {

    expect(renderedLocation.find('span').length).toEqual(1);
  });

  it('should render one input', () => {

    expect(renderedLocation.find('input').length).toEqual(1);
  });

  it('should render one datalist', () => {

    expect(renderedLocation.find('datalist').length).toEqual(1);
  });

  it('should render the strings in the suggestions array', () => {
    renderedLocation.setState({suggestions: ['item1', 'item2']});

    expect(renderedLocation.find('option').length).toEqual(2);
  });

  it('should render one button with class submitBtn and text Submit', () => {
    const expectation = 'Submit';

    expect(renderedLocation.find('button.submitBtn').length).toEqual(1);
    expect(renderedLocation.find('button').text()).toEqual(expectation);
  });
});
