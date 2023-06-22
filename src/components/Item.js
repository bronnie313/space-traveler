import React from 'react';
import PropTypes from 'prop-types';
import './styles/Item.css';

const Item = (props) => {
  const {
    Mission, Description, isEven,
  } = props;

  return (
    <tbody className="tbody">
      <tr style={{ backgroundColor: isEven ? '#f2f2f2' : 'transparent' }}>
        <td style={{ width: '200px' }}><h3>{Mission}</h3></td>
        <td><p className="description">{Description}</p></td>
        <td style={{ width: '100px' }}><button type="button">Not Member</button></td>
        <td style={{ width: '100px' }}><button type="button">Join Mission</button></td>
      </tr>
    </tbody>
  );
};

Item.propTypes = {
  Mission: PropTypes.string.isRequired,
  Description: PropTypes.string.isRequired,
  isEven: PropTypes.bool.isRequired,
};

export default Item;
