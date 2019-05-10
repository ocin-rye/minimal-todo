import { combineReducers } from 'redux';
import {
  ADD_TODO,
  DELETE_TODO,
  SET_TODO_LIST_FILTER,
  TOGGLE_TODO_COMPLETION,
} from '../actions/types';
import { todoListFilters } from '../actions/paramConstants';

// Constant for default todo list filter setting
const { SHOW_ALL } = todoListFilters;

// Manage actions for todolist filter
function todoListFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_TODO_LIST_FILTER:
      return action.payload.todoListFilter;

    default:
      return state;
  }
}

// Manage actions for todoList
function todoList(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [action.payload, ...state];

    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.payload.id);

    case TOGGLE_TODO_COMPLETION:
      return state.map(todo => {
        if (todo.id === action.payload.id) {
          return Object.assign({}, todo, { completed: !todo.completed });
        }
        return todo;
      });

    default:
      return state;
  }
}

// Combine reducers
const todo = combineReducers({
  // Returns a TodoListFilters constant
  todoListFilter,
  // Returns an array of todo objects or an empty array
  todoList,
});

export default todo;
