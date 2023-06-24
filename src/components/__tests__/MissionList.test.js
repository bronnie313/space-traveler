import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { SingleMission } from '../Missionslist';
import store from '../features/store';

describe('Missions Components test suits', () => {
  test('Should render missions Item component correctly', async () => {
    const missionItems = [
      {
        Mission: 'mission 2',
        mission_name: 'mission 2',
        Description: 'mission 2 description',
        description: 'Mission Description',
        missionId: 2,
        key: 2,
        isEven: false,
        active: false,
      },
    ];
    const container = render(
      <Provider store={store}>
        <SingleMission missionItems={missionItems} key={Math.random() * 1000} />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
