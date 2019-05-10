import todoReducer from './index.js';
import {
  ADD_TODO,
  DELETE_TODO,
  SET_TODO_LIST_FILTER,
  TOGGLE_TODO_COMPLETION,
} from '../actions/types';

describe('todo reducer', () => {
  const sampleTodoOne = {
    completed: false,
    id: 'testTodoId',
    text: 'Test todo text.',
  };

  const sampleTodoTwo = {
    completed: true,
    id: 'SGcqcq0TbTPqvyWOMIKtZ',
    text: 'Duis maximus lacinia pellentesque.',
  };

  const initialState = {
    todoList: [],
    todoListFilter: 'All',
  };

  const oneTodoState = {
    todoList: [{ ...sampleTodoOne }],
    todoListFilter: 'All',
  };

  const twoTodoState = {
    todoList: [{ ...sampleTodoOne }, { ...sampleTodoTwo }],
    todoListFilter: 'All',
  };

  describe('returns the initial state', () => {
    it('returns unmodified state', () => {
      // passes action without switch match to get initial state
      const action = { type: 'unmatched_action' };

      expect(todoReducer(undefined, action)).toEqual(initialState);
    });
  });

  describe('ADD_TODO', () => {
    it('returns the correct state', () => {
      const action = {
        type: ADD_TODO,
        payload: { ...sampleTodoOne },
      };

      const expectedState = {
        todoList: [action.payload, ...initialState.todoList],
        todoListFilter: 'All',
      };

      expect(todoReducer(initialState, action)).toEqual(expectedState);
    });
  });

  describe('DELETE_TODO', () => {
    it('returns the correct state', () => {
      const action = {
        type: DELETE_TODO,
        payload: { ...sampleTodoOne },
      };

      const expectedState = {
        todoList: [{ ...sampleTodoTwo }],
        todoListFilter: 'All',
      };

      expect(todoReducer(twoTodoState, action)).toEqual(expectedState);
    });
  });

  describe('TOGGLE_TODO_COMPLETION', () => {
    it('returns the correct state', () => {
      const action = {
        type: TOGGLE_TODO_COMPLETION,
        payload: { ...sampleTodoOne },
      };

      const expectedState = {
        todoList: [{ ...sampleTodoOne, completed: true }, { ...sampleTodoTwo }],
        todoListFilter: 'All',
      };

      expect(todoReducer(twoTodoState, action)).toEqual(expectedState);
    });
  });

  describe('SET_TODO_LIST_FILTER', () => {
    it('returns the correct state', () => {
      const action = {
        type: SET_TODO_LIST_FILTER,
        payload: { todoListFilter: 'Active' },
      };

      const expectedState = {
        todoList: [{ ...sampleTodoOne }],
        todoListFilter: 'Active',
      };

      expect(todoReducer(oneTodoState, action)).toEqual(expectedState);
    });
  });
});
