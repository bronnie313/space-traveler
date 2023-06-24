import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Profile from '../Profile';
import store from '../features/store';

describe('Profile Components test suits', () => {
  test('Should profile Item component correctly', () => {
    const container = render(
      <Provider store={store}>
        <Profile />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
