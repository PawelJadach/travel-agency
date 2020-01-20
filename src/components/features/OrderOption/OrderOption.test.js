import React from 'react';
import {shallow} from 'enzyme';
import OrderOption from './OrderOption';
import DatePicker from 'react-datepicker';

describe('Component OrderOption', () => {
  it('should render without crashing', () => {
    const component = shallow(<OrderOption type='Lorem ipsum' name='Lorem ipsum' />);
    expect(component).toBeTruthy();
  });

  it('should return empty object if called without required props', () => {
    const component = shallow(<OrderOption name='Lorem ipsum'/>);
    expect(component).toEqual({});
  });

  it('should render expect title', () => {
    const expectedTitle = 'Title';
    const component = shallow(<OrderOption name={expectedTitle} type='icons'/> );
    const renderedTitle = component.find('.title').text();
    expect(renderedTitle).toEqual(expectedTitle);
  });
});

const optionTypes = {
  dropdown: 'OrderOptionDropdown',
  icons: 'OrderOptionIcons',
  checkboxes: 'OrderOptionCheckboxes',
  number: 'OrderOptionNumber',
  text: 'OrderOptionText',
  date: 'OrderOptionDate',
};

const mockProps = {
  id: 'abc',
  name: 'Lorem',
  values: [
    {id: 'aaa', icon: 'h-square', name: 'Lorem A', price: 0},
    {id: 'xyz', icon: 'h-square', name: 'Lorem X', price: 100},
  ],
  required: false,
  currentValue: 'aaa',
  price: '50%',
  limits: {
    min: 0,
    max: 6,
  },
};

const mockPropsForType = {
  dropdown: {},
  icons: {},
  checkboxes: {currentValue: [mockProps.currentValue]},
  number: {currentValue: 1},
  text: {},
  date: {},
};

const testValue = mockProps.values[1].id;
const testValueNumber = 3; //eslint-disable-line

for(let type in optionTypes){
  describe(`Component OrderOption with type=${type}`, () => {
    /* test setup */
    let component;
    let subcomponent;
    let renderedSubcomponent;
    let mockSetOrderOption;
    
    // beforeEach(() => {
    mockSetOrderOption = jest.fn();
    component = shallow(<OrderOption type={type} {...mockProps} {...mockPropsForType[type]} setOrderOption={mockSetOrderOption} />);
    subcomponent = component.find(optionTypes[type]);
    // console.log(type , ' ', subcomponent.debug())
    renderedSubcomponent = subcomponent.dive();
    // console.log('testy', type)
    /* common tests */
    // it('passes dummy test', () => {
    //   it(`renders ${optionTypes[type]}`, () => {
    //     expect(subcomponent).toBeTruthy();
    //     expect(subcomponent.length).toBe(1);
    //   });

    /* type-specific tests */
    switch (type) {
      case 'dropdown': {
        it('contains select and options', () => {
          const select = renderedSubcomponent.find('select');
          expect(select.length).toBe(1);

          const emptyOption = select.find('option[value=""]').length;
          expect(emptyOption).toBe(1);

          const options = select.find('option').not('[value=""]');
          expect(options.length).toBe(mockProps.values.length);
          expect(options.at(0).prop('value')).toBe(mockProps.values[0].id);
          expect(options.at(1).prop('value')).toBe(mockProps.values[1].id);
        });

        it('should run setOrderOption function on change', () => {
          renderedSubcomponent.find('select').simulate('change', {currentTarget: {value: testValue}});
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue });
        });
        break;
      }

      case 'checkboxes': {
        it('contains label and input', () => {
          const input = renderedSubcomponent.find('input');
          expect(input.length).toBe(2);

          const label = renderedSubcomponent.find('label');
          expect(label.length).toBe(2);

        });

        it('should run setOrderOption function on change', () => {
          renderedSubcomponent.find(`input[value="${testValue}"]`).simulate('change', {currentTarget: {checked: true}});
          expect(mockSetOrderOption).toBeCalledTimes(1);
        });
        break;
      }

      case 'icons': {
        it('contains Icon', () => {
          const icon = renderedSubcomponent.find('Icon');
          expect(icon.length).toBe(3);
        });

        it('should run setOrderOption function on click', () => {
          renderedSubcomponent.find('div').at(2).simulate('click');
          expect(mockSetOrderOption).toBeCalledTimes(1);
        });
        break;
      }

      case 'number': {
        it('contains input', () => {
          const input = renderedSubcomponent.find('input');
          expect(input.length).toBe(1);
        });

        it('should run setOrderOption function on change', () => {
          renderedSubcomponent.find('input').simulate('change', {currentTarget: {value: testValueNumber}});
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValueNumber });
        });
        break;
      }

      case 'text': {
        it('contains input', () => {
          const input = renderedSubcomponent.find('input');
          expect(input.length).toBe(1);
        });

        it('should run setOrderOption function on change', () => {
          renderedSubcomponent.find('input').simulate('change', {target: {value: testValue}});
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue });
        });
        break;
      }
          
      case 'date': {
        it('contains datePicker', () => {
          const datepicker = renderedSubcomponent.find(DatePicker);
          expect(datepicker.length).toBe(1);
        });

        it('should run setOrderOption function on change', () => {
          renderedSubcomponent.find(DatePicker).simulate('change', new Date());
          expect(mockSetOrderOption).toBeCalledTimes(1);
          // expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue });
        });
      }
          
    }
    // });
    // });
  });
}
