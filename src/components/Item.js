import React from 'react';
import PropTypes from 'prop-types';
import './styles/Item.css';

const Item = (props) => {
  const {
    Mission, Description,
  } = props;

  return (
    <tbody>
      <tr>
        <td><h3>{Mission}</h3></td>
        <td><p>{Description}</p></td>
        <td><button type="button">Activate Member</button></td>
        <td><button type="button">Join Mission</button></td>
      </tr>
    </tbody>
  );
};

Item.propTypes = {
  Mission: PropTypes.string.isRequired,
  Description: PropTypes.string.isRequired,
};

export default Item;
