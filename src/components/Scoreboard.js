import React from "react";

import backArrow from "../images/back-arrow.svg";

const retrievedObject = JSON.parse(window.localStorage.getItem('data'))
//let dummy = [{ name: "Johan", score: 100 }];

function Score({GoBackToStart }) {
  return (
    <div>
      <div className="backScoreboard" onClick={GoBackToStart}>
        <img src={backArrow} alt="Back" width="50px" height="50px" />
      </div>
      <h1 className="headerScoreboard">Poängtavla</h1>
      <div className="scoreboard">
        <table>
          <tr>
            <th>Namn</th>
            <th>Poäng</th>
          </tr>             
              <tr>
                <td>{retrievedObject.name}</td>
                <td>{retrievedObject.score}</td>

              </tr>              
          
          
        </table>
      </div>
    </div>
  );
}

class Scoreboard extends React.Component {
  render() {
    return (
      <Score
        appState={this.props.appState}
        GoBackToStart={this.props.GoBackToStart}
      />
    );
  }
}
export default Scoreboard;
