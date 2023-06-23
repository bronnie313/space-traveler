import React from 'react';
import './styles/Profile.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import ReservedRocketItem from './Profile/ReservedRocketItem';

const Reserved = ({ rockets }) => rockets.map(
  (rocket) => <ReservedRocketItem key={rocket.id} rocket={rocket} />,
);

const Profile = () => {
  const rocketList = useSelector((action) => action.rockets.rocketLists);
  const reservedRockets = rocketList.filter((rocket) => rocket.reserved);
  return (
    <section className="profile-part">
      <div className="my-missions">
        <h2 className="missions-title">My Missions</h2>
        <div className="profile-items">
          <p>Telstar</p>
          <p>SES</p>
          <p>AsiaSat</p>
          ABS
        </div>
      </div>
      <div className="my-rockets">
        <h2 className="rockets-title">My Rockets</h2>
        <div className="profile-items">
          {reservedRockets.length > 0 ? <Reserved rockets={reservedRockets} /> : 'No Rocket Reserved'}
        </div>
      </div>
    </section>
  );
};

export default Profile;
