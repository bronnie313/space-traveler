import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import './rockets.css';
import { fetchRockets } from '../../redux/rockets/rocketsSlice';
import { RocketItem } from './RocketItem';

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
