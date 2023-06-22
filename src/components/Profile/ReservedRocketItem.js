import PropTypes from 'prop-types';

const ReservedRocketItem = ({ rocket }) => {
  const { id, name } = rocket;
  return (
    <p key={id}>{name}</p>
  );
};

ReservedRocketItem.propTypes = {
  rocket: PropTypes.oneOfType([PropTypes.any, PropTypes.object]).isRequired,
};

export default ReservedRocketItem;
