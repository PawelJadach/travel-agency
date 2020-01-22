import HappyHourAd from './HappyHourAd';
import { shallow } from 'enzyme';
import React from 'react';


const select = {
  title: '.title',
  promo: '.promoDescription',
  h3: '.coutdown',
};

const mockProps = {
  title: 'TestTitle',
  promo: 'Test promoDescription',
};

describe('Component HappyHourAd', () => {
  it('shuld render without crashing', () => {
    const component = shallow(<HappyHourAd />);
    expect(component).toBeTruthy();
  });

  it('shuld render title and countdown', () => {
    const component = shallow(<HappyHourAd />);
    //   const subcomponent = component.find('div');
    //   const renderedSubcomponent = subcomponent.dive();

    expect(component.exists(select.title)).toEqual(true);
    expect(component.exists(select.promo)).toEqual(true);
  });

  it('shuld render title from props', () => {
    const component = shallow(<HappyHourAd {...mockProps} />);
    const title = component.find(select.title).text();
    expect(title).toEqual(mockProps.title);

  });
});