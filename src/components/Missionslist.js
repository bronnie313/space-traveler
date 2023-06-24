import './styles/Missions.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { getMissions } from './features/missions/missionsSlice';
import Item from './Item';

export const SingleMission = (props) => {
  const { missionItems } = props;
  return (
    <table className="missions" key={Math.random() * 1000}>
      <thead>
        <tr>
          <th><h3>Missions</h3></th>
          <th><h3>Description</h3></th>
          <th><h3>Status</h3></th>
          <th>Actions</th>
        </tr>
      </thead>
      {missionItems.map((mission, i) => (
        <Item
          Mission={mission.mission_name}
          Description={mission.description}
          missionId={mission.mission_id}
          key={Math.random() * 1000}
          isEven={i % 2 === 0}
          active={(mission.active !== null ? mission.active : false)}
        />
      ))}
    </table>
  );
};

SingleMission.propTypes = {
  missionItems: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

const Missions = () => {
  const { missionItems, isLoading, isFetched } = useSelector((store) => store.mission);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isFetched) {
      dispatch(getMissions());
    }
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <section>
      <SingleMission missionItems={missionItems} />
    </section>
  );
};

export default Missions;
