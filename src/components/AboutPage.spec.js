import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import AboutPage from './AboutPage';

describe('<AboutPage />', () => {

  it('should have the about page', () => {
    "use strict";
    const wrapper = shallow(<AboutPage/>);
    const h2 = wrapper.find('h2').text();
    console.log(h2)
  })

  it('should have a header called \'About\'', () => {
    const wrapper = shallow(<AboutPage />);
    const actual = wrapper.find('h2').text();
    const expected = 'About';
    expect(actual).to.equal(expected);
  });

  it('should have a header with \'alt-header\' class', () => {
    const wrapper = shallow(<AboutPage />);
    const actual = wrapper.find('h2').prop('className');
    const expected = 'alt-header';

    expect(actual).to.equal(expected);
  });

  it('should link to an unknown route path', () => {
    const wrapper = shallow(<AboutPage />);
    const actual = wrapper.findWhere(n => n.prop('to') === '/badlink').length;
    console.log(wrapper.findWhere(n => n.prop('to') === '/badlink'));
    const expected = 1;

    expect(actual).to.be.equal(expected);
  });
});
