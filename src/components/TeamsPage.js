import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getNbaTeamsData } from "../redux/nbaTeams/nbaTeamSlice";
import TeamsCreator from "./TeamsCreator";

const TeamsPage = () => {
  const nbaTeams = useSelector((state) => state.nbaTeams.nbaTeams);
  const theDispatch = useDispatch();

  useEffect(() => {
    theDispatch(getNbaTeamsData());
  }, [theDispatch]);

  return (
    <div>
      <div>East & West</div>
      <div>
        {nbaTeams.map((nbaTeams) => (
          <TeamsCreator key={nbaTeams.id} nbaTeams={nbaTeams} />
        ))}
      </div>
    </div>
  );
};

export default TeamsPage;
