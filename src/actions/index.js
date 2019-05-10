import { ADD_TODO, DELETE_TODO, SET_TODO_LIST_FILTER, TOGGLE_TODO_COMPLETION } from './types';

// Actions Creators - Mock Async Functionality
export const addTodo = (todoText, todoId) => {
  const action = {
    type: ADD_TODO,
    payload: {
      text: todoText,
      completed: false,
      id: todoId,
    },
  };

  return action;
};

export const deleteTodo = todo => {
  const action = {
    type: DELETE_TODO,
    payload: todo,
  };

  return action;
};

export const toggleTodoCompletion = todo => {
  const action = {
    type: TOGGLE_TODO_COMPLETION,
    payload: todo,
  };

  return action;
};

export const setTodoListFilter = filterSetting => {
  const action = {
    type: SET_TODO_LIST_FILTER,
    payload: {
      todoListFilter: filterSetting,
    },
  };

  return action;
};
