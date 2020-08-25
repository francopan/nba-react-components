import { Component } from "react";
import React from "react";
import { Match } from "../types/match";
import { TeamLogo } from "../types/team-logo";

// Properties definition for a card
type MatchCardProps = {
  match: Match;
};

class MatchCard extends Component<MatchCardProps> {
  private teamLogo: TeamLogo;

  constructor(props: MatchCardProps) {
    super(props);
    this.teamLogo = new TeamLogo();
  }

  render() {
    const { match } = this.props;
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title scoreboard">
            <img
              className="team-badge"
              alt="Home Team Logo"
              src={this.teamLogo.getLogo(match.home_team.abbreviation)}
            />{" "}
            {match.home_team.abbreviation} {match.home_team_score} vs{" "}
            {match.visitor_team_score} {match.visitor_team.abbreviation}{" "}
            <img
              className="team-badge"
              alt="Visitor Team Logo"
              src={this.teamLogo.getLogo(match.visitor_team.abbreviation)}
            />
          </h5>
          <h6 className="card-subtitle mb-2 text-muted">
            {match.home_team.name} vs {match.visitor_team.name}
          </h6>
          <p className="card-text"><a href={"#match/" + match.id}>See Stats</a></p>
        </div>
      </div>
    );
  }
}
export default MatchCard;
