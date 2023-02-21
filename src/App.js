import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import TeamsPage from "./components/TeamsPage";
import TeamPlayers from "./components/TeamPlayers";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<TeamsPage />} />
        <Route path="/:id" element={<TeamPlayers />} />
      </Routes>
    </div>
  );
}

export default App;
