import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { createReservation } from '../../redux/rockets/rocketsSlice';

const RocketItem = ({ rocket }) => {
  const { id, name, description, flickr_images, reserved } = rocket; // eslint-disable-line
  const dispatch = useDispatch();

  const handleReservation = () => {
    dispatch(createReservation(id));
  };
  return (
    <li key={id} className="rocket-list-item">
      <div className="rocket-img-div">
        <img src={flickr_images[0]} alt="Rocket" /> {/* eslint-disable-line */}
      </div>
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
        <button type="button" className="reserve-btn" onClick={handleReservation}>
          {reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
        </button>
      </div>
    </li>
  );
};

RocketItem.propTypes = {
  rocket: PropTypes.oneOfType([PropTypes.any, PropTypes.object]).isRequired,
};

export default RocketItem;
