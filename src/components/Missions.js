import React from 'react';
import PropTypes from 'prop-types';
import './styles/Missions.css';

const missions = [
  {
    Mission: 'Thaicom',
    Description: 'Thaicom is the name of a series of communication satellites operated from Thailand, and also the name of Thaicom Public company Limited',
    Status: 'NOT A MEMEBER',
    Other: 'Join Mission',
    id: 1,
  },
  {
    Mission: 'Telstar',
    Description: 'Thaicom is the name of a series of communication satellites operated from Thailand, and also the name of Thaicom Public company Limited',
    Status: 'Active Member',
    Other: 'Leave Mission',
    id: 2,
  },
  {
    Mission: 'Iridium NEXT',
    Description: 'Thaicom is the name of a series of communication satellites operated from Thailand, and also the name of Thaicom Public company Limited',
    Status: 'NOT A MEMEBER',
    Other: 'Join Mission',
    id: 3,
  },
  {
    Mission: 'Commercial Resupply Services',
    Description: 'Thaicom is the name of a series of communication satellites operated from Thailand, and also the name of Thaicom Public company Limited',
    Status: 'NOT A MEMEBER',
    Other: 'Join Mission',
    id: 4,
  },
];

const Missions = () => (
  <section className="missions">
    <Titles />
    {
      missions.map((mission) => {
        const {
          Mission, Description, Status, Other,
        } = mission;
        return (
          <Item
            Mission={Mission}
            Description={Description}
            Status={Status}
            Other={Other}
            key={mission.id}
          />
        );
      })
    }
  </section>
);

const Titles = () => (
  <div className="header">
    <h3 className="name name-header">Missions</h3>
    <h3 className="name name-header">Descriptions</h3>
    <h3 className="name name-header">Status</h3>
  </div>
);

const Item = (props) => {
  const {
    Mission, Description, Status, Other,
  } = props;

  return (
    <section>
      <div className="item-details">
        <h3 className="name">{Mission}</h3>
        <p className="description">{Description}</p>
        <h5 className="status">{Status}</h5>
        <h5 className="other">{Other}</h5>
      </div>
    </section>
  );
};

Item.propTypes = {
  Mission: PropTypes.string.isRequired,
  Description: PropTypes.string.isRequired,
  Status: PropTypes.string.isRequired,
  Other: PropTypes.string.isRequired,
};

export default Missions;
