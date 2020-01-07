import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {

  it('should render correct url', () => {
    const expectedUrl = 'abc';
    const component = shallow(<TripSummary id={expectedUrl}  />);
    expect(component.find('.link').prop('to')).toEqual(`/trip/${expectedUrl}`);
  });

  it('should render correct img ', () => {
    const expectedSrc = 'image.png';
    const expectedAlt = 'Lorem ipsum';
    const component = shallow(<TripSummary image={expectedSrc} name={expectedAlt} />);
    expect(component.find('img').prop('src')).toEqual(expectedSrc);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
  });

  it('should render correct props ', () => {
    const expectedName = 'name';
    const expectCost = '100';
    const expectedDays = 13;
    const component = shallow(<TripSummary name={expectedName} cost={expectCost} days={expectedDays}/>);
    expect(component.find('.title').text()).toEqual(expectedName);
    expect(component.find('.details').text()).toEqual(`${expectedDays} daysfrom ${expectCost}`);
  });

  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });
});

