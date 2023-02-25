import React from 'react';
import { IoChevronForwardCircleSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const TeamsCreator = (props) => {
  const { nbaTeams } = props;
  const { conference, teamName, name } = nbaTeams;

  return (
    <Link to={name} className="link">
      <div className="team">
        <div className="back">
          <IoChevronForwardCircleSharp />
        </div>
        <div className="team-name">
          {teamName}
          <br />
          {conference}
        </div>
      </div>
    </Link>
  );
};

TeamsCreator.propTypes = {
  teamName: PropTypes.string.isRequired,
  conference: PropTypes.string.isRequired,

  name: PropTypes.string.isRequired,
  nbaTeams: PropTypes.string.isRequired,
};

export default TeamsCreator;
