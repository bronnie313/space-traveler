import React from 'react';
import './styles/Profile.css';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import ReservedRocketItem from './Profile/ReservedRocketItem';

export const Reserved = ({ rockets }) => rockets.map(
  (rocket) => <ReservedRocketItem key={rocket.id} rocket={rocket} />,
);

const Profile = () => {
  let missionItems = useSelector((store) => store.mission.missionItems);
  missionItems = missionItems.filter((items) => items.active);

  const rocketList = useSelector((action) => action.rockets.rocketLists);
  const reservedRockets = rocketList.filter((rocket) => rocket.reserved);

  return (
    <section className="profile-part">
      <div className="my-missions">
        <h2 className="missions-title">My Missions</h2>
        <div className="profile-items">
          {
            missionItems.map((mission) => (
              <JoinedMission
                Mission={mission.mission_name}
                missionId={mission.mission_id}
                key={mission.mission_id}
              />
            ))
          }
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

export const JoinedMission = (props) => {
  const { Mission } = props;
  return (
    <p>{Mission}</p>
  );
};

JoinedMission.propTypes = {
  Mission: PropTypes.string.isRequired,
};

export default Profile;
