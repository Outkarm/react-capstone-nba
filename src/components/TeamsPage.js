import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IoSearch } from 'react-icons/io5';
import { getNbaTeamsData } from '../redux/nbaTeams/nbaTeamSlice';
import TeamsCreator from './TeamsCreator';
import '../styles/style.css';
import redNbaLogo from '../assets/nba-logos/redNbaLogo.png';

const TeamsPage = () => {
  const [search, setSearch] = useState('');
  const nbaTeams = useSelector((state) => state.nbaTeams.nbaTeams);
  const theDispatch = useDispatch();

  useEffect(() => {
    if (nbaTeams.length === 0) {
      theDispatch(getNbaTeamsData());
    }
  }, [theDispatch, nbaTeams.length]);

  const inputHandler = (e) => {
    const input = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
    setSearch(input);
  };

  return (
    <div className="cont">
      <div className="head">
        <img src={redNbaLogo} className="nba-main-logo" alt="red" />
        <div className="title">National Basketball Association</div>
        <div />
      </div>

      <form className="form-search">
        <input
          className="input-search"
          onChange={inputHandler}
          value={search}
          type="search"
          placeholder="search country-info here"
        />
        <IoSearch />
      </form>
      <div>East & West</div>
      <div className="nba-teams">
        {nbaTeams
          .filter((item) => (search === '' ? item : item.teamName.includes(search)))
          .map((nbaTeams) => (
            <TeamsCreator key={nbaTeams.name} nbaTeams={nbaTeams} />
          ))}
      </div>
    </div>
  );
};

export default TeamsPage;
