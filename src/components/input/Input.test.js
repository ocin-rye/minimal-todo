import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Input from './index';

describe('<Input />', () => {
  const mockAddTodo = jest.fn();
  let input;

  beforeEach(() => {
    input = shallow(<Input addTodo={mockAddTodo} />);
  });

  it('renders without crashing', () => {
    expect(toJson(input)).toMatchSnapshot();
  });

  describe('handles input submit', () => {
    it('submits without todo text on button press', () => {
      input.find('button').simulate('click');
      expect(input.state().error).toBe(true);
    });

    it('submits without todo text on enter key press', () => {
      input.find('input').simulate('keydown', { key: 'Enter', keyCode: 13, which: 13 });
      expect(input.state().error).toBe(true);
    });

    it('submits todo text on button press', () => {
      input.find('input').simulate('change', { target: { value: 'Sample todo text.' } });
      input.find('button').simulate('click');
      expect(input.state().confirmed).toBe(true);
    });

    it('submits todo text on enter key press', () => {
      input.find('input').simulate('change', { target: { value: 'Sample todo text.' } });
      input.find('input').simulate('keydown', { key: 'Enter', keyCode: 13, which: 13 });
      expect(input.state().confirmed).toBe(true);
    });
  });

  describe('renders input text', () => {
    it('initial input text', () => {
      expect(input.find('.textInitial').text()).toEqual('Enter Todo Text:');
    });

    it('error input text', () => {
      input.find('button').simulate('click');
      expect(input.find('.textError').text()).toEqual('Error: Please Enter Valid Todo Text');
    });

    it('success input text', () => {
      input.find('input').simulate('change', { target: { value: 'Sample todo text.' } });

      input.find('button').simulate('click');

      expect(input.find('.textSuccess').text()).toEqual('Success: New Todo Created');
    });
  });
});

// it('renders updated todo list', () => {
//   let todoListFilter = 'All';
//   todoList = shallow(<TodoList todoList={testTodoList} todoListFilter={todoListFilter} />);

//   todoList.setProps({ todoList: [] });

//   todoList.update();

//   expect(todoList.state().todoList).toEqual([]);
// });
