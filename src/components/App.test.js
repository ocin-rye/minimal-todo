import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';

import App from './App';

describe('<App />', () => {
  const initialState = {
    todoList: [],
    todoListFilter: 'All',
  };

  const mockStore = configureStore();
  const store = mockStore(initialState);

  it('renders without crashing', () => {
    const wrapper = shallow(<App store={store} />);
    const app = wrapper.dive();

    expect(toJson(app)).toMatchSnapshot();
  });
});
