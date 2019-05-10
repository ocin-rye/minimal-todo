import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Filter from './index';
import { todoListFilters } from '../../actions/paramConstants';

describe('<Filter />', () => {
  const mockSetFilter = jest.fn();
  const filterState = 'All';
  const filter = shallow(<Filter setTodoListFilter={mockSetFilter} todoListFilter={filterState} />);

  it('renders without crashing', () => {
    expect(toJson(filter)).toMatchSnapshot();
  });

  it('renders filter buttons', () => {
    const buttonLength = Object.keys(todoListFilters).length;

    expect(filter.find('button')).toHaveLength(buttonLength);
  });

  describe('set filter', () => {
    it('calls filter fn with all param', () => {
      filter.find('.All').simulate('click');
      expect(mockSetFilter).toBeCalledWith('All');
    });

    it('calls filter fn with active param', () => {
      filter.find('.Active').simulate('click');
      expect(mockSetFilter).toBeCalledWith('Active');
    });

    it('calls filter fn with completed param', () => {
      filter.find('.Completed').simulate('click');
      expect(mockSetFilter).toBeCalledWith('Completed');
    });

    // Generate click fn call test for each filter button
    // Object.keys(todoListFilters).map(key => {
    //   it(`calls filter fn with ${todoListFilters[key]} param`, () => {
    //     filter.find(`.${todoListFilters[key]}`).simulate('click');
    //     expect(mockSetFilter).toBeCalledWith('todoListFilters[key]');
    //   });
    // });
  });
});
