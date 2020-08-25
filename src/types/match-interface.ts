import { TeamInterface } from "./team-interface";

export interface MatchInterface {
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
};
