import { MatchInterface } from "./matchInterface";
import { TeamInterface } from "./teamInterface";

export class Match implements MatchInterface {
  public id: number;
  public date: Date;
  public home_team: TeamInterface;
  public home_team_score: number;
  public period: number;
  public postseason: boolean;
  public season: number;
  public status: string;
  public time: number;
  public visitor_team: TeamInterface;
  public visitor_team_score: number;

  constructor(
    id: number,
    date: Date,
    home_team: TeamInterface,
    home_team_score: number,
    period: number,
    postseason: boolean,
    season: number,
    status: string,
    time: number,
    visitor_team: TeamInterface,
    visitor_team_score: number
  ) {
    this.id = id;
    this.date = date;
    this.home_team = home_team;
    this.home_team_score = home_team_score;
    this.period = period;
    this.postseason = postseason;
    this.season = season;
    this.status = status;
    this.time = time;
    this.visitor_team = visitor_team;
    this.visitor_team_score = visitor_team_score;
  }

}
