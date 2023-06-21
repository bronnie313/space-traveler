import './rockets.css';
import rocketsFromStorage from './rocketsLists';

const RocketItem = ({ rockets }) => {
  const rocketLists = rockets.map((rocket) => {
    const id = { ...rocket };
    return (
      <li key={id} className="rocket-list-item">
        <div className="rocket-img-div">
          <img src={rocket.flickr_images[0]} alt="Rocket" />
        </div>
        <div>
          <h3>{rocket.name}</h3>
          <p>{rocket.description}</p>
          <button type="button" className="reserve-btn">{rocket.status ? 'Cancel Reservation' : ' Reserve Ticket'}</button>
        </div>
      </li>
    );
  });

  return rocketLists;
};

const Rockets = () => (
  <div className="rockets">
    <ul className="rocket-list-items">
      <RocketItem rockets={rocketsFromStorage()} />
    </ul>
  </div>
);

export default Rockets;
