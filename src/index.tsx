import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MatchCardList from "./components/MatchCardList";
import * as serviceWorker from "./serviceWorker";
import { Match } from "./types/match";
import { Team } from "./types/team";

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

let matches = [];
matches.push(match);

ReactDOM.render(
  <React.StrictMode>
    <div className="container p-5">
      <MatchCardList models={matches} />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
