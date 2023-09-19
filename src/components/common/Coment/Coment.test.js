import React from 'react';
import { shallow } from 'enzyme';
import Coment from './Coment';

describe('Component Coment', () => {
  it('should render without crashing', () => {
    const component = shallow(<Coment />);
    expect(component).toBeTruthy();
  });
});
