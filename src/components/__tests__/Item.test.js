import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Item from '../Item';
import store from '../features/store';

describe('Item Components test suits', () => {
  test('Should render Item component correctly', () => {
    const container = render(
      <Provider store={store}>
        <table className="missions">
          <thead>
            <tr>
              <th><h3>Missions</h3></th>
              <th><h3>Description</h3></th>
              <th><h3>Status</h3></th>
              <th>Actions</th>
            </tr>
          </thead>
          <Item
            Mission='mission 2'
            Description='mission 2 description'
            missionId='2'
            key='2'
            isEven={false}
            active={false}
          />
        </table>
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
