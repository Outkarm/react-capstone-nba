import React from "react";
import { useDispatch } from "react-redux";
import { IoChevronForwardCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const TeamsCreator = (props) => {
  const { nbaTeams } = props;
  const { id, abbreviation, city, conference, division, teamName, name } =
    nbaTeams;

  return (
    <Link to={id}>
      <div>
        <IoChevronForwardCircleSharp />
      </div>
      <div>
        {teamName}
        <br />
        {conference}
      </div>
    </Link>
  );
};

TeamsCreator.PropTypes = {
  teamName: PropTypes.string.isRequired,
  conference: PropTypes.string.isRequired,
  teamId: PropTypes.number.isRequired,
};

export default TeamsCreator;
