import HappyHourAd from './HappyHourAd';
import { shallow } from 'enzyme';
import React from 'react';


describe('Component HappyHourAd', () => {
  it('shuld render without crashing', () => {
    const component = shallow(<HappyHourAd />);
    expect(component).toBeTruthy();
  });
});