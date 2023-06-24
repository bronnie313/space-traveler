import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Missions from '../Missionslist';
import store from '../features/store';

describe('Missions Components test suits', () => {
  test('Should missions Item component correctly', () => {
    const container = render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
