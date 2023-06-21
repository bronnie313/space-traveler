import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import './rockets.css';
import { fetchRockets } from '../../redux/rockets/rocketsSlice';

const RocketItem = ({ rockets }) => {
  const rocketLists = rockets.map((rocket) => {
    const { id } = rocket;
    return (
      <li key={id} className="rocket-list-item">
        <div className="rocket-img-div">
          <img src={rocket.flickr_images[0]} alt="Rocket" />
        </div>
        <div>
          <h3>{rocket.name}</h3>
          <p>{rocket.description}</p>
          {rocket.reserved ? <button type="button" className="reserve-btn">Cancel Reservation</button> : <button type="button" className="reserve-btn reserved">Reserve Ticket</button>}
        </div>
      </li>
    );
  });

  return rocketLists;
};

const Rockets = () => {
  const rocketLists = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, []);
  return (
    <div className="rockets">
      <ul className="rocket-list-items">
        {rocketLists.error !== '' ? <div className="error"><span>{rocketLists.error}</span></div> : null}
        {rocketLists.isLoading ? <div className="loading"><span /></div> : <RocketItem rockets={rocketLists.rocketLists} />}
      </ul>
    </div>
  );
};

export default Rockets;
