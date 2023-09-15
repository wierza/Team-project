import React from 'react';
import { shallow } from 'enzyme';
import Sale from './Sale';
import { Provider } from 'react-redux';
import store from '../../../redux/store';

describe('Component Sale', () => {
  it('should render without crashing', () => {
    const component = shallow(
      <Provider store={store}>
        <Sale />
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});
