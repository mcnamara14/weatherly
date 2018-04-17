import { shallow, mount } from 'enzyme';
import ErrorHandler from '../lib/ErrorHandler.js';
import React from 'react';

require('locus');

describe('ErrorHandler tests', () => {

  let renderedErrorHandler = shallow(<ErrorHandler />);

  it('should include 1 section with errorContainer class', () => {
    const expectation = 1;

    expect(renderedErrorHandler.find('section.errorContainer').length).toEqual(expectation);
  });

  it('should include 1 article with errBox class', () => {
    const expectation = 1;

    expect(renderedErrorHandler.find('article.errorBox').length).toEqual(expectation);
  });

  it('should include 1 img inside article', () => {
    const expectation = 1;

    expect(renderedErrorHandler.find('article img').length).toEqual(expectation);
  });

  it('should include paragraph with text', () => {
    const expectation = 'Your location could not be found. Please enter a different location.';

    expect(renderedErrorHandler.find('p').text()).toEqual(expectation);
  });

  it('should include one button with submitBtn class and text', () => {
    const expectation = 'Enter your location';

    expect(renderedErrorHandler.find('button.submitBtn').length).toEqual(1);
    expect(renderedErrorHandler.find('button').text()).toEqual(expectation);
  })
});
