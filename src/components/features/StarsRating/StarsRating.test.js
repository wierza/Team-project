import React from 'react';
import { shallow } from 'enzyme';
import StarsRating from './StarsRating';
import { Provider } from 'react-redux';
import store from '../../../redux/store';

describe('Stars Rating', () => {
  it('should render without crashing', () => {
    const component = shallow(
      <Provider store={store}>
        <StarsRating />
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});
