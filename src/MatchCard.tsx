import { Component } from "react";
import React from "react";
import { Match } from "./types/match";

type MatchCardProps = {
  match: Match;
};

class MatchCard extends Component<MatchCardProps> {
  static defaultProps = {
    match: Match,
  };

  render() {
    const { match } = this.props;
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            {match.home_team.abbreviation} ({match.home_team_score}) vs (
            {match.visitor_team_score}) {match.visitor_team.abbreviation}
          </h5>
          <h6 className="card-subtitle mb-2 text-muted">
            {match.home_team.name} vs {match.visitor_team.name}
          </h6>
          <p className="card-text"></p>
          {/* <a href="#" className="card-link">
            Card link
          </a>
          <a href="#" className="card-link">
            Another link
          </a> */}
        </div>
      </div>
    );
  }
}
export default MatchCard;
