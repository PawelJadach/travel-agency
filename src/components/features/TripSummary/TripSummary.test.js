import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {

  it('should render correct url', () => {
    const expectedUrl = 'abc';
    const expectedDays = 13;
    const component = shallow(<TripSummary id={expectedUrl}  days={expectedDays}/>);
    expect(component.find('.link').prop('to')).toEqual(`/trip/${expectedUrl}`);
  });

  it('should render correct img ', () => {
    const expectedSrc = 'image.png';
    const expectedAlt = 'Lorem ipsum';
    const expectedDays = 13;
    const component = shallow(<TripSummary image={expectedSrc} name={expectedAlt} days={expectedDays}/>);
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

  it('should render correct render tags ', () => {
    const expectTags = ['name','surname','tag'];
    const expectedDays = 13;
    const component = shallow(<TripSummary days={expectedDays} tags={expectTags}/>);
    expect(component.find('.tag').at(0).text()).toEqual(expectTags[0]);
    expect(component.find('.tag').at(1).text()).toEqual(expectTags[1]);
    expect(component.find('.tag').at(2).text()).toEqual(expectTags[2]);
  });

  it('should not render tags div when props tag equal undefined ', () => {
    const expectedDays = 13;
    const component = shallow(<TripSummary days={expectedDays}/>);
    const tags = component.find('tags');
    expect(tags).toEqual({});
  });

});

