import { Provider } from "react-redux";
import RocketItem from "../Rockets/RocketItem";
import { render, screen, fireEvent } from "@testing-library/react";
import store from "../features/store";
import { createReservation } from "../../redux/rockets/rocketsSlice";

jest.mock('../features/store');
describe('Rocket Item Component', () => {
  const rocket = {
    id: 1,
    name: 'Startship',
    description: 'description',
    flickr_images: ['image.jpg'],
    reserved: false,
  };
  test('Should Render Rocket Item Component', () => {
    const container = render(
      <Provider store={store}>
        <RocketItem rocket={rocket} />
      </Provider>
    );
    expect(container).toMatchSnapshot();
    expect(screen.getByAltText('Rocket')).toHaveAttribute('src', 'image.jpg');
    expect(screen.getByText('Startship')).toBeInTheDocument();
    expect(screen.getByText('description')).toBeInTheDocument();
    expect(screen.getByText('Reserve Rocket')).toBeInTheDocument();
    expect(screen.queryByText('Cancel Reservation')).not.toBeInTheDocument();
  });

  test('Should dispatche createReservation when Reserve Rocket button is clicked', () => {
    render(
      <Provider store={store}>
        <RocketItem rocket={rocket} />
      </Provider>
    );
    fireEvent.click(screen.getByText('Reserve Rocket'));

    expect(store.dispatch).toHaveBeenCalledWith(createReservation(1));

    const reservationButton = screen.getByText('Reserve Rocket');
    expect(reservationButton).toBeInTheDocument();
  });

  test('Should dispatche createReservation when Reserve Rocket button is clicked', () => {
    rocket.reserved = true;
    render(
      <Provider store={store}>
        <RocketItem rocket={rocket} />
      </Provider>
    );
    fireEvent.click(screen.getByText('Cancel Reservation'));

    expect(store.dispatch).toHaveBeenCalledWith(createReservation(1));

    const reservationButton = screen.getByText('Cancel Reservation');
    expect(reservationButton).toBeInTheDocument();
  });
});