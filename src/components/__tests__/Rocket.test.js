import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Rockets from '../Rockets/Rockets';
import store from '../features/store';

describe('Rockets Components test suits', () => {
  test('Should render Rockets component correctly', () => {
    const container = render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
