export const RocketItem = ({ rockets }) => {
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

export default RocketItem;
