import React from "react";

import backArrow from "../images/back-arrow.svg";


function Score({ GoBackToStart }) {
  const retrievedObject = JSON.parse(window.localStorage.getItem('data'))
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
          
          {
          retrievedObject.map(({ name, score }) => {
            return (
              <tr>
                <td>{name}</td>
                <td>{score}</td>
              </tr>
            )
          })}
        </table>
      </div>
    </div>
  );
}

export default Score;
