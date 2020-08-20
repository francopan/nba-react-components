import React, { Component } from "react";
import MatchCard from "./MatchCard";

type MatchCardListProps = {
  models: any;
};

class MatchCardList extends Component<MatchCardListProps> {
  constructor(props: MatchCardListProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.forceUpdate();
  }
  // componentDidMount() {
  //   this.props.models.on("change", "add", "remove", this.handleChange);
  // }

  // componentWillUnmount() {
  //   this.props.models.off("change", "add", "remove", this.handleChange);
  // }

  render() {
    const { models } = this.props;
    return (
      <div className="card-column">
        {models.map((match: any, index: number) => (
          <MatchCard key={index} match={match.attributes} />
        ))}
      </div>
    );
  }
}
export default MatchCardList;
