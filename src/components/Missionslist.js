import './styles/Missions.css';
import { useSelector } from 'react-redux';
import Item from './Item';

const Missions = () => {

  const { missionItems, isLoading } = useSelector((store) => store.mission);

  if (isLoading) {
    return (
      <div className="loading">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <section>
      <table className="missions">
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
            key={mission.mission_id}
            isEven={i % 2 === 0}
            active={mission.active}
          />
        ))}
      </table>
      ;
    </section>
  );
};

export default Missions;
