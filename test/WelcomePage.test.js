import { shallow, mount } from 'enzyme';
import WelcomePage from '../lib/WelcomePage.js';
import Location from '../lib/Location.js'
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
  });
});
