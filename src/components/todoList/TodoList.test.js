import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import TodoList from './index';

describe('<TodoList />', () => {
  const mockToggleCompleted = jest.fn();
  const mockDelete = jest.fn();
  const testTodoList = [
    {
      completed: false,
      id: 'testTodoId',
      text: 'Test todo text.',
    },
    {
      completed: true,
      id: 'SGcqcq0TbTPqvyWOMIKtZ',
      text: 'Duis maximus lacinia pellentesque.',
    },
    {
      completed: false,
      id: 'AHdfoOWOYnObQQH4zWcdL',
      text:
        'Aenean molestie elit at dictum finibus. Vestibulum porttitor at lorem viverra accumsan.',
    },
  ];
  const testTodoListEmpty = [];

  let todoList;
  let todoListEmpty;
  let todoListFilter = 'All';

  beforeEach(() => {
    todoList = shallow(
      <TodoList
        todoList={testTodoList}
        todoListFilter={todoListFilter}
        toggleTodoCompletion={mockToggleCompleted}
        deleteTodo={mockDelete}
      />,
    );

    todoListEmpty = shallow(
      <TodoList
        todoList={testTodoListEmpty}
        todoListFilter={todoListFilter}
        toggleTodoCompletion={mockToggleCompleted}
        deleteTodo={mockDelete}
      />,
    );
  });

  it('renders initial state without crashing', () => {
    expect(toJson(todoList)).toMatchSnapshot();
  });

  it('renders updated todo list', () => {
    todoList.setProps({ todoList: [] });
    todoList.update();
    expect(todoList.state().todoList).toEqual([]);
  });

  describe('renders Header', () => {
    it('renders empty array todo list header', () => {
      expect(todoListEmpty.find('.header').text()).toEqual('No Todos');
    });

    it('renders empty array active todo list header', () => {
      todoListEmpty.setProps({ todoListFilter: 'Active' });
      todoListEmpty.update();
      expect(todoListEmpty.find('.header').text()).toEqual('No Active Todos');
    });

    it('renders empty array completed todo list header', () => {
      todoListEmpty.setProps({ todoListFilter: 'Completed' });
      todoListEmpty.update();
      expect(todoListEmpty.find('.header').text()).toEqual('No Completed Todos');
    });

    it('renders populated todo list header', () => {
      expect(todoList.find('.header').text()).toEqual('All Todos: 3');
    });

    it('renders populated active todo list header', () => {
      todoList.setProps({ todoListFilter: 'Active' });
      todoList.update();
      expect(todoList.find('.header').text()).toEqual('Active Todos: 2');
    });

    it('renders populated completed todo list header', () => {
      todoList.setProps({ todoListFilter: 'Completed' });
      todoList.update();
      expect(todoList.find('.header').text()).toEqual('Completed Todos: 1');
    });
  });
});
