import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { createReservation } from '../../redux/rockets/rocketsSlice';

const RocketItem = ({ rocket }) => {
  const {
    id, name, description, reserved,
  } = rocket;
  const dispatch = useDispatch();

  const handleReservation = () => {
    dispatch(createReservation(id));
  };
  return (
    <li key={id} className="rocket-list-item">
      <div className="rocket-img-div">
        <img src={rocket.flickr_images[0]} alt="Rocket" />
      </div>
      <div>
        <h3>{name}</h3>
        <p>
          {reserved ? <span className="reserved-badge">Reserved</span> : null}
          {description}
        </p>
        <button
          type="button"
          className={reserved ? 'reserve-btn reserved-active' : 'reserve-btn'}
          onClick={handleReservation}
        >
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
