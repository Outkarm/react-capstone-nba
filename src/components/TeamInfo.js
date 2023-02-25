import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import '../styles/style.css';
import { IoChevronForwardCircleSharp } from 'react-icons/io5';

const TeamInfo = () => {
  const { teaminfo } = useParams();
  const TeamData = useSelector((state) => state.nbaTeams.nbaTeams);

  const nbaTeamInfo = TeamData.find((team) => team.name === teaminfo);

  return (
    <div>
      <div className="nba-main-logo" />
      {nbaTeamInfo && (
        <ul>
          <li>
            <span>Name</span>
            <div className="det">
              <span>
                {nbaTeamInfo.teamName}
                {' '}
              </span>
              {' '}
              <IoChevronForwardCircleSharp />
            </div>
          </li>
          <li>
            <span>Known As</span>
            <div className="det">
              <span>
                {nbaTeamInfo.name}
                {' '}
              </span>
              <IoChevronForwardCircleSharp />
            </div>
          </li>
          <li>
            <span>City</span>
            <div className="det">
              <span>{nbaTeamInfo.city}</span>
              <IoChevronForwardCircleSharp />
            </div>
          </li>
          <li>
            <span>Confrence</span>
            <div className="det">
              {' '}
              <span>{nbaTeamInfo.conference}</span>
              <IoChevronForwardCircleSharp />
            </div>
          </li>
          <li>
            <span>Division</span>
            <div className="det">
              <span>{nbaTeamInfo.division}</span>
              <IoChevronForwardCircleSharp />
            </div>
          </li>
          <li>
            <span>Abbreviation</span>
            <div className="det">
              <span>{nbaTeamInfo.abbreviation}</span>
              <IoChevronForwardCircleSharp />
            </div>
          </li>
        </ul>
      )}
      {!nbaTeamInfo && <p>No Information is found!!</p>}
    </div>
  );
};

export default TeamInfo;
