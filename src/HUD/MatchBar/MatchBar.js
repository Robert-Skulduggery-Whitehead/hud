import React from "react";
import "./MatchBar.css";
import SeriesInfo from "./SeriesInfo/SeriesInfo";
import GameInfo from "./GameInfo/GameInfo";
import Team from "./Team/Team";
import Timer from "./Timer/Timer";
//import all

export default class MatchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bombPlantTimer: 0,
      bombDefuseTimer: 0,
      bombCountdownTimer: 0,
      round: 1,
      totalRounds: 30,
    };
  }

  componentDidUpdate(prevProps) {
    let tempRound = this.state.round;
    let tempTotalRounds = 30;
    if (tempRound > 30) {
      tempRound = tempRound - 30;
      while (tempRound > 6) {
        tempRound = tempRound - 6;
        tempTotalRounds = tempTotalRounds + 6;
      }
    }
    if (prevProps !== this.props) {
      this.setState({
        round: tempRound,
        totalRounds: tempTotalRounds,
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <SeriesInfo
          series={this.props.series}
          teams={this.props.teams}
          round={this.props.round}
        />
        <GameInfo
          series={this.props.series}
          teams={this.props.teams}
          sides={this.props.sides}
          round={this.state.round}
          totalRounds={this.state.totalRounds}
        />
        <Team
          class={"teamLeft"}
          team={this.props.teams.left}
          bomb={this.props.bomb}
          allplayers={this.props.allplayers}
          map={this.props.map}
          side={this.props.sides.left}
        ></Team>
        <Team
          class={"teamRight"}
          team={this.props.teams.right}
          bomb={this.props.bomb}
          allplayers={this.props.allplayers}
          map={this.props.map}
          side={this.props.sides.right}
        ></Team>
        <Timer
          phase_countdowns={this.props.phase_countdowns}
          bomb={this.props.bomb}
          round={this.props.round}
        ></Timer>
      </React.Fragment>
    );
  }
}
