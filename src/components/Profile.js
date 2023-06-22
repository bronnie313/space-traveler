import React from 'react';
import './styles/Profile.css';
// import { useSelector } from 'react-redux';

const Profile = () => (
// let missionItems = useSelector((store) => store.mission.missionItems);
// missionItems = missionItems.filter((items) => items.active);

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
        <p>Falcon 9</p>
        <p>Falcon 9</p>
        <p>Starship</p>
      </div>
    </div>
  </section>
);
export default Profile;
