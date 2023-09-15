import React from 'react';
import { shallow } from 'enzyme';
import Sale from './Sale';

describe('Component Sale', () => {
  it('should render without crashing', () => {
    const component = shallow(<Sale />);
    expect(component).toBeTruthy();
  });
});
