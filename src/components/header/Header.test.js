import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

import Header from './index';

describe('<Header />', () => {
  it('renders without crashing', () => {
    const header = shallow(<Header />);
    expect(toJson(header)).toMatchSnapshot();
  });
});
