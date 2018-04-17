import { shallow } from 'enzyme';
import Header from '../lib/Header.js';
import React from 'react';

require('locus');

describe('Header tests', () =>{

  let renderedHeader = shallow(<Header />);

  it('should include one ErrorHandler component', () => {
    const expectation = 1;

    expect(renderedHeader.find('ErrorHandler').length).toEqual(expectation);
  });

  it('should include one div', () => {
    const expectation = 1;

    expect(renderedHeader.find('div').length).toEqual(expectation);
  });

  it('should render one div image with logo class', () => {
    const expectation = 1;

    expect(renderedHeader.find('div img.logo').length).toEqual(expectation)
  });

  it('should include one Location component', () => {
    const expectation = 1;

    expect(renderedHeader.find('Location').length).toEqual(expectation);
  });
})

