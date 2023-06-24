import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import './styles/Item.css';
import { joinMission, leaveMission } from './features/missions/missionsSlice';

const Item = (props) => {
  const { active } = props || false;
  const {
    Mission, Description, isEven, missionId,
  } = props;

  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    if (active) {
      dispatch(leaveMission(missionId));
    } else {
      dispatch(joinMission(missionId));
    }
  };

  return (
    <tbody className="tbody">
      <tr style={{ backgroundColor: isEven ? '#f2f2f2' : 'transparent' }}>
        <td style={{ width: '200px' }}><h3>{Mission}</h3></td>
        <td><p className="description">{Description}</p></td>
        <td style={{ width: '120px' }}>
          <button type="button" className={active ? 'activeText' : 'inactiveBtn'}>
            {active ? 'Active Member' : 'Not A Member'}
          </button>
        </td>
        <td style={{ width: '100px' }}>
          <button type="button" onClick={handleClick} className={active ? 'activeBtn' : ''}>
            {active ? 'Leave Mission' : 'Join Mission'}
          </button>
        </td>
      </tr>
    </tbody>
  );
};

Item.propTypes = {
  Mission: PropTypes.string.isRequired,
  Description: PropTypes.string.isRequired,
  isEven: PropTypes.bool.isRequired,
  missionId: PropTypes.string.isRequired,
};

export default Item;
