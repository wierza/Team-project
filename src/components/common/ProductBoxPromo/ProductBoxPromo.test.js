import React from 'react';
import { shallow } from 'enzyme';
import ProductBoxPromo from './ProductBoxPromo';

describe('Component ProductBoxPromo', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProductBoxPromo />);
    expect(component).toBeTruthy();
  });
});
