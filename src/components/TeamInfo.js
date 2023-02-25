import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import '../styles/style.css';
import { IoChevronForwardCircleSharp } from 'react-icons/io5';
import redNbaLogo from '../assets/nba-logos/redNbaLogo.png';

const TeamInfo = () => {
  const { teaminfo } = useParams();
  const TeamData = useSelector((state) => state.nbaTeams.nbaTeams);

  const nbaTeamInfo = TeamData.find((team) => team.name === teaminfo);

  return (
    <div>
      <div className="nba-main-logo" />
      {nbaTeamInfo && (
        <ul>
          <div className="head">
            <img src={redNbaLogo} className="nba-main-logo" alt="red" />
            <div className="title">
              {nbaTeamInfo.teamName}
              {' '}
              <br />
              Team Info
            </div>
            <div />
          </div>
          <li className="light">
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
          <li className="dark">
            <span>Known As</span>
            <div className="det">
              <span>
                {nbaTeamInfo.name}
                {' '}
              </span>
              <IoChevronForwardCircleSharp />
            </div>
          </li>
          <li className="light">
            <span>City</span>
            <div className="det">
              <span>{nbaTeamInfo.city}</span>
              <IoChevronForwardCircleSharp />
            </div>
          </li>
          <li className="dark">
            <span>Confrence</span>
            <div className="det">
              {' '}
              <span>{nbaTeamInfo.conference}</span>
              <IoChevronForwardCircleSharp />
            </div>
          </li>
          <li className="light">
            <span>Division</span>
            <div className="det">
              <span>{nbaTeamInfo.division}</span>
              <IoChevronForwardCircleSharp />
            </div>
          </li>
          <li className="dark">
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
