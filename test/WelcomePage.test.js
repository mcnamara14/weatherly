import { shallow, mount } from 'enzyme';
import WelcomePage from '../lib/WelcomePage.js';
import App from '..lib/App.js'
import Location from '../lib/Location.js'
import React from 'react';

require('locus');

describe('Welcome Page tests', () => {
  let renderedWelcome;
  let renderedApp;

  renderedApp = shallow(<App />);
  renderedWelcome = shallow(<WelcomePage />);

  describe('Welcome Page', () => { 

    it('should render the Location component on new visit', () => {

      expect(renderedWelcome.find('Location').length).toEqual(1);
    });
  });
});