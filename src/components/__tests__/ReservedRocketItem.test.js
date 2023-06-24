import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import ReservedRocketItem from '../Profile/ReservedRocketItem';
import store from '../features/store';
import { Reserved, JoinedMission } from '../Profile';

describe('ReservedRocketItem test suits', () => {
  test('Should render Reservation componet', () => {
    const rocket = {
      id: 1,
      name: 'rocket 2',
    };
    render(
      <Provider store={store}>
        <ReservedRocketItem rocket={rocket} />
      </Provider>,
    );
    expect(screen.getByText('rocket 2')).toBeInTheDocument();
  });
});

describe('JoinedMission component', () => {
  test('Should render JoinedMission Components', () => {
    const missions = '';
    const container = render(
      <Provider store={store}>
        <JoinedMission Mission={missions} />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});

describe('Missions component', () => {
  test('Should render Reserved Components', () => {
    const reserved = [];
    const container = render(
      <Provider store={store}>
        <Reserved rockets={reserved} />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
