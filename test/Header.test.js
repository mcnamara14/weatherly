import { shallow, mount } from 'enzyme';
import Header from '../lib/Header.js';
import React from 'react';

require('locus');

describe('Header tests', () =>{

  let renderedHeader;

  beforeEach(() => {
    renderedHeader = shallow(<Header />);
  });

  it('should be a thing', () => {
    expect(Header).toBeDefined()
  })
})

