import HappyHourAd from './HappyHourAd';
import { shallow } from 'enzyme';
import React from 'react';


const select = {
  title: '.title',
  promoDescription: '.promoDescription',
};

const mockProps = {
  title: 'TestTitle',
  promoDescription: 'test',
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
    expect(component.exists(select.promoDescription)).toEqual(true);
  });

  it('shuld render title from props', () => {
    const component = shallow(<HappyHourAd {...mockProps} />);
    const title = component.find(select.title).text();
    expect(title).toEqual(mockProps.title);
  });
});

const trueDate = Date;
const mockDate = customDate => class extends Date {
  constructor(...args) {
    if(args.length){
      super(...args);
    } else {
      super(customDate);
    }
    return this;
  }
  static now(){
    return (new Date(customDate)).getTime();
  }
};

const checkDescriptionAtTime = (time, expectedDescription) => {
  it(`should show correct at ${time}`, () => {
    global.Date = mockDate(`2019-05-14T${time}.135Z`);

    const component = shallow(<HappyHourAd {...mockProps} />);
    const renderedTime = component.find(select.promoDescription).text();
    expect(renderedTime).toEqual(expectedDescription);

    global.Date = trueDate;
  });
};

describe('Component HappyHourAd with mocked Date', () => {
  checkDescriptionAtTime('11:57:58', '122');
  checkDescriptionAtTime('11:59:59', '1');
  checkDescriptionAtTime('13:00:00', 23 * 60 * 60 + '');
});