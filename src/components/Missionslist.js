import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './styles/Missions.css';
import { useSelector, useDispatch } from 'react-redux';
import { getMissions } from './features/missions/missionsSlice';

const Missions = () => {
  const dispatch = useDispatch();

  const { missionItems, isLoading } = useSelector((store) => store.mission);

  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <section className="missions">
      <Titles />
      {missionItems.map((mission) => (
        <Item
          Mission={mission.mission_name}
          Description={mission.description}
          key={mission.mission_id}
        />
      ))}
      ;
    </section>
  );
};

const Titles = () => (
  <div className="header">
    <h3 className="name name-header">Missions</h3>
    <h3 className="name name-header">Descriptions</h3>
    <h3 className="name name-header">Status</h3>
  </div>
);

const Item = (props) => {
  const {
    Mission, Description,
  } = props;

  return (
    <section>
      <div className="item-details">
        <h3 className="name">{Mission}</h3>
        <p className="description">{Description}</p>
        <button type="button">Activate Member</button>
        <button type="button">Join Mission</button>
      </div>
    </section>
  );
};

Item.propTypes = {
  Mission: PropTypes.string.isRequired,
  Description: PropTypes.string.isRequired,
};

export default Missions;
