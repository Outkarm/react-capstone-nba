import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getNbaPlayersData } from "../redux/nbaTeams/nbaTeamSlice";

const TeamPlayers = (props) => {
  const { nbaPlayers } = props;
  const {
    team,
    firstName,
    lastName,
    position,
    heightFeet,
    heightInches,
    weightPounds,
  } = nbaPlayers;
  const theDispatch = useDispatch();
  const { id } = useParams();
  const PlayerData = useSelector((state) => state.nbaPlayers.nbaPlayers);
  useEffect(() => {
    theDispatch(getNbaPlayersData());
  }, [theDispatch]);
  const nbaPlayer = PlayerData.find((team) => team.team.id === id);
  return (
    <div>
      {nbaPlayer && (
        <>
          {" "}
          <div>
            <p>
              {lastName} {firstName}
            </p>{" "}
            <p>Position : {position}</p>
            <p>
              H {heightFeet}ftnbaPlayer.{heightInches}in
            </p>
            <p>W {weightPounds}</p>{" "}
          </div>
          : null}{" "}
        </>
      )}
      {!nbaPlayer && <p>No Player is found!!</p>}
    </div>
  );
};

export default TeamPlayers;
