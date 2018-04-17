import { shallow, mount } from 'enzyme';
import WelcomePage from '../lib/WelcomePage.js';
import React from 'react';

require('locus');

describe('Welcome Page tests', () => {
  let renderedWelcome;

  beforeEach(() => {
    renderedWelcome = shallow(<WelcomePage />);
  });

  it('should be a thing', () => {
    expect(renderedWelcome).toBeDefined()
  })

  describe('Welcome Page', () => { 

    it('should render the Location component on new visit', () => {

      expect(renderedWelcome.find('Location').length).toEqual(1);
    });

    it('should include one main element', () => {

      expect(renderedWelcome.find('main').length).toEqual(1);
    });

    it('should include one ErrorHandler components', () => {

      expect(renderedWelcome.find('ErrorHandler').length).toEqual(1);
    });

    it('should include one div', () => {

      expect(renderedWelcome.find('div').length).toEqual(1);
    });

    it('should include one h1 with text inside div', () => {
      const expectation = 'Weathrly';

      expect(renderedWelcome.find('div h1').text()).toEqual(expectation);
    });

    it('should include one p with text inside div', () => {
      const expectation = 'Enter a location to view the forecast';

      expect(renderedWelcome.find('div p').text()).toEqual(expectation);
    });
  });
});
