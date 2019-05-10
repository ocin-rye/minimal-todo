import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Todo from './index';

describe('<Todo />', () => {
  const mockToggleCompleted = jest.fn();
  const mockDelete = jest.fn();

  describe('Active todo', () => {
    const todoActive = {
      completed: false,
      id: 'SGcqcq0TbTPqvyWOMIKtZ',
      text: 'Example Todo Text.',
    };

    const todo = shallow(
      <Todo todo={todoActive} toggleTodoCompletion={mockToggleCompleted} deleteTodo={mockDelete} />,
    );

    it('renders active todo without crashing', () => {
      expect(toJson(todo)).toMatchSnapshot();
    });

    it('calls toggle completed fn() on click', () => {
      todo.find('.toggleCompleted').simulate('click');
      expect(mockToggleCompleted).toHaveBeenCalled();
    });

    it('calls delete fn() on click', () => {
      todo.find('.delete').simulate('click');
      expect(mockDelete).toHaveBeenCalled();
    });
  });

  describe('Completed todo', () => {
    const todoCompleted = {
      completed: true,
      id: 'SGcqcq0TbTPqvyWOMIKtZ',
      text: 'Example Todo Text.',
    };

    const todo = shallow(
      <Todo
        todo={todoCompleted}
        toggleTodoCompletion={mockToggleCompleted}
        deleteTodo={mockDelete}
      />,
    );

    it('renders completed todo without crashing', () => {
      expect(toJson(todo)).toMatchSnapshot();
    });

    it('calls toggle completed fn() on click', () => {
      todo.find('.toggleCompleted').simulate('click');
      expect(mockToggleCompleted).toHaveBeenCalled();
    });

    it('calls delete fn() on click', () => {
      todo.find('.delete').simulate('click');
      expect(mockDelete).toHaveBeenCalled();
    });
  });
});
