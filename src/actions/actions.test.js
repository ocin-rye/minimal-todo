import configureMockStore from 'redux-mock-store';
import { addTodo, deleteTodo, toggleTodoCompletion, setTodoListFilter } from './index';

// Create a mock store
const mockStore = configureMockStore();
const store = mockStore({});

describe('action creators', () => {
  const todo = {
    completed: false,
    id: '1UpbCPrF6mODLiVE6Uw7-',
    text: 'Sample Todo Text.',
  };

  beforeEach(() => {
    store.clearActions();
  });

  it('creates an ADD_TODO action', () => {
    // Dispatch the addTodo action with the values of a new todo.
    store.dispatch(addTodo('This is text todo text.', 'testTodoId'));
    expect(store.getActions()).toMatchSnapshot();
  });

  it('creates a DELETE_TODO action', () => {
    // Dispatch the deleteTodo action with the values of an existing todo.
    store.dispatch(deleteTodo(todo));
    expect(store.getActions()).toMatchSnapshot();
  });

  it('creates an TOGGLE_TODO_COMPLETION action', () => {
    // Dispatch the toggleTodoCompletion action with the values of an existing todo.
    store.dispatch(toggleTodoCompletion(todo));
    expect(store.getActions()).toMatchSnapshot();
  });

  it('creates an SET_TODO_LIST_FILTER action', () => {
    // Dispatch the setTodoListFilter action with the value of a todo list filter setting.
    const filterSetting = 'ALL';
    store.dispatch(setTodoListFilter(filterSetting));
    expect(store.getActions()).toMatchSnapshot();
  });
});
