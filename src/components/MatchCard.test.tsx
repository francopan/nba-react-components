import React from "react";
import ReactDOM from "react-dom";
import MatchCard from "./MatchCard";
import { Match } from "../types/match";
import { Team } from "../types/team";

const div = document.createElement("div");
let lakers = new Team(
  1,
  "LAL",
  "Los Angeles",
  "East",
  "First",
  "Los Angeles Lakers",
  "Lakers"
);

let bulls = new Team(
  1,
  "CHI",
  "Chicago",
  "East",
  "First",
  "Chicago Bulls",
  "Bulls"
);

let match: Match = new Match(
  0,
  new Date(),
  lakers,
  67,
  1,
  false,
  29,
  "FINISHED",
  90,
  bulls,
  0
);

it("renders without crashing", () => {
  ReactDOM.render(<MatchCard match={match} />, div);
});
