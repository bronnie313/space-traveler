import { useSelector } from 'react-redux';
import './rockets.css';
import RocketItem from './RocketItem';

const Rocket = ({ rockets }) => {
  const rocketLists = rockets.map((rocket) => (
    <RocketItem rocket={rocket} key={Math.random() * 10000} />
  ));

  return rocketLists;
};

const Rockets = () => {
  const rocketLists = useSelector((state) => state.rockets);
  return (
    <div className="rockets">
      <ul className="rocket-list-items">
        {rocketLists.error !== '' ? <div className="error"><span>{rocketLists.error}</span></div> : null}
        {rocketLists.isLoading ? <div className="loading"><span /></div> : <Rocket rockets={rocketLists.rocketLists} />}
      </ul>
    </div>
  );
};

export default Rockets;
